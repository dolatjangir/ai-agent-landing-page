"use client"

import React, { useState } from 'react'
import Head from 'next/head'
import { motion, useInView, Variants } from 'framer-motion'
import { 
  Check,
  X,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  Users,
  Crown,
  Sparkles,
  Building2,
  Calendar,
  MessageSquare,
  BarChart3,
  Globe,
  HeadphonesIcon,
  ChevronDown,
  HelpCircle,
  Rocket,
  Lock,
  Award,
  ThumbsUp,
  Target,
  LineChart,
  Wallet,
  Percent,
  Bell,
  FileText,
  Smartphone,
  Laptop,
  ChevronRight,
  PlayCircle,
  Mail,
  Phone,
  CheckCircle2,
  Infinity as InfinityIcon ,
  Workflow
} from 'lucide-react'

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
}

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
}

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
}

// Animated counter hook
const useAnimatedCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = React.useState(0)
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })
  
  React.useEffect(() => {
    if (isInView) {
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration])
  
  return { count, ref }
}

const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const { count, ref } = useAnimatedCounter(value)
  return <span ref={ref}>{count}{suffix}</span>
}

// Gradient Text Component
const GradientText = ({ children, className = "", variant = "primary" }: { 
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary" | "accent" | "gold" | "success"
}) => {
  const gradients = {
    primary: "from-[var(--color-primary-600)] to-[var(--color-secondary-600)]",
    secondary: "from-[var(--color-secondary-500)] to-[var(--color-primary-500)]",
    accent: "from-cyan-500 to-blue-600",
    gold: "from-amber-500 via-yellow-400 to-amber-600",
    success: "from-emerald-500 to-teal-600"
  }
  
  return (
    <span className={`bg-gradient-to-r ${gradients[variant]} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  )
}

// Badge Component
const Badge = ({ children, variant = "primary", size = "md", glow = false, className }: { 
  children: React.ReactNode
  variant?: "primary" | "secondary" | "accent" | "success" | "gold" | "dark"
  size?: "sm" | "md" | "lg"
  glow?: boolean
  className?: string
}) => {
  const sizes = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-1.5 text-sm",
    lg: "px-6 py-2 text-base"
  }
  
  const variants = {
    primary: "bg-[var(--color-primary-100)] text-[var(--color-primary-700)] border-[var(--color-primary-200)]",
    secondary: "bg-[var(--color-secondary-100)] text-[var(--color-secondary-700)] border-[var(--color-secondary-200)]",
    accent: "bg-cyan-100 text-cyan-700 border-cyan-200",
    success: "bg-[var(--color-success-100)] text-[var(--color-success-700)] border-[var(--color-success-200)]",
    gold: "bg-amber-100 text-amber-700 border-amber-200",
    dark: "bg-slate-800 text-white border-slate-700"
  }
  
  return (
    <span className={` ${className} inline-flex items-center gap-2 rounded-full font-bold border ${sizes[size]} ${variants[variant]} ${glow ? 'shadow-lg shadow-[var(--color-primary-500)]/20' : ''}`}>
      {children}
    </span>
  )
}

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, description, color = "blue" }: { 
  icon: any
  title: string
  description: string
  color?: "blue" | "purple" | "green" | "amber" | "rose"
}) => {
  const colorMap = {
    blue: "from-blue-500 to-blue-600 bg-blue-50 text-blue-600",
    purple: "from-purple-500 to-purple-600 bg-purple-50 text-purple-600",
    green: "from-emerald-500 to-emerald-600 bg-emerald-50 text-emerald-600",
    amber: "from-amber-500 to-amber-600 bg-amber-50 text-amber-600",
    rose: "from-rose-500 to-rose-600 bg-rose-50 text-rose-600"
  }

  return (
    <motion.div 
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative bg-white rounded-[var(--radius-2xl)] p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--border-light)] overflow-hidden"
    >
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colorMap[color].split(' ')[0]} ${colorMap[color].split(' ')[1]} opacity-10 rounded-bl-full`} />
      
      <div className={`w-14 h-14 rounded-xl ${colorMap[color].split(' ')[2]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={`w-7 h-7 ${colorMap[color].split(' ')[3]}`} />
      </div>
      
      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{title}</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed">{description}</p>
    </motion.div>
  )
}

// Comparison Row Component
const ComparisonRow = ({ feature, starter, professional, enterprise, highlight = false }: { 
  feature: string
  starter: string | boolean
  professional: string | boolean
  enterprise: string | boolean
  highlight?: boolean
}) => (
  <div className={`grid grid-cols-[2fr,1fr,1fr,1fr] gap-4 p-4 items-center border-b border-[var(--border-light)] last:border-0 ${highlight ? 'bg-[var(--color-primary-50)]/50' : ''}`}>
    <div className="text-[var(--text-primary)] font-medium flex items-center gap-2">
      {feature}
      {highlight && <Badge variant="primary" size="sm">Popular</Badge>}
    </div>
    <div className="text-center">
      {typeof starter === 'boolean' ? (
        starter ? <CheckCircle2 className="w-5 h-5 text-[var(--color-success-600)] mx-auto" /> : <X className="w-5 h-5 text-[var(--text-tertiary)] mx-auto" />
      ) : (
        <span className="text-sm text-[var(--text-secondary)] font-medium">{starter}</span>
      )}
    </div>
    <div className="text-center bg-[var(--color-primary-50)]/30 -my-4 py-4 border-x border-[var(--color-primary-200)]/30">
      {typeof professional === 'boolean' ? (
        professional ? <CheckCircle2 className="w-5 h-5 text-[var(--color-primary-600)] mx-auto" /> : <X className="w-5 h-5 text-[var(--text-tertiary)] mx-auto" />
      ) : (
        <span className="text-sm font-bold text-[var(--color-primary-600)]">{professional}</span>
      )}
    </div>
    <div className="text-center">
      {typeof enterprise === 'boolean' ? (
        enterprise ? <CheckCircle2 className="w-5 h-5 text-[var(--color-success-600)] mx-auto" /> : <X className="w-5 h-5 text-[var(--text-tertiary)] mx-auto" />
      ) : (
        <span className="text-sm text-[var(--text-secondary)] font-medium">{enterprise}</span>
      )}
    </div>
  </div>
)

// Testimonial Card
const TestimonialCard = ({ quote, author, role, company, metric, image }: { 
  quote: string
  author: string
  role: string
  company: string
  metric: string
  image: string
}) => (
  <motion.div 
    whileHover={{ y: -6 }}
    className="bg-white rounded-[var(--radius-2xl)] p-6 shadow-lg border border-[var(--border-light)] h-full flex flex-col"
  >
    <div className="flex items-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[var(--color-warning-500)] text-[var(--color-warning-500)]" />
      ))}
    </div>
    
    <div className="mb-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--color-success-100)] text-[var(--color-success-700)] text-xs font-bold w-fit">
      <TrendingUp className="w-3 h-3" />
      {metric}
    </div>
    
    <p className="text-[var(--text-secondary)] mb-6 flex-1 leading-relaxed">"{quote}"</p>
    
    <div className="pt-4 border-t border-[var(--border-light)] flex items-center gap-3">
      <img src={image} alt={author} className="w-12 h-12 rounded-full object-cover border-2 border-[var(--color-primary-100)]" />
      <div>
        <div className="font-bold text-[var(--text-primary)]">{author}</div>
        <div className="text-sm text-[var(--text-tertiary)]">{role}, {company}</div>
      </div>
    </div>
  </motion.div>
)

// FAQ Item
const FAQItem = ({ question, answer, isOpen, onClick, index }: { 
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
  index: number
}) => (
  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-[var(--border-light)]">
    <button 
      onClick={onClick}
      className="w-full text-left p-3 sm:p-6 md:p-8 flex items-start justify-between gap-4 group"
    >
      <div className="flex-1">
        <div className="flex items-center gap-1 sm:gap-3 mb-2">
          <span 
            className="flex items-center justify-center min-w-8 min-h-8 rounded-full text-sm font-bold transition-all duration-300"
            style={{
              backgroundColor: isOpen ? 'var(--color-primary-600)' : 'var(--color-primary-100)',
              color: isOpen ? 'white' : 'var(--color-primary-600)'
            }}
          >
            {index + 1}
          </span>
          <h3 
            className="text-sm sm:text-xl md:text-2xl font-semibold sm:font-bold transition-colors duration-300"
            style={{ color: isOpen ? 'var(--color-primary-600)' : 'var(--text-primary)' }}
          >
            {question}
          </h3>
        </div>
      </div>
      
      <div 
        className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300"
        style={{
          backgroundColor: isOpen ? 'var(--color-primary-100)' : 'var(--bg-tertiary)',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
        }}
      >
        <ChevronDown 
          className="w-5 h-5 transition-colors duration-300" 
          style={{ color: isOpen ? 'var(--color-primary-600)' : 'var(--text-tertiary)' }}
        />
      </div>
    </button>

    <div
      className="overflow-hidden transition-all duration-300 ease-in-out"
      style={{
        maxHeight: isOpen ? '500px' : '0',
        opacity: isOpen ? 1 : 0
      }}
    >
      <div className="px-6 md:px-8 pb-6 md:pb-8">
        <div className="pl-11 pt-2 border-l-4 border-[var(--color-primary-200)]">
          <p className="text-[var(--text-secondary)] leading-relaxed text-base md:text-lg ml-4">
            {answer}
          </p>
        </div>
      </div>
    </div>
  </div>
)

// Pricing Toggle
const PricingToggle = ({
  isYearly,
  setIsYearly,
}: {
  isYearly: boolean;
  setIsYearly: (v: boolean) => void;
}) => (
  <div className="inline-flex items-center gap-1 sm:gap-2 p-1 bg-[var(--bg-secondary)] 
  rounded-[var(--radius-full)] border border-[var(--border-light)] w-full sm:w-auto justify-center">

    {/* Monthly */}
    <button
      onClick={() => setIsYearly(false)}
      className={`px-3 sm:px-5 lg:px-6 py-1.5 sm:py-2 rounded-[var(--radius-full)] 
      text-xs sm:text-sm font-semibold whitespace-nowrap
      transition-all duration-[var(--duration-fast)] ${
        !isYearly
          ? "bg-[var(--bg-primary)] text-[var(--color-primary-600)] shadow-sm"
          : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
      }`}
    >
      Monthly
    </button>

    {/* Yearly */}
    <button
      onClick={() => setIsYearly(true)}
      className={`px-3 sm:px-5 lg:px-6 py-1.5 sm:py-2 rounded-[var(--radius-full)] 
      text-xs sm:text-sm font-semibold flex items-center gap-1 sm:gap-2 whitespace-nowrap
      transition-all duration-[var(--duration-fast)] ${
        isYearly
          ? "bg-[var(--bg-primary)] text-[var(--color-primary-600)] shadow-sm"
          : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
      }`}
    >
      Yearly

      <span className="hidden xs:inline text-[10px] sm:text-xs 
      bg-[var(--color-success-100)] text-[var(--color-success-700)] 
      px-1.5 sm:px-2 py-0.5 rounded-[var(--radius-full)]">
        Save 20%
      </span>
    </button>
  </div>
);


export default function ProfessionalPlanPage() {
  const [isYearly, setIsYearly] = useState(true)
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thank you! We will contact ${email} shortly.`)
    setEmail("")
  }

  const features = [
    {
      icon: Building2,
      title: "Unlimited Properties",
      description: "Manage as many vacation rentals, BnBs, or hotel rooms as you need with no restrictions.",
      color: "blue" as const
    },
    {
      icon: Globe,
      title: "Unlimited Channels",
      description: "Connect Airbnb, Booking.com, VRBO, Expedia, and 50+ platforms with real-time synchronization.",
      color: "purple" as const
    },
    {
      icon: Zap,
      title: "AI Dynamic Pricing",
      description: "Smart pricing engine that automatically adjusts rates based on demand, seasonality, and local events.",
      color: "amber" as const
    },
    {
      icon: MessageSquare,
      title: "Smart Messaging",
      description: "Automated guest communications with AI-powered responses, translation, and sentiment analysis.",
      color: "green" as const
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Deep insights into revenue, occupancy, guest satisfaction, and competitive benchmarking.",
      color: "blue" as const
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Unlimited staff accounts with role-based permissions, task assignments, and performance tracking.",
      color: "rose" as const
    }
  ]

  const allFeatures = [
    { feature: "Property Management", starter: "3 properties", professional: "Unlimited", enterprise: "Unlimited", highlight: true },
    { feature: "Channel Connections", starter: "3 channels", professional: "Unlimited", enterprise: "Unlimited" },
    { feature: "Team Members", starter: "2 users", professional: "Unlimited", enterprise: "Unlimited" },
    { feature: "Automated Messages", starter: "50/month", professional: "Unlimited", enterprise: "Unlimited" },
    { feature: "AI Dynamic Pricing", starter: false, professional: true, enterprise: true, highlight: true },
    { feature: "Revenue Management", starter: "Basic", professional: "Advanced", enterprise: "Enterprise" },
    { feature: "Guest Portal", starter: "Basic", professional: "White-label", enterprise: "Custom branded" },
    { feature: "API Access", starter: false, professional: "Full access", enterprise: "Priority API" },
    { feature: "Priority Support", starter: "Email (48h)", professional: "Priority (2h)", enterprise: "Dedicated manager" },
    { feature: "Custom Reports", starter: false, professional: true, enterprise: true },
    { feature: "Revenue Forecasting", starter: false, professional: true, enterprise: true },
    { feature: "Competitor Analysis", starter: false, professional: true, enterprise: true },
    { feature: "Mobile App", starter: "Basic", professional: "Full featured", enterprise: "White-label" },
    { feature: "Integrations", starter: "10 apps", professional: "200+ apps", enterprise: "Custom integrations" },
    { feature: "Onboarding", starter: "Self-service", professional: "Guided setup", enterprise: "White glove" },
  ]

  const testimonials = [
    {
      quote: "The Professional plan paid for itself in the first month. The dynamic pricing alone increased our revenue by 35%. Absolutely worth every penny.",
      author: "Sarah Chen",
      role: "Operations Director",
      company: "LuxStay Properties",
      metric: "+35% revenue",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "We upgraded from Starter to Professional and saw immediate results. The automation saves us 25 hours per week across our team of 8.",
      author: "Marcus Rodriguez",
      role: "General Manager",
      company: "Boutique Hotels Group",
      metric: "25 hrs saved/week",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "The analytics and reporting features are incredible. We finally have visibility into every property's performance in real-time. Best investment we've made.",
      author: "Emma Thompson",
      role: "CEO",
      company: "Thompson Hospitality",
      metric: "Real-time insights",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ]

  const faqs = [
    {
      question: "What's included in the $49/user Professional plan?",
      answer: "The Professional plan includes unlimited properties and channel connections, AI dynamic pricing, advanced analytics, smart messaging automation, revenue management tools, priority support with 2-hour response time, full API access, and unlimited team members. Everything you need to scale your hospitality business."
    },
    {
      question: "Is there a minimum number of users required?",
      answer: "No minimum required. You can start with just 1 user at $49/month. Add more team members as you grow at the same per-user rate. Volume discounts are available for teams of 10+ users."
    },
    {
      question: "Can I switch between monthly and yearly billing?",
      answer: "Yes, you can switch anytime. Yearly billing saves you 20% (equivalent to $39/user/month). If you switch from monthly to yearly, we'll credit any remaining time toward your annual plan."
    },
    {
      question: "How does the 14-day free trial work?",
      answer: "Start your Professional plan with full access to all features for 14 days. No credit card required. At the end of the trial, choose to upgrade or automatically revert to the free Starter plan with no data loss."
    },
    {
      question: "What happens to my data if I downgrade?",
      answer: "Your data is always preserved. If you downgrade to Starter, you'll retain access to all historical data and can continue managing up to 3 properties. Simply upgrade again to restore full access to all properties and features."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee for your first payment. If you're not satisfied with the Professional plan within 30 days, contact us for a full refund, no questions asked."
    }
  ]

  const stats = [
    { value: 35, suffix: "%", label: "Avg. Revenue Increase" },
    { value: 25, suffix: "hrs", label: "Weekly Time Saved" },
    { value: 98, suffix: "%", label: "Customer Satisfaction" },
    { value: 2, suffix: "min", label: "Support Response" }
  ]

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans overflow-x-hidden selection:bg-[var(--color-primary-200)]">
      <Head>
        <title>Professional Plan | $49/User/Month | BNB Management</title>
        <meta name="description" content="Unlock unlimited properties, AI dynamic pricing, and advanced automation. $49 per user per month with 14-day free trial. Scale your hospitality business with StayPilot Professional." />
        <meta name="keywords" content="vacation rental software pricing, airbnb management tool, property management system, hotel software $49 per month" />
      </Head>

      {/* 🎯 HERO SECTION */}
      <section className="relative min-h-[90vh] pt-8 flex items-center overflow-hidden bg-gradient-to-br from-[var(--bg-primary)] via-blue-50/50 to-[var(--bg-secondary)]">
        
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-primary-200)]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--color-secondary-200)]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)] py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <Badge variant="gold" size="lg" glow>
                  <Crown className="w-4 h-4" />
                  Most Popular Plan
                </Badge>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-[var(--text-primary)]">
                Professional Plan
                <br />
                <GradientText variant="primary">$49 per user/month</GradientText>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-xl text-[var(--text-secondary)] mb-8 max-w-xl leading-relaxed">
                Unlock unlimited properties, AI-powered pricing, and advanced automation. 
                The complete toolkit for growing hospitality businesses.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-[var(--color-primary-600)] to-[var(--color-secondary-600)] rounded-[var(--radius-full)] font-bold text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5" />
                  Start 14-Day Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group px-8 py-4 rounded-[var(--radius-full)] font-bold text-[var(--text-primary)] border border-[var(--border-medium)] hover:border-[var(--color-primary-400)] hover:bg-[var(--bg-secondary)] transition-all duration-300 flex items-center justify-center gap-2">
                  <PlayCircle className="w-5 h-5" />
                  Watch Demo
                </button>
              </motion.div>

              {/* Trust Badges */}
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-6 text-sm text-[var(--text-tertiary)]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-success-600)]" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-success-600)]" />
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-success-600)]" />
                  <span>30-day money back</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Pricing Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
             <div className="relative w-full max-w-md mx-auto lg:max-w-none bg-white rounded-[var(--radius-3xl)] 
p-5 sm:p-6 lg:p-8 shadow-2xl border-2 border-[var(--color-primary-200)] overflow-hidden">

  {/* Popular Badge */}
  <div className="absolute -top-2 sm:-top-4 left-1/2 -translate-x-1/2 z-50">
    <Badge variant="primary"  className="text-sm sm:text-lg">
      <Sparkles className="w-4 h-4" />
      Best Value
    </Badge>
  </div>

  {/* Header */}
  <div className="text-center mb-6 sm:mb-8 pt-4">
    <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-2">
      Professional
    </h3>
    <p className="text-sm sm:text-base text-[var(--text-secondary)]">
      For growing hospitality businesses
    </p>
  </div>

  {/* Price */}
  <div className="text-center mb-6 sm:mb-8">
    <div className="flex items-end justify-center gap-2 flex-wrap">
      <span className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[var(--color-primary-600)] leading-none">
        ${isYearly ? "39" : "49"}
      </span>
      <span className="text-sm sm:text-lg text-[var(--text-tertiary)] mb-1">
        /user/mo
      </span>
    </div>

    {isYearly && (
      <p className="text-xs sm:text-sm text-[var(--color-success-600)] font-medium mt-2">
        Billed annually (Save 20%)
      </p>
    )}

    <div className="mt-3 sm:mt-4 flex justify-center">
      <PricingToggle isYearly={isYearly} setIsYearly={setIsYearly} />
    </div>
  </div>

  {/* Features */}
  <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
    {[
      "Unlimited properties & channels",
      "AI dynamic pricing",
      "Advanced analytics & reporting",
      "Priority support (2h response)",
      "Full API access",
      "Unlimited team members",
    ].map((feature, i) => (
      <div key={i} className="flex items-start gap-3">
        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[var(--color-success-100)] flex items-center justify-center flex-shrink-0 mt-0.5">
          <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[var(--color-success-600)]" />
        </div>
        <span className="text-sm sm:text-base text-[var(--text-primary)] font-medium">
          {feature}
        </span>
      </div>
    ))}
  </div>

  {/* CTA */}
  <button className="w-full py-3 sm:py-4 bg-gradient-to-r from-[var(--color-primary-600)] to-[var(--color-secondary-600)] 
  text-white rounded-[var(--radius-xl)] text-sm sm:text-base font-bold hover:shadow-lg 
  transition-all duration-300 flex items-center justify-center gap-2 group">
    Start Free Trial
    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
  </button>

  <p className="text-center text-xs sm:text-sm text-[var(--text-tertiary)] mt-3 sm:mt-4">
    14 days free • No credit card required
  </p>
</div>

              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-4 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-transprant to-[var(--color-primary-700)] rounded-2xl flex items-center justify-center shadow-xl"
              >
                <Percent className="w-10 h-10 text-white" />
              </motion.div>  
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-2 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-secondary-500)] rounded-full flex items-center justify-center shadow-xl"
              >
                <TrendingUp className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 📊 STATS SECTION */}
      <section className="relative py-16 bg-[var(--bg-secondary)] border-y border-[var(--border-light)]">
        <div className="max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="text-center">
                <div className="text-4xl lg:text-5xl font-extrabold text-[var(--color-primary-600)] mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[var(--text-secondary)] font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ✨ FEATURES GRID */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <Badge variant="primary">Complete Feature Set</Badge>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[var(--text-primary)]">
              Everything You Need to <GradientText>Scale</GradientText>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Professional-grade tools trusted by thousands of hospitality businesses worldwide.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 📋 DETAILED COMPARISON */}
      <section className="relative py-24 lg:py-32 ">
        <div className="max-w-6xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <Badge variant="secondary">Compare Plans</Badge>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[var(--text-primary)]">
              Choose Your <GradientText variant="secondary">Growth Path</GradientText>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-[var(--text-secondary)]">
              Start free, upgrade when you're ready. No forced migrations, no data loss.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="bg-white rounded-[var(--radius-3xl)] shadow-xl border border-[var(--border-light)] overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-[2fr,1fr,1fr,1fr] gap-4 p-6 bg-[var(--bg-secondary)] border-b border-[var(--border-light)]">
                <div className="text-[var(--text-tertiary)] font-bold uppercase tracking-wider text-sm">Features</div>
                <div className="text-center">
                  <div className="font-bold text-[var(--text-primary)]">Starter</div>
                  <div className="text-[var(--color-success-600)] font-bold">Free</div>
                </div>
                <div className="text-center bg-[var(--color-primary-50)] -my-6 py-6 border-x border-[var(--color-primary-200)]/30 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="primary" size="sm">Popular</Badge>
                  </div>
                  <div className="font-bold text-[var(--color-primary-600)]">Professional</div>
                  <div className="text-[var(--color-primary-600)] font-bold">${isYearly ? '39' : '49'}/mo</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-[var(--text-primary)]">Enterprise</div>
                  <div className="text-[var(--text-secondary)] font-bold">Custom</div>
                </div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-[var(--border-light)]">
                {allFeatures.map((row, i) => (
                  <ComparisonRow key={i} {...row} />
                ))}
              </div>

              {/* CTA Row */}
              <div className="grid grid-cols-[2fr,1fr,1fr,1fr] gap-4 p-6 items-center bg-[var(--bg-secondary)]/50">
                <div></div>
                <div className="text-center">
                  <button className="px-4 py-2 rounded-lg bg-[var(--bg-tertiary)] text-[var(--text-secondary)] font-bold hover:bg-[var(--border-light)] transition-colors text-sm">
                    Current Plan
                  </button>
                </div>
                <div className="text-center bg-[var(--color-primary-50)] -my-6 py-6 border-x border-[var(--color-primary-200)]/30">
                  <button className="px-6 py-2 rounded-lg bg-[var(--color-primary-600)] text-white font-bold hover:bg-[var(--color-primary-700)] transition-colors shadow-lg">
                    Start Trial
                  </button>
                </div>
                <div className="text-center">
                  <button className="px-4 py-2 rounded-lg bg-[var(--bg-tertiary)] text-[var(--text-secondary)] font-bold hover:bg-[var(--border-light)] transition-colors text-sm">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 💬 TESTIMONIALS */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <Badge variant="primary">
                <Star className="w-4 h-4 fill-current" />
                Customer Success
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[var(--text-primary)]">
              Trusted by <GradientText variant="primary">Industry Leaders</GradientText>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-[var(--text-secondary)]">
              See why hospitality professionals choose StayPilot Professional.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ❓ FAQ SECTION */}
      <section className="relative py-24 lg:py-32 ">
        <div className="max-w-3xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-primary-600)] rounded-full mb-4">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]">
              Frequently Asked Questions
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Everything you need to know about the Professional plan.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFAQ === i}
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  index={i}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div variants={fadeInUp} className="mt-12 text-center bg-gradient-to-r from-[var(--color-primary-600)] to-[var(--color-secondary-600)] rounded-2xl p-8 md:p-10 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Still have questions?
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Our team is here to help you choose the right plan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[var(--color-primary-600)] px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Schedule a Call
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Email Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🚀 FINAL CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden ">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-50/50 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-primary-200)]/20 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)] text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-success-100)] border border-[var(--color-success-200)] text-[var(--color-success-700)] font-bold">
                <Rocket className="w-5 h-5" />
                Start Your 14-Day Free Trial
              </div>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[var(--text-primary)]">
              Ready to Transform Your
              <br />
              <GradientText>Hospitality Business?</GradientText>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
              Join 10,000+ professionals saving 25+ hours weekly and increasing revenue by 35% on average.
            </motion.p>

            <motion.div variants={fadeInUp} className="max-w-md mx-auto mb-12">
              <form onSubmit={handleSubmit} className="flex gap-2 flex-wrap justify-center">
                <input 
                  type="email" 
                  placeholder="Enter your work email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 rounded-[var(--radius-full)] border border-[var(--border-medium)] bg-white text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] outline-none min-w-[250px] focus:border-[var(--color-primary-400)] focus:ring-2 focus:ring-[var(--color-primary-100)]"
                />
                <button type="submit" className="px-8 py-4 rounded-[var(--radius-full)] bg-gradient-to-r from-[var(--color-primary-600)] to-[var(--color-secondary-600)] text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Get Started
                </button>
              </form>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-8 text-sm text-[var(--text-tertiary)]">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[var(--color-success-600)]" />
                <span>SOC 2 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-[var(--color-success-600)]" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[var(--color-success-600)]" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <HeadphonesIcon className="w-5 h-5 text-[var(--color-success-600)]" />
                <span>24/7 Support</span>
              </div>
            </motion.div>

            <motion.p variants={fadeInUp} className="mt-8 text-sm text-[var(--text-tertiary)]">
              No credit card required • 14-day free trial • Cancel anytime • 30-day money-back guarantee
            </motion.p>
          </motion.div>
        </div>
      </section>

    </div>
  )
}