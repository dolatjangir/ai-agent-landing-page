"use client"
import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Zap, 
  Workflow, 
  Clock, 
  Mail, 
  MessageSquare, 
  Bell, 
  Database, 
  Shield, 
  TrendingUp, 
  Check, 
  ChevronRight, 
  Star,
  ArrowRight,
  Play,
  Sparkles,
  Target,
  Layers,
  RefreshCw,
  AlertCircle,
  Calendar,
  Users,
  BarChart3,
  Cpu,
  Globe,
  Lock,
  MousePointer,
  Timer,
  Rocket,
  Settings,
  Plus,
  Minus,
  ChevronDown,
  X
} from 'lucide-react';

// Reusable Components matching your design system
const GlassCard = ({ children, className = "", hover = true }: { children: React.ReactNode; className?: string; hover?: boolean; style?: React.CSSProperties; }) => (
  <div className={`relative overflow-hidden rounded-[var(--radius-3xl)] bg-white/80 backdrop-blur-xl border border-[var(--border-light)] shadow-xl ${hover ? 'hover:shadow-2xl hover:-translate-y-1 transition-all duration-[var(--duration-normal)]' : ''} ${className}`}>
    {children}
  </div>
);

const GradientText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`bg-gradient-to-r from-[var(--color-primary-600)] to-[var(--color-secondary-600)] bg-clip-text text-transparent ${className}`}>
    {children}
  </span>
);

const Badge = ({ children, variant = "primary" }: { children: React.ReactNode; variant?: "primary" | "secondary" | "success" | "warning" }) => {
  const variants = {
    primary: "bg-[var(--color-primary-100)] text-[var(--color-primary-700)] border-[var(--color-primary-200)]",
    secondary: "bg-[var(--color-secondary-100)] text-[var(--color-secondary-700)] border-[var(--color-secondary-200)]",
    success: "bg-[var(--color-success-100)] text-[var(--color-success-700)] border-[var(--color-success-200)]",
    warning: "bg-[var(--color-warning-100)] text-[var(--color-warning-700)] border-[var(--color-warning-200)]"
  };
  
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${variants[variant]}`}>
      {children}
    </span>
  );
};

const FeatureIcon = ({ icon: Icon, gradient = false }: { icon: any; gradient?: boolean }) => (
  <div className={`w-14 h-14 rounded-[var(--radius-2xl)] flex items-center justify-center ${gradient ? 'bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-secondary-500)] text-white' : 'bg-[var(--color-primary-50)] text-[var(--color-primary-600)]'}`}>
    <Icon className="w-7 h-7" />
  </div>
);

const StatCard = ({ number, label, suffix = "" }: { number: string; label: string; suffix?: string }) => (
  <div className="text-center p-6 rounded-[var(--radius-2xl)] bg-white/50 border border-[var(--border-light)]">
    <div className="text-4xl font-bold text-[var(--color-primary-600)] mb-2">{number}<span className="text-2xl">{suffix}</span></div>
    <div className="text-sm text-[var(--text-secondary)] font-medium">{label}</div>
  </div>
);

const TriggerCard = ({ icon: Icon, title, description, triggers, delay = 0 }: { icon: any; title: string; description: string; triggers: string[]; delay?: number }) => (
  <GlassCard className="p-8 group" style={{ animationDelay: `${delay}ms` }}>
    <div className="absolute top-0 right-0 w-32 h-32  bg-gradient-to-br from-[var(--color-primary-200)] to-[var(--color-secondary-200)] rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity " />
    
    <div className="relative z-10">
      <div className="w-16 h-16 rounded-[var(--radius-2xl)] bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-secondary-600)] flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-white" />
      </div>
      
      <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">{title}</h3>
      <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">{description}</p>
      
      <div className="space-y-3">
        <div className="text-xs font-semibold text-[var(--color-primary-500)] uppercase tracking-wider">Popular Triggers</div>
        {triggers.map((trigger, idx) => (
          <div key={idx} className="flex items-center gap-3 p-3  rounded-[var(--radius-lg)] bg-[var(--bg-secondary)] border border-[var(--border-light)] hover:border-[var(--color-primary-300)] hover:bg-[var(--color-primary-50)] transition-colors cursor-pointer group/item">
            <div className="w-2 h-2 rounded-full bg-[var(--color-primary-500)] group-hover/item:animate-pulse" />
            <span className="text-sm font-medium text-[var(--text-secondary)] group-hover/item:text-[var(--color-primary-700)]">{trigger}</span>
            <ArrowRight className="w-4 h-4 ml-auto text-[var(--text-tertiary)] opacity-0 group-hover/item:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </div>
  </GlassCard>
);

const AutomationFlow = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    { icon: MousePointer, label: "Trigger", desc: "User submits form" },
    { icon: Database, label: "Condition", desc: "Lead score > 80" },
    { icon: Mail, label: "Action", desc: "Send welcome email" },
    { icon: Users, label: "Assign", desc: "Route to sales team" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-[var(--bg-dark)] rounded-[var(--radius-3xl)] p-4 sm:p-6 lg:p-8 overflow-hidden">
  
  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-900)]/20 to-[var(--color-secondary-900)]/20" />

  <div className="relative z-10 flex flex-col sm:flex-row lg:items-center lg:justify-between gap-6 lg:gap-4">
    
    {steps.map((step, idx) => (
      <React.Fragment key={idx}>
        
        {/* STEP */}
        <div
          className={`flex flex-col items-center text-center transition-all duration-500 ${
            activeStep === idx ? "scale-105 sm:scale-110" : "opacity-60"
          }`}
        >
          <div
            className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mb-2 sm:mb-3 transition-colors duration-500 ${
              activeStep === idx
                ? "bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-secondary-500)]"
                : "bg-[var(--color-neutral-700)]"
            }`}
          >
            <step.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
          </div>

          <div className="text-white font-semibold text-xs sm:text-sm">
            {step.label}
          </div>

          <div className="text-[var(--text-tertiary)] text-[10px] sm:text-xs mt-1 max-w-[120px] sm:max-w-none">
            {step.desc}
          </div>
        </div>

        {/* CONNECTOR */}
        {idx < steps.length - 1 && (
          <>
            {/* Vertical line for mobile */}
            <div className="sm:hidden w-0.5 h-6 mx-auto bg-[var(--color-neutral-700)] relative overflow-hidden">
              <div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-[var(--color-primary-500)] to-[var(--color-secondary-500)] transition-all duration-1000"
                style={{
                  height:
                    activeStep > idx
                      ? "100%"
                      : activeStep === idx
                      ? "50%"
                      : "0%",
                }}
              />
            </div>

            {/* Horizontal line for desktop */}
            <div className="hidden lg:block flex-1 h-0.5 bg-[var(--color-neutral-700)] relative overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-secondary-500)] transition-all duration-1000"
                style={{
                  width:
                    activeStep > idx
                      ? "100%"
                      : activeStep === idx
                      ? "50%"
                      : "0%",
                }}
              />
            </div>
          </>
        )}
      </React.Fragment>
    ))}
  </div>
</div>

  );
};

