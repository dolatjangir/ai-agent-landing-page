"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Calendar,
  Clock,
  Zap,
  Bot,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  MessageSquare,
  Video,
  Phone,
  Mail,
  ChevronRight,
  Star,
  Shield,
  Globe,
  TrendingUp,
  Timer,
  CalendarDays,
  CalendarClock,
  CalendarCheck,
  CalendarX,
  Settings,
  Bell,
  Smartphone,
  Laptop,
  Tablet,
  RefreshCw,
  Plus,
  Minus,
  Info,
  HelpCircle,
  Check,
  X,
  Menu,
  ArrowUpRight,
  Play,
  Award,
  Heart,
  ThumbsUp,
  MessageCircle,
  Send,
  FileText,
  CreditCard,
  Lock,
  Eye,
  EyeOff,
  Search,
  Filter,
  MoreHorizontal,
  Download,
  Share2,
  Copy,
  CheckCheck,
  AlertCircle,
  Wifi,
  Battery,
  Signal,
  MapPin,
  Building2,
  Home,
  BedDouble,
  Bath,
  Car,
  Utensils,
  WifiIcon,
  Tv,
  Wind,
  Droplets,
  Thermometer,
  Sun,
  Moon,
  CloudRain,
  Snowflake,
  PartyPopper,
  Gift,
  Percent,
  Tag,
  Ticket,
  QrCode,
  Scan,
  Fingerprint,
  KeyRound,
  DoorOpen,
  Lightbulb,
  Fan,
  Heater,
  AirVent,
  Blinds,
  Plug,
  BatteryCharging,
  BatteryFull,
  BatteryMedium,
  BatteryLow,
  BatteryWarning,
  Power,
  PowerOff,
  ToggleLeft,
  ToggleRight,
  SwitchCamera,
  Camera,
  CameraOff,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Volume1,
  Volume,
  Maximize,
  Minimize,
  Maximize2,
  Minimize2,
  Expand,
  Shrink,
  Move,
  RotateCcw,
  RotateCw,
  Undo,
  Redo,
  Save,
  Trash2,
  Edit3,
  Edit,
  PenTool,
  Brush,
  Eraser,
  Scissors,
  Crop,
  Layers,
  Layout,
  Grid,
  List,
  Columns,
  Rows,
  Table,
  Database,
  Server,
  HardDrive,
  Cloud,
  CloudUpload,
  CloudDownload,
  CloudOff,
  Folder,
  FolderOpen,
  File,
  FilePlus,
  FileMinus,
  FileJson,
  FileCode,
  FileType,
  FileImage,
  FileVideo,
  FileAudio,
  FileSpreadsheet,
  FileArchive,
  FileUp,
  FileDown,
  FileQuestion,
  FileWarning,
  FileCheck,
  FileX,
  Files,
  FolderPlus,
  FolderMinus,
  FolderTree,
  Folders,
  BookOpen,
  Book,
  Bookmark,
  BookmarkPlus,
  BookmarkMinus,

  Library,
  GraduationCap,
  School,
  AwardIcon,
  Medal,
  Trophy,
  Crown,
  Gem,
  Diamond,
  CircleDollarSign,
  DollarSign,
  Euro,
  PoundSterling,
  JapaneseYen,
  Bitcoin,
  CreditCardIcon,
  Wallet,
  PiggyBank,
  Receipt,
  ReceiptText,
  
  FileTextIcon,
  Newspaper,
  Scroll,
  ScrollText,
  BookText,
  BookType,
  BookMarked,
  BookUser,
  BookKey,
  BookLock,
  BookOpenCheck,
  BookOpenText,
  BookX,
  BookPlus,
  BookMinus,
  BookCopy,
  BookImage,
  BookAudio,
  
  BookHeadphones,
  BookAIcon,
  BookOpenIcon,
  ChevronUp,
  Wrench,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

// ==========================================
// Animation & Effects Components
// ==========================================

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[var(--color-primary-300)]/20 to-[var(--color-secondary-400)]/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob" />
    <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[var(--color-primary-400)]/20 to-[var(--color-primary-500)]/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000" />
    <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-[var(--color-secondary-300)]/20 to-[var(--color-secondary-400)]/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000" />
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
  </div>
);

const FloatingElement = ({
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

const GlowCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`relative group ${className}`}
  >
    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
    <div className="relative bg-white rounded-2xl shadow-xl">
      {children}
    </div>
  </div>
);

// ==========================================
// Header Component
// ==========================================



// ==========================================
// Hero Section with Live Scheduler Demo
// ==========================================

const HeroSection = () => {
  const [selectedDate, setSelectedDate] = useState(15);
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [bookingStep, setBookingStep] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const dates = Array.from({ length: 14 }, (_, i) => ({
    day: i + 10,
    weekday: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i % 7],
    available: [12, 13, 15, 16, 17, 19, 20, 22, 23, 24].includes(i + 10),
  }));

  const times = ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"];

  const handleBooking = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setBookingStep(3);
      setIsAnimating(false);
    }, 1500);
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden ">
      <AnimatedBackground />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary-300)]/50  border border-[var(--color-primary-500)] text-[var(--color-primary-600)] text-sm font-semibold">
              <Sparkles className="w-4 h-4 " />
              AI-Powered Scheduling
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-[var(--text-primary)]">Smart Scheduling</span>
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                That Thinks Ahead
              </span>
            </h1>

            <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-lg">
              AI meeting scheduler for property managers. Automatically coordinate
              cleanings, maintenance, check-ins, and guest communications across
              your entire portfolio.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">

              <button className="group px-8 py-4 bg-[var(--color-primary-600)] text-[var(--text-inverse)] font-bold rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                Try AI Scheduler Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="group px-8 py-4 bg-white text-[var(--text-primary)] font-bold rounded-full border border-[var(--border-primary)] hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2">
                <Play className="w-5 h-5 text-[var(--color-primary-600)]" />
                Watch Demo
              </button>
            </div>

            {/* RATING */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white"
                    style={{ background: "var(--gradient-primary)" }}
                  />
                ))}
              </div>

              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-[var(--text-tertiary)]">
                  <span className="font-semibold text-[var(--text-primary)]">
                    4.9/5
                  </span>{" "}
                  from 2,400+ reviews
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT DEMO */}
         <div className="relative">

  <FloatingElement delay={0}>
    <div className="bg-white rounded-3xl shadow-2xl border border-[var(--border-primary)] overflow-hidden">

      {/* HEADER */}
      <div
        className="p-4 md:p-6 text-[var(--text-inverse)]"
        style={{ background: "var(--gradient-primary)" }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">

          <div className="flex items-center gap-3">
            <Bot className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-sm md:text-base">AI Scheduler</h3>
              <p className="text-xs md:text-sm opacity-80">
                Coordinating 12 properties
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs md:text-sm w-fit">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Live
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-xl p-3 flex items-start sm:items-center gap-3">
          <Sparkles className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
          <p className="text-xs md:text-sm leading-relaxed">
            Suggested: Schedule cleaning between 10 AM - 2 PM
          </p>
        </div>
      </div>

      {/* BODY */}
      <div className="p-4 md:p-6">

        {/* STEP 1 */}
        {bookingStep === 1 && (
          <div className="space-y-4">

            <h4 className="font-semibold text-sm md:text-base text-[var(--text-primary)] mb-4">
              Select Date
            </h4>

            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
              {dates.map((date) => (
                <button
                  key={date.day}
                  onClick={() => date.available && setSelectedDate(date.day)}
                  disabled={!date.available}
                  className={`aspect-square rounded-xl flex flex-col items-center justify-center text-xs md:text-sm transition-all ${
                    selectedDate === date.day
                      ? "bg-[var(--color-primary-600)] text-white"
                      : date.available
                      ? "hover:bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
                      : "text-[var(--text-tertiary)] bg-[var(--bg-secondary)]"
                  }`}
                >
                  <span className="text-[10px] md:text-xs opacity-70">
                    {date.weekday}
                  </span>
                  <span className="font-bold">{date.day}</span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setBookingStep(2)}
              className="w-full py-3 text-sm md:text-base bg-[var(--color-primary-600)] text-white font-semibold rounded-xl"
            >
              Continue to Time Selection
            </button>
          </div>
        )}

        {/* STEP 2 */}
        {bookingStep === 2 && (
          <div className="space-y-4">

            <h4 className="font-semibold text-sm md:text-base text-[var(--text-primary)]">
              Select Time
            </h4>

            <div className="grid grid-cols-2 gap-3">
              {times.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-3 rounded-xl border transition-all ${
                    selectedTime === time
                      ? "border-[var(--color-primary-600)] bg-[var(--bg-secondary)]"
                      : "border-[var(--border-primary)]"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-[var(--text-secondary)]">
                    <Clock className="w-4 h-4" />
                    {time}
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={handleBooking}
              disabled={isAnimating}
              className="w-full py-3 text-sm md:text-base bg-[var(--color-primary-600)] text-white font-semibold rounded-xl flex items-center justify-center gap-2"
            >
              {isAnimating ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  AI Coordinating...
                </>
              ) : (
                <>
                  Confirm Smart Schedule
                  <CheckCircle2 className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        )}

        {/* STEP 3 */}
        {bookingStep === 3 && (
          <div className="text-center py-6 md:py-8">

            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-green-600" />
            </div>

            <h4 className="text-lg md:text-xl font-bold text-[var(--text-primary)] mb-2">
              Successfully Scheduled!
            </h4>

            <p className="text-sm md:text-base text-[var(--text-secondary)] mb-6">
              Cleaning team notified • Calendar updated • Guest informed
            </p>

            <button
              onClick={() => {
                setBookingStep(1);
                setSelectedDate(15);
                setSelectedTime("10:00 AM");
              }}
              className="mt-4 md:mt-6 text-sm md:text-base text-[var(--color-primary-600)] font-medium hover:underline"
            >
              Schedule Another
            </button>
          </div>
        )}

      </div>
    </div>
  </FloatingElement>

</div>

        </div>
      </div>
    </section>
  );
};


// ==========================================
// AI Features Grid
// ==========================================

const AIFeaturesSection = () => {
  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Intelligent Conflict Resolution",
      description:
        "AI automatically detects scheduling conflicts and suggests optimal alternatives based on priority, availability, and historical performance.",
      stat: "Zero",
      statLabel: "Double Bookings",
    },
    {
      icon: <CalendarDays className="w-8 h-8" />,
      title: "Predictive Availability",
      description:
        "Machine learning predicts future availability patterns, automatically blocking maintenance windows and optimizing turnover times.",
      stat: "94%",
      statLabel: "Prediction Accuracy",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Smart Team Assignment",
      description:
        "Automatically assigns the best team member based on location, skills, ratings, and current workload distribution.",
      stat: "3x",
      statLabel: "Faster Dispatch",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Automated Guest Communication",
      description:
        "Sends personalized check-in instructions, local recommendations, and real-time updates without manual intervention.",
      stat: "100%",
      statLabel: "Response Rate",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Revenue Optimization",
      description:
        "Analyzes booking patterns to suggest optimal pricing adjustments and minimum stay requirements for maximum revenue.",
      stat: "+28%",
      statLabel: "Revenue Boost",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Proactive Problem Prevention",
      description:
        "Identifies potential issues before they occur—late checkouts, maintenance needs, or supply shortages—and auto-resolves them.",
      stat: "85%",
      statLabel: "Issues Prevented",
    },
  ];

  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
            bg-[var(--bg-secondary)] 
            text-[var(--color-primary-600)] 
            text-sm font-semibold mb-6 
            border border-[var(--border-primary)]">
            <Sparkles className="w-4 h-4" />
            AI-Powered Capabilities
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-primary-500)] mb-4">
            Scheduling That Gets Smarter
          </h2>

          <p className="text-lg text-[var(--text-secondary)]">
            Our AI doesn't just schedule—it learns, predicts, and optimizes your
            entire property operation automatically.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {features.map((feature, idx) => (
            <GlowCard key={idx} className="h-full">
              <div className="p-8 h-full flex flex-col group">

                {/* ICON */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center 
                  text-[var(--text-inverse)] mb-6 shadow-lg"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  {feature.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  {feature.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-[var(--text-secondary)] leading-relaxed mb-6 flex-grow">
                  {feature.description}
                </p>

                {/* FOOTER */}
                <div className="pt-6 border-t border-[var(--border-primary)] flex items-center justify-between">

                  <div>
                    <p className="text-3xl font-bold text-[var(--text-primary)]">
                      {feature.stat}
                    </p>
                    <p className="text-sm text-[var(--text-tertiary)]">
                      {feature.statLabel}
                    </p>
                  </div>

                  <button className="
                    w-12 h-12 rounded-full 
                    bg-[var(--bg-secondary)] 
                    flex items-center justify-center 
                    text-[var(--text-secondary)]
                    group-hover:bg-[var(--color-primary-600)] 
                    group-hover:text-[var(--text-inverse)] 
                    transition-all
                  ">
                    <ArrowUpRight className="w-5 h-5" />
                  </button>

                </div>
              </div>
            </GlowCard>
          ))}
        </div>

      </div>
    </section>
  );
};


// ==========================================
// Scheduling Types Section
// ==========================================

const SchedulingTypesSection = () => {
  const [activeTab, setActiveTab] = useState("cleaning");

  const types = {
    cleaning: {
      title: "Automated Cleaning Coordination",
      description:
        "AI schedules cleanings based on checkout times, property size, and team availability. Automatically buffers time for inspections and restocking.",
      features: [
        "Auto-detects checkout times from all platforms",
        "Assigns teams based on property size & location",
        "Buffers 30-60 min for quality inspections",
        "Restock alerts triggered automatically",
      ],
      icon: <Sparkles className="w-6 h-6" />,
    },
    maintenance: {
      title: "Preventive Maintenance Scheduling",
      description:
        "Predictive scheduling for HVAC, plumbing, and seasonal maintenance. Prevents emergencies by addressing issues before guest impact.",
      features: [
        "Seasonal HVAC filter replacements",
        "Preventive plumbing inspections",
        "Appliance lifecycle tracking",
        "Emergency repair rapid dispatch",
      ],
      icon: <Wrench className="w-6 h-6" />,
    },
    guest: {
      title: "Guest Experience Automation",
      description:
        "End-to-end guest journey automation from booking confirmation to post-stay review requests, personalized for each guest profile.",
      features: [
        "Personalized check-in instructions",
        "Local recommendations by guest type",
        "Real-time arrival coordination",
        "Automated review requests post-stay",
      ],
      icon: <Heart className="w-6 h-6" />,
    },
    owner: {
      title: "Owner Reporting & Meetings",
      description:
        "Automated monthly performance reports and owner meeting scheduling. Keeps stakeholders informed without manual report generation.",
      features: [
        "Monthly P&L auto-generated & sent",
        "Owner meeting auto-scheduling",
        "Maintenance approval workflows",
        "Portfolio performance dashboards",
      ],
      icon: <FileText className="w-6 h-6" />,
    },
  };

  const currentType = types[activeTab as keyof typeof types];

  return (
    <section className="py-24 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-[var(--color-primary-700)] mb-4">
            Every Schedule, Automated
          </h2>

          <p className="text-lg text-[var(--text-secondary)]">
            From cleaning crews to owner meetings, every aspect of your operation
            runs on intelligent autopilot.
          </p>
        </div>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.entries(types).map(([key, type]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2
                ${
                  activeTab === key
                    ? "text-[var(--text-inverse)] shadow-lg"
                    : "bg-white text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]"
                }`}
              style={
                activeTab === key
                  ? { background: "var(--gradient-primary)" }
                  : {}
              }
            >
              {type.icon}
              {type.title.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* CONTENT CARD */}
        <div className="bg-white rounded-3xl shadow-xl border border-[var(--border-primary)] overflow-hidden">
          <div className="grid lg:grid-cols-2">

            {/* LEFT CONTENT */}
            <div className="p-8 lg:p-12">

              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
                text-sm font-medium mb-6"
                style={{
                  background: "var(--bg-secondary)",
                  color: "var(--color-primary-600)",
                  border: "1px solid var(--border-primary)",
                }}
              >
                {currentType.icon}
                <span className="capitalize">{activeTab}</span>
              </div>

              <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
                {currentType.title}
              </h3>

              <p className="text-lg text-[var(--text-secondary)] mb-8">
                {currentType.description}
              </p>

              <ul className="space-y-4">
                {currentType.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">

                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "var(--bg-secondary)" }}
                    >
                      <Check
                        className="w-4 h-4"
                        style={{ color: "var(--color-primary-600)" }}
                      />
                    </div>

                    <span className="text-[var(--text-secondary)]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className="mt-8 px-6 py-3 font-semibold rounded-xl transition-all flex items-center gap-2 text-[var(--text-inverse)]"
                style={{ background: "var(--gradient-primary)" }}
              >
                Configure {activeTab} automation
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

            {/* RIGHT VISUAL */}
            <div className="bg-[var(--bg-tertiary)] p-8 lg:p-12 flex items-center justify-center">
              <div className="w-full max-w-md space-y-4">

                {/* CLEANING */}
                {activeTab === "cleaning" && (
                  <>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-[var(--border-primary)]">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-medium text-[var(--text-secondary)]">
                          Today - March 15
                        </span>
                        <span className="text-sm font-medium text-[var(--color-primary-600)]">
                          6 jobs
                        </span>
                      </div>

                      <div className="space-y-2">
                        {[
                          { time: "10:00 AM", property: "Oceanview Villa", team: "Team A" },
                          { time: "12:30 PM", property: "Downtown Loft", team: "Team B" },
                          { time: "3:00 PM", property: "Suburban Home", team: "Team C" },
                        ].map((job, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 p-2 rounded-lg bg-[var(--bg-secondary)]"
                          >
                            <div
                              className="w-2 h-2 rounded-full"
                              style={{ background: "var(--color-primary-600)" }}
                            />

                            <div className="flex-1">
                              <p className="text-sm font-medium text-[var(--text-primary)]">
                                {job.property}
                              </p>
                              <p className="text-xs text-[var(--text-tertiary)]">
                                {job.time} • {job.team}
                              </p>
                            </div>

                            <span
                              className="text-xs px-2 py-1 rounded-full"
                              style={{
                                background: "var(--bg-secondary)",
                                color: "var(--color-primary-600)",
                              }}
                            >
                              scheduled
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div
                      className="rounded-xl p-4 border"
                      style={{
                        background: "var(--bg-secondary)",
                        borderColor: "var(--border-primary)",
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <Bot
                          className="w-5 h-5 mt-0.5"
                          style={{ color: "var(--color-primary-600)" }}
                        />
                        <div>
                          <p className="font-medium text-sm text-[var(--text-primary)]">
                            AI Optimization
                          </p>
                          <p className="text-xs mt-1 text-[var(--text-secondary)]">
                            Rescheduled 2:00 PM job to 1:30 PM to reduce travel time.
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Other tabs (maintenance / guest / owner) */}
                {/* You can keep same structure — just replace colors with variables like above */}

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};


// ==========================================
// Integration Timeline
// ==========================================

const IntegrationTimeline = () => {
  const integrations = [
    {
      platform: "Airbnb",
      icon: <Home className="w-6 h-6" />,
      features: ["Instant calendar sync", "Auto-message guests", "Pricing updates"],
    },
    {
      platform: "Booking.com",
      icon: <Calendar className="w-6 h-6" />,
      features: ["Real-time availability", "Content sync", "Review management"],
    },
    {
      platform: "Vrbo",
      icon: <Building2 className="w-6 h-6" />,
      features: ["Unified inbox", "Fee optimization", "Listing sync"],
    },
    {
      platform: "Google Calendar",
      icon: <CalendarDays className="w-6 h-6" />,
      features: ["Team scheduling", "Block personal time", "Event reminders"],
    },
    {
      platform: "Slack",
      icon: <MessageSquare className="w-6 h-6" />,
      features: ["Team alerts", "Daily summaries", "Emergency pings"],
    },
    {
      platform: "QuickBooks",
      icon: <FileText className="w-6 h-6" />,
      features: ["Auto-invoicing", "Expense tracking", "Tax prep"],
    },
  ];

  return (
    <section id="integrations" className="py-24 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-[var(--color-primary-700)] mb-4">
            Connected to Your Ecosystem
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Native integrations with every major platform. One dashboard,
            complete control.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-6)]">
          {integrations.map((integration, idx) => (
            <div
              key={idx}
              className="group bg-[var(--color-primary-50)] rounded-2xl group p-6 border border-[var(--border-primary)] 
              hover:border-[var(--color-primary-500)] hover:shadow-xl 
              transition-all duration-[var(--duration-normal)]"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-xl group-hover:rotate-[-12deg] group-hover:scale-105 group-hover:transition-all group-hover:duration-3s group-hover:ease-in-out bg-[var(--bg-secondary)] 
                  flex items-center justify-center 
                  text-[var(--color-primary-600)] shadow-sm"
                >
                  {integration.icon}
                </div>

                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                  {integration.platform}
                </h3>
              </div>

              {/* Features */}
              <ul className="space-y-2">
                {integration.features.map((feature, fidx) => (
                  <li
                    key={fidx}
                    className="flex items-center gap-2 text-sm text-[var(--text-secondary)]"
                  >
                    <Check className="w-4 h-4 text-[var(--color-success)]" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="mt-4 pt-4 border-t border-[var(--border-primary)]">
                <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-primary-600)]">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" />
                  Connected & Syncing
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Badge */}
        <div className="mt-12 text-center">
          <div
            className="inline-flex items-center gap-2 px-6 py-3 
            bg-[var(--bg-secondary)] rounded-full 
            text-[var(--text-secondary)]"
          >
            <Plus className="w-5 h-5 text-[var(--color-primary-600)]" />
            <span>Plus 50+ more integrations via Zapier</span>
          </div>
        </div>
      </div>
    </section>
  );
};


// ==========================================
// Live Demo Scheduler
// ==========================================

const LiveDemoScheduler = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    properties: "1-3",
    goal: "",
  });

  const timeSlots = ["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"];

  return (
    <section className="py-24 bg-[var(--bg-primary)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[var(--color-primary-700)]">
              See AI Scheduling in Action
            </h2>

            <p className="text-lg text-[var(--text-secondary)] mb-8">
              Book a personalized demo with our scheduling specialists.
              We'll show you exactly how much time and money you'll save.
            </p>

            <div className="space-y-4">
              {[
                { icon: <Clock className="w-5 h-5" />, text: "15-minute personalized walkthrough" },
                { icon: <Calendar className="w-5 h-5" />, text: "See your properties' potential" },
                { icon: <Zap className="w-5 h-5" />, text: "Get custom automation recommendations" },
                { icon: <Gift className="w-5 h-5" />, text: "Free setup included ($500 value)" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-[var(--text-secondary)]">
                  <div className="w-10 h-10 rounded-lg bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--color-primary-600)]">
                    {item.icon}
                  </div>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-[var(--border-primary)]">

            {/* STEP 1 */}
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                  Book Your Demo
                </h3>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border-primary)] 
                      placeholder:text-[var(--color-primary-200)]
                    focus:ring-2 focus:ring-[var(--color-primary-200)]  text-[var(--color-primary-500)]
                    outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border-primary)] 
                      placeholder:text-[var(--color-primary-200)]
                    focus:ring-2 focus:ring-[var(--color-primary-200)]  text-[var(--color-primary-500)]
                    outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    Portfolio Size
                  </label>
                  <select
                    value={formData.properties}
                    onChange={(e) => setFormData({ ...formData, properties: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border-primary)] 
                      placeholder:text-[var(--color-primary-200)]
                    focus:ring-2 focus:ring-[var(--color-primary-200)]  text-[var(--color-primary-500)]
                    outline-none transition-all"
                  >
                    <option value="1-3">1-3 properties</option>
                    <option value="4-10">4-10 properties</option>
                    <option value="11-25">11-25 properties</option>
                    <option value="25+">25+ properties</option>
                  </select>
                </div>

                <button
                  onClick={() => setStep(2)}
                  disabled={!formData.name || !formData.email}
                  className="w-full py-4 bg-[var(--color-primary-600)] 
                  text-[var(--text-inverse)] font-bold rounded-xl 
                  hover:bg-[var(--color-primary-700)] 
                  transition-colors disabled:opacity-50"
                >
                  Continue to Schedule
                </button>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <button
                    onClick={() => setStep(1)}
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  >
                    ← Back
                  </button>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                    Select Time
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setStep(3)}
                      className="p-4 rounded-xl border-2 border-[var(--border-primary)] 
                      hover:border-[var(--color-primary-500)] 
                      hover:bg-[var(--color-primary-50)] 
                      transition-all text-center"
                    >
                      <Clock className="w-5 h-5 mx-auto mb-2 text-[var(--text-muted)]" />
                      <span className="font-medium text-[var(--text-primary)]">
                        {time}
                      </span>
                      <p className="text-xs text-[var(--text-secondary)] mt-1">
                        Tomorrow
                      </p>
                    </button>
                  ))}
                </div>

                <div className="p-4 bg-[var(--color-primary-50)] rounded-xl border border-[var(--color-primary-200)]">
                  <div className="flex items-start gap-3">
                    <Bot className="w-5 h-5 text-[var(--color-primary-600)] mt-0.5" />
                    <div>
                      <p className="font-medium text-[var(--text-primary)] text-sm">
                        AI Assistant Note
                      </p>
                      <p className="text-xs text-[var(--text-secondary)] mt-1">
                        Based on your timezone, morning slots have best availability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="text-center py-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[var(--color-success-bg)] flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-[var(--color-success)]" />
                </div>

                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                  Demo Confirmed!
                </h3>

                <p className="text-[var(--text-secondary)] mb-6">
                  Check your email for calendar invite and meeting link.
                </p>

                <div className="bg-[var(--bg-secondary)] rounded-xl p-4 text-left space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--text-secondary)]">Date:</span>
                    <span className="font-medium text-[var(--text-primary)]">Tomorrow</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--text-secondary)]">Duration:</span>
                    <span className="font-medium text-[var(--text-primary)]">15 minutes</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--text-secondary)]">With:</span>
                    <span className="font-medium text-[var(--text-primary)]">
                      Scheduling Specialist
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setStep(1);
                    setFormData({
                      name: "",
                      email: "",
                      properties: "1-3",
                      goal: "",
                    });
                  }}
                  className="text-[var(--color-primary-600)] font-medium hover:underline"
                >
                  Book another demo
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};


// ==========================================
// Stats & Trust Section
// ==========================================

const StatsSection = () => {
  const stats = [
    {
      value: "2.4M+",
      label: "Meetings Scheduled",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      value: "98.7%",
      label: "On-Time Rate",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      value: "45K+",
      label: "Properties Managed",
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      value: "12.5 hrs",
      label: "Avg Time Saved/Week",
      icon: <Timer className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-20 border-y border-[var(--border-primary)] bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center group border border-[var(--color-primary-300)] lg:border-0 rounded-xl p-2 lg:p-0"
            >
              <div
                className="
                  w-14 h-14 mx-auto mb-4 rounded-2xl
                  
                  bg-[var(--color-primary-50)]
                  text-[var(--color-primary-600)]
                  flex items-center justify-center
                  transition-all duration-300
                  group-hover:bg-[var(--color-primary-600)]
                  group-hover:text-[var(--text-inverse)]
                  shadow-sm
                "
              >
                {stat.icon}
              </div>

              <p className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-1">
                {stat.value}
              </p>

              <p className="text-sm text-[var(--text-secondary)]">
                {stat.label}
              </p>
            </div>
          ))}
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
      quote: "The AI scheduling is scary good. It knew I needed buffer time between cleanings before I did. Saved me 15 hours a week.",
      author: "Jennifer Walsh",
      role: "Portfolio Manager",
      location: "Miami, FL",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      metric: "15 hrs",
      metricLabel: "Weekly Saved",
    },
    {
      quote: "We went from 3 scheduling conflicts per week to zero. The AI handles complex multi-property coordination effortlessly.",
      author: "Robert Chen",
      role: "Property Management Co.",
      location: "Austin, TX",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      metric: "Zero",
      metricLabel: "Conflicts",
    },
    {
      quote: "Guest communication is now 100% automated. From booking to checkout, every message is personalized and perfectly timed.",
      author: "Maria Santos",
      role: "Luxury Host",
      location: "Barcelona, Spain",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      metric: "100%",
      metricLabel: "Automated",
    },
  ];

  return (
    <section className="py-24 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-[var(--color-primary-700)] mb-4">
            Trusted by Thousands of Hosts
          </h2>
          <p className="text-lg text-slate-600">
            See how property managers worldwide are transforming their operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[var(--color-primary-50)] rounded-3xl p-8 border border-[var(--color-primary-100)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-slate-700 text-lg leading-relaxed mb-8">
                "{t.quote}"
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                <div className="flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
                  />
                  <div>
                    <p className="font-bold text-slate-900">{t.author}</p>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-[var(--color-primary-500)]">{t.metric}</p>
                  <p className="text-xs text-slate-500">{t.metricLabel}</p>
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
// FAQ Section
// ==========================================

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does the AI know when to schedule cleanings?",
      answer: "Our AI analyzes your booking calendars across all platforms (Airbnb, Booking.com, Vrbo), checks historical cleaning durations for your specific property size, factors in team travel times, and automatically buffers 30-60 minutes for inspections. It learns from past schedules to optimize future ones.",
    },
    {
      question: "Can I override AI scheduling decisions?",
      answer: "Absolutely. While the AI handles 95% of scheduling automatically, you retain full control. You can override any decision via the dashboard, mobile app, or even SMS commands. The AI learns from your overrides to improve future recommendations.",
    },
    {
      question: "What happens if a guest extends their stay last minute?",
      answer: "The AI monitors calendars in real-time. If a guest modifies their reservation, it immediately recalculates the cleaning schedule, notifies the assigned team, and suggests alternative slots. Emergency re-scheduling is handled within 2 minutes.",
    },
    {
      question: "Does it work with my existing cleaning teams?",
      answer: "Yes. You can onboard your current vendors or use our vetted network. The AI tracks each team's performance, ratings, and availability to make optimal assignments. Teams receive notifications via our mobile app or SMS.",
    },
    {
      question: "How does pricing optimization work?",
      answer: "The AI analyzes 50+ data points including local events, seasonality, competitor rates, demand patterns, and your historical performance. It updates prices 4x daily across all platforms, with customizable minimums and maximums set by you.",
    },
    {
      question: "Is there a setup fee or long-term contract?",
      answer: "No setup fee and no long-term contracts. We offer month-to-month plans with 30-day cancellation. Enterprise clients receive complimentary white-glove onboarding including team training and custom workflow configuration.",
    },
  ];

  return (
    <section id="faq" className="py-24 ">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[var(--color-primary-700)] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about AI-powered scheduling.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[var(--color-primary-50)] rounded-2xl border border-[var(--color-primary-200)] overflow-hidden shadow-sm"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className={`font-semibold  pr-8 ${openIndex === idx ? "text-[var(--color-primary-500)]" : "text-slate-900"}`}>
                  {faq.question}
                </span>
                {openIndex === idx ? (
                  <ChevronUp className="w-5 h-5 text-[var(--color-primary-700)] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === idx ? "300px " : "0",
                  opacity: openIndex === idx ? 1 : 0,
                }}
              >
                <p className={`px-6 pb-6  leading-relaxed text-slate-600 `}>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-[var(--color-primary-50)] rounded-2xl border border-[var(--color-primary-200)]">
          <h3 className="font-bold text-slate-900 mb-2">Still have questions?</h3>
          <p className="text-slate-600 mb-4">
            Our team is here to help you get started.
          </p>
          <button className="px-6 py-3 bg-[var(--color-primary-600)] text-white font-semibold rounded-xl hover:bg-[var(--color-primary-700)] transition-colors">
            Chat with Support
          </button>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// Final CTA Section
// ==========================================

const FinalCTASection = () => (
  <section className="py-24 bg-[var(--bg-primary)]">
    <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
      <div
        className="
          relative overflow-hidden
          rounded-[2.5rem]
          p-12 lg:p-16
          shadow-xl
          bg-gradient-to-br
          from-[var(--color-primary-600)]
          via-[var(--color-primary-500)]
          to-[var(--color-primary-700)]
        "
      >
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        <div className="relative">
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-inverse)] mb-6">
            Stop Scheduling. Start Scaling.
          </h2>

          <p className="text-xl text-[var(--color-primary-100)] mb-8 max-w-2xl mx-auto">
            Join 45,000+ property managers who've eliminated scheduling headaches
            and reclaimed 10+ hours every week.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            {/* Primary Button */}
            <button
              className="
                px-5 md:px-10 py-3 md:py-5
                text-sm md:text-md
                bg-[var(--bg-primary)]
                text-[var(--color-primary-600)]
                font-bold text-lg
                rounded-full
                hover:shadow-2xl
                hover:-translate-y-1
                transition-all duration-300
                flex items-center justify-center gap-2
              "
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Secondary Button */}
            <button
              className="
                px-5 md:px-10 py-3 md:py-5
                text-sm md:text-md
                bg-[var(--color-primary-700)]
                text-[var(--text-inverse)]
                font-bold text-lg
                rounded-full
                hover:bg-[var(--color-primary-800)]
                transition-all
                flex items-center justify-center gap-2
              "
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[var(--color-primary-100)]">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              14-day free trial
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              No credit card required
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Setup in 5 minutes
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);


// ==========================================
// Footer
// ==========================================


// ==========================================
// Main Page Component
// ==========================================

const SmartSchedulingPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
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
      <StatsSection />
      <AIFeaturesSection />
      <SchedulingTypesSection />
      <IntegrationTimeline />
      <LiveDemoScheduler />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      {/* <Footer /> */}
      
    </div>
  );
};

export default SmartSchedulingPage;