"use client";

import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play, Clock, CheckCircle2, ChevronDown, ChevronUp, Search, Filter,
  BookOpen, Star, Users, ArrowRight, Pause, Volume2, VolumeX, Maximize,
  Settings, Download, FileText, MessageSquare, Check, X, Menu,
  Code2, Terminal, FileJson, MoreHorizontal, Bookmark, Share2, ThumbsUp,
  LayoutList, Grid, Zap, Shield, Globe, Github, ExternalLink
} from 'lucide-react';

// --- Types ---

type Difficulty = 'beginner' | 'intermediate' | 'advanced';

interface TutorialStep {
  id: number;
  title: string;
  description: string;
  timestamp: string; // MM:SS
  completed?: boolean;
}

interface Resource {
  name: string;
  type: 'pdf' | 'code' | 'link' | 'template';
  url: string;
  size?: string;
}

interface Instructor {
  name: string;
  role: string;
  avatar: string;
}

interface VideoTutorial {
  id: string;
  title: string;
  description: string;
  duration: string; // MM:SS or HH:MM:SS
  thumbnail: string;
  videoUrl: string; // Placeholder
  category: string;
  difficulty: Difficulty;
  steps: TutorialStep[];
  resources: Resource[];
  instructor: Instructor;
  rating: number;
  students: number;
  tags: string[];
  publishedAt: string;
}

interface Category {
  id: string;
  name: string;
  count: number;
  icon: React.ElementType;
}

// --- Mock Data (Overloaded) ---

const categories: Category[] = [
  { id: 'all', name: 'All Tutorials', count: 124, icon: LayoutList },
  { id: 'getting-started', name: 'Getting Started', count: 12, icon: Play },
  { id: 'property-setup', name: 'Property Setup', count: 18, icon: BookOpen },
  { id: 'channel-management', name: 'Channel Mgmt', count: 15, icon: Globe },
  { id: 'bookings', name: 'Reservations', count: 22, icon: CheckCircle2 },
  { id: 'guest-comm', name: 'Guest Comm', count: 14, icon: MessageSquare },
  { id: 'pricing', name: 'Revenue & Pricing', count: 16, icon: Star },
  { id: 'automation', name: 'Automation', count: 20, icon: Zap },
  { id: 'api', name: 'API & Developers', count: 11, icon: Code2 },
];

