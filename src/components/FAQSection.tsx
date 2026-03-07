"use client";

import { useState } from "react";

interface FAQ {
    question: string;
    answer: string;
}

const faqs: FAQ[] = [
    {
        question: "What is DeleMate?",
        answer: "DeleMate is a peer-to-peer parcel delivery platform that connects people who need to send packages with travelers heading in the same direction. It's a smarter, faster, and more affordable way to send parcels across cities or locally."
    },
    {
        question: "How does DeleMate work?",
        answer: "Simply post your parcel details and destination. Our platform matches you with a verified traveler heading your way. The traveler picks up your parcel, carries it along their journey, and delivers it to the recipient — all tracked in real-time."
    },
    {
        question: "How much money can I earn as a traveler?",
        answer: "Travelers can earn anywhere from ₹100 to ₹1000+ per delivery depending on the distance, parcel size, and urgency. It's a great way to earn extra income on trips you're already making."
    },
    {
        question: "Is DeleMate safe and secure?",
        answer: "Absolutely. All users on DeleMate are verified with ID checks and ratings. Every delivery is tracked in real-time, and we have a secure payment system that releases funds only upon confirmed delivery."
    },
    {
        question: "What types of items can I send with DeleMate?",
        answer: "You can send documents, clothes, gifts, electronics, food items, and most everyday goods. Prohibited items include hazardous materials, illegal substances, and items that violate local laws."
    },
    {
        question: "How does DeleMate compare to traditional courier services?",
        answer: "DeleMate is typically 40–60% cheaper than traditional couriers, with faster delivery times since your parcel travels with a person already heading to your destination — no sorting hubs or warehouses involved."
    },
    {
        question: "How do I get started with DeleMate?",
        answer: "Getting started is easy! Sign up with your phone number, verify your identity, and you can immediately start sending parcels or listing yourself as a traveler. The whole process takes less than 5 minutes."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number): void => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white px-6 lg:px-16 py-24">
            <div className="max-w-3xl mx-auto">

                {/* Heading */}
                <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 text-center mb-14">
                    Frequently Asked <span className="text-[#2d3acd]">Questions</span>
                </h2>

                {/* FAQ Items */}
                <div className="divide-y divide-gray-200">
                    {faqs.map((faq: FAQ, index: number) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className="py-5">
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full flex justify-between items-center text-left gap-4"
                                >
                                    <span className={`text-base font-semibold transition-colors duration-200 ${isOpen ? "text-[#2d3acd]" : "text-gray-800"}`}>
                                        {faq.question}
                                    </span>
                                    <span className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                                        <svg
                                            className={`w-5 h-5 ${isOpen ? "text-[#2d3acd]" : "text-gray-500"}`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-48 opacity-100 mt-3" : "max-h-0 opacity-0"}`}
                                >
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}