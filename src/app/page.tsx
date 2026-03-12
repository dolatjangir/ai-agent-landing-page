"use client"
import React, { useState, useEffect,useRef} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Building2, 
  Calendar, 
  MessageSquare, 
  TrendingUp, 
  Users, 
  Zap, 
  Check, 
  ChevronRight, 
  Star,
  Menu,
  X,
  ArrowRight,
  Shield,
  Clock,
  BarChart3,
  Globe,
  HeadphonesIcon,
  Sparkles,
  Play,
  Image,
  ChevronDown,
  HelpCircle,
  HelpCircleIcon,
  MessageSquareCode,
  GraduationCapIcon,
  PlayCircle,
  BookA,
  Cloud,
  Database,
  PieChart,
  Target,
  Layers,
  Workflow,
  LineChart
} from 'lucide-react';
import Footer from '@/components/footer/footer'
import Analytics from '@/components/analytics/analytics'
import Hero from '@/components/hero/hero'
import Header from '@/components/header/header'
import Trusted from '@/components/trusted/trusted';
import Features from '@/components/features/features';
interface NavItem {
  label: string;
  href: string;
  hasDropdown: boolean;
  dropdownContent?: {
    title: string;
    description: string;
    sections: {
      title: string;
      items: {
        icon: React.ReactNode;
        title: string;
        description: string;
        href: string;
        badge?: string;
      }[];
    }[];
    footer?: {
      text: string;
      link: string;
      href: string;
    };
  };
}
const navItems: NavItem[] = [
  {
    label: "Features",
    href: "#features",
    hasDropdown: true,
    dropdownContent: {
      title: "Platform Features",
      description: "Everything you need to manage customer relationships at scale",
      sections: [
        {
          title: "Core CRM",
          items: [
            {
              icon: <Users className="w-5 h-5" />,
              title: "Contact Management",
              description: "Organize and segment your customer data",
              href: "#contacts"
            },
            {
              icon: <Target className="w-5 h-5" />,
              title: "Lead Scoring",
              description: "AI-powered lead qualification",
              href: "#leads",
              badge: "AI"
            },
            {
              icon: <LineChart className="w-5 h-5" />,
              title: "Sales Pipeline",
              description: "Visual deal tracking and forecasting",
              href: "#pipeline"
            }
          ]
        },
        {
          title: "Automation",
          items: [
            {
              icon: <Workflow className="w-5 h-5" />,
              title: "Workflow Automation",
              description: "Automate repetitive tasks",
              href: "#workflows"
            },
            {
              icon: <Clock className="w-5 h-5" />,
              title: "Smart Scheduling",
              description: "AI meeting scheduler",
              href: "#scheduling"
            },
            {
              icon: <Zap className="w-5 h-5" />,
              title: "Instant Actions",
              description: "Trigger-based automation",
              href: "#actions"
            }
          ]
        }
      ],
      footer: {
        text: "See all features",
        link: "Explore →",
        href: "/features"
      }
    }
  },
  {
    label: "Solutions",
    href: "#solutions",
    hasDropdown: true,
    dropdownContent: {
      title: "Solutions by Industry",
      description: "Tailored CRM solutions for every business type",
      sections: [
        {
          title: "By Industry",
          items: [
            {
              icon: <Layers className="w-5 h-5" />,
              title: "Enterprise",
              description: "Scale with confidence",
              href: "/enterprise"
            },
            {
              icon: <Sparkles className="w-5 h-5" />,
              title: "Startups",
              description: "Grow from day one",
              href: "/startups"
            },
            {
              icon: <BarChart3 className="w-5 h-5" />,
              title: "Agencies",
              description: "Manage multiple clients",
              href: "/agencies"
            }
          ]
        },
        {
          title: "By Team",
          items: [
            {
              icon: <Users className="w-5 h-5" />,
              title: "Sales Teams",
              description: "Close more deals faster",
              href: "/sales"
            },
            {
              icon: <Target className="w-5 h-5" />,
              title: "Marketing",
              description: "Align sales and marketing",
              href: "/marketing"
            },
            {
              icon: <Shield className="w-5 h-5" />,
              title: "Customer Success",
              description: "Reduce churn, increase LTV",
              href: "/success"
            }
          ]
        }
      ],
      footer: {
        text: "Not sure where to start?",
        link: "Talk to Sales →",
        href: "/contact"
      }
    }
  },
  {
    label: "Pricing",
    href: "#pricing",
    hasDropdown: true,
    dropdownContent: {
      title: "Simple Pricing",
      description: "Choose the plan that fits your business",
      sections: [
        {
          title: "Plans",
          items: [
            {
              icon: <Star className="w-5 h-5" />,
              title: "Starter",
              description: "Free for up to 3 users",
              href: "/pricing#starter",
              badge: "Free"
            },
            {
              icon: <Zap className="w-5 h-5" />,
              title: "Professional",
              description: "$49/user per month",
              href: "/pricing#pro"
            },
            {
              icon: <Sparkles className="w-5 h-5" />,
              title: "Enterprise",
              description: "Custom pricing",
              href: "/pricing#enterprise"
            }
          ]
        },
        {
          title: "Compare",
          items: [
            {
              icon: <PieChart className="w-5 h-5" />,
              title: "Plan Comparison",
              description: "See all features side by side",
              href: "/compare"
            },
            {
              icon: <Database className="w-5 h-5" />,
              title: "ROI Calculator",
              description: "Calculate your return",
              href: "/roi"
            },
            {
              icon: <Cloud className="w-5 h-5" />,
              title: "Cloud vs On-prem",
              description: "Deployment options",
              href: "/deployment"
            }
          ]
        }
      ],
      footer: {
        text: "All plans include 14-day free trial",
        link: "Start Free →",
        href: "/signup"
      }
    }
  },
  {
    label: "Resources",
    href: "#resources",
    hasDropdown: true,
    dropdownContent: {
      title: "Learn & Grow",
      description: "Resources to help you succeed",
      sections: [
        {
          title: "Learn",
          items: [
            {
              icon: <BookA className="w-5 h-5" />,
              title: "Documentation",
              description: "Guides and API references",
              href: "/docs"
            },
            {
              icon: <PlayCircle className="w-5 h-5" />,
              title: "Video Tutorials",
              description: "Step-by-step walkthroughs",
              href: "/tutorials"
            },
            {
              icon: <GraduationCapIcon className="w-5 h-5" />,
              title: "CRM Academy",
              description: "Free certification courses",
              href: "/academy"
            }
          ]
        },
        {
          title: "Support",
          items: [
            {
              icon: <HelpCircleIcon className="w-5 h-5" />,
              title: "Help Center",
              description: "FAQs and troubleshooting",
              href: "/help"
            },
            {
              icon: <MessageSquareCode className="w-5 h-5" />,
              title: "Community",
              description: "Join the conversation",
              href: "/community"
            },
            {
              icon: <HeadphonesIcon className="w-5 h-5" />,
              title: "Contact Support",
              description: "24/7 expert assistance",
              href: "/support"
            }
          ]
        }
      ],
      footer: {
        text: "Need personalized help?",
        link: "Book a Demo →",
        href: "/demo"
      }
    }
  }
];



const StayPilotLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isYearly, setIsYearly] = useState(true);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
   const [email, setEmail] = useState("");
   const [openIndex, setOpenIndex] = useState(null);
     const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
     const [isVisible, setIsVisible] = useState(false);
     const timeoutRef = useRef<NodeJS.Timeout | null>(null);
      const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(label);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => setActiveDropdown(null), 200);
    }, 150);
  };

  const activeItem = navItems.find(item => item.label === activeDropdown);
   const toggleFAQ = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert(`Thank you! We will contact ${email} shortly.`);
      setEmail("");
    };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Channel Management",
      description: "Sync calendars across Airbnb, Booking.com, VRBO, and 50+ platforms instantly. No more double bookings.",
      gradient: "var(--gradient-primary)"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Automated Bookings",
      description: "Smart reservation system that handles confirmations, payments, and cancellations automatically.",
      gradient: "linear-gradient(135deg, var(--color-secondary-500) 0%, var(--color-primary-400) 100%)"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Dynamic Pricing",
      description: "AI-powered pricing engine adjusts rates based on demand, seasonality, and local events.",
      gradient: "linear-gradient(135deg, var(--color-primary-500) 0%, var(--color-secondary-400) 100%)"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Guest Communication",
      description: "Automated messaging for check-ins, reviews, and support. Multi-language support included.",
      gradient: "linear-gradient(135deg, var(--color-secondary-400) 0%, var(--color-primary-500) 100%)"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Revenue Analytics",
      description: "Real-time dashboards tracking occupancy, revenue per room, and growth trends.",
      gradient: "linear-gradient(135deg, var(--color-primary-600) 0%, var(--color-secondary-500) 100%)"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Staff Management",
      description: "Coordinate cleaning schedules, maintenance tasks, and team assignments seamlessly.",
      gradient: "linear-gradient(135deg, var(--color-secondary-600) 0%, var(--color-primary-600) 100%)"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Connect Properties",
      description: "Import your listings from Airbnb, Booking.com, or add them manually. Setup takes under 5 minutes.",
      bg: "var(--color-primary-200)"
    },
    {
      number: "02",
      title: "Automate Operations",
      description: "Set up smart rules for pricing, messaging, and task assignments. Let the system work for you.",
      bg: "var(--color-secondary-200)"
    },
    {
      number: "03",
      title: "Scale Revenue",
      description: "Watch your occupancy rise and operational costs drop with data-driven insights.",
      bg: "var(--color-primary-200)"
    }
  ];

  const benefits = [
    { icon: <TrendingUp className="w-5 h-5" />, text: "Increase occupancy by up to 40%" },
    { icon: <Clock className="w-5 h-5" />, text: "Save 20+ hours every week" },
    { icon: <Shield className="w-5 h-5" />, text: "Eliminate double bookings" },
    { icon: <HeadphonesIcon className="w-5 h-5" />, text: "24/7 dedicated support" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Boutique Hotel Owner",
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      quote: "StayPilot increased our occupancy from 65% to 89% in just three months. The automated pricing alone pays for the subscription.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Airbnb Superhost",
      location: "Barcelona, Spain",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "Managing 12 properties used to be a nightmare. Now I spend 30 minutes a day on operations instead of 6 hours.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "BnB Chain Manager",
      location: "London, UK",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "The staff coordination features are incredible. Our cleaning and maintenance efficiency improved by 60%.",
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for individual hosts",
      monthlyPrice: 29,
      yearlyPrice: 24,
      features: ["Up to 3 properties", "Basic channel sync", "Automated messaging", "Standard support", "Basic analytics"],
      popular: false
    },
    {
      name: "Professional",
      description: "For growing hospitality businesses",
      monthlyPrice: 79,
      yearlyPrice: 65,
      features: ["Up to 15 properties", "Advanced channel management", "AI dynamic pricing", "Guest screening", "Priority support", "Revenue analytics", "Staff management"],
      popular: true
    },
    {
      name: "Enterprise",
      description: "For hotel chains & large portfolios",
      monthlyPrice: 199,
      yearlyPrice: 165,
      features: ["Unlimited properties", "Custom integrations", "Dedicated account manager", "API access", "White-label options", "Advanced reporting", "SLA guarantee"],
      popular: false
    }
  ];

  const faqs = [
    {
      question: "How long does it take to set up StayPilot?",
      answer: "Most hosts are fully operational within 15 minutes. Simply connect your existing Airbnb or Booking.com accounts, and we'll automatically sync your calendars, photos, and settings."
    },
    {
      question: "Can I use StayPilot with my existing PMS?",
      answer: "Absolutely. StayPilot integrates with 40+ property management systems including Opera, Cloudbeds, and Hotelogix. Our API also supports custom integrations for enterprise clients."
    },
    {
      question: "How does the dynamic pricing work?",
      answer: "Our AI analyzes local demand, competitor rates, seasonality, events, and historical data to optimize your pricing 24/7. You set the minimum and maximum bounds, we handle the rest."
    },
    {
      question: "Is there a contract or can I cancel anytime?",
      answer: "No long-term contracts required. You can cancel, upgrade, or downgrade your plan at any time. We also offer a 30-day money-back guarantee for annual plans."
    },
    {
      question: "Do you offer training for my team?",
      answer: "Yes! Professional and Enterprise plans include onboarding sessions, video tutorials, and documentation. Enterprise clients receive dedicated training for their entire staff."
    },
    {
      question: "What happens if I exceed my property limit?",
      answer: "We'll notify you when you're approaching your limit. You can upgrade instantly without losing any data or configuration. We prorate the difference so you only pay for what you use."
    }
  ];

  return (
    <div className="min-h-screen  bg-[var(--bg-secondary)] font-sans text-[var(--text-primary)] overflow-hidden">
      <Head>
        <title> - Smart Hotel & BnB Management Platform</title>
        <meta name="description" content="Manage all your properties in one smart dashboard. Automate bookings, pricing, and guest communication." />
      </Head>


      {/* Navigation */}
    <Header/>

      {/* Hero Section */}
     <Hero/>

      {/* Trusted By Section */}
      <Trusted/>
      <div className="relative">
      <div className="relative">
      <div className="after:w-full after:h-1/2  after:absolute after:bottom-0 after:left-0 after:bg-linear-to-t after:from-[#f8fafc]  after:to-transprent ">
        <img src="/assets/estateai-robo-sec3.png" />
      </div></div>
      {/* analytics */}
       <div className="-mt-40 relative z-10">
    <Analytics/>
    </div>
    </div>
      {/* Features Section */}
      <Features/>

      {/* How It Works */}
      <section id="how-it-works" className="py-[var(--space-24)] ">
        <div className="max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <div className="text-center max-w-3xl mx-auto mb-[var(--space-16)]">
            <h2 className="text-4xl font-bold mb-[var(--space-4)] text-[var(--text-primary)] ">Get Started in Minutes</h2>
            <p className="text-xl text-[var(--text-secondary)]">Three simple steps to transform your property management.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-[var(--space-8)]">
            {steps.map((step:any, idx) => (
              <div key={idx} className="relative group">
                <div 
                  className="rounded-[var(--radius-3xl)] p-[var(--space-8)] h-full border border-[var(--border-light)] relative overflow-hidden"
                  style={{ backgroundColor: step.bg }}
                >
                  {/* background bubbles */}
                          {/* Background Bubbles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div 
                className="absolute w-32 h-32 rounded-full opacity-20 blur-2xl"
                style={{ 
                  backgroundColor: step.bg,
                  filter: 'brightness(1.3)',
                  top: '-10%',
                  right: '-5%',
                  animation: 'float 6s ease-in-out infinite'
                }}
              />
              <div 
                className="absolute w-24 h-24 rounded-full opacity-15 blur-xl"
                style={{ 
                  backgroundColor: step.bg,
                  filter: 'brightness(1.4)',
                  bottom: '10%',
                  left: '-8%',
                  animation: 'float 8s ease-in-out infinite 1s'
                }}
              />
              <div 
                className="absolute w-20 h-20 rounded-full opacity-10 blur-lg"
                style={{ 
                  backgroundColor: step.bg,
                  filter: 'brightness(1.5)',
                  top: '40%',
                  right: '5%',
                  animation: 'float 7s ease-in-out infinite 2s'
                }}
              />
              <div 
                className="absolute w-16 h-16 rounded-full opacity-25 blur-md"
                style={{ 
                  backgroundColor: step.bg,
                  filter: 'brightness(1.2)',
                  bottom: '30%',
                  left: '60%',
                  animation: 'float 5s ease-in-out infinite 0.5s'
                }}
              />
            </div>
          {/*  */}
          <div className="relative z-10 group">
                  <div className="text-6xl font-bold text-[var(--color-neutral-900)] mb-[var(--space-6)]">{step.number}</div>
                  <h3 className="text-2xl font-bold mb-[var(--space-4)] text-[var(--color-primary-500)]">{step.title}</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">{step.description}</p></div>
                </div>
                {idx < 2 && (
                   <div className="hidden lg:block absolute  z-50  top-1/2 -right-5 group-hover:-right-7 transition-all transform -translate-y-1/2 ">
                                         <ChevronRight className="w-8 h-8 text-[var(--color-primary-300)] group-hover:text-[var(--color-primary-500)]"  />
                                       </div> 
                                       
                )}
              </div>
              
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-[var(--space-24)] ">
        <div className="max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <div 
            className="rounded-[var(--radius-3xl)] p-[var(--space-12)] lg:p-[var(--space-20)] text-[var(--text-inverse)] relative overflow-hidden"
            style={{ background: 'var(--color-secondary-400)' }}
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--text-inverse)]/20 rounded-full  -translate-y-1/2 translate-x-1/2" 
            style={{ 
                 
                  filter: 'brightness(1.3)',
                  top: '10%',
                  right: '5%',
                  animation: 'float 6s ease-in-out infinite'
                }}/>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--text-inverse)]/20 rounded-full  translate-y-1/2 -translate-x-1/2 "   style={{ 
                 
                  filter: 'brightness(1.3)',
                  bottom: '10%',
                  right: '45%',
                  animation: 'float 6s ease-in-out infinite'
                }}/>
              <div 
                className="absolute w-32 h-32 rounded-full opacity-20 blur-2xl"
                style={{ 
                  backgroundColor: '#fff',
                  filter: 'brightness(1.3)',
                  top: '20%',
                  right: '45%',
                  animation: 'float 6s ease-in-out infinite'
                }}
              />
            <div className="relative grid lg:grid-cols-2 gap-[var(--space-12)] items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-[var(--space-6)]">Why Property Managers Choose BNB <span className="text-[var(--color-secondary-800)]">Management</span></h2>
                <p className="text-xl text-[var(--color-primary-100)] mb-[var(--space-8)]">Join thousands of hosts who have transformed their business with our intelligent platform.</p>
                <button className="px-[var(--space-8)] py-[var(--space-4)] bg-[var(--bg-primary)]  text-[var(--color-primary-600)] font-semibold rounded-[var(--radius-full)] hover:bg-[var(--color-primary-50)] transition-colors duration-[var(--duration-fast)] shadow-xl">
                  See All Benefits
                </button>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-[var(--space-6)]">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-[var(--text-inverse)]/10 backdrop-blur-sm rounded-[var(--radius-2xl)] p-[var(--space-6)] border border-[var(--text-inverse)]/20">
                    <div className="w-12 h-12 rounded-[var(--radius-xl)] bg-[var(--text-inverse)]/20 flex items-center justify-center mb-[var(--space-4)]">
                      {React.cloneElement(benefit.icon as React.ReactElement )}
                    </div>
                    <p className="font-semibold text-lg">{benefit.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-[var(--space-24)] ">
        <div className="max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <div className="text-center max-w-3xl mx-auto mb-[var(--space-16)]">
            <h2 className="text-4xl font-bold mb-[var(--space-4)] text-[var(--color-primary-500)] ">Loved by Hospitality Professionals</h2>
            <p className="text-xl text-[var(--text-secondary)]">See how StayPilot is transforming properties worldwide.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-[var(--space-8)]">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-[var(--bg-primary)] rounded-[var(--radius-3xl)] p-[var(--space-8)] shadow-lg border border-[var(--border-light)]">
                <div className="flex items-center gap-1 mb-[var(--space-6)]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[var(--color-warning-500)] hover:scale-110 text-[var(--color-warning-500)]" />
                  ))}
                </div>
                <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-[var(--space-8)]">"{testimonial.quote}"</p>
                <div className="flex items-center gap-[var(--space-4)]">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[var(--color-primary-100)]"
                  />
                  <div>
                    <div className="font-bold text-[var(--text-primary)]">{testimonial.name}</div>
                    <div className="text-sm text-[var(--text-tertiary)]">{testimonial.role}</div>
                    <div className="text-xs text-[var(--text-tertiary)]">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-[var(--space-24)] ">
        <div className="max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <div className="text-center max-w-3xl mx-auto mb-[var(--space-12)]">
            <h2 className="text-4xl font-bold mb-[var(--space-4)] text-[var(--color-primary-500)] ">Simple, Transparent Pricing</h2>
            <p className="text-xl text-[var(--text-secondary)] mb-[var(--space-8)]">Start free, scale as you grow. No hidden fees.</p>
            
            <div className="inline-flex items-center gap-[var(--space-4)] p-1.5 bg-[var(--bg-secondary)] rounded-[var(--radius-full)]">
              <button 
                onClick={() => setIsYearly(false)}
                className={`px-[var(--space-6)] py-[var(--space-2)] rounded-[var(--radius-full)] font-semibold transition-all duration-[var(--duration-fast)] ${!isYearly ? 'bg-[var(--bg-primary)] text-[var(--color-primary-600)] shadow-sm' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setIsYearly(true)}
                className={`px-[var(--space-6)] py-[var(--space-2)] rounded-[var(--radius-full)] font-semibold transition-all duration-[var(--duration-fast)] flex items-center gap-[var(--space-2)] ${isYearly ? 'bg-[var(--bg-primary)] text-[var(--color-primary-600)] shadow-sm' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
              >
                Yearly
                <span className="text-xs bg-[var(--color-success-100)] text-[var(--color-success-700)] px-[var(--space-2)] py-0.5 rounded-[var(--radius-full)]">Save 20%</span>
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[var(--space-10)] max-w-6xl mx-auto">
            {pricingPlans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`relative rounded-[var(--radius-3xl)] p-[var(--space-8)] ${plan.popular ? 'bg-[var(--bg-dark)] text-[var(--text-inverse)] shadow-2xl scale-105 z-10' : 'bg-[var(--bg-primary)] border border-[var(--border-medium)]'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-[var(--space-4)] py-[var(--space-1)] bg-[var(--color-primary-600)] text-[var(--text-inverse)] text-sm font-bold rounded-[var(--radius-full)]">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-[var(--space-8)]">
                  <h3 className="text-2xl font-bold mb-[var(--space-2)] ">{plan.name}</h3>
                  <p className={`text-sm ${plan.popular ? 'text-[var(--text-tertiary)]' : 'text-[var(--text-tertiary)]'}`}>{plan.description}</p>
                </div>

                <div className="mb-[var(--space-8)]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold">${isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                    <span className={`text-lg ${plan.popular ? 'text-[var(--text-tertiary)]' : 'text-[var(--text-tertiary)]'}`}>/month</span>
                  </div>
                  {isYearly && (
                    <p className={`text-sm mt-[var(--space-2)] ${plan.popular ? 'text-[var(--text-tertiary)]' : 'text-[var(--text-tertiary)]'}`}>
                      Billed annually (${(isYearly ? plan.yearlyPrice : plan.monthlyPrice) * 12}/year)
                    </p>
                  )}
                </div>

                <ul className="space-y-[var(--space-4)] mb-[var(--space-8)]">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-[var(--space-3)]">
                      <Check className={`w-5 h-5 mt-0.5 ${plan.popular ? 'text-[var(--color-primary-400)]' : 'text-[var(--color-primary-600)]'}`} />
                      <span className={plan.popular ? 'text-[var(--text-tertiary)]' : 'text-[var(--text-secondary)]'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-[var(--space-4)] rounded-[var(--radius-xl)] font-semibold transition-all duration-[var(--duration-fast)] ${plan.popular ? 'bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-500)] text-[var(--text-inverse)]' : 'bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] text-[var(--text-primary)]'}`}
                >
                  {plan.popular ? 'Start Free Trial' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
   <section className="relative overflow-hidden py-[var(--space-24)] ">
  <div className="max-w-5xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">

    {/* Header */}
    <div className="text-center mb-[var(--space-16)]">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 bg-brand-primary">
        <HelpCircle className="w-8 h-8 text-white" />
      </div>

      <h2 className="text-4xl font-bold mb-[var(--space-4)] text-[var(--text-primary)] ">
        Frequently Asked Questions
      </h2>

      <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
        Everything you need to know about bnb management.
      </p>
    </div>


    {/* FAQ Items */}
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="rounded-2xl shadow-brand bg-[var(--bg-primary)] border border-[var(--border-light)] overflow-hidden transition-all duration-300"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-4 md:p-6 lg:p-8 flex items-start justify-between gap-4"
            >
              <div className="flex-1">

                <div className="flex items-center gap-3 mb-2">

                  {/* Number */}
                  <span
                    className="flex items-center justify-center min-w-8 min-h-8  rounded-full text-sm font-bold transition-all duration-300"
                    style={{
                      backgroundColor: isOpen
                        ? "var(--color-primary-600)"
                        : "var(--color-primary-100)",
                      color: isOpen
                        ? "white"
                        : "var(--color-primary-600)"
                    }}
                  >
                    {index + 1}
                  </span>

                  <h3
                    className="text-sm md:text-md lg:text-xl font-bold transition-colors duration-300"
                    style={{
                      color: isOpen
                        ? "var(--color-primary-600)"
                        : "var(--text-primary)"
                    }}
                  >
                    {faq.question}
                  </h3>
                </div>

              </div>

              {/* Chevron */}
              <div
                className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300"
                style={{
                  backgroundColor: isOpen
                    ? "var(--color-primary-100)"
                    : "var(--bg-tertiary)",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
                }}
              >
                <ChevronDown
                  className="w-5 h-5"
                  style={{
                    color: isOpen
                      ? "var(--color-primary-600)"
                      : "var(--text-secondary)"
                  }}
                />
              </div>
            </button>

            {/* Answer */}
            <div
              className="overflow-hidden transition-all duration-300"
              style={{
                maxHeight: isOpen ? "400px" : "0",
                opacity: isOpen ? 1 : 0
              }}
            >
              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <div
                  className="pl-6 pt-2 border-l-4"
                  style={{ borderColor: "var(--color-primary-200)" }}
                >
                  <p className="text-[var(--text-secondary)] leading-relaxed text-base md:text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>


    {/* CTA */}
    <div className="mt-12 text-center bg-brand-gradient rounded-2xl p-8 md:p-10 shadow-brand">
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
        Still have questions?
      </h3>

      <p className="text-white/80 mb-6 text-lg">
        We're here to help! Get in touch with our team
      </p>

      <button className="bg-white text-[var(--color-primary-600)] px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
        Contact Us
      </button>
    </div>


    {/* Decorative blobs */}
    <div className="pointer-events-none absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20"
         style={{ background: "var(--color-primary-200)" }} />

    <div className="pointer-events-none absolute bottom-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-20"
         style={{ background: "var(--color-primary-300)" }} />

  </div>
</section>


      {/* Final CTA */}
     {/* Final CTA */}
<section className="  ">
  <div>
    <div 
      className="relative p-[var(--space-12)] lg:p-[var(--space-20)] text-center text-[var(--text-inverse)] overflow-hidden"
      style={{ background: 'var(--gradient-primary)' }}
    >

      {/* 🔥 Rotating Glow Animation */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="w-[100%] h-[120%] bg-[var(--border-dark)]/50 animate-rotate-slow overflow-hidden opacity-40"></div>
      </div>

      {/* Texture */}
      <div className="absolute  inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 z-50 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold mb-[var(--space-6)]">
          Ready to Simplify Your BnB Management?
        </h2>

        <p className="text-xl text-[var(--color-primary-100)] mb-[var(--space-10)] max-w-2xl mx-auto">
          Join 10,000+ property managers saving 20+ hours weekly. Start your free 14-day trial today.
        </p>

         <div className="   p-12 relative overflow-hidden">
       
        
        <div className="relative z-50">
         
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2 flex-wrap justify-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 rounded-full placeholder:text-[var(--color-primary-50)] border border-[var(--color-glass-border)] bg-black/50 text-white outline-none min-w-[200px] focus:border-[var(--color-primary)]"
            />
            <button type="submit" className="px-6 py-3 rounded-full text-sm md:text-md lg:text-lg bg-gradient-to-r from-[var(--color-secondary-600)] to-[var(--color-secondary-700)] text-white font-semibold shadow-[0_4px_15px_var(--color-primary-500)] hover:shadow-[0_8px_25px_var(--color-primary-glow)] hover:-translate-y-0.5 transition-all">
              Get Started
            </button>
          </form>
        </div>
      </div>

        <p className="mt-[var(--space-6)] text-sm text-[var(--color-primary-50)]">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </div>
  </div>
</section>


 
    </div>
  );
};



export default StayPilotLanding;


