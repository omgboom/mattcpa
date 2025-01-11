// Website.tsx
// Summary of Changes:
// 1) "I SUPERCHARGE FP&A." => Extra bold on mobile, remains one line on desktop.
// 2) On small screens, we load "pinnacle-icon.png", "vidyard-icon.png", "freshbooks-icon.png" via <picture>.
//    On md+ screens, we load the original "-logo" versions. 
// 3) Icons are larger on mobile (h-16).

import React, { useState } from 'react';
import { Mail, Linkedin } from 'lucide-react';

// Define company data
interface Company {
  name: string;
  content: string[];
  metrics: { top: string; bottom: string }[];
}

type CompanyKey = 'pinnacle' | 'vidyard' | 'freshbooks';

const companies: Record<CompanyKey, Company> = {
  pinnacle: {
    name: "Pinnacle",
    content: [
      "Led the company’s budget process with a strong focus on cost control, contributing to a 15% reduction in operating expenses and raising operating profit by 50% compared to fiscal 2023.",
      "Collaborated with the Director of Payments to identify overcharges from a payment provider, successfully recovering $0.5M and achieving lower fees for additional savings of $1.5M.",
      "Led the FP&A team, with one direct report, in building automated processes for budgeting, forecasting, and reporting, providing strategic financial insights and partnering with business leaders to drive data-driven decision-making.",
    ],
    metrics: [
      { top: "-15%", bottom: "Operating Costs Reduction" },
      { top: "+50%", bottom: "Operating Profit Increase" },
      { top: ">$2M", bottom: "Payment Service Provider Savings" },
    ],
  },
  vidyard: {
    name: "Vidyard",
    content: [
      "Strategically reduced marketing spend at the tail end of the pandemic to save the business $1M in spend per month without a major impact to revenue.",
      "Identified over $0.5M in annual savings and more in incremental revenue impact by scaling back the BDR team which was generating pipeline that converted to new business revenue at a fraction of the rate of other sources.",
      "Led and transformed the FP&A team into a strategic force by building robust data infrastructure and financial models and working with the leadership team to navigate changing economic environments.",
    ],
    metrics: [
      { top: "$1M", bottom: "Monthly Marketing Spend Savings" },
      { top: "$0.5M", bottom: "BDR Savings" },
    ],
  },
  freshbooks: {
    name: "FreshBooks",
    content: [
      "Identified and persuaded leadership to pursue a multi-million-dollar enterprise market opportunity, leading to a significant new revenue stream for the company and immediately unblocking a $1M ARR deal.",
      "Led the financial forecasting process across the sales, marketing, and product teams including the ownership of all revenue and financial statement models.",
      "Developed business cases to identify and optimize opportunities for revenue and user growth including the implementation of pricing increase, offers, referrals, direct buy, outbound telemarketing, and marketing budgets.",
    ],
    metrics: [
      { top: "Millions", bottom: "Value Unlocked" },
      { top: "$1M", bottom: "ARR Deal Unblocked" },
    ],
  },
};

// Original "-logo" versions for larger screens
const companyLogos: Record<CompanyKey, string> = {
  pinnacle: "pinnacle-logo.png",
  vidyard: "vidyard-logo.png",
  freshbooks: "freshbooks-logo.png",
};

// New "-icon" versions for smaller screens
const companyIcons: Record<CompanyKey, string> = {
  pinnacle: "pinnacle-icon.png",
  vidyard: "vidyard-icon.png",
  freshbooks: "freshbooks-icon.png",
};

