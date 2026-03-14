"use client";

import { useState, useEffect, CSSProperties, FC, MouseEvent } from "react";

/* ─── Types ──────────────────────────────────────────────────────────────── */
type AgentStatus = "active" | "busy" | "idle";

interface Agent {
  id: number;
  name: string;
  type: string;
  icon: string;
  status: AgentStatus;
  metric: string;
  metricLabel: string;
  task: string;
  bars: number[];
  description: string;
}

interface StatusConfig {
  label: string;
  dot: string;
  bg: string;
  border: string;
  text: string;
}

interface MiniChartProps {
  bars: number[];
  active: boolean;
}

interface AgentCardProps {
  agent: Agent;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

interface DetailPanelProps {
  agent: Agent;
  onClose: () => void;
}

interface SysStatItem {
  label: string;
  val: string;
  dot: string | null;
}

/* ─── Agent data ─────────────────────────────────────────────────────────── */
const AGENTS: Agent[] = [
  {
    id: 1,
    name: "Lease Analyzer",
    type: "Document Intelligence",
    icon: "📋",
    status: "active",
    metric: "1.2k",
    metricLabel: "Leases / day",
    task: "Reviewing contract #LX-4821...",
    bars: [4, 7, 5, 8, 9, 6, 8, 10, 7, 9, 8, 10],
    description:
      "Reads, classifies, and extracts key clauses from lease agreements in seconds. Flags non-standard terms automatically.",
  },
  {
    id: 2,
    name: "Maintenance Predictor",
    type: "Predictive Analytics",
    icon: "🔧",
    status: "busy",
    metric: "94%",
    metricLabel: "Accuracy rate",
    task: "HVAC failure risk flagged · Unit 3B",
    bars: [3, 5, 4, 6, 8, 5, 7, 9, 6, 8, 10, 8],
    description:
      "Analyses sensor data and maintenance history to predict equipment failures before they happen, reducing emergency costs.",
  },
  {
    id: 3,
    name: "Tenant Screener",
    type: "Risk Assessment",
    icon: "👤",
    status: "active",
    metric: "340",
    metricLabel: "Screened today",
    task: "Processing applicant #T-2094...",
    bars: [6, 8, 7, 9, 8, 10, 9, 8, 7, 9, 10, 9],
    description:
      "Runs comprehensive background, credit, and rental-history checks in minutes, with a plain-language risk summary.",
  },
  {
    id: 4,
    name: "Market Valuation",
    type: "Real-Time Pricing",
    icon: "📈",
    status: "active",
    metric: "$2.1M",
    metricLabel: "Portfolio valued",
    task: "Updating comps for ZIP 90210...",
    bars: [5, 4, 7, 6, 8, 7, 9, 8, 10, 9, 8, 10],
    description:
      "Pulls live comparable sales and rental data to keep your property valuations and listing prices sharp 24/7.",
  },
  {
    id: 5,
    name: "Payment Tracker",
    type: "Financial Ops",
    icon: "💳",
    status: "active",
    metric: "99.1%",
    metricLabel: "Collection rate",
    task: "Reconciling 847 transactions...",
    bars: [10, 9, 10, 9, 8, 10, 9, 10, 9, 10, 9, 10],
    description:
      "Monitors rent payments, auto-sends reminders, flags late accounts, and reconciles ledgers without manual input.",
  },
  {
    id: 6,
    name: "Energy Optimizer",
    type: "Smart Building AI",
    icon: "⚡",
    status: "busy",
    metric: "−18%",
    metricLabel: "Energy saved",
    task: "Adjusting HVAC schedule for Unit 5...",
    bars: [8, 6, 4, 5, 7, 6, 8, 5, 7, 9, 6, 8],
    description:
      "Learns occupancy patterns and weather forecasts to dynamically control HVAC and lighting, cutting utility bills.",
  },
  {
    id: 7,
    name: "Document Scanner",
    type: "OCR & Extraction",
    icon: "🔍",
    status: "active",
    metric: "4.8k",
    metricLabel: "Docs processed",
    task: "Extracting data from invoice #INV-7723...",
    bars: [4, 6, 8, 5, 7, 9, 6, 8, 10, 7, 9, 8],
    description:
      "Converts scanned invoices, receipts, and inspection reports into structured data with zero manual re-keying.",
  },
  {
    id: 8,
    name: "Occupancy Forecaster",
    type: "Demand Prediction",
    icon: "🏠",
    status: "active",
    metric: "92%",
    metricLabel: "Forecast accuracy",
    task: "Modelling Q2 vacancy trends...",
    bars: [7, 8, 6, 9, 7, 8, 10, 9, 8, 7, 9, 10],
    description:
      "Forecasts unit-level occupancy 90 days out so you can price, market, and staff before vacancies appear.",
  },
  {
    id: 9,
    name: "Risk Monitor",
    type: "Compliance & Alerts",
    icon: "🛡️",
    status: "idle",
    metric: "0",
    metricLabel: "Open alerts",
    task: "All clear · Next compliance scan in 4 m",
    bars: [2, 1, 3, 2, 1, 2, 1, 3, 2, 1, 2, 1],
    description:
      "Continuously audits properties against local housing codes and flags compliance gaps before they become violations.",
  },
  {
    id: 10,
    name: "Comms Agent",
    type: "Tenant Engagement",
    icon: "💬",
    status: "active",
    metric: "98%",
    metricLabel: "Response rate",
    task: "Drafting reply to tenant #0823...",
    bars: [6, 9, 7, 10, 8, 9, 7, 8, 10, 9, 8, 10],
    description:
      "Handles routine tenant messages, maintenance requests, and renewal enquiries instantly — in any language.",
  },
];

/* ─── Status config map ──────────────────────────────────────────────────── */
const STATUS_CONFIG: Record<AgentStatus, StatusConfig> = {
  active: {
    label: "Active",
    dot: "#22d3a8",
    bg: "rgba(34,211,168,.1)",
    border: "rgba(34,211,168,.25)",
    text: "#22d3a8",
  },
  busy: {
    label: "Processing",
    dot: "#f59e0b",
    bg: "rgba(245,158,11,.1)",
    border: "rgba(245,158,11,.25)",
    text: "#f59e0b",
  },
  idle: {
    label: "Standby",
    dot: "#3a7aaa",
    bg: "rgba(58,122,170,.1)",
    border: "rgba(58,122,170,.25)",
    text: "#3a7aaa",
  },
};

/* ─── Icon background helper ─────────────────────────────────────────────── */
function iconBg(status: AgentStatus): string {
  if (status === "busy") return "rgba(245,158,11,.12)";
  if (status === "idle") return "rgba(58,122,170,.12)";
  return "rgba(0,102,204,.18)";
}

/* ─── MiniChart ──────────────────────────────────────────────────────────── */
const MiniChart: FC<MiniChartProps> = ({ bars, active }) => {
  const max = Math.max(...bars);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        gap: 3,
        height: 28,
        margin: "10px 0 8px",
      }}
    >
      {bars.map((b, i) => {
        const h = Math.max(3, Math.round((b / max) * 28));
        const isHot = i >= bars.length - 4;
        const barStyle: CSSProperties = {
          flex: 1,
          height: h,
          borderRadius: "2px 2px 0 0",
          background: isHot
            ? "linear-gradient(180deg,#3399ff,#0057ad)"
            : active
            ? "rgba(0,102,204,.35)"
            : "rgba(0,102,204,.2)",
          transition: "background .3s",
        };
        return <div key={i} style={barStyle} />;
      })}
    </div>
  );
};

/* ─── AgentCard ──────────────────────────────────────────────────────────── */
const AgentCard: FC<AgentCardProps> = ({ agent, index, isActive, onClick }) => {
  const s = STATUS_CONFIG[agent.status];

  const cardStyle: CSSProperties = {
    background: isActive ? "#001e42" : "#001428",
    border: `1px solid ${isActive ? "#3399ff" : "rgba(0,87,173,.2)"}`,
    borderRadius: 12,
    padding: 14,
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    transition: "border-color .25s, transform .2s, box-shadow .25s",
    transform: isActive ? "translateY(-2px)" : "translateY(0)",
    boxShadow: isActive ? "0 0 24px rgba(51,153,255,.12)" : "none",
    animationDelay: `${index * 60}ms`,
  };

  const glowStyle: CSSProperties = {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    background: isActive
      ? "linear-gradient(135deg,rgba(0,102,204,.1),transparent)"
      : "transparent",
    transition: "background .3s",
  };

  const pillStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 4,
    fontSize: 9,
    letterSpacing: ".1em",
    textTransform: "uppercase",
    fontWeight: 600,
    padding: "2px 7px",
    borderRadius: 20,
    color: s.text,
    background: s.bg,
    border: `1px solid ${s.border}`,
  };

  const dotStyle: CSSProperties = {
    width: 5,
    height: 5,
    borderRadius: "50%",
    background: s.dot,
    animation:
      agent.status !== "idle" ? "estateai-pulse 1.2s ease infinite" : "none",
  };

  return (
    <div style={cardStyle} onClick={onClick}>
      <div style={glowStyle} />

      {/* Top row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 10,
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 9,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
            background: iconBg(agent.status),
          }}
        >
          {agent.icon}
        </div>
        <div style={pillStyle}>
          <span style={dotStyle} />
          {s.label}
        </div>
      </div>

      {/* Name + type */}
      <div
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: "#cce5ff",
          lineHeight: 1.3,
          marginBottom: 2,
          fontFamily: "system-ui,sans-serif",
        }}
      >
        {agent.name}
      </div>
      <div
        style={{
          fontSize: 10,
          color: "#2d5a8a",
          letterSpacing: ".06em",
          fontFamily: "monospace",
        }}
      >
        {agent.type}
      </div>

      <MiniChart bars={agent.bars} active={isActive} />

      {/* Metric */}
      <div>
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: "#3399ff",
            lineHeight: 1,
            fontFamily: "system-ui,sans-serif",
          }}
        >
          {agent.metric}
        </div>
        <div
          style={{
            fontSize: 9,
            color: "#2d5a8a",
            textTransform: "uppercase",
            letterSpacing: ".08em",
            marginTop: 2,
          }}
        >
          {agent.metricLabel}
        </div>
      </div>

      {/* Live task */}
      <div
        style={{
          fontSize: 10,
          color: "#1a4d7a",
          marginTop: 8,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          paddingTop: 8,
          borderTop: "1px solid rgba(0,87,173,.15)",
          fontFamily: "monospace",
        }}
      >
        {agent.task}
        <span
          style={{
            animation: "estateai-blink 1s step-end infinite",
            color: "#3399ff",
          }}
        >
          ▌
        </span>
      </div>
    </div>
  );
};

/* ─── DetailPanel ────────────────────────────────────────────────────────── */
const DetailPanel: FC<DetailPanelProps> = ({ agent, onClose }) => {
  const s = STATUS_CONFIG[agent.status];

  const pillStyle: CSSProperties = {
    fontSize: 9,
    letterSpacing: ".1em",
    textTransform: "uppercase",
    fontWeight: 600,
    padding: "2px 7px",
    borderRadius: 20,
    color: s.text,
    background: s.bg,
    border: `1px solid ${s.border}`,
  };

  const handleClose = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div
      style={{
        gridColumn: "1 / -1",
        background: "#001428",
        border: "1px solid rgba(51,153,255,.27)",
        borderRadius: 12,
        padding: "20px 24px",
        display: "flex",
        gap: 24,
        alignItems: "flex-start",
        flexWrap: "wrap",
        position: "relative",
        animation: "estateai-fadeIn .3s ease both",
      }}
    >
      <button
        onClick={handleClose}
        style={{
          position: "absolute",
          top: 12,
          right: 14,
          background: "none",
          border: "none",
          color: "#2d5a8a",
          fontSize: 18,
          cursor: "pointer",
          lineHeight: 1,
        }}
        aria-label="Close detail panel"
      >
        ×
      </button>

      <div style={{ fontSize: 32 }}>{agent.icon}</div>

      <div style={{ flex: 1, minWidth: 200 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 4,
          }}
        >
          <span
            style={{
              fontSize: 17,
              fontWeight: 700,
              color: "#cce5ff",
              fontFamily: "system-ui,sans-serif",
            }}
          >
            {agent.name}
          </span>
          <span style={pillStyle}>{s.label}</span>
        </div>

        <div
          style={{
            fontSize: 11,
            color: "#2d5a8a",
            marginBottom: 8,
            fontFamily: "monospace",
          }}
        >
          {agent.type}
        </div>

        <p
          style={{
            fontSize: 13,
            color: "#5a87cc",
            lineHeight: 1.6,
            fontFamily: "system-ui,sans-serif",
            maxWidth: 480,
          }}
        >
          {agent.description}
        </p>
      </div>

      <div>
        <div
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: "#3399ff",
            fontFamily: "system-ui,sans-serif",
          }}
        >
          {agent.metric}
        </div>
        <div
          style={{
            fontSize: 10,
            color: "#2d5a8a",
            textTransform: "uppercase",
            letterSpacing: ".08em",
          }}
        >
          {agent.metricLabel}
        </div>
      </div>
    </div>
  );
};

