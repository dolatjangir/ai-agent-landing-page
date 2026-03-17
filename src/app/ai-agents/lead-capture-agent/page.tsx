// app/lead-capture/page.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
Target, 
Users, 
Zap, 
MessageSquare, 
BarChart3, 
CheckCircle2, 
ArrowRight,
Phone,
Mail,
Building2,
TrendingUp,
Clock,
Shield,
Sparkles,
Play,
ChevronDown,
Menu,
X,
Star,
Quote,
ArrowUpRight,
Filter,
Bot,
Radio,
Smartphone,
Globe
} from 'lucide-react';

export default function LeadCapturePage() {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [activeFeature, setActiveFeature] = useState(0);
const [formStep, setFormStep] = useState(0);
const [isVisible, setIsVisible] = useState(false);

const heroRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  setIsVisible(true);
  
  const handleScroll = () => {
    const reveals = document.querySelectorAll('.reveal-on-scroll');
    reveals.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('is-visible');
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

const features = [
  {
    icon: <Bot className="w-6 h-6" />,
    title: 'AI Conversation Starter',
    description: 'Intelligent chatbots that qualify leads 24/7 with natural, human-like conversations.',
    stat: '85%',
    statLabel: 'Response Rate',
    color: 'primary'
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Smart Qualification',
    description: 'Automatically score and route leads based on budget, timeline, and buying intent.',
    stat: '3×',
    statLabel: 'Conversion Lift',
    color: 'secondary'
  },
  {
    icon: <Radio className="w-6 h-6" />,
    title: 'Multi-Channel Capture',
    description: 'Capture leads from websites, social media, landing pages, and paid ads in one place.',
    stat: '12+',
    statLabel: 'Channels',
    color: 'primary'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Instant Response',
    description: 'Sub-second auto-responses keep hot leads engaged while they\'re still interested.',
    stat: '<2s',
    statLabel: 'Response Time',
    color: 'secondary'
  }
];

const channels = [
  { name: 'Website Chat', icon: <MessageSquare className="w-5 h-5" />, status: 'Live', leads: '1,247' },
  { name: 'Facebook Ads', icon: <Globe className="w-5 h-5" />, status: 'Active', leads: '892' },
  { name: 'Google Ads', icon: <Target className="w-5 h-5" />, status: 'Active', leads: '634' },
  { name: 'Landing Pages', icon: <Building2 className="w-5 h-5" />, status: 'Live', leads: '423' },
  { name: 'SMS Campaigns', icon: <Smartphone className="w-5 h-5" />, status: 'Active', leads: '315' },
  { name: 'Email Forms', icon: <Mail className="w-5 h-5" />, status: 'Live', leads: '208' },
];

const testimonials = [
  {
    quote: "We went from losing 60% of after-hours inquiries to capturing 95% of them. LeadCapture AI never sleeps.",
    author: "Jennifer Walsh",
    role: "Broker, Walsh Realty Group",
    image: "JW",
    metric: "95%",
    metricDesc: "Capture Rate"
  },
  {
    quote: "The AI qualification is scary accurate. It knows which leads are serious better than our veteran agents.",
    author: "Michael Torres",
    role: "Team Lead, Compass",
    image: "MT",
    metric: "40%",
    metricDesc: "Time Saved"
  },
  {
    quote: "Our cost per lead dropped by 35% in the first month. The instant response feature is a game changer.",
    author: "Sarah Chen",
    role: "Marketing Director, Keller Williams",
    image: "SC",
    metric: "35%",
    metricDesc: "Lower CPL"
  }
];

const pricingTiers = [
  {
    name: "Starter",
    price: "49",
    description: "Perfect for solo agents",
    features: ["500 leads/month", "Website chatbot", "Email capture", "Basic routing", "24/7 support"]
  },
  {
    name: "Professional",
    price: "149",
    description: "For growing teams",
    popular: true,
    features: ["Unlimited leads", "Multi-channel capture", "AI qualification", "Smart routing", "CRM integration", "Priority support"]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large brokerages",
    features: ["Everything in Pro", "Custom AI training", "White-label options", "API access", "Dedicated success manager", "SLA guarantee"]
  }
];

return (
  <main className="min-h-screen bg-white font-sans overflow-x-hidden">
    {/* Inject Custom Styles */}
    <style jsx global>{`
      :root {
        --primary-50: var(--color-primary-50);
        --primary-100: var(--color-primary-100);
        --primary-200: var(--color-primary-200);
        --primary-300: var(--color-primary-300);
        --primary-400: var(--color-primary-400);
        --primary-500: var(--color-primary-500);
        --primary-600: var(--color-primary-600);
        --primary-700: var(--color-primary-700);
        --primary-800: var(--color-primary-800);
        --primary-900: var(--color-primary-900);
        --secondary-100: var(--color-secondary-100);
        --secondary-200: var(--color-secondary-200);
        --secondary-500: var(--color-secondary-500);
      }
      
      @keyframes float-slow {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(2deg); }
      }
      
      @keyframes pulse-ring {
        0% { transform: scale(0.8); opacity: 0.5; }
        100% { transform: scale(1.3); opacity: 0; }
      }
      
      @keyframes slide-up-fade {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes gradient-x {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      
      .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
      .animate-pulse-ring { animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      .animate-slide-up { animation: slide-up-fade 0.8s ease-out forwards; }
      .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 8s ease infinite; }
      
      .reveal-on-scroll {
        opacity: 0;
        transform: translateY(24px);
        transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
      }
      
      .reveal-on-scroll.is-visible {
        opacity: 1;
        transform: translateY(0);
      }
      
      .glass-card {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.3);
      }
      
      .text-gradient {
        background: linear-gradient(135deg, var(--color-primary-600) 0%, var(--color-primary-800) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      
      .bg-gradient-brand {
        background: linear-gradient(135deg, var(--color-primary-600) 0%, var(--color-primary-800) 100%);
      }
      
      .hover-lift {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      
      .hover-lift:hover {
        transform: translateY(-4px);
        box-shadow: 0 20px 40px -15px rgba(0, 102, 204, 0.2);
      }
    `}</style>

   

    {/* Hero Section - Asymmetric Layout */}
    <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-[var(--color-primary-50)] via-white to-[var(--color-secondary-50)]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-primary-200)] rounded-full mix-blend-multiply filter blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-secondary-200)] rounded-full mix-blend-multiply filter blur-3xl animate-float-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content - 7 cols */}
          <div className={`lg:col-span-7 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[var(--color-primary-200)] shadow-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary-500)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-primary-600)]"></span>
              </span>
              <span className="text-xs font-semibold text-[var(--color-primary-700)] uppercase tracking-wider">Now with GPT-4 Powered Conversations</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-primary-900)] leading-tight mb-6">
              Never Lose Another{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-gradient">Real Estate Lead</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[var(--color-primary-200)]" viewBox="0 0 200 9" fill="none">
                  <path d="M2.00025 6.99997C25.7509 9.37499 83.415 -3.73631 198 3.49999" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
              AI-powered lead capture that qualifies prospects 24/7, routes hot leads instantly, and nurtures cold leads automatically. Convert more inquiries into appointments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[var(--color-primary-600)] text-white font-semibold hover:bg-[var(--color-primary-700)] transition-all shadow-lg shadow-[var(--color-primary-200)] hover:shadow-xl hover:shadow-[var(--color-primary-300)]">
                Start 14-Day Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[var(--color-primary-700)] font-semibold border-2 border-[var(--color-primary-200)] hover:border-[var(--color-primary-400)] transition-colors">
                <Play className="w-4 h-4 fill-current" />
                Watch Demo
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-primary-600)]" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-primary-600)]" />
                <span>Setup in 5 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-primary-600)]" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Right Content - 5 cols - Interactive Widget */}
          <div className={`lg:col-span-5 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              {/* Main Chat Widget */}
              <div className="glass-card rounded-3xl shadow-2xl shadow-[var(--color-primary-100)] overflow-hidden border border-[var(--color-primary-100)]">
                {/* Widget Header */}
                <div className="bg-gradient-brand px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">LeadCapture AI</div>
                      <div className="text-xs text-[var(--color-primary-100)] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                        Online now
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-white/40"></div>
                    <div className="w-2 h-2 rounded-full bg-white/40"></div>
                  </div>
                </div>

                {/* Chat Content */}
                <div className="p-6 space-y-4 bg-white">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-primary-100)] flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-[var(--color-primary-600)]" />
                    </div>
                    <div className="bg-[var(--color-primary-50)] rounded-2xl rounded-tl-none px-4 py-3 text-sm text-slate-700 max-w-[80%]">
                      Hi! 👋 I'm here to help you find your dream home. Are you looking to buy or sell?
                    </div>
                  </div>

                  <div className="flex gap-3 justify-end">
                    <div className="bg-[var(--color-primary-600)] rounded-2xl rounded-tr-none px-4 py-3 text-sm text-white max-w-[80%]">
                      Looking to buy in Austin
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-primary-100)] flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-[var(--color-primary-600)]" />
                    </div>
                    <div className="bg-[var(--color-primary-50)] rounded-2xl rounded-tl-none px-4 py-3 text-sm text-slate-700 max-w-[80%]">
                      Great! What's your budget range? This helps me find the perfect matches for you. 💰
                    </div>
                  </div>

                  {/* Typing Indicator */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-primary-100)] flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-[var(--color-primary-600)]" />
                    </div>
                    <div className="bg-[var(--color-primary-50)] rounded-2xl rounded-tl-none px-4 py-3 flex gap-1">
                      <span className="w-2 h-2 bg-[var(--color-primary-400)] rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-[var(--color-primary-400)] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                      <span className="w-2 h-2 bg-[var(--color-primary-400)] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    </div>
                  </div>
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-[var(--color-primary-100)] bg-[var(--color-primary-50)]">
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-3 rounded-full bg-white border border-[var(--color-primary-200)] text-sm focus:outline-none focus:border-[var(--color-primary-500)]"
                      readOnly
                    />
                    <button className="w-10 h-10 rounded-full bg-[var(--color-primary-600)] flex items-center justify-center text-white hover:bg-[var(--color-primary-700)] transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Stats Cards */}
              {/* <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl shadow-[var(--color-primary-100)] p-4 border border-[var(--color-primary-100)] animate-float-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[var(--color-primary-900)]">+127%</div>
                    <div className="text-xs text-slate-500">Lead Volume</div>
                  </div>
                </div>
              </div> */}

              {/* <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl shadow-[var(--color-primary-100)] p-4 border border-[var(--color-primary-100)] animate-float-slow" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary-100)] flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[var(--color-primary-600)]" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[var(--color-primary-900)]">24/7</div>
                    <div className="text-xs text-slate-500">Availability</div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Live Activity Bar */}
    <div className="bg-[var(--color-primary-900)] py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-8 text-white/90 text-sm flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Live: <strong className="text-white">1,247</strong> leads captured today</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/20"></div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[var(--color-primary-300)]" />
            <span>Avg response: <strong className="text-white">1.2 seconds</strong></span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/20"></div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[var(--color-primary-300)]" />
            <span>Qualification rate: <strong className="text-white">94%</strong></span>
          </div>
        </div>
      </div>
    </div>

    {/* Features Grid - Horizontal Scroll on Mobile */}
    <section id="features" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className="inline-block text-xs font-bold text-[var(--color-primary-600)] uppercase tracking-widest mb-4">Features</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary-900)] mb-6">
            Capture & Convert Leads on{' '}
            <span className="text-gradient">Autopilot</span>
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to capture, qualify, and convert more real estate leads — while you focus on closing deals.
          </p>
        </div>

        {/* Feature Tabs - Desktop */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-2 gap-4 mb-8">
            {features.map((feature, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFeature(idx)}
                className={`text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                  activeFeature === idx 
                    ? 'border-[var(--color-primary-600)] bg-[var(--color-primary-50)]' 
                    : 'border-slate-100 hover:border-[var(--color-primary-200)] bg-white'
                }`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                  activeFeature === idx ? 'bg-[var(--color-primary-600)] text-white' : 'bg-[var(--color-primary-100)] text-[var(--color-primary-600)]'
                }`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--color-primary-900)] mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{feature.description}</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-[var(--color-primary-600)]">{feature.stat}</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider">{feature.statLabel}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Feature Cards - Mobile/Tablet */}
        <div className="lg:hidden grid sm:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-[var(--color-primary-200)] bg-[var(--color-primary-50)] reveal-on-scroll" style={{ transitionDelay: `${idx * 100}ms` }}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-primary-600)] text-white mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-[var(--color-primary-900)] mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm mb-4">{feature.description}</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-[var(--color-primary-600)]">{feature.stat}</span>
                <span className="text-xs text-slate-500 uppercase tracking-wider">{feature.statLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Multi-Channel Dashboard Preview */}
    <section id="channels" className="py-20 lg:py-32 bg-[var(--color-primary-50)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal-on-scroll">
            <span className="inline-block text-xs font-bold text-[var(--color-primary-600)] uppercase tracking-widest mb-4">Multi-Channel</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary-900)] mb-6">
              One Inbox for{' '}
              <span className="text-gradient">Every Channel</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Stop juggling between platforms. Capture leads from your website, social ads, landing pages, and more — all organized in one intelligent dashboard.
            </p>

            <div className="space-y-4">
              {[
                { icon: <Globe className="w-5 h-5" />, text: 'Website chat & forms' },
                { icon: <Target className="w-5 h-5" />, text: 'Facebook & Google Ads' },
                { icon: <Smartphone className="w-5 h-5" />, text: 'SMS & WhatsApp campaigns' },
                { icon: <Building2 className="w-5 h-5" />, text: 'Landing pages & QR codes' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[var(--color-primary-100)] hover-lift">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-primary-100)] flex items-center justify-center text-[var(--color-primary-600)]">
                    {item.icon}
                  </div>
                  <span className="font-medium text-slate-700">{item.text}</span>
                  <CheckCircle2 className="w-5 h-5 text-green-500 ml-auto" />
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-on-scroll">
            <div className="bg-white rounded-3xl shadow-2xl shadow-[var(--color-primary-200)] overflow-hidden border border-[var(--color-primary-100)]">
              <div className="px-6 py-4 border-b border-[var(--color-primary-100)] flex items-center justify-between bg-[var(--color-primary-50)]">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-[var(--color-primary-600)]" />
                  <span className="font-semibold text-[var(--color-primary-900)]">All Channels</span>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">Live</span>
                </div>
              </div>
              
              <div className="divide-y divide-[var(--color-primary-100)]">
                {channels.map((channel, idx) => (
                  <div key={idx} className="px-6 py-4 flex items-center justify-between hover:bg-[var(--color-primary-50)] transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-100)] flex items-center justify-center text-[var(--color-primary-600)] group-hover:bg-[var(--color-primary-600)] group-hover:text-white transition-colors">
                        {channel.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">{channel.name}</div>
                        <div className="text-xs text-slate-500 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                          {channel.status}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-[var(--color-primary-600)]">{channel.leads}</div>
                      <div className="text-xs text-slate-500">leads</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-6 py-4 bg-[var(--color-primary-50)] border-t border-[var(--color-primary-100)]">
                <button className="w-full py-3 rounded-xl border-2 border-dashed border-[var(--color-primary-300)] text-[var(--color-primary-600)] font-medium hover:bg-[var(--color-primary-100)] transition-colors flex items-center justify-center gap-2">
                  <PlusIcon className="w-4 h-4" />
                  Add New Channel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials - Horizontal Cards */}
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className="inline-block text-xs font-bold text-[var(--color-primary-600)] uppercase tracking-widest mb-4">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary-900)] mb-6">
            Trusted by Top Real Estate{' '}
            <span className="text-gradient">Professionals</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="group relative bg-white rounded-3xl p-8 border border-[var(--color-primary-100)] hover:border-[var(--color-primary-300)] transition-all duration-300 hover-lift reveal-on-scroll" style={{ transitionDelay: `${idx * 150}ms` }}>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[var(--color-primary-600)] rounded-2xl flex items-center justify-center text-white shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform">
                <Quote className="w-6 h-6" />
              </div>

              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary-50)] border border-[var(--color-primary-200)] mb-4">
                  <TrendingUp className="w-4 h-4 text-[var(--color-primary-600)]" />
                  <span className="text-sm font-bold text-[var(--color-primary-600)]">{testimonial.metric} {testimonial.metricDesc}</span>
                </div>
                <p className="text-slate-700 leading-relaxed text-lg">"{testimonial.quote}"</p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-[var(--color-primary-100)]">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-primary-400)] to-[var(--color-primary-600)] flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-bold text-[var(--color-primary-900)]">{testimonial.author}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Pricing Section */}
    <section id="pricing" className="py-20 lg:py-32 bg-[var(--color-primary-900)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className="inline-block text-xs font-bold text-[var(--color-primary-300)] uppercase tracking-widest mb-4">Pricing</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Simple, Transparent{' '}
            <span className="text-[var(--color-primary-300)]">Pricing</span>
          </h2>
          <p className="text-lg text-[var(--color-primary-200)]">
            Start free, scale as you grow. No hidden fees, no long-term contracts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, idx) => (
            <div key={idx} className={`relative rounded-3xl p-8 ${tier.popular ? 'bg-white scale-105 shadow-2xl shadow-black/20' : 'bg-[var(--color-primary-800)] border border-[var(--color-primary-700)]'} reveal-on-scroll`} style={{ transitionDelay: `${idx * 100}ms` }}>
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--color-primary-600)] text-white text-xs font-bold rounded-full">
                  MOST POPULAR
                </div>
              )}
              
              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-2 ${tier.popular ? 'text-[var(--color-primary-900)]' : 'text-white'}`}>{tier.name}</h3>
                <p className={`text-sm ${tier.popular ? 'text-slate-500' : 'text-[var(--color-primary-300)]'}`}>{tier.description}</p>
              </div>

              <div className="mb-6">
                <span className={`text-4xl font-bold ${tier.popular ? 'text-[var(--color-primary-900)]' : 'text-white'}`}>${tier.price}</span>
                {tier.price !== 'Custom' && <span className={`text-sm ${tier.popular ? 'text-slate-500' : 'text-[var(--color-primary-300)]'}`}>/month</span>}
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3">
                    <CheckCircle2 className={`w-5 h-5 ${tier.popular ? 'text-[var(--color-primary-600)]' : 'text-[var(--color-primary-400)]'}`} />
                    <span className={`text-sm ${tier.popular ? 'text-slate-600' : 'text-[var(--color-primary-200)]'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-semibold transition-all ${tier.popular ? 'bg-[var(--color-primary-600)] text-white hover:bg-[var(--color-primary-700)] shadow-lg shadow-[var(--color-primary-200)]' : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'}`}>
                {tier.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal-on-scroll">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-[var(--color-primary-100)] mb-8">
          <Sparkles className="w-10 h-10 text-[var(--color-primary-600)]" />
        </div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary-900)] mb-6">
          Ready to Never Miss a Lead Again?
        </h2>
        
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Join 2,000+ real estate professionals using LeadCapture AI to convert more inquiries into closed deals.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 rounded-full border-2 border-[var(--color-primary-200)] focus:outline-none focus:border-[var(--color-primary-600)] text-slate-700 placeholder:text-slate-400"
          />
          <button className="px-8 py-4 rounded-full bg-[var(--color-primary-600)] text-white font-semibold hover:bg-[var(--color-primary-700)] transition-all shadow-lg shadow-[var(--color-primary-200)] whitespace-nowrap">
            Start Free Trial
          </button>
        </div>

        <p className="mt-6 text-sm text-slate-500">
          Free 14-day trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>

  
  </main>
);
}

// Helper Icon Component
function PlusIcon({ className }: { className?: string }) {
return (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);
}