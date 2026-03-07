"use client";

export default function Safety() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=Inter:wght@400;500;600;700&display=swap');
        .saf * { box-sizing: border-box; margin: 0; padding: 0; }

        .saf {
          font-family: 'Nunito', sans-serif;
          background: linear-gradient(135deg, #eef4ff 0%, #e8f0fe 40%, #dbeafe 70%, #eff6ff 100%);
          padding: 80px 40px;
          position: relative;
          overflow: hidden;
        }

        /* wavy bg lines */
        .saf::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background:
            radial-gradient(ellipse 800px 400px at 60% 50%, rgba(147,197,253,0.25) 0%, transparent 70%),
            radial-gradient(ellipse 400px 600px at 10% 80%, rgba(196,219,255,0.3) 0%, transparent 60%);
          pointer-events: none;
        }

        .saf-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 60px;
          position: relative;
          z-index: 1;
        }

        /* LEFT */
        .saf-left {
          flex: 1;
          min-width: 0;
        }

        .saf-heading {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 900;
          color: #1e3a5f;
          line-height: 1.15;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }

        .saf-sub {
          font-family: 'Inter', sans-serif;
          font-size: 0.92rem;
          color: #4a6080;
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 380px;
        }

        /* Feature cards */
        .saf-card {
          background: white;
          border-radius: 16px;
          padding: 18px 20px;
          margin-bottom: 14px;
          box-shadow: 0 2px 16px rgba(59,130,246,0.08);
          border: 1px solid rgba(219,234,254,0.8);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .saf-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(59,130,246,0.14);
        }
        .saf-card:last-of-type { margin-bottom: 0; }

        .saf-card-top {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .saf-icon {
          width: 46px; height: 46px;
          border-radius: 12px;
          background: #eff6ff;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          border: 1px solid #dbeafe;
        }
        .saf-card-title {
          font-size: 1rem;
          font-weight: 800;
          color: #1e3a5f;
          margin-bottom: 4px;
        }
        .saf-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          color: #5a7a9a;
          line-height: 1.55;
          margin-bottom: 8px;
        }
        .saf-learn {
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          color: #3b82f6;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: gap 0.2s ease;
        }
        .saf-learn:hover { gap: 8px; }

        /* RIGHT */
        .saf-right {
          flex: 0 0 480px;
          position: relative;
          height: 500px;
        }

        /* Main person image */
        .saf-person {
          position: absolute;
          top: 0; right: 0;
          width: 380px;
          height: 480px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(59,130,246,0.2);
        }
        .saf-person img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        /* Floating notification cards */
        .saf-notif {
          position: absolute;
          background: white;
          border-radius: 16px;
          padding: 12px 16px;
          box-shadow: 0 8px 32px rgba(59,130,246,0.18);
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 230px;
          animation: floatCard 3s ease-in-out infinite;
          z-index: 10;
        }

        @keyframes floatCard {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .saf-notif1 { top: 60px; left: -20px; animation-delay: 0s; }
        .saf-notif2 { bottom: 120px; left: -10px; animation-delay: -1s; }
        .saf-notif3 { bottom: 30px; right: 10px; animation-delay: -2s; }

        .saf-notif-icon {
          width: 40px; height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #10b981, #059669);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .saf-notif-title {
          font-size: 0.78rem;
          font-weight: 800;
          color: #1e3a5f;
          margin-bottom: 2px;
        }
        .saf-notif-sub {
          font-family: 'Inter', sans-serif;
          font-size: 0.68rem;
          color: #64748b;
          margin-bottom: 2px;
        }
        .saf-notif-time {
          font-family: 'Inter', sans-serif;
          font-size: 0.62rem;
          color: #94a3b8;
        }

        /* Bottom CTA */
        .saf-cta {
          display: flex;
          justify-content: center;
          margin-top: 40px;
          position: relative;
          z-index: 1;
        }
        .saf-ctabtn {
          padding: 14px 52px;
          border-radius: 50px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: white;
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          border: none;
          cursor: pointer;
          box-shadow: 0 8px 28px rgba(59,130,246,0.4);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .saf-ctabtn:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 40px rgba(59,130,246,0.5);
        }

        @media (max-width: 900px) {
          .saf-inner { flex-direction: column; gap: 40px; }
          .saf-right { width: 100%; height: 340px; }
          .saf-person { width: 240px; height: 300px; right: 50%; transform: translateX(50%); }
        }
      `}</style>

      <section className="saf">
        <div className="saf-inner">

          {/* LEFT */}
          <div className="saf-left">
            <h2 className="saf-heading">
              Your safety &amp; security<br />are our priority
            </h2>
            <p className="saf-sub">
              Our platform is designed with your protection in mind,
              ensuring a safe and trustworthy environment for all users.
            </p>

            {[
              {
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="#3b82f6"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>,
                title: 'ID and Background Checks',
                desc: 'Taskers must pass ID and background verifications to keep the community safe',
              },
              {
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="#3b82f6"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm1 9h-2V7h2v3zm0 4h-2v-2h2v2z"/></svg>,
                title: 'Secure Payments',
                desc: 'Money is securely held by DeleMate and only released when the job is done',
              },
              {
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="#f59e0b"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>,
                title: 'Ratings & Reviews',
                desc: 'Check Tasker ratings and read honest reviews from the community',
              },
            ].map((item, i) => (
              <div key={i} className="saf-card">
                <div className="saf-card-top">
                  <div className="saf-icon">{item.icon}</div>
                  <div>
                    <div className="saf-card-title">{item.title}</div>
                    <div className="saf-card-desc">{item.desc}</div>
                    <a href="#" className="saf-learn">Learn more <span>›</span></a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="saf-right">

            {/* Person */}
            <div className="saf-person">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=640&q=80"
                alt="Safe user"
              />
            </div>

            {/* Floating card 1 — Verification passed */}
            <div className="saf-notif saf-notif1">
              <div className="saf-notif-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
              </div>
              <div>
                <div className="saf-notif-title">Verification passed</div>
                <div className="saf-notif-sub">All background checks cleared</div>
                <div className="saf-notif-time">1 hour ago</div>
              </div>
            </div>

            {/* Floating card 2 — Payment secured */}
            <div className="saf-notif saf-notif2">
              <div className="saf-notif-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm1 14h-2v-2h2v2zm0-4h-2V7h2v4z"/></svg>
              </div>
              <div>
                <div className="saf-notif-title">₹1,000 payment secured</div>
                <div className="saf-notif-sub">DeleMate Payment Protection</div>
                <div className="saf-notif-time">2 hours ago</div>
              </div>
            </div>

            {/* Floating card 3 */}
            <div className="saf-notif saf-notif3">
              <div className="saf-notif-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm1 14h-2v-2h2v2zm0-4h-2V7h2v4z"/></svg>
              </div>
              <div>
                <div className="saf-notif-title">₹1,000 payment secured</div>
                <div className="saf-notif-sub">DeleMate Payment Protection</div>
                <div className="saf-notif-time">2 hours ago</div>
              </div>
            </div>

          </div>
        </div>

        {/* Learn more CTA */}
        <div className="saf-cta">
          <button className="saf-ctabtn">Learn more</button>
        </div>

      </section>
    </>
  );
}