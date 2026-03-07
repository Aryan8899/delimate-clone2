"use client";

export default function Footer() {
    return (
        <footer className="bg-[#2d3acd] text-white px-6 lg:px-16 py-8">
            <div className="max-w-6xl mx-auto">

                {/* Top: Logo & Tagline */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-2">DeleMate</h2>
                    <p className="text-blue-200 text-base font-medium">Delivering Trust</p>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

                    {/* Brand */}
                    <div>
                        <h3 className="font-bold text-white text-base mb-4">DeleMate</h3>
                        <p className="text-blue-200 text-sm leading-relaxed">
                            Making parcel delivery simple, fast, and reliable for everyone.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-white text-base mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-blue-200 text-sm hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="text-blue-200 text-sm hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="text-blue-200 text-sm hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-bold text-white text-base mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-blue-200 text-sm hover:text-white transition-colors">Terms & Conditions</a></li>
                            <li><a href="#" className="text-blue-200 text-sm hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-blue-200 text-sm hover:text-white transition-colors">Refund Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-white text-base mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li><a href="mailto:contact@delemate.com" className="text-blue-200 text-sm hover:text-white transition-colors">contact@delemate.com</a></li>
                            <li><a href="tel:+916305835023" className="text-blue-200 text-sm hover:text-white transition-colors">+91-6305835023</a></li>
                        </ul>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-blue-400 mb-8"></div>

                {/* Bottom Bar */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-blue-200 text-sm">© 2026 DeleMate. All rights reserved.</p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        {/* Instagram */}
                        <a href="#" className="text-blue-200 hover:text-white transition-colors">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                            </svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="#" className="text-blue-200 hover:text-white transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}