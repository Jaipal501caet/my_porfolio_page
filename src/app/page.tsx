import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-8 sm:p-20 font-sans">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Hero Section with Profile Picture and Contact */}
        <section className="flex flex-col-reverse sm:flex-row items-start justify-between gap-8">
          <div className="space-y-4 flex-1">
            <h1 className="text-5xl font-extrabold tracking-tight text-blue-900">
              Jaipal S. Chaudhary
            </h1>
            <h2 className="text-2xl font-medium text-gray-600">
              Senior QA Architect & Tech Lead
            </h2>
            <div className="flex flex-wrap gap-3 text-sm font-semibold text-gray-600 pb-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full border border-blue-200">Gurgaon, India</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full border border-green-200">ISTQB Advanced Test Automation</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full border border-purple-200">16+ Years Experience</span>
            </div>
            <p className="text-lg leading-relaxed text-gray-700 max-w-2xl pt-2">
              I engineer high-performance automation ecosystems for global leaders in Banking, Telecom, and Healthcare. Moving beyond traditional testing, I architect "High-ROI" solutions—deploying AI-driven, self-healing frameworks that reduce maintenance costs and ensure zero-defect releases for Fortune 500 clients.
            </p>
            
            {/* Social & Contact Links */}
            <div className="pt-4 space-y-3">
              <div className="flex gap-6">
                 <a href="https://github.com/Jaipal501caet" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-bold">GitHub Profile →</a>
                 <a href="https://www.linkedin.com/in/jaipal-singh-chaudhary-45402467" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-bold">LinkedIn Profile →</a>
              </div>
              <div className="flex flex-wrap gap-6 pt-3 border-t border-gray-200 text-gray-700 font-medium">
                <a href="mailto:chaudhary.jaipal@gmail.com" className="flex items-center gap-2 hover:text-blue-700 transition-colors">
                  <span className="text-xl">✉️</span> chaudhary.jaipal@gmail.com
                </a>
                <a href="tel:+919650605158" className="flex items-center gap-2 hover:text-blue-700 transition-colors">
                  <span className="text-xl">📱</span> +91 9650605158
                </a>
              </div>
            </div>
          </div>
          
          {/* Profile Image Container */}
          <div className="flex-shrink-0">
            <Image 
              src="/profile.jpg" 
              alt="Jaipal Chaudhary" 
              width={160} 
              height={160} 
              className="rounded-full border-4 border-white shadow-lg object-cover w-40 h-40"
              priority
            />
          </div>
        </section>

        {/* REDESIGNED: Enterprise Experience (Badges Grid) */}
        <section className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-5 flex items-center gap-3">
                <span className="w-8 h-1 bg-blue-600 rounded-full inline-block"></span> Employed By
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-5 py-2.5 bg-gray-50 text-gray-800 rounded-lg font-bold border border-gray-200 shadow-sm hover:border-blue-400 hover:bg-blue-50 transition-all cursor-default">IBM India</span>
                <span className="px-5 py-2.5 bg-gray-50 text-gray-800 rounded-lg font-bold border border-gray-200 shadow-sm hover:border-blue-400 hover:bg-blue-50 transition-all cursor-default">TCS</span>
                <span className="px-5 py-2.5 bg-gray-50 text-gray-800 rounded-lg font-bold border border-gray-200 shadow-sm hover:border-blue-400 hover:bg-blue-50 transition-all cursor-default">Tech Mahindra</span>
                <span className="px-5 py-2.5 bg-gray-50 text-gray-800 rounded-lg font-bold border border-gray-200 shadow-sm hover:border-blue-400 hover:bg-blue-50 transition-all cursor-default">Optimum Solutions</span>
              </div>
            </div>
            <div className="border-t border-gray-100 pt-6">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-5 flex items-center gap-3">
                <span className="w-8 h-1 bg-green-500 rounded-full inline-block"></span> Key Clients Delivered For
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white text-gray-600 rounded-md font-semibold border border-gray-300 shadow-sm hover:text-gray-900 hover:border-gray-400 transition-all cursor-default">Standard Chartered</span>
                <span className="px-4 py-2 bg-white text-gray-600 rounded-md font-semibold border border-gray-300 shadow-sm hover:text-gray-900 hover:border-gray-400 transition-all cursor-default">NatWest Group</span>
                <span className="px-4 py-2 bg-white text-gray-600 rounded-md font-semibold border border-gray-300 shadow-sm hover:text-gray-900 hover:border-gray-400 transition-all cursor-default">McKinsey & Company</span>
                <span className="px-4 py-2 bg-white text-gray-600 rounded-md font-semibold border border-gray-300 shadow-sm hover:text-gray-900 hover:border-gray-400 transition-all cursor-default">AT&T</span>
                <span className="px-4 py-2 bg-white text-gray-600 rounded-md font-semibold border border-gray-300 shadow-sm hover:text-gray-900 hover:border-gray-400 transition-all cursor-default">Sky Network</span>
                <span className="px-4 py-2 bg-white text-gray-600 rounded-md font-semibold border border-gray-300 shadow-sm hover:text-gray-900 hover:border-gray-400 transition-all cursor-default">GE Healthcare</span>
                <span className="px-4 py-2 bg-white text-gray-600 rounded-md font-semibold border border-gray-300 shadow-sm hover:text-gray-900 hover:border-gray-400 transition-all cursor-default">Telstra</span>
                <span className="px-4 py-2 bg-white text-gray-600 rounded-md font-semibold border border-gray-300 shadow-sm hover:text-gray-900 hover:border-gray-400 transition-all cursor-default">Yorkshire Building Society</span>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Certifications */}
        <section>
          <h3 className="text-3xl font-bold border-b-2 border-blue-200 pb-2 mb-6">Professional Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm border-l-4 border-l-blue-500">
              <h4 className="font-bold text-gray-900">ISTQB</h4>
              <p className="text-sm text-gray-600 mt-1">Advanced Test Automation Engineer v2</p>
              <p className="text-sm text-gray-600">Foundation Level</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm border-l-4 border-l-green-500">
              <h4 className="font-bold text-gray-900">DevOps & Cloud</h4>
              <p className="text-sm text-gray-600 mt-1">DevOps PAnsible (Jenkins, Docker, Kubernetes)</p>
              <p className="text-sm text-gray-600">DevOps Essentials</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm border-l-4 border-l-purple-500">
              <h4 className="font-bold text-gray-900">Automation</h4>
              <p className="text-sm text-gray-600 mt-1">Selenium WebDriver with Java (Advanced)</p>
              <p className="text-sm text-gray-600">API and Webservices</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm border-l-4 border-l-orange-500">
              <h4 className="font-bold text-gray-900">Database & Tools</h4>
              <p className="text-sm text-gray-600 mt-1">IBM AIX, IBM DB2</p>
              <p className="text-sm text-gray-600">JIRA Software</p>
            </div>
          </div>
        </section>

        {/* Core Competencies */}
        <section>
          <h3 className="text-3xl font-bold border-b-2 border-blue-200 pb-2 mb-6">Core Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-blue-800 mb-2">Test Automation</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>Playwright, Selenium, Robot</li>
                <li>API (Postman) & Data Warehouse (ETL)</li>
                <li>Mobile (iOS/Android) Validation</li>
                <li>CA Lisa (Service Virtualization)</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-blue-800 mb-2">Cloud & DevOps</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>AWS (EC2, S3, Route 53)</li>
                <li>Docker & Kubernetes</li>
                <li>Jenkins, Ansible, GitHub CI/CD</li>
                <li>SonarQube Code Quality</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-blue-800 mb-2">Development & AI</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>Python, Java, SQL, UNIX</li>
                <li>Google Gemini API Integration</li>
                <li>Agile/Scrum Leadership</li>
                <li>Defect Tracking (JIRA)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Featured Independent Projects */}
        <section>
          <h3 className="text-3xl font-bold border-b-2 border-blue-200 pb-2 mb-6">Recent Architecture & AI Projects</h3>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-blue-300 transition-colors">
              <h4 className="text-xl font-bold text-gray-900">TestForge</h4>
              <p className="text-sm text-blue-600 font-medium mb-3">Autonomous QA • AI-Powered • Self-Healing</p>
              <p className="text-gray-700 mb-4">
                An autonomous, AI-powered automation infrastructure designed to self-generate, execute, and self-heal test scripts, significantly reducing manual maintenance overhead.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-blue-300 transition-colors">
              <h4 className="text-xl font-bold text-gray-900">Project X-Ray</h4>
              <p className="text-sm text-blue-600 font-medium mb-3">Python • Google Gemini API • Static Code Analysis</p>
              <p className="text-gray-700 mb-4">
                A zero-dependency Python utility integrating the Google Gemini API for AI-driven static code analysis and semantic summarization, accelerating new developer onboarding by 40%.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-blue-300 transition-colors">
              <h4 className="text-xl font-bold text-gray-900">Sudarshan Bot (Algorithmic Trading)</h4>
              <p className="text-sm text-blue-600 font-medium mb-3">AWS Cloud • Python • Fyers API</p>
              <p className="text-gray-700 mb-4">
                Architected a highly scalable, low-latency algorithmic trading engine deployed on AWS Cloud to execute real-time market data processing and automated trades.
              </p>
            </div>
          </div>
        </section>

        {/* Professional Experience Timeline */}
        <section>
          <h3 className="text-3xl font-bold border-b-2 border-blue-200 pb-2 mb-8">Professional Experience</h3>
          <div className="space-y-10 pl-4 border-l-2 border-gray-200">
            
            <div className="relative pl-6">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-2"></div>
              <h4 className="text-xl font-bold text-gray-900">Senior QA Consultant</h4>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <span className="font-semibold text-blue-700">Optimum Solutions (Client: Standard Chartered Bank)</span>
                <span>•</span>
                <span>05/2023 - 06/2024</span>
              </div>
              <p className="text-gray-700 text-sm">
                Directed comprehensive end-to-end test strategies for enterprise mobile and web banking applications. Enforced strict release management compliance and led QA across SIT, UAT, and Regression cycles to guarantee zero-defect rollouts.
              </p>
            </div>

            <div className="relative pl-6">
              <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-[7px] top-2"></div>
              <h4 className="text-xl font-bold text-gray-900">Delivery Team Lead / Scrum Master</h4>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <span className="font-semibold text-gray-700">Tata Consultancy Services (Client: NatWest Group)</span>
                <span>•</span>
                <span>01/2018 - 05/2020</span>
              </div>
              <p className="text-gray-700 text-sm">
                Led a 12+ member cross-functional engineering team using Agile Kanban. Orchestrated enterprise service virtualization using CA Lisa, accelerating parallel development across QA and performance teams.
              </p>
            </div>

            <div className="relative pl-6">
              <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-[7px] top-2"></div>
              <h4 className="text-xl font-bold text-gray-900">Project Leader</h4>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <span className="font-semibold text-gray-700">Tata Consultancy Services (Client: McKinsey & Company)</span>
                <span>•</span>
                <span>12/2015 - 05/2017</span>
              </div>
              <p className="text-gray-700 text-sm">
                Developed an end-to-end integrated automation framework combining QuerySurge for complex ETL data validation and Selenium for UI automation.
              </p>
            </div>

            <div className="relative pl-6">
              <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-[7px] top-2"></div>
              <h4 className="text-xl font-bold text-gray-900">Early Career Highlights (2007 - 2015)</h4>
              <p className="text-gray-700 text-sm mt-2">
                Served in critical QA and Testing roles at <strong>Tech Mahindra (Client: AT&T)</strong> managing network performance testing, and <strong>IBM India (Clients: Telstra, AT&T)</strong> conducting advanced UNIX, SQL, and Siebel CRM testing for post-production enterprise systems.
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}