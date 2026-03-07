"use client";

import { useEffect, useRef, useState } from 'react';
import { Trophy, Medal, Star, Crown } from 'lucide-react';

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCard({
  icon: Icon,
  label,
  rawValue,
  suffix,
  description,
  delay,
  visible,
}: {
  icon: any;
  label: string;
  rawValue: number;
  suffix: string;
  description: string;
  delay: number;
  visible: boolean;
}) {
  const count = useCountUp(rawValue, 1800, visible);

  const displayValue =
    suffix === '★'
      ? `${(count / 10).toFixed(1)}★`
      : `${count.toLocaleString()}${suffix}`;

  return (
    <div
      className="stat-card"
      style={{
        animationDelay: `${delay}ms`,
        animationPlayState: visible ? 'running' : 'paused',
      }}
    >
      <div className="card-top-bar" />

      <div className="card-header">
        <div className="label-dot-group">
          <span className="dot" />
          <span className="label-text">{label}</span>
        </div>
        <div className="icon-box">
          <Icon className="icon" />
        </div>
      </div>

      <div
        className="value"
        style={{ animationPlayState: visible ? 'running' : 'paused', animationDelay: `${delay + 200}ms` }}
      >
        {displayValue}
      </div>
      <div className="desc">{description}</div>
    </div>
  );
}

export default function Stats() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Trophy, label: 'Downloads', rawValue: 10000, suffix: '+',  description: 'Total app installs'     },
    { icon: Medal,  label: 'Orders',    rawValue: 500,   suffix: '+',  description: 'Delivered successfully' },
    { icon: Star,   label: 'Rating',    rawValue: 46,    suffix: '★',  description: 'Average app rating'     },
    { icon: Crown,  label: 'Customers', rawValue: 2500,  suffix: '+',  description: 'Happy users worldwide'  },
  ];

  return (
    <>
      <style>{`
        .stats-section {
          padding: 80px 24px;
          background: linear-gradient(to bottom, #ffffff, #f9fafb);
        }
        .stats-inner { max-width: 1900px; margin: 0 auto; padding: 0 40px; }

        .stats-heading { text-align: center; margin-bottom: 56px; }
        .stats-heading h2 {
          font-size: 2.25rem; font-weight: 800; color: #111827;
          margin-bottom: 10px;
          display: flex; align-items: center; justify-content: center; gap: 10px;
        }
        .stats-heading p { color: #6b7280; font-size: 1rem; }

        .stats-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 24px; }
        @media (max-width: 1024px) { .stats-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 640px)  { .stats-grid { grid-template-columns: 1fr; } }

        /* CARD — bigger padding & min-height */
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(36px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .stat-card {
          position: relative;
          background: #fff;
          border-radius: 22px;
          padding: 40px 36px 36px;
          min-height: 240px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 4px 20px rgba(0,0,0,0.07);
          overflow: hidden;
          opacity: 0;
          animation: cardIn 0.65s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-play-state: paused;
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.3s ease,
                      border-color 0.3s ease;
          cursor: default;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .stat-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.13);
          border-color: #3b82f6;
        }

        /* TOP BAR */
        .card-top-bar {
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          height: 4px; width: 44px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          border-radius: 0 0 4px 4px;
          transition: width 0.45s cubic-bezier(0.22,1,0.36,1),
                      left 0.45s cubic-bezier(0.22,1,0.36,1),
                      transform 0.45s cubic-bezier(0.22,1,0.36,1),
                      border-radius 0.4s ease;
        }
        .stat-card:hover .card-top-bar {
          width: 100%; left: 0; transform: translateX(0); border-radius: 0;
        }

        /* HEADER */
        .card-header {
          display: flex; align-items: flex-start;
          justify-content: space-between; margin-bottom: 24px;
        }
        .label-dot-group {
          display: flex; align-items: center; gap: 7px;
          background: #eff6ff; padding: 6px 14px; border-radius: 999px;
        }
        .dot { width: 8px; height: 8px; background: #3b82f6; border-radius: 50%; }
        .label-text { font-size: 0.85rem; font-weight: 600; color: #374151; }
        .icon-box {
          background: #eff6ff; padding: 12px; border-radius: 14px;
          transition: background 0.3s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        .stat-card:hover .icon-box { background: #dbeafe; transform: scale(1.1) rotate(-4deg); }
        .icon { width: 22px; height: 22px; color: #2563eb; }

        /* VALUE — bigger font */
        @keyframes valueIn {
          from { opacity: 0; transform: scale(0.8); }
          to   { opacity: 1; transform: scale(1); }
        }
        .value {
          font-size: 3rem;           /* ← bigger number */
          font-weight: 800;
          color: #111827;
          line-height: 1.1;
          margin-bottom: 10px;
          opacity: 0;
          animation: valueIn 0.5s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-play-state: paused;
          transition: color 0.3s ease;
        }
        .stat-card:hover .value { color: #1d4ed8; }
        .desc { font-size: 0.9rem; color: #9ca3af; }
      `}</style>

      <section className="stats-section" ref={ref}>
        <div className="stats-inner">
          <div className="stats-heading">
            <h2>🚀 Trusted by Thousands</h2>
            <p>Beautiful achievement cards with smooth animations and modern design</p>
          </div>
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <StatCard
                key={i}
                icon={stat.icon}
                label={stat.label}
                rawValue={stat.rawValue}
                suffix={stat.suffix}
                description={stat.description}
                delay={i * 120}
                visible={visible}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}