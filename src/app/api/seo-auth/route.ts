import { NextRequest, NextResponse } from 'next/server';
import { compare } from 'bcryptjs';
import { prisma } from '../../../../lib/prisma';
 // Your Prisma client



export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Validation
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password required' },
        { status: 400 }
      );
    }

   

    // Option 2: Hardcoded check (for quick setup)
    const validEmail = email === 'admin@estateai.com';
    const validPassword = password === 'estateai2024!'; // Change this!

    if (!validEmail || !validPassword) {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Create simple token (24h expiry)
    const token = Buffer.from(
      JSON.stringify({
        email,
        exp: Date.now() + 24 * 60 * 60 * 1000,
      })
    ).toString('base64');

    return NextResponse.json({
      success: true,
      token,
    });

  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { success: false, message: 'Authentication failed' },
      { status: 500 }
    );
  }
}