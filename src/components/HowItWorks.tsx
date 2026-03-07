"use client";

import { useEffect, useRef, useState } from 'react';
import { Check, MapPin, Package as PackageIcon, UserCheck } from 'lucide-react';

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !lineRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      const sectionH = sectionRef.current.offsetHeight;

      // How far we've scrolled into the section
      const scrolled = Math.max(0, windowH - rect.top);
      const total = sectionH + windowH;
      const progress = Math.min(1, Math.max(0, scrolled / total));
      setLineHeight(progress * 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      number: 1,
      label: 'STEP 1',
      title: 'Sign Up',
      description: 'Create your account with just your mobile number. Quick, secure, and ready to go in seconds.',
      tags: ['Quick Setup', 'Secure'],
      icon: UserCheck,
      visual: (
        <div className="relative flex items-center justify-center h-full">
          {/* Phone frame */}
          <div className="w-52 h-64 bg-gray-900 rounded-3xl shadow-2xl p-2 relative">
            <div className="w-full h-full bg-white rounded-2xl overflow-hidden flex flex-col">
              {/* phone status bar */}
              <div className="h-6 bg-gray-900 flex items-center justify-center">
                <div className="w-16 h-1.5 bg-gray-700 rounded-full"/>
              </div>
              <div className="flex-1 p-4 flex flex-col items-center justify-center gap-3">
                <div className="text-xs text-gray-400 font-medium tracking-wide">DeleMate</div>
                {/* green check */}
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-200">
                  <Check className="w-8 h-8 text-white" strokeWidth={3}/>
                </div>
                <div className="text-sm font-bold text-gray-900 text-center">Account Created!</div>
                <div className="w-full space-y-1.5 mt-1">
                  <div className="text-xs text-gray-400">Name</div>
                  <div className="h-7 bg-gray-100 rounded-lg w-full"/>
                  <div className="text-xs text-gray-400 mt-1">Phone</div>
                  <div className="h-7 bg-gray-100 rounded-lg w-full"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: 2,
      label: 'STEP 2',
      title: 'Choose a Traveler',
      description: 'Browse verified travelers heading to your destination and select the perfect match for your parcel.',
      tags: ['Verified Travelers', 'Real-time Matching'],
      icon: MapPin,
      visual: (
        <div className="flex items-center justify-center h-full">
          <div className="bg-white rounded-2xl shadow-xl p-5 w-72 border border-gray-100">
            <h5 className="font-bold text-gray-900 mb-3 text-sm">Available Travelers</h5>
            {[
              { name: 'Rahul Kumar',  rating: '4.8', trips: 23, price: 150, avatar: '👨' },
              { name: 'Priya Sharma', rating: '4.9', trips: 41, price: 180, avatar: '👩', selected: true },
              { name: 'Amit Singh',   rating: '4.7', trips: 18, price: 160, avatar: '👨' },
            ].map((t, i) => (
              <div key={i} className={`flex items-center gap-3 p-2.5 rounded-xl mb-2 transition-all ${
                t.selected
                  ? 'bg-blue-50 border-2 border-blue-500 shadow-sm'
                  : 'bg-gray-50 border border-gray-100'
              }`}>
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-lg ${t.selected ? 'bg-blue-100' : 'bg-gray-200'}`}>
                  {t.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm text-gray-900 truncate">{t.name}</div>
                  <div className="text-xs text-gray-500">⭐ {t.rating} · {t.trips} trips</div>
                </div>
                <div className={`text-sm font-bold ${t.selected ? 'text-blue-600' : 'text-gray-700'}`}>₹{t.price}</div>
                {t.selected && <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3}/>
                </div>}
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      number: 3,
      label: 'STEP 3',
      title: 'Send Your Parcel',
      description: 'Hand over your package and track its journey in real-time until it safely reaches its destination.',
      tags: ['Live Tracking', 'Instant Updates'],
      icon: PackageIcon,
      visual: (
        <div className="flex items-center justify-center h-full">
          <div className="bg-white rounded-2xl shadow-xl p-5 w-72 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center">
                <PackageIcon className="w-7 h-7 text-orange-500"/>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-400">Status</div>
                <div className="text-sm font-bold text-green-600">In Transit</div>
              </div>
            </div>
            {/* progress bar */}
            <div className="h-1.5 bg-gray-100 rounded-full mb-4 overflow-hidden">
              <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"/>
            </div>
            <div className="space-y-3">
              {[
                { label: '📍 Live Location', done: true },
                { label: '🚚 In Transit',    done: true },
                { label: '📦 Real-time Updates', done: true },
                { label: '🏠 Out for delivery',  done: false },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${s.done ? 'bg-green-500' : 'bg-gray-200'}`}/>
                  <div className={`text-sm ${s.done ? 'text-gray-700' : 'text-gray-400'}`}>{s.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-blue-600 text-white py-2.5 rounded-xl text-center text-sm font-semibold cursor-pointer hover:bg-blue-700 transition-colors">
              Track Package
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            How DeleMate Works
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Send your parcels across India in three simple steps. Fast, secure, and reliable.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* vertical line track (gray) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 hidden lg:block"/>

          {/* animated fill line */}
          <div
            ref={lineRef}
            className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 hidden lg:block transition-all duration-100"
            style={{
              height: `${lineHeight}%`,
              background: 'linear-gradient(to bottom, #3b82f6, #6366f1)',
            }}
          />

          {steps.map((step, index) => (
            <div key={step.number} className="relative mb-24 last:mb-0">
              {/* center icon node */}
              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1 w-14 h-14 rounded-full hidden lg:flex items-center justify-center shadow-xl z-10"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)' }}>
                <step.icon className="w-7 h-7 text-white"/>
              </div>

              <div className={`flex items-center gap-10 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Text card */}
                <div className="flex-1">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                    <div className="text-xs font-bold text-blue-500 tracking-widest mb-1">{step.label}</div>
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-500 mb-5 leading-relaxed">{step.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.tags.map(tag => (
                        <span key={tag} className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-semibold border border-blue-100">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* spacer for center line */}
                <div className="hidden lg:block w-14 flex-shrink-0"/>

                {/* Visual card */}
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-2xl h-72 border border-gray-100 shadow-sm overflow-hidden">
                    {step.visual}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}