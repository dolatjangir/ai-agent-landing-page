// app/page.tsx or app/leadbot/page.tsx
'use client';

import React, { useEffect, useRef } from 'react';

export default function LeadBotPage() {
  const scoreCardsRef = useRef<HTMLDivElement>(null);
  const statNumbersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate score bars on scroll
    const scoreObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.score-fill').forEach((bar) => {
            const el = bar as HTMLElement;
            const w = el.style.width;
            el.style.width = '0%';
            setTimeout(() => { el.style.width = w; }, 100);
          });
        }
      });
    }, { threshold: 0.3 });

    // Animate stat numbers
    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.animation = 'countUp 0.6s ease both';
        }
      });
    }, { threshold: 0.5 });

    if (scoreCardsRef.current) {
      scoreCardsRef.current.querySelectorAll('.score-card').forEach(c => scoreObserver.observe(c));
    }

    if (statNumbersRef.current) {
      statNumbersRef.current.querySelectorAll('.stat-num').forEach(el => statObserver.observe(el));
    }

    // Smooth hover tilt on feature cards
    const featureCards = document.querySelectorAll('.feature-card:not(.featured)');
    featureCards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = ((e as MouseEvent).clientX - rect.left) / rect.width - 0.5;
        const y = ((e as MouseEvent).clientY - rect.top) / rect.height - 0.5;
        (card as HTMLElement).style.transform = `perspective(600px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg) translateY(-4px)`;
      });
      card.addEventListener('mouseleave', () => {
        (card as HTMLElement).style.transform = '';
      });
    });

    return () => {
      scoreObserver.disconnect();
      statObserver.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden">
      {/* Global Styles for Animations */}
      <style jsx global>{`
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes countUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,102,204,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,204,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

    

      {/* HERO */}
<section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center text-center lg:text-left px-6 pt-28 pb-20 overflow-hidden z-10 gap-12 lg:gap-20">
  {/* Top-left gradient */}
  <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[var(--color-primary-100)] via-[var(--color-primary-50)] to-transparent opacity-60 rounded-full blur-3xl pointer-events-none -translate-x-1/3 -translate-y-1/3" />

  {/* Bottom-right gradient */}
  <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[var(--color-secondary-200)] via-[var(--color-secondary-100)] to-transparent opacity-50 rounded-full blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3" />

  {/* Center glow */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--color-primary-500)]/10 rounded-full blur-3xl pointer-events-none" />

  {/* Background gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-50)] via-white to-[var(--color-secondary-50)] opacity-80 pointer-events-none" />

  {/* TEXT CONTENT */}
  <div className="relative z-10 max-w-2xl flex flex-col items-center lg:items-start">

    <div className="inline-flex items-center gap-2 bg-[var(--color-primary-50)] border border-[var(--color-primary-200)] rounded-full px-4 py-1.5 text-xs font-mono text-[var(--color-primary-600)] tracking-widest uppercase mb-9 animate-[fadeSlideDown_0.8s_ease_both]">
      <span className="w-1.5 h-1.5 bg-[var(--color-primary-500)] rounded-full animate-[pulse_2s_ease_infinite]" />
      Lead Qualification Agent — AI-Powered
    </div>

    {/* Robot label */}
    <div className="relative mb-12 animate-[fadeSlideDown_0.8s_0.1s_ease_both]">
      <div className="absolute -bottom-3.5 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 bg-white border border-[var(--color-primary-600)] rounded-full px-3.5 py-1.5 flex items-center gap-1.5 whitespace-nowrap text-xs font-mono text-[var(--color-primary-600)] shadow-lg">
        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-[pulse_1.5s_ease_infinite]" />
        Analyzing 247 leads right now
      </div>
    </div>

    <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-6 max-w-3xl animate-[fadeSlideDown_0.8s_0.2s_ease_both]">
      Your Smartest<br />
      <span className="bg-gradient-to-r from-[var(--color-primary-700)] to-[var(--color-primary-600)] bg-clip-text text-transparent">
        Sales Rep
      </span>{" "}
      Never Sleeps
    </h1>

    <p className="text-lg text-slate-500 max-w-xl leading-relaxed font-light mb-12 animate-[fadeSlideDown_0.8s_0.3s_ease_both]">
      LeadBot AI qualifies, scores, and routes inbound leads 24/7 — so your team closes deals instead of chasing dead ends.
    </p>

    <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-[fadeSlideDown_0.8s_0.4s_ease_both]">
      <a
        href="#"
        className="inline-flex items-center gap-2 bg-[var(--color-primary-700)] text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-[var(--color-primary-500)] transition-all border border-[var(--color-primary-500)] shadow-lg shadow-[var(--color-primary-500)]/25 hover:shadow-[var(--color-primary-500)]/40 hover:-translate-y-0.5"
      >
        🚀 Deploy LeadBot Free
      </a>

      <a
        href="#how"
        className="inline-flex items-center gap-2 bg-transparent text-slate-500 px-8 py-3.5 rounded-xl font-semibold text-sm border border-slate-200 hover:border-[var(--color-primary-300)] hover:text-slate-900 hover:bg-[var(--color-primary-50)]/50 transition-all"
      >
        ▶ See it in action
      </a>
    </div>
  </div>

  {/* ROBOT IMAGE */}
<div className="relative z-10 w-full lg:w-1/2 flex justify-center">
  <div className="w-full max-w-[500px]">
    <img
      src="/assets/lead-hero-robo.png"
      alt="LeadBot AI Robot"
      className="w-full h-auto object-contain"
    />
  </div>
</div>
</section>

      {/* STATS BAR */}
      <div ref={statNumbersRef} className="relative z-10 flex flex-wrap justify-center gap-0 px-6 -mt-10 mb-20 animate-[fadeSlideDown_0.8s_0.5s_ease_both]">
        {[
          { num: '94%', label: 'Qualification Accuracy' },
          { num: '3.2×', label: 'More Demos Booked' },
          { num: '11s', label: 'Avg. Response Time' },
          { num: '80%', label: 'Less SDR Busywork' }
        ].map((stat, idx) => (
          <div key={idx} className={`text-center px-8 md:px-14 py-8 bg-white/80 backdrop-blur-sm border-y border-slate-200 hover:bg-blue-50/30 transition-colors ${idx === 0 ? 'border-l rounded-l-xl' : ''} ${idx === 3 ? 'border-r rounded-r-xl' : 'border-r'} ${idx > 0 && idx < 3 ? 'border-r' : ''}`}>
            <div className="stat-num text-3xl md:text-4xl font-extrabold text-[var(--color-primary-700)] tracking-tight mb-1">{stat.num}</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent relative z-10 my-16" />

      {/* HOW IT WORKS */}
     
<section id="features" className="relative z-10 px-6 py-24 max-w-6xl mx-auto">
   <div className="flex items-center justify-between gap-8">
  
  <div className="flex-1">
    <p className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-blue-500 mb-5">
      <span className="w-6 h-px bg-blue-600" />
      Core Capabilities
    </p>

    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4 text-[var(--color-primary-700)]">
      Everything Your SDR Team<br />Wishes They Could Do
    </h2>

    <p className="text-slate-500 text-lg leading-relaxed font-light mb-16 max-w-xl">
      Built for speed, accuracy, and scale — LeadBot combines AI reasoning with structured sales methodology.
    </p>
  </div>

  <div className="shrink-0 w-full max-w-[400px]">
    <img
      src="/assets/sdr-robo.png"
      alt="SDR Robot"
      className="w-full h-auto object-contain"
    />
  </div>

</div>
        <div className="relative">
<span className="absolute  -top-[80px] text-7xl drop-shadow-[0_0_30px_rgba(51,153,255,0.5)] ">
                <img width={150} height={150} src="/assets/two-side-hand-robo.png"/></span>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured card with terminal */}
          <div className="feature-card featured lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-white to-blue-50/50 border border-blue-200 rounded-2xl p-9 hover:border-blue-300 transition-all hover:shadow-xl hover:shadow-blue-500/10 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-700 via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div>
              <div className="w-13 h-13 bg-blue-100 border border-blue-300 rounded-xl flex items-center justify-center text-2xl mb-5">🧠</div>
              <h3 className="font-bold text-xl text-slate-900 mb-2">Intelligent BANT Qualification</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-light mb-4">
                LeadBot conducts a nuanced sales conversation using proven BANT, MEDDIC, and CHAMP frameworks. It adapts tone and depth based on the prospect's seniority, industry, and engagement level — mimicking your best SDR.
              </p>
              <span className="inline-block bg-blue-50 border border-blue-200 rounded-md px-2.5 py-1 text-xs font-mono text-blue-600">
                BANT · MEDDIC · CHAMP · SPICED
              </span>
            </div>
            
            <div className="flex flex-col items-center justify-center gap-5">
              
              
              {/* Terminal */}
              <div className="w-full bg-slate-900 border border-slate-700 rounded-xl overflow-hidden font-mono text-xs">
                <div className="bg-slate-800 px-4 py-2.5 flex items-center gap-1.5 border-b border-slate-700">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <span className="text-slate-400 text-xs ml-2">leadbot-qualify.ts</span>
                </div>
                <div className="p-5 text-blue-200 leading-7">
                  <span className="block"><span className="text-blue-500">›</span> Analyzing prospect profile...</span>
                  <span className="block text-slate-400">  Company: Acme Corp (Series B)</span>
                  <span className="block text-slate-400">  Team: 48 SDRs, $2.4M ARR</span>
                  <span className="block"><span className="text-blue-500">›</span> BANT score: <span className="text-blue-300 font-semibold">87 / 100</span></span>
                  <span className="block text-green-400">  ✓ Budget confirmed: $50k+/yr</span>
                  <span className="block text-green-400">  ✓ Authority: VP Sales</span>
                  <span className="block text-yellow-400">  ~ Timeline: Q2 (soft)</span>
                  <span className="block"><span className="text-blue-500">›</span> Routing to AE: Sarah K.<span className="inline-block w-2 h-3.5 bg-blue-400 ml-0.5 animate-[pulse_1s_steps(1)_infinite]" /></span>
                </div>
              </div>
            </div>
          </div>

          {[
            { icon: '⚡', title: 'Real-Time Lead Scoring', desc: 'Dynamic scoring that updates as the conversation evolves. Firmographic enrichment via Clearbit, Apollo, and LinkedIn — automatically.', tag: '150+ Signals' },
            { icon: '🎯', title: 'Intent Detection', desc: 'Detect buying signals in emails, chat, and web behaviour. Identify high-intent visitors before they even fill a form.', tag: 'Behavioural AI' },
            { icon: '📅', title: 'Auto Demo Booking', desc: 'Hot leads are offered a calendar slot mid-conversation. Syncs with Calendly, Cal.com, or your native CRM calendar in real time.', tag: 'Calendly · Cal.com · HubSpot' },
            { icon: '🔁', title: 'Nurture Sequencing', desc: 'Warm leads that aren\'t ready yet? LeadBot drops them into smart email sequences based on their specific objections and interests.', tag: 'Personalised Drip' }
          ].map((feature, idx) => (
            <div key={idx} className="feature-card bg-white border border-slate-200 rounded-2xl p-9 hover:border-blue-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 transition-all relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-700 via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-13 h-13 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-center text-2xl mb-5">{feature.icon}</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-light mb-4">{feature.desc}</p>
              <span className="inline-block bg-blue-50 border border-blue-200 rounded-md px-2.5 py-1 text-xs font-mono text-blue-600">{feature.tag}</span>
            </div>
          ))}
        </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent relative z-10 my-16" />

      {/* FEATURES */}
       <section id="how" className="relative z-10 px-6 py-24 max-w-6xl mx-auto">
     <div className='flex flex-row-reverse justify-between items-center'>  <div>
        <p className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-blue-500 mb-5">
          <span className="w-6 h-px bg-blue-600" />
          How it works
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4 text-[var(--color-primary-700)]">
          From Stranger to Qualified Lead<br />in Under 60 Seconds
        </h2>
        <p className="text-slate-500 text-lg leading-relaxed font-light mb-16 max-w-xl">
          LeadBot intercepts every inbound signal, runs a deep qualification interview, and hands your reps a warm, scored prospect.
        </p>
        </div>
        <img width={400} height={400} src="/assets/stranger-robo.png"/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-slate-200 rounded-2xl overflow-hidden border border-slate-200">
          {[
            { num: '01', icon: '📡', title: 'Lead Enters the Funnel', desc: 'Form submissions, chat, email, LinkedIn DMs — LeadBot watches every channel and intercepts the moment someone shows intent.' },
            { num: '02', icon: '💬', title: 'Conversational Interview', desc: 'A natural, GPT-powered conversation collects BANT signals (Budget, Authority, Need, Timeline) without feeling like a questionnaire.' },
            { num: '03', icon: '📊', title: 'AI Lead Scoring', desc: '150+ data points, firmographics, behavioural cues, and intent signals are synthesised into a 0–100 qualification score.' },
            { num: '04', icon: '⚡', title: 'Instant Smart Routing', desc: 'Hot leads go straight to your best closers. Warm leads enter nurture sequences. Cold leads get deprioritised automatically.' }
          ].map((step, idx) => (
            <div key={idx} className="bg-white p-10 relative hover:bg-slate-50 transition-colors group">
              <div className="text-xs font-mono text-blue-600 tracking-widest mb-5">{step.num} / {['CAPTURE', 'ENGAGE', 'SCORE', 'ROUTE'][idx]}</div>
              <span className="text-4xl mb-5 block drop-shadow-[0_0_12px_rgba(51,153,255,0.4)]">{step.icon}</span>
              <div className="font-bold text-lg text-slate-900 mb-2">{step.title}</div>
              <p className="text-sm text-slate-500 leading-relaxed font-light">{step.desc}</p>
              {idx < 3 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3.5 -translate-y-1/2 w-7 h-7 bg-white border border-blue-200 rounded-full items-center justify-center text-blue-500 text-sm font-bold z-10 shadow-sm">
                  ›
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent relative z-10 my-16" />

      {/* PIPELINE */}
      <section id="pipeline" className="relative z-10 bg-white border border-slate-200 rounded-3xl p-10 md:p-16 mx-6 max-w-6xl xl:mx-auto overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <p className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-blue-500 mb-5">
          <span className="w-6 h-px bg-blue-600" />
          Live Pipeline
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-2 text-[var(--color-primary-700)] ">
          Watch Leads Flow Through<br />the Qualification Engine
        </h2>
        <p className="text-slate-500 text-lg leading-relaxed font-light mb-12 max-w-xl">
          Every lead is classified, enriched, scored, and routed in seconds.
        </p>

        <div className="flex flex-wrap lg:flex-nowrap items-stretch gap-0 rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm">
          {[
            { icon: '📥', label: 'Inbound', sub: 'Form / Chat / Email' },
            { icon: '🔍', label: 'Enrich', sub: 'Clearbit + Apollo' },
            { icon: '💬', label: 'Interview', sub: 'BANT Conversation' },
            { icon: '🧮', label: 'Score', sub: '0–100 AI Score' },
            { icon: '🚦', label: 'Classify', sub: 'Hot / Warm / Cold' },
            { icon: '📤', label: 'Route', sub: 'CRM + AE Alert' }
          ].map((stage, idx) => (
            <div key={idx} className={`flex-1 min-w-[140px] p-7 text-center relative bg-white hover:bg-blue-50/30 transition-colors ${idx < 5 ? 'border-r border-slate-200' : ''}`}>
              {idx < 5 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-slate-200 z-10 hidden lg:block" />
              )}
              <span className="text-3xl mb-3 block drop-shadow-[0_0_8px_rgba(51,153,255,0.4)]">{stage.icon}</span>
              <div className="font-bold text-sm text-slate-900 mb-1">{stage.label}</div>
              <div className="text-xs text-slate-400 font-mono">{stage.sub}</div>
            </div>
          ))}
        </div>

        {/* Lead Score Preview */}
        <div ref={scoreCardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {/* Hot Lead */}
          <div className="score-card bg-slate-50 border border-slate-200 rounded-xl p-7 hover:border-blue-300 transition-colors">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5 font-bold text-slate-900">
                <div className="w-10 h-10 bg-blue-100 border border-blue-200 rounded-full flex items-center justify-center text-xl">👨‍💼</div>
                James Whitfield
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-red-50 text-red-500 border border-red-200 font-medium">🔥 HOT</span>
            </div>
            <div className="text-5xl font-extrabold tracking-tight text-red-500 mb-1">92</div>
            <div className="text-slate-400 text-xs font-mono mb-4">/100 qualification score</div>
            
            {[
              { label: 'Budget Match', val: '95%', width: '95%', color: 'high' },
              { label: 'Authority', val: '100%', width: '100%', color: 'high' },
              { label: 'Timeline', val: '80%', width: '80%', color: 'high' }
            ].map((meter, idx) => (
              <div key={idx} className="mb-3.5">
                <div className="flex justify-between text-xs text-slate-400 font-mono mb-1.5">
                  <span>{meter.label}</span>
                  <span>{meter.val}</span>
                </div>
                <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div className={`score-fill h-full rounded-full bg-gradient-to-r ${meter.color === 'high' ? 'from-red-600 to-red-400' : 'from-orange-600 to-orange-400'} transition-all duration-1000`} style={{ width: meter.width }} />
                </div>
              </div>
            ))}
          </div>

          {/* Warm Lead */}
          <div className="score-card bg-slate-50 border border-slate-200 rounded-xl p-7 hover:border-blue-300 transition-colors">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5 font-bold text-slate-900">
                <div className="w-10 h-10 bg-blue-100 border border-blue-200 rounded-full flex items-center justify-center text-xl">👩‍💻</div>
                Priya Sharma
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-orange-50 text-orange-500 border border-orange-200 font-medium">🟡 WARM</span>
            </div>
            <div className="text-5xl font-extrabold tracking-tight text-orange-500 mb-1">61</div>
            <div className="text-slate-400 text-xs font-mono mb-4">/100 qualification score</div>
            
            {[
              { label: 'Budget Match', val: '55%', width: '55%' },
              { label: 'Authority', val: '70%', width: '70%' },
              { label: 'Timeline', val: '45%', width: '45%' }
            ].map((meter, idx) => (
              <div key={idx} className="mb-3.5">
                <div className="flex justify-between text-xs text-slate-400 font-mono mb-1.5">
                  <span>{meter.label}</span>
                  <span>{meter.val}</span>
                </div>
                <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div className="score-fill h-full rounded-full bg-gradient-to-r from-orange-600 to-orange-400 transition-all duration-1000" style={{ width: meter.width }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section id="integrations" className="relative z-10 px-6 py-24 max-w-6xl mx-auto">
      <div className="flex flex-row justify-between items-center">
        <div>  <p className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-blue-500 mb-5">
          <span className="w-6 h-px bg-blue-600" />
          Integrations
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4 text-[var(--color-primary-700)] ">
          Plugs Into Your Entire<br />Revenue Stack
        </h2>
        <p className="text-slate-500 text-lg leading-relaxed font-light mb-12 max-w-xl">
          LeadBot connects to your CRM, calendar, communication tools, and data enrichment providers out of the box.
        </p></div>
        <img width={400} height={400} src="/assets/plugin-stack-robo.png"/>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { icon: '🟠', name: 'HubSpot' },
            { icon: '🔵', name: 'Salesforce' },
            { icon: '📅', name: 'Calendly' },
            { icon: '💌', name: 'Mailchimp' },
            { icon: '💬', name: 'Slack' },
            { icon: '🔗', name: 'LinkedIn' },
            { icon: '📧', name: 'Gmail' },
            { icon: '🌐', name: 'Clearbit' },
            { icon: '🚀', name: 'Apollo.io' },
            { icon: '⚡', name: 'Zapier' }
          ].map((integration, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:border-blue-300 hover:bg-slate-50 hover:-translate-y-1 transition-all cursor-default">
              <span className="text-3xl mb-2 block">{integration.icon}</span>
              <div className="text-sm text-slate-600 font-medium">{integration.name}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent relative z-10 my-16" />

      {/* TESTIMONIALS */}
      <section className="relative z-10 px-6 py-24 max-w-6xl mx-auto">
        <div className="flex flex-row-reverse  justify-between items-center">
          <div><p className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-blue-500 mb-5">
          <span className="w-6 h-px bg-blue-600" />
          Social Proof
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4 text-[var(--color-primary-700)] ">
          Trusted by High-Growth<br />Sales Teams
        </h2>
        <p className="text-slate-500 text-lg leading-relaxed font-light mb-12 max-w-xl">
          From seed-stage startups to enterprise revenue orgs — LeadBot works at every scale.
        </p>
</div>
<img width={400} height={400} src="/assets/trusted-robo.png"/>
</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { stars: '⭐⭐⭐⭐⭐', text: '"We deployed LeadBot in 2 hours and booked 40% more demos the very first week. Our SDRs now only talk to leads that are genuinely interested."', avatar: '👨', name: 'Marcus Chen', title: 'VP Sales, Finova (Series B)' },
            { stars: '⭐⭐⭐⭐⭐', text: '"The BANT scoring is scarily accurate. It picks up on things our reps miss — timeline hesitation, indirect budget signals, even tone shifts."', avatar: '👩', name: 'Danielle Okonkwo', title: 'Head of RevOps, Stackr' },
            { stars: '⭐⭐⭐⭐⭐', text: '"We reduced our cost-per-qualified-lead by 62% in 3 months. LeadBot basically paid for itself in the first two weeks."', avatar: '🧑', name: 'Raj Patel', title: 'Founder & CEO, Lumenra' }
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-300 transition-colors">
              <div className="text-sm mb-4 tracking-widest">{testimonial.stars}</div>
              <p className="text-sm text-slate-500 leading-7 font-light italic mb-6">{testimonial.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center text-lg border border-blue-300">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900">{testimonial.name}</div>
                  <div className="text-xs text-slate-400">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 text-center px-6 py-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex justify-center gap-4 mb-12">
          <span className="text-4xl opacity-70 drop-shadow-[0_0_12px_rgba(51,153,255,0.4)] animate-[float_4s_ease-in-out_infinite]"><img width={50} height={50} src="/assets/head-robo.png"/></span>
          <span className="text-5xl drop-shadow-[0_0_12px_rgba(51,153,255,0.4)] animate-[float_4s_ease-in-out_infinite]" style={{ animationDelay: '0.7s' }}><img width={80} height={80} src="/assets/head-robo.png"/></span>
          <span className="text-4xl opacity-70 drop-shadow-[0_0_12px_rgba(51,153,255,0.4)] animate-[float_4s_ease-in-out_infinite]" style={{ animationDelay: '1.4s' }}><img width={50} height={50} src="/assets/head-robo.png"/></span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-5 text-[var(--color-primary-700)] ">
          Your Pipeline Won't<br />Fill Itself
        </h2>
        <p className="text-slate-500 text-lg font-light mb-12 max-w-md mx-auto leading-relaxed">
          Deploy LeadBot in under 10 minutes. No code required. Start qualifying every single lead on autopilot — starting today.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto mb-5">
          <input 
            type="email" 
            placeholder="your@company.com" 
            className="flex-1 bg-white border border-slate-200 text-slate-900 px-5 py-3.5 rounded-xl text-sm outline-none focus:border-blue-500 transition-colors placeholder:text-slate-400"
          />
          <a href="#" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3.5 rounded-xl font-bold text-sm hover:bg-blue-500 transition-all border border-blue-500 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 whitespace-nowrap">
            Deploy Now 🚀
          </a>
        </div>
        <p className="text-xs text-slate-400 font-mono">Free 14-day trial · No credit card · Cancel anytime</p>
      </section>

   
    </main>
  );
}