"use client";

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play, Clock, CheckCircle2, ChevronDown, ChevronUp, Search, Filter,
  BookOpen, Star, Users, ArrowRight, Award, Lock, Unlock,
  Zap, Globe, Code2, TrendingUp, Shield, Database, MessageSquare,
  BarChart3, Settings, FileText, Download, Check, X, Menu,
  LayoutList, Grid, MoreHorizontal, Bookmark, Share2, ThumbsUp,
  ExternalLink, Github, Linkedin, Twitter, Calendar, Clock3,
  GraduationCap, Target, Lightbulb, Layers, PieChart, Activity,
  Cpu, Wifi, Cloud, Server, Smartphone, Tablet, Monitor, Laptop,
  Bell, Mail, User, Users2, Building2, Briefcase, DollarSign,
  Percent, TrendingDown, ArrowUpRight, ArrowDownRight, Minus,
  Plus, GripVertical, Maximize2, Minimize2, PanelLeft, PanelRight,
  SidebarClose, SidebarOpen, Layout, LayoutGrid, LayoutList as LayoutListIcon,
  LayoutTemplate, Type, Text, AlignLeft, AlignCenter, AlignRight,
  Bold, Italic, Underline, Strikethrough, Code, Quote, List, ListOrdered,
  ListChecks, Image as ImageIcon, Hash, AtSign, DollarSignIcon,
  PercentIcon, Ampersand, Asterisk, Parentheses, Brackets, BracesIcon,
  Terminal, FileJson, Boxes, Puzzle, Workflow, Gauge, LineChart,
  TrendingUpIcon, CalendarIcon, SmartphoneIcon, TabletIcon, MonitorIcon,
  LaptopIcon, CloudIcon, Sun, Moon, SearchIcon, FilterIcon, SortAsc,
  MoreHorizontalIcon, BookmarkIcon, History, Home, ArrowLeft,
  ArrowUpRightIcon, MinusIcon, PlusIcon, GripVerticalIcon,
  Maximize2Icon, Minimize2Icon, PanelLeftIcon, PanelRightIcon,
  SidebarCloseIcon, SidebarOpenIcon, LayoutIcon, LayoutGridIcon,
  LayoutTemplateIcon, TypeIcon, TextIcon, AlignLeftIcon, AlignCenterIcon,
  AlignRightIcon, BoldIcon, ItalicIcon, UnderlineIcon, StrikethroughIcon,
 
  RefreshCw,
  Pause
} from 'lucide-react';

// --- Types ---

type Difficulty = 'beginner' | 'intermediate' | 'advanced';
type CourseStatus = 'locked' | 'available' | 'in-progress' | 'completed';

interface CourseModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  lessons: Lesson[];
  status: CourseStatus;
  progress: number;
}

interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'reading' | 'quiz' | 'assignment';
  status: CourseStatus;
  description?: string;
  resources?: Resource[];
}

interface Resource {
  name: string;
  type: 'pdf' | 'code' | 'link' | 'template' | 'video';
  url: string;
  size?: string;
}

interface Certification {
  id: string;
  title: string;
  description: string;
  level: 'Foundation' | 'Professional' | 'Expert';
  duration: string;
  modulesCount: number;
  lessonsCount: number;
  enrolledStudents: number;
  rating: number;
  image: string;
  instructor: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  };
  skills: string[];
  careerPaths: string[];
  modules: CourseModule[];
  prerequisites: string[];
  certificationBenefits: string[];
  examDetails: {
    duration: string;
    questions: number;
    passingScore: number;
    attemptsAllowed: number;
  };
}

// --- Mock Data (Overloaded) ---

