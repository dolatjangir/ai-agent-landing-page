"use client"

import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { motion, useInView, useScroll, useTransform, Variants } from 'framer-motion'
import { 
  Target,
  Users,
  TrendingUp,
  Heart,
  Shield,
  Zap,
  Globe,
  Award,
  Clock,
  CheckCircle2,
  ArrowRight,
  PlayCircle,
  Sparkles,
  Lightbulb,
  Rocket,
  Handshake,
  Building2,
  MapPin,
  Mail,
  Phone,
  ChevronRight,
  Star,
  BarChart3,
  MessageSquare,
  Lock,
  Eye,
  Crown,
  Gem,
  Flag,
  Compass,
  Linkedin,
  Twitter
} from 'lucide-react'

// Animation variants
const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
}

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
}

// Reusable Components
const GlassCard = ({ children, className = "", hover = true, dark = false, elevated = false, gradient = false, color = "primary" }: { 
  children: React.ReactNode
  className?: string
  hover?: boolean
  dark?: boolean
  elevated?: boolean
  gradient?: boolean
  color?: "primary" | "secondary" | "accent" | "success"
}) => {
  const gradientMap = {
    primary: "from-[var(--color-primary-600)] to-[var(--color-secondary-700)]",
    secondary: "from-[var(--color-secondary-600)] to-[var(--color-accent-700)]",
    accent: "from-[var(--color-accent-600)] to-[var(--color-primary-700)]",
    success: "from-[var(--color-success-600)] to-[var(--color-primary-700)]"
  }

  return (
    <motion.div 
      whileHover={hover ? { 
        y: -8, 
        boxShadow: elevated 
          ? "0 30px 60px -15px rgba(37, 99, 235, 0.25)"
          : "0 20px 40px -12px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.3 } 
      } : {}}
      className={`relative overflow-hidden rounded-[var(--radius-2xl)] backdrop-blur-xl border transition-all duration-300 ${
        gradient
          ? `bg-gradient-to-br ${gradientMap[color]} text-white border-transparent`
          : dark 
            ? 'bg-[var(--color-neutral-800)]/95 border-[var(--color-neutral-700)] text-white' 
            : elevated
              ? 'bg-white shadow-2xl shadow-[var(--color-primary-500)]/10 border-[var(--border-light)]'
              : 'bg-white/95 shadow-xl border-[var(--border-light)]'
      } ${className}`}
    >
      {children}
    </motion.div>
  )
}

