"use client"

import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion, AnimatePresence, Variants} from 'framer-motion'
import { 
  BookOpen,
  Code2,
  FileText,
  Search,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  Copy,
  Check,
  Terminal,
  Globe,
  Shield,
  Database,
  Settings,
  Users,
  Zap,
  AlertCircle,
  Info,
  ArrowRight,
  ExternalLink,
  PlayCircle,
  Download,
  MessageSquare,
  Clock,
  Star,
  GitBranch,
  Webhook,
  Lock,
  Key,
  Server,
  Layers,
  Cpu,
  Wifi,
  RefreshCw,
  CheckCircle2,
 
  HelpCircle,
  FileJson,
  Braces,
  TerminalSquare,
  Boxes,
  Puzzle,
  Workflow,
  Gauge,
  Activity,
  BarChart3,
  PieChart,
  LineChart,
  TrendingUp,
  Calendar,
  Bell,
  Mail,
  Smartphone,
  Tablet,
  Monitor,
  Laptop,
  Cloud,
  Sun,
  Moon,
  SearchIcon,
  Filter,
  SortAsc,
  MoreHorizontal,
  Bookmark,
  History,
  Home,
  ArrowLeft,
  ArrowUpRight,
  Minus,
  Plus,
  GripVertical,
  Maximize2,
  Minimize2,
  PanelLeft,
  PanelRight,
 
  SidebarClose,
  SidebarOpen,
  Layout,
  LayoutGrid,
  LayoutList,
  LayoutTemplate,
  Type,
  Text,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code,
  Quote,
  List,
  ListOrdered,
  ListChecks,
  Image,

  Hash,
  AtSign,
  DollarSign,
  Percent,
  Ampersand,
  Asterisk,
  Parentheses,
  Brackets,
  BracesIcon

 
} from 'lucide-react'

// Animation variants
const fadeInUp : Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  }
}

// Types
interface NavItem {
  id: string
  title: string
  icon?: React.ElementType
  children?: NavItem[]
  href?: string
}

interface CodeExample {
  language: string
  code: string
  filename?: string
}

// Navigation Data
const navigationData: NavItem[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: BookOpen,
    children: [
      { id: "introduction", title: "Introduction", href: "#introduction" },
      { id: "quickstart", title: "Quick Start Guide", href: "#quickstart" },
      { id: "installation", title: "Installation", href: "#installation" },
      { id: "authentication", title: "Authentication", href: "#authentication" },
      { id: "first-request", title: "Making Your First Request", href: "#first-request" }
    ]
  },
  {
    id: "core-concepts",
    title: "Core Concepts",
    icon: Layers,
    children: [
      { id: "properties", title: "Properties", href: "#properties" },
      { id: "bookings", title: "Bookings", href: "#bookings" },
      { id: "guests", title: "Guests", href: "#guests" },
      { id: "channels", title: "Channels", href: "#channels" },
      { id: "rates", title: "Rates & Pricing", href: "#rates" },
      { id: "availability", title: "Availability", href: "#availability" }
    ]
  },
  {
    id: "api-reference",
    title: "API Reference",
    icon: Code2,
    children: [
      { id: "base-url", title: "Base URL & Versioning", href: "#base-url" },
      { id: "authentication-api", title: "Authentication", href: "#authentication-api" },
      { id: "rate-limits", title: "Rate Limits", href: "#rate-limits" },
      { id: "errors", title: "Error Handling", href: "#errors" },
      { id: "pagination", title: "Pagination", href: "#pagination" },
      { id: "webhooks", title: "Webhooks", href: "#webhooks" }
    ]
  },
  {
    id: "endpoints",
    title: "Endpoints",
    icon: Terminal,
    children: [
      { id: "properties-endpoint", title: "Properties", href: "#properties-endpoint" },
      { id: "bookings-endpoint", title: "Bookings", href: "#bookings-endpoint" },
      { id: "guests-endpoint", title: "Guests", href: "#guests-endpoint" },
      { id: "calendar-endpoint", title: "Calendar", href: "#calendar-endpoint" },
      { id: "rates-endpoint", title: "Rates", href: "#rates-endpoint" },
      { id: "channels-endpoint", title: "Channels", href: "#channels-endpoint" },
      { id: "messages-endpoint", title: "Messages", href: "#messages-endpoint" },
      { id: "reports-endpoint", title: "Reports", href: "#reports-endpoint" }
    ]
  },
  {
    id: "sdks",
    title: "SDKs & Libraries",
    icon: Boxes,
    children: [
      { id: "javascript", title: "JavaScript/TypeScript", href: "#javascript" },
      { id: "python", title: "Python", href: "#python" },
      { id: "ruby", title: "Ruby", href: "#ruby" },
      { id: "php", title: "PHP", href: "#php" },
      { id: "go", title: "Go", href: "#go" },
      { id: "java", title: "Java", href: "#java" }
    ]
  },
  {
    id: "webhooks",
    title: "Webhooks & Events",
    icon: Webhook,
    children: [
      { id: "webhook-overview", title: "Overview", href: "#webhook-overview" },
      { id: "events", title: "Event Types", href: "#events" },
      { id: "signatures", title: "Webhook Signatures", href: "#signatures" },
      { id: "retry-logic", title: "Retry Logic", href: "#retry-logic" },
      { id: "best-practices", title: "Best Practices", href: "#best-practices" }
    ]
  },
  {
    id: "advanced",
    title: "Advanced Topics",
    icon: Cpu,
    children: [
      { id: "batch-operations", title: "Batch Operations", href: "#batch-operations" },
      { id: "caching", title: "Caching Strategies", href: "#caching" },
      { id: "idempotency", title: "Idempotency Keys", href: "#idempotency" },
      { id: "graphql", title: "GraphQL API", href: "#graphql" },
      { id: "real-time", title: "Real-time Updates", href: "#real-time" }
    ]
  },
  {
    id: "resources",
    title: "Resources",
    icon: Database,
    children: [
      { id: "changelog", title: "Changelog", href: "#changelog" },
      { id: "status", title: "API Status", href: "#status" },
      { id: "support", title: "Support", href: "#support" },
      { id: "community", title: "Community", href: "#community" }
    ]
  }
]

