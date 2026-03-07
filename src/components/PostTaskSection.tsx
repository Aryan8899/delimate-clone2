"use client";

import { useState } from "react";

// ─── CATEGORY ICONS (matching the screenshot style closely) ──────────────────

const HomeRepairsIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
    <rect width="56" height="56" rx="12" fill="#E8F2FF"/>
    {/* toolbox */}
    <rect x="10" y="28" width="36" height="20" rx="4" fill="#7BB8F0"/>
    <rect x="10" y="28" width="36" height="7" rx="3" fill="#5499DC"/>
    <path d="M21 28v-6a7 7 0 0114 0v6" stroke="#3474C4" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
    {/* clasp */}
    <rect x="24" y="31" width="8" height="4" rx="2" fill="#3474C4" opacity="0.6"/>
    {/* lines */}
    <path d="M16 39h10M30 39h10" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.7"/>
  </svg>
);

const CleaningIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
    <rect width="56" height="56" rx="12" fill="#E8F2FF"/>
    {/* spray bottle */}
    <rect x="30" y="12" width="11" height="18" rx="3.5" fill="#7BB8F0"/>
    <rect x="28" y="17" width="5" height="3" rx="1.5" fill="#3474C4"/>
    <path d="M41 20l4-2.5M41 24h5M41 28l4 2.5" stroke="#A8D0F8" strokeWidth="1.6" strokeLinecap="round"/>
    {/* mop stick */}
    <path d="M23 12 L16 44" stroke="#A8D0F8" strokeWidth="3" strokeLinecap="round"/>
    {/* mop head */}
    <ellipse cx="14.5" cy="44" rx="7" ry="3.5" fill="#7BB8F0" opacity="0.8"/>
    {/* bubbles */}
    <circle cx="34" cy="36" r="2.5" fill="#BFDBFE" opacity="0.9"/>
    <circle cx="41" cy="34" r="1.8" fill="#DBEAFE"/>
  </svg>
);

const Cleaning2Icon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
    <rect width="56" height="56" rx="12" fill="#E8F2FF"/>
    {/* washer/lock shape */}
    <rect x="11" y="24" width="34" height="22" rx="5" fill="#7BB8F0" opacity="0.6" stroke="#5499DC" strokeWidth="1.8"/>
    <path d="M17 24v-7a11 11 0 0122 0v7" stroke="#3474C4" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
    <circle cx="28" cy="35" r="4" fill="white"/>
    <rect x="26" y="38" width="4" height="5" rx="2" fill="white"/>
    <path d="M14 29h8M34 29h8" stroke="#A8D0F8" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

const DeliveryIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
    <rect width="56" height="56" rx="12" fill="#E8F2FF"/>
    {/* truck body */}
    <rect x="5" y="23" width="28" height="17" rx="3.5" fill="#7BB8F0"/>
    {/* cab */}
    <path d="M33 30h7l6 8v4H33V30z" fill="#A8D0F8" stroke="#5499DC" strokeWidth="1.4"/>
    {/* wheels */}
    <circle cx="14" cy="43" r="5" fill="#3474C4"/>
    <circle cx="14" cy="43" r="2.5" fill="white"/>
    <circle cx="39" cy="43" r="5" fill="#3474C4"/>
    <circle cx="39" cy="43" r="2.5" fill="white"/>
    {/* cargo lines */}
    <path d="M10 30h18M10 35h18" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.55"/>
    {/* speed lines */}
    <path d="M3 27H7M3 31.5H6M3 36H5" stroke="#C3DDF8" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const WebDevIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
    <rect width="56" height="56" rx="12" fill="#E8F2FF"/>
    {/* monitor */}
    <rect x="8" y="13" width="40" height="26" rx="4" fill="#A8D0F8" opacity="0.4" stroke="#7BB8F0" strokeWidth="1.8"/>
    <rect x="10" y="15" width="36" height="22" rx="3" fill="white" opacity="0.85"/>
    {/* code */}
    <path d="M20 28l-5 2 5 2" stroke="#3474C4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M36 28l5 2-5 2" stroke="#3474C4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M31 22l-5 10" stroke="#7BB8F0" strokeWidth="2.2" strokeLinecap="round"/>
    {/* stand */}
    <rect x="22" y="39" width="12" height="4" rx="2" fill="#A8D0F8"/>
    <rect x="18" y="43" width="20" height="2.5" rx="1.2" fill="#7BB8F0" opacity="0.5"/>
  </svg>
);

const MovingIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
    <rect width="56" height="56" rx="12" fill="#E8F2FF"/>
    {/* box body */}
    <rect x="11" y="20" width="34" height="24" rx="4" fill="#C8DDEE" stroke="#7BB8F0" strokeWidth="1.8"/>
    {/* box tape cross */}
    <path d="M11 32h34" stroke="#7BB8F0" strokeWidth="1.8"/>
    <path d="M28 20v24" stroke="#7BB8F0" strokeWidth="1.8"/>
    {/* up arrow */}
    <path d="M28 8 l-6 8h12l-6-8z" fill="#7BB8F0"/>
    <path d="M28 13v7" stroke="#7BB8F0" strokeWidth="2.2" strokeLinecap="round"/>
    {/* wheels */}
    <circle cx="19" cy="46" r="3.5" fill="#5499DC"/>
    <circle cx="37" cy="46" r="3.5" fill="#5499DC"/>
  </svg>
);

const HandymanIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
    <rect width="56" height="56" rx="12" fill="#E8F2FF"/>
    {/* wrench */}
    <path d="M37 11a9 9 0 00-12 12L13 35l7 7 12-12a9 9 0 0012-12l-6 6-5-5 6-6z"
      fill="#A8D0F8" stroke="#3474C4" strokeWidth="1.8" strokeLinejoin="round"/>
    {/* small screwdriver */}
    <path d="M38 34l8 8-3 3-8-8 3-3z" fill="#7BB8F0" stroke="#5499DC" strokeWidth="1.2"/>
  </svg>
);

const SomethingElseIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
    <rect width="56" height="56" rx="12" fill="#FFFBEB"/>
    {/* bulb glass */}
    <circle cx="28" cy="23" r="12" fill="#FDE68A" stroke="#F59E0B" strokeWidth="1.8"/>
    <circle cx="28" cy="23" r="6" fill="#FCD34D" opacity="0.8"/>
    {/* rays */}
    <path d="M28 7v4M28 38v4M12 23h4M40 23h4" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M16.5 12.5l2.8 2.8M36.7 12.5l-2.8 2.8M16.5 33.5l2.8-2.8M36.7 33.5l-2.8-2.8"
      stroke="#F59E0B" strokeWidth="1.4" strokeLinecap="round"/>
    {/* base */}
    <path d="M22 34c0 3.5 12 3.5 12 0" stroke="#F59E0B" strokeWidth="1.4" fill="none"/>
    <rect x="22" y="36" width="12" height="3" rx="1.5" fill="#F59E0B" opacity="0.65"/>
    <rect x="23.5" y="39" width="9" height="2.5" rx="1.2" fill="#F59E0B" opacity="0.45"/>
  </svg>
);

const categories = [
  { title: "Home Repairs",    description: "Plumbing, electrical & more",  Icon: HomeRepairsIcon },
  { title: "Cleaning",        description: "Home & office cleaning",         Icon: CleaningIcon },
  { title: "Cleaning",        description: "Home & office cleaning",         Icon: Cleaning2Icon },
  { title: "Delivery",        description: "Courier and pickup services",    Icon: DeliveryIcon },
  { title: "Web Development", description: "Websites and coding",            Icon: WebDevIcon },
  { title: "Moving Help",     description: "Packing, wrapping, moving",      Icon: MovingIcon },
  { title: "Handyman",        description: "Fixing, installing, assembling", Icon: HandymanIcon },
  { title: "Something Else",  description: "Give us a unique task",          Icon: SomethingElseIcon },
];

