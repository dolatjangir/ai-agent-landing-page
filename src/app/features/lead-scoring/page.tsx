"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Send,
  Building2,
  MapPin,
  BedDouble,
  Bath,
  TrendingUp,
  Target,
  Clock,
  UserCheck,
  DollarSign,
  AlertCircle,
  CheckCircle2,
  Loader2,
  ChevronDown,
  Flame,
  Thermometer,
  Snowflake,
  BarChart3,
  Home,
  Calendar,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";

// ==========================================
// Types & Interfaces
// ==========================================

interface LeadScore {
  score: number;
  category: "HOT" | "WARM" | "COLD";
  breakdown: ScoreBreakdown[];
}

interface ScoreBreakdown {
  field: string;
  points: number;
  reason: string;
}

// ==========================================
// Validation Schema
// ==========================================

const leadFormSchema = z.object({
  // Contact Info
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[\d\s\-\+\(\)]+$/, "Please enter a valid phone number"),

  // Property Details
  propertyLocation: z.string().min(2, "Property location is required"),
 propertyType: z
  .string()
  .min(1, "Property type is required")
  .refine(
    (val) =>
      ["entire_home", "apartment", "villa", "vacation_home"].includes(val),
    {
      message: "Invalid property type",
    }
  ),
  bedrooms: z.enum(["1", "2", "3", "4", "5+"] as const, {
    message: "Please select number of bedrooms",
  }),
  bathrooms: z.enum(["1", "2", "3", "4+"] as const, {
    message: "Please select number of bathrooms",
  }),

  // Rental Status & Goals
  rentalStatus: z.enum(
    ["currently_renting", "looking_to_start", "previously_rented"] as const,
    { message: "Please select current rental status" }
  ),
  primaryGoal: z.enum(
    ["maximize_income", "passive_income", "help_operations"] as const,
    { message: "Please select your primary goal" }
  ),

  // BANT Qualification
  timeline: z.enum(["immediately", "1-3_months", "researching"], {
    message: "Please select your timeline",
  }),
  ownerAuthority: z.enum(["sole_owner", "partner", "not_decision_maker"], {
    message: "Please select your authority level",
  }),
  feeRange: z.enum(["10-15", "15-20", "20+"], {
   message : "Please select your fee range preference",
  }),

  // Hidden Fields
  formSource: z.string().optional(),
  interactionType: z.literal("requested_analysis"),
});

type LeadFormData = z.infer<typeof leadFormSchema>;

// ==========================================
// Lead Scoring Utility
// ==========================================

const OPERATING_AREAS = [
  "new york",
  "ny",
  "san francisco",
  "sf",
  "los angeles",
  "la",
  "miami",
  "chicago",
  "austin",
  "boston",
  "seattle",
  "denver",
  "nashville",
  "portland",
  "san diego",
  "phoenix",
  "dallas",
  "houston",
  "atlanta",
  "washington dc",
];

/**
 * Calculates lead score based on form data
 * Scoring weights designed for property management SaaS
 */
const calculateLeadScore = (data: LeadFormData): LeadScore => {
  const breakdown: ScoreBreakdown[] = [];
  let score = 0;

  // Location Scoring (+20 for operating area, -20 for outside)
  const locationLower = data.propertyLocation.toLowerCase();
  const isInOperatingArea = OPERATING_AREAS.some((area) =>
    locationLower.includes(area)
  );

  if (isInOperatingArea) {
    score += 20;
    breakdown.push({
      field: "Property Location",
      points: 20,
      reason: "Located in our operating area",
    });
  } else {
    score -= 20;
    breakdown.push({
      field: "Property Location",
      points: -20,
      reason: "Outside operating area (may require expansion)",
    });
  }

  // Property Size (+15 for 3+ bedrooms)
  if (["3", "4", "5+"].includes(data.bedrooms)) {
    score += 15;
    breakdown.push({
      field: "Property Size",
      points: 15,
      reason: "3+ bedrooms (higher revenue potential)",
    });
  }

  // Timeline Scoring (+25 immediately, -30 researching)
  switch (data.timeline) {
    case "immediately":
      score += 25;
      breakdown.push({
        field: "Timeline",
        points: 25,
        reason: "Ready to onboard immediately",
      });
      break;
    case "1-3_months":
      score += 10;
      breakdown.push({
        field: "Timeline",
        points: 10,
        reason: "Planning within 1-3 months",
      });
      break;
    case "researching":
      score -= 30;
      breakdown.push({
        field: "Timeline",
        points: -30,
        reason: "Just researching (long sales cycle)",
      });
      break;
  }

  // Authority Scoring (+15 sole owner, -40 not decision maker)
  switch (data.ownerAuthority) {
    case "sole_owner":
      score += 15;
      breakdown.push({
        field: "Decision Authority",
        points: 15,
        reason: "Sole owner (fast decision making)",
      });
      break;
    case "partner":
      score += 5;
      breakdown.push({
        field: "Decision Authority",
        points: 5,
        reason: "Partner/Decision maker",
      });
      break;
    case "not_decision_maker":
      score -= 40;
      breakdown.push({
        field: "Decision Authority",
        points: -40,
        reason: "Not decision maker (need to reach owner)",
      });
      break;
  }

  // Rental Status (+10 currently renting)
  if (data.rentalStatus === "currently_renting") {
    score += 10;
    breakdown.push({
      field: "Rental Status",
      points: 10,
      reason: "Currently renting (experienced host)",
    });
  } else if (data.rentalStatus === "previously_rented") {
    score += 5;
    breakdown.push({
      field: "Rental Status",
      points: 5,
      reason: "Previously rented (some experience)",
    });
  }

  // Fee Range (+10 for 20%+ indicates premium service interest)
  if (data.feeRange === "20+") {
    score += 10;
    breakdown.push({
      field: "Fee Range",
      points: 10,
      reason: "Willing to pay premium rates (20%+)",
    });
  } else if (data.feeRange === "10-15") {
    score -= 5;
    breakdown.push({
      field: "Fee Range",
      points: -5,
      reason: "Price sensitive (10-15% range)",
    });
  }

  // Determine category
  let category: "HOT" | "WARM" | "COLD";
  if (score >= 70) category = "HOT";
  else if (score >= 40) category = "WARM";
  else category = "COLD";

  return { score, category, breakdown };
};

// ==========================================
// Reusable Components
// ==========================================

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
}

const InputField = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className = "", ...props }, ref) => (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-[var(--text-primary)]">
        {label}
        {props.required && (
          <span className="text-[var(--color-error-500)] ml-1">*</span>
        )}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          className={`
            w-full ${icon ? "pl-12" : "pl-4"} pr-4 py-3.5 rounded-[var(--radius-xl)] 
            bg-[var(--bg-secondary)] border border-[var(--border-medium)]
            text-[var(--text-primary)] placeholder-[var(--text-tertiary)]
            focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent
            focus:bg-[var(--bg-primary)]
            transition-all duration-[var(--duration-fast)]
            disabled:opacity-50 disabled:cursor-not-allowed
            ${error ? "border-[var(--color-error-500)] focus:ring-[var(--color-error-500)]" : ""}
            ${className}
          `}
          {...props}
        />
      </div>
      {error && (
        <p className="flex items-center gap-1.5 text-sm text-[var(--color-error-500)] animate-in slide-in-from-top-1">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  )
);
InputField.displayName = "InputField";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
  options: { value: string; label: string }[];
}