// Code Block Component
const CodeBlock = ({ example }: { example: CodeExample }) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(example.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-xl overflow-hidden bg-slate-900 border border-slate-700 my-6">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-slate-400">{example.language}</span>
          {example.filename && (
            <span className="text-xs text-slate-500">• {example.filename}</span>
          )}
        </div>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm font-mono text-blue-300 whitespace-pre">
          {example.code}
        </code>
      </pre>
    </div>
  )
}

// API Endpoint Card
const EndpointCard = ({
  method,
  path,
  description,
  parameters,
  responses
}: {
  method: string
  path: string
  description: string
  parameters?: { name: string; type: string; required: boolean; description: string }[]
  responses?: { code: string; description: string; example?: string }[]
}) => {
  const methodColors: Record<string, string> = {
    GET: "bg-emerald-500",
    POST: "bg-blue-500",
    PUT: "bg-amber-500",
    PATCH: "bg-purple-500",
    DELETE: "bg-red-500"
  }

  return (
    <div className="border border-[var(--border-light)] rounded-xl overflow-hidden mb-6 bg-white">
      <div className="flex items-center gap-3 p-4 bg-[var(--bg-secondary)] border-b border-[var(--border-light)]">
        <span className={`px-3 py-1 rounded-full text-white text-xs font-bold ${methodColors[method] || "bg-slate-500"}`}>
          {method}
        </span>
        <code className="text-sm font-mono text-[var(--text-primary)]">{path}</code>
      </div>
      <div className="p-4">
        <p className="text-[var(--text-secondary)] mb-4">{description}</p>
        
        {parameters && parameters.length > 0 && (
          <div className="mb-4">
            <h4 className="font-bold text-[var(--text-primary)] mb-2 text-sm">Parameters</h4>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border-light)]">
                  <th className="text-left py-2 text-[var(--text-tertiary)] font-medium">Name</th>
                  <th className="text-left py-2 text-[var(--text-tertiary)] font-medium">Type</th>
                  <th className="text-left py-2 text-[var(--text-tertiary)] font-medium">Required</th>
                  <th className="text-left py-2 text-[var(--text-tertiary)] font-medium">Description</th>
                </tr>
              </thead>
              <tbody>
                {parameters.map((param, i) => (
                  <tr key={i} className="border-b border-[var(--border-light)] last:border-0">
                    <td className="py-2 font-mono text-[var(--color-primary-600)]">{param.name}</td>
                    <td className="py-2 text-[var(--text-secondary)]">{param.type}</td>
                    <td className="py-2">
                      {param.required ? (
                        <span className="text-red-500 text-xs font-bold">Required</span>
                      ) : (
                        <span className="text-[var(--text-tertiary)] text-xs">Optional</span>
                      )}
                    </td>
                    <td className="py-2 text-[var(--text-secondary)]">{param.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {responses && responses.length > 0 && (
          <div>
            <h4 className="font-bold text-[var(--text-primary)] mb-2 text-sm">Responses</h4>
            <div className="space-y-2">
              {responses.map((response, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-[var(--bg-secondary)]">
                  <span className={`text-xs font-bold px-2 py-1 rounded ${response.code.startsWith('2') ? 'bg-emerald-100 text-emerald-700' : response.code.startsWith('4') ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'}`}>
                    {response.code}
                  </span>
                  <div>
                    <p className="text-sm text-[var(--text-secondary)]">{response.description}</p>
                    {response.example && (
                      <pre className="mt-2 text-xs font-mono text-slate-600 bg-white p-2 rounded border border-[var(--border-light)]">
                        {response.example}
                      </pre>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// Sidebar Navigation Component
const Sidebar = ({
  activeSection,
  onSectionClick,
  isOpen,
  onClose
}: {
  activeSection: string
  onSectionClick: (id: string) => void
  isOpen: boolean
  onClose: () => void
}) => {
  const [expandedSections, setExpandedSections] = useState<string[]>(["getting-started", "api-reference"])

  const toggleSection = (id: string) => {
    setExpandedSections(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    )
  }

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-72 bg-[var(--bg-primary)] border-r border-[var(--border-light)] overflow-y-auto z-50 lg:z-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300`}
      >
        <div className="p-4 pt-24">
          <div className="flex items-center justify-between mb-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-primary-600)] flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-[var(--text-primary)]">Docs</span>
            </Link>
            <button onClick={onClose} className="lg:hidden p-2">
              <X className="w-5 h-5 text-[var(--text-tertiary)]" />
            </button>
          </div>

          <div className="space-y-1">
            {navigationData.map((section) => (
              <div key={section.id}>
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors"
                >
                  {section.icon && <section.icon className="w-4 h-4 text-[var(--text-tertiary)]" />}
                  <span className="flex-1 text-left">{section.title}</span>
                  <ChevronDown className={`w-4 h-4 text-[var(--text-tertiary)] transition-transform ${expandedSections.includes(section.id) ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {expandedSections.includes(section.id) && section.children && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-4 pl-4 border-l border-[var(--border-light)] space-y-1 mt-1">
                        {section.children.map((child) => (
                          <button
                            key={child.id}
                            onClick={() => {
                              onSectionClick(child.id)
                              onClose()
                            }}
                            className={`w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors ${activeSection === child.id ? 'bg-[var(--color-primary-100)] text-[var(--color-primary-700)] font-medium' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'}`}
                          >
                            {child.title}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </motion.aside>
    </>
  )
}

// Main Content Component
const DocumentationContent = ({ activeSection }: { activeSection: string }) => {
  // Code examples
  const authExample: CodeExample = {
    language: "bash",
    code: `curl -X POST https://api.staypilot.com/v1/auth/token \\
  -H "Content-Type: application/json" \\
  -d '{
    "client_id": "your_client_id",
    "client_secret": "your_client_secret",
    "grant_type": "client_credentials"
  }'`
  }

  const jsExample: CodeExample = {
    language: "javascript",
    filename: "example.js",
    code: `import { StayPilotClient } from '@staypilot/sdk';

const client = new StayPilotClient({
  apiKey: process.env.STAYPILOT_API_KEY,
  environment: 'production'
});

// Get all properties
const properties = await client.properties.list({
  limit: 10,
  status: 'active'
});

console.log(properties.data);`
  }

  const pythonExample: CodeExample = {
    language: "python",
    filename: "example.py",
    code: `from staypilot import Client

client = Client(api_key="your_api_key")

# Create a new booking
booking = client.bookings.create(
    property_id="prop_123",
    guest_email="guest@example.com",
    check_in="2024-06-01",
    check_out="2024-06-05",
    guests=2
)

print(booking.id)`
  }

  const webhookExample: CodeExample = {
    language: "json",
    filename: "webhook-payload.json",
    code: `{
  "id": "evt_1234567890",
  "type": "booking.created",
  "created_at": "2024-01-15T10:30:00Z",
  "data": {
    "booking_id": "bk_987654321",
    "property_id": "prop_123",
    "guest_email": "guest@example.com",
    "check_in": "2024-06-01",
    "check_out": "2024-06-05",
    "total_amount": 450.00,
    "currency": "USD"
  }
}`
  }

  const errorExample: CodeExample = {
    language: "json",
    code: `{
  "error": {
    "code": "validation_error",
    "message": "The request failed validation",
    "details": [
      {
        "field": "check_in",
        "message": "Check-in date must be in the future"
      }
    ]
  }
}`
  }

  return (
    <div className="prose prose-slate max-w-none pt-12">
      {/* Introduction */}
      {activeSection === 'introduction' && (
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div variants={fadeInUp}>
            <h1 className="text-4xl font-bold text-[var(--color-primary-500)] mb-4">Introduction</h1>
            <p className="text-lg text-[var(--text-secondary)] mb-6">
              Welcome to the BNB property Management solution API documentation. Our REST API enables you to build powerful integrations 
              for property management, channel synchronization, booking automation, and revenue optimization.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
              <Zap className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-[var(--text-primary)] mb-1">Fast & Reliable</h3>
              <p className="text-sm text-[var(--text-secondary)]">99.99% uptime with sub-100ms response times</p>
            </div>
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100">
              <Shield className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-bold text-[var(--text-primary)] mb-1">Secure</h3>
              <p className="text-sm text-[var(--text-secondary)]">SOC 2 Type II certified with end-to-end encryption</p>
            </div>
            <div className="p-4 rounded-xl bg-purple-50 border border-purple-100">
              <Globe className="w-6 h-6 text-purple-600 mb-2" />
              <h3 className="font-bold text-[var(--text-primary)] mb-1">Global</h3>
              <p className="text-sm text-[var(--text-secondary)]">Multi-region deployment with local data residency</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">What You Can Build</h2>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-[var(--text-secondary)]"><strong>Channel Managers:</strong> Sync availability and rates across 100+ booking platforms</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-[var(--text-secondary)]"><strong>Booking Engines:</strong> Direct reservation systems with real-time availability</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-[var(--text-secondary)]"><strong>Revenue Management:</strong> Dynamic pricing algorithms and demand forecasting</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-[var(--text-secondary)]"><strong>Guest Experience:</strong> Automated messaging, check-in apps, and review management</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-[var(--text-secondary)]"><strong>Business Intelligence:</strong> Custom reporting and analytics dashboards</span>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">API Versions</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-[var(--border-light)] rounded-lg">
                <thead>
                  <tr className="bg-[var(--bg-secondary)]">
                    <th className="border border-[var(--border-light)] px-4 py-2 text-left text-[var(--text-primary)]">Version</th>
                    <th className="border border-[var(--border-light)] px-4 py-2 text-left text-[var(--text-primary)]">Status</th>
                    <th className="border border-[var(--border-light)] px-4 py-2 text-left text-[var(--text-primary)]">Base URL</th>
                    <th className="border border-[var(--border-light)] px-4 py-2 text-left text-[var(--text-primary)]">Sunset Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[var(--border-light)] px-4 py-2 font-mono text-[var(--color-primary-600)]">v1</td>
                    <td className="border border-[var(--border-light)] px-4 py-2"><span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold">Current</span></td>
                    <td className="border border-[var(--border-light)] px-4 py-2 font-mono text-sm">https://api.staypilot.com/v1</td>
                    <td className="border border-[var(--border-light)] px-4 py-2 text-[var(--text-secondary)]">—</td>
                  </tr>
                  <tr>
                    <td className="border border-[var(--border-light)] px-4 py-2 font-mono text-[var(--text-tertiary)]">v1-beta</td>
                    <td className="border border-[var(--border-light)] px-4 py-2"><span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold">Deprecated</span></td>
                    <td className="border border-[var(--border-light)] px-4 py-2 font-mono text-sm text-[var(--text-tertiary)]">https://api.staypilot.com/v1-beta</td>
                    <td className="border border-[var(--border-light)] px-4 py-2 text-[var(--text-secondary)]">2024-12-31</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Quick Start */}
      {activeSection === 'quickstart' && (
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div variants={fadeInUp}>
            <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">Quick Start Guide</h1>
            <p className="text-lg text-[var(--text-secondary)] mb-6">
              Get up and running with the StayPilot API in under 5 minutes. This guide covers account setup, 
              authentication, and your first API call.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[var(--color-primary-600)] text-white flex items-center justify-center text-sm">1</span>
                Create an Account
              </h2>
              <p className="text-[var(--text-secondary)] mb-4">
                Sign up for a StayPilot account at <a href="#" className="text-[var(--color-primary-600)] hover:underline">dashboard.staypilot.com</a>. 
                After verification, you'll have access to the developer portal.
              </p>
              <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800">
                  <strong>Note:</strong> You'll need a verified business email to access production API keys. 
                  Personal email domains (gmail.com, yahoo.com, etc.) are restricted to sandbox mode.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[var(--color-primary-600)] text-white flex items-center justify-center text-sm">2</span>
                Generate API Keys
              </h2>
              <p className="text-[var(--text-secondary)] mb-4">
                Navigate to Settings → API Keys in your dashboard. Create a new key pair:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[var(--text-secondary)] mb-4 ml-4">
                <li><strong>Client ID:</strong> Public identifier for your application</li>
                <li><strong>Client Secret:</strong> Private key for authentication (store securely)</li>
                <li><strong>Webhook Secret:</strong> For verifying webhook signatures</li>
              </ul>
              <CodeBlock example={authExample} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[var(--color-primary-600)] text-white flex items-center justify-center text-sm">3</span>
                Make Your First Request
              </h2>
              <p className="text-[var(--text-secondary)] mb-4">
                Test your setup by fetching your account information:
              </p>
              <CodeBlock example={{
                language: "bash",
                code: `curl https://api.staypilot.com/v1/account \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json"`
              }} />
              <p className="text-[var(--text-secondary)] mt-4">
                Expected response:
              </p>
              <CodeBlock example={{
                language: "json",
                code: `{
  "id": "acc_1234567890",
  "name": "Your Business Name",
  "email": "admin@yourbusiness.com",
  "plan": "professional",
  "created_at": "2024-01-15T10:30:00Z",
  "api_version": "v1"
}`
              }} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[var(--color-primary-600)] text-white flex items-center justify-center text-sm">4</span>
                Install SDK (Optional)
              </h2>
              <p className="text-[var(--text-secondary)] mb-4">
                For faster development, use our official SDKs:
              </p>
              <CodeBlock example={jsExample} />
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Authentication */}
      {activeSection === 'authentication' && (
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div variants={fadeInUp}>
            <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">Authentication</h1>
            <p className="text-lg text-[var(--text-secondary)] mb-6">
              StayPilot API uses OAuth 2.0 with client credentials flow. All API requests must include 
              a valid access token in the Authorization header.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">OAuth 2.0 Flow</h2>
            <p className="text-[var(--text-secondary)] mb-4">
              We support the client credentials grant type for server-to-server authentication:
            </p>
            <CodeBlock example={authExample} />
            
            <h3 className="text-xl font-bold text-[var(--text-primary)] mt-6 mb-3">Token Response</h3>
            <CodeBlock example={{
              language: "json",
              code: `{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "scope": "properties:read bookings:write"
}`            }} />

            <h3 className="text-xl font-bold text-[var(--text-primary)] mt-6 mb-3">Using Access Tokens</h3>
            <p className="text-[var(--text-secondary)] mb-4">
              Include the access token in all API requests:
            </p>
            <CodeBlock example={{
              language: "bash",
              code: `curl https://api.staypilot.com/v1/properties \\
  -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9..." \\
  -H "Content-Type: application/json"`
            }} />
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">API Keys (Legacy)</h2>
            <div className="p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-red-800 font-bold mb-1">Deprecation Notice</p>
                <p className="text-sm text-red-700">
                  Legacy API key authentication is deprecated and will be removed on December 31, 2024. 
                  Migrate to OAuth 2.0 as soon as possible.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Permission Scopes</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-[var(--border-light)]">
                <thead>
                  <tr className="bg-[var(--bg-secondary)]">
                    <th className="border border-[var(--border-light)] px-4 py-2 text-left text-[var(--text-primary)]">Scope</th>
                    <th className="border border-[var(--border-light)] px-4 py-2 text-left text-[var(--text-primary)]">Access</th>
                    <th className="border border-[var(--border-light)] px-4 py-2 text-left text-[var(--text-primary)]">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[var(--border-light)] px-4 py-2 font-mono text-sm">properties:read</td>
                    <td className="border border-[var(--border-light)] px-4 py-2 text-[var(--text-secondary)]">Read</td>
                    <td className="border border-[var(--border-light)] px-4 py-2 text-[var(--text-secondary)]">View property information</td>
                  </tr>
                  <tr>
                    <td className="border border-[var(--border-light)] px-4 py-2 font-mono text-sm">properties:write</td>
                    <td className="border border-[var(--border-light)] px-4 py-2 text-[var(--text-secondary)]">Write</td>
                    <td className="border border-[var(--border-light)] px-4 py-2 text-[var(--text-secondary)]">Create and modify properties</td>
                  </tr>
                  <tr>
                    <td className="border border-[var(--border-light)] px-4 py-2 font-mono text-sm">bookings:read</td>
                    <td className="border border-[var(--border-light)] px-4 py-2 text-[var(--text-secondary)]">Read</td>
                    <td className="border border-[var(--border-light)] px-4 py-2 text-[var(--text-secondary)]">View bookings and reservations</td>
                  </tr>
                  <tr>
                    <td className="border border-[var(--border-light)] px-4 py-2 font-mono text-sm">bookings:write</td>
                    <td className="border border-[var(--border-light)] px-4 py-2 text-[var(--text-secondary)]">Write</td>
                    <td className="border border-[var(--border-light)] px-4 py-2 text-[var(--text-secondary)]">Create and modify bookings</td>
                  </tr>
                  <tr>
                    <td className="border border-[var(--border-light)] px-4 py-2 font-mono text-sm">admin</td>
                    <td className="border border-[var(--border-light)] px-4 py-2 text-[var(--text-secondary)]">Full</td>
                    <td className="border border-[var(--border-light)] px-4 py-2 text-[var(--text-secondary)]">Complete account access</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Properties Endpoint */}
      {activeSection === 'properties-endpoint' && (
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div variants={fadeInUp}>
            <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">Properties</h1>
            <p className="text-lg text-[var(--text-secondary)] mb-6">
              Manage your property portfolio. Properties are the core resource in StayPilot, representing 
              vacation rentals, hotel rooms, apartments, or any bookable accommodation.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <EndpointCard
              method="GET"
              path="/v1/properties"
              description="List all properties in your account with optional filtering and pagination."
              parameters={[
                { name: "limit", type: "integer", required: false, description: "Number of results to return (1-100, default 20)" },
                { name: "offset", type: "integer", required: false, description: "Number of results to skip for pagination" },
                { name: "status", type: "string", required: false, description: "Filter by status: active, inactive, archived" },
                { name: "type", type: "string", required: false, description: "Filter by property type: apartment, house, villa, hotel_room" },
                { name: "city", type: "string", required: false, description: "Filter by city name" }
              ]}
              responses={[
                { 
                  code: "200", 
                  description: "Successful response with list of properties",
                  example: `{
  "data": [
    {
      "id": "prop_1234567890",
      "name": "Beachfront Villa",
      "type": "villa",
      "status": "active",
      "address": {
        "street": "123 Ocean Drive",
        "city": "Miami",
        "country": "US"
      },
      "capacity": {
        "guests": 8,
        "bedrooms": 4,
        "bathrooms": 3
      }
    }
  ],
  "meta": {
    "total": 45,
    "limit": 20,
    "offset": 0
  }
}`
                },
                { code: "401", description: "Unauthorized - Invalid or missing access token" },
                { code: "429", description: "Rate limit exceeded" }
              ]}
            />

            <EndpointCard
              method="POST"
              path="/v1/properties"
              description="Create a new property in your account."
              parameters={[
                { name: "name", type: "string", required: true, description: "Property name (max 200 characters)" },
                { name: "type", type: "string", required: true, description: "Property type: apartment, house, villa, hotel_room" },
                { name: "address", type: "object", required: true, description: "Address object with street, city, country" },
                { name: "capacity", type: "object", required: true, description: "Capacity object with guests, bedrooms, bathrooms" }
              ]}
              responses={[
                { code: "201", description: "Property created successfully" },
                { code: "400", description: "Validation error - check request body" },
                { code: "409", description: "Property with this name already exists" }
              ]}
            />

            <EndpointCard
              method="GET"
              path="/v1/properties/{id}"
              description="Retrieve detailed information about a specific property."
              parameters={[
                { name: "id", type: "string", required: true, description: "Property ID (prop_xxxxxxxxxx)" }
              ]}
              responses={[
                { code: "200", description: "Property found and returned" },
                { code: "404", description: "Property not found" }
              ]}
            />

            <EndpointCard
              method="PATCH"
              path="/v1/properties/{id}"
              description="Update specific fields of an existing property."
              parameters={[
                { name: "id", type: "string", required: true, description: "Property ID" },
                { name: "name", type: "string", required: false, description: "Updated property name" },
                { name: "status", type: "string", required: false, description: "Updated status" }
              ]}
              responses={[
                { code: "200", description: "Property updated successfully" },
                { code: "404", description: "Property not found" }
              ]}
            />

            <EndpointCard
              method="DELETE"
              path="/v1/properties/{id}"
              description="Archive a property (soft delete). Use with caution."
              parameters={[
                { name: "id", type: "string", required: true, description: "Property ID to archive" }
              ]}
              responses={[
                { code: "204", description: "Property archived successfully" },
                { code: "404", description: "Property not found" }
              ]}
            />
          </motion.div>
        </motion.div>
      )}

      {/* Bookings Endpoint */}
      {activeSection === 'bookings-endpoint' && (
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div variants={fadeInUp}>
            <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">Bookings</h1>
            <p className="text-lg text-[var(--text-secondary)] mb-6">
              Manage reservations and bookings. The bookings API handles reservation creation, 
              modification, cancellation, and guest communication.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <EndpointCard
              method="GET"
              path="/v1/bookings"
              description="List bookings with powerful filtering options."
              parameters={[
                { name: "property_id", type: "string", required: false, description: "Filter by property" },
                { name: "status", type: "string", required: false, description: "confirmed, pending, cancelled, completed" },
                { name: "check_in_from", type: "date", required: false, description: "Filter check-ins from this date (YYYY-MM-DD)" },
                { name: "check_in_to", type: "date", required: false, description: "Filter check-ins until this date" },
                { name: "guest_email", type: "string", required: false, description: "Filter by guest email" }
              ]}
              responses={[
                { code: "200", description: "List of bookings returned" }
              ]}
            />

            <EndpointCard
              method="POST"
              path="/v1/bookings"
              description="Create a new booking. This will check availability and hold dates."
              parameters={[
                { name: "property_id", type: "string", required: true, description: "Property to book" },
                { name: "check_in", type: "date", required: true, description: "Check-in date (YYYY-MM-DD)" },
                { name: "check_out", type: "date", required: true, description: "Check-out date (YYYY-MM-DD)" },
                { name: "guest", type: "object", required: true, description: "Guest information (name, email, phone)" },
                { name: "guests_count", type: "integer", required: true, description: "Number of guests" },
                { name: "source", type: "string", required: false, description: "Booking source: direct, airbnb, bookingcom, etc." }
              ]}
              responses={[
                { code: "201", description: "Booking created successfully" },
                { code: "409", description: "Dates not available" },
                { code: "422", description: "Guest count exceeds property capacity" }
              ]}
            />

            <EndpointCard
              method="POST"
              path="/v1/bookings/{id}/cancel"
              description="Cancel an existing booking with optional cancellation policy enforcement."
              parameters={[
                { name: "id", type: "string", required: true, description: "Booking ID" },
                { name: "reason", type: "string", required: false, description: "Cancellation reason" },
                { name: "refund_amount", type: "number", required: false, description: "Manual refund override (admin only)" }
              ]}
              responses={[
                { code: "200", description: "Booking cancelled successfully" },
                { code: "400", description: "Cancellation policy prevents cancellation" }
              ]}
            />
          </motion.div>
        </motion.div>
      )}

      {/* Webhooks */}
      {activeSection === 'webhooks' && (
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div variants={fadeInUp}>
            <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">Webhooks</h1>
            <p className="text-lg text-[var(--text-secondary)] mb-6">
              Receive real-time notifications when events occur in your StayPilot account. 
              Webhooks are the most efficient way to sync data and trigger automated workflows.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Event Types</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-light)]">
                <h3 className="font-bold text-[var(--text-primary)] mb-2">Booking Events</h3>
                <ul className="space-y-1 text-sm text-[var(--text-secondary)]">
                  <li><code className="text-[var(--color-primary-600)]">booking.created</code></li>
                  <li><code className="text-[var(--color-primary-600)]">booking.confirmed</code></li>
                  <li><code className="text-[var(--color-primary-600)]">booking.cancelled</code></li>
                  <li><code className="text-[var(--color-primary-600)]">booking.modified</code></li>
                  <li><code className="text-[var(--color-primary-600)]">booking.check_in</code></li>
                  <li><code className="text-[var(--color-primary-600)]">booking.check_out</code></li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-light)]">
                <h3 className="font-bold text-[var(--text-primary)] mb-2">Property Events</h3>
                <ul className="space-y-1 text-sm text-[var(--text-secondary)]">
                  <li><code className="text-[var(--color-primary-600)]">property.created</code></li>
                  <li><code className="text-[var(--color-primary-600)]">property.updated</code></li>
                  <li><code className="text-[var(--color-primary-600)]">property.availability_changed</code></li>
                  <li><code className="text-[var(--color-primary-600)]">property.rate_changed</code></li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Webhook Payload</h2>
            <CodeBlock example={webhookExample} />

            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Signature Verification</h2>
            <p className="text-[var(--text-secondary)] mb-4">
              Verify webhook authenticity using HMAC-SHA256 signature:
            </p>
            <CodeBlock example={{
              language: "javascript",
              filename: "verify-webhook.js",
              code: `import crypto from 'crypto';

const verifyWebhook = (payload, signature, secret) => {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload, 'utf8')
    .digest('hex');
  
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
};`
            }} />
          </motion.div>
        </motion.div>
      )}

      {/* Error Handling */}
      {activeSection === 'errors' && (
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div variants={fadeInUp}>
            <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">Error Handling</h1>
            <p className="text-lg text-[var(--text-secondary)] mb-6">
              StayPilot uses conventional HTTP response codes and returns detailed error information 
              to help you diagnose issues.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">HTTP Status Codes</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-[var(--border-light)]">
                <thead>
                  <tr className="bg-[var(--bg-secondary)]">
                    <th className="border border-[var(--border-light)] px-4 py-2 text-left text-[var(--text-primary)]">Code</th>
                    <th className="border border-[var(--border-light)] px-4 py-2 text-left text-[var(--text-primary)]">Meaning</th>
                    <th className="border border-[var(--border-light)] px-4 py-2 text-left text-[var(--text-primary)]">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[var(--border-light)] px-4 py-2"><span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs font-bold">200</span></td>
                    <td className="border border-[var(--border-light)] px-4 py-2 text-[var(--text-primary)]">OK</td>
                    <td className="border border-[var(--border-light)] px-4 py-2 text-[var(--text-secondary)]">Request succeeded</td>
                  </tr>
                  <tr>
                    <td className="border border-[var(--border-light)] px-4 py-2"><span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs font-bold">201</span></td>
                    <td className="border border-[var(--border-light)] px-4 py-2 text-[var(--text-primary)]">Created</td>
                    <td className="border border-[var(--border-light)] px-4 py-2 text-[var(--text-secondary)]">Resource created successfully</td>
                  </tr>
                  <tr>
                    <td className="border border-[var(--border-light)] px-4 py-2"><span className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs font-bold">400</span></td>
                    <td className="border border-[var(--border-light)] px-4 py-2 text-[var(--text-primary)]">Bad Request</td>
                    <td className="border border-[var(--border-light)] px-4 py-2 text-[var(--text-secondary)]">Request validation failed</td>
                  </tr>
                  <tr>
                    <td className="border border-[var(--border-light)] px-4 py-2"><span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">401</span></td>
                    <td className="border border-[var(--border-light)] px-4 py-2 text-[var(--text-primary)]">Unauthorized</td>
                    <td className="border border-[var(--border-light)] px-4 py-2 text-[var(--text-secondary)]">Invalid or missing authentication</td>
                  </tr>
                  <tr>
                    <td className="border border-[var(--border-light)] px-4 py-2"><span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">403</span></td>
                    <td className="border border-[var(--border-light)] px-4 py-2 text-[var(--text-primary)]">Forbidden</td>
                    <td className="border border-[var(--border-light)] px-4 py-2 text-[var(--text-secondary)]">Insufficient permissions</td>
                  </tr>
                  <tr>
                    <td className="border border-[var(--border-light)] px-4 py-2"><span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">404</span></td>
                    <td className="border border-[var(--border-light)] px-4 py-2 text-[var(--text-primary)]">Not Found</td>
                    <td className="border border-[var(--border-light)] px-4 py-2 text-[var(--text-secondary)]">Resource does not exist</td>
                  </tr>
                  <tr>
                    <td className="border border-[var(--border-light)] px-4 py-2"><span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">409</span></td>
                    <td className="border border-[var(--border-light)] px-4 py-2 text-[var(--text-primary)]">Conflict</td>
                    <td className="border border-[var(--border-light)] px-4 py-2 text-[var(--text-secondary)]">Resource conflict (e.g., duplicate)</td>
                  </tr>
                  <tr>
                    <td className="border border-[var(--border-light)] px-4 py-2"><span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">429</span></td>
                    <td className="border border-[var(--border-light)] px-4 py-2 text-[var(--text-primary)]">Too Many Requests</td>
                    <td className="border border-[var(--border-light)] px-4 py-2 text-[var(--text-secondary)]">Rate limit exceeded</td>
                  </tr>
                  <tr>
                    <td className="border border-[var(--border-light)] px-4 py-2"><span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">500</span></td>
                    <td className="border border-[var(--border-light)] px-4 py-2 text-[var(--text-primary)]">Server Error</td>
                    <td className="border border-[var(--border-light)] px-4 py-2 text-[var(--text-secondary)]">Internal server error</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Error Response Format</h2>
            <CodeBlock example={errorExample} />

            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Error Codes</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-light)]">
                <code className="text-[var(--color-primary-600)] font-bold">validation_error</code>
                <p className="text-sm text-[var(--text-secondary)] mt-1">Request failed validation checks</p>
              </div>
              <div className="p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-light)]">
                <code className="text-[var(--color-primary-600)] font-bold">authentication_error</code>
                <p className="text-sm text-[var(--text-secondary)] mt-1">Invalid or expired credentials</p>
              </div>
              <div className="p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-light)]">
                <code className="text-[var(--color-primary-600)] font-bold">not_found</code>
                <p className="text-sm text-[var(--text-secondary)] mt-1">Requested resource does not exist</p>
              </div>
              <div className="p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-light)]">
                <code className="text-[var(--color-primary-600)] font-bold">rate_limit_exceeded</code>
                <p className="text-sm text-[var(--text-secondary)] mt-1">API rate limit reached</p>
              </div>
              <div className="p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-light)]">
                <code className="text-[var(--color-primary-600)] font-bold">insufficient_funds</code>
                <p className="text-sm text-[var(--text-secondary)] mt-1">Payment or billing issue</p>
              </div>
              <div className="p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-light)]">
                <code className="text-[var(--color-primary-600)] font-bold">conflict</code>
                <p className="text-sm text-[var(--text-secondary)] mt-1">Resource state conflict</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Default Content */}
      {!['introduction', 'quickstart', 'authentication', 'properties-endpoint', 'bookings-endpoint', 'webhooks', 'errors'].includes(activeSection) && (
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="text-center py-20">
            <div className="w-20 h-20 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-[var(--text-tertiary)]" />
            </div>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Documentation Section</h2>
            <p className="text-[var(--text-secondary)] mb-6">
              Select a topic from the sidebar to view detailed documentation.
            </p>
            <button 
              onClick={() => document.getElementById('introduction')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 rounded-xl bg-[var(--color-primary-600)] text-white font-bold hover:bg-[var(--color-primary-700)] transition-colors inline-flex items-center gap-2"
            >
              Start with Introduction
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

// Main Page Component
export default function DocumentationPage() {
  const [activeSection, setActiveSection] = useState('introduction')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // Handle URL hash on load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash) {
      setActiveSection(hash)
    }
  }, [])

  // Update URL when section changes
  const handleSectionChange = (id: string) => {
    setActiveSection(id)
    window.location.hash = id
    setSidebarOpen(false)
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans selection:bg-[var(--color-primary-200)]">
      <Head>
        <title>Documentation | Guides & API Reference | StayPilot</title>
        <meta name="description" content="Complete documentation for StayPilot API. Guides, tutorials, API reference, SDKs, and code examples for property management integration." />
        <meta name="keywords" content="staypilot api documentation, property management api, rest api docs, webhook integration, sdk documentation" />
      </Head>

    

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
        <div className="flex gap-8">
          {/* Sidebar */}
          <Sidebar 
            activeSection={activeSection}
            onSectionClick={handleSectionChange}
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />

          {/* Main Content */}
          <main className="flex-1 min-w-0 py-8 lg:py-12">
            <DocumentationContent activeSection={activeSection} />
          </main>

          {/* Right Sidebar - Table of Contents (Desktop) */}
          <aside className="hidden xl:block w-64 py-12 sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="text-sm">
              <h4 className="font-bold text-[var(--text-tertiary)] uppercase tracking-wider text-xs mb-3">
                On this page
              </h4>
              <nav className="space-y-1 border-l border-[var(--border-light)]">
                <a href="#" className="block pl-4 py-1 text-[var(--color-primary-600)] font-medium border-l-2 border-[var(--color-primary-600)]">
                  Introduction
                </a>
                <a href="#" className="block pl-4 py-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                  What You Can Build
                </a>
                <a href="#" className="block pl-4 py-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                  API Versions
                </a>
              </nav>

              <h4 className="font-bold text-[var(--text-tertiary)] uppercase tracking-wider text-xs mb-3 mt-8">
                Related
              </h4>
              <nav className="space-y-2">
                <a href="#" className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--color-primary-600)]">
                  <ExternalLink className="w-3 h-3" />
                  API Status
                </a>
                <a href="#" className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--color-primary-600)]">
                  <ExternalLink className="w-3 h-3" />
                  Changelog
                </a>
                <a href="#" className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--color-primary-600)]">
                  <MessageSquare className="w-3 h-3" />
                  Community Forum
                </a>
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

// GitHub Icon Component
function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}