"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Zap,
  Settings,
  Workflow,
  Clock,
  MessageSquare,
  Calendar,
  TrendingUp,
  Shield,
  CheckCircle2,
  ArrowRight,
  Play,
  Sparkles,
  Bot,
  Bell,
  BarChart3,
  Users,
  Home,
  Star,
  ChevronRight,
  RefreshCw,
  Mail,
  Smartphone,
  Lock,
  Globe,
  Award,
  Timer,
  Percent,
  Moon,
  Sun,
  CloudRain,
  Plane,
  PartyPopper,
  X,
  Menu,
  ArrowUpRight,
  MousePointer2,
  Layers,
  GitBranch,
  Repeat,
  Send,
  FileText,
  CreditCard,
  Key,
  Sparkle,
  Wand2,
  Cpu,
  Gauge,
  DollarSign,
  Building2,
} from "lucide-react";
import Link from "next/link";

// ==========================================
// Animation Components
// ==========================================

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-primary-400)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
    <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--color-secondary-400)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
    <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-[var(--color-accent-400)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
  </div>
);

const FloatingCard = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <div
    className={`animate-float ${className}`}
    style={{ animationDelay: `${delay}ms` }}
  >
    {children}
  </div>
);

const PulseRing = ({ children }: { children: React.ReactNode }) => (
  <div className="relative">
    <div className="absolute inset-0 bg-[var(--color-primary-500)] rounded-full animate-ping opacity-20" />
    <div className="absolute inset-0 bg-[var(--color-primary-500)] rounded-full animate-pulse opacity-40" />
    <div className="relative">{children}</div>
  </div>
);

// ==========================================
// Header Component
// ==========================================



