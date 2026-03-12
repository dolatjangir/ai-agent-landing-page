
"use client"
import React from "react"
import Link from "next/link"
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
} from "lucide-react"

function Footer() {
  return (
    <footer className="bg-linear-to-b from-[var(--bg-secondary)] to-[var(--bg-tertiary)] text-[var(--text-secondary)] pt-[var(--space-6)] pb-[var(--space-10)] border-t border-neutral-700">
      <div className="max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">

        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-[var(--space-12)] mb-[var(--space-14)]">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-[var(--space-2)]">
              <img
                src="/assets/green-logo.png"
                width={200}
                height={70}
                alt="BNB"
              />
            </Link>

            <p className="max-w-sm mb-[var(--space-3)] text-[var(--text-secondary)]">
              The modern platform for hotel owners, Airbnb hosts, and property
              managers. Automate operations, increase bookings, and grow revenue.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {[Twitter, Linkedin, Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white border border-[var(--border-light)]
                  flex items-center justify-center text-[var(--text-primary)]
                  hover:bg-[var(--color-primary-600)] hover:text-white
                  transition-all duration-200 shadow-sm"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-[var(--text-primary)] font-semibold mb-[var(--space-2)]">
              Platform
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/features/contact-management" className="hover:text-[var(--color-primary-600)]">Contact Management</Link></li>
              <li><Link href="/features/lead-scoring" className="hover:text-[var(--color-primary-600)]">Lead Scoring</Link></li>
              <li><Link href="/features/sales-pipeline" className="hover:text-[var(--color-primary-600)]">Sales Pipeline</Link></li>
              <li><Link href="/features/workflow-automation" className="hover:text-[var(--color-primary-600)]">Automation</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-[var(--text-primary)] font-semibold mb-[var(--space-4)]">
              Solutions
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/industry/enterprise" className="hover:text-[var(--color-primary-600)]">Enterprise</Link></li>
              <li><Link href="/industry/startup" className="hover:text-[var(--color-primary-600)]">Startups</Link></li>
              <li><Link href="/industry/agencies" className="hover:text-[var(--color-primary-600)]">Agencies</Link></li>
              <li><Link href="/industry/sales-team" className="hover:text-[var(--color-primary-600)]">Sales Teams</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[var(--text-primary)] font-semibold mb-[var(--space-4)] ">
              Resources
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/resources/documentation" className="hover:text-[var(--color-primary-600)]">Documentation</Link></li>
              <li><Link href="/resources/video-tutorials" className="hover:text-[var(--color-primary-600)]">Video Tutorials</Link></li>
              <li><Link href="/resources/help-center" className="hover:text-[var(--color-primary-600)]">Help Center</Link></li>
              <li><Link href="/about-us" className="hover:text-[var(--color-primary-600)]">about-us</Link></li>
            </ul>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[var(--bg-primary)] border border-[var(--border-light)] rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6 mb-[var(--space-6)] mt-2 shadow-sm">
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">
              Ready to grow your business?
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              Start your free trial today. No credit card required.
            </p>
          </div>

          <Link
            href="/signup"
            className="flex items-center gap-2 px-6 py-3 rounded-lg
            bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)]
            text-white font-semibold transition-all shadow-lg"
          >
            Start Free Trial
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Bottom */}
        <div className="pt-3 border-t border-[var(--border-light)] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--text-tertiary)]">

          <p>© 2026 BNB Management. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[var(--color-primary-600)]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[var(--color-primary-600)]">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-[var(--color-primary-600)]">
              Cookies
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer

