import { BarChart3, Calendar, Globe, MessageSquare, TrendingUp, Users } from 'lucide-react';
import React from 'react'
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
function Features() {
  return (
    <div>
        <section id="features" className="py-[var(--space-24)] ">
        <div className="max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <div className="text-center max-w-3xl mx-auto mb-[var(--space-16)]">
            <h2 className="text-4xl font-bold mb-[var(--space-4)] text-[var(--text-primary)]">Everything You Need to Scale</h2>
            <p className="text-xl text-[var(--text-secondary)] ">Powerful tools designed specifically for modern property managers and hospitality entrepreneurs.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-8)]">
            {features.map((feature, idx) => (
              <div key={idx} className="group relative bg-[var(--color-secondary-100)] rounded-[var(--radius-3xl)] p-[var(--space-8)] border border-[var(--border-light)] shadow-lg hover:shadow-xl transition-all duration-[var(--duration-normal)] hover:-translate-y-1">
                <div 
                  className="w-14 h-14 rounded-[var(--radius-2xl)] flex items-center justify-center text-[var(--text-inverse)] shadow-lg mb-[var(--space-6)] group-hover:scale-110 transition-transform duration-[var(--duration-normal)]"
                  style={{ background: feature.gradient }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-[var(--space-3)] text-[var(--text-primary)]">{feature.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features