const SelectField = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, icon, options, ...props }, ref) => (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-[var(--text-primary)]">
        {label}
        {props.required && (
          <span className="text-[var(--color-error-500)] ml-1">*</span>
        )}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]">
            {icon}
          </div>
        )}
        <select
          ref={ref}
          className={`
            w-full ${icon ? "pl-12" : "pl-4"} pr-12 py-3.5 rounded-[var(--radius-xl)] 
            bg-[var(--bg-secondary)] border border-[var(--border-medium)]
            text-[var(--text-primary)]
            focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent
            focus:bg-[var(--bg-primary)]
            transition-all duration-[var(--duration-fast)] appearance-none
            disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer
            ${error ? "border-[var(--color-error-500)] focus:ring-[var(--color-error-500)]" : ""}
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
        <p className="flex items-center gap-1.5 text-sm text-[var(--color-error-500)] animate-in slide-in-from-top-1">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  )
);
SelectField.displayName = "SelectField";

// ==========================================
// Lead Score Display Component
// ==========================================

const LeadScoreResult = ({ leadScore }: { leadScore: LeadScore }) => {
  const config = {
    HOT: {
      color: "var(--color-success-500)",
      bg: "var(--color-success-50)",
      border: "var(--color-success-200)",
      icon: Flame,
      label: "HOT LEAD",
      description: "High intent, qualified, ready to convert",
    },
    WARM: {
      color: "var(--color-warning-500)",
      bg: "var(--color-warning-50)",
      border: "var(--color-warning-200)",
      icon: Thermometer,
      label: "WARM LEAD",
      description: "Interested, needs nurturing",
    },
    COLD: {
      color: "var(--color-error-500)",
      bg: "var(--color-error-50)",
      border: "var(--color-error-200)",
      icon: Snowflake,
      label: "COLD LEAD",
      description: "Early stage, long-term follow-up",
    },
  };

  const current = config[leadScore.category];
  const Icon = current.icon;

  return (
    <div
      className="rounded-[var(--radius-2xl)] p-6 border-2 animate-in zoom-in-95 duration-300"
      style={{
        backgroundColor: current.bg,
        borderColor: current.border,
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: current.color }}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3
              className="text-2xl font-bold"
              style={{ color: current.color }}
            >
              {leadScore.score} Points
            </h3>
            <p className="text-sm font-semibold text-[var(--text-secondary)]">
              {current.label}
            </p>
          </div>
        </div>
        <div
          className="px-4 py-2 rounded-full text-sm font-bold text-white"
          style={{ backgroundColor: current.color }}
        >
          {leadScore.category}
        </div>
      </div>

      <p className="text-[var(--text-secondary)] mb-4 text-sm">
        {current.description}
      </p>

      <div className="space-y-2">
        <p className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">
          Score Breakdown
        </p>
        {leadScore.breakdown.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between text-sm py-1 border-b border-[var(--border-light)] last:border-0"
          >
            <span className="text-[var(--text-secondary)]">{item.reason}</span>
            <span
              className={`font-bold ${
                item.points > 0
                  ? "text-[var(--color-success-600)]"
                  : "text-[var(--color-error-600)]"
              }`}
            >
              {item.points > 0 ? "+" : ""}
              {item.points}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// Main Component
// ==========================================

const LeadQualificationPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [leadScore, setLeadScore] = useState<LeadScore | null>(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      formSource: "owner_landing_page",
      interactionType: "requested_analysis",
    },
  });

  // Watch form for real-time scoring preview (optional)
  const formData = useWatch({ control });

  // Calculate score in real-time for preview
  const previewScore = useMemo(() => {
    try {
      // Partial validation for preview
      if (formData.timeline && formData.ownerAuthority) {
        return calculateLeadScore(formData as LeadFormData);
      }
    } catch {
      return null;
    }
  }, [formData]);

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Calculate final lead score
      const score = calculateLeadScore(data);
      setLeadScore(score);

      // Prepare CRM-ready payload
      const crmPayload = {
        ...data,
        leadScore: score.score,
        leadCategory: score.category,
        scoreBreakdown: score.breakdown,
        submittedAt: new Date().toISOString(),
        userAgent: typeof window !== "undefined" ? window.navigator.userAgent : "",
        // Add UTM params, page URL, etc. here
      };

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Example: Send to CRM
      // await fetch('/api/leads', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(crmPayload),
      // });

      console.log("CRM Payload:", crmPayload);
      setSubmitStatus("success");

      // Reset after showing results
      setTimeout(() => {
        reset();
        setLeadScore(null);
        setSubmitStatus("idle");
      }, 8000);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const propertyTypeOptions = [
    { value: "entire_home", label: "Entire Home" },
    { value: "apartment", label: "Apartment / Condo" },
    { value: "villa", label: "Villa / Luxury Home" },
    { value: "vacation_home", label: "Vacation Home" },
  ];

  const bedroomOptions = [
    { value: "1", label: "1 Bedroom" },
    { value: "2", label: "2 Bedrooms" },
    { value: "3", label: "3 Bedrooms" },
    { value: "4", label: "4 Bedrooms" },
    { value: "5+", label: "5+ Bedrooms" },
  ];

  const bathroomOptions = [
    { value: "1", label: "1 Bathroom" },
    { value: "2", label: "2 Bathrooms" },
    { value: "3", label: "3 Bathrooms" },
    { value: "4+", label: "4+ Bathrooms" },
  ];

  const rentalStatusOptions = [
    { value: "currently_renting", label: "Currently renting on Airbnb" },
    { value: "looking_to_start", label: "Looking to start renting" },
    { value: "previously_rented", label: "Previously rented" },
  ];

  const goalOptions = [
    { value: "maximize_income", label: "Maximize rental income" },
    { value: "passive_income", label: "Passive income / hands-off" },
    { value: "help_operations", label: "Need help with operations" },
  ];

  const timelineOptions = [
    { value: "immediately", label: "Immediately" },
    { value: "1-3_months", label: "Within 1-3 months" },
    { value: "researching", label: "Just researching" },
  ];

  const authorityOptions = [
    { value: "sole_owner", label: "Sole Owner" },
    { value: "partner", label: "Partner / Decision Maker" },
    { value: "not_decision_maker", label: "Not Decision Maker" },
  ];

  const feeOptions = [
    { value: "10-15", label: "10-15%" },
    { value: "15-20", label: "15-20%" },
    { value: "20+", label: "20%+ (Premium service)" },
  ];

  return (
    <section className="min-h-screen py-[var(--space-24)] bg-[var(--bg-secondary)]">
      <div className="max-w-4xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
        {/* Header */}
        <div className="text-center mb-[var(--space-12)]">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary-100)] text-[var(--color-primary-700)] rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Free Property Analysis
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Get Your Lead Score
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Tell us about your property and we'll calculate your earning potential
            and provide a personalized management plan.
          </p>
        </div>

        {/* Main Form Card */}
        <div className="bg-[var(--bg-primary)] rounded-[var(--radius-3xl)] shadow-xl border border-[var(--border-light)] overflow-hidden">
          {/* Progress Bar (Visual Only) */}
          <div className="h-1 bg-[var(--bg-secondary)]">
            <div
              className="w-full h-full bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-secondary-500)] transition-all duration-500"
              style={{ width: leadScore ? "100%" : "60%" }}
            />
          </div>

          <div className="p-[var(--space-8)] lg:p-[var(--space-12)]">
            {/* Status Messages */}
            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-[var(--color-error-50)] border border-[var(--color-error-200)] rounded-[var(--radius-xl)] flex items-center gap-3 text-[var(--color-error-700)] animate-in slide-in-from-top-2">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Something went wrong</p>
                  <p className="text-sm">Please try again or contact support.</p>
                </div>
              </div>
            )}

            {submitStatus === "success" && leadScore ? (
              <div className="space-y-6 animate-in fade-in duration-500">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-[var(--color-success-100)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-[var(--color-success-600)]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                    Analysis Complete!
                  </h2>
                  <p className="text-[var(--text-secondary)]">
                    Here's how we scored your property:
                  </p>
                </div>

                <LeadScoreResult leadScore={leadScore} />

                <div className="mt-8 p-6 bg-[var(--bg-secondary)] rounded-[var(--radius-xl)]">
                  <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-[var(--color-primary-500)]" />
                    Next Steps
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm mb-4">
                    {leadScore.category === "HOT" &&
                      "Your property profile indicates high potential! Our team will contact you within 2 hours to discuss immediate onboarding."}
                    {leadScore.category === "WARM" &&
                      "Great potential! We'll send you a detailed proposal and follow up within 24 hours to discuss your goals."}
                    {leadScore.category === "COLD" &&
                      "Thanks for your interest! We'll add you to our newsletter with market insights and reach out when you're ready to move forward."}
                  </p>
                  <button
                    onClick={() => {
                      setLeadScore(null);
                      setSubmitStatus("idle");
                      reset();
                    }}
                    className="text-[var(--color-primary-600)] font-semibold text-sm hover:underline flex items-center gap-1"
                  >
                    Submit another property
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Contact Information */}
                <div className="space-y-6">
                  <h2 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
                    <Users className="w-5 h-5 text-[var(--color-primary-500)]" />
                    Contact Information
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <InputField
                      label="Full Name"
                      required
                      placeholder="John Smith"
                      icon={<Users className="w-5 h-5" />}
                      error={errors.fullName?.message}
                      {...register("fullName")}
                    />
                    <InputField
                      label="Phone Number"
                      type="tel"
                      required
                      placeholder="+1 (555) 123-4567"
                      icon={<DollarSign className="w-5 h-5" />}
                      error={errors.phone?.message}
                      {...register("phone")}
                    />
                  </div>
                  <InputField
                    label="Email Address"
                    type="email"
                    required
                    placeholder="john@example.com"
                    icon={<BarChart3 className="w-5 h-5" />}
                    error={errors.email?.message}
                    {...register("email")}
                  />
                </div>

                {/* Property Details */}
                <div className="space-y-6 pt-6 border-t border-[var(--border-light)]">
                  <h2 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
                    <Home className="w-5 h-5 text-[var(--color-primary-500)]" />
                    Property Details
                  </h2>

                  <InputField
                    label="Property Location"
                    required
                    placeholder="e.g., Miami, FL or Brooklyn, NY"
                    icon={<MapPin className="w-5 h-5" />}
                    error={errors.propertyLocation?.message}
                    {...register("propertyLocation")}
                  />

                  <SelectField
                    label="Property Type"
                    required
                    icon={<Building2 className="w-5 h-5" />}
                    options={propertyTypeOptions}
                    error={errors.propertyType?.message}
                    {...register("propertyType")}
                  />

                  <div className="grid sm:grid-cols-2 gap-6">
                    <SelectField
                      label="Bedrooms"
                      required
                      icon={<BedDouble className="w-5 h-5" />}
                      options={bedroomOptions}
                      error={errors.bedrooms?.message}
                      {...register("bedrooms")}
                    />
                    <SelectField
                      label="Bathrooms"
                      required
                      icon={<Bath className="w-5 h-5" />}
                      options={bathroomOptions}
                      error={errors.bathrooms?.message}
                      {...register("bathrooms")}
                    />
                  </div>

                  <SelectField
                    label="Current Rental Status"
                    required
                    icon={<TrendingUp className="w-5 h-5" />}
                    options={rentalStatusOptions}
                    error={errors.rentalStatus?.message}
                    {...register("rentalStatus")}
                  />

                  <SelectField
                    label="Primary Goal"
                    required
                    icon={<Target className="w-5 h-5" />}
                    options={goalOptions}
                    error={errors.primaryGoal?.message}
                    {...register("primaryGoal")}
                  />
                </div>

                {/* BANT Qualification */}
                <div className="space-y-6 pt-6 border-t border-[var(--border-light)]">
                  <h2 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[var(--color-primary-500)]" />
                    Qualification Details
                  </h2>

                  <SelectField
                    label="Timeline to Onboard"
                    required
                    icon={<Calendar className="w-5 h-5" />}
                    options={timelineOptions}
                    error={errors.timeline?.message}
                    {...register("timeline")}
                  />

                  <SelectField
                    label="Your Role"
                    required
                    icon={<UserCheck className="w-5 h-5" />}
                    options={authorityOptions}
                    error={errors.ownerAuthority?.message}
                    {...register("ownerAuthority")}
                  />

                  <SelectField
                    label="Expected Management Fee"
                    required
                    icon={<DollarSign className="w-5 h-5" />}
                    options={feeOptions}
                    error={errors.feeRange?.message}
                    {...register("feeRange")}
                  />
                </div>

                {/* Hidden Fields */}
                <input type="hidden" {...register("formSource")} />
                <input type="hidden" {...register("interactionType")} />

                {/* Real-time Score Preview */}
                {previewScore && (
                  <div className="p-4 bg-[var(--bg-secondary)] rounded-[var(--radius-xl)] border border-[var(--border-light)]">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-[var(--text-secondary)]">
                        Estimated Lead Score:
                      </span>
                      <span
                        className={`font-bold ${
                          previewScore.score >= 70
                            ? "text-[var(--color-success-600)]"
                            : previewScore.score >= 40
                            ? "text-[var(--color-warning-600)]"
                            : "text-[var(--color-error-600)]"
                        }`}
                      >
                        {previewScore.score} points ({previewScore.category})
                      </span>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    w-full py-4 px-8 rounded-[var(--radius-xl)] font-bold text-lg
                    flex items-center justify-center gap-2
                    transition-all duration-[var(--duration-fast)]
                    ${
                      isSubmitting
                        ? "bg-[var(--bg-tertiary)] text-[var(--text-tertiary)] cursor-not-allowed"
                        : "bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-500)] text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    }
                  `}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Calculating Score...
                    </>
                  ) : (
                    <>
                      Get My Free Analysis
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-[var(--text-tertiary)]">
                  By submitting, you agree to our{" "}
                  <a href="/privacy" className="text-[var(--color-primary-600)] hover:underline">
                    Privacy Policy
                  </a>
                  . We'll never share your information.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-[var(--space-12)] grid sm:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-[var(--radius-2xl)] bg-[var(--bg-primary)] border border-[var(--border-light)]">
            <div className="w-12 h-12 bg-[var(--color-primary-100)] rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-6 h-6 text-[var(--color-primary-600)]" />
            </div>
            <h3 className="font-bold text-[var(--text-primary)] mb-1">
              Instant Analysis
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Get your lead score in seconds
            </p>
          </div>
          <div className="p-6 rounded-[var(--radius-2xl)] bg-[var(--bg-primary)] border border-[var(--border-light)]">
            <div className="w-12 h-12 bg-[var(--color-success-100)] rounded-full flex items-center justify-center mx-auto mb-3">
              <DollarSign className="w-6 h-6 text-[var(--color-success-600)]" />
            </div>
            <h3 className="font-bold text-[var(--text-primary)] mb-1">
              Revenue Estimate
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              See your earning potential
            </p>
          </div>
          <div className="p-6 rounded-[var(--radius-2xl)] bg-[var(--bg-primary)] border border-[var(--border-light)]">
            <div className="w-12 h-12 bg-[var(--color-secondary-100)] rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-[var(--color-secondary-600)]" />
            </div>
            <h3 className="font-bold text-[var(--text-primary)] mb-1">
              Fast Response
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Hear back within 2 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadQualificationPage;