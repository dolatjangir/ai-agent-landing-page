"use client"

import React, { useState } from 'react'
import Head from 'next/head'
import { motion, Variants } from 'framer-motion'
import { 
  Cloud,
  Server,
  Shield,
  Zap,
  DollarSign,
  Users,
  Settings,
  Check,
  X,
  ArrowRight,
  HelpCircle,
  Building2,
  Lock,
  Globe,
  Cpu,
  HeadphonesIcon,
  Code2,
  Database,
  Network,
  Scale,
  Clock,
  FileCheck,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Download
} from 'lucide-react'

// Animation variants
const fadeInUp : Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer : Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

// Comparison Row Component
const ComparisonRow = ({ 
  feature, 
  cloud, 
  onPrem, 
  description 
}: { 
  feature: string
  cloud: React.ReactNode
  onPrem: React.ReactNode
  description?: string
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-[var(--border-light)] last:border-0">
      <div className="grid grid-cols-[2fr,1fr,1fr] gap-4 p-4 items-center hover:bg-[var(--bg-secondary)]/50 transition-colors">
        <div>
          <div className="font-bold text-[var(--text-primary)]">{feature}</div>
          {description && (
            <div className="text-sm text-[var(--text-secondary)] mt-1">{description}</div>
          )}
        </div>
        <div className="text-center flex justify-center">{cloud}</div>
        <div className="text-center flex justify-center bg-[var(--bg-secondary)] -my-4 py-4 border-x border-[var(--border-light)]">{onPrem}</div>
      </div>
    </div>
  )
}

// Feature Card Component
const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  color = "blue" 
}: { 
  icon: any
  title: string
  description: string
  color?: "blue" | "green" | "amber" | "slate"
}) => {
  const colors = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-emerald-50 text-emerald-600",
    amber: "bg-amber-50 text-amber-600",
    slate: "bg-slate-100 text-slate-600"
  }

  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl p-6 shadow-md border border-[var(--border-light)] hover:shadow-lg transition-all"
    >
      <div className={`w-12 h-12 rounded-lg ${colors[color]} flex items-center justify-center mb-4`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="font-bold text-[var(--text-primary)] mb-2">{title}</h3>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{description}</p>
    </motion.div>
  )
}

