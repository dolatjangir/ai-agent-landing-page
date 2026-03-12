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
  Infinity,
  Workflow,
  Server,
  Database,
  Cloud,
  PieChart,
  Settings,
  Layers,
  Briefcase,
  MapPin,
 
  Cpu,
  Network,
  Gauge,
  Activity,
  Compass,
  Lightbulb,
  Users2,
  Handshake,
  FileCheck,
  Clock3,
  AlertCircle,
  ArrowUpRight,
  Minus,
  Plus,
  Search,
  Filter,
  Download,
  Share2,
  RefreshCw,
  ZapIcon,
  Maximize2,
  Monitor,
  Tablet,
  SmartphoneIcon,
  Laptop2,
  Cable,
  Plug,
  Puzzle,
  GitBranch,
  GitMerge,
  Webhook,
  Code2,
  Terminal,
  Braces,
  FileJson,
  Key,
  Fingerprint,
  Eye,
  EyeOff,
  LockIcon,
  Unlock,
  Vault,
  BadgeCheck,
  
  ClipboardCheck,
  Stamp,
  FileBadge,
  ShieldCheck,
  ShieldAlert,
  ShieldOff,
  Siren,
  Megaphone,
  Radio,
  Satellite,
  Wifi,
  WifiOff,
  Signal,
  SignalHigh,
  SignalMedium,
  SignalLow,
  Battery,
  BatteryCharging,
  BatteryFull,
  BatteryMedium,
  BatteryLow,
  Power,
  PowerOff,
  Sun,
  Moon,
  Sunrise,
  Sunset,
  CloudSun,
  CloudRain,
  CloudLightning,
  CloudSnow,
  Wind,
  Thermometer,
  Droplets,
  Flame,
  Snowflake,
  Umbrella,
  Navigation,
  Map,
  MapPinned,
  Locate,
  LocateFixed,
  LocateOff,
  Crosshair,
  TargetIcon,
  Focus,
  Scan,
  ScanLine,
  ScanFace,
  FingerprintIcon,
  Contact,
  Contact2,
 
  Notebook,
  BookOpen,
  BookMarked,
  Library,
  GraduationCap,
  School,
  University,
  Building,
  BuildingIcon,
  Hotel,
  Home,
  HomeIcon,
  Warehouse,
  Factory,
  Store,

  ShoppingBag,
  ShoppingCart,
  CreditCard,
  Banknote,
  Coins,
  DollarSign,
  Euro,
  PoundSterling,
  JapaneseYen,
  Receipt,
  
  FileAxis3d,
  FileBarChart,
  FileBox,
  FileCheck2,
  FileClock,
  FileCode,
  FileCog,
  FileDiff,
  FileDigit,
  FileImage,
  FileJson2,
  FileKey,
  FileLock,
  FileMinus,
  FileMusic,
  FileOutput,
  FilePlus,
  FileQuestion,
  FileSearch,
  FileSliders,
  FileSpreadsheet,
  FileStack,
  FileSymlink,
  FileTerminal,
  FileTextIcon,
  FileType,
  FileType2,
  FileUp,
  FileVideo,
  FileVolume,
  FileWarning,
  FileX,
  Files,
  Folder,
  FolderOpen,
  FolderPlus,
  FolderMinus,
  FolderSearch,
  FolderSymlink,
  FolderTree,
  FolderX,
  Folders,
  Calculator
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
  variant?: "primary" | "secondary" | "accent" | "gold" | "success" | "enterprise"
}) => {
  const gradients = {
    primary: "from-[var(--color-primary-600)] to-[var(--color-secondary-600)]",
    secondary: "from-[var(--color-secondary-500)] to-[var(--color-primary-500)]",
    accent: "from-cyan-500 to-blue-600",
    gold: "from-amber-500 via-yellow-400 to-amber-600",
    success: "from-emerald-500 to-teal-600",
    enterprise: "from-slate-700 via-blue-800 to-indigo-900"
  }
  
  return (
    <span className={`bg-gradient-to-r ${gradients[variant]} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  )
}

// Badge Component
const Badge = ({ children, variant = "primary", size = "md", glow = false }: { 
  children: React.ReactNode
  variant?: "primary" | "secondary" | "accent" | "success" | "gold" | "dark" | "enterprise"
  size?: "sm" | "md" | "lg"
  glow?: boolean
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
    dark: "bg-slate-800 text-white border-slate-700",
    enterprise: "bg-gradient-to-r from-slate-800 to-blue-900 text-white border-blue-800"
  }
  
  return (
    <span className={`inline-flex items-center gap-2 rounded-full font-bold border ${sizes[size]} ${variants[variant]} ${glow ? 'shadow-lg shadow-[var(--color-primary-500)]/20' : ''}`}>
      {children}
    </span>
  )
}

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, description, color = "blue", stats }: { 
  icon: any
  title: string
  description: string
  color?: "blue" | "purple" | "green" | "amber" | "rose" | "slate"
  stats?: string
}) => {
  const colorMap = {
    blue: "from-blue-500 to-blue-600 bg-blue-50 text-blue-600",
    purple: "from-purple-500 to-purple-600 bg-purple-50 text-purple-600",
    green: "from-emerald-500 to-emerald-600 bg-emerald-50 text-emerald-600",
    amber: "from-amber-500 to-amber-600 bg-amber-50 text-amber-600",
    rose: "from-rose-500 to-rose-600 bg-rose-50 text-rose-600",
    slate: "from-slate-600 to-slate-700 bg-slate-50 text-slate-600"
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
      <p className="text-[var(--text-secondary)] leading-relaxed mb-3">{description}</p>
      {stats && (
        <div className="text-sm font-bold text-[var(--color-success-600)] bg-[var(--color-success-50)] px-3 py-1 rounded-full w-fit">
          {stats}
        </div>
      )}
    </motion.div>
  )
}

// Enterprise Feature Block
const EnterpriseBlock = ({ 
  icon: Icon, 
  title, 
  subtitle, 
  description, 
  features, 
  image, 
  reverse = false 
}: { 
  icon: any
  title: string
  subtitle: string
  description: string
  features: string[]
  image: string
  reverse?: boolean
}) => (
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={staggerContainer}
    className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}
  >
    <motion.div variants={fadeInUp} className={reverse ? 'lg:order-2' : ''}>
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary-100)] text-[var(--color-primary-700)] font-bold mb-6">
        <Icon className="w-5 h-5" />
        {subtitle}
      </div>
      <h3 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-4">{title}</h3>
      <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">{description}</p>
      
      <div className="grid sm:grid-cols-2 gap-4">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[var(--color-success-100)] flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-4 h-4 text-[var(--color-success-600)]" />
            </div>
            <span className="text-[var(--text-primary)] font-medium">{feature}</span>
          </div>
        ))}
      </div>
    </motion.div>
    
    <motion.div variants={fadeInUp} className={`relative ${reverse ? 'lg:order-1' : ''}`}>
      <div className="relative rounded-[var(--radius-3xl)] overflow-hidden shadow-2xl">
        <img src={image} alt={title} className="w-full h-[400px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--color-primary-600)] flex items-center justify-center">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-[var(--text-primary)]">{title}</div>
                <div className="text-sm text-[var(--text-secondary)]">Enterprise Solution</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
)

// Integration Card
const IntegrationCard = ({ name, category, icon: Icon, status }: { name: string, category: string, icon: any, status: "native" | "api" | "custom" }) => {
  const statusColors = {
    native: "bg-emerald-100 text-emerald-700",
    api: "bg-blue-100 text-blue-700",
    custom: "bg-purple-100 text-purple-700"
  }
  
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl p-4 shadow-md border border-[var(--border-light)] flex items-center gap-4"
    >
      <div className="w-12 h-12 rounded-lg bg-[var(--bg-secondary)] flex items-center justify-center">
        <Icon className="w-6 h-6 text-[var(--color-primary-600)]" />
      </div>
      <div className="flex-1">
        <div className="font-bold text-[var(--text-primary)]">{name}</div>
        <div className="text-sm text-[var(--text-tertiary)]">{category}</div>
      </div>
      <span className={`text-xs px-2 py-1 rounded-full font-bold ${statusColors[status]}`}>
        {status === 'native' ? 'Native' : status === 'api' ? 'API' : 'Custom'}
      </span>
    </motion.div>
  )
}

// Security Feature
const SecurityFeature = ({ icon: Icon, title, description, certification }: { icon: any, title: string, description: string, certification?: string }) => (
  <div className="bg-[var(--color-primary-50)] rounded-2xl p-6 shadow-lg border border-[var(--border-light)] hover:shadow-xl transition-shadow">
    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-primary-100)] to-[var(--color-primary-200)] flex items-center justify-center mb-4">
      <Icon className="w-7 h-7 text-slate-700" />
    </div>
    <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">{title}</h4>
    <p className="text-[var(--text-secondary)] text-sm mb-3">{description}</p>
    {certification && (
      <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-success-600)] bg-[var(--color-success-50)] px-3 py-1.5 rounded-full w-fit">
        <BadgeCheck className="w-4 h-4" />
        {certification}
      </div>
    )}
  </div>
)

// Testimonial Card Large
const TestimonialCardLarge = ({ quote, author, role, company, metric, image, logo }: { 
  quote: string
  author: string
  role: string
  company: string
  metric: string
  image: string
  logo: string
}) => (
  <motion.div 
    whileHover={{ y: -6 }}
    className="bg-white rounded-[var(--radius-3xl)] p-8 shadow-xl border border-[var(--border-light)]"
  >
    <div className="flex items-center justify-between mb-6">
      <img src={logo} alt={company} className="h-8 object-contain opacity-50" />
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[var(--color-warning-500)] text-[var(--color-warning-500)]" />
        ))}
      </div>
    </div>
    
    <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-success-100)] text-[var(--color-success-700)] font-bold">
      <TrendingUp className="w-4 h-4" />
      {metric}
    </div>
    
    <p className="text-xl text-[var(--text-primary)] mb-8 leading-relaxed font-medium">"{quote}"</p>
    
    <div className="flex items-center gap-4 pt-6 border-t border-[var(--border-light)]">
      <img src={image} alt={author} className="w-16 h-16 rounded-full object-cover border-2 border-[var(--color-primary-100)]" />
      <div>
        <div className="font-bold text-[var(--text-primary)] text-lg">{author}</div>
        <div className="text-[var(--text-secondary)]">{role}</div>
        <div className="text-[var(--color-primary-600)] font-bold">{company}</div>
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
        <div className="flex items-center gap-2 md:gap-3 mb-2">
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
            className="text-md sm:text-xl md:text-2xl font-bold transition-colors duration-300"
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

export default function EnterprisePage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    properties: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your interest! Our enterprise team will contact you within 24 hours.')
  }

  const enterpriseFeatures = [
    {
      icon: Building2,
      title: "Unlimited Scale",
      description: "Manage thousands of properties across multiple brands, regions, and property types from a single unified dashboard.",
      color: "blue" as const,
      stats: "Up to 10,000+ units"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 Type II, ISO 27001, GDPR, and PCI DSS compliance with end-to-end encryption and advanced threat protection.",
      color: "slate" as const,
      stats: "Bank-grade security"
    },
    {
      icon: Cpu,
      title: "Custom AI & ML",
      description: "Bespoke machine learning models trained on your specific data for pricing optimization, demand forecasting, and guest personalization.",
      color: "purple" as const,
      stats: "Proprietary algorithms"
    },
    {
      icon: Network,
      title: "Global Infrastructure",
      description: "Multi-region deployment with 99.99% SLA, automatic failover, and dedicated server clusters for optimal performance.",
      color: "green" as const,
      stats: "99.99% uptime SLA"
    },
    {
      icon: Handshake,
      title: "White-Glove Onboarding",
      description: "Dedicated implementation team, data migration assistance, staff training programs, and 24/7 enterprise support.",
      color: "amber" as const,
      stats: "30-day implementation"
    },
    {
      icon: Code2,
      title: "Custom Integrations",
      description: "Native integrations with your existing tech stack plus custom API development for proprietary systems and workflows.",
      color: "rose" as const,
      stats: "200+ integrations"
    }
  ]

  const solutions = [
    {
      icon: Hotel,
      title: "Hotel Chains",
      subtitle: "Multi-Property Management",
      description: "Centralized operations for hotel chains with complex distribution needs, brand standards enforcement, and corporate reporting.",
      features: ["Brand consistency tools", "Corporate rate management", "Cross-property analytics", "Loyalty program integration", "Group booking management"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop"
    },
    {
      icon: Building,
      title: "Vacation Rental Companies",
      subtitle: "Portfolio Management",
      description: "Scale your short-term rental business with automated operations, dynamic pricing at scale, and owner portal management.",
      features: ["Owner dashboards", "Automated owner statements", "Maintenance coordination", "Revenue sharing tools", "Performance benchmarking"],
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      reverse: true
    },
    {
      icon: Home,
      title: "Property Management Companies",
      subtitle: "Full-Service Operations",
      description: "End-to-end solution for property managers handling long-term and short-term rentals with mixed portfolios.",
      features: ["Mixed portfolio support", "Tenant screening", "Lease management", "Maintenance workflows", "Financial reporting"],
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop"
    },
    {
      icon: Building2,
      title: "Corporate Housing",
      subtitle: "Extended Stay Management",
      description: "Specialized tools for corporate housing providers with extended stay bookings, corporate client management, and relocation services.",
      features: ["Corporate client portals", "Extended stay pricing", "Relocation management", "Insurance integration", "Furnishing inventory"],
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
      reverse: true
    }
  ]

  const integrations = [
    { name: "Oracle Opera", category: "PMS", icon: Database, status: "native" as const },
    { name: "Salesforce", category: "CRM", icon: Cloud, status: "native" as const },
    { name: "SAP", category: "ERP", icon: Server, status: "api" as const },
    { name: "Workday", category: "HRM", icon: Users, status: "api" as const },
    { name: "Stripe", category: "Payments", icon: CreditCard, status: "native" as const },
    { name: "QuickBooks", category: "Accounting", icon: Calculator, status: "native" as const },
    { name: "Slack", category: "Communication", icon: MessageSquare, status: "native" as const },
    { name: "Microsoft Teams", category: "Communication", icon: Users2, status: "native" as const },
    { name: "Zapier", category: "Automation", icon: Zap, status: "native" as const },
    { name: "Custom API", category: "Development", icon: Code2, status: "custom" as const },
    { name: "Power BI", category: "Analytics", icon: BarChart3, status: "api" as const },
    { name: "Tableau", category: "Analytics", icon: PieChart, status: "api" as const },
  ]

  const securityFeatures = [
    { icon: ShieldCheck, title: "SOC 2 Type II", description: "Certified security controls and processes", certification: "Annual audit" },
    { icon: Lock, title: "ISO 27001", description: "International information security standard", certification: "Certified" },
    { icon: Fingerprint, title: "GDPR Compliance", description: "Full EU data protection regulation compliance", certification: "Compliant" },
    { icon: CreditCard, title: "PCI DSS Level 1", description: "Highest level payment card industry security", certification: "Level 1" },
    { icon: Eye, title: "End-to-End Encryption", description: "AES-256 encryption for data at rest and in transit", certification: "Military-grade" },
    { icon: Key, title: "SSO & SAML 2.0", description: "Single sign-on with enterprise identity providers", certification: "Okta, Azure AD" },
  ]

  const testimonials = [
    {
      quote: "StayPilot Enterprise transformed our operations across 450 properties. The custom AI pricing models alone increased our RevPAR by 28% in the first quarter. The implementation was seamless and the dedicated support team is exceptional.",
      author: "Alexandra Morrison",
      role: "Chief Operating Officer",
      company: "Heritage Hospitality Group",
      metric: "+28% RevPAR increase",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      logo: "https://via.placeholder.com/120x40/1e293b/ffffff?text=HERITAGE"
    },
    {
      quote: "We evaluated 12 different platforms before choosing StayPilot Enterprise. The ability to customize everything to our specific workflow, combined with their enterprise-grade security, made the decision easy. Best technology investment we've made.",
      author: "David Chen",
      role: "VP of Technology",
      company: "Global Stay Management",
      metric: "12 platforms evaluated",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      logo: "https://via.placeholder.com/120x40/1e293b/ffffff?text=GLOBAL"
    },
    {
      quote: "The white-glove onboarding process was incredible. They migrated 2,000+ properties from our legacy system with zero downtime. Our staff was trained and productive within weeks, not months.",
      author: "Maria Rodriguez",
      role: "Director of Operations",
      company: "Sunset Resorts International",
      metric: "2,000+ properties migrated",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      logo: "https://via.placeholder.com/120x40/1e293b/ffffff?text=SUNSET"
    }
  ]

  const faqs = [
    {
      question: "How is Enterprise pricing determined?",
      answer: "Enterprise pricing is customized based on your specific needs including number of properties, users, required integrations, custom development needs, and support level. We offer flexible pricing models including per-property, per-user, or flat-rate annual contracts. Contact our sales team for a detailed quote tailored to your organization."
    },
    {
      question: "What does the implementation process look like?",
      answer: "Our enterprise implementation follows a proven 5-phase methodology: Discovery (understanding your needs), Planning (solution design), Migration (data and system transfer), Training (staff enablement), and Optimization (ongoing refinement). A dedicated implementation manager guides you through each phase with typical timelines of 30-60 days depending on complexity."
    },
    {
      question: "Can StayPilot integrate with our existing tech stack?",
      answer: "Absolutely. We offer 200+ native integrations with major PMS, CRM, ERP, and accounting systems. For proprietary or legacy systems, our API team can build custom integrations. We also support ETL processes, data warehousing connections, and real-time webhooks for seamless data flow across your organization."
    },
    {
      question: "What kind of support do Enterprise clients receive?",
      answer: "Enterprise clients receive white-glove support including: a dedicated Customer Success Manager, 24/7 priority technical support with 15-minute response SLA, quarterly business reviews, on-site training sessions, and access to our exclusive Enterprise Advisory Board for product input."
    },
    {
      question: "Is our data secure and compliant with regulations?",
      answer: "Security is our top priority. We're SOC 2 Type II certified, ISO 27001 compliant, GDPR ready, and PCI DSS Level 1 certified. All data is encrypted at rest and in transit using AES-256. We offer data residency options (US, EU, APAC), regular penetration testing, and comprehensive audit logs."
    },
    {
      question: "Can we customize the platform for our specific needs?",
      answer: "Yes, extensive customization is a core Enterprise feature. This includes custom workflows, branded guest portals, bespoke reporting dashboards, proprietary AI model training, custom field creation, automated rule engines, and white-label mobile apps. Our solutions team works with you to tailor the platform to your exact requirements."
    },
    {
      question: "What happens if we need to scale rapidly?",
      answer: "Our infrastructure is built for unlimited scale. Whether you're adding 10 or 10,000 properties, our cloud-native architecture auto-scales to meet demand. We work with rapidly growing companies to ensure your technology never becomes a bottleneck, including capacity planning and performance optimization."
    },
    {
      question: "Do you offer training for our staff?",
      answer: "Comprehensive training is included with every Enterprise contract. This includes on-site training sessions, virtual workshops, recorded tutorials, certification programs, and a dedicated training portal. We also offer train-the-trainer programs to build internal expertise within your organization."
    }
  ]

  const stats = [
    { value: 500, suffix: "+", label: "Enterprise Clients" },
    { value: 1000000, suffix: "+", label: "Rooms Managed" },
    { value: 99.99, suffix: "%", label: "Uptime SLA" },
    { value: 15, suffix: "min", label: "Support Response" }
  ]

  return (
    <div className="min-h-screen  text-[var(--text-primary)] font-sans overflow-x-hidden selection:bg-[var(--color-primary-200)]">
      <Head>
        <title>Enterprise Solutions | Custom Pricing | StayPilot</title>
        <meta name="description" content="Enterprise-grade hospitality management for hotel chains, vacation rental companies, and property management firms. Custom pricing, dedicated support, unlimited scale." />
        <meta name="keywords" content="enterprise property management software, hotel chain software, custom pricing hospitality software, white label vacation rental software" />
      </Head>

      {/* 🎯 HERO SECTION */}
   <section className="relative min-h-screen flex items-center overflow-hidden text-[var(--text-primary)]">

  {/* Animated Background */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div
      className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
      style={{ background: "rgba(0, 104, 56, 0.12)" }}
    />
    <div
      className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000"
      style={{ background: "rgba(30, 143, 90, 0.12)" }}
    />
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
      style={{ background: "var(--gradient-card)", opacity: 0.08 }}
    />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)] py-20">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      {/* Left Content */}
      <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
        
        <motion.div variants={fadeInUp} className="mb-6">
          <Badge variant="enterprise" size="lg" glow>
            <Crown className="w-4 h-4" />
            Enterprise Solutions
          </Badge>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
        >
          Hospitality Management at
          <span
            className="block bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            Enterprise Scale
          </span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-xl mb-8 max-w-xl leading-relaxed text-[var(--text-secondary)]"
        >
          Custom-built solutions for hotel chains, vacation rental companies,
          and property management firms managing thousands of units. Unlimited
          scale, bespoke integrations, and white-glove support.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-8">
          
          {/* Primary Button */}
          <button
            className="group relative px-4 sm:px-8 py-4 rounded-[var(--radius-full)] font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            style={{
              background: "var(--gradient-primary)",
              color: "white"
            }}
          >
            <Handshake className="w-5 h-5" />
            Request Custom Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary Button */}
          <button
            className="group px-4 sm:px-8 py-4 rounded-[var(--radius-full)] font-bold border transition-all duration-300 flex items-center justify-center gap-2"
            style={{
              borderColor: "var(--border-medium)",
              color: "var(--text-primary)",
              background: "var(--bg-primary)"
            }}
          >
            <Phone className="w-5 h-5" />
            Call Sales: +1 (888) 555-0123
          </button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap items-center gap-6 text-sm text-[var(--text-secondary)]"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[var(--color-primary-600)]" />
            <span>SOC 2 Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-[var(--color-primary-600)]" />
            <span>24/7 Enterprise Support</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-[var(--color-primary-600)]" />
            <span>99.99% Uptime SLA</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
      >
        <div
          className="rounded-[var(--radius-3xl)] p-8 border shadow-xl backdrop-blur-xl"
          style={{
            background: "rgba(255,255,255,0.6)",
            borderColor: "var(--border-light)"
          }}
        >
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center p-4 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.5)" }}
              >
                <div className="text-xl  sm:text-2xl md:text-4xl font-extrabold text-[var(--text-primary)] mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm sm:text-md text-[var(--text-secondary)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          <div
            className="mt-6 p-4 rounded-xl text-white"
            style={{ background: "var(--gradient-primary)" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.2)" }}
              >
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold">
                  Trusted by Industry Leaders
                </div>
                <div className="text-sm opacity-90">
                  500+ enterprise clients worldwide
                </div>
              </div>
            </div>
          </div>

        </div>
      </motion.div>

    </div>
  </div>
</section>



      {/* 🏢 SOLUTIONS BY INDUSTRY */}
      <section className="relative py-24 lg:py-32 ">
        <div className="max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <Badge variant="primary">Industry Solutions</Badge>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[var(--text-primary)]">
              Built for <GradientText>Every Scale</GradientText>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
              Specialized solutions designed for the unique challenges of different hospitality sectors.
            </motion.p>
          </motion.div>

          <div className="space-y-24">
            {solutions.map((solution, i) => (
              <EnterpriseBlock key={i} {...solution} />
            ))}
          </div>
        </div>
      </section>

      {/* ⚡ ENTERPRISE FEATURES GRID */}
      <section className="relative py-24 lg:py-32 ">
        <div className="max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <Badge variant="secondary">Platform Capabilities</Badge>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[var(--text-primary)]">
              Enterprise-Grade <GradientText variant="secondary">Power</GradientText>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
              Everything you need to manage hospitality operations at massive scale.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {enterpriseFeatures.map((feature, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 🔒 SECURITY & COMPLIANCE */}
      <section className="relative py-24 lg:py-32 bg-linear-to-br from-[var(--color-primary-800)] to-[var(--color-secondary-600)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-70" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <Badge variant="primary">Security First</Badge>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Enterprise <span className="text-[var(--color-primary-300)]">Security</span> & Compliance
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-300 max-w-3xl mx-auto">
              Bank-grade security with comprehensive compliance certifications.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 "
          >
            {securityFeatures.map((feature, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <SecurityFeature {...feature} />
              </motion.div>
            ))}
          </motion.div>

          {/* Compliance Badges */}
          <motion.div variants={fadeInUp} className="mt-16 flex flex-wrap items-center justify-center gap-8">
            {['SOC 2 Type II', 'ISO 27001', 'GDPR', 'PCI DSS Level 1', 'HIPAA', 'CCPA'].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
                <BadgeCheck className="w-5 h-5 text-emerald-400" />
                <span className="font-bold text-sm">{badge}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 🔌 INTEGRATIONS */}
      <section className="relative py-24 lg:py-32 ">
        <div className="max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <Badge variant="accent">Integrations</Badge>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[var(--text-primary)]">
              Connect Your <GradientText variant="primary">Tech Stack</GradientText>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
              200+ native integrations plus custom API development for your proprietary systems.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {integrations.map((integration, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <IntegrationCard {...integration} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-12 text-center">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--bg-secondary)] text-[var(--text-primary)] font-bold hover:bg-[var(--border-light)] transition-colors">
              <Plus className="w-5 h-5" />
              View All 200+ Integrations
            </button>
          </motion.div>
        </div>
      </section>

      {/* 💬 TESTIMONIALS */}
      <section className="relative py-24 lg:py-32 ">
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
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <TestimonialCardLarge {...testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ❓ FAQ SECTION */}
      <section className="relative py-24 lg:py-32 bg-[var(--bg-primary)]">
        <div className="max-w-4xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
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
              Enterprise <GradientText>FAQ</GradientText>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Everything you need to know about our enterprise solutions.
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
        </div>
      </section>

      {/* 📞 CONTACT FORM SECTION */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-[var(--color-primary-500)] via-[var(--color-primary-800)] to-[var(--color-secondary-900)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-70" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <Badge variant="primary">Contact Sales</Badge>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold mb-6">
                Ready to Transform Your Operations?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-[var(--color-primary-100)] mb-8">
                Get a custom quote tailored to your enterprise needs. Our solutions team will analyze your requirements and design the perfect implementation plan.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[var(--color-primary-400)]" />
                  </div>
                  <div>
                    <div className="font-bold">Call Us Directly</div>
                    <div className="text-blue-200">+1 (888) 555-0123</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[var(--color-primary-400)]" />
                  </div>
                  <div>
                    <div className="font-bold">Email Sales</div>
                    <div className="text-blue-200">enterprise@staypilot.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[var(--color-primary-400)]" />
                  </div>
                  <div>
                    <div className="font-bold">Response Time</div>
                    <div className="text-[var(--color-primary-200)]">Within 24 hours</div>
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
              <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-xl rounded-[var(--radius-3xl)] p-8 border border-white/20">
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-bold mb-2">First Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-[var(--color-primary-400)] outline-none"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Last Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-[var(--color-primary-400)] outline-none"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-bold mb-2">Work Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-[var(--color-primary-400)] outline-none"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-bold mb-2">Company</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-[var(--color-primary-400)] outline-none"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-[var(--color-primary-400)] outline-none"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-bold mb-2">Number of Properties</label>
                  <select 
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:border-[var(--color-primary-400)] outline-none"
                    value={formData.properties}
                    onChange={(e) => setFormData({...formData, properties: e.target.value})}
                  >
                    <option value="" className="text-slate-900">Select range</option>
                    <option value="10-50" className="text-slate-900">10-50 properties</option>
                    <option value="50-200" className="text-slate-900">50-200 properties</option>
                    <option value="200-1000" className="text-slate-900">200-1,000 properties</option>
                    <option value="1000+" className="text-slate-900">1,000+ properties</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-bold mb-2">Message (Optional)</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-[var(--color-primary-400)] outline-none resize-none"
                    placeholder="Tell us about your specific needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button type="submit" className="w-full px-4 sm:px-0 text-xs sm:text-lg py-4 bg-white text-[var(--color-primary-900)] rounded-xl font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 group">
                  <Handshake className="w-5 h-5" />
                  Request Custom Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-center text-sm text-blue-200 mt-4">
                  By submitting, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

     
    </div>
  )
}