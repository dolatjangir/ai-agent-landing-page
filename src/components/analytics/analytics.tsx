import { ChevronRight } from 'lucide-react';
import {useEffect,useRef} from 'react'
interface Card {
  title: string
  desc: string
  img: string
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

      {/* Left Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10
        bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center"
      >
        ←
      </button>

      {/* Right Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10
        bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center"
      >
        →
      </button>

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-scroll scroll-smooth no-scrollbar px-12"
      >
        {cards.map((card, i) => (
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
              className="w-full h-[180px] object-cover p-2"
            />

            {/* Content */}
            <div className="px-6 py-4">
              <h3 className="text-lg font-semibold text-[var(--color-secondary-500)]">
                {card.title}
              </h3>

              <p className="text-sm text-[var(--color-secondary-500)] mt-2">
                {card.desc}
              </p>
            </div>

          </div>
        ))}
      </div>

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