const certifications: Certification[] = [
  {
    id: 'crm-foundation',
    title: 'CRM Foundation Certification',
    description: 'Master the fundamentals of customer relationship management. This comprehensive course covers everything from contact management to sales pipeline fundamentals, reporting basics, and workflow automation essentials. Perfect for newcomers to CRM technology and business professionals looking to formalize their skills.',
    level: 'Foundation',
    duration: '24 hours',
    modulesCount: 6,
    lessonsCount: 42,
    enrolledStudents: 15420,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=675&fit=crop',
    instructor: {
      name: 'Dr. Sarah Mitchell',
      role: 'Head of CRM Education',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
      bio: 'Former Salesforce Architect with 15+ years in CRM implementation across Fortune 500 companies. PhD in Information Systems from MIT.'
    },
    skills: ['Contact Management', 'Sales Pipeline', 'Reporting Basics', 'Workflow Automation', 'Data Import/Export', 'User Management', 'Dashboard Creation', 'Email Integration'],
    careerPaths: ['CRM Administrator', 'Sales Operations Specialist', 'Customer Success Associate', 'Business Analyst'],
    prerequisites: ['Basic computer literacy', 'Understanding of sales processes', 'Email proficiency'],
    certificationBenefits: [
      'Industry-recognized certificate',
      'LinkedIn badge integration',
      'Access to exclusive job board',
      '1-year premium community access',
      'Discount on advanced certifications'
    ],
    examDetails: {
      duration: '90 minutes',
      questions: 60,
      passingScore: 75,
      attemptsAllowed: 3
    },
    modules: [
      {
        id: 'm1',
        title: 'Introduction to CRM Systems',
        description: 'Understanding the evolution, types, and strategic value of CRM platforms in modern business.',
        duration: '3h 45m',
        status: 'completed',
        progress: 100,
        lessons: [
          { id: 'l1-1', title: 'What is CRM? History and Evolution', duration: '25m', type: 'video', status: 'completed', description: 'From Rolodex to AI-powered platforms' },
          { id: 'l1-2', title: 'Types of CRM: Operational, Analytical, Collaborative', duration: '30m', type: 'video', status: 'completed' },
          { id: 'l1-3', title: 'CRM Market Landscape 2024', duration: '20m', type: 'reading', status: 'completed' },
          { id: 'l1-4', title: 'Module 1 Assessment', duration: '15m', type: 'quiz', status: 'completed' }
        ]
      },
      {
        id: 'm2',
        title: 'Contact & Account Management',
        description: 'Master the core of any CRM: organizing people, companies, and relationships effectively.',
        duration: '4h 20m',
        status: 'completed',
        progress: 100,
        lessons: [
          { id: 'l2-1', title: 'Contact Data Models and Architecture', duration: '35m', type: 'video', status: 'completed' },
          { id: 'l2-2', title: 'Importing Contacts: Best Practices', duration: '40m', type: 'video', status: 'completed', resources: [{ name: 'Import Template.csv', type: 'template', url: '#' }] },
          { id: 'l2-3', title: 'Account Hierarchies and Relationships', duration: '30m', type: 'video', status: 'completed' },
          { id: 'l2-4', title: 'Data Quality and Deduplication', duration: '25m', type: 'video', status: 'completed' },
          { id: 'l2-5', title: 'Practical Exercise: Clean Your Database', duration: '45m', type: 'assignment', status: 'completed' },
          { id: 'l2-6', title: 'Module 2 Assessment', duration: '15m', type: 'quiz', status: 'completed' }
        ]
      },
      {
        id: 'm3',
        title: 'Sales Pipeline Management',
        description: 'Build, customize, and optimize sales pipelines that drive revenue predictability.',
        duration: '5h 10m',
        status: 'in-progress',
        progress: 60,
        lessons: [
          { id: 'l3-1', title: 'Sales Methodologies: SPIN, MEDDIC, BANT', duration: '40m', type: 'video', status: 'completed' },
          { id: 'l3-2', title: 'Pipeline Stages Design', duration: '35m', type: 'video', status: 'completed' },
          { id: 'l3-3', title: 'Opportunity Management', duration: '30m', type: 'video', status: 'completed' },
          { id: 'l3-4', title: 'Forecasting Fundamentals', duration: '45m', type: 'video', status: 'in-progress', description: 'Currently watching...' },
          { id: 'l3-5', title: 'Pipeline Hygiene and Review', duration: '25m', type: 'reading', status: 'locked' },
          { id: 'l3-6', title: 'Sales Analytics Basics', duration: '35m', type: 'video', status: 'locked' },
          { id: 'l3-7', title: 'Module 3 Assessment', duration: '20m', type: 'quiz', status: 'locked' }
        ]
      },
      {
        id: 'm4',
        title: 'Workflow Automation & Efficiency',
        description: 'Automate repetitive tasks and build smart workflows that scale your productivity.',
        duration: '4h 30m',
        status: 'locked',
        progress: 0,
        lessons: [
          { id: 'l4-1', title: 'Automation Principles', duration: '25m', type: 'video', status: 'locked' },
          { id: 'l4-2', title: 'Email Workflows and Sequences', duration: '40m', type: 'video', status: 'locked' },
          { id: 'l4-3', title: 'Task Automation', duration: '30m', type: 'video', status: 'locked' },
          { id: 'l4-4', title: 'Approval Processes', duration: '35m', type: 'video', status: 'locked' },
          { id: 'l4-5', title: 'Integration Basics', duration: '45m', type: 'video', status: 'locked' },
          { id: 'l4-6', title: 'Module 4 Assessment', duration: '20m', type: 'quiz', status: 'locked' }
        ]
      },
      {
        id: 'm5',
        title: 'Reporting & Analytics',
        description: 'Transform data into insights with dashboards, reports, and KPI tracking.',
        duration: '3h 45m',
        status: 'locked',
        progress: 0,
        lessons: [
          { id: 'l5-1', title: 'Report Types and Components', duration: '30m', type: 'video', status: 'locked' },
          { id: 'l5-2', title: 'Building Your First Dashboard', duration: '50m', type: 'video', status: 'locked' },
          { id: 'l5-3', title: 'Key CRM Metrics and KPIs', duration: '35m', type: 'video', status: 'locked' },
          { id: 'l5-4', title: 'Data Visualization Best Practices', duration: '25m', type: 'reading', status: 'locked' },
          { id: 'l5-5', title: 'Module 5 Assessment', duration: '15m', type: 'quiz', status: 'locked' }
        ]
      },
      {
        id: 'm6',
        title: 'Certification Exam Preparation',
        description: 'Final preparation, practice exams, and exam-taking strategies.',
        duration: '2h 30m',
        status: 'locked',
        progress: 0,
        lessons: [
          { id: 'l6-1', title: 'Exam Overview and Strategy', duration: '20m', type: 'video', status: 'locked' },
          { id: 'l6-2', title: 'Practice Exam A', duration: '45m', type: 'quiz', status: 'locked' },
          { id: 'l6-3', title: 'Practice Exam B', duration: '45m', type: 'quiz', status: 'locked' },
          { id: 'l6-4', title: 'Final Review Session', duration: '30m', type: 'video', status: 'locked' },
          { id: 'l6-5', title: 'Official Certification Exam', duration: '90m', type: 'quiz', status: 'locked' }
        ]
      }
    ]
  },
  {
    id: 'crm-professional',
    title: 'CRM Professional Certification',
    description: 'Advanced CRM strategies for power users and administrators. Dive deep into customization, advanced automation, API integrations, and enterprise-scale CRM management.',
    level: 'Professional',
    duration: '42 hours',
    modulesCount: 8,
    lessonsCount: 68,
    enrolledStudents: 8930,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop',
    instructor: {
      name: 'Marcus Chen',
      role: 'Senior CRM Architect',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      bio: 'Certified Salesforce, HubSpot, and Microsoft Dynamics architect. Implemented CRM solutions for 200+ enterprise clients.'
    },
    skills: ['Advanced Customization', 'API Integration', 'Data Migration', 'Security Management', 'Process Builder', 'Apex/Custom Code', 'Multi-tenant Architecture', 'Performance Optimization'],
    careerPaths: ['CRM Manager', 'Salesforce Administrator', 'CRM Consultant', 'Revenue Operations Manager'],
    prerequisites: ['CRM Foundation Certification', '2+ years CRM experience', 'Basic understanding of APIs', 'SQL fundamentals'],
    certificationBenefits: [
      'Professional certificate with digital verification',
      'Priority access to beta features',
      'Direct mentorship program eligibility',
      'Speaking opportunity at annual conference',
      '50% discount on Expert certification'
    ],
    examDetails: {
      duration: '120 minutes',
      questions: 80,
      passingScore: 80,
      attemptsAllowed: 3
    },
    modules: [
      {
        id: 'p1',
        title: 'Advanced Customization & Configuration',
        description: 'Deep customization techniques for enterprise CRM deployments.',
        duration: '6h 30m',
        status: 'available',
        progress: 0,
        lessons: [
          { id: 'pl1-1', title: 'Custom Objects and Relationships', duration: '45m', type: 'video', status: 'available' },
          { id: 'pl1-2', title: 'Formula Fields and Validation Rules', duration: '50m', type: 'video', status: 'available' },
          { id: 'pl1-3', title: 'Page Layouts and Dynamic Forms', duration: '40m', type: 'video', status: 'available' },
          { id: 'pl1-4', title: 'Record Types and Business Processes', duration: '35m', type: 'video', status: 'available' },
          { id: 'pl1-5', title: 'Custom Settings and Metadata', duration: '45m', type: 'video', status: 'available' },
          { id: 'pl1-6', title: 'Hands-on Lab: Build Custom App', duration: '90m', type: 'assignment', status: 'locked' }
        ]
      },
      {
        id: 'p2',
        title: 'API Integration & Development',
        description: 'Connect your CRM with external systems using REST APIs and webhooks.',
        duration: '7h 15m',
        status: 'locked',
        progress: 0,
        lessons: [
          { id: 'pl2-1', title: 'REST API Architecture', duration: '40m', type: 'video', status: 'locked' },
          { id: 'pl2-2', title: 'Authentication: OAuth 2.0 Deep Dive', duration: '55m', type: 'video', status: 'locked' },
          { id: 'pl2-3', title: 'Webhook Configuration', duration: '35m', type: 'video', status: 'locked' },
          { id: 'pl2-4', title: 'Building Custom Integrations', duration: '60m', type: 'video', status: 'locked' },
          { id: 'pl2-5', title: 'Error Handling and Retry Logic', duration: '30m', type: 'video', status: 'locked' },
          { id: 'pl2-6', title: 'Integration Project', duration: '120m', type: 'assignment', status: 'locked' }
        ]
      },
      {
        id: 'p3',
        title: 'Data Management & Migration',
        description: 'Enterprise-scale data strategies, ETL processes, and governance.',
        duration: '5h 45m',
        status: 'locked',
        progress: 0,
        lessons: [
          { id: 'pl3-1', title: 'Data Migration Strategy', duration: '40m', type: 'video', status: 'locked' },
          { id: 'pl3-2', title: 'ETL Tools and Techniques', duration: '50m', type: 'video', status: 'locked' },
          { id: 'pl3-3', title: 'Data Quality Frameworks', duration: '35m', type: 'video', status: 'locked' },
          { id: 'pl3-4', title: 'Governance and Compliance', duration: '45m', type: 'video', status: 'locked' },
          { id: 'pl3-5', title: 'Migration Simulation', duration: '90m', type: 'assignment', status: 'locked' }
        ]
      }
    ]
  },
  {
    id: 'crm-expert',
    title: 'CRM Expert & Architect Certification',
    description: 'The pinnacle of CRM mastery. For architects designing multi-org strategies, AI implementations, and enterprise transformations.',
    level: 'Expert',
    duration: '56 hours',
    modulesCount: 10,
    lessonsCount: 85,
    enrolledStudents: 3240,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=675&fit=crop',
    instructor: {
      name: 'Dr. Elena Rodriguez',
      role: 'Chief CRM Strategist',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
      bio: 'Former Gartner analyst, now leading CRM strategy for Fortune 100 companies. Published author on digital transformation.'
    },
    skills: ['Multi-org Architecture', 'AI/ML Integration', 'Enterprise Security', 'Change Management', 'TCO Optimization', 'Vendor Evaluation', 'Digital Transformation', 'C-level Communication'],
    careerPaths: ['CRM Director', 'VP of Revenue Operations', 'CRM Architect', 'Digital Transformation Lead', 'CTO'],
    prerequisites: ['CRM Professional Certification', '5+ years enterprise experience', 'Led 2+ major CRM implementations', 'Management experience'],
    certificationBenefits: [
      'Elite certificate with holographic verification',
      'Invitation to annual expert summit',
      '1-on-1 strategy sessions with instructors',
      'Advisory board participation opportunity',
      'Lifetime community access'
    ],
    examDetails: {
      duration: '180 minutes',
      questions: 100,
      passingScore: 85,
      attemptsAllowed: 2
    },
    modules: [
      {
        id: 'e1',
        title: 'Enterprise Architecture Strategy',
        description: 'Designing CRM ecosystems for global enterprises.',
        duration: '8h 30m',
        status: 'locked',
        progress: 0,
        lessons: [
          { id: 'el1-1', title: 'Multi-org vs Single-org Strategy', duration: '50m', type: 'video', status: 'locked' },
          { id: 'el1-2', title: 'Global Deployment Patterns', duration: '60m', type: 'video', status: 'locked' },
          { id: 'el1-3', title: 'Integration Architecture', duration: '55m', type: 'video', status: 'locked' },
          { id: 'el1-4', title: 'Scalability Planning', duration: '45m', type: 'video', status: 'locked' },
          { id: 'el1-5', title: 'Architecture Review Board', duration: '90m', type: 'assignment', status: 'locked' }
        ]
      }
    ]
  }
];

// --- Components ---

const StatusBadge = ({ status }: { status: CourseStatus }) => {
  const styles = {
    locked: 'bg-gray-100 text-gray-500 border-gray-200',
    available: 'bg-blue-50 text-blue-600 border-blue-200',
    'in-progress': 'bg-amber-50 text-amber-600 border-amber-200',
    completed: 'bg-emerald-50 text-emerald-600 border-emerald-200'
  };
  
  const icons = {
    locked: Lock,
    available: Unlock,
    'in-progress': Clock,
    completed: CheckCircle2
  };
  
  const Icon = icons[status];
  const labels = {
    locked: 'Locked',
    available: 'Start',
    'in-progress': 'In Progress',
    completed: 'Completed'
  };
  
  return (
    <span className={`px-2 py-1 rounded-lg text-xs font-medium border flex items-center gap-1 ${styles[status]}`}>
      <Icon className="w-3 h-3" />
      {labels[status]}
    </span>
  );
};

const LevelBadge = ({ level }: { level: Certification['level'] }) => {
  const colors = {
    Foundation: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    Professional: 'bg-blue-100 text-blue-700 border-blue-200',
    Expert: 'bg-purple-100 text-purple-700 border-purple-200'
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${colors[level]}`}>
      {level}
    </span>
  );
};

const LessonIcon = ({ type }: { type: Lesson['type'] }) => {
  const icons = {
    video: Play,
    reading: BookOpen,
    quiz: Target,
    assignment: FileText
  };
  const colors = {
    video: 'text-red-500 bg-red-50',
    reading: 'text-blue-500 bg-blue-50',
    quiz: 'text-amber-500 bg-amber-50',
    assignment: 'text-purple-500 bg-purple-50'
  };
  const Icon = icons[type];
  return (
    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${colors[type]}`}>
      <Icon className="w-4 h-4" />
    </div>
  );
};

