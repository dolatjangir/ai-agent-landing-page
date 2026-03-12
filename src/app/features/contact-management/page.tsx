"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from "zod";
import {
  Send,
  Building2,
  Users,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ChevronDown,
  Shield,
  Clock,
  HeadphonesIcon,
  MessageSquare,
} from "lucide-react";

// ==========================================
// Validation Schema
// ==========================================
export const contactFormSchema = z.object({
  firstName: z.string().min(1),
  email: z.string().email(),
  inquiryType: z.enum(["general", "demo", "support", "partnership"]),
  leadSource: z.string(),
  consent: z.boolean(),
  message: z.string().optional(),
  lastName: z.string().optional(),
  phone: z.string().optional(),
  companyName: z.string().optional(),
  jobTitle: z.string().optional(),
  companySize: z.string().optional(),
  industry: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

// ==========================================
// Reusable Input Components
// ==========================================

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

const InputField = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, required, className = "", ...props }, ref) => (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-[var(--text-primary)]">
        {label}
        {required && <span className="text-[var(--color-error-500)] ml-1">*</span>}
        {!required && (
          <span className="text-[var(--text-tertiary)] ml-1 text-xs">(Optional)</span>
        )}
      </label>
      <input
        ref={ref}
        className={`
          w-full px-4 py-3 rounded-[var(--radius-xl)] 
          bg-[var(--bg-primary)] border border-[var(--border-medium)]
          text-[var(--text-primary)] placeholder-[var(--text-tertiary)]
          focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent
          focus:bg-[var(--bg-secondary)]
          transition-all duration-[var(--duration-fast)]
          disabled:opacity-50 disabled:cursor-not-allowed
          ${error ? "border-[var(--color-error-500)] focus:ring-[var(--color-error-500)]" : ""}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="flex items-center gap-1.5 text-sm text-[var(--color-error-500)]">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  )
);
InputField.displayName = "InputField";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  required?: boolean;
}

const TextAreaField = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, required, className = "", ...props }, ref) => (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-[var(--text-primary)]">
        {label}
        {required && <span className="text-[var(--color-error-500)] ml-1">*</span>}
        {!required && (
          <span className="text-[var(--text-tertiary)] ml-1 text-xs">(Optional)</span>
        )}
      </label>
      <textarea
        ref={ref}
        rows={4}
        className={`
          w-full px-4 py-3 rounded-[var(--radius-xl)] 
          bg-[var(--bg-primary)] border border-[var(--border-medium)]
          text-[var(--text-primary)] placeholder-[var(--text-tertiary)]
          focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent
          focus:bg-[var(--bg-secondary)]
          transition-all duration-[var(--duration-fast)] resize-none
          disabled:opacity-50 disabled:cursor-not-allowed
          ${error ? "border-[var(--color-error-500)] focus:ring-[var(--color-error-500)]" : ""}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="flex items-center gap-1.5 text-sm text-[var(--color-error-500)]">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  )
);
TextAreaField.displayName = "TextAreaField";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: { value: string; label: string }[];
  required?: boolean;
}

const SelectField = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, required, className = "", ...props }, ref) => (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-[var(--text-primary)]">
        {label}
        {required && <span className="text-[var(--color-error-500)] ml-1">*</span>}
        {!required && (
          <span className="text-[var(--text-tertiary)] ml-1 text-xs">(Optional)</span>
        )}
      </label>
      <div className="relative">
        <select
          ref={ref}
          className={`
            w-full px-4 py-3 rounded-[var(--radius-xl)] 
            bg-[var(--bg-primary)] border border-[var(--border-medium)]
            text-[var(--text-primary)]
            focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent
            focus:bg-[var(--bg-secondary)]
            transition-all duration-[var(--duration-fast)] appearance-none
            disabled:opacity-50 disabled:cursor-not-allowed
            ${error ? "border-[var(--color-error-500)] focus:ring-[var(--color-error-500)]" : ""}
            ${className}
          `}
          {...props}
        >
          <option value="">Select {label}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-tertiary)] pointer-events-none" />
      </div>
      {error && (
        <p className="flex items-center gap-1.5 text-sm text-[var(--color-error-500)]">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  )
);
SelectField.displayName = "SelectField";

// ==========================================
// Main Contact Section Component
// ==========================================

const ContactManagementSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [showQualifiedFields, setShowQualifiedFields] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      inquiryType: "general",
      leadSource: "website_contact_page",
      consent: false,
    },
  });

  const inquiryType = watch("inquiryType");
  const consent = watch("consent");

  // Progressive profiling: Show qualified fields for demo/partnership inquiries
  React.useEffect(() => {
    if (inquiryType === "demo" || inquiryType === "partnership") {
      setShowQualifiedFields(true);
    } else {
      setShowQualifiedFields(false);
    }
  }, [inquiryType]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call - Replace with your actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
      
      console.log("Form submitted:", data);
      setSubmitStatus("success");
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const companySizeOptions = [
    { value: "1-10", label: "1-10 employees" },
    { value: "11-50", label: "11-50 employees" },
    { value: "51-200", label: "51-200 employees" },
    { value: "200+", label: "200+ employees" },
  ];

  const industryOptions = [
    { value: "technology", label: "Technology" },
    { value: "healthcare", label: "Healthcare" },
    { value: "finance", label: "Finance & Banking" },
    { value: "manufacturing", label: "Manufacturing" },
    { value: "retail", label: "Retail & E-commerce" },
    { value: "education", label: "Education" },
    { value: "real-estate", label: "Real Estate" },
    { value: "hospitality", label: "Hospitality & Travel" },
    { value: "other", label: "Other" },
  ];

  const inquiryOptions = [
    { value: "general", label: "General Inquiry" },
    { value: "demo", label: "Request a Demo" },
    { value: "support", label: "Technical Support" },
    { value: "partnership", label: "Partnership Opportunity" },
  ];

  const faqs = [
    {
      question: "How quickly will I hear back?",
      answer:
        "Our team typically responds within 2 hours during business hours. For demo requests, we usually schedule within 24 hours.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We're SOC 2 Type II certified and GDPR compliant. Your data is encrypted in transit and at rest.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can upgrade, downgrade, or cancel anytime. We prorate charges so you only pay for what you use.",
    },
  ];

  return (
    <section className="py-[var(--space-24)] bg-[var(--bg-secondary)]" id="contact">
      <div className="max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-[var(--space-16)]">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary-100)] text-[var(--color-primary-700)] rounded-full text-sm font-semibold mb-6">
            <MessageSquare className="w-4 h-4" />
            Get in Touch
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-[var(--space-4)] text-[var(--text-primary)]">
            Let's Start a Conversation
          </h2>
          <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
            Whether you're looking to streamline operations, scale your team, or explore partnership opportunities, 
            we're here to help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-[var(--space-12)] items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-3">
            <div className="bg-[var(--bg-primary)] rounded-[var(--radius-3xl)] p-[var(--space-8)] lg:p-[var(--space-12)] shadow-xl border border-[var(--border-light)]">
              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-[var(--color-success-50)] border border-[var(--color-success-200)] rounded-[var(--radius-xl)] flex items-center gap-3 text-[var(--color-success-700)]">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-sm">We'll get back to you within 2 hours.</p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-[var(--color-error-50)] border border-[var(--color-error-200)] rounded-[var(--radius-xl)] flex items-center gap-3 text-[var(--color-error-700)]">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Something went wrong</p>
                    <p className="text-sm">Please try again or email us directly.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Inquiry Type Selection */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[var(--text-primary)]">
                    How can we help you?
                    <span className="text-[var(--color-error-500)] ml-1">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {inquiryOptions.map((option) => (
                      <label
                        key={option.value}
                        className={`
                          cursor-pointer relative flex flex-col items-center p-4 rounded-[var(--radius-xl)] border-2 transition-all duration-[var(--duration-fast)]
                          ${
                            inquiryType === option.value
                              ? "border-[var(--color-primary-500)] bg-[var(--color-primary-50)]"
                              : "border-[var(--border-medium)] hover:border-[var(--border-dark)] bg-[var(--bg-secondary)]"
                          }
                        `}
                      >
                        <input
                          type="radio"
                          value={option.value}
                          {...register("inquiryType")}
                          className="sr-only"
                        />
                        <span
                          className={`text-sm font-medium text-center ${
                            inquiryType === option.value
                              ? "text-[var(--color-primary-700)]"
                              : "text-[var(--text-secondary)]"
                          }`}
                        >
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Essential Fields */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <InputField
                    label="First Name"
                    required
                    placeholder="John"
                    error={errors.firstName?.message}
                    {...register("firstName")}
                  />
                  <InputField
                    label="Last Name"
                    placeholder="Doe"
                    error={errors.lastName?.message}
                    {...register("lastName")}
                  />
                </div>

                <InputField
                  label="Email Address"
                  type="email"
                  required
                  placeholder="john@company.com"
                  error={errors.email?.message}
                  {...register("email")}
                />

                {/* Qualified Lead Fields - Progressive Profiling */}
                {showQualifiedFields && (
                  <div className="space-y-6 pt-6 border-t border-[var(--border-light)] animate-in slide-in-from-top-2 duration-300">
                    <p className="text-sm font-medium text-[var(--text-primary)] flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[var(--color-primary-500)]" />
                      Company Information
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      <InputField
                        label="Company Name"
                        placeholder="Acme Inc."
                        error={errors.companyName?.message}
                        {...register("companyName")}
                      />
                      <InputField
                        label="Job Title"
                        placeholder="Head of Operations"
                        error={errors.jobTitle?.message}
                        {...register("jobTitle")}
                      />
                    </div>

                    <InputField
                      label="Phone Number"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      error={errors.phone?.message}
                      {...register("phone")}
                    />

                    <div className="grid sm:grid-cols-2 gap-6">
                      <SelectField
                        label="Company Size"
                        options={companySizeOptions}
                        error={errors.companySize?.message}
                        {...register("companySize")}
                      />
                      <SelectField
                        label="Industry"
                        options={industryOptions}
                        error={errors.industry?.message}
                        {...register("industry")}
                      />
                    </div>
                  </div>
                )}

                {/* Message Field */}
                <TextAreaField
                  label="Message"
                  placeholder="Tell us about your project or questions..."
                  error={errors.message?.message}
                  {...register("message")}
                />

                {/* Hidden Fields */}
                <input type="hidden" {...register("leadSource")} />

                {/* GDPR Consent */}
                <div className="pt-4">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        {...register("consent")}
                        className="peer sr-only"
                      />
                      <div
                        className={`
                          w-5 h-5 rounded border-2 transition-all duration-[var(--duration-fast)]
                          ${
                            consent
                              ? "bg-[var(--color-primary-500)] border-[var(--color-primary-500)]"
                              : "border-[var(--border-medium)] group-hover:border-[var(--border-dark)]"
                          }
                        `}
                      >
                        {consent && <CheckCircle2 className="w-4 h-4 text-white absolute top-0.5 left-0.5" />}
                      </div>
                    </div>
                    <span className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      I agree to the processing of my personal data according to the{" "}
                      <a href="/privacy" className="text-[var(--color-primary-600)] hover:underline">
                        Privacy Policy
                      </a>
                      . You can unsubscribe at any time.
                      <span className="text-[var(--color-error-500)] ml-1">*</span>
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="mt-2 flex items-center gap-1.5 text-sm text-[var(--color-error-500)]">
                      <AlertCircle className="w-4 h-4" />
                      {errors.consent.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !consent}
                  className={`
                    w-full py-4 px-8 rounded-[var(--radius-xl)] font-semibold text-lg
                    flex items-center justify-center gap-2
                    transition-all duration-[var(--duration-fast)]
                    ${
                      isSubmitting || !consent
                        ? "bg-[var(--bg-tertiary)] text-[var(--text-tertiary)] cursor-not-allowed"
                        : "bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-500)] text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    }
                  `}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-[var(--text-tertiary)]">
                  <Shield className="w-4 h-4 inline-block mr-1 align-text-bottom" />
                  Your information is secure and will never be shared with third parties.
                </p>
              </form>
            </div>
          </div>

          {/* Right Column: Info & Trust Signals */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Info Card */}
            <div className="bg-[var(--bg-primary)] rounded-[var(--radius-3xl)] p-[var(--space-8)] shadow-lg border border-[var(--border-light)]">
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-[var(--radius-xl)] bg-[var(--color-primary-100)] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[var(--color-primary-600)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-primary)]">Email Us</p>
                    <a
                      href="mailto:hello@staypilot.com"
                      className="text-[var(--text-secondary)] hover:text-[var(--color-primary-600)] transition-colors"
                    >
                      hello@staypilot.com
                    </a>
                    <p className="text-sm text-[var(--text-tertiary)] mt-1">
                      For general inquiries
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-[var(--radius-xl)] bg-[var(--color-secondary-100)] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[var(--color-secondary-600)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-primary)]">Call Us</p>
                    <a
                      href="tel:+1-800-STAYPILOT"
                      className="text-[var(--text-secondary)] hover:text-[var(--color-secondary-600)] transition-colors"
                    >
                      +1 (800) 782-9745
                    </a>
                    <p className="text-sm text-[var(--text-tertiary)] mt-1">
                      Mon-Fri, 9am-6pm EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-[var(--radius-xl)] bg-[var(--color-success-100)] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[var(--color-success-600)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-primary)]">Visit Us</p>
                    <p className="text-[var(--text-secondary)]">
                      350 Fifth Avenue, Suite 2500
                      <br />
                      New York, NY 10118
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-gradient-to-br from-[var(--color-primary-600)] to-[var(--color-primary-700)] rounded-[var(--radius-3xl)] p-[var(--space-8)] text-white shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6" />
                <span className="text-3xl font-bold">500+</span>
              </div>
              <p className="text-[var(--color-primary-100)] mb-6">
                Businesses trust StayPilot to manage their properties and streamline operations.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[var(--color-primary-200)]" />
                  <span className="text-sm">2hr average response time</span>
                </div>
                <div className="flex items-center gap-3">
                  <HeadphonesIcon className="w-5 h-5 text-[var(--color-primary-200)]" />
                  <span className="text-sm">24/7 priority support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-primary-200)]" />
                  <span className="text-sm">99.9% uptime guarantee</span>
                </div>
              </div>
            </div>

            {/* Quick FAQ */}
            <div className="bg-[var(--bg-primary)] rounded-[var(--radius-3xl)] p-[var(--space-8)] shadow-lg border border-[var(--border-light)]">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">
                Quick Answers
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-[var(--border-light)] last:border-0 pb-4 last:pb-0">
                    <p className="font-medium text-[var(--text-primary)] text-sm mb-1">
                      {faq.question}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactManagementSection;