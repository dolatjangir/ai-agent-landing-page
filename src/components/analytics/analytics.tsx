import { ChevronRight } from 'lucide-react';
import {useEffect,useRef} from 'react'
interface Card {
  title: string
  desc: string
  img: string
}
interface AutomationItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  variant: 'soshie' | 'cassie' | 'vizzy';
}
const cards: Card[] = [
  {
    title: "AI Property Matching",
    desc: "Our AI automatically finds the best property for every client.",
    img: "/assets/img-4.png",
  },
  {
    title: "Lead Generation",
    desc: "Capture and qualify leads using intelligent AI workflows.",
    img: "/assets/img-1.png",
  },
  {
    title: "Marketing Automation",
    desc: "Automate campaigns and reach buyers across platforms.",
    img: "/assets/img-2.png",
  },
  {
    title: "Broker Dashboard",
    desc: "Real-time analytics and performance insights for brokers.",
    img: "/assets/img-3.png",
  },
    {
    title: "AI Client Relation",
    desc: "Our AI automatically ,make the best client for every client.",
    img: "/assets/img-5.png",
  },
];
const automations: AutomationItem[] = [
  {
    id: 'soshie',
    title: 'Soshie, schedule social media posts for me',
    description: 'Automate your social media game with AI for marketing. Write, create, and post content effortlessly with AI-powered solutions.',
    imageSrc: '/assets/crmph-robo.png',
    imageAlt: 'Soshie AI - Social Media Automation',
    variant: 'soshie',
  },
  {
    id: 'cassie',
    title: 'Cassie, check my Facebook comments',
    description: 'Engage your audience with business automation tools. Use AI for customer support to analyze comments and craft personalized responses. By automating comment analysis, your team can focus on building stronger customer relationships.',
    imageSrc: '/assets/crmdash-robo.png',
    imageAlt: 'Cassie AI - Facebook Comments Automation',
    variant: 'cassie',
  },
  {
    id: 'vizzy',
    title: 'Vizzy, help me prepare for today\'s meetings',
    description: 'Boost productivity with AI. Streamline business processes with daily summaries based on your email and calendar to keep your schedule on track.',
    imageSrc: '/assets/half-robo.png',
    imageAlt: 'Vizzy AI - Meeting Preparation Automation',
    variant: 'vizzy',
  },
];
const getVariantStyles = (variant: string): string => {
  const styles: Record<string, string> = {
    soshie: 'bg-gradient-to-br from-purple-200 to-pink-100 border-purple-200',
    cassie: 'bg-gradient-to-br from-blue-300 to-cyan-100 border-blue-300',
    vizzy: 'bg-gradient-to-br  from-blue-300 to-cyan-100 border-blue-300',
  };
  return styles[variant] || styles.soshie;
};
function HomeAutomationsPage(): React.JSX.Element {
  const firstAutomation = automations[0];
  const otherAutomations = automations.slice(1);

  return (
   <main className="min-h-screen ">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-6 lg:gap-8">
      {/* First Box - Full Width with Content Left, Image Right */}
    <div
  className={`relative overflow-hidden rounded-2xl border ${getVariantStyles(firstAutomation.variant)} shadow-sm flex flex-col lg:flex-row h-full lg:h-[400px]`}
>
  {/* Content - Left Side - Centered */}
  <div className="py-8 px-6 lg:px-8 flex-1 flex flex-col justify-center items-center text-center lg:w-1/2">
    <div className="mb-4">
      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
        {firstAutomation.title}
      </h3>
    </div>
    <p className="text-lg text-gray-500 leading-relaxed max-w-md">
      {firstAutomation.description}
    </p>
  </div>

  {/* Image - Right Side - Centered */}
  <div className="relative w-full lg:w-1/2 h-64 lg:h-full overflow-hidden flex items-center justify-center ">
    <img
      src={firstAutomation.imageSrc}
      alt={firstAutomation.imageAlt}
      className="max-w-full max-h-full object-contain"
    />
  </div>
</div>

      {/* Other Two Boxes - Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {otherAutomations.map((automation) => (
          <div
            key={automation.id}
            className={`relative overflow-hidden rounded-2xl border ${getVariantStyles(automation.variant)} shadow-sm flex flex-col h-full min-h-[400px]`}
          >
            <div className="p-6 lg:p-8 flex-1">
              <div className="mb-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                  {automation.title}
                </h3>
              </div>
              <p className="text-lg text-gray-500 leading-relaxed">
                {automation.description}
              </p>
            </div>

            <div className="relative w-full h-48 lg:h-56 overflow-hidden mt-auto">
              <img
                src={automation.imageSrc}
                alt={automation.imageAlt}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</main>
  );
}
const Analytics = () => {
   const scrollRef = useRef<HTMLDivElement | null>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return

    const scrollAmount = 320

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

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

  const TrendUpIcon = ({ className }: { className?: string }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
      <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
  );
  return (
    <>
    <section id="analytics" className="py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="font-['var(--font-head)]  text-[var(--color-primary-600)]  text-3xl md:text-5xl text-center mb-4">
          Powerful CRM Built for Real Estate
        </h2>
        <p className="text-center text-[var(--color-text-muted)] max-w-2xl mx-auto mb-16 text-lg">
          Lead management Follow-ups Customer profiles Property tracking Deal pipeline Analytics.
        </p>
  <div className="relative w-full">

      <HomeAutomationsPage/>

    </div>
      </div>
    </section>
     {/* How It Works */}
          <section id="how-it-works" className="py-[var(--space-24)] ">
            <div className="max-w-7xl   mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
              <div className="text-center max-w-3xl mx-auto mb-[var(--space-16)]">
                <h2 className="text-4xl font-bold mb-[var(--space-4)] text-[var(--color-primary-600)] ">Get Started in Minutes</h2>
                <p className="text-xl text-[var(--text-secondary)] ">Three simple steps to transform your property management.</p>
              </div>
    
              <div className="grid lg:grid-cols-3  w-full gap-[var(--space-2)] lg:gap-[var(--space-8)]">
                {steps.map((step, idx) => (
                  <div key={idx} className="relative group ">
                    <div 
                      className=" [clip-path:polygon(0_0,_50%_20%,_100%_0,_100%_69%,_49%_100%,_48%_100%,_0_67%)] md:[clip-path:polygon(75%_0%,_98%_50%,_75%_100%,_0%_100%,_15%_50%,_0%_0%)]  flex justify-center items-center  pb-2 h-60 group-hover:bg-[var(--color-secondary-300)]/50 p-[var(--space-3)] bg-[var(--color-secondary-100)]  border border-[var(--border-light)] group-hover:border-[var(--border-light)]/50"
                     
                    >
                      <div className='flex flex-col items-center justify-center px-4  w-[80%]'>
                        <div className='flex flex-row sm:flex-col items-center justify-center '>
                      <div className="text-2xl lg:text-5xl font-bold mr-5 lg:mr-0 text-[var(--color-secondary-500)] mb-[var(--space-1)] lg:mb-[var(--space-3)]">{step.number}</div>
                      <h3 className="text-sm lg:text-xl font-bold mb-[var(--space-2)] lg:mb-[var(--space-4)] text-black/90">{step.title}</h3>
                      </div><p className="px-2 sm:px-6 text-sm text-[var(--text-secondary)] text-center leading-relaxed">{step.description}</p>
                    </div>
                    {idx < 2 && (
                      <div className="hidden z-50 lg:block absolute top-1/2 -right-5 group-hover:-right-7 transition-all transform -translate-y-1/2 -z-10">
                        <ChevronRight className="w-8 h-8  text-[var(--color-secondary-700)]" />
                      </div>
                    )}
                  </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
</>
  );
};

export default Analytics
