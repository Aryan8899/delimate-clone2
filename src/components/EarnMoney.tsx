"use client";

export default function EarnMoney() {
  const modes = [
    {
      label: 'Train',
      sub: 'Long distance routes',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="#3b5bdb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="3" width="16" height="13" rx="3"/>
          <path d="M4 10h16"/>
          <path d="M8 10V6"/>
          <path d="M16 10V6"/>
          <path d="M7 19l2-3"/>
          <path d="M17 19l-2-3"/>
          <path d="M6 19h12"/>
          <circle cx="8.5" cy="14.5" r="1" fill="#3b5bdb" stroke="none"/>
          <circle cx="15.5" cy="14.5" r="1" fill="#3b5bdb" stroke="none"/>
        </svg>
      ),
    },
    {
      label: 'Bus',
      sub: 'City & intercity travel',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="#3b5bdb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 6v6"/>
          <path d="M16 6v6"/>
          <path d="M3 8h18"/>
          <rect x="2" y="4" width="20" height="14" rx="3"/>
          <path d="M5 18v2"/>
          <path d="M19 18v2"/>
          <circle cx="7.5" cy="15" r="1" fill="#3b5bdb" stroke="none"/>
          <circle cx="16.5" cy="15" r="1" fill="#3b5bdb" stroke="none"/>
        </svg>
      ),
    },
    {
      label: 'Bike',
      sub: 'Quick local delivery',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="#3b5bdb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="5.5" cy="17.5" r="3"/>
          <circle cx="18.5" cy="17.5" r="3"/>
          <path d="M15 6h-5l-2 5.5"/>
          <path d="M5.5 17.5l3.5-6 2.5 1.5 3-6.5"/>
          <path d="M18.5 17.5l-3-6"/>
          <circle cx="15" cy="5" r="1" fill="#3b5bdb" stroke="none"/>
        </svg>
      ),
    },
    {
      label: 'Plane',
      sub: 'Domestic & International',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="#3b5bdb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.5H2l3-9 5.5 3L15 4l2 5 5 2z"/>
          <path d="M2 20h20"/>
        </svg>
      ),
    },
    {
      label: 'Car',
      sub: 'Flexible routes',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="#3b5bdb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 17H3v-5l2-5h14l2 5v5h-2"/>
          <circle cx="7.5" cy="17.5" r="2"/>
          <circle cx="16.5" cy="17.5" r="2"/>
          <path d="M5 12h14"/>
          <path d="M7 7l-1 5"/>
          <path d="M17 7l1 5"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#1a3fc4] py-24 px-6 text-white">
      <style>{`
        .earn-card {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          transition: all 0.25s ease;
        }
        .earn-card:hover {
          background: rgba(255,255,255,0.16);
          border-color: rgba(255,255,255,0.35);
          transform: translateY(-5px);
          box-shadow: 0 16px 36px rgba(0,0,0,0.25);
        }
        .earn-card:hover .icon-wrap {
          transform: scale(1.12);
        }
        .icon-wrap {
          transition: transform 0.25s ease;
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,185,0,0.45); }
          50%       { box-shadow: 0 0 0 10px rgba(255,185,0,0); }
        }
        .badge-pill { animation: pulse-glow 2.5s ease-in-out infinite; }
        .cta-btn {
          background: white;
          color: #1a3fc4;
          transition: all 0.2s ease;
        }
        .cta-btn:hover {
          background: #f0f4ff;
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(0,0,0,0.25);
        }
      `}</style>

      <div className="max-w-5xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-8 badge-pill">
          <span className="text-base">💰</span>
          <span className="text-sm font-semibold tracking-wide">Earn Money</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Earn Upto{' '}
          <span className="text-[#FFB900]" style={{ fontFamily: 'Georgia,serif', fontStyle: 'italic' }}>
            ₹800
          </span>{' '}
          EveryTime you travel
        </h2>

        {/* Subtext */}
        <p className="text-white/70 text-lg max-w-xl mx-auto mb-14 leading-relaxed">
          Turn your daily commute into extra income. Deliver parcels along your route and
          earn money while traveling.
        </p>

        {/* Mode cards */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {modes.map((m) => (
            <div key={m.label} className="earn-card rounded-2xl px-6 py-6 w-44 flex flex-col items-center gap-3 cursor-pointer">
              {/* icon circle */}
              <div className="icon-wrap w-14 h-14 rounded-2xl bg-[#e8eeff] flex items-center justify-center shadow-sm">
                {m.svg}
              </div>
              <div className="font-bold text-base">{m.label}</div>
              <div className="text-white/60 text-xs leading-snug text-center">{m.sub}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="cta-btn font-bold text-base px-10 py-4 rounded-full shadow-lg mb-4">
          Start Earning Today
        </button>
        <p className="text-white/50 text-sm mt-3">
          Join thousands of travelers already earning extra income
        </p>

      </div>
    </section>
  );
}