// ==========================================
// Hero Section
// ==========================================

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary-100)] border border-[var(--color-primary-200)] text-[var(--color-primary-700)] text-sm font-semibold animate-pulse">
              <Sparkles className="w-4 h-4" />
              New: AI-Powered Automation
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-[var(--text-primary)]">Automate Your</span>
              <br />
              <span className="bg-gradient-to-r from-[var(--color-primary-600)] via-[var(--color-secondary-600)] to-[var(--color-primary-600)] bg-clip-text text-transparent">
                Property Success
              </span>
            </h1>

            <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-lg">
              From guest messaging to dynamic pricing, let intelligent workflows handle 
              the repetitive tasks while you focus on scaling your portfolio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-[var(--color-primary-600)] to-[var(--color-secondary-600)] text-white font-bold rounded-full hover:shadow-2xl hover:shadow-[var(--color-primary-500)]/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                Build Your First Workflow
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group px-8 py-4 bg-[var(--bg-primary)] text-[var(--text-primary)] font-bold rounded-full border border-[var(--border-medium)] hover:border-[var(--color-primary-300)] hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                <Play className="w-5 h-5 text-[var(--color-primary-600)]" />
                Watch Demo
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-[var(--bg-primary)] bg-gradient-to-br from-[var(--color-primary-300)] to-[var(--color-secondary-300)]"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[var(--color-warning-500)] text-[var(--color-warning-500)]" />
                  ))}
                </div>
                <p className="text-sm text-[var(--text-tertiary)]">
                  Trusted by <span className="font-semibold text-[var(--text-primary)]">2,000+</span> hosts
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual - Interactive Dashboard Preview */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* Main Dashboard Card */}
            <div
              className="relative w-full max-w-lg bg-[var(--bg-primary)]/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-[var(--border-light)] p-6 transform transition-transform duration-200 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`,
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-secondary-500)] flex items-center justify-center">
                    <Workflow className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--text-primary)]">Automation Hub</h3>
                    <p className="text-xs text-[var(--text-tertiary)]">12 active workflows</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-success-100)] text-[var(--color-success-700)] text-xs font-semibold">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-success-500)] animate-pulse" />
                  Live
                </div>
              </div>

              {/* Workflow List */}
              <div className="space-y-3 mb-6">
                {[
                  { icon: <MessageSquare className="w-4 h-4" />, name: "Auto Guest Response", status: "Active", time: "2m ago" },
                  { icon: <TrendingUp className="w-4 h-4" />, name: "Dynamic Pricing", status: "Running", time: "5m ago" },
                  { icon: <Calendar className="w-4 h-4" />, name: "Check-in Reminder", status: "Scheduled", time: "1h ago" },
                  { icon: <Shield className="w-4 h-4" />, name: "Security Deposit", status: "Active", time: "3h ago" },
                ].map((workflow, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-xl bg-[var(--bg-secondary)] hover:bg-[var(--color-primary-50)] transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[var(--color-primary-100)] text-[var(--color-primary-600)] flex items-center justify-center group-hover:scale-110 transition-transform">
                        {workflow.icon}
                      </div>
                      <div>
                        <p className="font-medium text-[var(--text-primary)] text-sm">{workflow.name}</p>
                        <p className="text-xs text-[var(--text-tertiary)]">{workflow.time}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      workflow.status === "Active" ? "bg-[var(--color-success-100)] text-[var(--color-success-700)]" :
                      workflow.status === "Running" ? "bg-[var(--color-primary-100)] text-[var(--color-primary-700)]" :
                      "bg-[var(--color-warning-100)] text-[var(--color-warning-700)]"
                    }`}>
                      {workflow.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-3 rounded-xl bg-gradient-to-br from-[var(--color-primary-50)] to-[var(--color-secondary-50)]">
                  <p className="text-2xl font-bold text-[var(--color-primary-600)]">24h</p>
                  <p className="text-xs text-[var(--text-tertiary)]">Time Saved</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-gradient-to-br from-[var(--color-success-50)] to-[var(--color-primary-50)]">
                  <p className="text-2xl font-bold text-[var(--color-success-600)]">98%</p>
                  <p className="text-xs text-[var(--text-tertiary)]">Automation</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-gradient-to-br from-[var(--color-secondary-50)] to-[var(--color-accent-50)]">
                  <p className="text-2xl font-bold text-[var(--color-secondary-600)]">+32%</p>
                  <p className="text-xs text-[var(--text-tertiary)]">Revenue</p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <FloatingCard delay={0} className="absolute -top-4 -right-4 lg:right-0">
              <div className="bg-[var(--bg-primary)] rounded-2xl shadow-xl border border-[var(--border-light)] p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[var(--color-success-100)] flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-success-600)]" />
                </div>
                <div>
                  <p className="font-bold text-[var(--text-primary)]">Booking Confirmed</p>
                  <p className="text-xs text-[var(--text-tertiary)]">Auto-responded in 0.3s</p>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard delay={1000} className="absolute -bottom-4 -left-4 lg:left-0">
              <div className="bg-[var(--bg-primary)] rounded-2xl shadow-xl border border-[var(--border-light)] p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-[var(--color-primary-600)]" />
                  <span className="font-semibold text-[var(--text-primary)]">Price Optimized</span>
                </div>
                <p className="text-2xl font-bold text-[var(--color-success-600)]">+$147</p>
                <p className="text-xs text-[var(--text-tertiary)]">Tonight's rate increased</p>
              </div>
            </FloatingCard>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// Workflow Builder Visual
// ==========================================

const WorkflowBuilderSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <MousePointer2 className="w-6 h-6" />,
      title: "Trigger",
      description: "Guest sends inquiry",
      color: "var(--color-primary-500)",
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Condition",
      description: "Check availability",
      color: "var(--color-secondary-500)",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Action",
      description: "Send instant reply",
      color: "var(--color-secondary-600)",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Follow-up",
      description: "Schedule reminder",
      color: "var(--color-success-500)",
    },
  ];

  return (
    <section className="py-24  relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-secondary-100)] text-[var(--color-secondary-700)] text-sm font-semibold mb-6">
            <Wand2 className="w-4 h-4" />
            Visual Workflow Builder
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Build Automations Without Code
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Drag, drop, and connect. Create complex automation workflows in minutes, 
            not hours. No technical skills required.
          </p>
        </div>

        {/* Interactive Workflow Demo */}
        <div className="bg-[var(--bg-primary)] rounded-3xl shadow-2xl border border-[var(--border-light)] p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Visual Flow */}
            <div className="relative">
              <div className="flex flex-col gap-6">
                {steps.map((step, idx) => (
                  <div
                    key={idx}
                    className={`relative flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-500 cursor-pointer ${
                      activeStep === idx
                        ? "border-[var(--color-primary-500)] bg-[var(--color-primary-50)] shadow-lg"
                        : "border-[var(--border-light)] bg-[var(--bg-secondary)] hover:border-[var(--color-primary-300)]"
                    }`}
                    onClick={() => setActiveStep(idx)}
                  >
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-white transition-transform duration-300"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[var(--text-primary)]">{step.title}</h4>
                      <p className="text-sm text-[var(--text-secondary)]">{step.description}</p>
                    </div>
                    {activeStep === idx && (
                      <div className="w-3 h-3 rounded-full bg-[var(--color-primary-500)] animate-pulse" />
                    )}
                    
                    {/* Connector Line */}
                    {idx < steps.length - 1 && (
                      <div className="absolute left-7 top-full w-0.5 h-6 bg-[var(--border-medium)]" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Configuration Panel */}
            <div className="bg-[var(--bg-secondary)] rounded-2xl p-6 border border-[var(--border-light)]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <Settings className="w-5 h-5 text-[var(--color-primary-600)]" />
                  Configuration
                </h3>
                <span className="text-xs text-[var(--text-tertiary)]">Step {activeStep + 1} of 4</span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Trigger Type
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-medium)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)]">
                    <option>New Booking Inquiry</option>
                    <option>Check-in Day</option>
                    <option>Check-out Day</option>
                    <option>New Review</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Response Template
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-medium)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] resize-none"
                    defaultValue="Hi {{guest_name}}, thanks for your interest! Your dates look great. Would you like me to hold them for 24 hours?"
                  />
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--color-primary-50)] border border-[var(--color-primary-200)]">
                  <Sparkles className="w-5 h-5 text-[var(--color-primary-600)]" />
                  <p className="text-sm text-[var(--color-primary-700)]">
                    AI will personalize this message for each guest automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// Feature Grid Section
// ==========================================

const FeatureGridSection = () => {
  const features = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Smart Messaging",
      description: "AI-powered responses that sound human. Handle inquiries instantly, 24/7.",
      gradient: "from-blue-500 to-cyan-500",
      stat: "0.3s",
      statLabel: "Avg Response",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Dynamic Pricing",
      description: "Machine learning optimizes your rates based on demand, events, and seasonality.",
      gradient: "from-purple-500 to-pink-500",
      stat: "+32%",
      statLabel: "Revenue Boost",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Calendar Sync",
      description: "Never get double-booked. Real-time sync across Airbnb, Vrbo, Booking.com.",
      gradient: "from-orange-500 to-red-500",
      stat: "100%",
      statLabel: "Sync Accuracy",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Auto Screening",
      description: "Verify guests automatically. ID checks, deposit collection, and fraud detection.",
      gradient: "from-green-500 to-emerald-500",
      stat: "99.8%",
      statLabel: "Fraud Blocked",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Review Management",
      description: "Automated review requests and response suggestions to boost your rating.",
      gradient: "from-yellow-500 to-amber-500",
      stat: "4.9★",
      statLabel: "Avg Rating",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Task Automation",
      description: "Auto-assign cleaning, maintenance, and restocking based on bookings.",
      gradient: "from-indigo-500 to-violet-500",
      stat: "20h",
      statLabel: "Weekly Saved",
    },
  ];

  return (
    <section className="py-24 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-primary-500)] mb-4">
            Powerful Automation Tools
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Everything you need to run your properties on autopilot. 
            Connect once, automate forever.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-[var(--color-primary-100)] rounded-3xl p-8 border border-[var(--border-light)] hover:border-transparent transition-all duration-500 overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--color-primary-600)] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-[var(--border-light)]">
                  <div>
                    <p className="text-2xl font-bold text-[var(--text-primary)]">{feature.stat}</p>
                    <p className="text-xs text-[var(--text-tertiary)]">{feature.statLabel}</p>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-[var(--bg-primary)] border border-[var(--border-medium)] flex items-center justify-center group-hover:bg-(--color-primary-600) group-hover:text-white text-[var(--color-primary-600)] group-hover:border-transparent transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// Integration Ecosystem
// ==========================================

const IntegrationSection = () => {
  const integrations = [
    { name: "Airbnb", icon: <Home className="w-6 h-6" />, color: "#FF5A5F" },
    { name: "Booking.com", icon: <Calendar className="w-6 h-6" />, color: "#003580" },
    { name: "Vrbo", icon: <Building2 className="w-6 h-6" />, color: "#1E3C72" },
    { name: "Stripe", icon: <CreditCard className="w-6 h-6" />, color: "#635BFF" },
    { name: "Slack", icon: <MessageSquare className="w-6 h-6" />, color: "#4A154B" },
    { name: "Zapier", icon: <Zap className="w-6 h-6" />, color: "#FF4A00" },
  ];

  return (
    <section className="py-24  relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-[var(--color-primary-500)] mb-4">
            Connects With Everything
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Native integrations with all major platforms. Plus 5000+ apps via Zapier.
          </p>
        </div>

        {/* Orbital Animation */}
        <div className="relative h-96 flex items-center justify-center">
          {/* Center */}
          <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-secondary-600)] flex items-center justify-center shadow-2xl z-10">
            <Workflow className="w-12 h-12 text-white" />
          </div>

          {/* Orbiting Icons */}
          {integrations.map((integration, idx) => {
            const angle = (idx / integrations.length) * 360;
            const radius = 140;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={idx}
                className="absolute w-16 h-16 rounded-2xl bg-[var(--bg-primary)] shadow-xl border border-[var(--border-light)] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  animation: `orbit ${20 + idx * 2}s linear infinite`,
                  animationDelay: `${idx * -3.33}s`,
                }}
              >
                <div className="text-[var(--text-tertiary)] group-hover:text-[var(--color-primary-600)] transition-colors">
                  {integration.icon}
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  <span className="text-xs font-semibold text-[var(--text-primary)] bg-[var(--bg-primary)] px-2 py-1 rounded shadow">
                    {integration.name}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            <circle
              cx="50%"
              cy="50%"
              r={140}
              fill="none"
              stroke="var(--color-primary-300)"
              strokeWidth="1"
              strokeDasharray="5,5"
            />
          </svg>
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 text-[var(--color-primary-600)] font-semibold hover:underline">
            View All 50+ Integrations
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(140px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(140px) rotate(-360deg); }
        }
      `}</style>
    </section>
  );
};

// ==========================================
// ROI Calculator Section
// ==========================================

const ROICalculatorSection = () => {
  const [properties, setProperties] = useState(3);
  const [hoursPerWeek, setHoursPerWeek] = useState(15);
  const hourlyRate = 50;

  const timeSaved = hoursPerWeek * 0.8; // 80% automation
  const moneySaved = timeSaved * hourlyRate * 4; // Monthly
  const revenueIncrease = properties * 500; // Avg $500 more per property

  return (
    <section className="py-24 bg-gradient-to-br from-[var(--color-primary-600)] to-[var(--color-secondary-700)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Calculate Your Time & Money Saved
            </h2>
            <p className="text-lg text-[var(--color-primary-100)] mb-8">
              See exactly how much automation can save you monthly. 
              More properties = more savings.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[var(--color-primary-100)]">Number of Properties</span>
                  <span className="text-2xl font-bold">{properties}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={properties}
                  onChange={(e) => setProperties(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
                />
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[var(--color-primary-100)]">Hours Spent Per Week</span>
                  <span className="text-2xl font-bold">{hoursPerWeek}h</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="40"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Your Monthly Impact</h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-[var(--color-success-50)] rounded-2xl border border-[var(--color-success-200)]">
                <div>
                  <p className="text-sm text-[var(--color-success-700)]">Time Saved</p>
                  <p className="text-3xl font-bold text-[var(--color-success-600)]">{timeSaved.toFixed(1)}h</p>
                </div>
                <Clock className="w-10 h-10 text-[var(--color-success-500)]" />
              </div>

              <div className="flex items-center justify-between p-4 bg-[var(--color-primary-50)] rounded-2xl border border-[var(--color-primary-200)]">
                <div>
                  <p className="text-sm text-[var(--color-primary-700)]">Labor Cost Saved</p>
                  <p className="text-3xl font-bold text-[var(--color-primary-600)]">${moneySaved}</p>
                </div>
                <DollarSign className="w-10 h-10 text-[var(--color-primary-500)]" />
              </div>

              <div className="flex items-center justify-between p-4 bg-[var(--color-secondary-50)] rounded-2xl border border-[var(--color-secondary-200)]">
                <div>
                  <p className="text-sm text-[var(--color-secondary-700)]">Additional Revenue</p>
                  <p className="text-3xl font-bold text-[var(--color-secondary-600)]">+${revenueIncrease}</p>
                </div>
                <TrendingUp className="w-10 h-10 text-[var(--color-secondary-500)]" />
              </div>

              <div className="pt-6 border-t border-[var(--border-light)]">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[var(--text-primary)]">Total Monthly Value</span>
                  <span className="text-3xl font-bold bg-gradient-to-r from-[var(--color-primary-600)] to-[var(--color-secondary-600)] bg-clip-text text-transparent">
                    ${(moneySaved + revenueIncrease).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// Testimonials Section
// ==========================================

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "I went from spending 30 hours a week on my 5 properties to just 2 hours. The automation is incredible.",
      author: "Michael Chen",
      role: "Portfolio Owner",
      location: "Austin, TX",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      metric: "93%",
      metricLabel: "Time Reduced",
    },
    {
      quote: "The dynamic pricing alone paid for the subscription in the first month. My revenue is up 40%.",
      author: "Sarah Johnson",
      role: "Superhost",
      location: "Miami, FL",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      metric: "+40%",
      metricLabel: "Revenue Increase",
    },
    {
      quote: "Guest messages are answered instantly, even at 3 AM. My response rate is now 100%.",
      author: "David Park",
      role: "Property Manager",
      location: "Seattle, WA",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      metric: "100%",
      metricLabel: "Response Rate",
    },
  ];

  return (
    <section className="py-24 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-[var(--color-primary-500)] mb-4">
            Loved by Hosts Worldwide
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Join thousands of property owners who've transformed their business with automation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="group bg-[var(--bg-secondary)] rounded-3xl p-8 border border-[var(--border-light)] hover:shadow-2xl hover:shadow-[var(--color-primary-500)]/10 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[var(--color-warning-500)] text-[var(--color-warning-500)]" />
                ))}
              </div>
              
              <p className="text-[var(--text-primary)] text-lg leading-relaxed mb-8">
                "{t.quote}"
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-[var(--border-light)]">
                <div className="flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[var(--color-primary-200)]"
                  />
                  <div>
                    <p className="font-bold text-[var(--text-primary)]">{t.author}</p>
                    <p className="text-sm text-[var(--text-tertiary)]">{t.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-[var(--color-primary-600)]">{t.metric}</p>
                  <p className="text-xs text-[var(--text-tertiary)]">{t.metricLabel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// CTA Section
// ==========================================

const CTASection = () => (
  <section className="py-24  relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-primary-400)] rounded-full filter blur-3xl opacity-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-secondary-400)] rounded-full filter blur-3xl opacity-10" />
    </div>

    <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
      <div className="bg-[var(--bg-primary)] rounded-[2.5rem] p-12 lg:p-16 shadow-2xl border border-[var(--border-light)]">
        <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-secondary-600)] flex items-center justify-center shadow-xl shadow-[var(--color-primary-500)]/30">
          <RocketIcon className="w-10 h-10 text-white" />
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-primary-500)] mb-6">
          Ready to Automate Your Success?
        </h2>
        <p className="text-xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
          Start your free 14-day trial today. No credit card required. 
          Set up your first automation in under 5 minutes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="px-10 py-5 bg-gradient-to-r from-[var(--color-primary-600)] to-[var(--color-secondary-600)] text-white font-bold text-sm md:text-lg rounded-full hover:shadow-2xl hover:shadow-[var(--color-primary-500)]/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
            Start Free Trial
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-10 py-5 bg-[var(--bg-secondary)] text-[var(--text-primary)] font-bold text-sm md:text-lg rounded-full border border-[var(--border-medium)] hover:border-[var(--color-primary-300)] hover:shadow-lg transition-all">
            Schedule Demo
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-[var(--text-tertiary)]">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[var(--color-success-500)]" />
            14-day free trial
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[var(--color-success-500)]" />
            No credit card required
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[var(--color-success-500)]" />
            Cancel anytime
          </span>
        </div>
      </div>
    </div>
  </section>
);

// Helper icon component
const RocketIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

// ==========================================
// Footer
// ==========================================


// ==========================================
// Main Page Component
// ==========================================

const WorkflowAutomationPage = () => {
  return (
    <div className="min-h-screen ">
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* <Header /> */}
      <HeroSection />
      <WorkflowBuilderSection />
      <FeatureGridSection />
      <IntegrationSection />
      <ROICalculatorSection />
      <TestimonialsSection />
      <CTASection />
      {/* <Footer /> */}
    </div>
  );
};

export default WorkflowAutomationPage;