'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { 
  Search, 
  Plus, 
  Edit3, 
  Trash2, 
  CheckCircle, 
  AlertCircle, 
  FileText, 
  Layout, 
  Settings, 
  ChevronRight, 
  Globe, 
  Twitter, 
  Facebook, 
  Save, 
  X, 
  Upload, 
  Download, 
  MoreVertical, 
  Filter,
  BarChart3,
  Home,
  Users,
  Shield,
  Zap,
  Eye
} from 'lucide-react';

// Types
interface SEOEntry {
  id: string;
  pageName: string;
  slug: string;
  url: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  seoScore: number;
  status: 'published' | 'draft';
  lastModified: string;
  indexable: boolean;
}

interface Notification {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}

// Mock Data
const initialData: SEOEntry[] = [
  {
    id: '1',
    pageName: 'Home',
    slug: 'home',
    url: '/',
    metaTitle: 'EstateAI - AI-Powered Real Estate Management Platform',
    metaDescription: 'Transform your real estate business with EstateAI. Smart property management, automated workflows, and AI-driven insights for modern agents.',
    keywords: ['real estate', 'property management', 'AI', 'automation'],
    canonicalUrl: 'https://estateai.com',
    ogTitle: 'EstateAI - Revolutionize Your Real Estate Business',
    ogDescription: 'Join thousands of agents using AI to close deals faster.',
    ogImage: 'https://estateai.com/og-home.jpg',
    twitterTitle: 'EstateAI - AI Real Estate Platform',
    twitterDescription: 'Smart tools for modern real estate professionals.',
    twitterImage: 'https://estateai.com/twitter-home.jpg',
    seoScore: 92,
    status: 'published',
    lastModified: '2026-03-28',
    indexable: true
  },
  {
    id: '2',
    pageName: 'About Us',
    slug: 'about',
    url: '/about',
    metaTitle: 'About EstateAI | Our Mission & Team',
    metaDescription: 'Learn about EstateAI\'s mission to transform real estate through artificial intelligence. Meet our team of experts.',
    keywords: ['about', 'team', 'mission', 'real estate AI'],
    canonicalUrl: 'https://estateai.com/about',
    ogTitle: 'About EstateAI - Our Story',
    ogDescription: 'Discover how we\'re building the future of real estate.',
    ogImage: 'https://estateai.com/og-about.jpg',
    twitterTitle: 'About EstateAI',
    twitterDescription: 'Our mission to revolutionize real estate.',
    twitterImage: 'https://estateai.com/twitter-about.jpg',
    seoScore: 78,
    status: 'published',
    lastModified: '2026-03-25',
    indexable: true
  },
  {
    id: '3',
    pageName: 'Contact',
    slug: 'contact',
    url: '/contact',
    metaTitle: 'Contact EstateAI | Get Support & Sales Inquiries',
    metaDescription: 'Get in touch with EstateAI. Support, sales, and partnership inquiries welcome.',
    keywords: ['contact', 'support', 'sales', 'help'],
    canonicalUrl: 'https://estateai.com/contact',
    ogTitle: 'Contact EstateAI',
    ogDescription: 'We\'re here to help. Reach out anytime.',
    ogImage: 'https://estateai.com/og-contact.jpg',
    twitterTitle: 'Contact EstateAI',
    twitterDescription: 'Support and sales inquiries.',
    twitterImage: 'https://estateai.com/twitter-contact.jpg',
    seoScore: 85,
    status: 'published',
    lastModified: '2026-03-20',
    indexable: true
  },
  {
    id: '4',
    pageName: 'Property Listings',
    slug: 'listings',
    url: '/listings',
    metaTitle: 'Browse Properties | EstateAI Listings',
    metaDescription: 'Discover premium properties with AI-powered recommendations.',
    keywords: ['properties', 'listings', 'real estate', 'homes'],
    canonicalUrl: 'https://estateai.com/listings',
    ogTitle: 'Property Listings - EstateAI',
    ogDescription: 'Find your dream property with smart recommendations.',
    ogImage: 'https://estateai.com/og-listings.jpg',
    twitterTitle: 'EstateAI Listings',
    twitterDescription: 'Smart property search powered by AI.',
    twitterImage: 'https://estateai.com/twitter-listings.jpg',
    seoScore: 88,
    status: 'published',
    lastModified: '2026-03-29',
    indexable: true
  },
  {
    id: '5',
    pageName: 'Pricing',
    slug: 'pricing',
    url: '/pricing',
    metaTitle: 'EstateAI Pricing | Plans for Every Agent',
    metaDescription: 'Flexible pricing plans for individual agents and teams.',
    keywords: ['pricing', 'plans', 'subscription', 'cost'],
    canonicalUrl: 'https://estateai.com/pricing',
    ogTitle: 'EstateAI Pricing Plans',
    ogDescription: 'Choose the plan that fits your business.',
    ogImage: 'https://estateai.com/og-pricing.jpg',
    twitterTitle: 'EstateAI Pricing',
    twitterDescription: 'Plans starting from $29/month.',
    twitterImage: 'https://estateai.com/twitter-pricing.jpg',
    seoScore: 65,
    status: 'draft',
    lastModified: '2026-03-15',
    indexable: false
  }
];

