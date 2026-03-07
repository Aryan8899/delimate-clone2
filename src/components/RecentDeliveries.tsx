"use client";

import { useRef, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

interface DeliveryItem {
  category: string;
  title: string;
  stars: number;
  price: string;
  avatar: string;
}

interface Tab {
  key: string;
  label: string;
  icon: ReactNode;
}

interface MarqueeRowProps {
  items: DeliveryItem[];
  direction?: 'left' | 'right';
  speed?: number;
}

const allDeliveries: Record<string, DeliveryItem[]> = {
  All: [
    { category: 'DELIVERY',  title: 'Pick up & deliver a medium sized fridge',  stars: 5, price: '₹1,200', avatar: 'https://i.pravatar.cc/40?img=1' },
    { category: 'DELIVERY',  title: 'King mattress pick and delivery',           stars: 5, price: '₹850',   avatar: 'https://i.pravatar.cc/40?img=2' },
    { category: 'DELIVERY',  title: 'Sofa delivery from Hyderabad',              stars: 5, price: '₹950',   avatar: 'https://i.pravatar.cc/40?img=3' },
    { category: 'PARCEL',    title: 'Send a parcel Delhi to Mumbai',             stars: 5, price: '₹450',   avatar: 'https://i.pravatar.cc/40?img=4' },
    { category: 'PARCEL',    title: 'Documents courier same day',                stars: 5, price: '₹250',   avatar: 'https://i.pravatar.cc/40?img=5' },
    { category: 'DELIVERY',  title: 'Pick up medicine from pharmacy',            stars: 5, price: '₹150',   avatar: 'https://i.pravatar.cc/40?img=6' },
    { category: 'REMOVALS',  title: 'Break down and take away boxes',            stars: 5, price: '₹500',   avatar: 'https://i.pravatar.cc/40?img=7' },
    { category: 'REMOVALS',  title: 'Couch moved 1km down the road',             stars: 5, price: '₹600',   avatar: 'https://i.pravatar.cc/40?img=8' },
    { category: 'REMOVALS',  title: 'Removalist TODAY urgent',                   stars: 5, price: '₹800',   avatar: 'https://i.pravatar.cc/40?img=9' },
    { category: 'URGENT',    title: 'Urgent removalist needed today',            stars: 5, price: '₹750',   avatar: 'https://i.pravatar.cc/40?img=10' },
    { category: 'URGENT',    title: 'Help moving house to new city fast',        stars: 5, price: '₹1,500', avatar: 'https://i.pravatar.cc/40?img=11' },
    { category: 'PARCEL',    title: 'Send gift box to Bangalore',                stars: 5, price: '₹350',   avatar: 'https://i.pravatar.cc/40?img=12' },
  ],
  Delivery: [
    { category: 'DELIVERY', title: 'Pick up & deliver a medium sized fridge',   stars: 5, price: '₹1,200', avatar: 'https://i.pravatar.cc/40?img=1' },
    { category: 'DELIVERY', title: 'King mattress pick and delivery',            stars: 5, price: '₹850',   avatar: 'https://i.pravatar.cc/40?img=2' },
    { category: 'DELIVERY', title: 'Sofa delivery from Hyderabad to Pune',      stars: 5, price: '₹950',   avatar: 'https://i.pravatar.cc/40?img=3' },
    { category: 'DELIVERY', title: 'Pick up medicine from pharmacy urgently',   stars: 5, price: '₹150',   avatar: 'https://i.pravatar.cc/40?img=6' },
    { category: 'DELIVERY', title: 'Deliver flowers across the city today',     stars: 5, price: '₹200',   avatar: 'https://i.pravatar.cc/40?img=13' },
    { category: 'DELIVERY', title: 'TV unit delivery to 3rd floor no lift',     stars: 5, price: '₹700',   avatar: 'https://i.pravatar.cc/40?img=14' },
    { category: 'DELIVERY', title: 'Laptop delivery same day city area',        stars: 5, price: '₹300',   avatar: 'https://i.pravatar.cc/40?img=15' },
    { category: 'DELIVERY', title: 'Grocery delivery from wholesale market',    stars: 5, price: '₹400',   avatar: 'https://i.pravatar.cc/40?img=16' },
    { category: 'DELIVERY', title: 'Washing machine pick up and deliver',       stars: 5, price: '₹1,100', avatar: 'https://i.pravatar.cc/40?img=17' },
    { category: 'DELIVERY', title: 'Cycle delivery across town quickly',        stars: 5, price: '₹250',   avatar: 'https://i.pravatar.cc/40?img=18' },
  ],
  Parcel: [
    { category: 'PARCEL', title: 'Send a parcel Delhi to Mumbai overnight',     stars: 5, price: '₹450',   avatar: 'https://i.pravatar.cc/40?img=4' },
    { category: 'PARCEL', title: 'Documents courier same day delivery',         stars: 5, price: '₹250',   avatar: 'https://i.pravatar.cc/40?img=5' },
    { category: 'PARCEL', title: 'Send gift box to Bangalore securely',         stars: 5, price: '₹350',   avatar: 'https://i.pravatar.cc/40?img=12' },
    { category: 'PARCEL', title: 'Birthday cake parcel same city',              stars: 5, price: '₹180',   avatar: 'https://i.pravatar.cc/40?img=19' },
    { category: 'PARCEL', title: 'Legal documents courier to court today',      stars: 5, price: '₹400',   avatar: 'https://i.pravatar.cc/40?img=20' },
    { category: 'PARCEL', title: 'Send clothes parcel to family outstation',    stars: 5, price: '₹300',   avatar: 'https://i.pravatar.cc/40?img=21' },
    { category: 'PARCEL', title: 'Electronics parcel insured delivery',         stars: 5, price: '₹600',   avatar: 'https://i.pravatar.cc/40?img=22' },
    { category: 'PARCEL', title: 'Send homemade food parcel within city',       stars: 5, price: '₹150',   avatar: 'https://i.pravatar.cc/40?img=23' },
    { category: 'PARCEL', title: 'Passport photos courier to office today',     stars: 5, price: '₹120',   avatar: 'https://i.pravatar.cc/40?img=24' },
    { category: 'PARCEL', title: 'Return online shopping parcel pickup',        stars: 5, price: '₹100',   avatar: 'https://i.pravatar.cc/40?img=25' },
  ],
  Removals: [
    { category: 'REMOVALS', title: 'Break down and take away old boxes',        stars: 5, price: '₹500',   avatar: 'https://i.pravatar.cc/40?img=7' },
    { category: 'REMOVALS', title: 'Couch moved 1km down the road today',      stars: 5, price: '₹600',   avatar: 'https://i.pravatar.cc/40?img=8' },
    { category: 'REMOVALS', title: 'Removalist TODAY full house move',          stars: 5, price: '₹800',   avatar: 'https://i.pravatar.cc/40?img=9' },
    { category: 'REMOVALS', title: 'Help moving house to new city',             stars: 5, price: '₹1,500', avatar: 'https://i.pravatar.cc/40?img=11' },
    { category: 'REMOVALS', title: 'Move office furniture to new building',     stars: 5, price: '₹2,000', avatar: 'https://i.pravatar.cc/40?img=26' },
    { category: 'REMOVALS', title: 'Dismantle and relocate bed frame',          stars: 5, price: '₹700',   avatar: 'https://i.pravatar.cc/40?img=27' },
    { category: 'REMOVALS', title: 'Clear out storage unit completely',         stars: 5, price: '₹900',   avatar: 'https://i.pravatar.cc/40?img=28' },
    { category: 'REMOVALS', title: 'Help pack and move 1BHK flat today',        stars: 5, price: '₹1,200', avatar: 'https://i.pravatar.cc/40?img=29' },
    { category: 'REMOVALS', title: 'Piano removal from 2nd floor apartment',    stars: 5, price: '₹1,800', avatar: 'https://i.pravatar.cc/40?img=30' },
    { category: 'REMOVALS', title: 'Remove and dump old appliances',            stars: 5, price: '₹400',   avatar: 'https://i.pravatar.cc/40?img=31' },
  ],
  Urgent: [
    { category: 'URGENT', title: 'Urgent removalist needed within 2 hours',     stars: 5, price: '₹750',   avatar: 'https://i.pravatar.cc/40?img=10' },
    { category: 'URGENT', title: 'Emergency medicine pickup right now',         stars: 5, price: '₹200',   avatar: 'https://i.pravatar.cc/40?img=32' },
    { category: 'URGENT', title: 'Same day airport parcel delivery urgent',     stars: 5, price: '₹900',   avatar: 'https://i.pravatar.cc/40?img=33' },
    { category: 'URGENT', title: 'Need a mover today within hours',             stars: 5, price: '₹1,100', avatar: 'https://i.pravatar.cc/40?img=34' },
    { category: 'URGENT', title: 'Urgent document courier to bank now',         stars: 5, price: '₹350',   avatar: 'https://i.pravatar.cc/40?img=35' },
    { category: 'URGENT', title: 'Food delivery across city in 1 hour',         stars: 5, price: '₹250',   avatar: 'https://i.pravatar.cc/40?img=36' },
    { category: 'URGENT', title: 'Rush deliver flowers for wedding today',      stars: 5, price: '₹500',   avatar: 'https://i.pravatar.cc/40?img=37' },
    { category: 'URGENT', title: 'Urgent parcel Hyderabad to Chennai',          stars: 5, price: '₹1,300', avatar: 'https://i.pravatar.cc/40?img=38' },
    { category: 'URGENT', title: 'Last minute furniture move tonight',          stars: 5, price: '₹950',   avatar: 'https://i.pravatar.cc/40?img=39' },
    { category: 'URGENT', title: 'Urgent pick up from railway station now',     stars: 5, price: '₹300',   avatar: 'https://i.pravatar.cc/40?img=40' },
  ],
};

const tabs: Tab[] = [
  { key: 'All', label: 'All', icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg> },
  { key: 'Delivery', label: 'Delivery', icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3"/><rect x="9" y="11" width="14" height="10" rx="2"/><circle cx="12" cy="21" r="1"/><circle cx="20" cy="21" r="1"/></svg> },
  { key: 'Parcel', label: 'Parcel', icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg> },
  { key: 'Removals', label: 'Removals', icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
  { key: 'Urgent', label: 'Urgent', icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
];

function StarIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>
  );
}

function DeliveryCard({ item }: { item: DeliveryItem }) {
  return (
    <div className="flex-shrink-0 w-64 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer mx-2.5">
      <div className="flex items-start gap-3 mb-4">
        <img
          src={item.avatar} alt=""
          className="w-10 h-10 rounded-full object-cover flex-shrink-0 bg-gray-100"
        />
        <div className="min-w-0">
          <div className="text-[10px] font-bold text-gray-400 tracking-widest mb-1">{item.category}</div>
          <div className="text-sm font-bold text-gray-900 leading-snug">{item.title}</div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div className="flex items-center gap-1">
          <StarIcon />
          <span className="text-xs text-gray-500 ml-0.5">5 Stars</span>
        </div>
        <div className="text-sm font-bold text-gray-900">{item.price}</div>
      </div>
    </div>
  );
}

function MarqueeRow({ items, direction = 'left', speed = 32 }: MarqueeRowProps) {
  const trackRef  = useRef<HTMLDivElement>(null);
  const animRef   = useRef<number>(0);
  const posRef    = useRef<number>(0);
  const pausedRef = useRef<boolean>(false);
  const doubled   = [...items, ...items];

  useEffect(() => {
    posRef.current = 0;

    const step = () => {
      const track = trackRef.current;
      if (!track) return;
      if (!pausedRef.current) {
        const half = track.scrollWidth / 2;
        if (direction === 'left') {
          posRef.current -= speed / 60;
          if (posRef.current <= -half) posRef.current += half;
        } else {
          posRef.current += speed / 60;
          if (posRef.current >= 0) posRef.current -= half;
        }
        track.style.transform = `translateX(${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(step);
    };

    if (direction === 'right') {
      // start offset so row 2 doesn't start at 0
      setTimeout(() => {
        if (trackRef.current) posRef.current = -(trackRef.current.scrollWidth / 4);
      }, 0);
    }

    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, [items, direction, speed]);

  return (
    <div
      className="overflow-hidden w-full"
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <div ref={trackRef} className="flex will-change-transform py-1.5">
        {doubled.map((item, i) => (
          <DeliveryCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function RecentDeliveries() {
  const [activeTab, setActiveTab] = useState('All');
  const items = allDeliveries[activeTab] || allDeliveries.All;
  const mid   = Math.ceil(items.length / 2);
  const row1  = items.slice(0, mid);
  const row2  = items.slice(mid);

  return (
    <section className="py-24 bg-[#f4f6fb] overflow-hidden">
      <style>{`
        .tab-btn {
          display: flex; align-items: center; gap: 6px;
          padding: 10px 2px 12px; font-size: 14px; font-weight: 600;
          color: #6b7280; border: none; border-bottom: 2px solid transparent;
          background: none; cursor: pointer; white-space: nowrap;
          transition: all 0.18s ease;
        }
        .tab-btn:hover { color: #1a3fc4; }
        .tab-btn.active { color: #1a3fc4; border-bottom-color: #1a3fc4; }
        .cards-fade { animation: cardsFade 0.3s ease; }
        @keyframes cardsFade {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">
          See what others are getting done
        </h2>

        {/* Tabs */}
        <div className="flex items-center gap-8 border-b border-gray-200 overflow-x-auto">
          {tabs.map(t => (
            <button
              key={t.key}
              className={`tab-btn ${activeTab === t.key ? 'active' : ''}`}
              onClick={() => setActiveTab(t.key)}
            >
              {t.icon}
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Marquee rows — key forces remount on tab switch */}
      <div key={activeTab} className="cards-fade">
        <div className="mb-3">
          <MarqueeRow items={row1} direction="left"  speed={32} />
        </div>
        {row2.length >= 3 && (
          <div className="mb-10">
            <MarqueeRow items={row2} direction="right" speed={26} />
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="text-center mt-8">
        <button className="bg-[#1a3fc4] text-white font-bold px-10 py-4 rounded-full shadow-lg hover:bg-blue-700 hover:-translate-y-1 transition-all duration-200 text-sm">
          Post your task for free
        </button>
      </div>
    </section>
  );
}