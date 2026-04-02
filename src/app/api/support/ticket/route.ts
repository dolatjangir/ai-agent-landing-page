import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { Resend } from 'resend';

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { 
      type, 
      inquiryType, 
      name, 
      email, 
      subject, 
      message, 
      priority = 'medium',
      callbackTime 
    } = body;

    // Validation
    if (!type || !inquiryType || !name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Get request metadata
    const ipAddress = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    const userAgent = req.headers.get('user-agent') || '';

    // Save to database
    const ticket = await prisma.supportTicket.create({
      data: {
        type,
        inquiryType,
        name,
        email: email.toLowerCase(),
        subject,
        message,
        priority,
        callbackTime: callbackTime || null,
        status: 'open',
        source: 'website',
        ipAddress,
        userAgent
      }
    });

    // Determine recipient based on inquiry type
    let recipientEmail = process.env.SUPPORT_EMAIL!;
    if (inquiryType === 'sales' || inquiryType === 'partners') {
      recipientEmail = process.env.SALES_EMAIL!;
    }

    // Send notification to team
    await resend.emails.send({
      from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
      to: recipientEmail,
      subject: `[${inquiryType.toUpperCase()}] ${subject}`,
      html: `
        <h2>New Support Ticket #${ticket.id.slice(0, 8)}</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Type:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${type}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Inquiry:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${inquiryType}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Name:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${name}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Priority:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${priority}</td></tr>
          ${callbackTime ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Callback:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${callbackTime}</td></tr>` : ''}
        </table>
        <h3>Message:</h3>
        <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${message.replace(/\n/g, '<br>')}</p>
        <p><a href="mailto:${email}?subject=Re: ${subject}" style="background: #0066cc; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Reply to Customer</a></p>
      `,
      replyTo: email
    });

    // Send confirmation to user
    const confirmationMessages: Record<string, string> = {
      chat: "We've received your chat request. An agent will join shortly.",
      email: "We've received your email and will respond within 4 hours.",
      callback: `We've scheduled your callback for ${callbackTime || 'ASAP'}. Expect a call within 15 minutes.`,
      phone: "Thanks for calling. If you need further assistance, we're here 24/7."
    };

    await resend.emails.send({
      from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
      to: email,
      subject: `Ticket Received: ${subject}`,
      html: `
        <h2>Hi ${name},</h2>
        <p>${confirmationMessages[type] || "We've received your request."}</p>
        <p><strong>Ticket ID:</strong> #${ticket.id.slice(0, 8)}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p>We'll keep you updated on the progress. You can reply to this email to add more information.</p>
        <br>
        <p>Best regards,<br>EstateAI Support Team</p>
      `
    });

    return NextResponse.json({
      success: true,
      ticketId: ticket.id,
      message: "Ticket created successfully"
    });

  } catch (error) {
    console.error('Support ticket error:', error);
    return NextResponse.json(
      { success: false, error: "Failed to create ticket" },
      { status: 500 }
    );
  }
}