// Utility Functions
const generateSlug = (name: string) => {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
};

const calculateSEOScore = (entry: Partial<SEOEntry>): number => {
  let score = 0;
  if (entry.metaTitle && entry.metaTitle.length >= 50 && entry.metaTitle.length <= 60) score += 25;
  else if (entry.metaTitle && entry.metaTitle.length > 0) score += 15;
  
  if (entry.metaDescription && entry.metaDescription.length >= 150 && entry.metaDescription.length <= 160) score += 25;
  else if (entry.metaDescription && entry.metaDescription.length > 0) score += 15;
  
  if (entry.keywords && entry.keywords.length > 0) score += 15;
  if (entry.ogTitle && entry.ogDescription) score += 15;
  if (entry.twitterTitle && entry.twitterDescription) score += 15;
  
  if (entry.metaTitle && entry.metaTitle.length > 70) score -= 10;
  if (entry.metaDescription && entry.metaDescription.length > 170) score -= 10;
  
  return Math.max(0, Math.min(100, score));
};

const getScoreColor = (score: number) => {
  if (score >= 80) return 'text-green-600 bg-green-50 border-green-200';
  if (score >= 60) return 'text-amber-600 bg-amber-50 border-amber-200';
  return 'text-red-600 bg-red-50 border-red-200';
};

const getScoreLabel = (score: number) => {
  if (score >= 80) return 'Excellent';
  if (score >= 60) return 'Good';
  return 'Needs Work';
};