const ComparisonTable = () => {
  const features = [
    { name: "Visual Workflow Builder", basic: false, pro: true, enterprise: true },
    { name: "Real-time Triggers", basic: "5", pro: "Unlimited", enterprise: "Unlimited" },
    { name: "Conditional Logic", basic: false, pro: true, enterprise: true },
    { name: "Multi-step Automation", basic: "3 steps", pro: "20 steps", enterprise: "Unlimited" },
    { name: "API Webhooks", basic: false, pro: true, enterprise: true },
    { name: "Custom Integration", basic: false, pro: false, enterprise: true },
    { name: "Priority Execution", basic: false, pro: true, enterprise: true },
    { name: "Audit Logs", basic: "7 days", pro: "30 days", enterprise: "1 year" }
  ];

  return (
    <div className="overflow-x-auto rounded-[var(--radius-3xl)] border border-[var(--border-light)] bg-white shadow-xl">
      <table className="w-full">
        <thead>
          <tr className="bg-gradient-to-r from-[var(--color-primary-50)] to-[var(--color-secondary-50)]">
            <th className="text-left p-6 font-bold text-[var(--text-primary)]">Features</th>
            <th className="p-6 text-center font-bold text-[var(--text-secondary)]">Basic</th>
            <th className="p-6 text-center font-bold text-[var(--color-primary-600)] bg-[var(--color-primary-100)]/50">Professional</th>
            <th className="p-6 text-center font-bold text-[var(--color-secondary-600)]">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, idx) => (
            <tr key={idx} className="border-t border-[var(--border-light)] hover:bg-[var(--bg-secondary)] transition-colors">
              <td className="p-6 font-medium text-[var(--color-primary-500)]">{feature.name}</td>
              <td className="p-6 text-center">
                {typeof feature.basic === 'boolean' ? (
                  feature.basic ? <Check className="w-5 h-5 text-[var(--color-success-500)] mx-auto" /> : <Minus className="w-5 h-5 text-[var(--text-tertiary)] mx-auto" />
                ) : (
                  <span className="text-[var(--text-secondary)]">{feature.basic}</span>
                )}
              </td>
              <td className="p-6 text-center bg-[var(--color-primary-50)]/30">
                {typeof feature.pro === 'boolean' ? (
                  feature.pro ? <Check className="w-5 h-5 text-[var(--color-success-500)] mx-auto" /> : <Minus className="w-5 h-5 text-[var(--text-tertiary)] mx-auto" />
                ) : (
                  <span className="text-[var(--color-primary-600)] font-semibold">{feature.pro}</span>
                )}
              </td>
              <td className="p-6 text-center">
                {typeof feature.enterprise === 'boolean' ? (
                  feature.enterprise ? <Check className="w-5 h-5 text-[var(--color-success-500)] mx-auto" /> : <Minus className="w-5 h-5 text-[var(--text-tertiary)] mx-auto" />
                ) : (
                  <span className="text-[var(--color-secondary-600)] font-semibold">{feature.enterprise}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => (
  <div className="border border-[var(--border-light)] rounded-[var(--radius-2xl)] overflow-hidden bg-white hover:shadow-lg transition-shadow">
    <button 
      onClick={onClick}
      className="w-full flex items-center justify-between p-6 text-left hover:bg-[var(--bg-secondary)] transition-colors"
    >
      <span className="font-semibold text-sm md:text-md lg:text-lg text-[var(--text-primary)] pr-3 md:pr-6 lg:pr-8">{question}</span>
      <div className={`min-w-10 min-h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[var(--color-primary-600)] text-white rotate-180' : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)]'}`}>
        <ChevronDown className="w-5 h-5" />
      </div>
    </button>
    <div 
      className="overflow-hidden transition-all duration-300"
      style={{ maxHeight: isOpen ? '500px' : '0', opacity: isOpen ? 1 : 0 }}
    >
      <div className="p-6 pt-0 text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border-light)]">
        {answer}
      </div>
    </div>
  </div>
);

const InstantActionsPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Demo request sent for: ${email}`);
    setEmail("");
  };

  const automationTypes = [
    {
      icon: Mail,
      title: "Email Automation",
      description: "Trigger personalized email sequences based on user behavior, lead scoring, or time-based conditions. From welcome series to re-engagement campaigns.",
      triggers: ["New Lead Created", "Email Opened", "Link Clicked", "Form Abandoned", "Score Threshold"]
    },
    {
      icon: MessageSquare,
      title: "SMS & Messaging",
      description: "Instant notifications and two-way messaging automation. Perfect for appointment reminders, urgent updates, and high-priority lead alerts.",
      triggers: ["Appointment Due", "High-Value Lead", "Support Ticket", "Payment Reminder", "Urgent Alert"]
    },
    {
      icon: Users,
      title: "Lead Routing",
      description: "Intelligent lead distribution based on geography, expertise, workload, or custom rules. Ensure every lead reaches the right rep instantly.",
      triggers: ["Territory Match", "Skill Based", "Round Robin", "Load Balancing", "VIP Priority"]
    },
    {
      icon: Database,
      title: "Data Sync",
      description: "Keep your systems in perfect harmony with bi-directional sync. Update records across platforms instantly when triggers fire.",
      triggers: ["Record Updated", "Field Changed", "Status Transition", "Bulk Import", "API Call"]
    },
    {
      icon: Calendar,
      title: "Task & Calendar",
      description: "Automate scheduling, task creation, and calendar management. Create follow-ups, meetings, and deadlines without manual entry.",
      triggers: ["Meeting Scheduled", "Task Due", "Follow-up Time", "Milestone Reached", "Deadline Alert"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Alerts",
      description: "Real-time monitoring and intelligent alerting. Get notified when metrics change, thresholds breach, or anomalies detected.",
      triggers: ["Goal Reached", "Anomaly Detected", "Trend Change", "Threshold Breach", "Report Ready"]
    }
  ];

  const stats = [
    { number: "50+", label: "Trigger Types", suffix: "" },
    { number: "100", label: "Actions Per Workflow", suffix: "+" },
    { number: "99.9", label: "Uptime SLA", suffix: "%" },
    { number: "50", label: "Millisecond", suffix: "ms" }
  ];

  const faqs = [
    {
      question: "How fast do instant actions actually execute?",
      answer: "Our instant actions typically execute within 50-200 milliseconds of the trigger event. For critical workflows like lead routing, we guarantee sub-second execution with our enterprise SLA. Real-time webhooks and API calls ensure your data flows instantly across all connected systems."
    },
    {
      question: "Can I create multi-step conditional workflows?",
      answer: "Absolutely! Our visual workflow builder supports complex conditional logic with if/then/else branches, wait steps, and parallel execution paths. You can create workflows with dozens of steps, nested conditions, and even trigger other workflows from within a workflow."
    },
    {
      question: "What happens if an automation fails?",
      answer: "We built robust error handling with automatic retries, fallback actions, and detailed error logging. If an action fails, you can configure it to retry up to 5 times with exponential backoff, execute an alternative action, or alert your team via email/Slack. All failures are logged in the audit trail."
    },
    {
      question: "Do you support custom webhook integrations?",
      answer: "Yes! Our webhook system supports both incoming and outgoing webhooks with custom headers, authentication, payload mapping, and retry logic. You can connect to virtually any API or service, transform data on the fly, and handle complex authentication schemes including OAuth 2.0."
    },
    {
      question: "How do I monitor my automation performance?",
      answer: "Every workflow includes a real-time analytics dashboard showing execution counts, success rates, average execution time, and error trends. You can drill down into individual execution logs, see exactly which step failed and why, and export detailed reports for compliance or optimization."
    }
  ];

  const useCases = [
    {
      title: "E-commerce",
      icon: ShoppingBag,
      color: "from-orange-400 to-red-500",
      items: ["Abandoned cart recovery", "Order confirmation flows", "Inventory alerts", "Review requests"]
    },
    {
      title: "SaaS",
      icon: Rocket,
      color: "from-blue-400 to-indigo-500",
      items: ["Trial conversion sequences", "Feature adoption nudges", "Churn prevention", "Upgrade campaigns"]
    },
    {
      title: "Real Estate",
      icon: Building,
      color: "from-green-400 to-emerald-500",
      items: ["New listing alerts", "Showing reminders", "Follow-up sequences", "Contract milestones"]
    },
    {
      title: "Healthcare",
      icon: Heart,
      color: "from-rose-400 to-pink-500",
      items: ["Appointment reminders", "Prescription refills", "Care plan updates", "Billing notifications"]
    }
  ];

  return (
    <div className="min-h-screen  font-sans text-[var(--text-primary)] overflow-x-hidden">
      <Head>
        <title>Instant Actions - Trigger-Based Automation | YourCRM</title>
        <meta name="description" content="Build powerful trigger-based automation workflows that execute instantly. Connect systems, automate tasks, and scale operations without code." />
      </Head>

    
      {/* Hero Section */}
<section className="relative pt-20 pb-14 sm:pt-24 sm:pb-16 lg:pt-48 lg:pb-32 overflow-hidden">

  {/* Background Effects */}
  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-50)] via-white to-[var(--color-secondary-50)]" />

  <div className="absolute top-0 right-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[800px] lg:h-[800px] bg-gradient-to-br from-[var(--color-primary-200)] to-[var(--color-secondary-200)] rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/4" />

  <div className="absolute bottom-0 left-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[600px] lg:h-[600px] bg-gradient-to-tr from-[var(--color-secondary-200)] to-[var(--color-primary-200)] rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/4" />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
    <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">

     {/* LEFT CONTENT */}
<div
  className={`transition-all duration-1000 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
>
  {/* Badge */}
  <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full 
  bg-[var(--color-primary-100)] text-[var(--color-primary-700)] 
  font-semibold text-[10px] xs:text-xs sm:text-sm 
  mb-4 sm:mb-6 border border-[var(--color-primary-200)]">
    <Sparkles className="w-4 h-4" />
    New: AI-Powered Trigger Suggestions
  </div>

  {/* Heading */}
  <h1 className="
    font-bold leading-tight 
    text-[clamp(1.8rem,5vw,2.4rem)] 
    sm:text-4xl lg:text-7xl 
    mb-4 sm:mb-6
  ">
    Automation That{" "}
    <span className="block">
      <GradientText>Reacts Instantly</GradientText>
    </span>
  </h1>

  {/* Description */}
  <p  className="
    text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed
  ">
    Build powerful trigger-based workflows that execute in milliseconds.
    Connect your entire tech stack, eliminate manual tasks, and scale
    operations without writing a single line of code.
  </p>

  {/* Buttons */}
  <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 mb-8 lg:mb-12">
    
    <button className="
      w-full sm:w-auto
      px-5 py-3 sm:px-6 sm:py-3 lg:px-8 lg:py-4
      text-sm sm:text-base
      bg-gradient-to-r from-[var(--color-primary-600)] to-[var(--color-secondary-600)] 
      text-white font-bold rounded-full
      hover:shadow-xl hover:shadow-[var(--color-primary-500)]/30
      transition-all hover:-translate-y-1
      flex items-center justify-center gap-2
    ">
      Start Building Free
      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
    </button>

    <button className="
      w-full sm:w-auto
      px-5 py-3 sm:px-6 sm:py-3 lg:px-8 lg:py-4
      text-sm sm:text-base
      bg-white text-[var(--text-primary)] font-bold rounded-full
      border-2 border-[var(--border-medium)]
      hover:border-[var(--color-primary-300)]
      hover:bg-[var(--color-primary-50)]
      transition-all
      flex items-center justify-center gap-2
    ">
      <Play className="w-4 h-4 sm:w-5 sm:h-5" />
      Watch Demo
    </button>

  </div>

  {/* Features */}
  <div className="
    flex flex-col xs:flex-row xs:flex-wrap
    gap-2 xs:gap-3 sm:gap-6
    text-[11px] xs:text-xs sm:text-sm
    text-[var(--text-tertiary)]
  ">
    <div className="flex items-center gap-2">
      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-success-500)] flex-shrink-0" />
      Free 14-day trial
    </div>

    <div className="flex items-center gap-2">
      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-success-500)] flex-shrink-0" />
      No credit card required
    </div>

    <div className="flex items-center gap-2">
      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-success-500)] flex-shrink-0" />
      Cancel anytime
    </div>
  </div>
</div>


      {/* RIGHT CONTENT */}
      <div className={`relative transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="relative rounded-[var(--radius-3xl)] overflow-hidden shadow-2xl border border-[var(--border-light)] bg-white">
          <div className="bg-[var(--bg-secondary)] px-4 py-3 border-b border-[var(--border-light)] flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="ml-4 text-xs text-[var(--text-tertiary)] font-mono">
              Workflow Builder
            </div>
          </div>

          <div className="p-4 sm:p-6 space-y-4">
            <AutomationFlow />

            <div className="mt-4 sm:mt-6 p-4 rounded-[var(--radius-xl)] bg-[var(--color-primary-50)] border border-[var(--color-primary-200)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[var(--color-primary-600)] flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>

                <div className="flex-1">
                  <div className="font-semibold text-sm sm:text-base text-[var(--text-primary)]">
                    Workflow Executed
                  </div>
                  <div className="text-xs text-[var(--text-tertiary)]">
                    2 seconds ago
                  </div>
                </div>

                <Badge variant="success">Success</Badge>
              </div>

              <div className="text-xs sm:text-sm text-[var(--text-secondary)]">
                Lead{" "}
                <span className="font-mono text-[var(--color-primary-600)]">
                  #4829
                </span>{" "}
                qualified and routed to Sales Team A
              </div>
            </div>
          </div>
        </div>

        {/* Floating Stats (Hide on mobile) */}
        <div className="hidden md:block absolute -bottom-6 -left-6 bg-white rounded-[var(--radius-2xl)] p-4 shadow-xl border border-[var(--border-light)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[var(--color-success-100)] flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-[var(--color-success-600)]" />
            </div>
            <div>
              <div className="text-2xl font-bold text-[var(--text-primary)]">
                98.5%
              </div>
              <div className="text-xs text-[var(--text-tertiary)]">
                Uptime
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block absolute -top-6 -right-6 bg-white rounded-[var(--radius-2xl)] p-4 shadow-xl border border-[var(--border-light)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[var(--color-primary-100)] flex items-center justify-center">
              <Clock className="w-5 h-5 text-[var(--color-primary-600)]" />
            </div>
            <div>
              <div className="text-2xl font-bold text-[var(--text-primary)]">
                50ms
              </div>
              <div className="text-xs text-[var(--text-tertiary)]">
                Avg Response
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Stats Bar */}
      <section className="py-12  border-y border-[var(--border-light)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <StatCard key={idx} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Automation Types Grid */}
      <section id="features" className="py-24 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary">Powerful Automation</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 text-[var(--color-primary-700)]">
              Every Trigger Imaginable
            </h2>
            <p className="text-xl text-[var(--text-secondary)]">
              From simple time-based triggers to complex multi-condition workflows. If you can dream it, you can automate it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationTypes.map((type, idx) => (
              <TriggerCard key={idx} {...type} delay={idx * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Visual Workflow Builder Showcase */}
      <section className="py-24 bg-gradient-to-br from-[var(--color-primary-900)] to-[var(--color-secondary-900)] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-50" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 ">
                Visual Workflow Builder
              </h2>
              <p className="text-xl text-[var(--color-primary-100)] mb-8 leading-relaxed">
                Drag, drop, and connect. Build complex automation workflows without writing code. Our intuitive canvas makes it easy to visualize logic, add conditions, and test flows in real-time.
              </p>

              <div className="space-y-6">
                {[
                  { icon: MousePointer, title: "Drag & Drop Interface", desc: "Build workflows visually with our intuitive canvas" },
                  { icon: Cpu, title: "Real-time Testing", desc: "Test your workflows with sample data before going live" },
                  { icon: Shield, title: "Version Control", desc: "Track changes, revert to previous versions, and collaborate safely" },
                  { icon: Globe, title: "Template Library", desc: "Start with 100+ pre-built templates for common use cases" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-[var(--radius-xl)] bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
                    <div className="w-12 h-12 rounded-[var(--radius-lg)] bg-white/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-[var(--color-primary-100)] text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-[var(--bg-dark)] rounded-[var(--radius-3xl)] p-8 shadow-2xl border border-[var(--color-neutral-700)]">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Workflow className="w-6 h-6 text-[var(--color-primary-400)]" />
                    <span className="font-bold">Lead Qualification Flow</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 rounded-full bg-[var(--color-primary-600)] text-xs font-semibold">Active</button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-[var(--radius-xl)] bg-[var(--color-neutral-800)] border border-[var(--color-neutral-700)]">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center">
                      <Database className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">New Lead Created</div>
                      <div className="text-xs text-[var(--text-tertiary)]">Trigger: Webhook</div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="w-5 h-5 text-[var(--text-tertiary)] rotate-90" />
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-[var(--radius-xl)] bg-[var(--color-neutral-800)] border border-[var(--color-primary-500)]">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-primary-500)]/20 text-[var(--color-primary-400)] flex items-center justify-center">
                      <Target className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">Score Lead</div>
                      <div className="text-xs text-[var(--text-tertiary)]">Condition: Demographics + Behavior</div>
                    </div>
                  </div>

                  <div className="flex justify-center gap-8">
                    <div className="flex flex-col items-center">
                      <div className="text-xs text-[var(--text-tertiary)] mb-1">Score {'>'} 80</div>
                      <ArrowRight className="w-5 h-5 text-green-400 -rotate-45" />
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-xs text-[var(--text-tertiary)] mb-1">Score {'<'} 80</div>
                      <ArrowRight className="w-5 h-5 text-yellow-400 rotate-45" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-[var(--radius-xl)] bg-green-500/10 border border-green-500/30">
                      <div className="flex flex-col sm:flex-row items-center gap-2 mb-2">
                        <Mail className="w-4 h-4 text-green-400" />
                        <span className="text-sm font-semibold text-green-400">Send to Sales</span>
                      </div>
                      <div className="text-xs text-[var(--text-tertiary)]">Priority: High</div>
                    </div>
                    <div className="p-4 rounded-[var(--radius-xl)] bg-yellow-500/10 border border-yellow-500/30">
                      <div className="flex flex-col sm:flex-row items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm font-semibold text-yellow-400">Nurture Sequence</span>
                      </div>
                      <div className="text-xs text-[var(--text-tertiary)]">Wait: 2 days</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases by Industry */}
      <section id="use-cases" className="py-24 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="primary">Industry Solutions</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 text-[var(--color-primary-700)]">
              Built for Every Industry
            </h2>
            <p className="text-xl text-[var(--text-secondary)]">
              See how different industries leverage instant actions to drive growth and efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, idx) => (
              <GlassCard key={idx} className="p-6 group cursor-pointer">
                <div className={`w-14 h-14 rounded-[var(--radius-xl)] bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <useCase.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{useCase.title}</h3>
                <ul className="space-y-3">
                  {useCase.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <Check className="w-4 h-4 text-[var(--color-success-500)] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Ecosystem */}
      <section className="py-24 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[var(--color-primary-700)]">
              Connects With Everything
            </h2>
            <p className="text-xl text-[var(--text-secondary)]">
              200+ native integrations and thousands more via Zapier, Make, and custom webhooks.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)] z-10 pointer-events-none" />
            
            <div className="flex gap-8 animate-scroll overflow-hidden py-8">
              {[...Array(2)].map((_, setIdx) => (
                <div key={setIdx} className="flex gap-8 flex-shrink-0">
                  {[Database, Mail, MessageSquare, Calendar, BarChart3, Globe, Lock, Settings, Rocket, Layers].map((Icon, idx) => (
                    <div key={idx} className="w-24 h-24 rounded-[var(--radius-2xl)] bg-white border border-[var(--border-light)] shadow-lg flex items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all">
                      <Icon className="w-10 h-10 text-[var(--color-primary-600)]" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-2 text-[var(--color-primary-600)] font-semibold hover:gap-3 transition-all">
              View All Integrations <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="pricing" className="py-24 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[var(--color-primary-700)]">
              Choose Your Power
            </h2>
            <p className="text-xl text-[var(--text-secondary)]">
              Scale your automation from basic triggers to enterprise-grade orchestration.
            </p>
          </div>

          <ComparisonTable />

          <div className="mt-12 grid md:grid-cols-3 gap-8 ">
            {[
              { title: "Starter", price: "$29", period: "/month", desc: "Perfect for small teams getting started with automation", features: ["5 active workflows", "1,000 executions/month", "Email support", "Basic triggers"] },
              { title: "Professional", price: "$79", period: "/month", desc: "For growing businesses that need serious automation power", features: ["Unlimited workflows", "50,000 executions/month", "Priority support", "Advanced conditions", "Webhooks & API"], popular: true },
              { title: "Enterprise", price: "Custom", period: "", desc: "Dedicated infrastructure for high-volume automation needs", features: ["Unlimited everything", "Dedicated infrastructure", "SLA guarantee", "Custom integrations", "Dedicated success manager"] }
            ].map((plan, idx) => (
              <GlassCard key={idx} className={`p-8 ${plan.popular ? 'ring-2 ring-[var(--color-primary-500)] scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute  -top-1 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--color-primary-600)] text-white text-sm font-bold rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-[var(--color-primary-700)]">{plan.title}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-[var(--color-primary-600)]">{plan.price}</span>
                  <span className="text-[var(--text-tertiary)]">{plan.period}</span>
                </div>
                <p className="text-[var(--text-secondary)] mb-6 text-sm">{plan.desc}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-[var(--color-success-500)]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-[var(--radius-xl)] font-semibold transition-all ${plan.popular ? 'bg-gradient-to-r from-[var(--color-primary-600)] to-[var(--color-secondary-600)] text-white hover:shadow-lg' : 'bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] border border-[var(--border-medium)]'}`}>
                  {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                </button>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 ">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[var(--color-primary-700)]">Frequently Asked Questions</h2>
            <p className="text-xl text-[var(--text-secondary)]">
              Everything you need to know about instant actions and trigger-based automation.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <FAQItem 
                key={idx} 
                {...faq} 
                isOpen={openFaq === idx}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-[var(--color-primary-600)] to-[var(--color-secondary-700)] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Ready to Automate Everything?
          </h2>
          <p className="text-xl text-[var(--color-primary-100)] mb-10 max-w-2xl mx-auto">
            Join 10,000+ teams saving 20+ hours weekly with intelligent automation. Start your free trial today.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-3 flex-wrap justify-center mb-8">
            <input 
              type="email" 
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 outline-none focus:bg-white/20 transition-colors min-w-[280px]"
              required
            />
            <button 
              type="submit"
              className="px-8 py-4 bg-white text-[var(--color-primary-600)] font-bold rounded-full hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Get Started Free
            </button>
          </form>

          <div className="flex items-center justify-center gap-8 text-sm text-[var(--color-primary-100)]">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              14-day free trial
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              No credit card
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-[var(--bg-dark)] text-[var(--text-tertiary)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-primary-600)] to-[var(--color-secondary-600)] flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">YourCRM</span>
              </div>
              <p className="text-sm leading-relaxed">
                Empowering businesses with intelligent automation and instant actions that drive growth.
              </p>
            </div>
            
            {[
              { title: "Product", links: ["Features", "Integrations", "Pricing", "Changelog"] },
              { title: "Resources", links: ["Documentation", "API Reference", "Templates", "Community"] },
              { title: "Company", links: ["About", "Blog", "Careers", "Contact"] }
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="text-white font-bold mb-4">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((link, i) => (
                    <li key={i}>
                      <Link href="#" className="hover:text-white transition-colors">{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-[var(--color-neutral-800)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm">© 2024 YourCRM. All rights reserved.</div>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-white transition-colors">Security</Link>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

// Additional icons needed
const ShoppingBag = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

const Building = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const Heart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

export default InstantActionsPage;