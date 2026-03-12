"use client";

import React, { useState, useEffect } from "react";
import {
  Users,
  Phone,
  FileText,
  PenTool,
  Camera,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Star,
  Building2,
  Calendar,
  DollarSign,
  Shield,
  Clock,
  ChevronDown,
  ChevronUp,
  Calculator,
  BarChart3,
  Home,
  Sparkles,
  ArrowUpRight,
  Menu,
  X,
  PlayCircle,
  Award,
  BadgeCheck,
  Zap,
  Percent,
  Wrench,
  Search,
  PhoneCall,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";

// ==========================================
// Types & Interfaces
// ==========================================

interface PipelineStage {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  duration: string;
}

interface Testimonial {
  name: string;
  location: string;
  image: string;
  quote: string;
  metric: string;
  result: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface CalculatorState {
  location: string;
  nightlyRate: number;
  occupancy: number;
}

// ==========================================
// Components
// ==========================================

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { label: "Pipeline", href: "#pipeline" },
//     { label: "Calculator", href: "#calculator" },
//     { label: "Results", href: "#results" },
//     { label: "FAQ", href: "#faq" },
//   ];

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-[var(--bg-primary)]/80 backdrop-blur-lg shadow-sm"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
//         <div className="flex items-center justify-between h-16 lg:h-20">
//           <Link href="/" className="flex items-center gap-2">
//             <div className="w-10 h-10 rounded-[var(--radius-xl)] bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-secondary-500)] flex items-center justify-center">
//               <Building2 className="w-6 h-6 text-white" />
//             </div>
//             <span className="text-xl font-bold text-[var(--text-primary)]">
//               StayPilot
//             </span>
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden lg:flex items-center gap-8">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className="text-[var(--text-secondary)] hover:text-[var(--color-primary-600)] font-medium transition-colors"
//               >
//                 {item.label}
//               </a>
//             ))}
//             <button className="px-6 py-2.5 bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-500)] text-white font-semibold rounded-[var(--radius-full)] transition-all hover:shadow-lg">
//               Get Started
//             </button>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden p-2 text-[var(--text-primary)]"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Nav */}
//         {isMenuOpen && (
//           <div className="lg:hidden py-4 border-t border-[var(--border-light)] animate-in slide-in-from-top-2">
//             <nav className="flex flex-col gap-4">
//               {navItems.map((item) => (
//                 <a
//                   key={item.label}
//                   href={item.href}
//                   className="text-[var(--text-secondary)] hover:text-[var(--color-primary-600)] font-medium py-2"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item.label}
//                 </a>
//               ))}
//               <button className="w-full px-6 py-3 bg-[var(--color-primary-600)] text-white font-semibold rounded-[var(--radius-full)]">
//                 Get Started
//               </button>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

const PipelineStage = ({
  stage,
  isLast,
  index,
}: {
  stage: PipelineStage;
  isLast: boolean;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex flex-col items-center group">
      {/* Desktop Connector Line */}
      {!isLast && (
        <div className="hidden lg:block absolute top-8 left-[60%] w-[calc(100%-20px)] h-0.5 bg-[var(--border-medium)]">
          <div
            className="h-full bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-secondary-500)] transition-all duration-500"
            style={{ width: isHovered ? "100%" : "0%" }}
          />
        </div>
      )}

      {/* Icon Circle */}
      <div
        className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 cursor-pointer"
        style={{
          background: isHovered
            ? "linear-gradient(135deg, var(--color-primary-500) 0%, var(--color-secondary-500) 100%)"
            : "var(--bg-secondary)",
          boxShadow: isHovered
            ? "0 10px 40px -10px var(--color-primary-500)"
            : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          transform: isHovered ? "scale(1.1) translateY(-4px)" : "scale(1)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={isHovered ? "text-white" : "text-[var(--color-primary-600)]"}>
          {stage.icon}
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--color-primary-600)] text-white text-xs font-bold flex items-center justify-center">
          {index + 1}
        </div>
      </div>

      {/* Content */}
      <div className="text-center max-w-[200px]">
        <h3 className="font-bold text-[var(--text-primary)] mb-2">{stage.title}</h3>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">
          {stage.description}
        </p>
        <span className="inline-flex items-center gap-1 text-xs text-[var(--color-primary-600)] font-medium">
          <Clock className="w-3 h-3" />
          {stage.duration}
        </span>
      </div>
    </div>
  );
};

const RevenueCalculator = () => {
  const [values, setValues] = useState<CalculatorState>({
    location: "",
    nightlyRate: 150,
    occupancy: 75,
  });

  const monthlyIncome = Math.round(
    values.nightlyRate * (values.occupancy / 100) * 30
  );
  const yearlyIncome = monthlyIncome * 12;
  const withManagement = Math.round(yearlyIncome * 1.3); // 30% increase

  return (
    <div className="bg-[var(--bg-primary)] rounded-[var(--radius-3xl)] p-8 shadow-xl border border-[var(--border-light)]">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-[var(--radius-xl)] bg-[var(--color-primary-100)] flex items-center justify-center">
          <Calculator className="w-6 h-6 text-[var(--color-primary-600)]" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[var(--text-primary)]">
            Revenue Estimator
          </h3>
          <p className="text-sm text-[var(--text-secondary)]">
            See your earning potential
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
            Property Location
          </label>
          <input
            type="text"
            placeholder="e.g., Miami Beach, FL"
            value={values.location}
            onChange={(e) => setValues({ ...values, location: e.target.value })}
            className="w-full px-4 py-3 rounded-[var(--radius-xl)] bg-[var(--bg-secondary)] border border-[var(--border-medium)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
            Average Nightly Rate: ${values.nightlyRate}
          </label>
          <input
            type="range"
            min="50"
            max="1000"
            step="10"
            value={values.nightlyRate}
            onChange={(e) =>
              setValues({ ...values, nightlyRate: parseInt(e.target.value) })
            }
            className="w-full h-2 bg-[var(--bg-tertiary)] rounded-lg appearance-none cursor-pointer accent-[var(--color-primary-600)]"
          />
          <div className="flex justify-between text-xs text-[var(--text-tertiary)] mt-1">
            <span>$50</span>
            <span>$1000+</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
            Occupancy Rate: {values.occupancy}%
          </label>
          <input
            type="range"
            min="30"
            max="95"
            value={values.occupancy}
            onChange={(e) =>
              setValues({ ...values, occupancy: parseInt(e.target.value) })
            }
            className="w-full h-2 bg-[var(--bg-tertiary)] rounded-lg appearance-none cursor-pointer accent-[var(--color-primary-600)]"
          />
          <div className="flex justify-between text-xs text-[var(--text-tertiary)] mt-1">
            <span>30%</span>
            <span>95%</span>
          </div>
        </div>

        <div className="pt-6 border-t border-[var(--border-light)]">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="p-4 bg-[var(--bg-secondary)] rounded-[var(--radius-xl)]">
              <p className="text-xs text-[var(--text-tertiary)] mb-1">
                Monthly Income
              </p>
              <p className="text-2xl font-bold text-[var(--text-primary)]">
                ${monthlyIncome.toLocaleString()}
              </p>
            </div>
            <div className="p-4 bg-[var(--color-primary-50)] rounded-[var(--radius-xl)] border border-[var(--color-primary-200)]">
              <p className="text-xs text-[var(--color-primary-600)] mb-1">
                With StayPilot (+30%)
              </p>
              <p className="text-2xl font-bold text-[var(--color-primary-700)]">
                ${Math.round(monthlyIncome * 1.3).toLocaleString()}
              </p>
            </div>
          </div>
          <p className="text-xs text-[var(--text-tertiary)] text-center">
            *Estimates based on market averages. Actual results vary.
          </p>
        </div>
      </div>
    </div>
  );
};

const ComparisonTable = () => {
  const comparisons = [
    {
      feature: "Guest Communication",
      alone: "Handle calls & messages 24/7",
      withUs: "24/7 Professional guest support",
      icon: <PhoneCall className="w-5 h-5" />,
    },
    {
      feature: "Pricing Strategy",
      alone: "Manual price adjustments",
      withUs: "AI-powered dynamic pricing",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      feature: "Cleaning & Maintenance",
      alone: "Coordinate vendors yourself",
      withUs: "Automated cleaning system",
      icon: <Sparkles className="w-5 h-5" />,
    },
    {
      feature: "Revenue Optimization",
      alone: "Inconsistent bookings",
      withUs: "Data-driven revenue strategy",
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      feature: "Marketing & Photos",
      alone: "DIY listing creation",
      withUs: "Professional photography & SEO",
      icon: <Camera className="w-5 h-5" />,
    },
  ];

  return (
   <div className="overflow-hidden rounded-[var(--radius-3xl)] shadow-xl border border-[var(--border-light)]">
  <div className="bg-[var(--bg-primary)]">
    
    {/* Header */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 p-4 md:p-6 border-b border-[var(--border-light)]">
      <div className="font-semibold text-[var(--text-primary)]">
        Feature
      </div>

      <div className="font-semibold text-[var(--text-secondary)] md:text-center">
        Self-Managed
      </div>

      <div className="font-semibold text-[var(--color-primary-600)] md:text-center">
        With BNBPMS
      </div>
    </div>

    {comparisons.map((item, idx) => (
      <div
        key={idx}
        className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 p-4 md:p-6 border-b border-[var(--border-light)] last:border-0 hover:bg-[var(--bg-secondary)] transition-colors"
      >
        {/* Feature */}
        <div className="flex flex-col md:flex-row items-center md:gap-3 text-[var(--text-primary)]">
          <span className="text-[var(--color-primary-500)]">
            {item.icon}
          </span>
          <span className="text-xs md:text-lg text-center md:text-left">
            {item.feature}
          </span>
        </div>

        {/* Self Managed */}
        <div className="text-center md:text-center text-[var(--text-tertiary)] text-sm">
          {item.alone}
        </div>

        {/* With Us */}
        <div className="text-center text-[var(--color-success-600)] font-medium text-sm flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          {item.withUs}
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

const FAQAccordion = ({ faqs }: { faqs: FAQ[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className="bg-[var(--bg-primary)] rounded-[var(--radius-2xl)] border border-[var(--border-light)] overflow-hidden transition-all duration-300"
          style={{
            boxShadow: openIndex === idx ? "0 4px 20px rgba(0,0,0,0.08)" : "none",
          }}
        >
          <button
            className="w-full flex items-center justify-between p-6 text-left"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            <span className="font-semibold text-[var(--text-primary)] pr-8">
              {faq.question}
            </span>
            {openIndex === idx ? (
              <ChevronUp className="w-5 h-5 text-[var(--color-primary-600)] flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[var(--text-tertiary)] flex-shrink-0" />
            )}
          </button>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{
              maxHeight: openIndex === idx ? "200px" : "0",
              opacity: openIndex === idx ? 1 : 0,
            }}
          >
            <p className="px-6 pb-6 text-[var(--text-secondary)] leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

// ==========================================
// Main Page Component
// ==========================================

const SalesPipelinePage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const pipelineStages: PipelineStage[] = [
    {
      id: 1,
      icon: <Users className="w-7 h-7" />,
      title: "Lead Capture",
      description: "Share your property details and goals with our team",
      duration: "2 minutes",
    },
    {
      id: 2,
      icon: <Phone className="w-7 h-7" />,
      title: "Qualification",
      description: "Quick strategy call to assess property fit and potential",
      duration: "15 min call",
    },
    {
      id: 3,
      icon: <FileText className="w-7 h-7" />,
      title: "Assessment",
      description: "Detailed revenue projections and market analysis",
      duration: "24-48 hours",
    },
    {
      id: 4,
      icon: <PenTool className="w-7 h-7" />,
      title: "Contracting",
      description: "Digital agreement, secure and frictionless onboarding",
      duration: "Same day",
    },
    {
      id: 5,
      icon: <Camera className="w-7 h-7" />,
      title: "Property Setup",
      description: "Professional staging, photography, listing optimization",
      duration: "3-5 days",
    },
    {
      id: 6,
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Live & Booking",
      description: "Listed on Airbnb & Booking.com, revenue starts flowing",
      duration: "Ongoing",
    },
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Chen",
      location: "Miami Beach, FL",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      quote:
        "StayPilot transformed my rental from sporadic bookings to 95% occupancy. Their team handles everything while I focus on my day job.",
      metric: "+42% Revenue",
      result: "in 90 days",
    },
    {
      name: "Marcus Rodriguez",
      location: "Austin, TX",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote:
        "The revenue calculator was spot on. Within 3 months, I was earning 30% more than when I managed the property myself.",
      metric: "$4,200/mo",
      result: "average income",
    },
    {
      name: "Emma Thompson",
      location: "Nashville, TN",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote:
        "I was skeptical about the fees, but the increase in revenue more than covers it. Plus, zero stress about guest issues.",
      metric: "4.9★ Rating",
      result: "maintained",
    },
  ];

  const faqs: FAQ[] = [
    {
      question: "What are your management fees?",
      answer:
        "Our fees range from 15-25% of booking revenue depending on property type and services needed. We only earn when you earn—no upfront costs, no hidden fees. The revenue increase we generate typically covers our fees and still puts more money in your pocket.",
    },
    {
      question: "Do I need to sign a long-term contract?",
      answer:
        "No. We offer flexible agreements with 30-day cancellation terms. We're confident in our service, so we don't lock you in. If you're not satisfied, you can leave anytime with 30 days notice.",
    },
    {
      question: "Who handles maintenance and repairs?",
      answer:
        "We coordinate all maintenance through our vetted network of local contractors. For repairs under $200, we handle immediately and deduct from your payout. For larger items, we contact you for approval first. Emergency issues are handled 24/7.",
    },
    {
      question: "How do I track my revenue and bookings?",
      answer:
        "You'll get access to our Owner Dashboard showing real-time bookings, revenue, expenses, and reviews. We also send monthly detailed statements and year-end tax documents. Track everything from your phone or computer.",
    },
    {
      question: "What happens if there are damages?",
      answer:
        "We collect security deposits from guests and handle all damage claims. Our team documents everything with photos. We also offer optional damage protection insurance for additional peace of mind on high-value items.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks ${name}! We'll send your custom estimate to ${email} within 2 hours.`);
    setEmail("");
    setName("");
    setLocation("");
  };

  return (
    <div className="min-h-screen  font-sans">
      {/* <Header /> */}

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-50)] via-[var(--bg-secondary)] to-[var(--color-secondary-50)] opacity-50" />
        <div className="max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)] relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary-100)] text-[var(--color-primary-700)] rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              Simple 6-Step Process
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6 leading-tight">
              From Lead to Revenue in{" "}
              <span className="bg-gradient-to-r from-[var(--color-primary-600)] to-[var(--color-secondary-600)] bg-clip-text text-transparent">
                Record Time
              </span>
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">
              See exactly how we transform your property into a high-performing
              rental asset. Transparent, structured, and designed for maximum
              returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-500)] text-white font-semibold rounded-[var(--radius-full)] transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <Calculator className="w-5 h-5" />
                Calculate Your Earnings
              </a>
              <a
                href="#pipeline"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--bg-primary)] text-[var(--text-primary)] font-semibold rounded-[var(--radius-full)] border border-[var(--border-medium)] hover:border-[var(--color-primary-300)] transition-all"
              >
                See The Process
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline Visualization */}
      <section id="pipeline" className="py-20 ">
        <div className="max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Your Journey to Passive Income
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              A transparent, proven process that takes you from initial inquiry to
              thriving rental business.
            </p>
          </div>

          {/* Desktop Horizontal Pipeline */}
          <div className="hidden lg:grid grid-cols-6 gap-4">
            {pipelineStages.map((stage, idx) => (
              <PipelineStage
                key={stage.id}
                stage={stage}
                index={idx}
                isLast={idx === pipelineStages.length - 1}
              />
            ))}
          </div>

          {/* Mobile Vertical Pipeline */}
          <div className="lg:hidden space-y-8">
            {pipelineStages.map((stage, idx) => (
              <div key={stage.id} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-secondary-500)] flex items-center justify-center text-white font-bold">
                    {idx + 1}
                  </div>
                  {idx < pipelineStages.length - 1 && (
                    <div className="w-0.5 h-full bg-[var(--border-medium)] mt-4" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[var(--color-primary-600)]">
                      {stage.icon}
                    </span>
                    <h3 className="font-bold text-[var(--text-primary)]">
                      {stage.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-2">
                    {stage.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs text-[var(--color-primary-600)] font-medium">
                    <Clock className="w-3 h-3" />
                    {stage.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          {/* Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: <TrendingUp />, value: "+30%", label: "Revenue Increase", sub: "in 60 days" },
              { icon: <Calendar />, value: "95%", label: "Occupancy Rate", sub: "average" },
              { icon: <Star />, value: "4.8★", label: "Guest Rating", sub: "maintained" },
              { icon: <Building2 />, value: "200+", label: "Properties", sub: "managed" },
            ].map((metric, idx) => (
              <div
                key={idx}
                className="bg-[var(--bg-primary)] rounded-[var(--radius-2xl)] p-6 text-center shadow-lg border border-[var(--border-light)] hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-[var(--radius-xl)] bg-[var(--color-primary-100)] text-[var(--color-primary-600)] flex items-center justify-center">
                  {React.cloneElement(
  metric.icon as React.ReactElement<{ className?: string }>,
  {
    className: "w-6 h-6",
  }
)}
                </div>
                <div className="text-3xl font-bold text-[var(--text-primary)] mb-1">
                  {metric.value}
                </div>
                <div className="font-semibold text-[var(--text-secondary)]">
                  {metric.label}
                </div>
                <div className="text-sm text-[var(--text-tertiary)]">{metric.sub}</div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-[var(--bg-primary)] rounded-[var(--radius-3xl)] p-8 shadow-lg border border-[var(--border-light)] hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[var(--color-primary-200)]"
                  />
                  <div>
                    <div className="font-bold text-[var(--text-primary)]">
                      {t.name}
                    </div>
                    <div className="text-sm text-[var(--text-tertiary)] flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {t.location}
                    </div>
                  </div>
                </div>
                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-[var(--border-light)]">
                  <div>
                    <div className="text-2xl font-bold text-[var(--color-success-600)]">
                      {t.metric}
                    </div>
                    <div className="text-xs text-[var(--text-tertiary)]">
                      {t.result}
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[var(--color-warning-500)] text-[var(--color-warning-500)]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Partner Logos */}
          <div className="text-center">
            <p className="text-sm font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-6">
              Trusted Partner Status
            </p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-60 hover:opacity-100 transition-opacity">
              {[
                { name: "Airbnb", icon: <Home className="w-8 h-8" /> },
                { name: "Vrbo", icon: <Building2 className="w-8 h-8" /> },
                { name: "Booking.com", icon: <Calendar className="w-8 h-8" /> },
                { name: "Superhost", icon: <Award className="w-8 h-8" /> },
                { name: "Verified", icon: <BadgeCheck className="w-8 h-8" /> },
              ].map((partner, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-6 py-3 bg-[var(--bg-primary)] rounded-[var(--radius-xl)] border border-[var(--border-light)] hover:border-[var(--color-primary-300)] hover:shadow-md transition-all cursor-pointer group"
                >
                  <span className="text-[var(--text-tertiary)] group-hover:text-[var(--color-primary-600)] transition-colors">
                    {partner.icon}
                  </span>
                  <span className="font-semibold text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-600)] to-[var(--color-secondary-600)]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        
        <div className="max-w-4xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)] relative">
          <div className="text-center text-white mb-10">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Get Your Custom Earnings Estimate
            </h2>
            <p className="text-lg text-[var(--color-primary-100)]">
              See exactly how much your property could earn with our management.
              Free, no-obligation analysis delivered in 2 hours.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-lg rounded-[var(--radius-3xl)] p-8 border border-white/20"
          >
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="px-6 py-4 rounded-[var(--radius-xl)] bg-white/90 border-0 text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-600)]"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-6 py-4 rounded-[var(--radius-xl)] bg-white/90 border-0 text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-600)]"
              />
              <input
                type="text"
                placeholder="Property Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                className="px-6 py-4 rounded-[var(--radius-xl)] bg-white/90 border-0 text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-600)]"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-white text-[var(--color-primary-600)] font-bold text-lg rounded-[var(--radius-xl)] hover:bg-[var(--bg-primary)] transition-all hover:shadow-xl flex items-center justify-center gap-2"
            >
              Get My Free Estimate
              <ArrowUpRight className="w-5 h-5" />
            </button>
            <p className="text-center text-sm text-[var(--color-primary-100)] mt-4 flex items-center justify-center gap-2">
              <Shield className="w-4 h-4" />
              No long-term contracts. Cancel anytime. Unsubscribe easily.
            </p>
          </form>
        </div>
      </section>

      {/* Interactive Elements */}
      <section id="calculator" className="py-20 ">
        <div className="max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
                Calculate Your Potential
              </h2>
              <p className="text-[var(--text-secondary)] mb-8">
                See how much more you could earn with professional management.
                Adjust the sliders to match your property.
              </p>
              <RevenueCalculator />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
                Why Choose BNB property management?
              </h2>
              <p className="text-[var(--text-secondary)] mb-8">
                See how we compare to managing your property alone.
              </p>
              <ComparisonTable />
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline Table Section */}
      <section className="py-20 ">
        <div className="max-w-5xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-primary-600)] mb-4">
              Strategic Pipeline Overview
            </h2>
            <p className="text-[var(--text-secondary)]">
              How we move prospects from initial interest to revenue generation.
            </p>
          </div>

          <div className="bg-[var(--bg-primary)] rounded-[var(--radius-3xl)] shadow-xl overflow-hidden border border-[var(--border-light)]">
  
  {/* Mobile Scroll Wrapper */}
  <div className="w-full overflow-x-auto">
    <table className="w-full min-w-[600px]">
      
      <thead className="bg-[var(--bg-secondary)]">
        <tr>
          <th className="text-left text-sm md:text-md py-4 md:py-6 px-4 md:px-6 font-semibold text-[var(--color-primary-500)]">
            Stage
          </th>
          <th className="text-left text-sm md:text-md py-4 md:py-6 px-4 md:px-6 font-semibold text-[var(--color-primary-500)]">
            Owner Action
          </th>
          <th className="text-left text-sm md:text-md py-4 md:py-6 px-4 md:px-6 font-semibold text-[var(--color-primary-500)]">
            Value Delivered
          </th>
        </tr>
      </thead>

      <tbody>
        {[
          {
            stage: "Prospecting",
            action: "Fill out lead form",
            value: "Initial interest captured",
            color: "var(--color-primary-100)",
          },
          {
            stage: "Qualification",
            action: "Strategy call",
            value: "Fit assessment & potential",
            color: "var(--color-secondary-100)",
          },
          {
            stage: "Proposal",
            action: "Review projections",
            value: "Clear revenue numbers",
            color: "var(--color-success-100)",
          },
          {
            stage: "Negotiation",
            action: "Sign agreement",
            value: "Security & trust",
            color: "var(--color-warning-100)",
          },
          {
            stage: "Close",
            action: "Onboarding",
            value: "Smooth transition",
            color: "var(--color-primary-100)",
          },
          {
            stage: "Follow-up",
            action: "First payout",
            value: "Revenue generation",
            color: "var(--color-success-100)",
          },
        ].map((row, idx) => (
          <tr
            key={idx}
            className="border-t border-[var(--border-light)] hover:bg-[var(--bg-secondary)] transition-colors"
          >
            <td className="p-3 md:p-6">
              <div className="flex items-center gap-1 md:gap-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: row.color }}
                />
                <span className="font-semibold text-xs md:text-md text-[var(--text-primary)]">
                  {row.stage}
                </span>
              </div>
            </td>

            <td className="p-3 md:p-6 text-xs md:text-md text-[var(--text-secondary)]">
              {row.action}
            </td>

            <td className="p-3 md:p-6">
              <span className="inline-flex text-xs md:text-md items-center gap-2 px-3 py-1 rounded-full font-medium md:bg-[var(--bg-secondary)] text-[var(--text-secondary)]">
                {row.value}
              </span>
            </td>
          </tr>
        ))}
      </tbody>

    </table>
  </div>
</div>

        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 ">
        <div className="max-w-3xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[var(--text-secondary)]">
              Everything you need to know about our process and pricing.
            </p>
          </div>

          <FAQAccordion faqs={faqs} />

          <div className="mt-12 text-center">
            <p className="text-[var(--text-secondary)] mb-4">
              Still have questions?
            </p>
            <a
              href="mailto:hello@staypilot.com"
              className="inline-flex items-center gap-2 text-[var(--color-primary-600)] font-semibold hover:underline"
            >
              <Mail className="w-5 h-5" />
              Contact our team
            </a>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default SalesPipelinePage;