"use client";

import { useEffect, useState } from 'react';

const APP_SCREENSHOTS = [
  '/dum1.png',
  '/dum2.png',
  '/dum3.png',
  '/dum4.png',
];

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [currentScreen, setCurrentScreen] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen(prev => (prev + 1) % APP_SCREENSHOTS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=Inter:wght@400;500;600&display=swap');

        .hw * { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Background: light lavender/purple like reference ── */
        .hw {
          font-family: 'Nunito', sans-serif;
          background: linear-gradient(120deg, #ffffff 0%, #ffffff 50%, #ede9fe 70%, #ddd6fe 85%, #c4b5fd 100%);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }
        .hw-main {
          display: flex;
          align-items: center;
          min-height: 88vh;
          padding: 160px 0 80px;
          width: 100%;
        }

        /* subtle deeper purple swirl bottom-right */
        .hw-blob {
          position: absolute;
          bottom: -100px;
          right: -80px;
          width: 600px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(ellipse at 50% 50%, #d8ccff 0%, #c9b8ff 40%, transparent 72%);
          pointer-events: none;
          z-index: 0;
        }
        .hw-blob2 {
          position: absolute;
          bottom: 0;
          right: 100px;
          width: 350px;
          height: 250px;
          border-radius: 50%;
          background: radial-gradient(ellipse, #cbbfff 0%, transparent 68%);
          pointer-events: none;
          z-index: 0;
          opacity: 0.6;
        }

        .hw-inner {
          max-width: 1200px;
          margin: 0 auto;
          /* left/right padding exactly like reference — generous spacing */
          padding: 0 60px 0 30px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 1;
          gap: 40px;
        }

        /* ── LEFT ── */
        .hw-left {
          flex: 1;
          max-width: 640px;
          padding-left: 0;
        }

        /* Heading — near-black, very heavy, same as reference */
        .hw-h1 {
          font-family: 'Nunito', sans-serif;
          font-size: 3.2rem;
          font-weight: 900;
          line-height: 1.08;
          color: #1a1040;
          margin-bottom: 20px;
          letter-spacing: -0.03em;
          white-space: nowrap;
        }

        /* small gray divider line under heading */
        .hw-divider {
          width: 40px;
          height: 3px;
          background: #b0a8c8;
          border-radius: 2px;
          margin-bottom: 20px;
        }

        /* subtext — light gray, Inter, same as reference */
        .hw-sub {
          font-family: 'Inter', sans-serif;
          font-size: 0.98rem;
          color: #6b6484;
          line-height: 1.75;
          margin-bottom: 36px;
          max-width: 440px;
          font-weight: 400;
        }

        .hw-btns {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        /* solid purple pill — exactly like reference */
        .hw-btn-primary {
          padding: 14px 36px;
          border-radius: 50px;
          background: #7c3aed;
          color: white;
          border: none;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          box-shadow: 0 6px 20px rgba(124,58,237,0.4);
        }
        .hw-btn-primary:hover {
          background: #6d28d9;
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(124,58,237,0.5);
        }

        /* outlined white pill — exactly like reference */
        .hw-btn-secondary {
          padding: 13px 36px;
          border-radius: 50px;
          background: white;
          color: #374151;
          border: 1.5px solid #e5e7eb;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .hw-btn-secondary:hover {
          border-color: #7c3aed;
          color: #6d28d9;
          transform: translateY(-2px);
        }

        /* ── RIGHT ── */
        .hw-right {
          flex: 0 0 auto;
          position: relative;
          width: 480px;
          height: 520px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          /* extra right breathing room */
          padding-right: 20px;
        }

        .hw-phone {
          position: absolute;
          right: 30px;
          bottom: 0;
          width: 220px;
          transform: rotate(6deg);
          filter: drop-shadow(0 30px 60px rgba(109,40,217,0.28));
          z-index: 5;
        }

        .hw-phone-shell {
          width: 220px;
          height: 460px;
          border-radius: 34px;
          background: #1e1b4b;
          position: relative;
          overflow: hidden;
          box-shadow:
            0 0 0 7px rgba(255,255,255,0.9),
            0 0 0 9px #c4b5fd,
            0 24px 70px rgba(109,40,217,0.35);
        }

        .hw-notch {
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 85px; height: 22px; background: #0f0e1a;
          border-radius: 0 0 14px 14px; z-index: 10;
        }
        .hw-home {
          position: absolute; bottom: 8px; left: 50%; transform: translateX(-50%);
          width: 55px; height: 4px; background: rgba(255,255,255,0.25);
          border-radius: 4px; z-index: 10;
        }

        .hw-screen {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          transition: opacity 0.5s ease;
        }

        .hw-ph {
          position: absolute; inset: 0; z-index: 0;
          background: linear-gradient(160deg, #f5f3ff 0%, #ede9fe 60%, #ddd6fe 100%);
          display: flex; flex-direction: column; gap: 7px;
          padding: 32px 11px 14px;
        }
        .ph-top {
          background: white; border-radius: 11px; padding: 8px 11px;
          display: flex; align-items: center; justify-content: space-between;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }
        .ph-appname { font-size: 0.75rem; font-weight: 800; color: #1e1b4b; }
        .ph-avatar  { width: 20px; height: 20px; border-radius: 50%; background: linear-gradient(135deg,#7c3aed,#a78bfa); }
        .ph-item {
          background: white; border-radius: 11px; padding: 8px 11px;
          display: flex; align-items: center; gap: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        .ph-ic  { width: 28px; height: 28px; border-radius: 8px; display:flex;align-items:center;justify-content:center;font-size:0.8rem;flex-shrink:0; }
        .ph-tt  { font-size: 0.63rem; font-weight: 700; color: #1e1b4b; }
        .ph-ts  { font-family:'Inter',sans-serif; font-size: 0.55rem; color:#7c3aed; }
        .ph-map { flex: 1; border-radius: 11px; background: linear-gradient(135deg,#ede9fe,#c4b5fd); min-height: 65px; display:flex;align-items:center;justify-content:center;font-size:1.4rem; }
        .ph-tabs { display:flex; justify-content:space-around; background:white; border-radius:11px; padding:7px 4px; box-shadow:0 2px 8px rgba(0,0,0,0.05); }
        .ph-tab  { font-size:0.5rem; color:#7c3aed; font-family:'Inter',sans-serif; font-weight:600; display:flex;flex-direction:column;align-items:center;gap:2px; }

        .hw-card {
          position: absolute;
          background: white;
          border-radius: 16px;
          padding: 12px 18px;
          box-shadow: 0 6px 28px rgba(109,40,217,0.13);
          display: flex; align-items: center; gap: 12px;
          white-space: nowrap; z-index: 10;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hw-card:hover { transform: translateY(-3px) !important; box-shadow: 0 14px 40px rgba(109,40,217,0.2); }
        .hw-ci { width: 44px; height: 44px; border-radius: 13px; display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0;background:#ede9fe; }
        .hw-cv { font-size: 1.2rem; font-weight: 900; color: #1e1b4b; line-height: 1; font-family:'Nunito',sans-serif; }
        .hw-cl { font-family:'Inter',sans-serif; font-size: 0.68rem; color: #7c3aed; font-weight: 600; margin-top: 3px; }

        .hc1 { left: 10px; top: 100px; }
        .hc2 { left: 0px;  top: 260px; }

        .hw-orb { position: absolute; border-radius: 50%; pointer-events: none; }
        .o1 { width:50px;height:50px;background:radial-gradient(circle at 35% 35%,#c4b5fd,#7c3aed);top:20px;right:20px;opacity:0.65;filter:blur(1px); }
        .o2 { width:32px;height:32px;background:radial-gradient(circle at 35% 35%,#ddd6fe,#a78bfa);bottom:100px;right:0px;opacity:0.55; }
        .o3 { width:22px;height:22px;background:radial-gradient(circle at 35% 35%,#ede9fe,#c4b5fd);top:160px;left:0px;opacity:0.5; }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(26px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes phoneIn {
          from { opacity:0; transform:rotate(6deg) translateY(50px); }
          to   { opacity:1; transform:rotate(6deg) translateY(0); }
        }
        @keyframes cardIn {
          from { opacity:0; transform:translateX(-30px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes floatPhone {
          0%,100% { transform:rotate(6deg) translateY(0); }
          50%      { transform:rotate(6deg) translateY(-14px); }
        }

        .vis .ah1  { animation: fadeUp 0.6s ease 0.1s both; }
        .vis .adiv { animation: fadeUp 0.5s ease 0.22s both; }
        .vis .asub { animation: fadeUp 0.6s ease 0.3s both; }
        .vis .abtn { animation: fadeUp 0.5s ease 0.44s both; }
        .vis .aph  { animation: phoneIn 0.9s cubic-bezier(0.22,1,0.36,1) 0.2s both; }
        .vis .ac1  { animation: cardIn 0.6s cubic-bezier(0.22,1,0.36,1) 0.7s both; }
        .vis .ac2  { animation: cardIn 0.6s cubic-bezier(0.22,1,0.36,1) 0.85s both; }

        .ph-float { animation: floatPhone 4s ease-in-out 1.2s infinite; }

        @media (max-width: 900px) {
          .hw-inner { flex-direction:column; align-items:center; padding:40px 24px; }
          .hw-left  { max-width:100%; padding-left:0; text-align:center; display:flex; flex-direction:column; align-items:center; }
          .hw-btns  { justify-content:center; }
          .hw-right { width:100%; max-width:360px; height:420px; margin-top:30px; padding-right:0; }
          .hw-phone { right:50%; transform:translateX(50%) rotate(6deg); }
          .hc1 { left:0; top:60px; }
          .hc2 { left:0; top:210px; }
        }
      `}</style>

      <div className={`hw${visible ? ' vis' : ''}`}>
        <div className="hw-blob" />
        <div className="hw-blob2" />

        <div className="hw-main">
        <div className="hw-inner">

          {/* ── LEFT ── */}
          <div className="hw-left">
            <h1 className="hw-h1 ah1">
              Get Work Done.<br />
              Anytime. Anywhere.
            </h1>

            <div className="hw-divider adiv" />

            <p className="hw-sub asub">
              India's smart task marketplace where you can post jobs,<br />
              hire skilled people, or earn money by completing tasks around you.
            </p>

            <div className="abtn" style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
              {/* Row 1: Post a Task + Earn as a Tasker */}
              <div style={{ display:'flex', gap:'12px', alignItems:'center' }}>
                <button className="hw-btn-primary">Post a Task</button>
                <button className="hw-btn-secondary">Earn as a Tasker</button>
              </div>

              {/* Row 2: Black download buttons */}
              <div style={{ display:'flex', gap:'12px', alignItems:'center',marginLeft:'30px' , marginTop:'20px'  }}>
                {[
                  { sm:'GET IT ON', lg:'Google Play', icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg> },
                  { sm:'DOWNLOAD ON THE', lg:'App Store', icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/></svg> },
                ].map((btn,i) => (
                  <a key={i} href="#" style={{
                    display:'flex', alignItems:'center', gap:'8px',
                    background:'#111', border:'1.5px solid #333',
                    borderRadius:'50px', padding:'10px 22px',
                    textDecoration:'none', cursor:'pointer',
                    transition:'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 8px 24px rgba(0,0,0,0.25)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none'; }}
                  >
                    {btn.icon}
                    <div style={{ fontFamily:'Inter,sans-serif' }}>
                      <div style={{ fontSize:'0.5rem', color:'#888', fontWeight:600, letterSpacing:'0.06em', textTransform:'uppercase', lineHeight:1 }}>{btn.sm}</div>
                      <div style={{ fontSize:'0.85rem', color:'#fff', fontWeight:800, lineHeight:1.3, marginTop:'2px' }}>{btn.lg}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="hw-right">
            <div className="hw-orb o1" />
            <div className="hw-orb o2" />
            <div className="hw-orb o3" />

            <div className="hw-card hc1 ac1">
              <div className="hw-ci">📋</div>
              <div>
                <div className="hw-cv">1,000+</div>
                <div className="hw-cl">Tasks Posted</div>
              </div>
            </div>

            <div className="hw-card hc2 ac2">
              <div className="hw-ci" style={{ background:'#dcfce7' }}>👷</div>
              <div>
                <div className="hw-cv">500+</div>
                <div className="hw-cl">Active Taskers</div>
              </div>
            </div>

            <div className="hw-phone aph ph-float">
              <div className="hw-phone-shell">
                <div className="hw-notch" />
                <div className="hw-home" />

                {APP_SCREENSHOTS.map((src, idx) => (
                  <img key={idx} src={src} alt="" className="hw-screen"
                    style={{ opacity: idx === currentScreen ? 1 : 0, zIndex: idx === currentScreen ? 5 : 1 }}
                  />
                ))}

                <div className="hw-ph">
                  <div className="ph-top">
                    <span className="ph-appname">Mobrib</span>
                    <div className="ph-avatar" />
                  </div>
                  {[
                    { i:'📋', t:'Post a Task',    s:'Find skilled people', bg:'#ede9fe' },
                    { i:'💰', t:'Earn as Tasker', s:'Complete & get paid',  bg:'#dcfce7' },
                    { i:'✅', t:'Task Done!',     s:'Rated & reviewed',     bg:'#fef9c3' },
                  ].map((r,n) => (
                    <div className="ph-item" key={n}>
                      <div className="ph-ic" style={{ background:r.bg }}>{r.i}</div>
                      <div><div className="ph-tt">{r.t}</div><div className="ph-ts">{r.s}</div></div>
                    </div>
                  ))}
                  <div className="ph-map">🗺️</div>
                  <div className="ph-tabs">
                    {['🏠','📋','💬','👤'].map((ic,i)=>(
                      <div className="ph-tab" key={i}><span style={{fontSize:'0.85rem'}}>{ic}</span><span>{['Home','Tasks','Chat','Me'][i]}</span></div>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{display:'flex',justifyContent:'center',gap:5,marginTop:12}}>
                {APP_SCREENSHOTS.map((_,i)=>(
                  <button key={i} onClick={()=>setCurrentScreen(i)} style={{
                    width:i===currentScreen?18:6, height:6, borderRadius:3,
                    border:'none', cursor:'pointer', padding:0,
                    background:i===currentScreen?'#7c3aed':'rgba(124,58,237,0.2)',
                    transition:'all 0.3s ease',
                  }}/>
                ))}
              </div>
            </div>
          </div>

        </div>
        </div>{/* end hw-main */}

      </div>{/* end hw */}
    </>
  );
}