// Deployment Option Card
const DeploymentCard = ({ 
  title, 
  subtitle, 
  description, 
  features, 
  pricing, 
  cta, 
  highlighted = false 
}: { 
  title: string
  subtitle: string
  description: string
  features: string[]
  pricing: string
  cta: string
  highlighted?: boolean
}) => (
  <div className={`relative rounded-2xl p-8 ${highlighted ? 'bg-[var(--color-primary-900)] text-white' : 'bg-white border border-[var(--border-light)]'}`}>
    {highlighted && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <span className="px-4 py-1.5 rounded-full bg-[var(--color-primary-500)] text-white text-xs sm:text-sm font-bold">
          Enterprise Standard
        </span>
      </div>
    )}
    
    <div className="mb-6">
      <h3 className={`text-2xl font-bold mb-2 ${highlighted ? 'text-white' : 'text-[var(--text-primary)]'}`}>
        {title}
      </h3>
      <div className={`text-sm font-medium mb-3 ${highlighted ? 'text-blue-300' : 'text-[var(--color-primary-600)]'}`}>
        {subtitle}
      </div>
      <p className={`text-sm leading-relaxed ${highlighted ? 'text-slate-300' : 'text-[var(--text-secondary)]'}`}>
        {description}
      </p>
    </div>

    <div className="mb-6">
      <div className={`text-3xl font-extrabold mb-1 ${highlighted ? 'text-white' : 'text-[var(--text-primary)]'}`}>
        {pricing}
      </div>
      <div className={`text-sm ${highlighted ? 'text-slate-400' : 'text-[var(--text-tertiary)]'}`}>
        {highlighted ? 'Custom enterprise pricing' : 'Per user per month'}
      </div>
    </div>

    <ul className="space-y-3 mb-8">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start gap-3">
          <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${highlighted ? 'text-[var(--color-primary-400)]' : 'text-[var(--color-success-600)]'}`} />
          <span className={`text-sm ${highlighted ? 'text-[var(--color-secondary-200)]' : 'text-[var(--text-primary)]'}`}>
            {feature}
          </span>
        </li>
      ))}
    </ul>

    <button className={`w-full py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 ${
      highlighted 
        ? 'bg-white text-slate-900 hover:bg-blue-50' 
        : 'bg-[var(--color-primary-600)] text-white hover:bg-[var(--color-primary-700)]'
    }`}>
      {cta}
      <ArrowRight className="w-4 h-4" />
    </button>
  </div>
)

export default function CloudVsOnPremPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'technical' | 'security' | 'costs'>('overview')
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const infrastructureFeatures = [
    {
      icon: Cloud,
      title: "Cloud SaaS",
      description: "Fully managed cloud deployment with automatic updates, scaling, and maintenance. Zero infrastructure overhead.",
      color: "blue" as const
    },
    {
      icon: Server,
      title: "On-Premises",
      description: "Self-hosted deployment in your data center with complete control over hardware, network, and security.",
      color: "slate" as const
    },
    {
      icon: Database,
      title: "Hybrid Cloud",
      description: "Mixed deployment with sensitive data on-prem and compute in cloud. Best of both worlds.",
      color: "green" as const
    },
    {
      icon: Globe,
      title: "Multi-Region",
      description: "Deploy across multiple geographic regions for compliance, performance, and disaster recovery.",
      color: "amber" as const
    }
  ]

  const comparisonData = [
    // INFRASTRUCTURE
    {
      category: "Infrastructure",
      items: [
        { 
          feature: "Server Management", 
          cloud: "Fully Managed", 
          onPrem: "Self-Managed",
          description: "Who maintains the physical servers and virtualization layer"
        },
        { 
          feature: "Scaling", 
          cloud: "Automatic/Instant", 
          onPrem: "Manual/Hardware",
          description: "How compute resources scale with demand"
        },
        { 
          feature: "Uptime SLA", 
          cloud: "99.99%", 
          onPrem: "99.9% (configurable)",
          description: "Guaranteed availability with financial backing"
        },
        { 
          feature: "Disaster Recovery", 
          cloud: "Multi-region automatic", 
          onPrem: "Custom configuration",
          description: "Backup and failover capabilities"
        },
        { 
          feature: "Latency", 
          cloud: "30-100ms (internet)", 
          onPrem: "<1ms (local network)",
          description: "Network response time to application"
        },
      ]
    },
    // SECURITY & COMPLIANCE
    {
      category: "Security & Compliance",
      items: [
        { 
          feature: "Data Sovereignty", 
          cloud: "Region selection", 
          onPrem: "Full control",
          description: "Physical location of data storage"
        },
        { 
          feature: "Encryption", 
          cloud: "AES-256 at rest/transit", 
          onPrem: "Customer managed keys",
          description: "Data encryption standards and key management"
        },
        { 
          feature: "Network Security", 
          cloud: "Cloud provider + app", 
          onPrem: "Full customer control",
          description: "Firewall, VPC, and network isolation"
        },
        { 
          feature: "Audit Logs", 
          cloud: "7 years retention", 
          onPrem: "Unlimited/custom",
          description: "Security event logging and retention"
        },
        { 
          feature: "Compliance Certifications", 
          cloud: "SOC2, ISO27001, GDPR", 
          onPrem: "Customer responsibility",
          description: "Regulatory compliance attestations"
        },
      ]
    },
    // DEVELOPMENT & INTEGRATION
    {
      category: "Development & Integration",
      items: [
        { 
          feature: "API Access", 
          cloud: "REST + GraphQL", 
          onPrem: "Same + gRPC/WebSocket",
          description: "Available API protocols for integration"
        },
        { 
          feature: "Custom Development", 
          cloud: "Extensions only", 
          onPrem: "Full source code access",
          description: "Ability to modify core application code"
        },
        { 
          feature: "Integration Speed", 
          cloud: "Pre-built connectors", 
          onPrem: "Custom + pre-built",
          description: "Time to integrate with existing systems"
        },
        { 
          feature: "Release Cycle", 
          cloud: "Weekly auto-updates", 
          onPrem: "Quarterly or custom",
          description: "Frequency of feature and security updates"
        },
        { 
          feature: "Development Environment", 
          cloud: "Shared staging", 
          onPrem: "Dedicated instances",
          description: "Testing and development infrastructure"
        },
      ]
    },
    // COSTS
    {
      category: "Costs & Licensing",
      items: [
        { 
          feature: "Initial Investment", 
          cloud: "$0", 
          onPrem: "$50K-$500K",
          description: "Upfront capital expenditure required"
        },
        { 
          feature: "Monthly Cost", 
          cloud: "$49-99/user", 
          onPrem: "$20-40/user + infra",
          description: "Ongoing operational expenditure"
        },
        { 
          feature: "IT Staff Required", 
          cloud: "0 FTE", 
          onPrem: "2-5 FTE",
          description: "Dedicated IT personnel needed"
        },
        { 
          feature: "Hardware Lifecycle", 
          cloud: "N/A", 
          onPrem: "3-5 year refresh",
          description: "Server and infrastructure replacement cycle"
        },
        { 
          feature: "Total Cost of Ownership", 
          cloud: "Predictable", 
          onPrem: "Variable/CapEx heavy",
          description: "5-year total cost comparison"
        },
      ]
    },
  ]

  const useCases = [
    {
      title: "Startups & SMBs",
      cloud: true,
      reason: "Zero upfront cost, instant scalability, no IT team needed"
    },
    {
      title: "Mid-Market Growth",
      cloud: true,
      reason: "Focus resources on growth, not infrastructure management"
    },
    {
      title: "Healthcare & Finance",
      onPrem: true,
      reason: "Strict data sovereignty, regulatory requirements, legacy integration"
    },
    {
      title: "Government & Defense",
      onPrem: true,
      reason: "Air-gapped networks, classified data, custom compliance"
    },
    {
      title: "Global Enterprises",
      hybrid: true,
      reason: "Mixed requirements across regions and business units"
    }
  ]

  return (
    <div className="min-h-screen text-[var(--text-primary)] font-sans selection:bg-[var(--color-primary-200)]">
      <Head>
        <title>Cloud vs On-Premises | Deployment Options | StayPilot</title>
        <meta name="description" content="Compare cloud SaaS and on-premises deployment options for StayPilot. Find the right infrastructure for your hospitality business." />
        <meta name="keywords" content="cloud vs on-prem, hospitality software deployment, saas vs self-hosted, property management infrastructure" />
      </Head>

      {/* HERO SECTION */}
   <section
  className="relative py-30 text-[var(--text-inverse)] overflow-hidden"
  style={{ background: "var(--gradient-secondary)" }}
>
  {/* Pattern Overlay */}
  <div className="absolute inset-0 opacity-70 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"
  />

  <div className="relative z-10 max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="text-center max-w-4xl mx-auto"
    >
      {/* Badge */}
      <motion.div variants={fadeInUp} className="mb-6">
        <span
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold border"
          style={{
            background: "rgba(255,255,255,0.08)",
            borderColor: "rgba(255,255,255,0.2)",
          }}
        >
          <Scale className="w-4 h-4" />
          Deployment Guide
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        variants={fadeInUp}
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
      >
        Cloud vs{" "}
        <span
          className="bg-clip-text text-transparent"
          style={{ backgroundImage: "var(--gradient-primary)" }}
        >
          On-Premises
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={fadeInUp}
        className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
        style={{ color: "var(--color-neutral-200)" }}
      >
        Choose the right deployment model for your hospitality business.
        Compare infrastructure, security, development options, and total cost
        of ownership.
      </motion.p>

      {/* Features */}
      <motion.div
        variants={fadeInUp}
        className="flex flex-wrap items-center justify-center gap-6 text-sm"
        style={{ color: "var(--color-neutral-300)" }}
      >
        <div className="flex items-center gap-2">
          <Check className="w-5 h-5 text-[var(--color-success-500)]" />
          <span>Same core features</span>
        </div>

        <div className="flex items-center gap-2">
          <Check className="w-5 h-5 text-[var(--color-success-500)]" />
          <span>Seamless migration path</span>
        </div>

        <div className="flex items-center gap-2">
          <Check className="w-5 h-5 text-[var(--color-success-500)]" />
          <span>Hybrid options available</span>
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>


      {/* DEPLOYMENT OPTIONS CARDS */}
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[var(--text-primary)]">
                Deployment <span className="text-[var(--color-primary-600)]">Options</span>
              </h2>
              <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                Four ways to deploy StayPilot based on your infrastructure requirements
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {infrastructureFeatures.map((feature, i) => (
                <FeatureCard key={i} {...feature} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* DETAILED COMPARISON */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[var(--text-primary)]">
                Detailed <span className="text-[var(--color-primary-600)]">Comparison</span>
              </h2>
              <p className="text-[var(--text-secondary)]">
                Side-by-side analysis across all critical dimensions
              </p>
            </motion.div>

            {/* Category Tabs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-2 mb-8">
              {['overview', 'technical', 'security', 'costs'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
                    activeTab === tab
                      ? 'bg-[var(--color-primary-600)] text-white'
                      : 'bg-white text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </motion.div>

            {/* Comparison Table */}
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl shadow-lg border border-[var(--border-light)] overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-[2fr,1fr,1fr] gap-4 p-4 bg-[var(--bg-secondary)] border-b border-[var(--border-light)]">
                <div className="font-bold text-[var(--text-tertiary)] uppercase text-sm tracking-wider">Feature</div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 font-bold text-[var(--color-primary-600)]">
                    <Cloud className="w-5 h-5" />
                    Cloud SaaS
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 font-bold text-slate-700">
                    <Server className="w-5 h-5" />
                    On-Premises
                  </div>
                </div>
              </div>

              {/* Body */}
              <div>
                {comparisonData
                  .filter(cat => activeTab === 'overview' || 
                    (activeTab === 'technical' && cat.category === 'Infrastructure') ||
                    (activeTab === 'security' && cat.category === 'Security & Compliance') ||
                    (activeTab === 'costs' && cat.category === 'Costs & Licensing'))
                  .map((category, catIndex) => (
                    <div key={catIndex}>
                      <div className="bg-[var(--color-primary-50)] px-4 py-2 font-bold text-[var(--color-primary-700)] text-sm">
                        {category.category}
                      </div>
                      {category.items.map((item, itemIndex) => (
                        <ComparisonRow
                          key={itemIndex}
                          feature={item.feature}
                          description={item.description}
                          cloud={
                            <div className="text-center">
                              <div className="font-bold text-[var(--text-primary)]">{item.cloud}</div>
                            </div>
                          }
                          onPrem={
                            <div className="text-center">
                              <div className="font-bold text-[var(--text-primary)]">{item.onPrem}</div>
                            </div>
                          }
                        />
                      ))}
                    </div>
                  ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[var(--text-primary)]">
                Choose Your <span className="text-[var(--color-primary-600)]">Deployment</span>
              </h2>
              <p className="text-[var(--text-secondary)]">
                Transparent pricing for both deployment models
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <DeploymentCard
                title="Cloud SaaS"
                subtitle="Fully Managed"
                description="We handle everything—infrastructure, security, updates, and scaling. You focus on your business."
                pricing="$49"
                features={[
                  "Automatic updates & scaling",
                  "99.99% uptime SLA",
                  "SOC 2 & ISO 27001 certified",
                  "Daily automated backups",
                  "Multi-region disaster recovery",
                  "24/7 managed security",
                  "API access included",
                  "Email & chat support"
                ]}
                cta="Start Free Trial"
              />

              <DeploymentCard
                title="On-Premises"
                subtitle="Self-Hosted"
                description="Complete control over your infrastructure, security, and data. Ideal for regulated industries."
                pricing="Custom"
                features={[
                  "Full source code access",
                  "Custom security hardening",
                  "Air-gapped deployment option",
                  "Unlimited customization",
                  "Dedicated account engineer",
                  "Custom integration development",
                  "Priority phone support",
                  "On-site training included"
                ]}
                cta="Contact Sales"
                highlighted
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* DECISION GUIDE */}
      <section className="py-16 ">
        <div className="max-w-6xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[var(--text-primary)]">
                Which is Right for <span className="text-[var(--color-primary-600)]">You</span>?
              </h2>
              <p className="text-[var(--text-secondary)]">
                Recommendations based on organization type and requirements
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-md border border-[var(--border-light)]">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-[var(--text-primary)]">{useCase.title}</h3>
                    {useCase.cloud && (
                      <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">
                        Cloud
                      </span>
                    )}
                    {useCase.onPrem && (
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
                        On-Prem
                      </span>
                    )}
                    {useCase.hybrid && (
                      <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                        Hybrid
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{useCase.reason}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* DEVELOPMENT OPTIONS */}
      <section className="py-16 ">
        <div className="max-w-6xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[var(--text-primary)]">
                Development <span className="text-[var(--color-primary-600)]">Options</span>
              </h2>
              <p className="text-[var(--text-secondary)] max-w-3xl mx-auto">
                Extensibility and customization capabilities for each deployment model
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid lg:grid-cols-2 gap-8">
              {/* Cloud Development */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[var(--border-light)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">Cloud Extensibility</h3>
                    <p className="text-sm text-[var(--text-secondary)]">Extension-based architecture</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-[var(--bg-secondary)]">
                    <div className="font-bold text-[var(--text-primary)] mb-2">REST & GraphQL APIs</div>
                    <p className="text-sm text-[var(--text-secondary)]">
                      Full API access to all platform features. Build custom integrations, mobile apps, and external tools.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-[var(--bg-secondary)]">
                    <div className="font-bold text-[var(--text-primary)] mb-2">Webhook System</div>
                    <p className="text-sm text-[var(--text-secondary)]">
                      Real-time event notifications for bookings, payments, guest actions. Integrate with any external system.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-[var(--bg-secondary)]">
                    <div className="font-bold text-[var(--text-primary)] mb-2">Custom Extensions</div>
                    <p className="text-sm text-[var(--text-secondary)]">
                      Build and deploy custom modules using our JavaScript/TypeScript SDK. Sandboxed, secure, auto-scaled.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-[var(--bg-secondary)]">
                    <div className="font-bold text-[var(--text-primary)] mb-2">Pre-built Integrations</div>
                    <p className="text-sm text-[var(--text-secondary)]">
                      200+ native integrations with PMS, CRM, accounting, and payment systems. Zapier connector included.
                    </p>
                  </div>
                </div>
              </div>

              {/* On-Prem Development */}
              <div className="bg-slate-900 rounded-2xl p-8 shadow-lg text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <Settings className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">On-Prem Customization</h3>
                    <p className="text-sm text-slate-400">Full platform control</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-slate-800">
                    <div className="font-bold text-white mb-2">Source Code License</div>
                    <p className="text-sm text-slate-300">
                      Optional source code access for deep customization. Modify core business logic, UI components, and workflows.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-800">
                    <div className="font-bold text-white mb-2">Custom Database Layer</div>
                    <p className="text-sm text-slate-300">
                      Use your preferred database (PostgreSQL, MySQL, SQL Server). Direct SQL access for reporting and integrations.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-800">
                    <div className="font-bold text-white mb-2">Private Fork & Branch</div>
                    <p className="text-sm text-slate-300">
                      Maintain private feature branches. Merge upstream updates on your schedule. Full version control.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-800">
                    <div className="font-bold text-white mb-2">Embedded Deployment</div>
                    <p className="text-sm text-slate-300">
                      White-label and embed within existing applications. Custom authentication integration with your IdP.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MIGRATION PATH */}
      <section className="py-16 ">
        <div className="max-w-5xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold mb-4 text-[var(--text-primary)]">
                Seamless <span className="text-[var(--color-primary-600)]">Migration</span>
              </h2>
              <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
                Start in the cloud and move on-prem when ready, or vice versa. Your data and configuration transfer completely.
              </p>

              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary-100)] flex items-center justify-center mb-4 text-[var(--color-primary-600)] font-bold">1</div>
                  <h3 className="font-bold text-[var(--text-primary)] mb-2">Export Data</h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Full database export in standard formats (SQL, JSON, CSV). No vendor lock-in.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary-100)] flex items-center justify-center mb-4 text-[var(--color-primary-600)] font-bold">2</div>
                  <h3 className="font-bold text-[var(--text-primary)] mb-2">Transform</h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Automated schema conversion and data validation. Custom field mapping supported.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary-100)] flex items-center justify-center mb-4 text-[var(--color-primary-600)] font-bold">3</div>
                  <h3 className="font-bold text-[var(--text-primary)] mb-2">Go Live</h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Parallel running supported. Cutover with zero downtime using our migration tools.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-br from-[var(--color-primary-600)] to-[var(--color-secondary-600)] text-white">
        <div className="max-w-4xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)] text-center">
          <h2 className="text-4xl font-bold mb-6">Still Deciding?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our solutions architects can assess your requirements and recommend the optimal deployment strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[var(--color-primary-600)] rounded-xl font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
              <HeadphonesIcon className="w-5 h-5" />
              Talk to an Architect
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download Deployment Guide
            </button>
          </div>
        </div>
      </section>

    
    </div>
  )
}