export default function SEODashboard() {
  const [entries, setEntries] = useState<SEOEntry[]>(initialData);
  const [selectedEntry, setSelectedEntry] = useState<SEOEntry | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateMode, setIsCreateMode] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'published' | 'draft'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [activeSidebarItem, setActiveSidebarItem] = useState('seo');
  const [previewMode, setPreviewMode] = useState<'google' | 'facebook' | 'twitter'>('google');
  
  // Form State
  const [formData, setFormData] = useState<Partial<SEOEntry>>({});
  const [isDirty, setIsDirty] = useState(false);

  // Filtered Entries
  const filteredEntries = useMemo(() => {
    return entries.filter(entry => {
      const matchesTab = activeTab === 'all' || entry.status === activeTab;
      const matchesSearch = entry.pageName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           entry.metaTitle.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [entries, activeTab, searchQuery]);

  // Stats
  const stats = useMemo(() => {
    const avgScore = entries.reduce((acc, e) => acc + e.seoScore, 0) / entries.length;
    const published = entries.filter(e => e.status === 'published').length;
    const needsAttention = entries.filter(e => e.seoScore < 60).length;
    return { avgScore: Math.round(avgScore), published, needsAttention, total: entries.length };
  }, [entries]);

  // Handlers
  const showNotification = (message: string, type: Notification['type'] = 'success') => {
    const id = Date.now().toString();
    setNotifications(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 3000);
  };

  const handleCreate = () => {
    setIsCreateMode(true);
    setFormData({
      pageName: '',
      slug: '',
      url: '',
      metaTitle: '',
      metaDescription: '',
      keywords: [],
      canonicalUrl: '',
      ogTitle: '',
      ogDescription: '',
      ogImage: '',
      twitterTitle: '',
      twitterDescription: '',
      twitterImage: '',
      indexable: true,
      status: 'draft'
    });
    setIsModalOpen(true);
  };

  const handleEdit = (entry: SEOEntry) => {
    setIsCreateMode(false);
    setSelectedEntry(entry);
    setFormData({ ...entry });
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this SEO entry?')) {
      setEntries(prev => prev.filter(e => e.id !== id));
      showNotification('SEO entry deleted successfully');
    }
  };

  const handleSave = () => {
    if (!formData.pageName || !formData.metaTitle) {
      showNotification('Please fill in required fields', 'error');
      return;
    }

    const score = calculateSEOScore(formData);
    const now = new Date().toISOString().split('T')[0];
    
    if (isCreateMode) {
    const newEntry: SEOEntry = {
  ...(formData as SEOEntry),
  id: Date.now().toString(), // ✅ now this wins
  seoScore: score,
  lastModified: now,
  slug: formData.slug || generateSlug(formData.pageName || ''),
  url: formData.url || `/${generateSlug(formData.pageName || '')}`
};
      setEntries(prev => [...prev, newEntry]);
      showNotification('New SEO entry created successfully');
    } else {
      setEntries(prev => prev.map(e => 
        e.id === selectedEntry?.id 
          ? { ...e, ...formData, seoScore: score, lastModified: now } as SEOEntry
          : e
      ));
      showNotification('SEO entry updated successfully');
    }
    
    setIsModalOpen(false);
    setIsDirty(false);
  };

  const handleInputChange = (field: keyof SEOEntry, value: any) => {
    setFormData(prev => {
      const updated = { ...prev, [field]: value };
      if (field === 'pageName' && isCreateMode) {
        updated.slug = generateSlug(value);
        updated.url = `/${generateSlug(value)}`;
      }
      return updated;
    });
    setIsDirty(true);
  };

  const handleKeywordsChange = (value: string) => {
    const keywords = value.split(',').map(k => k.trim()).filter(k => k);
    handleInputChange('keywords', keywords);
  };

  // Auto-save draft
  useEffect(() => {
    if (isDirty && isModalOpen) {
      const timer = setTimeout(() => {
        // Simulate auto-save
        console.log('Auto-saved draft');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [formData, isDirty, isModalOpen]);

  return (
    <div className="min-h-screen bg-[var(--color-secondary-50)] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-[var(--color-primary-100)] fixed h-full z-10 hidden lg:block">
        <div className="p-4.5 border-b border-[var(--color-primary-100)]">
          <div className="flex items-center gap-3">
          <img width={200} height={200} src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335511/estateai_ohrmxr.png"/>
          </div>
        </div>

        <nav className="p-4 space-y-1">
          <button 
            onClick={() => setActiveSidebarItem('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
              activeSidebarItem === 'dashboard' 
                ? 'bg-[var(--color-primary-50)] text-[var(--color-primary-700)]' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <Layout className="w-5 h-5" />
            Dashboard
          </button>
          
          <button 
            onClick={() => setActiveSidebarItem('seo')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
              activeSidebarItem === 'seo' 
                ? 'bg-[var(--color-primary-50)] text-[var(--color-primary-700)] shadow-sm border border-[var(--color-primary-100)]' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <Search className="w-5 h-5" />
            SEO Manager
            <span className="ml-auto bg-[var(--color-primary-600)] text-white text-xs px-2 py-0.5 rounded-full">
              {entries.length}
            </span>
          </button>

          <button 
            onClick={() => setActiveSidebarItem('pages')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
              activeSidebarItem === 'pages' 
                ? 'bg-[var(--color-primary-50)] text-[var(--color-primary-700)]' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <FileText className="w-5 h-5" />
            Pages
          </button>

          <button 
            onClick={() => setActiveSidebarItem('users')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
              activeSidebarItem === 'users' 
                ? 'bg-[var(--color-primary-50)] text-[var(--color-primary-700)]' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <Users className="w-5 h-5" />
            Users
          </button>

          <button 
            onClick={() => setActiveSidebarItem('settings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
              activeSidebarItem === 'settings' 
                ? 'bg-[var(--color-primary-50)] text-[var(--color-primary-700)]' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <Settings className="w-5 h-5" />
            Settings
          </button>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[var(--color-primary-100)]">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-[var(--color-primary-50)] to-white border border-[var(--color-primary-100)]">
            <div className="w-8 h-8 rounded-full bg-[var(--color-primary-600)] flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[var(--color-primary-900)] truncate">Admin User</p>
              <p className="text-xs text-[var(--color-primary-600)] truncate">admin@estateai.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64">
        {/* Header */}
        <header className="bg-white border-b border-[var(--color-primary-100)] sticky top-0 z-20">
          <div className="px-6 py-4 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">SEO Manager</h2>
              <p className="text-sm text-slate-500 mt-1">Manage meta tags and optimize your site for search engines</p>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors">
                <Eye className="w-5 h-5" />
              </button>
              <button 
                onClick={handleCreate}
                className="flex items-center gap-2 px-5 py-2.5 bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] text-white rounded-xl font-medium shadow-lg shadow-[var(--color-primary-200)] transition-all hover:shadow-xl hover:shadow-[var(--color-primary-200)] active:scale-95"
              >
                <Plus className="w-5 h-5" />
                Add Page SEO
              </button>
            </div>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="px-6 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl p-5 border border-[var(--color-primary-100)] shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Average SEO Score</p>
                <p className="text-3xl font-bold text-[var(--color-primary-900)] mt-1">{stats.avgScore}%</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary-100)] to-[var(--color-primary-50)] flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-[var(--color-primary-600)]" />
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${getScoreColor(stats.avgScore)}`}>
                {getScoreLabel(stats.avgScore)}
              </span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[var(--color-primary-100)] shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Published Pages</p>
                <p className="text-3xl font-bold text-[var(--color-primary-900)] mt-1">{stats.published}</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-3">of {stats.total} total pages</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[var(--color-primary-100)] shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Needs Attention</p>
                <p className="text-3xl font-bold text-red-600 mt-1">{stats.needsAttention}</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-3">Pages with SEO score &lt; 60</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[var(--color-primary-100)] shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Total Keywords</p>
                <p className="text-3xl font-bold text-[var(--color-primary-900)] mt-1">
                  {entries.reduce((acc, e) => acc + e.keywords.length, 0)}
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-[var(--color-secondary-100)] flex items-center justify-center">
                <Search className="w-6 h-6 text-[var(--color-secondary-600)]" />
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-3">Across all pages</p>
          </div>
        </div>

        {/* Filters & Table */}
        <div className="px-6 pb-6">
          <div className="bg-white rounded-2xl border border-[var(--color-primary-100)] shadow-sm overflow-hidden">
            {/* Toolbar */}
            <div className="p-4 border-b border-[var(--color-primary-100)] flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
                {(['all', 'published', 'draft'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${
                      activeTab === tab 
                        ? 'bg-white text-[var(--color-primary-700)] shadow-sm' 
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="relative flex-1 sm:flex-none">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search pages..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full sm:w-64 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent transition-all"
                  />
                </div>
                
                <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors">
                  <Filter className="w-5 h-5" />
                </button>
                
                <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-[var(--color-primary-100)]">
                  <tr>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Page</th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">SEO Score</th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Last Modified</th>
                    <th className="text-right px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredEntries.map(entry => (
                    <tr key={entry.id} className="hover:bg-slate-50 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-[var(--color-primary-50)] flex items-center justify-center border border-[var(--color-primary-100)]">
                            <FileText className="w-5 h-5 text-[var(--color-primary-600)]" />
                          </div>
                          <div>
                            <p className="font-medium text-slate-900 group-hover:text-[var(--color-primary-700)] transition-colors">
                              {entry.pageName}
                            </p>
                            <p className="text-sm text-slate-500">{entry.url}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-16 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full transition-all ${
                                entry.seoScore >= 80 ? 'bg-green-500' : 
                                entry.seoScore >= 60 ? 'bg-amber-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${entry.seoScore}%` }}
                            />
                          </div>
                          <span className={`text-sm font-medium ${
                            entry.seoScore >= 80 ? 'text-green-600' : 
                            entry.seoScore >= 60 ? 'text-amber-600' : 'text-red-600'
                          }`}>
                            {entry.seoScore}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                          entry.status === 'published' 
                            ? 'bg-green-50 text-green-700 border border-green-200' 
                            : 'bg-amber-50 text-amber-700 border border-amber-200'
                        }`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            entry.status === 'published' ? 'bg-green-500' : 'bg-amber-500'
                          }`} />
                          {entry.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">
                        {entry.lastModified}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-0  group-hover:opacity-100 transition-opacity">
                          <button 
                            onClick={() => handleEdit(entry)}
                            className="p-2 text-slate-600 hover:text-[var(--color-primary-600)] hover:bg-[var(--color-primary-50)] rounded-lg transition-all"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleDelete(entry.id)}
                            className="p-2 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredEntries.length === 0 && (
              <div className="py-12 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
                  <Search className="w-8 h-8 text-slate-400" />
                </div>
                <p className="text-slate-500 font-medium">No pages found</p>
                <p className="text-sm text-slate-400 mt-1">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Edit/Create Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-[var(--color-primary-100)] flex items-center justify-between bg-gradient-to-r from-white to-[var(--color-primary-50)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-600)] flex items-center justify-center">
                  <Search className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {isCreateMode ? 'Create New SEO Entry' : 'Edit SEO Settings'}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {formData.pageName || 'Untitled Page'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                {isDirty && (
                  <span className="text-sm text-amber-600 flex items-center gap-1">
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                    Unsaved changes
                  </span>
                )}
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Form Section */}
                <div className="lg:col-span-2 p-6 space-y-6 border-r border-[var(--color-primary-100)]">
                  {/* Basic Info */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <Globe className="w-4 h-4 text-[var(--color-primary-600)]" />
                      Basic Information
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                          Page Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.pageName || ''}
                          onChange={(e) => handleInputChange('pageName', e.target.value)}
                          className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent transition-all"
                          placeholder="e.g., Home, About Us"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Slug</label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">/</span>
                          <input
                            type="text"
                            value={formData.slug || ''}
                            onChange={(e) => handleInputChange('slug', e.target.value)}
                            className="w-full pl-7 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-600"
                            readOnly={isCreateMode}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Canonical URL</label>
                      <input
                        type="text"
                        value={formData.canonicalUrl || ''}
                        onChange={(e) => handleInputChange('canonicalUrl', e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] transition-all"
                        placeholder="https://estateai.com/page"
                      />
                    </div>
                  </div>

                  {/* Meta Tags */}
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <Search className="w-4 h-4 text-[var(--color-primary-600)]" />
                      Meta Tags
                    </h4>
                    
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-sm font-medium text-slate-700">
                          Meta Title <span className="text-red-500">*</span>
                        </label>
                        <span className={`text-xs font-medium ${
                          (formData.metaTitle?.length || 0) >= 50 && (formData.metaTitle?.length || 0) <= 60 
                            ? 'text-green-600' : 'text-amber-600'
                        }`}>
                          {formData.metaTitle?.length || 0}/60
                        </span>
                      </div>
                      <input
                        type="text"
                        value={formData.metaTitle || ''}
                        onChange={(e) => handleInputChange('metaTitle', e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] transition-all"
                        placeholder="Page title for search results"
                      />
                      <p className="text-xs text-slate-500 mt-1.5">
                        Recommended: 50-60 characters for optimal display
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-sm font-medium text-slate-700">
                          Meta Description <span className="text-red-500">*</span>
                        </label>
                        <span className={`text-xs font-medium ${
                          (formData.metaDescription?.length || 0) >= 150 && (formData.metaDescription?.length || 0) <= 160 
                            ? 'text-green-600' : 'text-amber-600'
                        }`}>
                          {formData.metaDescription?.length || 0}/160
                        </span>
                      </div>
                      <textarea
                        value={formData.metaDescription || ''}
                        onChange={(e) => handleInputChange('metaDescription', e.target.value)}
                        rows={3}
                        className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] transition-all resize-none"
                        placeholder="Brief description of the page content"
                      />
                      <p className="text-xs text-slate-500 mt-1.5">
                        Recommended: 150-160 characters for optimal display
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Keywords</label>
                      <input
                        type="text"
                        value={(formData.keywords || []).join(', ')}
                        onChange={(e) => handleKeywordsChange(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] transition-all"
                        placeholder="real estate, property, AI, automation"
                      />
                      <div className="flex flex-wrap gap-2 mt-2">
                        {(formData.keywords || []).map((keyword, idx) => (
                          <span key={idx} className="px-2.5 py-1 bg-[var(--color-primary-50)] text-[var(--color-primary-700)] text-xs rounded-lg border border-[var(--color-primary-100)]">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Open Graph */}
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <Facebook className="w-4 h-4 text-[var(--color-primary-600)]" />
                      Open Graph (Facebook)
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">OG Title</label>
                        <input
                          type="text"
                          value={formData.ogTitle || ''}
                          onChange={(e) => handleInputChange('ogTitle', e.target.value)}
                          className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] transition-all"
                          placeholder="Title for social sharing"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">OG Image URL</label>
                        <div className="relative">
                          <input
                            type="text"
                            value={formData.ogImage || ''}
                            onChange={(e) => handleInputChange('ogImage', e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] transition-all"
                            placeholder="https://..."
                          />
                          <Upload className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">OG Description</label>
                      <textarea
                        value={formData.ogDescription || ''}
                        onChange={(e) => handleInputChange('ogDescription', e.target.value)}
                        rows={2}
                        className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] transition-all resize-none"
                        placeholder="Description for Facebook sharing"
                      />
                    </div>
                  </div>

                  {/* Twitter Card */}
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <Twitter className="w-4 h-4 text-[var(--color-primary-600)]" />
                      Twitter Card
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Twitter Title</label>
                        <input
                          type="text"
                          value={formData.twitterTitle || ''}
                          onChange={(e) => handleInputChange('twitterTitle', e.target.value)}
                          className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] transition-all"
                          placeholder="Title for Twitter cards"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Twitter Image URL</label>
                        <div className="relative">
                          <input
                            type="text"
                            value={formData.twitterImage || ''}
                            onChange={(e) => handleInputChange('twitterImage', e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] transition-all"
                            placeholder="https://..."
                          />
                          <Upload className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Twitter Description</label>
                      <textarea
                        value={formData.twitterDescription || ''}
                        onChange={(e) => handleInputChange('twitterDescription', e.target.value)}
                        rows={2}
                        className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] transition-all resize-none"
                        placeholder="Description for Twitter cards"
                      />
                    </div>
                  </div>

                  {/* Settings */}
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <Settings className="w-4 h-4 text-[var(--color-primary-600)]" />
                      Page Settings
                    </h4>
                    
                    <div className="flex items-center gap-6">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.indexable}
                          onChange={(e) => handleInputChange('indexable', e.target.checked)}
                          className="w-5 h-5 rounded border-slate-300 text-[var(--color-primary-600)] focus:ring-[var(--color-primary-500)]"
                        />
                        <span className="text-sm text-slate-700">Allow search engine indexing</span>
                      </label>
                      
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.status === 'published'}
                          onChange={(e) => handleInputChange('status', e.target.checked ? 'published' : 'draft')}
                          className="w-5 h-5 rounded border-slate-300 text-[var(--color-primary-600)] focus:ring-[var(--color-primary-500)]"
                        />
                        <span className="text-sm text-slate-700">Published</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Preview Section */}
                <div className="bg-slate-50 p-6 space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Live Preview</h4>
                    
                    {/* Preview Tabs */}
                    <div className="flex gap-2 mb-4">
                      {(['google', 'facebook', 'twitter'] as const).map(mode => (
                        <button
                          key={mode}
                          onClick={() => setPreviewMode(mode)}
                          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all ${
                            previewMode === mode 
                              ? 'bg-[var(--color-primary-600)] text-white' 
                              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                          }`}
                        >
                          {mode === 'google' && <Search className="w-3.5 h-3.5" />}
                          {mode === 'facebook' && <Facebook className="w-3.5 h-3.5" />}
                          {mode === 'twitter' && <Twitter className="w-3.5 h-3.5" />}
                          {mode}
                        </button>
                      ))}
                    </div>

                    {/* Google Preview */}
                    {previewMode === 'google' && (
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                            <Search className="w-4 h-4 text-slate-400" />
                          </div>
                          <div>
                            <p className="text-xs text-slate-800 font-medium">EstateAI</p>
                            <p className="text-xs text-green-700">{formData.canonicalUrl || 'https://estateai.com'}{formData.url}</p>
                          </div>
                        </div>
                        <h5 className="text-[#1a0dab] text-lg font-medium mb-1 hover:underline cursor-pointer line-clamp-1">
                          {formData.metaTitle || 'Page Title'}
                        </h5>
                        <p className="text-sm text-[#4d5156] line-clamp-2">
                          {formData.metaDescription || 'Meta description will appear here...'}
                        </p>
                      </div>
                    )}

                    {/* Facebook Preview */}
                    {previewMode === 'facebook' && (
                      <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200">
                        <div className="aspect-[1.91/1] bg-slate-100 flex items-center justify-center">
                          {formData.ogImage ? (
                            <img src={formData.ogImage} alt="OG" className="w-full h-full object-cover" />
                          ) : (
                            <div className="text-center">
                              <Facebook className="w-12 h-12 text-slate-300 mx-auto mb-2" />
                              <p className="text-xs text-slate-400">No image selected</p>
                            </div>
                          )}
                        </div>
                        <div className="p-3 bg-[#f0f2f5]">
                          <p className="text-xs text-slate-500 uppercase mb-1">ESTATEAI.COM</p>
                          <h5 className="text-sm font-semibold text-slate-900 line-clamp-1 mb-1">
                            {formData.ogTitle || formData.metaTitle || 'Page Title'}
                          </h5>
                          <p className="text-xs text-slate-600 line-clamp-2">
                            {formData.ogDescription || formData.metaDescription || 'Description will appear here...'}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Twitter Preview */}
                    {previewMode === 'twitter' && (
                      <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200">
                        <div className="aspect-[2/1] bg-slate-100 flex items-center justify-center">
                          {formData.twitterImage ? (
                            <img src={formData.twitterImage} alt="Twitter" className="w-full h-full object-cover" />
                          ) : (
                            <div className="text-center">
                              <Twitter className="w-12 h-12 text-slate-300 mx-auto mb-2" />
                              <p className="text-xs text-slate-400">No image selected</p>
                            </div>
                          )}
                        </div>
                        <div className="p-3">
                          <h5 className="text-sm font-semibold text-slate-900 line-clamp-1 mb-1">
                            {formData.twitterTitle || formData.metaTitle || 'Page Title'}
                          </h5>
                          <p className="text-xs text-slate-600 line-clamp-2 mb-2">
                            {formData.twitterDescription || formData.metaDescription || 'Description will appear here...'}
                          </p>
                          <p className="text-xs text-slate-400 flex items-center gap-1">
                            <Globe className="w-3 h-3" />
                            estateai.com
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* SEO Score */}
                  <div className="bg-white rounded-xl p-4 border border-[var(--color-primary-100)]">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-slate-700">SEO Score</span>
                      <span className={`text-lg font-bold ${
                        calculateSEOScore(formData) >= 80 ? 'text-green-600' : 
                        calculateSEOScore(formData) >= 60 ? 'text-amber-600' : 'text-red-600'
                      }`}>
                        {calculateSEOScore(formData)}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all ${
                          calculateSEOScore(formData) >= 80 ? 'bg-green-500' : 
                          calculateSEOScore(formData) >= 60 ? 'bg-amber-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${calculateSEOScore(formData)}%` }}
                      />
                    </div>
                    <p className="text-xs text-slate-500 mt-2">
                      {calculateSEOScore(formData) >= 80 ? 'Excellent! Your SEO is optimized.' : 
                       calculateSEOScore(formData) >= 60 ? 'Good, but there\'s room for improvement.' : 
                       'Needs work. Check recommendations below.'}
                    </p>
                  </div>

                  {/* Recommendations */}
                  <div className="space-y-2">
                    <h5 className="text-xs font-semibold text-slate-700 uppercase">Recommendations</h5>
                    <div className="space-y-2">
                      {(formData.metaTitle?.length || 0) < 50 && (
                        <div className="flex items-start gap-2 text-xs text-amber-600 bg-amber-50 p-2 rounded-lg">
                          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                          <span>Title is too short. Aim for 50-60 characters.</span>
                        </div>
                      )}
                      {(formData.metaTitle?.length || 0) > 60 && (
                        <div className="flex items-start gap-2 text-xs text-red-600 bg-red-50 p-2 rounded-lg">
                          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                          <span>Title is too long. Keep it under 60 characters.</span>
                        </div>
                      )}
                      {(formData.metaDescription?.length || 0) < 150 && (
                        <div className="flex items-start gap-2 text-xs text-amber-600 bg-amber-50 p-2 rounded-lg">
                          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                          <span>Description is too short. Aim for 150-160 characters.</span>
                        </div>
                      )}
                      {(formData.metaDescription?.length || 0) > 160 && (
                        <div className="flex items-start gap-2 text-xs text-red-600 bg-red-50 p-2 rounded-lg">
                          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                          <span>Description is too long. Keep it under 160 characters.</span>
                        </div>
                      )}
                      {!(formData.keywords || []).length && (
                        <div className="flex items-start gap-2 text-xs text-amber-600 bg-amber-50 p-2 rounded-lg">
                          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                          <span>Add keywords to improve search relevance.</span>
                        </div>
                      )}
                      {(formData.metaTitle?.length || 0) >= 50 && (formData.metaTitle?.length || 0) <= 60 && 
                       (formData.metaDescription?.length || 0) >= 150 && (formData.metaDescription?.length || 0) <= 160 && 
                       (formData.keywords || []).length > 0 && (
                        <div className="flex items-start gap-2 text-xs text-green-600 bg-green-50 p-2 rounded-lg">
                          <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                          <span>All basic SEO fields are properly optimized!</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-[var(--color-primary-100)] bg-slate-50 flex items-center justify-between">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2.5 text-slate-600 font-medium hover:text-slate-900 transition-colors"
              >
                Cancel
              </button>
              
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => showNotification('Draft saved automatically', 'info')}
                  className="px-5 py-2.5 text-[var(--color-primary-700)] font-medium hover:bg-[var(--color-primary-50)] rounded-xl transition-all"
                >
                  Save as Draft
                </button>
                <button 
                  onClick={handleSave}
                  className="flex items-center gap-2 px-6 py-2.5 bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] text-white font-medium rounded-xl shadow-lg shadow-[var(--color-primary-200)] transition-all hover:shadow-xl active:scale-95"
                >
                  <Save className="w-4 h-4" />
                  {isCreateMode ? 'Create Entry' : 'Save Changes'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notifications */}
      <div className="fixed bottom-6 right-6 z-50 space-y-2">
        {notifications.map(notification => (
          <div
            key={notification.id}
            className={`flex items-center gap-3 px-5 py-3 rounded-xl shadow-lg transform transition-all ${
              notification.type === 'success' ? 'bg-green-600 text-white' :
              notification.type === 'error' ? 'bg-red-600 text-white' :
              'bg-[var(--color-primary-600)] text-white'
            }`}
          >
            {notification.type === 'success' && <CheckCircle className="w-5 h-5" />}
            {notification.type === 'error' && <AlertCircle className="w-5 h-5" />}
            <span className="font-medium text-sm">{notification.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}