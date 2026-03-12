"use client"

import React, { useState, useEffect, useMemo } from 'react'
import Head from 'next/head'
import { motion, AnimatePresence, Variants } from 'framer-motion'


import { 
  Calculator,
  TrendingUp,
  DollarSign,
  Clock,
  Users,
  Building2,
  Zap,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  RefreshCw,
  Download,
  Share2,
  ChevronDown,
  ChevronUp,
  BarChart3,
  PieChart,
  LineChart,
  Wallet,
  Percent,
  Calendar,
  Target,
  Sparkles,
  Award,
  Star,
  ArrowUpRight,
  Minus,
  Plus,
  Info,
  Save,
  RotateCcw,
  Phone
} from 'lucide-react'

const Badge = ({
  children,
  variant = "primary",
  size = "sm",
  glow = false,
}: {
  children: React.ReactNode
  variant?: "primary" | "secondary"
  size?: "sm" | "lg"
  glow?: boolean
}) => {
  const variants = {
    primary: "bg-[var(--color-primary-100)] text-[var(--color-primary-700)]",
    secondary: "bg-slate-100 text-slate-700",
  }

  const sizes = {
    sm: "px-3 py-1 text-sm",
    lg: "px-5 py-2 text-base",
  }

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full font-semibold 
      ${variants[variant]} ${sizes[size]} 
      ${glow ? "shadow-lg shadow-[var(--color-primary-300)]/40" : ""}`}
    >
      {children}
    </span>
  )
}
const GradientText = ({
  children,
  variant = "primary",
}: {
  children: React.ReactNode
  variant?: "primary" | "secondary"
}) => {
  const variants = {
    primary: "from-[var(--color-primary-600)] to-[var(--color-secondary-600)]",
    secondary: "from-purple-600 to-pink-600",
  }

  return (
    <span
      className={`bg-gradient-to-r ${variants[variant]} bg-clip-text text-transparent`}
    >
      {children}
    </span>
  )
}

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

const scaleIn : Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
}

// Input Field Component
const InputField = ({ 
  label, 
  value, 
  onChange, 
  prefix, 
  suffix, 
  min = 0, 
  max, 
  step = 1,
  helpText,
  icon: Icon
}: { 
  label: string
  value: number
  onChange: (val: number) => void
  prefix?: string
  suffix?: string
  min?: number
  max?: number
  step?: number
  helpText?: string
  icon?: any
}) => (
  <div className="space-y-2">
    <label className="flex items-center gap-2 text-sm font-bold text-[var(--text-primary)]">
      {Icon && <Icon className="w-4 h-4 text-[var(--color-primary-600)]" />}
      {label}
      {helpText && (
        <div className="group relative">
          <HelpCircle className="w-4 h-4 text-[var(--text-tertiary)] cursor-help" />
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-slate-800 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
            {helpText}
          </div>
        </div>
      )}
    </label>
    <div className="relative">
      {prefix && (
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)] font-medium">
          {prefix}
        </span>
      )}
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Math.max(min, Math.min(max || Infinity, parseFloat(e.target.value) || 0)))}
        className={`w-full ${prefix ? 'pl-8' : 'pl-4'} ${suffix ? 'pr-12' : 'pr-4'} py-3 rounded-xl bg-white border border-[var(--border-light)] text-[var(--text-primary)] font-bold text-lg outline-none focus:border-[var(--color-primary-400)] focus:ring-2 focus:ring-[var(--color-primary-100)] transition-all`}
      />
      {suffix && (
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)] font-medium">
          {suffix}
        </span>
      )}
    </div>
    <div className="flex items-center gap-2">
      <input
        type="range"
        min={min}
        max={max || value * 2}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="flex-1 h-2 bg-[var(--bg-tertiary)] rounded-full appearance-none cursor-pointer accent-[var(--color-primary-600)]"
      />
    </div>
  </div>
)

// Result Card Component
const ResultCard = ({ 
  title, 
  value, 
  subtitle, 
  trend, 
  icon: Icon, 
  color = "primary",
  delay = 0
}: { 
  title: string
  value: string
  subtitle?: string
  trend?: string
  icon: any
  color?: "primary" | "success" | "warning" | "secondary"
  delay?: number
}) => {
  const colors = {
    primary: "from-[var(--color-primary-500)] to-[var(--color-secondary-600)]",
    success: "from-emerald-500 to-teal-600",
    warning: "from-amber-500 to-orange-600",
    secondary: "from-[var(--color-secondary-500)] to-[var(--color-primary-600)]"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="relative overflow-hidden bg-white rounded-2xl p-6 shadow-lg border border-[var(--border-light)] hover:shadow-xl transition-shadow"
    >
      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${colors[color]} opacity-10 rounded-bl-full`} />
      
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors[color]} bg-opacity-10 flex items-center justify-center`}>
          <Icon className={`w-6 h-6 ${color === 'success' ? 'text-emerald-600' : color === 'warning' ? 'text-amber-600' : 'text-[var(--color-primary-600)]'}`} />
        </div>
        {trend && (
          <span className={`flex items-center gap-1 text-sm font-bold ${trend.startsWith('+') ? 'text-emerald-600' : 'text-amber-600'}`}>
            <TrendingUp className="w-4 h-4" />
            {trend}
          </span>
        )}
      </div>
      
      <div className="text-sm text-[var(--text-secondary)] mb-1">{title}</div>
      <div className="text-3xl font-extrabold text-[var(--text-primary)] mb-1">{value}</div>
      {subtitle && <div className="text-xs text-[var(--text-tertiary)]">{subtitle}</div>}
    </motion.div>
  )
}

// Savings Item Component
const SavingsItem = ({ icon: Icon, title, description, amount, delay }: { icon: any, title: string, description: string, amount: number, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.4 }}
    className="flex items-center gap-4 p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-light)] hover:border-[var(--color-primary-200)] transition-colors"
  >
    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-100)] flex items-center justify-center flex-shrink-0">
      <Icon className="w-6 h-6 text-[var(--color-primary-600)]" />
    </div>
    <div className="flex-1">
      <div className="font-bold text-[var(--text-primary)]">{title}</div>
      <div className="text-sm text-[var(--text-secondary)]">{description}</div>
    </div>
    <div className="text-right">
      <div className="text-lg font-bold text-emerald-600">+${amount.toLocaleString()}</div>
      <div className="text-xs text-[var(--text-tertiary)]">/year</div>
    </div>
  </motion.div>
)

// Breakdown Chart Component
const BreakdownChart = ({ data }: { data: { label: string; value: number; color: string }[] }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0)
  
  return (
    <div className="space-y-3">
      {data.map((item, index) => (
        <div key={index} className="space-y-1">
          <div className="flex justify-between text-sm">
            <span className="text-[var(--text-secondary)]">{item.label}</span>
            <span className="font-bold text-[var(--text-primary)]">${item.value.toLocaleString()}</span>
          </div>
          <div className="h-3 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(item.value / total) * 100}%` }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="h-full rounded-full"
              style={{ backgroundColor: item.color }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function ROICalculatorPage() {
  // Input States
  const [properties, setProperties] = useState(10)
  const [avgNightlyRate, setAvgNightlyRate] = useState(150)
  const [occupancyRate, setOccupancyRate] = useState(65)
  const [currentManagementCost, setCurrentManagementCost] = useState(2000)
  const [staffHoursPerWeek, setStaffHoursPerWeek] = useState(40)
  const [hourlyRate, setHourlyRate] = useState(25)
  const [planType, setPlanType] = useState<'professional' | 'enterprise'>('professional')
  const [teamSize, setTeamSize] = useState(3)

  // Calculations
  const calculations = useMemo(() => {
    // Annual revenue
    const annualRevenue = properties * avgNightlyRate * (occupancyRate / 100) * 365
    
    // StayPilot cost
    const stayPilotMonthly = planType === 'professional' ? 49 * teamSize : 99 * teamSize
    const stayPilotAnnual = stayPilotMonthly * 12
    
    // Current costs
    const currentAnnualCost = (currentManagementCost * 12) + (staffHoursPerWeek * 52 * hourlyRate)
    
    // Savings calculations
    const timeSavingsPercent = 0.60 // 60% time savings
    const timeSavingsValue = staffHoursPerWeek * 52 * hourlyRate * timeSavingsPercent
    
    const revenueIncreasePercent = 0.15 // 15% revenue increase from dynamic pricing
    const revenueIncreaseValue = annualRevenue * revenueIncreasePercent
    
    const costReductionPercent = 0.30 // 30% reduction in management costs
    const costReductionValue = currentManagementCost * 12 * costReductionPercent
    
    const totalAnnualBenefit = timeSavingsValue + revenueIncreaseValue + costReductionValue
    const netAnnualBenefit = totalAnnualBenefit - stayPilotAnnual
    const roi = ((netAnnualBenefit / stayPilotAnnual) * 100)
    const paybackPeriod = stayPilotAnnual / (netAnnualBenefit / 12)
    
    return {
      annualRevenue,
      stayPilotAnnual,
      currentAnnualCost,
      timeSavingsValue,
      revenueIncreaseValue,
      costReductionValue,
      totalAnnualBenefit,
      netAnnualBenefit,
      roi,
      paybackPeriod,
      monthlySavings: netAnnualBenefit / 12
    }
  }, [properties, avgNightlyRate, occupancyRate, currentManagementCost, staffHoursPerWeek, hourlyRate, planType, teamSize])

  const savingsBreakdown = [
    { label: "Time Savings (60% efficiency)", value: calculations.timeSavingsValue, color: "#3b82f6" },
    { label: "Revenue Increase (15% uplift)", value: calculations.revenueIncreaseValue, color: "#10b981" },
    { label: "Cost Reduction (30% savings)", value: calculations.costReductionValue, color: "#f59e0b" },
  ]

  const resetCalculator = () => {
    setProperties(10)
    setAvgNightlyRate(150)
    setOccupancyRate(65)
    setCurrentManagementCost(2000)
    setStaffHoursPerWeek(40)
    setHourlyRate(25)
    setPlanType('professional')
    setTeamSize(3)
  }

  const saveResults = () => {
    const data = {
      inputs: { properties, avgNightlyRate, occupancyRate, currentManagementCost, staffHoursPerWeek, hourlyRate, planType, teamSize },
      results: calculations,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('staypilot-roi-calculation', JSON.stringify(data))
    alert('Results saved! You can access them later.')
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans overflow-x-hidden selection:bg-[var(--color-primary-200)]">
      <Head>
        <title>ROI Calculator | Calculate Your Return | StayPilot</title>
        <meta name="description" content="Calculate your potential return on investment with StayPilot. See how much time and money you can save with our property management software." />
        <meta name="keywords" content="roi calculator, property management roi, vacation rental savings calculator, hotel management software roi" />
      </Head>

      {/* 🎯 HERO SECTION */}
      <section className="relative py-16 bg-gradient-to-br from-[var(--bg-primary)] via-blue-50/50 to-[var(--bg-secondary)] border-b border-[var(--border-light)]">
        <div className="max-w-7xl mx-auto pt-6 px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <Badge variant="primary" size="lg" glow>
                <Calculator className="w-4 h-4" />
                Interactive ROI Calculator
              </Badge>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-[var(--text-primary)]">
              Calculate Your <GradientText variant="primary">Return on Investment</GradientText>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-[var(--text-secondary)] mb-8">
              See exactly how much time and money StayPilot can save your business. Adjust the sliders to match your operation.
            </motion.p>

            {/* Quick Stats */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--text-tertiary)]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-success-600)]" />
                <span>Based on 500+ customer data points</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[var(--color-success-600)]" />
                <span>Results in real-time</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5 text-[var(--color-success-600)]" />
                <span>Save & share your results</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 🧮 CALCULATOR SECTION */}
      <section className="py-12 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* INPUTS PANEL */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-6 shadow-lg border border-[var(--border-light)]">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-[var(--color-primary-600)]" />
                    Property Details
                  </h2>
                  <button 
                    onClick={resetCalculator}
                    className="text-sm text-[var(--text-tertiary)] hover:text-[var(--color-primary-600)] flex items-center gap-1 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Reset
                  </button>
                </div>

                <div className="space-y-6">
                  <InputField
                    label="Number of Properties"
                    value={properties}
                    onChange={setProperties}
                    min={1}
                    max={1000}
                    helpText="Total properties you manage"
                    icon={Building2}
                  />

                  <InputField
                    label="Average Nightly Rate"
                    value={avgNightlyRate}
                    onChange={setAvgNightlyRate}
                    prefix="$"
                    min={50}
                    max={1000}
                    helpText="Your average daily rate across all properties"
                    icon={DollarSign}
                  />

                  <InputField
                    label="Current Occupancy Rate"
                    value={occupancyRate}
                    onChange={setOccupancyRate}
                    suffix="%"
                    min={0}
                    max={100}
                    step={1}
                    helpText="Your current average occupancy percentage"
                    icon={Percent}
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-6 shadow-lg border border-[var(--border-light)]">
                <h2 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2 mb-6">
                  <Wallet className="w-5 h-5 text-[var(--color-primary-600)]" />
                  Current Costs
                </h2>

                <div className="space-y-6">
                  <InputField
                    label="Monthly Management Software Cost"
                    value={currentManagementCost}
                    onChange={setCurrentManagementCost}
                    prefix="$"
                    min={0}
                    max={10000}
                    helpText="What you currently pay for management tools"
                    icon={CreditCard}
                  />

                  <InputField
                    label="Staff Hours Per Week on Operations"
                    value={staffHoursPerWeek}
                    onChange={setStaffHoursPerWeek}
                    suffix="hrs"
                    min={0}
                    max={200}
                    helpText="Total hours your team spends on manual tasks"
                    icon={Clock}
                  />

                  <InputField
                    label="Average Hourly Rate"
                    value={hourlyRate}
                    onChange={setHourlyRate}
                    prefix="$"
                    min={15}
                    max={100}
                    helpText="Average hourly cost of your operations staff"
                    icon={Users}
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-6 shadow-lg border border-[var(--border-light)]">
                <h2 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2 mb-6">
                  <Zap className="w-5 h-5 text-[var(--color-primary-600)]" />
                  BNB property Plan
                </h2>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setPlanType('professional')}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${
                        planType === 'professional' 
                          ? 'border-[var(--color-primary-600)] bg-[var(--color-primary-50)]' 
                          : 'border-[var(--border-light)] hover:border-[var(--color-primary-200)]'
                      }`}
                    >
                      <div className="font-bold text-[var(--text-primary)] mb-1">Professional</div>
                      <div className="text-2xl font-extrabold text-[var(--color-primary-600)]">$49</div>
                      <div className="text-xs text-[var(--text-secondary)]">per user/month</div>
                    </button>

                    <button
                      onClick={() => setPlanType('enterprise')}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${
                        planType === 'enterprise' 
                          ? 'border-slate-800 bg-slate-50' 
                          : 'border-[var(--border-light)] hover:border-slate-300'
                      }`}
                    >
                      <div className="font-bold text-[var(--text-primary)] mb-1">Enterprise</div>
                      <div className="text-2xl font-extrabold text-slate-700">$99</div>
                      <div className="text-xs text-[var(--text-secondary)]">per user/month</div>
                    </button>
                  </div>

                  <InputField
                    label="Team Size (Users)"
                    value={teamSize}
                    onChange={setTeamSize}
                    min={1}
                    max={50}
                    helpText="Number of team members who will use StayPilot"
                    icon={Users}
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* RESULTS PANEL */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-6"
            >
              {/* Main Result Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ResultCard
                  title="Annual ROI"
                  value={`${Math.round(calculations.roi)}%`}
                  trend="+Exceptional"
                  icon={TrendingUp}
                  color="success"
                  delay={0}
                />
                <ResultCard
                  title="Payback Period"
                  value={`${calculations.paybackPeriod.toFixed(1)} months`}
                  subtitle="Time to break even"
                  icon={Clock}
                  color="primary"
                  delay={0.1}
                />
                <ResultCard
                  title="Net Annual Benefit"
                  value={`$${Math.round(calculations.netAnnualBenefit).toLocaleString()}`}
                  trend="+Revenue"
                  icon={DollarSign}
                  color="success"
                  delay={0.2}
                />
                <ResultCard
                  title="Monthly Savings"
                  value={`$${Math.round(calculations.monthlySavings).toLocaleString()}`}
                  icon={Wallet}
                  color="secondary"
                  delay={0.3}
                />
              </div>

              {/* Detailed Breakdown */}
              <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-6 shadow-lg border border-[var(--border-light)]">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-[var(--color-primary-600)]" />
                  Annual Savings Breakdown
                </h3>

                <div className="space-y-4 mb-6">
                  <SavingsItem
                    icon={Clock}
                    title="Time Savings"
                    description={`${Math.round(staffHoursPerWeek * 0.6)} hours/week recovered through automation`}
                    amount={calculations.timeSavingsValue}
                    delay={0.1}
                  />
                  <SavingsItem
                    icon={TrendingUp}
                    title="Revenue Increase"
                    description="15% average uplift from dynamic pricing & optimization"
                    amount={calculations.revenueIncreaseValue}
                    delay={0.2}
                  />
                  <SavingsItem
                    icon={Wallet}
                    title="Cost Reduction"
                    description="30% reduction in software & operational costs"
                    amount={calculations.costReductionValue}
                    delay={0.3}
                  />
                </div>

                <div className="pt-6 border-t border-[var(--border-light)]">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-[var(--text-primary)]">Total Annual Benefit</span>
                    <span className="text-2xl font-extrabold text-emerald-600">
                      +${Math.round(calculations.totalAnnualBenefit).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--text-secondary)]">StayPilot Annual Cost</span>
                    <span className="font-bold text-[var(--text-primary)]">
                      -${calculations.stayPilotAnnual.toLocaleString()}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Visual Chart */}
              <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-6 shadow-lg border border-[var(--border-light)]">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-[var(--color-primary-600)]" />
                  Where Your Savings Come From
                </h3>
                <BreakdownChart data={savingsBreakdown} />
              </motion.div>

              {/* Action Buttons */}
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={saveResults}
                  className="flex-1 py-4 rounded-xl bg-[var(--color-primary-600)] text-white font-bold hover:bg-[var(--color-primary-700)] transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <Save className="w-5 h-5" />
                  Save Results
                </button>
                <button className="flex-1 py-4 rounded-xl bg-[var(--bg-secondary)] text-[var(--text-primary)] font-bold hover:bg-[var(--border-light)] transition-colors flex items-center justify-center gap-2 border border-[var(--border-light)]">
                  <Share2 className="w-5 h-5" />
                  Share Report
                </button>
                <button className="flex-1 py-4 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 shadow-lg">
                  <ArrowRight className="w-5 h-5" />
                  Start Free Trial
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 📊 DETAILED ASSUMPTIONS */}
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[var(--text-primary)]">
                How We Calculate <GradientText>Your ROI</GradientText>
              </h2>
              <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                Our calculations are based on aggregated data from 500+ StayPilot customers. Here's exactly how we determine your potential savings.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Clock,
                  title: "60% Time Savings",
                  description: "Based on automation of repetitive tasks like guest messaging, scheduling, and reporting. Our customers report saving an average of 25 hours per week.",
                  color: "blue"
                },
                {
                  icon: TrendingUp,
                  title: "15% Revenue Uplift",
                  description: "From AI-powered dynamic pricing, optimized availability, and reduced double bookings. Verified across customer revenue reports.",
                  color: "green"
                },
                {
                  icon: Wallet,
                  title: "30% Cost Reduction",
                  description: "By consolidating multiple tools into one platform and reducing manual errors. Includes software consolidation and staff efficiency gains.",
                  color: "amber"
                }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-md border border-[var(--border-light)]">
                  <div className={`w-14 h-14 rounded-xl bg-${item.color}-100 flex items-center justify-center mb-4`}>
                    <item.icon className={`w-7 h-7 text-${item.color}-600`} />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </motion.div>

            {/* Methodology Table */}
            <motion.div variants={fadeInUp} className="mt-12 bg-white rounded-2xl p-8 shadow-lg border border-[var(--border-light)]">
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">Calculation Methodology</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[var(--border-light)]">
                      <th className="text-left py-3 px-4 font-bold text-[var(--text-primary)]">Metric</th>
                      <th className="text-left py-3 px-4 font-bold text-[var(--text-primary)]">Formula</th>
                      <th className="text-left py-3 px-4 font-bold text-[var(--text-primary)]">Source</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="py-3 px-4 text-[var(--text-secondary)]">Annual Revenue</td>
                      <td className="py-3 px-4 font-mono text-[var(--text-primary)]">Properties × Rate × Occupancy × 365</td>
                      <td className="py-3 px-4 text-[var(--text-secondary)]">Your inputs</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="py-3 px-4 text-[var(--text-secondary)]">Time Savings Value</td>
                      <td className="py-3 px-4 font-mono text-[var(--text-primary)]">Hours × 52 × Rate × 60%</td>
                      <td className="py-3 px-4 text-[var(--text-secondary)]">Customer avg: 60% efficiency gain</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="py-3 px-4 text-[var(--text-secondary)]">Revenue Uplift</td>
                      <td className="py-3 px-4 font-mono text-[var(--text-primary)]">Annual Revenue × 15%</td>
                      <td className="py-3 px-4 text-[var(--text-secondary)]">Verified customer data</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-[var(--text-secondary)]">ROI</td>
                      <td className="py-3 px-4 font-mono text-[var(--text-primary)]">(Benefit - Cost) / Cost × 100</td>
                      <td className="py-3 px-4 text-[var(--text-secondary)]">Standard ROI formula</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 💬 TESTIMONIALS */}
      <section className="py-16 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-[var(--text-primary)]">
              Real Customer <GradientText>Results</GradientText>
            </h2>
            <p className="text-[var(--text-secondary)]">
              See how actual customers achieved these returns
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "The ROI calculator was spot on. We saw a 340% return in our first year, mostly from the dynamic pricing feature.",
                author: "Sarah Chen",
                role: "COO",
                company: "LuxStay Properties",
                roi: "340% ROI",
                properties: 45
              },
              {
                quote: "We were skeptical at first, but the time savings alone paid for the software. Now we're saving 30 hours every week.",
                author: "Marcus Rodriguez",
                role: "Operations Director",
                company: "Coastal Rentals",
                roi: "280% ROI",
                properties: 28
              },
              {
                quote: "The revenue increase from better pricing optimization exceeded the calculator's estimate. Best investment we've made.",
                author: "Emma Thompson",
                role: "CEO",
                company: "Thompson Hospitality",
                roi: "420% ROI",
                properties: 67
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 shadow-lg border border-[var(--border-light)]"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[var(--color-warning-500)] text-[var(--color-warning-500)]" />
                  ))}
                </div>
                <p className="text-[var(--text-secondary)] mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between pt-4 border-t border-[var(--border-light)]">
                  <div>
                    <div className="font-bold text-[var(--text-primary)]">{testimonial.author}</div>
                    <div className="text-sm text-[var(--text-tertiary)]">{testimonial.role}, {testimonial.company}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-emerald-600">{testimonial.roi}</div>
                    <div className="text-xs text-[var(--text-tertiary)]">{testimonial.properties} properties</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 🚀 FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-[var(--color-primary-600)] to-[var(--color-secondary-600)] text-white">
        <div className="max-w-4xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)] text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Achieve These Results?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start your 14-day free trial today. No credit card required. See the ROI for yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[var(--color-primary-600)] rounded-full font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 shadow-lg">
              <Zap className="w-5 h-5" />
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Talk to Sales
            </button>
          </div>
          <p className="mt-6 text-sm text-blue-200">
            Average customer sees positive ROI within 3.2 months
          </p>
        </div>
      </section>

    </div>
  )
}

// Credit Card icon component
function CreditCard(props: any) {
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
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}