// Module Accordion Component
const ModuleAccordion = ({ module, isOpen, onToggle, onLessonClick }: { 
  module: CourseModule; 
  isOpen: boolean; 
  onToggle: () => void;
  onLessonClick: (lesson: Lesson) => void;
}) => {
  return (
    <div className="border border-[var(--border-medium)] rounded-xl overflow-hidden bg-[var(--bg-primary)]">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-4 hover:bg-[var(--bg-secondary)] transition-colors text-left"
      >
        <div className="flex-shrink-0">
          {module.status === 'completed' ? (
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>
          ) : module.status === 'in-progress' ? (
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full border-2 border-amber-600 border-t-transparent animate-spin" />
            </div>
          ) : module.status === 'locked' ? (
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              <Lock className="w-5 h-5 text-gray-400" />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <Play className="w-5 h-5 text-blue-600" />
            </div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-[var(--text-primary)]">{module.title}</h3>
            <StatusBadge status={module.status} />
          </div>
          <p className="text-sm text-[var(--text-secondary)] line-clamp-1">{module.description}</p>
          <div className="flex items-center gap-4 mt-2 text-xs text-[var(--text-tertiary)]">
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {module.duration}</span>
            <span>{module.lessons.length} lessons</span>
            {module.progress > 0 && module.progress < 100 && (
              <span className="text-amber-600 font-medium">{module.progress}% complete</span>
            )}
          </div>
        </div>
        
        {module.status !== 'locked' && (
          <ChevronDown className={`w-5 h-5 text-[var(--text-tertiary)] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        )}
      </button>
      
      <AnimatePresence>
        {isOpen && module.status !== 'locked' && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="overflow-hidden"
          >
            <div className="border-t border-[var(--border-light)]">
              {module.lessons.map((lesson, idx) => (
                <div
                  key={lesson.id}
                  onClick={() => lesson.status !== 'locked' && onLessonClick(lesson)}
                  className={`flex items-center gap-4 p-4 pl-16 hover:bg-[var(--bg-secondary)] transition-colors border-b border-[var(--border-light)] last:border-0 ${
                    lesson.status === 'locked' ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                  } ${lesson.status === 'in-progress' ? 'bg-blue-50/50' : ''}`}
                >
                  <LessonIcon type={lesson.type} />
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className={`font-medium text-sm ${lesson.status === 'in-progress' ? 'text-blue-600' : 'text-[var(--text-primary)]'}`}>
                        {lesson.title}
                      </h4>
                      {lesson.status === 'completed' && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                      {lesson.status === 'in-progress' && <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />}
                    </div>
                    {lesson.description && (
                      <p className="text-xs text-[var(--text-secondary)] mt-0.5">{lesson.description}</p>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-xs text-[var(--text-tertiary)]">{lesson.duration}</span>
                    {lesson.status === 'locked' && <Lock className="w-4 h-4 text-gray-400" />}
                    {lesson.status === 'available' && <Play className="w-4 h-4 text-blue-500" />}
                    {lesson.status === 'in-progress' && <Pause className="w-4 h-4 text-blue-500" />}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Lesson Player Modal
const LessonPlayer = ({ lesson, onClose }: { lesson: Lesson; onClose: () => void }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(p => p >= 100 ? 0 : p + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="w-full max-w-4xl bg-[var(--bg-primary)] rounded-2xl overflow-hidden shadow-2xl"
      >
        <div className="flex items-center justify-between p-4 border-b border-[var(--border-light)]">
          <div className="flex items-center gap-3">
            <LessonIcon type={lesson.type} />
            <div>
              <h3 className="font-bold text-[var(--text-primary)]">{lesson.title}</h3>
              <p className="text-xs text-[var(--text-secondary)]">{lesson.duration}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-[var(--bg-secondary)] rounded-lg transition-colors">
            <X className="w-5 h-5 text-[var(--text-secondary)]" />
          </button>
        </div>
        
        <div className="aspect-video bg-gray-900 relative flex items-center justify-center group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
          
          {!isPlaying && (
            <button
              onClick={() => setIsPlaying(true)}
              className="relative z-10 w-20 h-20 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center transition-all hover:scale-110 shadow-2xl"
            >
              <Play className="w-8 h-8 text-white fill-white ml-1" />
            </button>
          )}
          
          {isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white/50 text-lg">Video Playing...</div>
            </div>
          )}
          
          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
            <div className="h-full bg-blue-500 transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium flex items-center gap-2 transition-colors">
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                {isPlaying ? 'Pause' : 'Resume'}
              </button>
              <button className="px-4 py-2 border border-[var(--border-medium)] hover:bg-[var(--bg-secondary)] rounded-lg font-medium text-[var(--text-secondary)] transition-colors">
                Mark Complete
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-[var(--bg-secondary)] rounded-lg text-[var(--text-secondary)]">
                <Bookmark className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-[var(--bg-secondary)] rounded-lg text-[var(--text-secondary)]">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {lesson.resources && lesson.resources.length > 0 && (
            <div className="border-t border-[var(--border-light)] pt-4">
              <h4 className="font-medium text-[var(--text-primary)] mb-3">Resources</h4>
              <div className="flex flex-wrap gap-2">
                {lesson.resources.map((resource, idx) => (
                  <a
                    key={idx}
                    href={resource.url}
                    className="flex items-center gap-2 px-3 py-2 bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] rounded-lg text-sm text-[var(--text-secondary)] transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    {resource.name}
                    {resource.size && <span className="text-xs text-[var(--text-tertiary)]">({resource.size})</span>}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function CRMAcademyPage() {
  const [activeCert, setActiveCert] = useState<Certification>(certifications[0]);
  const [openModules, setOpenModules] = useState<string[]>(['m3']);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [activeTab, setActiveTab] = useState<'curriculum' | 'overview' | 'instructor' | 'reviews'>('curriculum');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleModule = (id: string) => {
    setOpenModules(prev => 
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  const overallProgress = Math.round(
    activeCert.modules.reduce((acc, m) => acc + m.progress, 0) / activeCert.modules.length
  );

  return (
    <div className="min-h-screen bg-[var(--bg-secondary)] text-[var(--text-primary)]  font-sans">
      <Head>
        <title>CRM Academy | Free Certification Courses</title>
        <meta name="description" content="Master CRM with our free certification courses. From Foundation to Expert level." />
      </Head>

     

      {/* Hero Banner */}
      <div className="bg-[var(--bg-primary)] border-b pt-16 border-[var(--border-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <LevelBadge level={activeCert.level} />
                <span className="text-sm text-[var(--text-secondary)] flex items-center gap-1">
                  <Users className="w-4 h-4" /> {activeCert.enrolledStudents.toLocaleString()} enrolled
                </span>
                <span className="text-sm text-[var(--text-secondary)] flex items-center gap-1">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" /> {activeCert.rating}
                </span>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-[var(--color-primary-600)] mb-4 leading-tight">
                {activeCert.title}
              </h1>
              
              <p className="text-[var(--text-secondary)] text-lg mb-6 max-w-3xl">
                {activeCert.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <img src={activeCert.instructor.avatar} alt={activeCert.instructor.name} className="w-10 h-10 rounded-full border border-[var(--border-medium)]" />
                  <div>
                    <p className="font-medium text-sm text-[var(--text-primary)]">{activeCert.instructor.name}</p>
                    <p className="text-xs text-[var(--text-secondary)]">{activeCert.instructor.role}</p>
                  </div>
                </div>
                <div className="h-8 w-px bg-[var(--border-medium)]" />
                <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)]">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {activeCert.duration}</span>
                  <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" /> {activeCert.modulesCount} modules</span>
                  <span className="flex items-center gap-1"><Play className="w-4 h-4" /> {activeCert.lessonsCount} lessons</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {overallProgress > 0 ? (
                  <div className="flex items-center gap-3 flex-1 max-w-md">
                    <div className="flex-1 h-2 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full transition-all" style={{ width: `${overallProgress}%` }} />
                    </div>
                    <span className="text-sm font-medium text-[var(--text-primary)]">{overallProgress}%</span>
                  </div>
                ) : (
                  <button className="px-8 py-3 bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] text-white rounded-xl font-semibold flex items-center gap-2 transition-all shadow-lg shadow-blue-500/25">
                    <Play className="w-5 h-5 fill-white" /> Start Learning Free
                  </button>
                )}
                <button className="px-4 py-3 border border-[var(--border-medium)] hover:bg-[var(--bg-secondary)] rounded-xl font-medium text-[var(--text-secondary)] transition-colors flex items-center gap-2">
                  <Share2 className="w-5 h-5" /> Share
                </button>
              </div>
            </div>

            <div className="lg:w-80 flex-shrink-0">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img src={activeCert.image} alt={activeCert.title} className="w-full aspect-video object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white text-sm">
                    <Play className="w-4 h-4" /> Preview Course
                  </div>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border-light)]">
                <h4 className="font-bold text-sm text-[var(--text-primary)] mb-3">This course includes:</h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> {activeCert.duration} on-demand video</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> {activeCert.modulesCount} downloadable resources</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Practice exams included</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Certificate of completion</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Full lifetime access</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-[var(--bg-primary)] border-b border-[var(--border-light)] sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            {['curriculum', 'overview', 'instructor', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`py-4 text-sm font-medium capitalize relative transition-colors ${
                  activeTab === tab ? 'text-[var(--color-primary-600)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-primary-600)]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Content */}
          <div className="flex-1">
            {activeTab === 'curriculum' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-[var(--text-primary)]">Course Content</h2>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <span>{activeCert.modules.filter(m => m.status === 'completed').length} of {activeCert.modulesCount} modules completed</span>
                    <button className="p-2 hover:bg-[var(--bg-secondary)] rounded-lg transition-colors">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {activeCert.modules.map((module) => (
                    <ModuleAccordion
                      key={module.id}
                      module={module}
                      isOpen={openModules.includes(module.id)}
                      onToggle={() => toggleModule(module.id)}
                      onLessonClick={setSelectedLesson}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'overview' && (
              <div className="space-y-8">
                <section>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">What You'll Learn</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {activeCert.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-[var(--bg-primary)] rounded-lg border border-[var(--border-light)]">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-[var(--text-secondary)]">{skill}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Prerequisites</h3>
                  <ul className="space-y-2 text-[var(--text-secondary)]">
                    {activeCert.prerequisites.map((prereq, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--text-tertiary)]" />
                        {prereq}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Certification Benefits</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {activeCert.certificationBenefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                        <Award className="w-5 h-5 text-blue-600" />
                        <span className="text-[var(--text-primary)] font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Exam Details</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-[var(--bg-primary)] rounded-xl border border-[var(--border-light)] text-center">
                      <Clock className="w-6 h-6 text-[var(--color-primary-600)] mx-auto mb-2" />
                      <div className="font-bold text-[var(--text-primary)]">{activeCert.examDetails.duration}</div>
                      <div className="text-xs text-[var(--text-secondary)]">Duration</div>
                    </div>
                    <div className="p-4 bg-[var(--bg-primary)] rounded-xl border border-[var(--border-light)] text-center">
                      <Target className="w-6 h-6 text-[var(--color-primary-600)] mx-auto mb-2" />
                      <div className="font-bold text-[var(--text-primary)]">{activeCert.examDetails.questions}</div>
                      <div className="text-xs text-[var(--text-secondary)]">Questions</div>
                    </div>
                    <div className="p-4 bg-[var(--bg-primary)] rounded-xl border border-[var(--border-light)] text-center">
                      <Percent className="w-6 h-6 text-[var(--color-primary-600)] mx-auto mb-2" />
                      <div className="font-bold text-[var(--text-primary)]">{activeCert.examDetails.passingScore}%</div>
                      <div className="text-xs text-[var(--text-secondary)]">Passing Score</div>
                    </div>
                    <div className="p-4 bg-[var(--bg-primary)] rounded-xl border border-[var(--border-light)] text-center">
                      <RefreshCw className="w-6 h-6 text-[var(--color-primary-600)] mx-auto mb-2" />
                      <div className="font-bold text-[var(--text-primary)]">{activeCert.examDetails.attemptsAllowed}</div>
                      <div className="text-xs text-[var(--text-secondary)]">Attempts</div>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Career Paths</h3>
                  <div className="flex flex-wrap gap-2">
                    {activeCert.careerPaths.map((path, idx) => (
                      <span key={idx} className="px-4 py-2 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded-full text-sm font-medium">
                        {path}
                      </span>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'instructor' && (
              <div className="bg-[var(--bg-primary)] rounded-2xl border border-[var(--border-light)] p-8">
                <div className="flex items-start gap-6 mb-6">
                  <img src={activeCert.instructor.avatar} alt={activeCert.instructor.name} className="w-24 h-24 rounded-2xl border border-[var(--border-medium)]" />
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">{activeCert.instructor.name}</h3>
                    <p className="text-[var(--color-primary-600)] font-medium mb-2">{activeCert.instructor.role}</p>
                    <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)]">
                      <span className="flex items-center gap-1"><Users className="w-4 h-4" /> 50k+ students</span>
                      <span className="flex items-center gap-1"><Star className="w-4 h-4 text-amber-500" /> 4.9 rating</span>
                      <span className="flex items-center gap-1"><Play className="w-4 h-4" /> 12 courses</span>
                    </div>
                  </div>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed">{activeCert.instructor.bio}</p>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-4">
                <div className="flex items-center gap-8 p-6 bg-[var(--bg-primary)] rounded-2xl border border-[var(--border-light)]">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-[var(--text-primary)]">{activeCert.rating}</div>
                    <div className="flex items-center gap-1 text-amber-500 my-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < Math.floor(activeCert.rating) ? 'fill-current' : ''}`} />
                      ))}
                    </div>
                    <div className="text-sm text-[var(--text-secondary)]">Course Rating</div>
                  </div>
                  <div className="flex-1 space-y-2">
                    {[5, 4, 3, 2, 1].map((stars) => (
                      <div key={stars} className="flex items-center gap-3">
                        <span className="text-sm text-[var(--text-secondary)] w-8">{stars} star</span>
                        <div className="flex-1 h-2 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-amber-400 rounded-full" 
                            style={{ width: `${stars === 5 ? 75 : stars === 4 ? 20 : 5}%` }} 
                          />
                        </div>
                        <span className="text-sm text-[var(--text-secondary)] w-12">
                          {stars === 5 ? '75%' : stars === 4 ? '20%' : '5%'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar - Other Certifications */}
          <aside className="lg:w-80 flex-shrink-0 space-y-4">
            <h3 className="font-bold text-[var(--text-primary)] mb-4">Learning Path</h3>
            {certifications.map((cert, idx) => (
              <button
                key={cert.id}
                onClick={() => setActiveCert(cert)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  activeCert.id === cert.id 
                    ? 'bg-blue-50 border-blue-200 shadow-sm' 
                    : 'bg-[var(--bg-primary)] border-[var(--border-light)] hover:border-[var(--border-medium)]'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    cert.level === 'Foundation' ? 'bg-emerald-100 text-emerald-600' :
                    cert.level === 'Professional' ? 'bg-blue-100 text-blue-600' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                    {idx + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className={`font-medium text-sm mb-1 ${activeCert.id === cert.id ? 'text-blue-700' : 'text-[var(--text-primary)]'}`}>
                      {cert.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-[var(--text-tertiary)]">
                      <span>{cert.level}</span>
                      <span>•</span>
                      <span>{cert.duration}</span>
                    </div>
                  </div>
                  {cert.id === 'crm-foundation' && (
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                  )}
                </div>
              </button>
            ))}

            <div className="p-6 bg-gradient-to-br from-[var(--color-primary-600)] to-[var(--color-secondary-600)] rounded-2xl text-white mt-8">
              <Award className="w-10 h-10 mb-4 opacity-90" />
              <h4 className="font-bold text-lg mb-2">Earn Your Badge</h4>
              <p className="text-sm text-white/80 mb-4">
                Complete all three levels to become a Certified CRM Master and unlock exclusive career opportunities.
              </p>
              <div className="flex items-center gap-2 text-xs font-medium">
                <Bookmark className="w-4 h-4" />
                <span>Industry-recognized credential</span>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Lesson Player Modal */}
      <AnimatePresence>
        {selectedLesson && (
          <LessonPlayer 
            lesson={selectedLesson} 
            onClose={() => setSelectedLesson(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}