const Website = () => {
  const [selectedCompany, setSelectedCompany] = useState<CompanyKey>('pinnacle');

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-white to-blue-50 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-700">MATT CHRZASZCZ, CPA</h1>
          <div className="flex gap-6">
            <a
              href="mailto:matthew.chrzaszcz@gmail.com"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Mail size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/chrzaszcz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="
          flex flex-col md:flex-row items-center justify-center
          md:h-[65vh] min-h-[65vh]
          bg-gradient-to-b from-blue-50 to-white
          pt-36 px-6
          text-center md:text-left
        "
      >
        {/* Text Column */}
        <div className="max-w-xl mx-auto">
          <p className="text-xl md:text-2xl font-light mb-2">Hi, my name is Matt.</p>

          {/* 
            On mobile: extra bold (font-black), 
            smaller font size (text-4xl), split into two lines. 
            On desktop: original style (font-extrabold, text-7xl).
          */}
          <h2
            className="
              mb-4 leading-tight
              text-5xl font-extrabold 
              md:text-7xl md:font-extrabold
            "
          >
            <span className="block md:inline">I SUPERCHARGE</span>{' '}
            <span className="block md:inline">FP&A.</span>
          </h2>

          <p className="text-xl md:text-2xl font-light mb-4">
            I&#39;m an FP&A leader who can build a high-performance function with my unique blend of leadership,
            technical skills, collaboration, and AI*.
          </p>
          <p className="text-sm md:text-l font-extralight italic">
            *This entire website was created by Matt in collaboration with AI.
          </p>
        </div>

        {/* Photo Column - Hidden on screens smaller than md */}
        <div className="relative mt-8 md:mt-0 md:ml-12 flex-shrink-0 hidden md:block">
          {/* Floating glow effect */}
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-[6px] border-black shadow-solid-black animate-float">
            <div className="absolute -z-10 inset-0 w-full h-full bg-gradient-to-r from-blue-300 via-blue-100 to-blue-300 rounded-full blur-2xl opacity-75 animate-pulse" />
            <img
              src="matt-photo.jpg"
              alt="Matt Photo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-extrabold text-center mb-8">MY PROFESSIONAL JOURNEY</h3>

          {/* 
            Tab Navigation
            - Using <picture> to load "icon" files on screens <= 768px
              and "logo" files on larger screens.
            - className ensures side-by-side with wrapping if needed.
          */}
          <div className="flex flex-row flex-wrap items-center justify-center gap-4 mb-6">
            {Object.keys(companies).map((company) => {
              const isActive = selectedCompany === company;
              return (
                <button
                  key={company}
                  onClick={() => setSelectedCompany(company as CompanyKey)}
                  className={`
                    px-4 py-2 flex items-center gap-2 border-b-4 
                    ${isActive ? 'border-blue-600' : 'border-transparent'} 
                    transition-all
                  `}
                >
                  <picture>
                    <source
                      srcSet={companyIcons[company as CompanyKey]}
                      media="(max-width: 768px)"
                    />
                    <img
                      src={companyLogos[company as CompanyKey]}
                      alt={`${companies[company as CompanyKey].name} logo`}
                      className="h-[72px] w-[72px] object-contain"
                    />
                  </picture>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="bg-gray-50 p-6 rounded-lg shadow text-center md:text-left">
            {/* Metrics */}
            <div className="flex mb-6 flex-wrap gap-8 md:gap-16 justify-center">
              {companies[selectedCompany].metrics.map((metric, index) => (
                <div key={index} className="text-center min-w-[100px]">
                  <p className="text-4xl md:text-5xl font-bold">{metric.top}</p>
                  <p className="text-sm md:text-base text-gray-600">{metric.bottom}</p>
                </div>
              ))}
            </div>

            {/* Company Content */}
            <ul className="space-y-2">
              {companies[selectedCompany].content.map((point, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="flex items-center justify-center w-5 h-5 bg-black text-white rounded-full flex-shrink-0 mr-6 ml-6">
                    ✓
                  </span>
                  <p className="leading-normal">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* AI Impact Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-3xl font-extrabold text-center mb-8">AI: THE NEW SUPERPOWER</h3>
          <p className="text-lg text-gray-700 mb-6">
            This entire website, including the SaaS simulator below, was created by Matt in collaboration with AI. It demonstrates how AI can supercharge existing knowledge and skills while unlocking entirely new capabilities. Here are three transformative ways AI can elevate your finance organization:
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {/* Efficiency */}
            <div className="bg-white p-6 rounded shadow flex-1">
              <h4 className="text-xl font-bold mb-4">Efficiency</h4>
              <ul className="list-disc list-outside text-gray-600 space-y-2 text-left pl-6">
                <li>Automate repetitive tasks to save time and reduce error rates.</li>
                <li>Generate content such as SQL code and Excel formulas.</li>
                <li>Problem solving and troubleshooting.</li>
              </ul>
            </div>
            {/* Insights */}
            <div className="bg-white p-6 rounded shadow flex-1">
              <h4 className="text-xl font-bold mb-4">Insights</h4>
              <ul className="list-disc list-outside text-gray-600 space-y-2 text-left pl-6">
                <li>Brainstorming and idea generation.</li>
                <li>Planning and prioritization for various tasks and projects.</li>
                <li>Analyzing data for advanced insights.</li>
              </ul>
            </div>
            {/* Innovation */}
            <div className="bg-white p-6 rounded shadow flex-1">
              <h4 className="text-xl font-bold mb-4">Innovation</h4>
              <ul className="list-disc list-outside text-gray-600 space-y-2 text-left pl-6">
                <li>Develop advanced tools and models.</li>
                <li>Query knowledge bases using natural language (onboarding policies, process docs etc.).</li>
                <li>Fostering a culture of continuous improvement.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Game Simulator Section */}
      <section className="w-full py-20 bg-white text-center px-4">
        <div className="max-w-screen mx-auto">
          <iframe
            src="game18.html"
            className="border-0 rounded-lg shadow-lg w-full overflow-hidden min-h-[800px] sm:min-h-[1200px]"
            title="SaaS Simulator"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 py-8 text-white mt-auto">
        <div className="max-w-4xl mx-auto text-center">
          <p>© 2024 Matt Chrzaszcz. All rights reserved.</p>
          <p className="mt-2">mattcpa.ca</p>
        </div>
      </footer>
    </div>
  );
};

export default Website;
