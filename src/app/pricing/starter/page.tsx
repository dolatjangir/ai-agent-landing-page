"use client"

import React, { useState } from 'react'
import Head from 'next/head'
import { motion, useInView, Variants } from 'framer-motion'
import { 
  Users,
  Zap,
  Check,
  X,
  ArrowRight,
  Star,
  Gift,
  Rocket,
  Shield,
  Clock,
  TrendingUp,
  Heart,
  Sparkles,
  Crown,
  Gem,
  Target,
  BarChart3,
  MessageSquare,
  Calendar,
  FileText,
  Lock,
  Globe,
  Award,
  ThumbsUp,
  HelpCircle,
  ChevronRight,
  Plus,
  Minus,
  PlayCircle,
  Mail,
  Smartphone,
  Laptop,
  Tablet,
  Building2,
  BedDouble,
  Percent,
  Clock3,
  Wallet,
  ArrowUpRight,
  ChevronDown,
  HeadphonesIcon
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

// Glass Card Component - Light Theme
const GlassCard = ({ children, className = "", hover = true, gradient = false, color = "primary" }: { 
  children: React.ReactNode
  className?: string
  hover?: boolean
  gradient?: boolean
  color?: "primary" | "secondary" | "accent" | "success" | "warning"
}) => {
  const gradientMap = {
    primary: "from-[var(--color-primary-600)] to-[var(--color-secondary-600)]",
    secondary: "from-[var(--color-secondary-500)] to-[var(--color-primary-500)]",
    accent: "from-cyan-500 to-blue-600",
    success: "from-emerald-500 to-teal-600",
    warning: "from-amber-500 to-orange-600"
  }

  return (
    <motion.div 
      whileHover={hover ? { y: -6, transition: { duration: 0.3 } } : {}}
      className={`relative overflow-hidden rounded-[var(--radius-2xl)] transition-all duration-300 ${
        gradient
          ? `bg-gradient-to-br ${gradientMap[color]} text-white shadow-xl`
          : 'bg-white border border-[var(--border-light)] shadow-lg hover:shadow-xl'
      } ${className}`}
    >
      {children}
    </motion.div>
  )
}

// Gradient Text Component
const GradientText = ({ children, className = "", variant = "primary" }: { 
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary" | "accent" | "gold"
}) => {
  const gradients = {
    primary: "from-[var(--color-primary-600)] to-[var(--color-secondary-600)]",
    secondary: "from-[var(--color-secondary-500)] to-[var(--color-primary-500)]",
    accent: "from-cyan-500 to-blue-600",
    gold: "from-amber-500 via-yellow-400 to-amber-600"
  }
  
  return (
    <span className={`bg-gradient-to-r ${gradients[variant]} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  )
}

// Badge Component - Light Theme
const Badge = ({ children, variant = "primary", size = "md", glow = false,className }: { 
  children: React.ReactNode
  variant?: "primary" | "secondary" | "accent" | "success" | "gold"
  size?: "sm" | "md" | "lg"
  glow?: boolean
   className?: string;
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
    gold: "bg-amber-100 text-amber-700 border-amber-200"
  }
  
  return (
    <span className={`${className} inline-flex items-center gap-2 rounded-full font-bold border ${sizes[size]} ${variants[variant]} ${glow ? 'shadow-lg shadow-[var(--color-primary-500)]/20' : ''}`}>
      {children}
    </span>
  )
}

// Feature Row Component - Light Theme
const FeatureRow = ({ icon: Icon, title, description, included = true }: { 
  icon: any
  title: string
  description: string
  included?: boolean
}) => (
  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[var(--bg-secondary)] transition-colors">
    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
      included ? 'bg-[var(--color-success-100)]' : 'bg-[var(--bg-tertiary)]'
    }`}>
      <Icon className={`w-5 h-5 ${included ? 'text-[var(--color-success-600)]' : 'text-[var(--text-tertiary)]'}`} />
    </div>
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-1">
        <h4 className="font-bold text-[var(--text-primary)]">{title}</h4>
        {included ? (
          <Badge variant="success" size="sm">Included</Badge>
        ) : (
          <Badge variant="secondary" size="sm">Pro</Badge>
        )}
      </div>
      <p className="text-sm text-[var(--text-secondary)]">{description}</p>
    </div>
    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
      included ? 'bg-[var(--color-success-100)]' : 'bg-[var(--bg-tertiary)]'
    }`}>
      {included ? (
        <Check className="w-4 h-4 text-[var(--color-success-600)]" />
      ) : (
        <Minus className="w-4 h-4 text-[var(--text-tertiary)]" />
      )}
    </div>
  </div>
)

// Comparison Row - Light Theme
const ComparisonRow = ({ feature, starter, pro }: { feature: string; starter: string; pro: string }) => (
  <div className="grid grid-cols-[1.5fr,1fr,1fr] gap-4 p-4 items-center border-b border-[var(--border-light)] last:border-0">
    <div className="text-[var(--text-primary)] font-medium">{feature}</div>
    <div className="text-center">
      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-[var(--color-success-100)] text-[var(--color-success-700)] text-sm font-bold">
        <Check className="w-4 h-4" />
        {starter}
      </span>
    </div>
    <div className="text-center">
      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-[var(--color-primary-100)] text-[var(--color-primary-700)] text-sm font-bold">
        <Crown className="w-4 h-4" />
        {pro}
      </span>
    </div>
  </div>
)

// Testimonial Card - Light Theme
const TestimonialCard = ({ quote, author, role, metric }: { quote: string; author: string; role: string; metric: string }) => (
  <GlassCard className="p-6 h-full" hover={true}>
    <div className="flex items-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[var(--color-warning-500)] text-[var(--color-warning-500)]" />
      ))}
    </div>
    <div className="mb-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--color-success-100)] text-[var(--color-success-700)] text-xs font-bold">
      <TrendingUp className="w-3 h-3" />
      {metric}
    </div>
    <p className="text-[var(--text-secondary)] mb-6 flex-1 leading-relaxed">"{quote}"</p>
    <div className="pt-4 border-t border-[var(--border-light)]">
      <div className="font-bold text-[var(--text-primary)]">{author}</div>
      <div className="text-sm text-[var(--text-tertiary)]">{role}</div>
    </div>
  </GlassCard>
)

// FAQ Item - Light Theme Matching Your Style
const FAQItem = ({ question, answer, isOpen, onClick, index }: { question: string; answer: string; isOpen: boolean; onClick: () => void; index: number }) => (
  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-[var(--border-light)]">
    <button 
      onClick={onClick}
      className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-4 group"
    >
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
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

// Pricing Toggle - Light Theme
const PricingToggle = ({ billingCycle, setBillingCycle }: { billingCycle: 'monthly' | 'yearly', setBillingCycle: (c: 'monthly' | 'yearly') => void }) => (
  <div className="inline-flex items-center gap-[var(--space-4)] p-1.5 bg-[var(--bg-secondary)] rounded-[var(--radius-full)]">
    <button
      onClick={() => setBillingCycle('monthly')}
      className={`px-[var(--space-6)] py-[var(--space-2)] rounded-[var(--radius-full)] font-semibold transition-all duration-[var(--duration-fast)] ${
        billingCycle === 'monthly' 
          ? 'bg-[var(--bg-primary)] text-[var(--color-primary-600)] shadow-sm' 
          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
      }`}
    >
      Monthly
    </button>
    <button
      onClick={() => setBillingCycle('yearly')}
      className={`px-[var(--space-6)] py-[var(--space-2)] rounded-[var(--radius-full)] font-semibold transition-all duration-[var(--duration-fast)] flex items-center gap-[var(--space-2)] ${
        billingCycle === 'yearly' 
          ? 'bg-[var(--bg-primary)] text-[var(--color-primary-600)] shadow-sm' 
          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
      }`}
    >
      Yearly
      <span className="text-xs bg-[var(--color-success-100)] text-[var(--color-success-700)] px-[var(--space-2)] py-0.5 rounded-[var(--radius-full)]">Save 20%</span>
    </button>
  </div>
)

export default function StarterPage() {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(0)
  const [billingCycle, setBillingCycle] = React.useState<'monthly' | 'yearly'>('yearly')
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thank you! We will contact ${email} shortly.`)
    setEmail("")
  }

  const features = [
    {
      icon: Building2,
      title: "Up to 3 Properties",
      description: "Manage up to 3 vacation rentals or BnB units with full channel synchronization and booking management.",
      included: true
    },
    {
      icon: BedDouble,
      title: "10 Rooms Total",
      description: "Perfect for small boutique hotels or multiple vacation homes. Scale seamlessly as you grow.",
      included: true
    },
    {
      icon: Zap,
      title: "Automated Messaging",
      description: "Automated check-in instructions, review requests, and guest communications with smart templates.",
      included: true
    },
    {
      icon: Calendar,
      title: "Calendar Sync",
      description: "Real-time synchronization with Airbnb, Booking.com, VRBO, and Google Calendar to prevent double bookings.",
      included: true
    },
    {
      icon: BarChart3,
      title: "Basic Analytics",
      description: "Track occupancy rates, revenue per booking, and guest satisfaction scores with intuitive dashboards.",
      included: true
    },
    {
      icon: MessageSquare,
      title: "Unified Inbox",
      description: "Centralized guest messaging across all platforms with automated responses and team collaboration.",
      included: true
    },
    {
      icon: Clock3,
      title: "Task Automation",
      description: "Automated cleaning schedules, maintenance reminders, and staff assignments with smart triggers.",
      included: true
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "PCI-compliant payment processing, automated invoicing, and deposit management included.",
      included: true
    },
    {
      icon: Globe,
      title: "Multi-language",
      description: "Guest communication in 5 languages with automatic translation and localized templates.",
      included: false
    },
    {
      icon: Gem,
      title: "Revenue Management",
      description: "Dynamic pricing algorithms, competitor analysis, and yield optimization for maximum revenue.",
      included: false
    }
  ]

  const comparisonData = [
    { feature: "Properties", starter: "3 units", pro: "Unlimited" },
    { feature: "Rooms/Units", starter: "10 total", pro: "Unlimited" },
    { feature: "Channel Connections", starter: "3 channels", pro: "Unlimited" },
    { feature: "Team Members", starter: "2 users", pro: "Unlimited" },
    { feature: "Automated Messages", starter: "50/mo", pro: "Unlimited" },
    { feature: "Guest Portal", starter: "Basic", pro: "White-label" },
    { feature: "Revenue Tools", starter: "Basic", pro: "Dynamic Pricing" },
    { feature: "API Access", starter: "—", pro: "Full Access" }
  ]

  const testimonials = [
    {
      quote: "Started with 1 beach house, now managing 12 properties. StayPilot grew with us without a single hiccup. The free plan was genuinely free.",
      author: "Sarah Chen",
      role: "Property Owner, Miami",
      metric: "1 → 12 properties"
    },
    {
      quote: "We ran our entire boutique hotel on the Starter plan for 8 months. By the time we upgraded, we'd already increased occupancy by 40%.",
      author: "Marcus Rodriguez",
      role: "Hotel Manager, Barcelona",
      metric: "40% occupancy boost"
    },
    {
      quote: "Best free plan in the industry. No credit card tricks, no feature gates that force upgrades. Just honest value that scales when you're ready.",
      author: "Emma Thompson",
      role: "BnB Host, London",
      metric: "Zero downtime"
    }
  ]

  const faqs = [
    {
      question: "Is the Starter plan really free forever?",
      answer: "Absolutely. The Starter plan is free for up to 3 properties with no time limit. You get core automation, calendar sync, and guest messaging. We believe in earning your trust through value, not forcing upgrades through restrictions."
    },
    {
      question: "What happens when I need more than 3 properties?",
      answer: "Upgrade to Pro anytime with one click. All your data, guest history, settings, and automations transfer instantly. Most hosts upgrade when they hit 5-6 properties and need advanced revenue management tools."
    },
    {
      question: "Do I need a credit card to sign up?",
      answer: "No credit card required. No hidden fees. No 'trial' that expires. Just connect your first property and start managing bookings immediately. We only ask for payment details when you choose to upgrade."
    },
    {
      question: "Can I connect Airbnb, Booking.com, and VRBO?",
      answer: "Yes! Connect up to 3 channels on the Starter plan. This includes Airbnb, Booking.com, VRBO, Expedia, and direct bookings. All calendars sync in real-time to prevent double bookings."
    },
    {
      question: "What support do I get on the free plan?",
      answer: "Access to our comprehensive help center, video tutorials, and community forums. Email support with 48-hour response time. Pro users get priority support with 2-hour response and dedicated onboarding specialists."
    },
    {
      question: "Is my guest data secure?",
      answer: "Enterprise-grade security for everyone. SOC 2 Type II certified, GDPR compliant, end-to-end encryption, and automatic backups. Your guest data and payment information are protected with bank-level security, regardless of plan."
    }
  ]

  const stats = [
    { value: 50000, suffix: "+", label: "Active Hosts" },
    { value: 98, suffix: "%", label: "Uptime" },
    { value: 4.9, suffix: "/5", label: "User Rating" },
    { value: 0, suffix: "$", label: "Hidden Fees" }
  ]

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans overflow-x-hidden selection:bg-[var(--color-primary-200)]">
      <Head>
        <title>Starter Plan | Free for Up to 3 Properties | StayPilot</title>
        <meta name="description" content="Free forever for up to 3 properties. Automated messaging, calendar sync, and booking management. No credit card required. Start managing your vacation rentals today." />
        <meta name="keywords" content="free vacation rental software, airbnb management tool, free bnb software, property management system" />
      </Head>

      {/* 🎯 HERO SECTION - Light Theme with Gradient */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[var(--bg-primary)] via-blue-50/30 to-[var(--bg-secondary)]">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[var(--color-primary-200)]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-[var(--color-secondary-200)]/30 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%234f46e5%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

        <div className="relative z-10 max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)] py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center lg:text-left"
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <Badge variant="success" size="lg" glow>
                  <Gift className="w-4 h-4" />
                  Free Forever Plan
                </Badge>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-[var(--text-primary)]">
                Start Managing Your
                <br />
                <GradientText variant="primary">Properties for Free</GradientText>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Up to <span className="text-[var(--color-primary-600)] font-bold">3 properties</span> and <span className="text-[var(--color-primary-600)] font-bold">10 rooms</span>. 
                Automated messaging, calendar sync, and booking management. 
                No credit card required. No hidden fees. Just pure hospitality management.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-[var(--color-primary-600)] to-[var(--color-secondary-600)] rounded-[var(--radius-full)] font-bold text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Start Free Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group px-8 py-4 rounded-[var(--radius-full)] font-bold text-[var(--text-primary)] border border-[var(--border-medium)] hover:border-[var(--color-primary-400)] hover:bg-[var(--bg-secondary)] transition-all duration-300 flex items-center justify-center gap-2">
                  <PlayCircle className="w-5 h-5" />
                  Watch Demo
                </button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-[var(--text-tertiary)]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[var(--color-success-600)]" />
                  <span>No credit card</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[var(--color-success-600)]" />
                  <span>Free forever</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[var(--color-success-600)]" />
                  <span>Cancel anytime</span>
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
              <GlassCard className="p-8 relative overflow-visible border-2 border-[var(--color-primary-200)]" gradient color="primary">
                {/* Popular Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 ">
                  <Badge variant="success"  glow  className="text-xs sm:text-base lg:text-lg">
                    <Sparkles className="w-4 h-4 " />
                    Most Popular for Starters
                  </Badge>
                </div>

                <div className="text-center mb-8 pt-4">
                  <h3 className="text-2xl font-bold text-white mb-2">Starter Plan</h3>
                  <p className="text-blue-100">Perfect for new hosts</p>
                </div>

                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-6xl font-extrabold text-white">$0</span>
                    <span className="text-xl text-blue-100">/month</span>
                  </div>
                  <p className="text-sm text-blue-100/80 mt-2">Free forever • No credit card required</p>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    "Up to 3 properties",
                    "10 rooms total",
                    "3 channel connections",
                    "Automated messaging",
                    "Basic analytics",
                    "Email support"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-4 bg-white text-[var(--color-primary-600)] rounded-[var(--radius-xl)] font-bold hover:bg-[var(--bg-primary)] transition-colors duration-300 flex items-center justify-center gap-2 group">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-center text-sm text-white/70 mt-4">
                  Upgrade to Pro ($49/mo) when you're ready
                </p>
              </GlassCard>

              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-3 sm:-right-6 w-20 h-20 bg-gradient-to-br from-[var(--color-success-400)] to-[var(--color-success-600)] rounded-2xl flex items-center justify-center shadow-xl"
              >
                <Percent className="w-10 h-10 text-white" />
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-2 sm:-left-4 w-16 h-16 bg-gradient-to-br from-[var(--color-warning-400)] to-[var(--color-warning-600)] rounded-full flex items-center justify-center shadow-xl"
              >
                <Heart className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 📊 STATS SECTION */}
      <section className="relative py-20 bg-[var(--bg-secondary)] border-y border-[var(--border-light)]">
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

      {/* ✨ FEATURES SECTION */}
      <section className="relative py-24 lg:py-32 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <Badge variant="primary">Everything You Need</Badge>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[var(--text-primary)]">
              Powerful Features, <GradientText>Zero Cost</GradientText>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Professional-grade tools to manage your properties like a pro. 
              No feature restrictions, no usage limits on the free tier.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto"
          >
            {features.map((feature, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <FeatureRow {...feature} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 🔄 COMPARISON SECTION */}
      <section className="relative py-24 lg:py-32 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
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
              Grow Without <GradientText variant="secondary">Limits</GradientText>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-[var(--text-secondary)]">
              Start free, upgrade when you're ready. No forced migrations, no data loss.
            </motion.p>
          </motion.div>

          {/* Pricing Toggle */}
          <motion.div variants={fadeInUp} className="mb-12 text-center">
            <PricingToggle billingCycle={billingCycle} setBillingCycle={setBillingCycle} />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <GlassCard className="overflow-hidden" hover={false}>
              {/* Header */}
              <div className="grid grid-cols-[1.5fr,1fr,1fr] gap-4 p-6 bg-[var(--bg-secondary)] border-b border-[var(--border-light)]">
                <div className="text-[var(--text-tertiary)] font-bold">Features</div>
                <div className="text-center">
                  <div className="font-bold text-[var(--text-primary)] text-lg">Starter</div>
                  <div className="text-[var(--color-success-600)] font-bold">Free</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-[var(--text-primary)] text-lg">Professional</div>
                  <div className="text-[var(--color-primary-600)] font-bold">
                    ${billingCycle === 'yearly' ? '39' : '49'}/mo
                  </div>
                </div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-[var(--border-light)]">
                {comparisonData.map((row, i) => (
                  <ComparisonRow key={i} {...row} />
                ))}
              </div>

              {/* CTA Row */}
              <div className="grid grid-cols-[1.5fr,1fr,1fr] gap-4 p-6 items-center bg-[var(--bg-secondary)]/50">
                <div></div>
                <div className="text-center">
                  <button className="px-6 py-2 rounded-lg bg-[var(--color-success-100)] text-[var(--color-success-700)] font-bold hover:bg-[var(--color-success-200)] transition-colors">
                    Current Plan
                  </button>
                </div>
                <div className="text-center">
                  <button className="px-6 py-2 rounded-lg bg-[var(--color-primary-600)] text-white font-bold hover:bg-[var(--color-primary-700)] transition-colors">
                    Upgrade
                  </button>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* 💬 TESTIMONIALS SECTION */}
      <section className="relative py-24 lg:py-32 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <Badge variant="gold">
                <Star className="w-4 h-4 fill-current" />
                Loved by Hosts
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[var(--text-primary)]">
              From Starter to <GradientText variant="gold">Success</GradientText>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-[var(--text-secondary)]">
              Join thousands of hosts who started free and grew their business with StayPilot.
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

      {/* ❓ FAQ SECTION - Matching Your Style */}
      <section className="relative py-24 lg:py-32 bg-[var(--bg-secondary)]">
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
              Find answers to common questions about our free plan, features, and how we can help you grow
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
              We're here to help! Get in touch with our team
            </p>
            <button className="bg-white text-[var(--color-primary-600)] px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2 mx-auto">
              <HeadphonesIcon className="w-5 h-5" />
              Contact Support
            </button>
          </motion.div>
        </div>
      </section>

      {/* 🚀 FINAL CTA SECTION */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-[var(--bg-primary)]">
        {/* Background Effects */}
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
                Start Your Journey Today
              </div>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[var(--text-primary)]">
              Ready to Transform Your
              <br />
              <GradientText>Property Management?</GradientText>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
              Join 50,000+ hosts managing their properties smarter, not harder. 
              Free forever for your first 3 properties.
            </motion.p>

            <motion.div variants={fadeInUp} className="max-w-md mx-auto mb-12">
              <form onSubmit={handleSubmit} className="flex gap-2 flex-wrap justify-center">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 rounded-[var(--radius-full)] border border-[var(--border-medium)] bg-white text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] outline-none min-w-[200px] focus:border-[var(--color-primary-400)] focus:ring-2 focus:ring-[var(--color-primary-100)]"
                />
                <button type="submit" className="px-8 py-4 rounded-[var(--radius-full)] bg-gradient-to-r from-[var(--color-primary-600)] to-[var(--color-secondary-600)] text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
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
                <span>Bank-level Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[var(--color-success-600)]" />
                <span>2-Min Setup</span>
              </div>
            </motion.div>

            <motion.p variants={fadeInUp} className="mt-8 text-sm text-[var(--text-tertiary)]">
              No credit card required • 14-day free trial • Cancel anytime
            </motion.p>
          </motion.div>
        </div>
      </section>

            
    </div>
  )
}