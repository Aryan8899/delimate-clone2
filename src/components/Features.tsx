"use client";

import { Check } from 'lucide-react';

export default function Features() {
  return (
    <section className="py-20 px-6 bg-white">
      <style>{`
        @keyframes scan {
          0%   { top: 8%; }
          100% { top: 88%; }
        }
        .scanning-beam {
          animation: scan 1.8s ease-in-out infinite alternate;
          position: absolute; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #4ade80, transparent);
          box-shadow: 0 0 8px 2px #4ade80;
        }

        @keyframes rocketFly {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes flamePulse {
          0%, 100% { opacity: 1; transform: scaleY(1); }
          50%       { opacity: 0.6; transform: scaleY(1.4); }
        }
        @keyframes speedLines {
          0%   { opacity: 0; transform: translateX(0); }
          50%  { opacity: 1; }
          100% { opacity: 0; transform: translateX(-20px); }
        }
        .rocket-group  { animation: rocketFly 2s ease-in-out infinite; }
        .flames-group  { animation: flamePulse 0.4s ease-in-out infinite; transform-origin: top center; }
        .speed-line    { animation: speedLines 1s ease-in-out infinite; }
        .speed-line:nth-child(2) { animation-delay: 0.18s; }
        .speed-line:nth-child(3) { animation-delay: 0.36s; }

        @keyframes stepYellowGlow {
          0%, 100% { background: rgba(255,255,255,0.25); box-shadow: none; color: white; }
          50%       { background: #F59E0B; box-shadow: 0 0 14px 6px rgba(245,158,11,0.8), 0 0 28px 12px rgba(245,158,11,0.35); color: white; }
        }
        .step-circle-1 { animation: stepYellowGlow 2.0s ease-in-out infinite; animation-delay: 0.0s; }
        .step-circle-2 { animation: stepYellowGlow 2.0s ease-in-out infinite; animation-delay: 0.4s; }
        .step-circle-3 { animation: stepYellowGlow 2.0s ease-in-out infinite; animation-delay: 0.8s; }
        .step-circle-4 { animation: stepYellowGlow 2.0s ease-in-out infinite; animation-delay: 1.2s; }
        .step-circle-5 { animation: stepYellowGlow 2.0s ease-in-out infinite; animation-delay: 1.6s; }

        .ring-icon {
          position: absolute;
          width: 28px; height: 28px;
          display: flex; align-items: center; justify-content: center;
          font-size: 16px;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.35);
        }
        .ring-icon-top    { top: -14px; left: 50%; transform: translateX(-50%); }
        .ring-icon-right  { right: -14px; top: 50%; transform: translateY(-50%); }
        .ring-icon-bottom { bottom: -14px; left: 50%; transform: translateX(-50%); }
        .ring-icon-left   { left: -14px; top: 50%; transform: translateY(-50%); }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Send With <span className="text-blue-500">heart</span>
          </h2>
          <h3 className="text-4xl font-bold text-gray-900">
            Travel with <span className="text-blue-500">Purpose</span>
          </h3>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

          {/* LIVE TRACKING */}
          <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl p-8 text-white overflow-hidden min-h-[320px] flex flex-row items-center gap-6">
            <div className="flex-1 flex flex-col gap-5">
              <h3 className="text-4xl font-extrabold leading-tight">Live Tracking</h3>
              <p className="text-white/90 text-xl leading-snug">
                Track your packages in real-time with precise location updates
              </p>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full w-fit">
                <div className="w-2.5 h-2.5 bg-green-300 rounded-full animate-pulse" />
                <span className="text-sm font-semibold">Active now</span>
              </div>
            </div>

            <div className="flex-shrink-0 w-52 h-52 relative">
              <svg className="absolute inset-0 w-full h-full rounded-2xl" viewBox="0 0 208 208">
                {[52,104,156].map(y=>(
                  <line key={y} x1="0" y1={y} x2="208" y2={y} stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                ))}
                {[52,104,156].map(x=>(
                  <line key={x} x1={x} y1="0" x2={x} y2="208" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                ))}
                <path d="M20 168 Q80 130 104 104 Q130 78 188 40"
                  fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="18" strokeLinecap="round"/>
                <path d="M20 168 Q80 130 104 104 Q130 78 188 40"
                  fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2.5" strokeDasharray="12 7">
                  <animate attributeName="stroke-dashoffset" from="0" to="-76" dur="1.5s" repeatCount="indefinite"/>
                </path>
                <circle cx="20" cy="168" r="9" fill="rgba(255,255,255,0.25)"/>
                <circle cx="20" cy="168" r="5" fill="white"/>
                <circle cx="188" cy="40" r="18" fill="rgba(255,255,255,0.1)">
                  <animate attributeName="r" values="11;22;11" dur="2s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="188" cy="40" r="9" fill="white"/>
                <circle cx="188" cy="40" r="4" fill="#4ade80"/>
                <circle r="7" fill="#fde68a" stroke="white" strokeWidth="2">
                  <animateMotion dur="2.5s" repeatCount="indefinite"
                    path="M20 168 Q80 130 104 104 Q130 78 188 40"/>
                </circle>
              </svg>
            </div>
          </div>

          {/* KYC VERIFICATION */}
          <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl p-8 text-white overflow-hidden min-h-[320px] flex flex-row items-center gap-6">
            <div className="flex-1 flex flex-col gap-4 self-stretch justify-between">
              <div>
                <h3 className="text-4xl font-extrabold leading-tight mb-3">KYC Verification</h3>
                <p className="text-white/90 text-xl leading-snug">
                  Secure identity verification for trusted deliveries
                </p>
              </div>
              <div className="text-sm text-white/90 font-semibold">✅ Verified &amp; Secure</div>
            </div>

            <div className="flex-shrink-0 flex items-center justify-center">
              <div className="w-44 h-56 bg-white rounded-2xl shadow-2xl relative overflow-hidden border border-white/30">
                <div className="h-7 bg-gradient-to-r from-orange-400 to-yellow-300 w-full" />
                <div className="p-3 flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center mt-1">
                    <svg viewBox="0 0 40 40" width="40" height="40">
                      <circle cx="20" cy="15" r="8" fill="#9ca3af"/>
                      <ellipse cx="20" cy="34" rx="14" ry="8" fill="#9ca3af"/>
                    </svg>
                  </div>
                  <div className="w-full space-y-1.5 mt-1">
                    <div className="h-2.5 bg-gray-200 rounded-full w-full"/>
                    <div className="h-2.5 bg-gray-200 rounded-full w-2/3 mx-auto"/>
                    <div className="h-2 bg-gray-100 rounded-full w-full mt-2"/>
                    <div className="h-2 bg-gray-100 rounded-full w-4/5"/>
                    <div className="h-2 bg-gray-100 rounded-full w-3/5"/>
                  </div>
                </div>
                <div className="scanning-beam"/>
                <div className="absolute -top-2 -right-2 w-9 h-9 bg-green-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                  <Check className="w-4 h-4 text-white" strokeWidth={3}/>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* FAST & AFFORDABLE */}
          <div className="bg-gradient-to-br from-blue-400 to-cyan-400 rounded-3xl p-8 text-white relative overflow-hidden min-h-[300px] flex flex-row items-center gap-6">
            <div className="flex-1 flex flex-col gap-4">
              <h3 className="text-4xl font-extrabold leading-tight">Fast &amp; Affordable</h3>
              <p className="text-white/90 text-xl leading-snug">
                Best rates guaranteed with lightning-fast delivery
              </p>
            </div>

            <div className="flex-shrink-0 flex items-center justify-center w-40 h-44">
              <svg width="160" height="176" viewBox="0 0 128 160">
                <g>
                  <line className="speed-line" x1="2"  y1="72" x2="28" y2="72" stroke="rgba(255,255,255,0.6)" strokeWidth="2.5" strokeLinecap="round"/>
                  <line className="speed-line" x1="0"  y1="86" x2="24" y2="86" stroke="rgba(255,255,255,0.6)" strokeWidth="2.5" strokeLinecap="round"/>
                  <line className="speed-line" x1="4"  y1="100" x2="26" y2="100" stroke="rgba(255,255,255,0.6)" strokeWidth="2.5" strokeLinecap="round"/>
                </g>
                <g className="rocket-group" style={{transformOrigin:'75px 75px'}}>
                  <ellipse cx="75" cy="72" rx="14" ry="26" fill="white" opacity="0.95"/>
                  <ellipse cx="75" cy="48" rx="9"  ry="13" fill="white"/>
                  <circle  cx="75" cy="68" r="6" fill="rgba(0,150,255,0.3)" stroke="white" strokeWidth="2"/>
                  <circle  cx="75" cy="68" r="2.5" fill="white" opacity="0.8"/>
                  <path d="M61 86 L53 104 L67 94 Z" fill="rgba(255,255,255,0.7)"/>
                  <path d="M89 86 L97 104 L83 94 Z" fill="rgba(255,255,255,0.7)"/>
                  <g className="flames-group">
                    <ellipse cx="75" cy="102" rx="7"  ry="12" fill="#FDE68A" opacity="0.9"/>
                    <ellipse cx="75" cy="105" rx="4"  ry="7"  fill="#FCD34D"/>
                  </g>
                </g>
              </svg>
            </div>
            <div className="absolute -right-10 -bottom-10 w-44 h-44 border-8 border-white/15 rounded-full pointer-events-none"/>
          </div>

          {/* 5 STEP VERIFICATION */}
          <div className="bg-gradient-to-br from-[#FF3659] to-[#FF006E] rounded-3xl p-8 text-white relative overflow-hidden min-h-[300px] flex flex-row items-center gap-6">
            <div className="flex-1 min-w-0 flex flex-col gap-4">
              <h3 className="text-4xl font-extrabold leading-tight">5 Step Verification</h3>
              <p className="text-white/90 text-xl leading-snug">
                Comprehensive security process for maximum safety
              </p>
              <div className="flex items-center gap-3 mt-1">
                {[1,2,3,4,5].map(step=>(
                  <div key={step} className="flex flex-col items-center gap-1.5">
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm border-2 border-white/40 step-circle-${step}`}
                      style={{color:'white'}}
                    >
                      {step}
                    </div>
                    <span className="text-xs text-white/80">Step {step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-shrink-0 relative w-44 h-44">
              <svg width="176" height="176" viewBox="0 0 176 176" className="absolute inset-0 -rotate-90 w-full h-full">
                <circle cx="88" cy="88" r="72" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="12"/>
                <circle cx="88" cy="88" r="72" fill="none" stroke="white" strokeWidth="12"
                  strokeLinecap="round" strokeDasharray="452" strokeDashoffset="452">
                  <animate attributeName="stroke-dashoffset"
                    from="452" to="0" dur="2.5s"
                    repeatCount="indefinite"
                    calcMode="spline" keySplines="0.4 0 0.2 1"/>
                </circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-6xl font-black leading-none">5</span>
                <span className="text-xs font-semibold tracking-widest text-white/80 mt-1">STEPS</span>
              </div>
              <div className="ring-icon ring-icon-top">🔒</div>
              <div className="ring-icon ring-icon-right">🛡️</div>
              <div className="ring-icon ring-icon-bottom">🔑</div>
              <div className="ring-icon ring-icon-left">✅</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}