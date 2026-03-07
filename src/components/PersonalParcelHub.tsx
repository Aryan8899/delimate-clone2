"use client";

export default function PersonalParcelHub() {
    return (
        <section className="bg-white flex items-center justify-center px-6 lg:px-16 py-24 overflow-hidden">
            <style>{`
        @keyframes cardTilt {
          0%, 100% { transform: rotate(-6deg) translateY(0px); }
          50% { transform: rotate(-6deg) translateY(-8px); }
        }

        .card-float {
          animation: cardTilt 5s ease-in-out infinite;
        }

        .send-btn {
          transition: all 0.2s ease;
        }

        .send-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.25);
        }

        .stat-card {
          transition: all 0.25s ease;
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
        }
      `}</style>

            <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center gap-16">

                {/* LEFT SIDE */}
                <div className="flex-1 flex justify-center min-h-[480px] items-center">

                    <div className="card-float mt-6 relative">

                        {/* Decorative floating elements */}
                        <div className="absolute -top-7 left-12 w-4 h-4 bg-yellow-400 rounded-full"></div>
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10"/>
                            </svg>
                        </div>
                        <div className="absolute top-1/2 -right-6 w-3 h-3 bg-blue-400 rounded-full"></div>
                        <div className="absolute top-1/3 -left-7 w-11 h-11 bg-orange-400 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="absolute -bottom-5 left-8 w-11 h-11 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10m0 0h2m8 0h2m-5 0v-3m0 3h1M3 16h18" />
                            </svg>
                        </div>
                        <div className="absolute -bottom-5 right-12 w-4 h-4 bg-pink-400 rounded-full"></div>

                        <div className="bg-[#2d3acd] rounded-[28px] p-4 shadow-[0_28px_70px_rgba(45,58,205,0.32)] w-[360px]">
                            <div className="bg-white rounded-[20px] px-6 py-6">

                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10m0 0h2m8 0h2m-5 0v-3m0 3h1M3 16h18" />
                                        </svg>
                                    </div>
                                    <span className="font-bold text-gray-900 text-lg">
                                        Available Parcels
                                    </span>
                                </div>

                                <div className="flex justify-between items-center bg-blue-50 rounded-xl px-4 py-3 mb-2">
                                    <span className="text-gray-600 text-sm font-medium">3 Parcels Available</span>
                                    <span className="font-bold text-green-500 text-sm">
                                        Hyderabad → Bengaluru
                                    </span>
                                </div>

                                <div className="flex justify-between items-center bg-blue-50 rounded-xl px-4 py-3 mb-2">
                                    <span className="text-gray-600 text-sm font-medium">2 Local Deliveries</span>
                                    <span className="font-bold text-blue-600 text-sm">
                                        Same City
                                    </span>
                                </div>

                                <div className="flex justify-between items-center bg-purple-50 rounded-xl px-4 py-3">
                                    <span className="text-gray-600 text-sm font-medium">Express Package</span>
                                    <span className="font-bold text-purple-600 text-sm">
                                        Priority
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="flex flex-col gap-8 flex-1 max-w-lg">

                    <div className="w-fit bg-purple-100 text-purple-600 text-xs font-semibold px-5 py-2 rounded-full">
                        Send Parcels Anytime & Anywhere
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight">
                            Your <span className="text-[#2d3acd]">Personal</span>
                        </h1>

                        <h1 className="text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight flex items-center gap-3 flex-wrap">
                            <span className="bg-green-500 text-white px-4 py-1 rounded-2xl">
                                Parcel
                            </span>
                            Hub.
                        </h1>
                    </div>

                    <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                        We've designed the perfect platform to connect your parcels
                        with travelers going your way, making it easy to send
                        packages quickly and reliably across any distance.
                    </p>

                    {/* WIDER STATS SECTION */}
                    <div className="flex gap-6 w-full">
                        <div className="flex gap-6 w-full">

                            <div className="flex-1 bg-[#eef0f7] border border-gray-200 rounded-2xl py-3 px-4 flex flex-col items-center justify-center">
                                <div className="text-3xl font-extrabold text-[#2d3acd] leading-none">
                                    3000+
                                </div>
                                <div className="text-sm text-gray-500 mt-1 font-medium">
                                    Users
                                </div>
                            </div>

                            <div className="flex-1 bg-green-50 border border-green-100 rounded-2xl py-3 px-4 flex flex-col items-center justify-center">
                                <div className="text-3xl font-extrabold text-green-600 leading-none">
                                    6-8 hr
                                </div>
                                <div className="text-sm text-gray-500 mt-1 font-medium">
                                    Avg. Delivery Time
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="flex flex-col gap-3 pt-2">
                        <button className="send-btn w-fit bg-black text-white font-bold px-9 py-4 rounded-full text-base shadow-lg">
                            Send Your Parcel →
                        </button>

                        <div className="flex items-center gap-3 text-xs text-gray-400">
                            <span>👥 Trusted by 3000+ users</span>
                            <span className="text-gray-300">•</span>
                            <span>📍 Track in real-time</span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}