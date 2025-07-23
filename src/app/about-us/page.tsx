'use client'

import { useState } from 'react'
import Image from "next/image";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/FeaturesSection";
import ProSection from "@/components/ProSection";

export default function AboutUsPage() {
  return (
    <div className="bg-white text-gray-900">
      <section className="container mx-auto px-4 pt-12 text-center gap-8 items-center">
        <div>
          <h1 className="text-4xl font-extrabold mb-4 text-blue-700">Who We Are</h1>
          <p className="mb-4 max-w-5xl mx-auto text-lg">
            PT Inovasi Otentik Indonesia is a technology company committed to delivering authentic and intelligent digital solutions tailored for governments, enterprises, and educational institutions. We believe that true innovation comes from understanding local challenges and solving them with the right mix of technology, strategy, and collaboration.
          </p>
        </div>
        {/* <div className="hidden lg:block">
          <Image src="/components.png" alt="Services" width={400} height={250} className="rounded-3xl object-cover w-full h-auto" />
        </div> */}
      </section>

      {/* Hero/Who We Are Section */}
      <section className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          {/* <h1 className="text-4xl font-extrabold mb-4 text-blue-700">ABOUT US</h1> */}
          {/* <h2 className="text-2xl font-bold mb-2">Who We Are</h2>
          <p className="mb-4 max-w-3xl">
            PT Inovasi Otentik Indonesia is a technology company committed to delivering authentic and intelligent digital solutions tailored for governments, enterprises, and educational institutions. We believe that true innovation comes from understanding local challenges and solving them with the right mix of technology, strategy, and collaboration.
          </p> */}
          <h3 className="text-xl font-semibold mt-6 mb-1">Our Philosophy</h3>
          <p className="mb-4 max-w-3xl">
            We don't just build systems - we create impact. Through AI-driven platforms, smart integrations, and scalable applications, we help organizations transform digitally while staying aligned with their goals and culture.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-1">Our Vision</h3>
          <p className="mb-4 max-w-3xl">
            To become a trusted technology partner that empowers Indonesia’s digital transformation through authentic and intelligent innovation.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-1">Our Mission</h3>
          <ul className="list-disc ml-6 mb-4 max-w-3xl">
            <li>Develop customized digital solutions rooted in local needs</li>
            <li>Provide integrated systems that enhance decision-making</li>
            <li>Deliver sustainable and scalable technology</li>
            <li>Build long-term partnerships with public and private sectors</li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <Image src="/aboutus.jpg" alt="About Us" width={600} height={400} className="rounded-3xl shadow-lg object-cover w-full h-auto" />
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-10 bg-white rounded-xl mb-8 grid lg:grid-cols-2 gap-8 items-center">
        <div className="hidden lg:block">
          <Image src="/palette.png" alt="Values Palette" width={500} height={350} className="rounded-3xl object-cover w-full h-auto" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl mb-2">💡</div>
              <div className="font-bold mb-1">Authenticity</div>
              <div>We build with integrity and real understanding of user needs</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl mb-2">🚀</div>
              <div className="font-bold mb-1">Innovation</div>
              <div>We combine technology with creativity for future-ready solutions</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl mb-2">🤝</div>
              <div className="font-bold mb-1">Partnership</div>
              <div>We believe in growing together with our clients</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl mb-2">📊</div>
              <div className="font-bold mb-1">Impact</div>
              <div>We measure success by real change and value delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-10 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <p className="mb-4 max-w-3xl">
            Led by a diverse group of tech experts, data engineers, designers, and project managers, our team brings a mix of experience and enthusiasm to every project we work on.
          </p>
        </div>
        <div className="hidden lg:block">
          <Image src="/code.png" alt="Our Team" width={500} height={350} className="rounded-3xl object-cover w-full h-auto" />
        </div>
      </section>

      {/* Clients & Partners Section */}
      <section className="container mx-auto px-4 py-10 grid lg:grid-cols-2 gap-8 items-center">
        <div className="hidden lg:block">
          <Image src="/consistenly.png" alt="Our Team" width={500} height={350} className="rounded-3xl object-cover w-full h-auto" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Clients & Partners</h2>
          <p className="mb-4 max-w-3xl">
            We proudly support digital transformation for a diverse range of organizations:
          </p>
          {/* <ul className="list-disc ml-6 mb-4 max-w-3xl">
            <li>Local and regional governments</li>
            <li>Educational institutions</li>
            <li>Private companies and SMEs</li>
            <li>Non-profit and community organizations</li>
          </ul> */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            <li className="flex items-center gap-3 bg-blue-50 rounded-lg px-4 py-3 shadow-sm">
              <span className="text-2xl">🏛️</span>
              <span className="font-medium text-gray-800">Local and regional governments</span>
            </li>
            <li className="flex items-center gap-3 bg-blue-50 rounded-lg px-4 py-3 shadow-sm">
              <span className="text-2xl">🎓</span>
              <span className="font-medium text-gray-800">Educational institutions</span>
            </li>
            <li className="flex items-center gap-3 bg-blue-50 rounded-lg px-4 py-3 shadow-sm">
              <span className="text-2xl">��</span>
              <span className="font-medium text-gray-800">Private companies and SMEs</span>
            </li>
            <li className="flex items-center gap-3 bg-blue-50 rounded-lg px-4 py-3 shadow-sm">
              <span className="text-2xl">🤝</span>
              <span className="font-medium text-gray-800">Non-profit and community organizations</span>
            </li>
          </ul>
        </div>
      </section>
      {/* <section className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-extrabold mb-3 text-blue-700 flex items-center gap-2">
          Our Clients & Partners
        </h2>
        <p className="mb-6 max-w-2xl text-gray-600 text-lg">
          We proudly support digital transformation for a diverse range of organizations:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
          <li className="flex items-center gap-3 bg-blue-50 rounded-lg px-4 py-3 shadow-sm">
            <span className="text-2xl">🏛️</span>
            <span className="font-medium text-gray-800">Local and regional governments</span>
          </li>
          <li className="flex items-center gap-3 bg-blue-50 rounded-lg px-4 py-3 shadow-sm">
            <span className="text-2xl">🎓</span>
            <span className="font-medium text-gray-800">Educational institutions</span>
          </li>
          <li className="flex items-center gap-3 bg-blue-50 rounded-lg px-4 py-3 shadow-sm">
            <span className="text-2xl">��</span>
            <span className="font-medium text-gray-800">Private companies and SMEs</span>
          </li>
          <li className="flex items-center gap-3 bg-blue-50 rounded-lg px-4 py-3 shadow-sm">
            <span className="text-2xl">🤝</span>
            <span className="font-medium text-gray-800">Non-profit and community organizations</span>
          </li>
        </ul>
      </section> */}

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Let’s Work Together</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Whether you're just starting your digital journey or scaling up your infrastructure, we're here to help.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="mailto:hi@ioi.co.id">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">📩 Get in Touch</button>
          </a>
          <a href="#">
            <button className="bg-gray-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors">Start a Project</button>
          </a>
        </div>
      </section>

      {/* Services Section */}
      {/* <section className="container mx-auto px-4 py-10 grid lg:grid-cols-2 gap-8 items-center">
        <div className="hidden lg:block">
          <Image src="/components.png" alt="Our Services" width={500} height={350} className="rounded-3xl shadow-lg object-cover w-full h-auto" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <FeaturesSection />
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">🔹 Data Integration & System Automation</h3>
              <ul className="list-disc ml-6 mb-2">
                <li>Real-time data integration from diverse systems</li>
                <li>Workflow automation & system synchronization</li>
                <li>Centralized dashboards and reporting</li>
                <li>Scalable architecture for growing data needs</li>
              </ul>
              <p>We help organizations unify their data, eliminate silos, and automate routine processes to enable real-time decision-making and operational efficiency.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">Custom Software & Application Development</h3>
              <ul className="list-disc ml-6 mb-2">
                <li>Full-cycle software development</li>
                <li>Web & mobile application design</li>
                <li>Custom APIs and backend systems</li>
                <li>UX/UI design and prototyping</li>
              </ul>
              <p>Our development team creates tailored web and mobile applications that align with your business processes — whether you're optimizing internal operations or launching a new digital product.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">AI & Machine Learning Solutions</h3>
              <ul className="list-disc ml-6 mb-2">
                <li>Predictive analytics and data modeling</li>
                <li>Natural Language Processing (NLP)</li>
                <li>Intelligent automation & AI agents</li>
                <li>Machine learning for structured and unstructured data</li>
              </ul>
              <p>We design and deploy intelligent systems that unlock the value of your data, enabling you to automate decisions, identify patterns, and forecast outcomes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">Strategic IT Consulting</h3>
              <ul className="list-disc ml-6 mb-2">
                <li>Digital transformation strategy</li>
                <li>System assessment & gap analysis</li>
                <li>IT infrastructure planning</li>
                <li>Technology selection & vendor evaluation</li>
              </ul>
              <p>Our consulting services help you navigate digital challenges with confidence — from technology roadmaps to system architecture and implementation strategies.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Process Section */}
      {/* <section className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4">Our Process</h2>
        <ProSection />
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold mb-2">🔹 1. Discovery & Consultation</h3>
            <ul className="list-disc ml-6 mb-2">
              <li>Needs assessment, stakeholder interviews, technical scoping</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold mb-2">🔹 2. Planning & Strategy</h3>
            <ul className="list-disc ml-6 mb-2">
              <li>Project timeline, system design, tech stack selection</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold mb-2">🔹 3. Design & Prototyping</h3>
            <ul className="list-disc ml-6 mb-2">
              <li>UI/UX design, feedback iterations, user-centric design</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold mb-2">🔹 4. Development & Integration</h3>
            <ul className="list-disc ml-6 mb-2">
              <li>Agile development, system integration, regular testing</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold mb-2">🔹 5. Testing & Quality Assurance</h3>
            <ul className="list-disc ml-6 mb-2">
              <li>Functional testing, performance testing, bug fixing</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold mb-2">🔹 6. Deployment & Training</h3>
            <ul className="list-disc ml-6 mb-2">
              <li>Go-live support, onboarding sessions, documentation</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold mb-2">🔹 7. Maintenance & Support</h3>
            <ul className="list-disc ml-6 mb-2">
              <li>SLA-based support, updates, performance monitoring</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-10">
          <h3 className="text-xl font-bold mb-2">Let's Build the Future Together</h3>
          <p className="mb-4 max-w-2xl mx-auto">
            No matter where you are in your digital journey, our team is ready to collaborate and create solutions that make a difference.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="mailto:hi@ioi.co.id">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">📩 Get in Touch</button>
            </a>
            <a href="#">
              <button className="bg-gray-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors">Schedule a Free Consultation</button>
            </a>
          </div>
        </div>
      </section> */}

      {/* Career Section */}
      {/* <section className="container mx-auto px-4 py-10 bg-gray-50 rounded-xl mb-8 grid lg:grid-cols-2 gap-8 items-center">
        <div className="hidden lg:block">
          <Image src="/astro.png" alt="Career" width={500} height={350} className="rounded-3xl shadow-lg object-cover w-full h-auto" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Career</h2>
          <h3 className="text-xl font-semibold mb-2">Build the Future With Us</h3>
          <p className="mb-4 max-w-3xl">
            We're a team of innovators, engineers, designers, and strategists who believe in building technology that makes a real impact. If you're passionate about solving problems, using AI, and creating meaningful digital products — we’d love to meet you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl mb-2">🔍</div>
              <div className="font-bold mb-1">Purpose-Driven Projects</div>
              <div>Work on solutions that empower governments, schools, and businesses across Indonesia.</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl mb-2">🧠</div>
              <div className="font-bold mb-1">Innovative Culture</div>
              <div>Collaborate with forward-thinking professionals in AI, software, and system integration.</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl mb-2">📈</div>
              <div className="font-bold mb-1">Room to Grow</div>
              <div>We invest in your learning and development through mentorship, courses, and hands-on experience.</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl mb-2">🌍</div>
              <div className="font-bold mb-1">Flexible & Inclusive</div>
              <div>Hybrid work opportunities, inclusive culture, and a focus on results — not hours.</div>
            </div>
          </div>
          <div className="text-center">
            <a href="mailto:hi@ioi.co.id">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Apply Now</button>
            </a>
          </div>
        </div>
      </section> */}

      {/* <Footer /> */}
    </div>
  );
}