const GradientText = ({ children, className = "", variant = "primary" }: { 
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary" | "accent" | "success"
}) => {
  const gradients = {
    primary: "from-[var(--color-primary-600)] to-[var(--color-secondary-600)]",
    secondary: "from-[var(--color-secondary-600)] to-[var(--color-primary-600)]",
    accent: "from-[var(--color-primary-600)] to-[var(--color-primary-600)]",
    success: "from-[var(--color-success-600)] to-[var(--color-primary-600)]"
  }
  
  return (
    <span className={`bg-gradient-to-r ${gradients[variant]} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  )
}

const Badge = ({ children, variant = "primary", size = "md", glow = false, icon: Icon }: { 
  children: React.ReactNode
  variant?: "primary" | "secondary" | "accent" | "dark" | "success"
  size?: "sm" | "md" | "lg"
  glow?: boolean
  icon?: any
}) => {
  const sizes = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-1.5 text-sm",
    lg: "px-6 py-2 text-base"
  }
  
  const variants = {
    primary: "bg-[var(--color-primary-100)] text-[var(--color-primary-700)] border-[var(--color-primary-200)]",
    secondary: "bg-[var(--color-secondary-100)] text-[var(--color-secondary-700)] border-[var(--color-secondary-200)]",
    accent: "bg-[var(--color-accent-100)] text-[var(--color-accent-700)] border-[var(--color-accent-200)]",
    dark: "bg-[var(--color-neutral-800)] text-white border-[var(--color-neutral-700)]",
    success: "bg-[var(--color-success-100)] text-[var(--color-success-700)] border-[var(--color-success-200)]"
  }
  
  return (
    <span className={`inline-flex items-center gap-2 rounded-full font-bold border ${sizes[size]} ${variants[variant]} ${glow ? 'shadow-lg shadow-[var(--color-primary-500)]/20' : ''}`}>
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </span>
  )
}

// Animated counter hook
const useAnimatedCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0)
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })
  
  useEffect(() => {
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

const AnimatedCounter = ({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) => {
  const { count, ref } = useAnimatedCounter(value)
  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>
}

// Value Card Component
const ValueCard = ({ icon: Icon, title, description, color = "primary" }: { 
  icon: any; 
  title: string; 
  description: string; 
  color?: "primary" | "secondary" | "accent" | "success"
}) => {
  const colorMap = {
    primary: { bg: "bg-[var(--color-primary-50)]", text: "text-[var(--color-primary-600)]", border: "border-[var(--color-primary-200)]" },
    secondary: { bg: "bg-[var(--color-secondary-50)]", text: "text-[var(--color-secondary-600)]", border: "border-[var(--color-secondary-200)]" },
    accent: { bg: "bg-[var(--color-accent-50)]", text: "text-[var(--color-accent-600)]", border: "border-[var(--color-accent-200)]" },
    success: { bg: "bg-[var(--color-success-50)]", text: "text-[var(--color-success-600)]", border: "border-[var(--color-success-200)]" }
  }

  const c = colorMap[color]

  return (
    <GlassCard className="p-8 h-full group" hover={true}>
      <div className={`w-16 h-16 rounded-[var(--radius-xl)] ${c.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        <Icon className={`w-8 h-8 ${c.text}`} />
      </div>
      <h3 className="text-2xl font-bold mb-3 text-[var(--text-primary)] group-hover:text-[var(--color-primary-600)] transition-colors">{title}</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed">{description}</p>
    </GlassCard>
  )
}

// Team Member Card
const TeamCard = ({ name, role, bio, color = "primary", socials }: { 
  name: string; 
  role: string; 
  bio: string;
  color?: "primary" | "secondary" | "accent";
  socials?: { linkedin?: string; twitter?: string };
}) => {
  const colorMap = {
    primary: "from-[var(--color-primary-400)] to-[var(--color-primary-600)]",
    secondary: "from-[var(--color-secondary-400)] to-[var(--color-secondary-600)]",
    accent: "from-[var(--color-primary-400)] to-[var(--color-secondary-600)]"
  }

  return (
    <GlassCard className="p-6 text-center group" hover={true}>
      <div className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br ${colorMap[color]} flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-105 transition-transform`}>
        {name.charAt(0)}
      </div>
      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">{name}</h3>
      <p className={`text-sm font-semibold mb-3 ${color === 'primary' ? 'text-[var(--color-primary-600)]' : color === 'secondary' ? 'text-[var(--color-secondary-600)]' : 'text-[var(--color-accent-600)]'}`}>{role}</p>
      <p className="text-sm text-[var(--text-secondary)] mb-4">{bio}</p>
      {socials && (
        <div className="flex justify-center gap-3">
          {socials.linkedin && (
            <a href={socials.linkedin} className="p-2 rounded-full bg-[var(--color-neutral-100)] hover:bg-[var(--color-primary-100)] text-[var(--text-tertiary)] hover:text-[var(--color-primary-600)] transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {socials.twitter && (
            <a href={socials.twitter} className="p-2 rounded-full bg-[var(--color-neutral-100)] hover:bg-[var(--color-primary-100)] text-[var(--text-tertiary)] hover:text-[var(--color-primary-600)] transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
          )}
        </div>
      )}
    </GlassCard>
  )
}

// Timeline Item
const TimelineItem = ({ year, title, description, highlight = false, index }: { 
  year: string; 
  title: string; 
  description: string;
  highlight?: boolean;
  index: number;
}) => (
  <motion.div 
    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className={`relative pl-8 pb-12 border-l-2 ${highlight ? 'border-[var(--color-primary-500)]' : 'border-[var(--border-medium)]'} last:border-0 last:pb-0`}
  >
    <div className={`absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full ${highlight ? 'bg-[var(--color-primary-500)] ring-4 ring-[var(--color-primary-100)]' : 'bg-[var(--border-medium)]'}`} />
    <div className={`text-sm font-bold mb-1 ${highlight ? 'text-[var(--color-primary-600)]' : 'text-[var(--text-tertiary)]'}`}>{year}</div>
    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{title}</h3>
    <p className="text-[var(--text-secondary)]">{description}</p>
  </motion.div>
)

// Metric Card
const MetricCard = ({ value, label, subtext, icon: Icon, trend }: { 
  value: string; 
  label: string; 
  subtext: string; 
  icon: any;
  trend?: string;
}) => (
  <GlassCard className="p-8 text-center" hover={true}>
    <div className="w-16 h-16 mx-auto mb-4 rounded-[var(--radius-xl)] bg-gradient-to-br from-[var(--color-primary-100)] to-[var(--color-secondary-100)] flex items-center justify-center">
      <Icon className="w-8 h-8 text-[var(--color-primary-600)]" />
    </div>
    <div className="text-5xl font-bold text-[var(--text-primary)] mb-2">{value}</div>
    <div className="text-lg text-[var(--text-secondary)] font-medium mb-1">{label}</div>
    <div className="text-sm text-[var(--text-tertiary)]">{subtext}</div>
    {trend && (
      <div className="mt-3 text-sm text-[var(--color-success-600)] font-bold bg-[var(--color-success-100)] px-3 py-1 rounded-full inline-block">
        {trend}
      </div>
    )}
  </GlassCard>
)

// Office Card
const OfficeCard = ({ city, country, role }: { city: string; country: string; role: string }) => (
  <GlassCard className="p-6 group" hover={true}>
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-[var(--radius-lg)] bg-gradient-to-br from-[var(--color-primary-100)] to-[var(--color-secondary-100)] flex items-center justify-center flex-shrink-0">
        <MapPin className="w-6 h-6 text-[var(--color-primary-600)]" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--color-primary-600)] transition-colors">{city}</h3>
        <p className="text-sm font-medium text-[var(--color-primary-600)] mb-1">{country}</p>
        <p className="text-sm text-[var(--text-secondary)]">{role}</p>
      </div>
    </div>
  </GlassCard>
)

export default function AboutPage() {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -60])

  // Data
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make starts with our customers' success. Your growth is our mission, and we measure our wins by your wins.",
      color: "primary" as const
    },
    {
      icon: Lightbulb,
      title: "Relentless Innovation",
      description: "We never settle for 'good enough.' Our team constantly pushes boundaries to solve complex problems with elegant solutions.",
      color: "secondary" as const
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "No hidden fees, no dark patterns, no lock-ins. We believe in building long-term relationships through honest communication.",
      color: "accent" as const
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "From Mumbai to San Francisco, we empower businesses worldwide. Diversity isn't just welcomed—it's essential to our success.",
      color: "success" as const
    },
    {
      icon: Users,
      title: "People Matter",
      description: "Our team is our family. We invest in their growth, celebrate their wins, and create an environment where everyone thrives.",
      color: "primary" as const
    },
    {
      icon: Rocket,
      title: "Move Fast, Stay Human",
      description: "Speed without sacrificing quality. We ship fast, learn faster, and never lose sight of the human impact of our technology.",
      color: "secondary" as const
    }
  ]

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Co-Founder & CEO",
      bio: "Former VP at Salesforce. 15 years building SaaS products. Believes great software should feel invisible.",
      color: "primary" as const,
      socials: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Priya Sharma",
      role: "Co-Founder & CTO",
      bio: "Ex-Google engineer. AI/ML specialist. Obsessed with turning complex data into simple insights.",
      color: "secondary" as const,
      socials: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Marcus Chen",
      role: "Chief Product Officer",
      bio: "Previously led product at HubSpot. Customer-obsessed designer who codes on weekends.",
      color: "accent" as const,
      socials: { linkedin: "#" }
    },
    {
      name: "Ananya Desai",
      role: "VP of Customer Success",
      bio: "Built CS teams at 3 unicorns. Her playbook reduced churn by 40% at her last company.",
      color: "primary" as const,
      socials: { linkedin: "#", twitter: "#" }
    }
  ]

  const timeline = [
    {
      year: "2019",
      title: "The Spark",
      description: "Rajesh and Priya meet at a SaaS conference, bonding over shared frustrations with broken sales tools. The idea is born.",
      highlight: false
    },
    {
      year: "2020",
      title: "First Lines of Code",
      description: "Working from a garage in Bangalore, the first prototype takes shape. 50 beta customers provide invaluable feedback.",
      highlight: false
    },
    {
      year: "2021",
      title: "Seed Funding & First Hire",
      description: "Raised $2M from top-tier VCs. Marcus joins as CPO. Team grows to 12 people. First paying customers.",
      highlight: true
    },
    {
      year: "2022",
      title: "Product-Market Fit",
      description: "Revenue grows 400%. Ananya joins to build the CS function. 500+ customers worldwide. Series A raised.",
      highlight: true
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Offices in Singapore and London. 2,500+ customers. Recognized as G2 Leader. Team hits 100 people.",
      highlight: true
    },
    {
      year: "2024",
      title: "The Future",
      description: "AI-powered features launch. 10,000+ customers. $50M ARR. Just getting started on our mission.",
      highlight: true
    }
  ]

  const metrics = [
    { value: "10K+", label: "Active Customers", subtext: "Across 45 countries", icon: Building2, trend: "Growing 3x YoY" },
    { value: "$50M", label: "Annual Revenue", subtext: "Run rate", icon: BarChart3, trend: "Profitable" },
    { value: "150+", label: "Team Members", subtext: "12 nationalities", icon: Users, trend: "Remote-first" },
    { value: "4.9/5", label: "Customer Rating", subtext: "2,000+ reviews", icon: Star, trend: "G2 Leader" }
  ]

  const offices = [
    { city: "Bangalore", country: "India", role: "Global Headquarters" },
    { city: "Singapore", country: "APAC Hub", role: "Regional HQ" },
    { city: "London", country: "EMEA", role: "European Operations" },
    { city: "San Francisco", country: "USA", role: "Americas Sales" }
  ]

  return (
    <div className="min-h-screen text-[var(--text-primary)] font-sans overflow-x-hidden">
      <Head>
        <title>About Us | Our Story, Mission & Values</title>
        <meta name="description" content="Learn about our mission to transform how businesses grow. Meet our team, explore our values, and discover why 10,000+ companies trust us." />
      </Head>

      {/* 🎯 HERO SECTION - Split with Floating Elements */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background - NO WHITE in gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-50)] via-[var(--bg-primary)] to-[var(--color-secondary-50)]" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[var(--color-primary-200)] rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-secondary-200)] rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-[var(--color-accent-100)] to-[var(--color-primary-100)] rounded-full blur-3xl opacity-10" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
            
            {/* LEFT CONTENT */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInLeft}>
                <Badge variant="primary" size="lg" glow={true} icon={Compass}>
                  About Us
                </Badge>
              </motion.div>

              <motion.h1 
                variants={fadeInLeft}
                className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight"
              >
                We're Building <br />
                <GradientText variant="secondary">The Future of</GradientText> <br />
                <GradientText variant="primary">Growth</GradientText>
              </motion.h1>

              <motion.p 
                variants={fadeInLeft}
                className="text-2xl text-[var(--text-secondary)] max-w-xl leading-relaxed"
              >
                Born from frustration with broken tools, built with obsession for customer success. 
                This is our story, our people, and why we exist.
              </motion.p>

              <motion.div variants={fadeInLeft} className="flex flex-wrap gap-4">
                <button className="group px-8 py-4 bg-gradient-to-r from-[var(--color-primary-600)] to-[var(--color-secondary-600)] text-white rounded-[var(--radius-xl)] font-bold text-lg shadow-xl shadow-[var(--color-primary-500)]/25 hover:shadow-2xl hover:shadow-[var(--color-primary-500)]/40 transition-all hover:-translate-y-1 flex items-center gap-2">
                  Join Our Team
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-[var(--border-medium)] text-[var(--text-primary)] rounded-[var(--radius-xl)] font-bold text-lg hover:border-[var(--color-primary-300)] hover:bg-white transition-all flex items-center gap-2">
                  <PlayCircle className="w-5 h-5 text-[var(--color-primary-600)]" />
                  Watch Our Story
                </button>
              </motion.div>

              {/* Trust badges */}
              <motion.div variants={fadeInLeft} className="pt-8 border-t border-[var(--border-light)]">
                <p className="text-sm text-[var(--text-tertiary)] mb-4 font-medium">Backed by leading investors</p>
                <div className="flex gap-6 items-center opacity-60 grayscale hover:grayscale-0 transition-all">
                  <div className="text-xl font-bold text-[var(--text-secondary)]">Sequoia</div>
                  <div className="text-xl font-bold text-[var(--text-secondary)]">Accel</div>
                  <div className="text-xl font-bold text-[var(--text-secondary)]">Y Combinator</div>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT CONTENT - Floating Cards */}
            <motion.div 
              style={{ y: heroY }}
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="relative hidden lg:block h-[600px]"
            >
              {/* Main floating card */}
              <motion.div 
                variants={fadeInRight}
                className="absolute top-0 right-0 w-80"
              >
                <GlassCard elevated className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-primary-400)] to-[var(--color-secondary-500)] flex items-center justify-center text-white font-bold text-xl">
                      R
                    </div>
                    <div>
                      <div className="font-bold text-[var(--text-primary)]">Rajesh Kumar</div>
                      <div className="text-sm text-[var(--text-secondary)]">CEO & Co-founder</div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] italic">"We started this company because we believed businesses deserved better tools."</p>
                </GlassCard>
              </motion.div>

              {/* Secondary floating card */}
              <motion.div 
                variants={fadeInRight}
                className="absolute top-48 left-0 w-72"
              >
                <GlassCard className="p-6 dark">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-5 h-5 text-[var(--color-accent-400)]" />
                    <span className="font-bold text-[var(--color-primary-500)]">Latest Milestone</span>
                  </div>
                  <div className="text-3xl font-bold text-[var(--color-primary-500)] mb-1">10,000+</div>
                  <div className="text-sm text-gray-400">Active customers worldwide</div>
                </GlassCard>
              </motion.div>

              {/* Stats card */}
              <motion.div 
                variants={fadeInRight}
                className="absolute bottom-20 right-10 w-64"
              >
                <GlassCard gradient color="primary" className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="w-5 h-5 text-white/80" />
                    <span className="font-bold text-white">Global Reach</span>
                  </div>
                  <div className="text-4xl font-bold text-white mb-1">45+</div>
                  <div className="text-sm text-white/80">Countries served</div>
                </GlassCard>
              </motion.div>

              {/* Decorative elements */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-20 w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--color-accent-300)] to-[var(--color-primary-300)] opacity-60 blur-sm"
              />
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-40 left-40 w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-secondary-300)] to-[var(--color-accent-300)] opacity-60 blur-sm"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🎯 MISSION SECTION - Dark Impact */}
      <section className="relative py-32 bg-[var(--color-primary-900)] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[var(--color-primary-400)] to-transparent" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="primary" size="lg" glow={true} icon={Flag}>
                Our Mission
              </Badge>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mt-8 mb-8 text-white leading-tight"
            >
              To empower every business to build <GradientText variant="accent">meaningful relationships</GradientText> at scale
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto"
            >
              We believe that technology should amplify human connection, not replace it. 
              Our platform removes the friction from sales and support, so teams can focus 
              on what matters most: their customers.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-12 flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="w-6 h-6 text-[var(--color-success-500)]" />
                <span className="font-medium">Customer-Centric</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="w-6 h-6 text-[var(--color-success-500)]" />
                <span className="font-medium">Privacy First</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="w-6 h-6 text-[var(--color-success-500)]" />
                <span className="font-medium">Sustainable Growth</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 🎯 VALUES SECTION - Grid */}
      <section className="relative py-32 bg-[var(--bg-primary)]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="secondary" size="lg" glow={true} icon={Gem}>
                What Drives Us
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-6 mb-6">
              Our Core <GradientText variant="secondary">Values</GradientText>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              These principles guide every decision we make, from product development to customer support.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map((value, index) => (
              <motion.div key={value.title} variants={fadeInUp}>
                <ValueCard {...value} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 🎯 TIMELINE SECTION */}
      <section className="relative py-32 bg-[var(--color-neutral-50)]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="primary" size="lg" glow={true} icon={Clock}>
                Our Journey
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-6 mb-6">
              From Garage to <GradientText>Global</GradientText>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Six years of relentless focus on customer success.
            </motion.p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <TimelineItem key={item.year} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>
 {/* 🎯 CONTACT SECTION */}
      <section className="relative py-32 bg-[var(--color-neutral-50)]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInLeft}>
                <Badge variant="primary" size="lg" glow={true} icon={Handshake}>
                  Get in Touch
                </Badge>
              </motion.div>
              
              <motion.h2 variants={fadeInLeft} className="text-4xl sm:text-5xl font-bold mt-6 mb-6">
                Let's Start a <GradientText>Conversation</GradientText>
              </motion.h2>
              
              <motion.p variants={fadeInLeft} className="text-xl text-[var(--text-secondary)] mb-8">
                Whether you're interested in our product, partnership opportunities, or just want to say hello—we'd love to hear from you.
              </motion.p>

              <motion.div variants={fadeInLeft} className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-[var(--radius-lg)] bg-[var(--color-primary-100)] flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[var(--color-primary-600)]" />
                  </div>
                  <div>
                    <div className="text-sm text-[var(--text-tertiary)]">Email us</div>
                    <div className="font-bold text-[var(--text-primary)]">hello@ibigdata.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-[var(--radius-lg)] bg-[var(--color-secondary-100)] flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[var(--color-secondary-600)]" />
                  </div>
                  <div>
                    <div className="text-sm text-[var(--text-tertiary)]">Call us</div>
                    <div className="font-bold text-[var(--text-primary)]">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-[var(--radius-lg)] bg-[var(--color-accent-100)] flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[var(--color-accent-600)]" />
                  </div>
                  <div>
                    <div className="text-sm text-[var(--text-tertiary)]">Visit us</div>
                    <div className="font-bold text-[var(--text-primary)]">Bangalore, India</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard elevated className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-[var(--text-primary)]">Send us a message</h3>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">First Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-[var(--radius-lg)] border border-[var(--border-medium)] bg-white focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none transition-all" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-[var(--radius-lg)] border border-[var(--border-medium)] bg-white focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none transition-all" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-[var(--radius-lg)] border border-[var(--border-medium)] bg-white focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none transition-all" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-[var(--radius-lg)] border border-[var(--border-medium)] bg-white focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none transition-all resize-none" placeholder="Tell us about your project..." />
                  </div>
                  <button type="submit" className="w-full py-4 bg-gradient-to-r from-[var(--color-primary-600)] to-[var(--color-secondary-600)] text-white rounded-[var(--radius-xl)] font-bold text-lg hover:shadow-lg hover:shadow-[var(--color-primary-500)]/25 transition-all flex items-center justify-center gap-2">
                    Send Message
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>
      {/* 🎯 TEAM SECTION */}
      <section className="relative py-32 bg-[var(--bg-primary)]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="accent" size="lg" glow={true} icon={Crown}>
                Leadership
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-6 mb-6">
              Meet the <GradientText variant="accent">Visionaries</GradientText>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Industry veterans with a passion for building products that matter.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {team.map((member, index) => (
              <motion.div key={member.name} variants={fadeInUp}>
                <TeamCard {...member} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-[var(--text-secondary)] mb-6">Want to join our growing team?</p>
            <button className="group px-8 py-4 bg-[var(--color-neutral-900)] text-white rounded-[var(--radius-xl)] font-bold hover:bg-[var(--color-neutral-800)] transition-all flex items-center gap-2 mx-auto">
              View Open Positions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 🎯 METRICS SECTION - Dark */}
      <section className="relative py-32 bg-[var(--color-primary-900)]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="success" size="lg" glow={true} icon={TrendingUp}>
                By The Numbers
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-6 mb-6 text-white">
              Trusted by <GradientText variant="success">10,000+</GradientText> Businesses
            </motion.h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {metrics.map((metric, index) => (
              <motion.div key={metric.label} variants={fadeInUp}>
                <MetricCard {...metric} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 🎯 OFFICES SECTION */}
      <section className="relative py-32 bg-[var(--bg-primary)]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="secondary" size="lg" glow={true} icon={Globe}>
                Global Presence
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-6 mb-6">
              Our <GradientText variant="secondary">Offices</GradientText>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Serving customers worldwide from strategic locations.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {offices.map((office, index) => (
              <motion.div key={office.city} variants={fadeInUp}>
                <OfficeCard {...office} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 🎯 CTA SECTION */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-600)] to-[var(--color-secondary-700)]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8">
              <Sparkles className="w-5 h-5" />
              <span className="font-medium">Join 10,000+ growing businesses</span>
            </motion.div>
            
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to Write Your <br /> Success Story?
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Join the thousands of companies that have transformed their customer relationships with our platform.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              <button className="group px-8 py-4 bg-white text-[var(--color-primary-700)] rounded-[var(--radius-xl)] font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-[var(--radius-xl)] font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Talk to Sales
              </button>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-12 flex flex-wrap justify-center gap-8 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Cancel anytime</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

     
    </div>
  )
}