/* ─── SysStat ────────────────────────────────────────────────────────────── */
const SysStat: FC<SysStatItem> = ({ label, val, dot }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
    {dot !== null && (
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: dot,
          boxShadow: `0 0 6px ${dot}`,
          flexShrink: 0,
        }}
      />
    )}
    <span
      style={{
        fontSize: 10,
        color: "#3a6090",
        textTransform: "uppercase",
        letterSpacing: ".08em",
        fontFamily: "monospace",
      }}
    >
      {label}
    </span>
    <span
      style={{
        fontSize: 13,
        color: "#66b2ff",
        fontWeight: 600,
        fontFamily: "monospace",
      }}
    >
      {val}
    </span>
  </div>
);

/* ─── AgentShowcase (main export) ────────────────────────────────────────── */
const AgentShowcase: FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [taskCount, setTaskCount] = useState<number>(2847);

  const activeAgent = AGENTS.find((a) => a.id === activeId) ?? null;
  const activeCount = AGENTS.filter((a) => a.status === "active").length;

  useEffect(() => {
    const timer = setInterval(() => {
      setTaskCount((n) => n + Math.floor(Math.random() * 8) - 2);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  const handleCardClick = (id: number): void => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  const sysStats: SysStatItem[] = [
    { label: "Network", val: "Online", dot: "#22d3a8" },
    { label: "Agents Active", val: `${activeCount}/10`, dot: "#22d3a8" },
    { label: "Tasks / hr", val: taskCount.toLocaleString(), dot: "#f59e0b" },
    { label: "Uptime", val: "99.98%", dot: "#22d3a8" },
    { label: "Model", val: "EstateAI v4", dot: null },
  ];

  const handleBtnEnter = (e: MouseEvent<HTMLButtonElement>): void => {
    e.currentTarget.style.transform = "translateY(-1px)";
    e.currentTarget.style.boxShadow = "0 6px 28px rgba(0,102,204,.5)";
  };

  const handleBtnLeave = (e: MouseEvent<HTMLButtonElement>): void => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,102,204,.4)";
  };

  return (
    <>
      <style>{`
        @keyframes estateai-pulse   { 0%,100%{opacity:1} 50%{opacity:.4} }
        @keyframes estateai-blink   { 0%,100%{opacity:1} 49%{opacity:1} 50%,99%{opacity:0} }
        @keyframes estateai-scanline{ 0%{transform:translateX(-100%)} 100%{transform:translateX(100%)} }
        @keyframes estateai-fadeIn  { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)} }
        @keyframes estateai-dotping { 0%,100%{transform:scale(1);opacity:.8} 50%{transform:scale(2.4);opacity:0} }
      `}</style>

      <section
        style={{
          background: "#03142b",
          padding: "80px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: 0.07,
            backgroundImage:
              "linear-gradient(rgba(0,102,204,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,102,204,1) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Glow orb – top left */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -120,
            width: 600,
            height: 600,
            borderRadius: "50%",
            pointerEvents: "none",
            background:
              "radial-gradient(circle,rgba(0,102,204,.18) 0%,transparent 70%)",
          }}
        />

        {/* Glow orb – bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: -150,
            right: -100,
            width: 700,
            height: 700,
            borderRadius: "50%",
            pointerEvents: "none",
            background:
              "radial-gradient(circle,rgba(51,153,255,.12) 0%,transparent 70%)",
          }}
        />

        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 24px",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* ── Header ── */}
          <div style={{ marginBottom: 36 }}>
            {/* Live badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(0,102,204,.12)",
                border: "1px solid rgba(0,102,204,.3)",
                color: "#3399ff",
                fontSize: 11,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                padding: "5px 14px",
                borderRadius: 20,
                marginBottom: 16,
                fontFamily: "monospace",
              }}
            >
              <span
                style={{ position: "relative", display: "inline-block", width: 8, height: 8 }}
              >
                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    background: "#3399ff",
                    animation: "estateai-dotping 1.5s ease infinite",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    inset: 1,
                    borderRadius: "50%",
                    background: "#3399ff",
                  }}
                />
              </span>
              Agent Network · Live
            </div>

            <h2
              style={{
                fontSize: "clamp(28px,4vw,42px)",
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "-.5px",
                lineHeight: 1.15,
                marginBottom: 10,
                fontFamily: "system-ui,sans-serif",
              }}
            >
              10 Autonomous Agents.{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#3399ff,#66b2ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Working While You Sleep.
              </span>
            </h2>

            <p
              style={{
                fontSize: 16,
                color: "#3a6090",
                maxWidth: 540,
                lineHeight: 1.6,
                fontFamily: "system-ui,sans-serif",
              }}
            >
              Each agent is purpose-built, always on, and learning your
              portfolio in real time — so every decision is faster, smarter,
              and data-backed.
            </p>
          </div>

          {/* ── System status bar ── */}
          <div
            style={{
              display: "flex",
              gap: 24,
              flexWrap: "wrap",
              background: "#001d3d",
              border: "1px solid rgba(0,87,173,.2)",
              borderRadius: 10,
              padding: "10px 20px",
              marginBottom: 24,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Scan-line sweep */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "40%",
                height: "100%",
                background:
                  "linear-gradient(90deg,transparent,rgba(51,153,255,.08),transparent)",
                animation: "estateai-scanline 3s linear infinite",
                pointerEvents: "none",
              }}
            />

            {sysStats.map((stat) => (
              <SysStat key={stat.label} {...stat} />
            ))}
          </div>

          {/* ── Agent grid ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
              gap: 12,
            }}
          >
            {AGENTS.map((agent, i) => (
              <AgentCard
                key={agent.id}
                agent={agent}
                index={i}
                isActive={activeId === agent.id}
                onClick={() => handleCardClick(agent.id)}
              />
            ))}

            {/* Full-width detail panel */}
            {activeAgent !== null && (
              <DetailPanel
                agent={activeAgent}
                onClose={() => setActiveId(null)}
              />
            )}
          </div>

          {/* ── Bottom CTA ── */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 16,
              marginTop: 32,
              paddingTop: 24,
              borderTop: "1px solid rgba(0,87,173,.2)",
            }}
          >
            <p
              style={{
                fontSize: 13,
                color: "#3a6090",
                fontFamily: "system-ui,sans-serif",
              }}
            >
              <span style={{ color: "#fff", fontWeight: 600 }}>2,500+</span>{" "}
              properties joined this week
            </p>

            <button
              type="button"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 28px",
                borderRadius: 100,
                background:
                  "linear-gradient(135deg,var(--color-primary-600,#0066cc),var(--color-primary-500,#1a7ae6))",
                color: "#fff",
                fontWeight: 600,
                fontSize: 14,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 20px rgba(0,102,204,.4)",
                fontFamily: "system-ui,sans-serif",
                transition: "transform .2s, box-shadow .2s",
              }}
              onMouseEnter={handleBtnEnter}
              onMouseLeave={handleBtnLeave}
            >
              Deploy Your Agent Network
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AgentShowcase;