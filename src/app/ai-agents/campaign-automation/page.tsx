// app/campaign-automation-agent/page.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Rocket,
  Target,
  Zap,
  BarChart3,
  Calendar,
  Mail,
  Smartphone,
  Share2,
  CheckCircle2,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Clock,
  Globe,
  Layers,
  Sparkles,
  Play,
  Pause,
  RefreshCw,
  ChevronRight,
  Bot,
  Send,
  Megaphone,
  PieChart,
  Bell,
  Settings,
  MoreHorizontal
} from 'lucide-react';

export default function CampaignAutomationAgentLanding() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [email, setEmail] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    const interval = setInterval(() => {
      if (isPlaying) {
        setActiveStep((prev) => (prev + 1) % 5);
      }
    }, 2500);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, [isPlaying]);

  const stats = [
    { value: '5×', label: 'ROI Increase', subtext: 'vs manual campaigns' },
    { value: '80%', label: 'Time Saved', subtext: 'On campaign setup' },
    { value: '3×', label: 'Engagement', subtext: 'AI-optimized content' },
    { value: '24/7', label: 'Optimization', subtext: 'Always learning' },
  ];

  const features = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Auto-Launch Campaigns',
      description: 'AI creates, schedules, and launches multi-channel campaigns automatically. From idea to execution in minutes, not days.',
      stat: '10min',
      statLabel: 'Setup Time'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Smart Audience Segmentation',
      description: 'AI analyzes behavior, purchase history, and engagement to create micro-segments that convert 3× better than broad targeting.',
      stat: '50+',
      statLabel: 'Auto Segments'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Real-Time Optimization',
      description: 'Campaigns self-optimize while running. AI adjusts send times, subject lines, and content based on live performance data.',
      stat: 'Live',
      statLabel: 'A/B Testing'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Predictive Analytics',
      description: 'Know which campaigns will succeed before launching. AI predicts open rates, CTR, and revenue with 94% accuracy.',
      stat: '94%',
      statLabel: 'Accuracy'
    }
  ];

  const campaignSteps = [
    { 
      step: '01', 
      title: 'Audience Analysis', 
      desc: 'AI scans your database and identifies high-value segments',
      status: 'complete',
      icon: <Users className="w-5 h-5" />
    },
    { 
      step: '02', 
      title: 'Content Generation', 
      desc: 'Creates personalized copy for each segment and channel',
      status: 'complete',
      icon: <Mail className="w-5 h-5" />
    },
    { 
      step: '03', 
      title: 'Channel Orchestration', 
      desc: 'Schedules optimal sequence across email, SMS, social',
      status: 'active',
      icon: <Layers className="w-5 h-5" />
    },
    { 
      step: '04', 
      title: 'Launch & Monitor', 
      desc: 'Auto-launches and tracks performance in real-time',
      status: 'pending',
      icon: <Rocket className="w-5 h-5" />
    },
    { 
      step: '05', 
      title: 'Optimize & Scale', 
      desc: 'AI doubles down on winners, pauses underperformers',
      status: 'pending',
      icon: <TrendingUp className="w-5 h-5" />
    }
  ];

  const testimonials = [
    {
      quote: "We used to spend 2 weeks on campaign setup. Now the AI does it in 10 minutes with better results than our manual efforts.",
      author: "Jennifer Walsh",
      role: "CMO, GrowthStack",
      metric: "10min",
      metricLabel: "vs 2 Weeks",
      avatar: "JW",
      gradient: "from-[var(--color-primary-500)] to-[var(--color-primary-700)]"
    },
    {
      quote: "The AI predicted which campaigns would flop with 94% accuracy. We saved $50K in ad spend in the first month alone.",
      author: "Michael Torres",
      role: "VP Marketing, DataFlow",
      metric: "$50K",
      metricLabel: "Saved",
      avatar: "MT",
      gradient: "from-[var(--color-secondary-500)] to-[var(--color-secondary-700)]"
    },
    {
      quote: "Our email engagement tripled. The AI knows exactly when each person wants to hear from us and what they want to hear.",
      author: "Sarah Chen",
      role: "Head of Growth, Bloom",
      metric: "3×",
      metricLabel: "Engagement",
      avatar: "SC",
      gradient: "from-[var(--color-primary-400)] to-[var(--color-secondary-500)]"
    }
  ];

  const channels = [
    { name: 'Email', icon: <Mail className="w-6 h-6" />, color: 'bg-blue-500' },
    { name: 'SMS', icon: <Smartphone className="w-6 h-6" />, color: 'bg-green-500' },
    { name: 'Social', icon: <Share2 className="w-6 h-6" />, color: 'bg-pink-500' },
    { name: 'Push', icon: <Bell className="w-6 h-6" />, color: 'bg-orange-500' },
    { name: 'Ads', icon: <Megaphone className="w-6 h-6" />, color: 'bg-purple-500' },
    { name: 'Web', icon: <Globe className="w-6 h-6" />, color: 'bg-cyan-500' },
  ];

  return (
    <main className="min-h-screen bg-[var(--color-primary-50)] text-[var(--color-primary-900)] font-sans overflow-x-hidden selection:bg-[var(--color-primary-200)] selection:text-[var(--color-primary-900)]">
      {/* Background Effects - Using Tailwind Only */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,102,204,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,102,204,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        {/* Animated Orbs */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full mix-blend-multiply blur-[100px] opacity-30 animate-pulse bg-[var(--color-primary-300)] transition-all duration-300 ease-out"
          style={{
            left: `${mousePosition.x * 30}%`,
            top: `${mousePosition.y * 30}%`
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full mix-blend-multiply blur-[100px] opacity-20 animate-pulse bg-[var(--color-secondary-300)] transition-all duration-500 ease-out"
          style={{
            right: `${(1 - mousePosition.x) * 20}%`,
            bottom: `${(1 - mousePosition.y) * 20}%`,
            animationDelay: '2s'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-100)]/30 via-transparent to-[var(--color-secondary-100)]/30" />
      </div>

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-xl border border-[var(--color-primary-200)] shadow-sm mb-8 hover:bg-white transition-colors cursor-default group">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary-400)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-primary-600)]"></span>
                </span>
                <span className="text-sm font-medium text-[var(--color-primary-700)]">AI-Powered Campaign Engine</span>
                <Sparkles className="w-4 h-4 text-[var(--color-primary-500)] animate-pulse" />
              </div>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.9] mb-8 tracking-tight text-[var(--color-primary-900)]">
                Campaigns That{' '}
                <span className="bg-gradient-to-r from-[var(--color-primary-600)] via-[var(--color-secondary-600)] to-[var(--color-primary-800)] bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                  Run Themselves
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-[var(--color-primary-700)] mb-10 max-w-xl leading-relaxed font-light">
                An AI agent that plans, creates, launches, and optimizes your marketing campaigns across all channels. 
                <span className="text-[var(--color-primary-600)] font-medium"> From strategy to execution—fully automated.</span>
              </p>

              {/* Email Capture */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mb-8">
                <div className="flex-1 relative">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-6 py-5 rounded-2xl bg-white border-2 border-[var(--color-primary-200)] text-[var(--color-primary-900)] placeholder:text-[var(--color-primary-400)] focus:outline-none focus:border-[var(--color-primary-600)] focus:ring-4 focus:ring-[var(--color-primary-100)] transition-all text-lg shadow-sm"
                  />
                </div>
                <button className="px-8 py-5 rounded-2xl bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] text-white font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[var(--color-primary-200)] flex items-center justify-center gap-2 group whitespace-nowrap">
                  Deploy Agent
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex items-center gap-6 text-sm text-[var(--color-primary-600)] flex-wrap">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-primary-600)]" />
                  <span>Free 14-day trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-primary-600)]" />
                  <span>No credit card</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-primary-600)]" />
                  <span>5-min setup</span>
                </div>
              </div>
            </div>

            {/* Right: Campaign Visualizer */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative animate-[float_8s_ease-in-out_infinite]">
                {/* Main Interface Card */}
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl shadow-[var(--color-primary-200)] border border-white">
                  {/* Header */}
                  <div className="px-6 py-4 border-b border-[var(--color-primary-200)] flex items-center justify-between bg-[var(--color-primary-50)]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-primary-700)] flex items-center justify-center shadow-lg shadow-[var(--color-primary-300)]">
                        <Rocket className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-[var(--color-primary-900)]">CampaignAgent</div>
                        <div className="text-xs text-[var(--color-primary-600)] flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                          3 Active Campaigns • Optimizing
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="p-2 rounded-lg hover:bg-[var(--color-primary-100)] transition-colors"
                      >
                        {isPlaying ? <Pause className="w-4 h-4 text-[var(--color-primary-600)]" /> : <Play className="w-4 h-4 text-[var(--color-primary-600)]" />}
                      </button>
                    </div>
                  </div>

                  {/* Campaign Workflow */}
                  <div className="p-6 bg-gradient-to-b from-white to-[var(--color-primary-50)]">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-sm font-semibold text-[var(--color-primary-800)]">Q1 Product Launch Campaign</span>
                      <span className="text-xs text-[var(--color-primary-600)] bg-[var(--color-primary-100)] px-3 py-1 rounded-full">Auto-Pilot</span>
                    </div>

                    {/* Progress Steps */}
                    <div className="space-y-3">
                      {campaignSteps.map((step, idx) => (
                        <div 
                          key={idx} 
                          className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-500 ${
                            idx === activeStep 
                              ? 'bg-white border-2 border-[var(--color-primary-400)] shadow-lg scale-105' 
                              : idx < activeStep 
                                ? 'bg-[var(--color-primary-100)]/50 opacity-70' 
                                : 'bg-white/50 opacity-50'
                          }`}
                        >
                          {/* Status Indicator */}
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                            idx < activeStep 
                              ? 'bg-green-500 text-white' 
                              : idx === activeStep 
                                ? 'bg-[var(--color-primary-600)] text-white animate-pulse' 
                                : 'bg-[var(--color-primary-200)] text-[var(--color-primary-600)]'
                          }`}>
                            {idx < activeStep ? <CheckCircle2 className="w-5 h-5" /> : step.icon}
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-bold text-[var(--color-primary-700)] uppercase">{step.step}</span>
                              <span className="text-sm font-semibold text-[var(--color-primary-900)]">{step.title}</span>
                              {idx === activeStep && (
                                <span className="ml-auto text-xs font-bold text-[var(--color-primary-600)] animate-pulse">IN PROGRESS...</span>
                              )}
                            </div>
                            <p className={`text-xs ${idx <= activeStep ? 'text-[var(--color-primary-700)]' : 'text-[var(--color-primary-500)]'}`}>
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Campaign Stats */}
                    <div className="mt-6 grid grid-cols-3 gap-4 p-4 bg-white rounded-xl border border-[var(--color-primary-200)]">
                      <div className="text-center">
                        <div className="text-xl font-bold text-[var(--color-primary-900)]">24.5K</div>
                        <div className="text-xs text-[var(--color-primary-600)]">Reach</div>
                      </div>
                      <div className="text-center border-x border-[var(--color-primary-200)]">
                        <div className="text-xl font-bold text-green-600">34%</div>
                        <div className="text-xs text-[var(--color-primary-600)]">Open Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-[var(--color-primary-900)]">$12K</div>
                        <div className="text-xs text-[var(--color-primary-600)]">Revenue</div>
                      </div>
                    </div>
                  </div>

                  {/* Channel Icons */}
                  <div className="px-6 py-4 border-t border-[var(--color-primary-200)] bg-[var(--color-primary-50)]">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[var(--color-primary-600)] uppercase">Active Channels</span>
                      <div className="flex gap-2">
                        {channels.slice(0, 4).map((channel, idx) => (
                          <div key={idx} className={`w-8 h-8 rounded-lg ${channel.color} flex items-center justify-center text-white shadow-md`}>
                            {React.cloneElement(channel.icon, { className: "w-4 h-4" })}
                          </div>
                        ))}
                        <div className="w-8 h-8 rounded-lg bg-[var(--color-primary-200)] flex items-center justify-center text-[var(--color-primary-600)] text-xs font-bold">
                          +2
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Stats Cards */}
                <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-xl rounded-2xl p-4 animate-[float_8s_ease-in-out_infinite] border border-[var(--color-primary-200)] shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-md">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-[var(--color-primary-900)]">5×</div>
                      <div className="text-xs text-[var(--color-primary-600)]">ROI Increase</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-xl rounded-2xl p-4 animate-[float_8s_ease-in-out_infinite_4s] border border-[var(--color-primary-200)] shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-secondary-500)] to-[var(--color-secondary-700)] flex items-center justify-center shadow-md">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-[var(--color-primary-900)]">80%</div>
                      <div className="text-xs text-[var(--color-primary-600)]">Time Saved</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className={`mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 text-center hover:bg-white transition-all duration-300 group border border-[var(--color-primary-200)] hover:border-[var(--color-primary-400)] shadow-sm hover:shadow-md">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[var(--color-primary-600)] via-[var(--color-secondary-600)] to-[var(--color-primary-800)] bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform inline-block">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-[var(--color-primary-900)] mb-1">{stat.label}</div>
                <div className="text-xs text-[var(--color-primary-600)]">{stat.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES - Bento Grid */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block text-sm font-medium text-[var(--color-primary-600)] uppercase tracking-widest mb-4">Capabilities</span>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-[var(--color-primary-900)]">
              Marketing on{' '}
              <span className="bg-gradient-to-r from-[var(--color-primary-600)] via-[var(--color-secondary-600)] to-[var(--color-primary-800)] bg-clip-text text-transparent">
                Autopilot
              </span>
            </h2>
            <p className="text-xl text-[var(--color-primary-700)]">
              Everything you need to plan, execute, and optimize high-performing campaigns—without the manual work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className={`bg-white/70 backdrop-blur-xl rounded-3xl p-8 hover:bg-white transition-all duration-500 group border border-[var(--color-primary-200)] hover:border-[var(--color-primary-400)] shadow-sm hover:shadow-lg ${idx === 0 || idx === 3 ? 'lg:col-span-2' : ''}`}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-primary-100)] to-[var(--color-primary-200)] flex items-center justify-center text-[var(--color-primary-600)] mb-6 group-hover:scale-110 transition-transform border border-[var(--color-primary-300)]">
                  {feature.icon}
                </div>
                <div className="flex items-end gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-[var(--color-primary-900)]">{feature.title}</h3>
                  <span className="text-2xl font-bold text-[var(--color-primary-600)] mb-1">{feature.stat}</span>
                </div>
                <p className="text-[var(--color-primary-700)] leading-relaxed mb-4">{feature.description}</p>
                <div className="text-xs text-[var(--color-primary-600)] font-medium uppercase tracking-wider">{feature.statLabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative py-32 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block text-sm font-medium text-[var(--color-primary-600)] uppercase tracking-widest mb-4">How It Works</span>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-[var(--color-primary-900)]">
              From Idea to{' '}
              <span className="bg-gradient-to-r from-[var(--color-primary-600)] via-[var(--color-secondary-600)] to-[var(--color-primary-800)] bg-clip-text text-transparent">
                Revenue
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-px bg-gradient-to-r from-[var(--color-primary-400)] via-[var(--color-secondary-400)] to-[var(--color-primary-600)]" />

            {[
              {
                step: '01',
                icon: <Target className="w-6 h-6" />,
                title: 'Set Your Goal',
                description: 'Tell the AI your objective—leads, sales, engagement, or retention. It builds the entire strategy automatically.'
              },
              {
                step: '02',
                icon: <Sparkles className="w-6 h-6" />,
                title: 'AI Builds Everything',
                description: 'Audience segments, content, designs, and channel mix—all generated and optimized for your goal.'
              },
              {
                step: '03',
                icon: <Rocket className="w-6 h-6" />,
                title: 'Launch & Scale',
                description: 'One-click launch across all channels. AI monitors, optimizes, and scales winners in real-time.'
              }
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 h-full hover:bg-white transition-all duration-500 border border-[var(--color-primary-200)] hover:border-[var(--color-primary-400)] shadow-sm hover:shadow-lg">
                  <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-primary-700)] flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-[var(--color-primary-300)]">
                    {item.step}
                  </div>
                  <div className="pt-4">
                    <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary-100)] flex items-center justify-center text-[var(--color-primary-600)] mb-6 border border-[var(--color-primary-200)]">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[var(--color-primary-900)] mb-3">{item.title}</h3>
                    <p className="text-[var(--color-primary-700)] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MULTI-CHANNEL SHOWCASE */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block text-sm font-medium text-[var(--color-primary-600)] uppercase tracking-widest mb-4">Omnichannel</span>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-[var(--color-primary-900)]">
              One Campaign,{' '}
              <span className="bg-gradient-to-r from-[var(--color-primary-600)] via-[var(--color-secondary-600)] to-[var(--color-primary-800)] bg-clip-text text-transparent">
                Every Channel
              </span>
            </h2>
            <p className="text-xl text-[var(--color-primary-700)] max-w-2xl mx-auto">
              Orchestrate seamless customer journeys across email, SMS, social, ads, and web—automatically coordinated by AI.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {channels.map((channel, idx) => (
              <div key={idx} className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 hover:bg-white transition-all duration-500 group border border-[var(--color-primary-200)] hover:border-[var(--color-primary-400)] shadow-sm hover:shadow-lg text-center">
                <div className={`w-14 h-14 rounded-2xl ${channel.color} flex items-center justify-center text-white mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  {channel.icon}
                </div>
                <h3 className="text-lg font-bold text-[var(--color-primary-900)] mb-1">{channel.name}</h3>
                <p className="text-xs text-[var(--color-primary-600)]">Auto-optimized</p>
              </div>
            ))}
          </div>

          {/* Channel Flow Visualization */}
          <div className="mt-12 bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-[var(--color-primary-200)] shadow-lg">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-primary-700)] flex items-center justify-center mx-auto lg:mx-0 mb-3 shadow-lg shadow-[var(--color-primary-300)]">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-primary-900)]">CampaignAgent</h3>
                <p className="text-sm text-[var(--color-primary-600)]">Central Brain</p>
              </div>

              <div className="hidden lg:flex flex-1 items-center justify-center relative">
                <div className="w-full h-px bg-gradient-to-r from-[var(--color-primary-400)] via-[var(--color-secondary-400)] to-[var(--color-primary-600)]"></div>
                <div className="absolute w-4 h-4 bg-[var(--color-primary-600)] rounded-full animate-pulse"></div>
                <div className="absolute left-1/4 w-2 h-2 bg-[var(--color-primary-400)] rounded-full animate-ping"></div>
                <div className="absolute right-1/4 w-2 h-2 bg-[var(--color-secondary-400)] rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {['Email', 'SMS', 'Social', 'Ads', 'Push', 'Web'].map((ch) => (
                  <div key={ch} className="px-4 py-2 rounded-full bg-[var(--color-primary-100)] text-[var(--color-primary-700)] text-sm font-medium border border-[var(--color-primary-200)]">
                    {ch}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-32 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block text-sm font-medium text-[var(--color-primary-600)] uppercase tracking-widest mb-4">Results</span>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-[var(--color-primary-900)]">
              Marketing Teams{' '}
              <span className="bg-gradient-to-r from-[var(--color-primary-600)] via-[var(--color-secondary-600)] to-[var(--color-primary-800)] bg-clip-text text-transparent">
                Love It
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 relative group hover:bg-white transition-all duration-500 border border-[var(--color-primary-200)] hover:border-[var(--color-primary-400)] shadow-sm hover:shadow-lg">
                <div className={`absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform`}>
                  <Star className="w-8 h-8 text-white fill-white" />
                </div>

                <div className="mb-6">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${testimonial.gradient} text-white text-sm font-bold mb-4`}>
                    <TrendingUp className="w-4 h-4" />
                    {testimonial.metric} {testimonial.metricLabel}
                  </div>
                  <p className="text-[var(--color-primary-800)] text-lg leading-relaxed">"{testimonial.quote}"</p>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-[var(--color-primary-200)]">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--color-primary-900)]">{testimonial.author}</div>
                    <div className="text-sm text-[var(--color-primary-600)]">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block text-sm font-medium text-[var(--color-primary-600)] uppercase tracking-widest mb-4">Connected</span>
          <h2 className="text-5xl lg:text-6xl font-bold mb-16 text-[var(--color-primary-900)]">
            Plays Nice With Your{' '}
            <span className="bg-gradient-to-r from-[var(--color-primary-600)] via-[var(--color-secondary-600)] to-[var(--color-primary-800)] bg-clip-text text-transparent">
              Stack
            </span>
          </h2>

          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-12 relative overflow-hidden border border-[var(--color-primary-200)] shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-100)]/50 via-[var(--color-secondary-100)]/50 to-[var(--color-primary-100)]/50"></div>
            
            <div className="relative z-10 flex flex-wrap justify-center gap-4">
              {['Salesforce', 'HubSpot', 'Marketo', 'Mailchimp', 'Klaviyo', 'Shopify', 'Google Ads', 'Facebook Ads', 'Slack', 'Zapier'].map((tool) => (
                <div key={tool} className="px-6 py-3 rounded-xl bg-white/70 backdrop-blur text-[var(--color-primary-700)] hover:text-[var(--color-primary-900)] hover:bg-white transition-colors border border-[var(--color-primary-200)] shadow-sm font-medium">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden border border-[var(--color-primary-300)] shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-100)]/50 via-[var(--color-secondary-100)]/50 to-[var(--color-primary-100)]/50"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[var(--color-primary-200)]/30 via-transparent to-transparent"></div>
            
            <div className="relative z-10">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-primary-700)] flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-[var(--color-primary-300)] animate-pulse">
                <Rocket className="w-12 h-12 text-white" />
              </div>

              <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-[var(--color-primary-900)]">
                Let AI Run Your{' '}
                <span className="bg-gradient-to-r from-[var(--color-primary-600)] via-[var(--color-secondary-600)] to-[var(--color-primary-800)] bg-clip-text text-transparent">
                  Campaigns
                </span>
              </h2>
              
              <p className="text-xl text-[var(--color-primary-700)] mb-10 max-w-2xl mx-auto">
                Join 2,000+ marketing teams who've replaced campaign chaos with AI automation. 
                Start your first automated campaign today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="flex-1 px-6 py-4 rounded-xl bg-white border-2 border-[var(--color-primary-200)] text-[var(--color-primary-900)] placeholder:text-[var(--color-primary-400)] focus:outline-none focus:border-[var(--color-primary-600)] focus:ring-4 focus:ring-[var(--color-primary-100)] transition-all shadow-sm"
                />
                <button className="px-8 py-4 rounded-xl bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] text-white font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[var(--color-primary-200)] whitespace-nowrap">
                  Start Free Trial
                </button>
              </div>

              <p className="text-sm text-[var(--color-primary-600)]">
                Free 14-day trial • No credit card • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-12 px-4 border-t border-[var(--color-primary-200)] bg-white/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-primary-700)] flex items-center justify-center shadow-md">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-[var(--color-primary-900)]">CampaignAgent</span>
          </div>
          
          <div className="flex gap-8 text-sm text-[var(--color-primary-600)]">
            <a href="#" className="hover:text-[var(--color-primary-900)] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[var(--color-primary-900)] transition-colors">Terms</a>
            <a href="#" className="hover:text-[var(--color-primary-900)] transition-colors">Contact</a>
          </div>

          <div className="text-sm text-[var(--color-primary-500)]">
            © 2026 CampaignAgent AI
          </div>
        </div>
      </footer>
    </main>
  );
}