// ─── GIRL ILLUSTRATION ────────────────────────────────────────────────────────
const GirlIllustration = () => (
  <svg viewBox="0 0 340 250" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 340 }}>
    <defs>
      <filter id="card-shadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#2563EB" floodOpacity="0.1"/>
      </filter>
    </defs>

    {/* ground shadow */}
    <ellipse cx="162" cy="238" rx="110" ry="12" fill="#C5D9F0" opacity="0.4"/>

    {/* ── background wave/blob shapes ── */}
    <ellipse cx="162" cy="200" rx="150" ry="60" fill="#D6E8FA" opacity="0.25"/>
    <path d="M30 190 Q80 170 130 185 Q180 200 240 175 Q290 155 320 180 L320 250 L30 250Z" fill="#D6E8FA" opacity="0.2"/>

    {/* ── floating cards ── */}
    {/* top-left card */}
    <rect x="2" y="30" width="76" height="42" rx="11" fill="white" filter="url(#card-shadow)"/>
    <rect x="11" y="41" width="20" height="20" rx="6" fill="#EAF3FF"/>
    <path d="M16 51h10M16 56h7" stroke="#BFDBFE" strokeWidth="2" strokeLinecap="round"/>
    <rect x="37" y="43" width="32" height="5" rx="2.5" fill="#DBEAFE"/>
    <rect x="37" y="52" width="24" height="4" rx="2" fill="#EFF6FF"/>

    {/* top-right card */}
    <rect x="258" y="18" width="76" height="42" rx="11" fill="white" filter="url(#card-shadow)"/>
    <rect x="267" y="29" width="20" height="20" rx="6" fill="#EAF3FF"/>
    <path d="M272 39h10M272 44h7" stroke="#BFDBFE" strokeWidth="2" strokeLinecap="round"/>
    <rect x="293" y="31" width="32" height="5" rx="2.5" fill="#DBEAFE"/>
    <rect x="293" y="40" width="24" height="4" rx="2" fill="#EFF6FF"/>

    {/* chat bubble (left side, mid) */}
    <rect x="48" y="90" width="62" height="34" rx="11" fill="white" filter="url(#card-shadow)"/>
    <circle cx="65" cy="107" r="5" fill="#60A5FA" opacity="0.75"/>
    <circle cx="79" cy="107" r="5" fill="#93C5FD" opacity="0.55"/>
    <circle cx="93" cy="107" r="5" fill="#BFDBFE" opacity="0.4"/>
    <path d="M59 124 l6-5h-7z" fill="white"/>

    {/* question-mark bubble */}
    <circle cx="210" cy="100" r="21" fill="white" filter="url(#card-shadow)"/>
    <text x="202" y="108" fontSize="22" fill="#93C5FD" fontWeight="bold" fontFamily="Arial,sans-serif">?</text>

    {/* small floating icons */}
    <rect x="256" y="78" width="36" height="28" rx="8" fill="white" filter="url(#card-shadow)"/>
    <text x="264" y="97" fontSize="16">💳</text>

    {/* ── PLANT ── */}
    <rect x="252" y="172" width="14" height="38" rx="3" fill="#94A3B8" opacity="0.55"/>
    <ellipse cx="255" cy="158" rx="22" ry="24" fill="#34D399" opacity="0.68"/>
    <ellipse cx="272" cy="166" rx="16" ry="18" fill="#10B981" opacity="0.58"/>
    <ellipse cx="242" cy="170" rx="12" ry="14" fill="#6EE7B7" opacity="0.5"/>

    {/* ── PERSON ── */}

    {/* torso – orange */}
    <path d="M120 158 Q121 133 162 131 Q203 133 204 158 L200 205 H124 Z" fill="#F97316"/>
    {/* sweater hem/cuff detail */}
    <path d="M124 200 Q143 208 162 208 Q181 208 200 200" stroke="#EA6500" strokeWidth="2" fill="none" strokeLinecap="round"/>
    {/* collar V */}
    <path d="M152 131 Q162 141 172 131" stroke="#EA6500" strokeWidth="1.8" fill="none" strokeLinecap="round"/>

    {/* left arm resting */}
    <path d="M122 154 Q100 162 93 178 Q101 184 111 181 Q117 166 128 160z" fill="#F5C08A"/>
    <ellipse cx="92" cy="181" rx="7" ry="5" fill="#F5C08A" transform="rotate(-15 92 181)"/>

    {/* right arm (holding phone upright) */}
    <path d="M202 152 Q222 157 228 170 Q221 177 212 174 Q208 160 196 157z" fill="#F5C08A"/>

    {/* phone held in right hand */}
    <rect x="214" y="150" width="24" height="40" rx="5" fill="#1E3A5F"/>
    <rect x="216" y="153" width="20" height="32" rx="4" fill="#60A5FA" opacity="0.55"/>
    <rect x="221" y="184" width="10" height="2.5" rx="1.2" fill="#93C5FD" opacity="0.6"/>
    {/* phone screen icons */}
    <rect x="218" y="156" width="8" height="5" rx="1.5" fill="white" opacity="0.4"/>
    <rect x="228" y="156" width="6" height="5" rx="1.5" fill="white" opacity="0.3"/>

    {/* crossed legs */}
    {/* left leg */}
    <path d="M130 200 Q110 212 104 228 Q120 234 140 230 Q144 216 150 206z" fill="#F5C08A"/>
    {/* right leg (on top) */}
    <path d="M182 200 Q202 212 208 228 Q192 234 172 230 Q168 216 162 206z" fill="#F5C08A"/>

    {/* left shoe */}
    <ellipse cx="110" cy="230" rx="20" ry="8" fill="#1E3A5F" opacity="0.9" transform="rotate(-10 110 230)"/>
    {/* right shoe */}
    <ellipse cx="202" cy="230" rx="20" ry="8" fill="#1E3A5F" opacity="0.9" transform="rotate(10 202 230)"/>
    {/* white shoe stripe */}
    <path d="M98 228 Q110 222 124 226" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
    <path d="M190 226 Q202 222 216 228" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>

    {/* neck */}
    <rect x="154" y="115" width="16" height="16" rx="5" fill="#F5C08A"/>

    {/* head */}
    <circle cx="162" cy="100" r="27" fill="#F5C08A"/>

    {/* hair – dark brown, flat style */}
    {/* main top hair */}
    <path d="M135 93 Q137 64 162 62 Q187 64 189 93 Q183 75 162 73 Q141 75 135 93z" fill="#2D1F0E"/>
    {/* left side curtain */}
    <path d="M135 93 Q128 103 130 116 Q137 109 135 100z" fill="#2D1F0E"/>
    {/* right side curtain */}
    <path d="M189 93 Q196 101 195 112 Q188 107 189 99z" fill="#2D1F0E"/>

    {/* ears */}
    <ellipse cx="135" cy="100" rx="5" ry="6" fill="#F0A868"/>
    <ellipse cx="189" cy="100" rx="5" ry="6" fill="#F0A868"/>

    {/* eyebrows */}
    <path d="M148 89 Q154 85 160 88" stroke="#2D1F0E" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M164 88 Q170 85 176 89" stroke="#2D1F0E" strokeWidth="2" strokeLinecap="round" fill="none"/>

    {/* eyes – happy curved (matching screenshot) */}
    <path d="M147 96 Q154 91 161 96" stroke="#2D1F0E" strokeWidth="2.8" fill="none" strokeLinecap="round"/>
    <path d="M163 96 Q170 91 177 96" stroke="#2D1F0E" strokeWidth="2.8" fill="none" strokeLinecap="round"/>

    {/* smile */}
    <path d="M152 108 Q162 115 172 108" stroke="#2D1F0E" strokeWidth="2" fill="none" strokeLinecap="round"/>

    {/* blush */}
    <ellipse cx="145" cy="106" rx="6" ry="3.5" fill="#FCA5A5" opacity="0.32"/>
    <ellipse cx="179" cy="106" rx="6" ry="3.5" fill="#FCA5A5" opacity="0.32"/>

    {/* decorative floating dots */}
    <circle cx="54" cy="158" r="5" fill="#BFDBFE" opacity="0.55"/>
    <circle cx="43" cy="172" r="3.5" fill="#93C5FD" opacity="0.45"/>
    <circle cx="270" cy="120" r="5" fill="#BFDBFE" opacity="0.45"/>
    <circle cx="283" cy="136" r="3.5" fill="#93C5FD" opacity="0.38"/>
  </svg>
);

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function PostTaskSection() {
  const [, setHovered] = useState<number | null>(null);

  return (
    <section style={{
      background: "linear-gradient(160deg,#EEF6FF 0%,#F4F9FF 40%,#EAF0FD 100%)",
      fontFamily: "'Nunito','Segoe UI',sans-serif",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      padding: "44px 36px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* subtle background blobs */}
      <div style={{
        position: "absolute", top: "-80px", right: "-80px",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle,#DBEAFE 0%,transparent 70%)",
        opacity: 0.5, pointerEvents: "none",
      }}/>
      <div style={{
        position: "absolute", bottom: "-60px", left: "30%",
        width: 300, height: 200, borderRadius: "50%",
        background: "radial-gradient(circle,#DBEAFE 0%,transparent 70%)",
        opacity: 0.35, pointerEvents: "none",
      }}/>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');

        .task-btn-sm {
          background: linear-gradient(135deg,#2563EB,#3B82F6);
          color: white; border: none; border-radius: 22px;
          padding: 8px 22px; font-size: 13px; font-weight: 700;
          cursor: pointer; font-family: 'Nunito',sans-serif;
          transition: all 0.18s ease;
          box-shadow: 0 2px 10px rgba(37,99,235,0.3);
          white-space: nowrap; display: inline-block;
        }
        .task-btn-sm:hover {
          background: linear-gradient(135deg,#1d4ed8,#2563EB);
          box-shadow: 0 4px 16px rgba(37,99,235,0.44);
          transform: translateY(-1px);
        }
        .task-btn-hero {
          background: linear-gradient(135deg,#2563EB,#3B82F6);
          color: white; border: none; border-radius: 28px;
          padding: 13px 32px; font-size: 15.5px; font-weight: 800;
          cursor: pointer; font-family: 'Nunito',sans-serif;
          transition: all 0.18s ease;
          box-shadow: 0 4px 18px rgba(37,99,235,0.34);
        }
        .task-btn-hero:hover {
          box-shadow: 0 6px 24px rgba(37,99,235,0.5);
          transform: translateY(-2px);
        }
        .cat-card {
          background: white; border-radius: 16px;
          padding: 16px 16px 14px 16px;
          display: flex; flex-direction: column; gap: 0;
          transition: all 0.2s ease;
          box-shadow: 0 2px 12px rgba(37,99,235,0.07);
          border: 1.5px solid rgba(200,220,250,0.6);
          min-height: 130px; justify-content: space-between;
        }
        .cat-card:hover {
          box-shadow: 0 8px 28px rgba(37,99,235,0.14);
          transform: translateY(-4px);
          border-color: rgba(37,99,235,0.16);
        }
        .see-all-btn {
          color: #2563EB; font-weight: 700; font-size: 13.5px;
          background: none; border: none; cursor: pointer;
          display: inline-flex; align-items: center; gap: 4px;
          font-family: 'Nunito',sans-serif;
          padding: 0; transition: gap 0.18s;
        }
        .see-all-btn:hover { gap: 8px; }
        .step-dot {
          width: 24px; height: 24px; border-radius: 50%;
          background: #DBEAFE; color: #2563EB;
          font-weight: 900; font-size: 12px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
      `}</style>

      <div style={{
        maxWidth: 1140, margin: "0 auto", width: "100%",
        display: "flex", gap: 48, alignItems: "center",
        position: "relative", zIndex: 1,
      }}>

        {/* ── LEFT PANEL ── */}
        <div style={{ flex: "0 0 310px" }}>
          <h1 style={{
            fontSize: 42, fontWeight: 900, color: "#172F52",
            lineHeight: 1.12, margin: "0 0 16px",
            letterSpacing: "-0.025em",
          }}>
            Post a task<br/>
            <span style={{ color: "#2563EB" }}>in minutes</span>
          </h1>

          <p style={{ color: "#4B6A8A", fontSize: 14.5, lineHeight: 1.68, marginBottom: 24, margin: "0 0 24px" }}>
            Need something done? Describe your needs<br/>
            and get offers from local skilled Taskers.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 30 }}>
            {[
              { n: 1, label: <span>Describe your <strong>task</strong></span> },
              { n: 2, label: <span>Set your <strong>budget</strong></span> },
              { n: 3, label: <span>Get offers and hire the best Tasker</span> },
            ].map(({ n, label }) => (
              <div key={n} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div className="step-dot">{n}</div>
                <span style={{ color: "#2D3F55", fontSize: 14.5, fontWeight: 500 }}>{label}</span>
              </div>
            ))}
          </div>

          <button className="task-btn-hero">Post a Task</button>

          <div style={{ marginTop: 20 }}>
            <GirlIllustration />
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div style={{ flex: 1 }}>
          <h2 style={{
            fontSize: 20, fontWeight: 800, color: "#172F52",
            textAlign: "center", marginBottom: 20,
            letterSpacing: "-0.01em",
          }}>
            Popular Categories
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 13 }}>
            {categories.map(({ title, description, Icon }, i) => (
              <div
                key={i}
                className="cat-card"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* icon + text row */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <div style={{ flexShrink: 0 }}>
                    <Icon />
                  </div>
                  <div>
                    <div style={{
                      fontWeight: 800, fontSize: 14, color: "#172F52", lineHeight: 1.25,
                    }}>{title}</div>
                    <div style={{
                      fontSize: 12, color: "#6B7280", marginTop: 3, lineHeight: 1.4,
                    }}>{description}</div>
                  </div>
                </div>
                {/* button — left-aligned, NOT full width */}
                <div>
                  <button className="task-btn-sm">Post a Task</button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "right", marginTop: 16 }}>
            <button className="see-all-btn">
              See All Categories <span style={{ fontSize: 16, lineHeight: 1 }}>›</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}