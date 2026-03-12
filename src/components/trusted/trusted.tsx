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

function Trusted() {
  // Duplicate agents multiple times for seamless infinite scroll
  const duplicatedAgents = [...agents, ...agents, ...agents, ...agents];

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
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />
            
            <div className="flex animate-marquee gap-6 hover:[animation-play-state:paused]">
              {duplicatedAgents.map((agent, index) => (
                <div
                  key={index}
                  className="relative min-w-[320px] p-[1px] rounded-xl 
                    bg-gradient-to-br from-blue-500 via-cyan-400 to-indigo-500
                    hover:scale-[1.03] transition duration-500 flex-shrink-0"
                >
                  {/* Inner Card */}
                  <div className="h-full w-full rounded-xl bg-[#0b1120]/90 backdrop-blur-xl p-6 border border-white/10">
                    {/* Header */}
                    <h3 className="text-xl font-semibold text-white mb-5 tracking-wide">
                      {agent.title}
                    </h3>

                    {/* Feature Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {agent.features.map((feature, i) => (
                        <div
                          key={i}
                          className="text-xs font-medium text-cyan-300 
                            border border-cyan-500/30
                            bg-cyan-500/10
                            rounded-md px-3 py-2 text-center
                            hover:bg-cyan-500/20
                            transition"
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute -inset-[1px] rounded-xl blur-lg opacity-30 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 -z-10" />
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