const tutorialsData: VideoTutorial[] = [
  {
    id: 't1',
    title: 'Complete Property Onboarding Masterclass',
    description: 'The definitive guide to configuring your first luxury listing. We cover everything from geolocation tagging to professional photo upload strategies that increase conversion by 40%.',
    duration: '45:20',
    thumbnail: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=675&fit=crop',
    videoUrl: '#',
    category: 'getting-started',
    difficulty: 'beginner',
    instructor: { name: 'Sarah Mitchell', role: 'Head of Product Education', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face' },
    rating: 4.9,
    students: 15420,
    tags: ['Setup', 'Listings', 'Optimization'],
    publishedAt: '2 weeks ago',
    steps: [
      { id: 1, title: 'Account Verification', description: 'Verifying your identity and business credentials.', timestamp: '00:00' },
      { id: 2, title: 'Geolocation & Map Pinning', description: 'Precise location tagging for local SEO.', timestamp: '04:30' },
      { id: 3, title: 'High-Res Media Uploads', description: 'Bulk uploading and AI-assisted photo sorting.', timestamp: '12:15' },
      { id: 4, title: 'Amenity Configuration', description: 'Selecting amenities that filter high-intent guests.', timestamp: '22:00' },
      { id: 5, title: 'House Rules & Legal', description: 'Setting cancellation policies and house rules.', timestamp: '35:10' },
    ],
    resources: [
      { name: 'Onboarding Checklist.pdf', type: 'pdf', size: '2.4 MB', url: '#' },
      { name: 'Photo Specs Template.zip', type: 'template', size: '15 MB', url: '#' },
      { name: 'Legal Compliance Guide', type: 'link', url: '#' }
    ]
  },
  {
    id: 't2',
    title: 'API Integration: Webhooks Deep Dive',
    description: 'For developers. Learn how to handle real-time booking events, sync calendars bidirectionally, and secure your endpoints using HMAC signatures.',
    duration: '32:15',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=675&fit=crop',
    videoUrl: '#',
    category: 'api',
    difficulty: 'advanced',
    instructor: { name: 'David Chen', role: 'Lead API Architect', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
    rating: 4.8,
    students: 3420,
    tags: ['Developers', 'Webhooks', 'JSON'],
    publishedAt: '1 month ago',
    steps: [
      { id: 1, title: 'Endpoint Configuration', description: 'Setting up your listener URL in the dashboard.', timestamp: '00:00' },
      { id: 2, title: 'Payload Structure', description: 'Understanding the JSON schema for booking events.', timestamp: '08:45' },
      { id: 3, title: 'Security & HMAC', description: 'Verifying request authenticity.', timestamp: '18:20' },
      { id: 4, title: 'Retry Logic', description: 'Handling failures and idempotency keys.', timestamp: '26:10' },
    ],
    resources: [
      { name: 'Webhook Schema.json', type: 'code', url: '#' },
      { name: 'Postman Collection', type: 'link', url: '#' }
    ]
  },
  {
    id: 't3',
    title: 'Dynamic Pricing: AI Revenue Optimization',
    description: 'Stop guessing your prices. Learn how our AI analyzes local demand, events, and competitor rates to adjust your pricing automatically every 15 minutes.',
    duration: '28:45',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop',
    videoUrl: '#',
    category: 'pricing',
    difficulty: 'intermediate',
    instructor: { name: 'Elena Rodriguez', role: 'Revenue Strategist', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face' },
    rating: 4.9,
    students: 8900,
    tags: ['Money', 'AI', 'Strategy'],
    publishedAt: '3 days ago',
    steps: [
      { id: 1, title: 'Baseline Setup', description: 'Setting your minimum and maximum rate floors.', timestamp: '00:00' },
      { id: 2, title: 'Competitor Parity', description: 'Linking competitor listings for price matching.', timestamp: '09:15' },
      { id: 3, title: 'Event Triggers', description: 'Boosting rates for local festivals automatically.', timestamp: '18:30' },
    ],
    resources: [
      { name: 'Pricing Strategy Workbook.pdf', type: 'pdf', size: '4.1 MB', url: '#' }
    ]
  },
  {
    id: 't4',
    title: 'Automated Guest Messaging Flows',
    description: 'Create the perfect guest journey with zero manual effort. From booking confirmation to check-out instructions and review requests.',
    duration: '19:30',
    thumbnail: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=1200&h=675&fit=crop',
    videoUrl: '#',
    category: 'guest-comm',
    difficulty: 'intermediate',
    instructor: { name: 'Marcus Johnson', role: 'Customer Success', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
    rating: 4.7,
    students: 11200,
    tags: ['Automation', 'Communication', 'Support'],
    publishedAt: '2 months ago',
    steps: [
      { id: 1, title: 'Template Library', description: 'Using pre-built templates vs custom HTML.', timestamp: '00:00' },
      { id: 2, title: 'Trigger Logic', description: 'Time-based vs Event-based triggers.', timestamp: '07:20' },
      { id: 3, title: 'Personalization Tokens', description: 'Using {GuestName} and {DoorCode} variables.', timestamp: '14:50' },
    ],
    resources: [
      { name: 'Message Templates.zip', type: 'template', url: '#' }
    ]
  },
  {
    id: 't5',
    title: 'Bulk Operations: Managing 100+ Properties',
    description: 'Efficiency at scale. Master the CSV import tools, bulk calendar updates, and template cloning for large portfolios.',
    duration: '41:10',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop',
    videoUrl: '#',
    category: 'property-setup',
    difficulty: 'advanced',
    instructor: { name: 'Jennifer Walsh', role: 'Enterprise Solutions', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face' },
    rating: 4.8,
    students: 6750,
    tags: ['Scale', 'Enterprise', 'CSV'],
    publishedAt: '1 week ago',
    steps: [
      { id: 1, title: 'CSV Formatting', description: 'Strict data validation rules for bulk uploads.', timestamp: '00:00' },
      { id: 2, title: 'Image URL Imports', description: 'Mapping external image URLs to listings.', timestamp: '15:30' },
      { id: 3, title: 'Template Cloning', description: 'Copying settings from a "Master" property.', timestamp: '28:45' },
    ],
    resources: [
      { name: 'CSV Import Templates.zip', type: 'template', url: '#' },
      { name: 'Validation Script.py', type: 'code', url: '#' }
    ]
  },
  {
    id: 't6',
    title: 'Advanced Analytics & Reporting',
    description: 'Move beyond basic occupancy rates. Learn to interpret RevPAR, ADR, and guest satisfaction trends to make data-driven decisions.',
    duration: '35:00',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop',
    videoUrl: '#',
    category: 'automation',
    difficulty: 'intermediate',
    instructor: { name: 'Sarah Mitchell', role: 'Head of Product Education', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face' },
    rating: 4.9,
    students: 9200,
    tags: ['Data', 'Reports', 'BI'],
    publishedAt: '3 weeks ago',
    steps: [
      { id: 1, title: 'Dashboard Customization', description: 'Building your personal KPI view.', timestamp: '00:00' },
      { id: 2, title: 'Exporting Raw Data', description: 'Connecting to Tableau or PowerBI.', timestamp: '12:10' },
      { id: 3, title: 'Forecasting', description: 'Using predictive analytics for next quarter.', timestamp: '24:30' },
    ],
    resources: [
      { name: 'Analytics Glossary.pdf', type: 'pdf', size: '1.2 MB', url: '#' }
    ]
  }
];

// --- Components ---

const DifficultyBadge = ({ level }: { level: Difficulty }) => {
  const colors = {
    beginner: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    intermediate: 'bg-amber-100 text-amber-700 border-amber-200',
    advanced: 'bg-rose-100 text-rose-700 border-rose-200',
  };
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-medium border ${colors[level]}`}>
      {level.charAt(0).toUpperCase() + level.slice(1)}
    </span>
  );
};

// Custom Video Player Component
const VideoPlayer = ({ tutorial, onClose }: { tutorial: VideoTutorial; onClose: () => void }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const [activeTab, setActiveTab] = useState<'chapters' | 'resources' | 'community'>('chapters');
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  // Simulate video playback
  useEffect(() => {
    if (isPlaying) {
      progressInterval.current = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
      }, 100);
    } else if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }
    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, [isPlaying]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed inset-0 z-50 bg-white flex flex-col lg:flex-row overflow-hidden"
    >
      {/* Main Video Area */}
      <div className="flex-1 flex flex-col relative bg-gray-900">
        {/* Top Bar */}
        <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between z-20 bg-gradient-to-b from-black/80 to-transparent">
          <button onClick={onClose} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
            <ArrowRight className="w-5 h-5 rotate-180" />
            <span className="font-medium">Back to Library</span>
          </button>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-white/10 text-white/80"><Share2 className="w-5 h-5" /></button>
            <button className="p-2 rounded-full hover:bg-white/10 text-white/80"><Bookmark className="w-5 h-5" /></button>
            <button className="p-2 rounded-full hover:bg-white/10 text-white/80"><MoreHorizontal className="w-5 h-5" /></button>
          </div>
        </div>

        {/* Video Canvas (Simulated) */}
        <div className="flex-1 relative flex items-center justify-center group cursor-pointer" onClick={togglePlay}>
          <img src={tutorial.thumbnail} alt={tutorial.title} className="absolute inset-0 w-full h-full object-cover opacity-40" />
          
          {/* Play Button Overlay */}
          <AnimatePresence>
            {!isPlaying && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative z-10 w-20 h-20 bg-[var(--color-primary-600)] rounded-full flex items-center justify-center shadow-2xl shadow-[var(--color-primary-600)]/40 group-hover:scale-110 transition-transform"
              >
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Controls Bar */}
        <div className="bg-gray-900/90 backdrop-blur border-t border-gray-800 p-4 z-20">
          {/* Progress Bar */}
          <div className="group h-1.5 bg-gray-700 rounded-full cursor-pointer mb-4 relative">
            <div 
              className="absolute top-0 left-0 h-full bg-[var(--color-primary-500)] rounded-full relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={togglePlay} className="text-white hover:text-[var(--color-primary-400)] transition-colors">
                {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current" />}
              </button>
              
              <div className="flex items-center gap-2 group/volume">
                <button onClick={toggleMute} className="text-white hover:text-[var(--color-primary-400)]">
                  {isMuted || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                <div className="w-0 overflow-hidden group-hover/volume:w-24 transition-all duration-300">
                  <input 
                    type="range" 
                    min="0" max="100" 
                    value={isMuted ? 0 : volume} 
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>

              <span className="text-sm text-gray-400 font-mono">
                {Math.floor((progress / 100) * 2700 / 60)}:{String(Math.floor((progress / 100) * 2700 % 60)).padStart(2, '0')} / {tutorial.duration}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <button className="text-sm font-medium text-white bg-[var(--color-primary-600)]/20 px-3 py-1 rounded border border-[var(--color-primary-500)]/30 hover:bg-[var(--color-primary-600)]/30 transition-colors">
                1x
              </button>
              <button className="text-white hover:text-[var(--color-primary-400)]"><Settings className="w-5 h-5" /></button>
              <button className="text-white hover:text-[var(--color-primary-400)]"><Maximize className="w-5 h-5" /></button>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Info */}
      <div className="w-full lg:w-[400px] bg-white border-l border-gray-200 flex flex-col h-[40vh] lg:h-auto">
        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          {['chapters', 'resources', 'community'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`flex-1 py-4 text-sm font-medium capitalize transition-colors relative ${
                activeTab === tab ? 'text-[var(--color-primary-600)]' : 'text-[var(--color-secondary-500)] hover:text-[var(--color-secondary-700)]'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-primary-600)]" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          {activeTab === 'chapters' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{tutorial.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <span className="text-[var(--color-primary-600)]">{tutorial.instructor.name}</span>
                  <span>•</span>
                  <span>{tutorial.students.toLocaleString()} views</span>
                </div>
              </div>
              
              <div className="space-y-2">
                {tutorial.steps.map((step, idx) => (
                  <div 
                    key={step.id} 
                    className="group flex gap-4 p-3 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-12 text-xs font-mono text-gray-400 pt-1">{step.timestamp}</div>
                    <div className="flex-1">
                      <h4 className={`text-sm font-medium ${idx === 0 ? 'text-[var(--color-primary-600)]' : 'text-[var(--color-secondary-700)]'}`}>
                        {idx + 1}. {step.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">{step.description}</p>
                    </div>
                    {idx === 0 && <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary-600)] mt-2" />}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="space-y-4">
              <p className="text-sm text-gray-500 mb-4">Downloadable materials for this tutorial.</p>
              {tutorial.resources.map((res, idx) => (
                <a 
                  key={idx} 
                  href={res.url} 
                  className="flex items-center gap-3 p-4 rounded-xl bg-[var(--color-secondary-200)] border border-[var(--color-secondary-200)] hover:border-[var(--color-primary-300)] hover:bg-blue-50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-secondary-200)] flex items-center justify-center group-hover:bg-[var(--color-primary-100)] group-hover:text-[var(--color-primary-600)] transition-colors text-[var(--color-secondary-600)]">
                    {res.type === 'pdf' && <FileText className="w-5 h-5" />}
                    {res.type === 'code' && <Code2 className="w-5 h-5" />}
                    {res.type === 'template' && <Download className="w-5 h-5" />}
                    {res.type === 'link' && <ExternalLink className="w-5 h-5" />}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-[var(--color-secondary-800)]">{res.name}</h4>
                    {res.size && <span className="text-xs text-[var(--color-secondary-500)]">{res.size}</span>}
                  </div>
                  <Download className="w-4 h-4 text-gray-400 group-hover:text-[var(--color-primary-600)]" />
                </a>
              ))}
            </div>
          )}

          {activeTab === 'community' && (
            <div className="text-center py-10">
              <MessageSquare className="w-12 h-12 text-[var(--color-secondary-300)] mx-auto mb-3" />
              <h3 className="text-gray-700 font-medium">Discussion Forum</h3>
              <p className="text-sm text-gray-500 mt-1">Ask questions and share tips with other learners.</p>
              <button className="mt-4 px-4 py-2 bg-[var(--color-primary-600)] text-white text-sm font-medium rounded-lg hover:bg-[var(--color-primary-700)] transition-colors">
                View Comments (12)
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function VideoTutorialsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTutorial, setActiveTutorial] = useState<VideoTutorial | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredTutorials = tutorialsData.filter(t => {
    const matchesCategory = activeCategory === 'all' || t.category === activeCategory;
    const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          t.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen  text-[var(--color-secondary-800)] font-sans ">
      {/* selection:bg-blue-200 */}
      <Head>
        <title>Video Academy | BNB Management</title>
        <meta name="description" content="Master BNB Management with step-by-step video tutorials." />
      </Head>

     

      {/* --- Main Content --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 pt-20">
        
        {/* Hero / Featured */}
        {!activeTutorial && (
          <section className="mb-12">
            <div className="relative rounded-3xl overflow-hidden bg-white border border-[var(--color-secondary-200)] shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-300)]/50 to-[var(--color-secondary-300)]/50 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-end md:items-center gap-8 p-8 md:p-12">
                <div className="flex-1 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary-100)] border border-[var(--color-primary-200)] text-[var(--color-primary-700)] text-xs font-bold uppercase tracking-wider">
                    <Zap className="w-3 h-3" /> Featured Series
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Master the Art of <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-600)] to-[var(--color-secondary-600)]">
                      Hospitality Tech
                    </span>
                  </h1>
                  <p className="text-gray-600 max-w-xl text-lg">
                    New to BNB property management solution? Start with our core certification path designed to take you from zero to automation hero in 2 weeks.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <button 
                      onClick={() => setActiveTutorial(tutorialsData[0])}
                      className="px-6 py-3 bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] text-white rounded-xl font-semibold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/25"
                    >
                      <Play className="w-5 h-5 fill-white" /> Start First Lesson
                    </button>
                    <button className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 rounded-xl font-semibold flex items-center gap-2 transition-all border border-gray-300">
                      <BookOpen className="w-5 h-5" /> View Syllabus
                    </button>
                  </div>
                </div>
                
                {/* Stats Cards */}
                <div className="hidden lg:grid grid-cols-2 gap-3 w-80 flex-shrink-0">
                  <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
                    <div className="text-2xl font-bold text-gray-900">120+</div>
                    <div className="text-xs text-gray-500">Video Lessons</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
                    <div className="text-2xl font-bold text-gray-900">24h</div>
                    <div className="text-xs text-gray-500">Total Content</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
                    <div className="text-2xl font-bold text-gray-900">15k</div>
                    <div className="text-xs text-gray-500">Active Learners</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
                    <div className="text-2xl font-bold text-gray-900">4.9</div>
                    <div className="text-xs text-gray-500">Avg. Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* --- Layout: Sidebar + Grid --- */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Navigation */}
          <aside className="lg:w-64 flex-shrink-0 space-y-8">
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 px-2">Categories</h3>
              <div className="space-y-1">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeCategory === cat.id 
                        ? 'bg-[var(--color-primary-100)] text-[var(--color-primary-700)]' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <cat.icon className={`w-4 h-4 ${activeCategory === cat.id ? 'text-[var(--color-primary-600)]' : 'text-gray-400'}`} />
                      {cat.name}
                    </div>
                    <span className={`text-xs ${activeCategory === cat.id ? 'text-[var(--color-primary-600)]/60' : 'text-gray-400'}`}>
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200">
              <div className="flex items-center gap-2 mb-2">
                <Terminal className="w-5 h-5 text-[var(--color-secondary-600)]" />
                <h4 className="font-bold text-gray-900 text-sm">Dev Corner</h4>
              </div>
              <p className="text-xs text-gray-600 mb-3">Explore our API documentation and webhook guides.</p>
              <button className="w-full py-2 bg-[var(--color-primary-100)] hover:bg-[var(--color-secondary-200)] text-[var(--color-secondary-700)] text-xs font-semibold rounded-lg transition-colors border border-indigo-200">
                View API Docs
              </button>
            </div>
          </aside>

          {/* Main Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                {activeCategory === 'all' ? 'All Tutorials' : categories.find(c => c.id === activeCategory)?.name}
                <span className="ml-2 text-sm font-normal text-gray-500">({filteredTutorials.length} results)</span>
              </h2>
              
              <div className="flex items-center gap-2 bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-gray-100 text-gray-900 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-gray-100 text-gray-900 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <LayoutList className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Grid Content */}
            <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'} gap-6`}>
              {filteredTutorials.map((tutorial) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -4 }}
                  key={tutorial.id}
                  className={`group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-[var(--color-primary-300)] hover:shadow-xl hover:shadow-gray-200/50 transition-all flex ${viewMode === 'list' ? 'flex-row' : 'flex-col'}`}
                >
                  {/* Thumbnail */}
                  <div 
                    className={`relative overflow-hidden ${viewMode === 'list' ? 'w-64 h-full' : 'w-full aspect-video'} flex-shrink-0 cursor-pointer`}
                    onClick={() => setActiveTutorial(tutorial)}
                  >
                    <img 
                      src={tutorial.thumbnail} 
                      alt={tutorial.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
                    
                    {/* Play Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center border border-white shadow-lg">
                        <Play className="w-5 h-5 text-[var(--color-primary-600)] fill-[var(--color-primary-600)]" />
                      </div>
                    </div>

                    <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 backdrop-blur rounded text-xs font-medium text-white">
                      {tutorial.duration}
                    </div>
                    <div className="absolute top-2 left-2">
                      <DifficultyBadge level={tutorial.difficulty} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-[var(--color-primary-600)] transition-colors cursor-pointer" onClick={() => setActiveTutorial(tutorial)}>
                        {tutorial.title}
                      </h3>
                    </div>
                    
                    <p className="text-sm text-gray-600 line-clamp-2 mb-4 flex-1">
                      {tutorial.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                      <div className="flex items-center gap-2">
                        <img src={tutorial.instructor.avatar} alt={tutorial.instructor.name} className="w-6 h-6 rounded-full border border-gray-200" />
                        <span className="text-xs text-gray-600 font-medium">{tutorial.instructor.name}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {tutorial.students > 1000 ? (tutorial.students / 1000).toFixed(1) + 'k' : tutorial.students}</span>
                        <span className="flex items-center gap-1 text-amber-500"><Star className="w-3 h-3 fill-current" /> {tutorial.rating}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* --- Immersive Player Overlay --- */}
      <AnimatePresence>
        {activeTutorial && (
          <VideoPlayer 
            tutorial={activeTutorial} 
            onClose={() => setActiveTutorial(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}























// "use client";

// import React, { useState, useRef, useEffect } from 'react';
// import Head from 'next/head';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   Play, Clock, CheckCircle2, ChevronDown, ChevronUp, Search, Filter,
//   BookOpen, Star, Users, ArrowRight, Pause, Volume2, VolumeX, Maximize,
//   Settings, Download, FileText, MessageSquare, Check, X, Menu,
//   Code2, Terminal, FileJson, MoreHorizontal, Bookmark, Share2, ThumbsUp,
//   LayoutList, Grid, Zap, Shield, Globe, Github, ExternalLink
// } from 'lucide-react';

// // --- Types ---

// type Difficulty = 'beginner' | 'intermediate' | 'advanced';

// interface TutorialStep {
//   id: number;
//   title: string;
//   description: string;
//   timestamp: string; // MM:SS
//   completed?: boolean;
// }

// interface Resource {
//   name: string;
//   type: 'pdf' | 'code' | 'link' | 'template';
//   url: string;
//   size?: string;
// }

// interface Instructor {
//   name: string;
//   role: string;
//   avatar: string;
// }

// interface VideoTutorial {
//   id: string;
//   title: string;
//   description: string;
//   duration: string; // MM:SS or HH:MM:SS
//   thumbnail: string;
//   videoUrl: string; // Placeholder
//   category: string;
//   difficulty: Difficulty;
//   steps: TutorialStep[];
//   resources: Resource[];
//   instructor: Instructor;
//   rating: number;
//   students: number;
//   tags: string[];
//   publishedAt: string;
// }

// interface Category {
//   id: string;
//   name: string;
//   count: number;
//   icon: React.ElementType;
// }

// // --- Mock Data (Overloaded) ---

// const categories: Category[] = [
//   { id: 'all', name: 'All Tutorials', count: 124, icon: LayoutList },
//   { id: 'getting-started', name: 'Getting Started', count: 12, icon: Play },
//   { id: 'property-setup', name: 'Property Setup', count: 18, icon: BookOpen },
//   { id: 'channel-management', name: 'Channel Mgmt', count: 15, icon: Globe },
//   { id: 'bookings', name: 'Reservations', count: 22, icon: CheckCircle2 },
//   { id: 'guest-comm', name: 'Guest Comm', count: 14, icon: MessageSquare },
//   { id: 'pricing', name: 'Revenue & Pricing', count: 16, icon: Star },
//   { id: 'automation', name: 'Automation', count: 20, icon: Zap },
//   { id: 'api', name: 'API & Developers', count: 11, icon: Code2 },
// ];

// const tutorialsData: VideoTutorial[] = [
//   {
//     id: 't1',
//     title: 'Complete Property Onboarding Masterclass',
//     description: 'The definitive guide to configuring your first luxury listing. We cover everything from geolocation tagging to professional photo upload strategies that increase conversion by 40%.',
//     duration: '45:20',
//     thumbnail: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=675&fit=crop',
//     videoUrl: '#',
//     category: 'getting-started',
//     difficulty: 'beginner',
//     instructor: { name: 'Sarah Mitchell', role: 'Head of Product Education', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face' },
//     rating: 4.9,
//     students: 15420,
//     tags: ['Setup', 'Listings', 'Optimization'],
//     publishedAt: '2 weeks ago',
//     steps: [
//       { id: 1, title: 'Account Verification', description: 'Verifying your identity and business credentials.', timestamp: '00:00' },
//       { id: 2, title: 'Geolocation & Map Pinning', description: 'Precise location tagging for local SEO.', timestamp: '04:30' },
//       { id: 3, title: 'High-Res Media Uploads', description: 'Bulk uploading and AI-assisted photo sorting.', timestamp: '12:15' },
//       { id: 4, title: 'Amenity Configuration', description: 'Selecting amenities that filter high-intent guests.', timestamp: '22:00' },
//       { id: 5, title: 'House Rules & Legal', description: 'Setting cancellation policies and house rules.', timestamp: '35:10' },
//     ],
//     resources: [
//       { name: 'Onboarding Checklist.pdf', type: 'pdf', size: '2.4 MB', url: '#' },
//       { name: 'Photo Specs Template.zip', type: 'template', size: '15 MB', url: '#' },
//       { name: 'Legal Compliance Guide', type: 'link', url: '#' }
//     ]
//   },
//   {
//     id: 't2',
//     title: 'API Integration: Webhooks Deep Dive',
//     description: 'For developers. Learn how to handle real-time booking events, sync calendars bidirectionally, and secure your endpoints using HMAC signatures.',
//     duration: '32:15',
//     thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=675&fit=crop',
//     videoUrl: '#',
//     category: 'api',
//     difficulty: 'advanced',
//     instructor: { name: 'David Chen', role: 'Lead API Architect', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
//     rating: 4.8,
//     students: 3420,
//     tags: ['Developers', 'Webhooks', 'JSON'],
//     publishedAt: '1 month ago',
//     steps: [
//       { id: 1, title: 'Endpoint Configuration', description: 'Setting up your listener URL in the dashboard.', timestamp: '00:00' },
//       { id: 2, title: 'Payload Structure', description: 'Understanding the JSON schema for booking events.', timestamp: '08:45' },
//       { id: 3, title: 'Security & HMAC', description: 'Verifying request authenticity.', timestamp: '18:20' },
//       { id: 4, title: 'Retry Logic', description: 'Handling failures and idempotency keys.', timestamp: '26:10' },
//     ],
//     resources: [
//       { name: 'Webhook Schema.json', type: 'code', url: '#' },
//       { name: 'Postman Collection', type: 'link', url: '#' }
//     ]
//   },
//   {
//     id: 't3',
//     title: 'Dynamic Pricing: AI Revenue Optimization',
//     description: 'Stop guessing your prices. Learn how our AI analyzes local demand, events, and competitor rates to adjust your pricing automatically every 15 minutes.',
//     duration: '28:45',
//     thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop',
//     videoUrl: '#',
//     category: 'pricing',
//     difficulty: 'intermediate',
//     instructor: { name: 'Elena Rodriguez', role: 'Revenue Strategist', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face' },
//     rating: 4.9,
//     students: 8900,
//     tags: ['Money', 'AI', 'Strategy'],
//     publishedAt: '3 days ago',
//     steps: [
//       { id: 1, title: 'Baseline Setup', description: 'Setting your minimum and maximum rate floors.', timestamp: '00:00' },
//       { id: 2, title: 'Competitor Parity', description: 'Linking competitor listings for price matching.', timestamp: '09:15' },
//       { id: 3, title: 'Event Triggers', description: 'Boosting rates for local festivals automatically.', timestamp: '18:30' },
//     ],
//     resources: [
//       { name: 'Pricing Strategy Workbook.pdf', type: 'pdf', size: '4.1 MB', url: '#' }
//     ]
//   },
//   {
//     id: 't4',
//     title: 'Automated Guest Messaging Flows',
//     description: 'Create the perfect guest journey with zero manual effort. From booking confirmation to check-out instructions and review requests.',
//     duration: '19:30',
//     thumbnail: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=1200&h=675&fit=crop',
//     videoUrl: '#',
//     category: 'guest-comm',
//     difficulty: 'intermediate',
//     instructor: { name: 'Marcus Johnson', role: 'Customer Success', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
//     rating: 4.7,
//     students: 11200,
//     tags: ['Automation', 'Communication', 'Support'],
//     publishedAt: '2 months ago',
//     steps: [
//       { id: 1, title: 'Template Library', description: 'Using pre-built templates vs custom HTML.', timestamp: '00:00' },
//       { id: 2, title: 'Trigger Logic', description: 'Time-based vs Event-based triggers.', timestamp: '07:20' },
//       { id: 3, title: 'Personalization Tokens', description: 'Using {GuestName} and {DoorCode} variables.', timestamp: '14:50' },
//     ],
//     resources: [
//       { name: 'Message Templates.zip', type: 'template', url: '#' }
//     ]
//   },
//   {
//     id: 't5',
//     title: 'Bulk Operations: Managing 100+ Properties',
//     description: 'Efficiency at scale. Master the CSV import tools, bulk calendar updates, and template cloning for large portfolios.',
//     duration: '41:10',
//     thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop',
//     videoUrl: '#',
//     category: 'property-setup',
//     difficulty: 'advanced',
//     instructor: { name: 'Jennifer Walsh', role: 'Enterprise Solutions', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face' },
//     rating: 4.8,
//     students: 6750,
//     tags: ['Scale', 'Enterprise', 'CSV'],
//     publishedAt: '1 week ago',
//     steps: [
//       { id: 1, title: 'CSV Formatting', description: 'Strict data validation rules for bulk uploads.', timestamp: '00:00' },
//       { id: 2, title: 'Image URL Imports', description: 'Mapping external image URLs to listings.', timestamp: '15:30' },
//       { id: 3, title: 'Template Cloning', description: 'Copying settings from a "Master" property.', timestamp: '28:45' },
//     ],
//     resources: [
//       { name: 'CSV Import Templates.zip', type: 'template', url: '#' },
//       { name: 'Validation Script.py', type: 'code', url: '#' }
//     ]
//   },
//   {
//     id: 't6',
//     title: 'Advanced Analytics & Reporting',
//     description: 'Move beyond basic occupancy rates. Learn to interpret RevPAR, ADR, and guest satisfaction trends to make data-driven decisions.',
//     duration: '35:00',
//     thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop',
//     videoUrl: '#',
//     category: 'automation',
//     difficulty: 'intermediate',
//     instructor: { name: 'Sarah Mitchell', role: 'Head of Product Education', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face' },
//     rating: 4.9,
//     students: 9200,
//     tags: ['Data', 'Reports', 'BI'],
//     publishedAt: '3 weeks ago',
//     steps: [
//       { id: 1, title: 'Dashboard Customization', description: 'Building your personal KPI view.', timestamp: '00:00' },
//       { id: 2, title: 'Exporting Raw Data', description: 'Connecting to Tableau or PowerBI.', timestamp: '12:10' },
//       { id: 3, title: 'Forecasting', description: 'Using predictive analytics for next quarter.', timestamp: '24:30' },
//     ],
//     resources: [
//       { name: 'Analytics Glossary.pdf', type: 'pdf', size: '1.2 MB', url: '#' }
//     ]
//   }
// ];

// // --- Components ---

// const DifficultyBadge = ({ level }: { level: Difficulty }) => {
//   const colors = {
//     beginner: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
//     intermediate: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
//     advanced: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
//   };
//   return (
//     <span className={`px-2 py-0.5 rounded text-xs font-medium border ${colors[level]}`}>
//       {level.charAt(0).toUpperCase() + level.slice(1)}
//     </span>
//   );
// };

// // Custom Video Player Component
// const VideoPlayer = ({ tutorial, onClose }: { tutorial: VideoTutorial; onClose: () => void }) => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [volume, setVolume] = useState(80);
//   const [isMuted, setIsMuted] = useState(false);
//   const [activeTab, setActiveTab] = useState<'chapters' | 'resources' | 'community'>('chapters');
//   const progressInterval = useRef<NodeJS.Timeout | null>(null);

//   // Simulate video playback
//   useEffect(() => {
//     if (isPlaying) {
//       progressInterval.current = setInterval(() => {
//         setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
//       }, 100);
//     } else if (progressInterval.current) {
//       clearInterval(progressInterval.current);
//     }
//     return () => {
//       if (progressInterval.current) clearInterval(progressInterval.current);
//     };
//   }, [isPlaying]);

//   const togglePlay = () => setIsPlaying(!isPlaying);
//   const toggleMute = () => setIsMuted(!isMuted);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 20 }}
//       className="fixed inset-0 z-50 bg-slate-950 flex flex-col lg:flex-row overflow-hidden"
//     >
//       {/* Main Video Area */}
//       <div className="flex-1 flex flex-col relative bg-black">
//         {/* Top Bar */}
//         <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between z-20 bg-gradient-to-b from-black/80 to-transparent">
//           <button onClick={onClose} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
//             <ArrowRight className="w-5 h-5 rotate-180" />
//             <span className="font-medium">Back to Library</span>
//           </button>
//           <div className="flex items-center gap-4">
//             <button className="p-2 rounded-full hover:bg-white/10 text-white/80"><Share2 className="w-5 h-5" /></button>
//             <button className="p-2 rounded-full hover:bg-white/10 text-white/80"><Bookmark className="w-5 h-5" /></button>
//             <button className="p-2 rounded-full hover:bg-white/10 text-white/80"><MoreHorizontal className="w-5 h-5" /></button>
//           </div>
//         </div>

//         {/* Video Canvas (Simulated) */}
//         <div className="flex-1 relative flex items-center justify-center group cursor-pointer" onClick={togglePlay}>
//           <img src={tutorial.thumbnail} alt={tutorial.title} className="absolute inset-0 w-full h-full object-cover opacity-40" />
          
//           {/* Play Button Overlay */}
//           <AnimatePresence>
//             {!isPlaying && (
//               <motion.div
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.8, opacity: 0 }}
//                 className="relative z-10 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-600/40 group-hover:scale-110 transition-transform"
//               >
//                 <Play className="w-8 h-8 text-white fill-white ml-1" />
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* Controls Bar */}
//         <div className="bg-slate-900/90 backdrop-blur border-t border-slate-800 p-4 z-20">
//           {/* Progress Bar */}
//           <div className="group h-1.5 bg-slate-700 rounded-full cursor-pointer mb-4 relative">
//             <div 
//               className="absolute top-0 left-0 h-full bg-blue-500 rounded-full relative"
//               style={{ width: `${progress}%` }}
//             >
//               <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity" />
//             </div>
//           </div>

//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-4">
//               <button onClick={togglePlay} className="text-white hover:text-blue-400 transition-colors">
//                 {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current" />}
//               </button>
              
//               <div className="flex items-center gap-2 group/volume">
//                 <button onClick={toggleMute} className="text-white hover:text-blue-400">
//                   {isMuted || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
//                 </button>
//                 <div className="w-0 overflow-hidden group-hover/volume:w-24 transition-all duration-300">
//                   <input 
//                     type="range" 
//                     min="0" max="100" 
//                     value={isMuted ? 0 : volume} 
//                     onChange={(e) => setVolume(Number(e.target.value))}
//                     className="w-20 h-1 bg-slate-600 rounded-lg appearance-none cursor-pointer"
//                   />
//                 </div>
//               </div>

//               <span className="text-sm text-slate-400 font-mono">
//                 {Math.floor((progress / 100) * 2700 / 60)}:{String(Math.floor((progress / 100) * 2700 % 60)).padStart(2, '0')} / {tutorial.duration}
//               </span>
//             </div>

//             <div className="flex items-center gap-4">
//               <button className="text-sm font-medium text-white bg-blue-600/20 px-3 py-1 rounded border border-blue-500/30 hover:bg-blue-600/30 transition-colors">
//                 1x
//               </button>
//               <button className="text-white hover:text-blue-400"><Settings className="w-5 h-5" /></button>
//               <button className="text-white hover:text-blue-400"><Maximize className="w-5 h-5" /></button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Sidebar Info */}
//       <div className="w-full lg:w-[400px] bg-slate-900 border-l border-slate-800 flex flex-col h-[40vh] lg:h-auto">
//         {/* Tabs */}
//         <div className="flex border-b border-slate-800">
//           {['chapters', 'resources', 'community'].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab as any)}
//               className={`flex-1 py-4 text-sm font-medium capitalize transition-colors relative ${
//                 activeTab === tab ? 'text-blue-400' : 'text-slate-400 hover:text-slate-200'
//               }`}
//             >
//               {tab}
//               {activeTab === tab && (
//                 <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500" />
//               )}
//             </button>
//           ))}
//         </div>

//         {/* Tab Content */}
//         <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
//           {activeTab === 'chapters' && (
//             <div className="space-y-6">
//               <div>
//                 <h3 className="text-lg font-bold text-white mb-1">{tutorial.title}</h3>
//                 <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
//                   <span className="text-blue-400">{tutorial.instructor.name}</span>
//                   <span>•</span>
//                   <span>{tutorial.students.toLocaleString()} views</span>
//                 </div>
//               </div>
              
//               <div className="space-y-2">
//                 {tutorial.steps.map((step, idx) => (
//                   <div 
//                     key={step.id} 
//                     className="group flex gap-4 p-3 rounded-xl hover:bg-slate-800/50 transition-colors cursor-pointer"
//                   >
//                     <div className="flex-shrink-0 w-12 text-xs font-mono text-slate-500 pt-1">{step.timestamp}</div>
//                     <div className="flex-1">
//                       <h4 className={`text-sm font-medium ${idx === 0 ? 'text-blue-400' : 'text-slate-300'}`}>
//                         {idx + 1}. {step.title}
//                       </h4>
//                       <p className="text-xs text-slate-500 mt-1 line-clamp-2">{step.description}</p>
//                     </div>
//                     {idx === 0 && <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {activeTab === 'resources' && (
//             <div className="space-y-4">
//               <p className="text-sm text-slate-400 mb-4">Downloadable materials for this tutorial.</p>
//               {tutorial.resources.map((res, idx) => (
//                 <a 
//                   key={idx} 
//                   href={res.url} 
//                   className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 transition-all group"
//                 >
//                   <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center group-hover:bg-blue-600/20 group-hover:text-blue-400 transition-colors">
//                     {res.type === 'pdf' && <FileText className="w-5 h-5" />}
//                     {res.type === 'code' && <Code2 className="w-5 h-5" />}
//                     {res.type === 'template' && <Download className="w-5 h-5" />}
//                     {res.type === 'link' && <ExternalLink className="w-5 h-5" />}
//                   </div>
//                   <div className="flex-1">
//                     <h4 className="text-sm font-medium text-slate-200">{res.name}</h4>
//                     {res.size && <span className="text-xs text-slate-500">{res.size}</span>}
//                   </div>
//                   <Download className="w-4 h-4 text-slate-500 group-hover:text-blue-400" />
//                 </a>
//               ))}
//             </div>
//           )}

//           {activeTab === 'community' && (
//             <div className="text-center py-10">
//               <MessageSquare className="w-12 h-12 text-slate-600 mx-auto mb-3" />
//               <h3 className="text-slate-300 font-medium">Discussion Forum</h3>
//               <p className="text-sm text-slate-500 mt-1">Ask questions and share tips with other learners.</p>
//               <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
//                 View Comments (12)
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default function VideoTutorialsPage() {
//   const [activeCategory, setActiveCategory] = useState('all');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [activeTutorial, setActiveTutorial] = useState<VideoTutorial | null>(null);
//   const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

//   const filteredTutorials = tutorialsData.filter(t => {
//     const matchesCategory = activeCategory === 'all' || t.category === activeCategory;
//     const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
//                           t.description.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
//       <Head>
//         <title>Video Academy | StayPilot</title>
//         <meta name="description" content="Master StayPilot with step-by-step video tutorials." />
//       </Head>

//       {/* --- Header --- */}
//       <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center gap-3">
//               <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
//                 <Play className="w-4 h-4 text-white fill-white" />
//               </div>
//               <span className="font-bold text-white text-lg tracking-tight">StayPilot <span className="text-slate-500 font-normal">Academy</span></span>
//             </div>

//             <div className="hidden md:flex items-center gap-6">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
//                 <input 
//                   type="text" 
//                   placeholder="Search tutorials..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="bg-slate-900 border border-slate-800 rounded-full pl-10 pr-4 py-2 text-sm text-slate-200 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 w-64 transition-all"
//                 />
//               </div>
//               <div className="h-4 w-px bg-slate-800" />
//               <button className="text-sm font-medium text-slate-400 hover:text-white transition-colors">My Learning</button>
//               <button className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Instructors</button>
//               <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 overflow-hidden">
//                 <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" alt="User" />
//               </div>
//             </div>
            
//             <button className="md:hidden p-2 text-slate-400">
//               <Menu className="w-6 h-6" />
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* --- Main Content --- */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
//         {/* Hero / Featured */}
//         {!activeTutorial && (
//           <section className="mb-12">
//             <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40 mix-blend-overlay" />
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              
//               <div className="relative z-10 flex flex-col md:flex-row items-end md:items-center gap-8 p-8 md:p-12">
//                 <div className="flex-1 space-y-4">
//                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
//                     <Zap className="w-3 h-3" /> Featured Series
//                   </div>
//                   <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
//                     Master the Art of <br/>
//                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
//                       Hospitality Tech
//                     </span>
//                   </h1>
//                   <p className="text-slate-400 max-w-xl text-lg">
//                     New to StayPilot? Start with our core certification path designed to take you from zero to automation hero in 2 weeks.
//                   </p>
//                   <div className="flex flex-wrap gap-4 pt-2">
//                     <button 
//                       onClick={() => setActiveTutorial(tutorialsData[0])}
//                       className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/25"
//                     >
//                       <Play className="w-5 h-5 fill-white" /> Start First Lesson
//                     </button>
//                     <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold flex items-center gap-2 transition-all border border-slate-700">
//                       <BookOpen className="w-5 h-5" /> View Syllabus
//                     </button>
//                   </div>
//                 </div>
                
//                 {/* Stats Cards */}
//                 <div className="hidden lg:grid grid-cols-2 gap-3 w-80 flex-shrink-0">
//                   <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
//                     <div className="text-2xl font-bold text-white">120+</div>
//                     <div className="text-xs text-slate-400">Video Lessons</div>
//                   </div>
//                   <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
//                     <div className="text-2xl font-bold text-white">24h</div>
//                     <div className="text-xs text-slate-400">Total Content</div>
//                   </div>
//                   <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
//                     <div className="text-2xl font-bold text-white">15k</div>
//                     <div className="text-xs text-slate-400">Active Learners</div>
//                   </div>
//                   <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
//                     <div className="text-2xl font-bold text-white">4.9</div>
//                     <div className="text-xs text-slate-400">Avg. Rating</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         )}

//         {/* --- Layout: Sidebar + Grid --- */}
//         <div className="flex flex-col lg:flex-row gap-8">
          
//           {/* Sidebar Navigation */}
//           <aside className="lg:w-64 flex-shrink-0 space-y-8">
//             <div>
//               <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 px-2">Categories</h3>
//               <div className="space-y-1">
//                 {categories.map(cat => (
//                   <button
//                     key={cat.id}
//                     onClick={() => setActiveCategory(cat.id)}
//                     className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all ${
//                       activeCategory === cat.id 
//                         ? 'bg-blue-600/10 text-blue-400' 
//                         : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
//                     }`}
//                   >
//                     <div className="flex items-center gap-3">
//                       <cat.icon className={`w-4 h-4 ${activeCategory === cat.id ? 'text-blue-400' : 'text-slate-500'}`} />
//                       {cat.name}
//                     </div>
//                     <span className={`text-xs ${activeCategory === cat.id ? 'text-blue-400/60' : 'text-slate-600'}`}>
//                       {cat.count}
//                     </span>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20">
//               <div className="flex items-center gap-2 mb-2">
//                 <Terminal className="w-5 h-5 text-indigo-400" />
//                 <h4 className="font-bold text-white text-sm">Dev Corner</h4>
//               </div>
//               <p className="text-xs text-slate-400 mb-3">Explore our API documentation and webhook guides.</p>
//               <button className="w-full py-2 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 text-xs font-semibold rounded-lg transition-colors border border-indigo-500/30">
//                 View API Docs
//               </button>
//             </div>
//           </aside>

//           {/* Main Grid */}
//           <div className="flex-1">
//             {/* Toolbar */}
//             <div className="flex items-center justify-between mb-6">
//               <h2 className="text-xl font-bold text-white">
//                 {activeCategory === 'all' ? 'All Tutorials' : categories.find(c => c.id === activeCategory)?.name}
//                 <span className="ml-2 text-sm font-normal text-slate-500">({filteredTutorials.length} results)</span>
//               </h2>
              
//               <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-lg border border-slate-800">
//                 <button 
//                   onClick={() => setViewMode('grid')}
//                   className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
//                 >
//                   <Grid className="w-4 h-4" />
//                 </button>
//                 <button 
//                   onClick={() => setViewMode('list')}
//                   className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
//                 >
//                   <LayoutList className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>

//             {/* Grid Content */}
//             <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'} gap-6`}>
//               {filteredTutorials.map((tutorial) => (
//                 <motion.div
//                   layout
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   whileHover={{ y: -4 }}
//                   key={tutorial.id}
//                   className={`group bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-slate-700 hover:shadow-xl hover:shadow-black/20 transition-all flex ${viewMode === 'list' ? 'flex-row' : 'flex-col'}`}
//                 >
//                   {/* Thumbnail */}
//                   <div 
//                     className={`relative overflow-hidden ${viewMode === 'list' ? 'w-64 h-full' : 'w-full aspect-video'} flex-shrink-0 cursor-pointer`}
//                     onClick={() => setActiveTutorial(tutorial)}
//                   >
//                     <img 
//                       src={tutorial.thumbnail} 
//                       alt={tutorial.title} 
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                    
//                     {/* Play Overlay */}
//                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//                       <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
//                         <Play className="w-5 h-5 text-white fill-white" />
//                       </div>
//                     </div>

//                     <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 backdrop-blur rounded text-xs font-medium text-white">
//                       {tutorial.duration}
//                     </div>
//                     <div className="absolute top-2 left-2">
//                       <DifficultyBadge level={tutorial.difficulty} />
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="p-5 flex flex-col flex-1">
//                     <div className="flex items-start justify-between gap-2 mb-2">
//                       <h3 className="font-bold text-slate-100 leading-snug line-clamp-2 group-hover:text-blue-400 transition-colors cursor-pointer" onClick={() => setActiveTutorial(tutorial)}>
//                         {tutorial.title}
//                       </h3>
//                     </div>
                    
//                     <p className="text-sm text-slate-400 line-clamp-2 mb-4 flex-1">
//                       {tutorial.description}
//                     </p>

//                     <div className="flex items-center justify-between pt-4 border-t border-slate-800/50 mt-auto">
//                       <div className="flex items-center gap-2">
//                         <img src={tutorial.instructor.avatar} alt={tutorial.instructor.name} className="w-6 h-6 rounded-full border border-slate-700" />
//                         <span className="text-xs text-slate-400 font-medium">{tutorial.instructor.name}</span>
//                       </div>
//                       <div className="flex items-center gap-3 text-xs text-slate-500">
//                         <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {tutorial.students > 1000 ? (tutorial.students / 1000).toFixed(1) + 'k' : tutorial.students}</span>
//                         <span className="flex items-center gap-1 text-amber-400"><Star className="w-3 h-3 fill-current" /> {tutorial.rating}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* --- Immersive Player Overlay --- */}
//       <AnimatePresence>
//         {activeTutorial && (
//           <VideoPlayer 
//             tutorial={activeTutorial} 
//             onClose={() => setActiveTutorial(null)} 
//           />
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }