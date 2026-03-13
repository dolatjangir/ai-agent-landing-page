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
    title: "AI Property Matching",
    desc: "Our AI automatically finds the best property for every client.",
    img: "/assets/propertmachingai.png",
  },
  {
    title: "Lead Generation",
    desc: "Capture and qualify leads using intelligent AI workflows.",
    img: "/assets/leadai.png",
  },
  {
    title: "Marketing Automation",
    desc: "Automate campaigns and reach buyers across platforms.",
    img: "/assets/marketingai.png",
  },
  {
    title: "Broker Dashboard",
    desc: "Real-time analytics and performance insights for brokers.",
    img: "/assets/brockerdashai.png",
  },
    {
    title: "AI Client Relation",
    desc: "Our AI automatically ,make the best client for every client.",
    img: "/assets/img-5.png",
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
          
          <div className="relative overflow-hidden w-full py-10">
            {/* Gradient masks for smooth fade effect on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />
            
            <div className="flex animate-marquee gap-6 hover:[animation-play-state:paused]">
             {duplicatedAgents.map((card, i) => (
          <div
            key={i}
            className="min-w-[300px] bg-[var(--color-secondary-100)]
            border border-[var(--color-glass-border)] rounded-2xl my-4
            overflow-hidden hover:border-[var(--color-primary-500)]
            hover:-translate-y-1 transition-all duration-300"
          >

            {/* Image */}
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-[220px] object-cover p-2"
            />

            {/* Content */}
            <div className="px-6 py-4">
              <h3 className="text-lg font-semibold text-[var(--color-primary-500)]">
                {card.title}
              </h3>

              <p className="text-sm text-[var(--color-primary-500)] mt-2">
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