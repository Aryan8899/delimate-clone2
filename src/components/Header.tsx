"use client";

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-6 pt-3 pb-0"
      style={{ background: 'transparent' }}
    >
      <div
        className="w-full max-w-4xl mx-auto shadow-lg border border-white/30 px-6 py-3"
        style={{ borderRadius: '20px 20px 32px 32px', backdropFilter: 'blur(24px)', background: 'rgba(255,255,255,0.15)' }}
      >
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold text-blue-700">DeleMate</span>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-7">
            <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors">
              How It Works
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors">
              Blogs
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors">
              About
            </a>
            <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors">
              Others
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </nav>

          {/* CTA */}
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors shadow-sm">
            Contact Us
          </button>

        </div>
      </div>
    </header>
  );
}