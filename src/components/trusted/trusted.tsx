'use client'
import React from 'react'

const agents = [
  {
    title: "AI Agent",
    features: [
      "AI CRM",
      "Lead Generation",
      "AI Property Matching",
      "Marketing Automation",
      "Campaign Manager",
      "Broker Dashboard",
    ],
  },
  {
    title: "Marketing AI",
    features: [
      "Ad Generator",
      "Email Automation",
      "Social Media AI",
      "SEO Optimization",
      "Lead Funnels",
      "Analytics Dashboard",
    ],
  },
  {
    title: "Sales AI",
    features: [
      "Auto Lead Followup",
      "AI Call Assistant",
      "Meeting Scheduler",
      "Deal Tracking",
      "Smart Reminders",
      "Client Insights",
    ],
  },
];
interface Card {
  title: string
  desc: string
  img: string
}
const cards: Card[] = [
  {
    title: "AI Lead Qualification Agent",
    desc: "Automatically qualify and segment leads based on behavior, intent, and property preferences.",
    img: "/assets/leadai.png",
  },
  {
    title: "AI Property Matching Agent",
    desc: "Match buyers with the most relevant properties using intelligent AI recommendations.",
    img: "/assets/propertmachingai.png",
  },
  {
    title: "Lead Capture Agent",
    desc: "Capture and organize leads from multiple channels with smart AI tracking.",
    img: "/assets/leadai.png",
  },
  {
    title: "AI Content Creation Agent",
    desc: "Generate high-quality property listings, ads, and marketing content instantly.",
    img: "/assets/propertmachingai.png",
  },
  {
    title: "AI Follow-Up Agent",
    desc: "Automatically follow up with leads at the right time to increase conversions.",
    img: "/assets/brockerdashai.png",
  },
  {
    title: "AI Calling Agent",
    desc: "Automate calls with clients using AI-powered voice interactions and responses.",
    img: "/assets/img-5.png",
  },
  {
    title: "AI Campaign Automation Agent",
    desc: "Run and optimize marketing campaigns across platforms with zero manual effort.",
    img: "/assets/leadai.png",
  },
  {
    title: "Data Mining Agent",
    desc: "Extract valuable insights and trends from real estate data using AI.",
    img: "/assets/brockerdashai.png",
  },
  {
    title: "Social Media Agent",
    desc: "Automate social media posting, engagement, and growth strategies.",
    img: "/assets/marketingai.png",
  },
  {
    title: "AI SEO Content Agent",
    desc: "Create SEO-optimized content to rank higher and attract organic traffic.",
    img: "/assets/leadai.png",
  },
];

function Trusted() {
  // Duplicate agents multiple times for seamless infinite scroll
  const duplicatedAgents = [...cards, ...cards, ...cards, ...cards];

  return (
    <div>
      <section className="py-[var(--space-12)] border-y border-[var(--border-light)]">
        <div className="max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <p className="text-center text-2xl font-semibold text-[var(--color-primary-600)] uppercase tracking-wider">
            Everything You Need to Run a Real Estate Business
          </p>
          <p className="text-center text-sm font-semibold text-[var(--text-tertiary)]">
            EstateAI combines CRM, AI automation, marketing tools, and property matching in one platform.
          </p>
          
       <div className="relative overflow-hidden w-full py-8 sm:py-10">
  
  {/* Gradient masks */}
  <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
  <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />

  {/* Marquee */}
  <div className="flex animate-marquee gap-4 sm:gap-6 hover:[animation-play-state:paused]">

    {duplicatedAgents.map((card, i) => (
      <div
        key={i}
        className="
          min-w-[220px] sm:min-w-[260px] md:min-w-[300px]
          max-w-[220px] sm:max-w-[260px] md:max-w-[300px]
          bg-[var(--color-secondary-100)]
          border border-[var(--color-glass-border)]
          rounded-2xl my-3 sm:my-4
          overflow-hidden
          hover:border-[var(--color-primary-500)]
          hover:-translate-y-1
          transition-all duration-300
        "
      >

        {/* Image */}
        <div className="w-full flex justify-center items-center p-3">
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-[160px] sm:h-[180px] md:h-[220px] object-cover rounded-xl"
          />
        </div>

        {/* Content */}
        <div className="px-4 sm:px-6 pb-4">
          <h3 className="text-base sm:text-lg font-semibold text-[var(--color-primary-600)]">
            {card.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            {card.desc}
          </p>
        </div>

      </div>
    ))}

  </div>
</div>
        </div>
      </section>

      
    </div>
  )
}

export default Trusted