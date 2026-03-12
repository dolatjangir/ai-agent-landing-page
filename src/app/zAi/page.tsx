"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Building2, ChevronRight, Sparkles } from "lucide-react";
// --- ICONS (Simple SVG Components) ---
const HomeIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const TrendUpIcon = ({ className }: { className?: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

const DollarIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const BoxIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

// --- SUB-COMPONENTS ---

const Header = () => (
  <header className="fixed top-0 w-full z-50 bg-[var(--color-glass)] backdrop-blur-md border-b border-[var(--color-glass-border)] py-4">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <a href="#" className="font-['var(--font-head)] text-xl font-bold text-white flex items-center gap-2">
        <HomeIcon className="text-[var(--color-accent)]" />
        BNB<span className="text-[var(--color-accent)]">Pro</span>
      </a>
      <nav className="hidden md:flex gap-8">
        <a href="#analytics" className="hover:text-[var(--color-accent)] transition-colors">Performance</a>
        <a href="#services" className="hover:text-[var(--color-accent)] transition-colors">Services</a>
        <a href="#about" className="hover:text-[var(--color-accent)] transition-colors">About</a>
        <a href="#contact" className="hover:text-[var(--color-accent)] transition-colors">Contact</a>
      </nav>
      <a href="#contact" className="px-5 py-2 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-indigo-600 text-white font-semibold shadow-[0_4px_15px_var(--color-primary-glow)] border border-transparent hover:shadow-[0_8px_25px_var(--color-primary-glow)] hover:-translate-y-0.5 transition-all">
        Get Audit
      </a>
    </div>
  </header>
);

const Hero = () => (
  <section className="container mx-auto px-4 pt-40 pb-24 grid lg:grid-cols-2 gap-16 items-center relative">
    <div className="hero-content text-center lg:text-left">
       <div className="inline-flex items-center gap-[var(--space-2)] px-[var(--space-4)] py-[var(--space-2)] rounded-[var(--radius-full)] bg-[var(--color-primary-100)] text-[var(--color-primary-700)] text-sm font-semibold">
                      <Sparkles className="w-4 h-4" />
                      <span>Trusted by 10,000+ property managers</span>
                    </div>
      <h1 className="font-['var(--font-head)] text-4xl lg:text-6xl font-bold leading-tight mb-6">
        Turn Your Property Into a <span className="text-[var(--color-primary)] relative">Revenue Engine
          <span className="absolute bottom-1 left-0 w-full h-2 bg-[var(--color-accent)] opacity-30 -z-10 -skew-x-12"></span>
        </span>
      </h1>
      <p className="text-lg text-[var(--color-text-muted)] mb-8 max-w-lg mx-auto lg:mx-0">
        We use data-driven dynamic pricing, automated guest communication, and 5-star hospitality to maximize your Airbnb ROI while you sleep.
      </p>
      <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
        <a href="#contact" className="px-6 py-3 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-indigo-600 text-white font-semibold shadow-[0_4px_15px_var(--color-primary-glow)] hover:-translate-y-0.5 transition-all">
          Start Earning More
        </a>
        <a href="#analytics" className="px-6 py-3 rounded-full border border-[var(--color-glass-border)] text-[var(--color-text-main)] backdrop-blur-sm hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all">
          View Data
        </a>
      </div>
    </div>
    <div className="hero-visual relative">
      <div className="bg-gradient-to-br from-[var(--color-bg-card)] to-[#0f172a] border border-[var(--color-glass-border)] rounded-3xl p-5 shadow-2xl relative z-10 animate-float">
        <Image 
          src="/assets/property.jpeg" 
          alt="Modern Luxury Apartment" 
          width={600} 
          height={400} 
          className="rounded-2xl w-full h-auto object-cover"
        />
        <div className="absolute bottom-10 -left-8 bg-[var(--color-bg-card)] border border-[var(--color-accent)] p-4 rounded-2xl shadow-xl flex items-center gap-4 z-20 animate-float-reverse">
          <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] flex items-center justify-center font-bold text-xl">+</div>
          <div>
            <div className="font-bold text-white text-lg">32% Increase</div>
            <div className="text-xs text-[var(--color-text-muted)]">vs. Traditional Rent</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
const TrustedHero = () => {
  return(
    <>
    {/* Trusted By Section */}
      <section className="py-[var(--space-12)]   container">
        <div className="max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <p className="text-center text-sm font-semibold bg-clip-text text-transparent  bg-gradient-to-r from-white to-[var(--color-text-muted)] uppercase tracking-wider mb-[var(--space-8)]">
            Trusted by leading hospitality brands
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-[var(--space-8)] items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-[var(--duration-slow)]">
            {['Marriott', 'Hilton', 'Airbnb', 'Booking.com', 'Expedia', 'Vrbo'].map((brand) => (
              <div key={brand} className="flex items-center justify-center h-12 text-xl font-bold bg-clip-text text-transparent  bg-gradient-to-r from-white to-[var(--color-text-muted)]  hover:text-[var(--color-primary-100)] transition-colors duration-[var(--duration-fast)]">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>
     </> )
}

const Analytics = () => {
  // Animation logic hook
  useEffect(() => {
    // Animate Bars
    const bars = document.querySelectorAll('.bar-anim');
    bars.forEach((bar: any) => {
      const finalHeight = bar.style.height;
      bar.style.height = '0%';
      setTimeout(() => {
        bar.style.height = finalHeight;
      }, 300);
    });

    // Animate Donut
    const donut = document.querySelector('.donut-chart-anim');
    if (donut) {
      (donut as HTMLElement).style.transform = 'rotate(-90deg) scale(0.8)';
      (donut as HTMLElement).style.opacity = '0';
      setTimeout(() => {
        (donut as HTMLElement).style.transition = 'transform 1s ease-out, opacity 1s ease';
        (donut as HTMLElement).style.transform = 'rotate(-90deg) scale(1)';
        (donut as HTMLElement).style.opacity = '1';
      }, 500);
    }
  }, []);
   const steps = [
    {
      number: "01",
      title: "Connect Properties",
      description: "Import your listings from Airbnb, Booking.com, or add them manually. Setup takes under 5 minutes.",
      bg: "var(--color-primary-100)"
    },
    {
      number: "02",
      title: "Automate Operations",
      description: "Set up smart rules for pricing, messaging, and task assignments. Let the system work for you.",
      bg: "var(--color-secondary-100)"
    },
    {
      number: "03",
      title: "Scale Revenue",
      description: "Watch your occupancy rise and operational costs drop with data-driven insights.",
      bg: "var(--color-primary-50)"
    }
  ];

  return (
    <>
    <section id="analytics" className="py-20 bg-black/20">
      <div className="container mx-auto px-4">
        <h2 className="font-['var(--font-head)] text-3xl md:text-4xl text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[var(--color-text-muted)]">
          Performance by the Numbers
        </h2>
        <p className="text-center text-[var(--color-text-muted)] max-w-2xl mx-auto mb-16 text-lg">
          We don't guess. We analyze market trends in real-time to optimize your pricing and occupancy.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: Bar Chart */}
          <div className="bg-[var(--color-bg-card)] border border-[var(--color-glass-border)] p-8 rounded-2xl hover:border-[var(--color-primary)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[var(--color-text-muted)] text-lg">Monthly Revenue</h3>
              <span className="text-[var(--color-accent)] text-sm flex items-center gap-1">
                <TrendUpIcon /> +18%
              </span>
            </div>
            <div className="flex items-end justify-between h-[150px] gap-2 mt-4">
              {[40, 55, 45, 70, 60, 85, 100].map((h, i) => (
                <div 
                  key={i} 
                  className={`bar-anim flex-1 rounded-t-sm transition-all duration-1000 ease-out ${i === 6 ? 'bg-gradient-to-t from-[var(--color-primary)] to-indigo-400 shadow-[0_0_15px_var(--color-primary-glow)]' : 'bg-slate-700'}`}
                  style={{ height: `${h}%`, animationDelay: `${i * 100}ms` }}
                ></div>
              ))}
            </div>
            <div className="mt-4 flex justify-between text-[var(--color-text-muted)] text-xs">
              <span>Jan</span>
              <span>Jul</span>
            </div>
          </div>

          {/* Card 2: Line Chart */}
          <div className="bg-[var(--color-bg-card)] border border-[var(--color-glass-border)] p-8 rounded-2xl hover:border-[var(--color-primary)] hover:-translate-y-1 transition-all duration-300">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[var(--color-text-muted)] text-lg">Occupancy Rate</h3>
              <span className="text-[var(--color-accent)] text-sm">94% Avg</span>
            </div>
            <div className="h-[150px] w-full relative flex items-end">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 300 150" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="gradientArea" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-accent)" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                <path d="M0,150 L0,100 Q50,80 100,110 T200,60 T300,20 V150 Z" className="fill-[url(#gradientArea)] opacity-30" />
                <path d="M0,100 Q50,80 100,110 T200,60 T300,20" 
                      className="fill-none stroke-[var(--color-accent)] stroke-[3px] stroke-linecap-round animate-draw"
                      style={{ filter: 'drop-shadow(0 4px 6px rgba(16, 185, 129, 0.4))' }} 
                />
              </svg>
            </div>
            <div className="mt-4 text-center text-[var(--color-text-muted)] text-xs">
              Staying above market average
            </div>
          </div>

          {/* Card 3: Donut Chart */}
          <div className="bg-[var(--color-bg-card)] border border-[var(--color-glass-border)] p-8 rounded-2xl hover:border-[var(--color-primary)] hover:-translate-y-1 transition-all duration-300">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[var(--color-text-muted)] text-lg">Operational Efficiency</h3>
              <span className="text-[var(--color-accent)] text-sm">Automated</span>
            </div>
            <div className="h-[150px] flex items-center justify-center relative">
              <div 
                className="donut-chart-anim w-[120px] h-[120px] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                style={{ background: 'conic-gradient(var(--color-primary) 0% 85%, #334155 85% 100%)' }}
              >
                <div className="w-[90px] h-[90px] bg-[var(--color-bg-card)] rounded-full flex flex-col items-center justify-center rotate-90">
                  <span className="text-2xl font-bold text-white">85%</span>
                  <small className="text-[10px] text-[var(--color-text-muted)]">Time Saved</small>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center text-[var(--color-text-muted)] text-sm">
              From Check-in to Cleaning
            </div>
          </div>
        </div>
      </div>
    </section>
     {/* How It Works */}
          <section id="how-it-works" className="py-[var(--space-24)] container">
            <div className="max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
              <div className="text-center max-w-3xl mx-auto mb-[var(--space-16)]">
                <h2 className="text-4xl font-bold mb-[var(--space-4)] text-[var(--color-text-muted)]">Get Started in Minutes</h2>
                <p className="text-xl text-[var(--text-secondary)]">Three simple steps to transform your property management.</p>
              </div>
    
              <div className="grid lg:grid-cols-3 gap-[var(--space-8)]">
                {steps.map((step, idx) => (
                  <div key={idx} className="relative group">
                    <div 
                      className="rounded-[var(--radius-3xl)] group-hover:bg-[var(--color-bg-card)]/50 p-[var(--space-8)] h-full bg-[var(--color-bg-card)]  border border-[var(--border-light)] group-hover:border-[var(--border-light)]/50"
                     
                    >
                      <div className="text-6xl font-bold text-[var(--text-inverse)] mb-[var(--space-6)]">{step.number}</div>
                      <h3 className="text-2xl font-bold mb-[var(--space-4)] text-[var(--color-text-muted)]/90">{step.title}</h3>
                      <p className="text-[var(--text-secondary)] leading-relaxed">{step.description}</p>
                    </div>
                    {idx < 2 && (
                      <div className="hidden lg:block absolute top-1/2 -right-5 group-hover:-right-7 transition-all transform -translate-y-1/2 -z-10">
                        <ChevronRight className="w-8 h-8 text-[var(--border-dark)]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
</>
  );
};

const Services = () => (
  <section id="services" className="container mx-auto px-4 py-24">
    <h2 className="font-['var(--font-head)] text-3xl md:text-4xl text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[var(--color-text-muted)]">
      Premium Services
    </h2>
    <p className="text-center text-[var(--color-text-muted)] max-w-2xl mx-auto mb-16 text-lg">
      Everything you need to run a 5-star short-term rental business.
    </p>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        { icon: <DollarIcon />, title: "Dynamic Pricing", desc: "Our algorithm adjusts daily rates based on local demand, events, and seasonality to ensure maximum revenue." },
        { icon: <BoxIcon />, title: "Professional Cleaning", desc: "5-star hotel standard cleaning with linen service and restocking of amenities after every stay." },
        { icon: <ClockIcon />, title: "24/7 Guest Support", desc: "We handle all guest communication, screening, and inquiries around the clock. You just get paid." },
      ].map((service, i) => (
        <div key={i} className="bg-white/5 border border-[var(--color-glass-border)] p-10 rounded-3xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 flex items-center justify-center mb-6 text-[var(--color-primary)]">
            {service.icon}
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{service.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const CTA = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you! We will contact ${email} shortly.`);
    setEmail("");
  };

  return (
    <section id="contact" className="container mx-auto px-4 py-20 text-center">
      <div className="bg-gradient-to-br from-[var(--color-bg-card)] to-[var(--color-bg-dark)] border border-[var(--color-primary)] rounded-[30px] p-12 relative overflow-hidden">
       
        
        <div className="relative z-10">
          <h2 className="font-['var(--font-head)] text-3xl md:text-4xl mb-4">Ready to Optimize?</h2>
          <p className="text-[var(--color-text-muted)] max-w-xl mx-auto mb-8">
            Join 500+ property owners earning more with BNB Pro. Get a free rental income estimate today.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2 flex-wrap justify-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 rounded-full border border-[var(--color-glass-border)] bg-white/5 text-white outline-none min-w-[200px] focus:border-[var(--color-primary)]"
            />
            <button type="submit" className="px-6 py-3 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-indigo-600 text-white font-semibold shadow-[0_4px_15px_var(--color-primary-glow)] hover:shadow-[0_8px_25px_var(--color-primary-glow)] hover:-translate-y-0.5 transition-all">
              Get Started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  
  <footer className="bg-transparent text-[var(--color-text-muted)] py-[var(--space-16)] border-t border-[var(--color-glass-border)]">
   <div className="max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-[var(--space-12)] mb-[var(--space-12)]">
      
      <div className="lg:col-span-2">
        <div className="flex items-center gap-[var(--space-2)] mb-[var(--space-6)]">
          <div 
            className="w-10 h-10 rounded-[var(--radius-xl)] flex items-center justify-center"
            style={{ background: 'var(--color-accent)' }}
          >
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-white">
            Stay<span className="text-[var(--color-accent)]">Pilot</span>
          </span>
        </div>

        <p className="text-[var(--color-text-muted)] mb-[var(--space-6)] max-w-sm">
          The modern platform for hotel owners, Airbnb hosts, and property managers. Automate, optimize, and grow.
        </p>

        <div className="flex gap-[var(--space-4)]">
          {['Twitter', 'LinkedIn', 'Instagram', 'Facebook'].map((social) => (
            <a
              key={social}
              href="#"
              className="w-10 h-10 rounded-full bg-[var(--color-glass-border)] flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors duration-[var(--duration-fast)]"
            >
              <span className="sr-only">{social}</span>
              <div className="w-5 h-5 bg-current rounded-sm text-white" />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-[var(--space-4)]">Product</h4>
        <ul className="space-y-[var(--space-3)]">
          {['Features', 'Pricing', 'Integrations', 'API', 'Updates'].map((item) => (
            <li key={item}>
              <a href="#" className="hover:text-[var(--color-primary)] transition-colors duration-[var(--duration-fast)]">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-[var(--space-4)]">Company</h4>
        <ul className="space-y-[var(--space-3)]">
          {['About', 'Blog', 'Careers', 'Press', 'Partners'].map((item) => (
            <li key={item}>
              <a href="#" className="hover:text-[var(--color-primary)] transition-colors duration-[var(--duration-fast)]">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-[var(--space-4)]">Support</h4>
        <ul className="space-y-[var(--space-3)]">
          {['Help Center', 'Contact', 'Status', 'Privacy', 'Terms'].map((item) => (
            <li key={item}>
              <a href="#" className="hover:text-[var(--color-primary)] transition-colors duration-[var(--duration-fast)]">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="pt-[var(--space-8)] border-t border-[var(--color-glass-border)] flex flex-col md:flex-row justify-between items-center gap-[var(--space-4)]">
      <p className="text-sm text-[var(--color-text-muted)]">
        © 2026 StayPilot Inc. All rights reserved.
      </p>

      <div className="flex items-center gap-[var(--space-6)] text-sm text-[var(--color-text-muted)]">
        <a href="#" className="hover:text-[var(--color-primary)] transition-colors duration-[var(--duration-fast)]">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-[var(--color-primary)] transition-colors duration-[var(--duration-fast)]">
          Terms of Service
        </a>
        <a href="#" className="hover:text-[var(--color-primary)] transition-colors duration-[var(--duration-fast)]">
          Cookie Settings
        </a>
      </div>
    </div>
  </div>
    <div className="text-center pt-8 border-t border-[var(--color-glass-border)]">
      &copy; 2023 BNB Property Management. All rights reserved.
    </div>
  </footer>
);

// --- MAIN PAGE ---
export default function home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <TrustedHero/>
      <Analytics />
      <Services />
      <CTA />
      <Footer />
    </main>
  );
}