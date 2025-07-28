"use client"
import Image from "next/image"
import React from "react";

export default function ServicePage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-12 text-center gap-8 items-center">
        <div>
          {/* <h1 className="text-4xl font-extrabold mb-4 text-blue-700">Our Services</h1>
          <p className="mb-4 max-w-3xl mx-auto text-lg">
            At PT Inovasi Otentik Indonesia, we provide cutting-edge digital solutions that empower organizations to operate smarter, faster, and more efficiently. Explore our core services below:
          </p> */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
        </div>
        {/* <div className="hidden lg:block">
          <Image src="/components.png" alt="Services" width={400} height={250} className="rounded-3xl object-cover w-full h-auto" />
        </div> */}
      </section>

      {/* Services Grid */}

      <section className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-8 items-center">
        <div className="hidden lg:block">
          <Image src="/code.png" alt="Services" width={400} height={250} className="rounded-3xl object-cover w-full h-auto" />
        </div>
        <div>
          <div>
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2 flex-start">
              <div className="w-[32px] h-[32px] min-w-[32px] min-h-[32px] bg-primary rounded-full flex items-center justify-center">
                <svg 
                  version="1.1" 
                  xmlns="http://www.w3.org/2000/svg" 
                  xmlnsXlink="http://www.w3.org/1999/xlink" 
                  x="0px" 
                  y="0px" 
                  viewBox="0 0 24 24" 
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                >
                  <g className="nc-icon-wrapper" fill="currentColor">
                    <path fill="currentColor" d="M2.001,10.98C2.068,10.994,2.135,11,2.201,11c0.466,0,0.883-0.327,0.979-0.801C4.027,6.027,7.736,3,12,3 c1.821,0,3.562,0.544,5.039,1.547l-3.12,3.12l9.297,1.549l-1.549-9.297l-3.198,3.198C16.599,1.75,14.356,1,12,1 C6.789,1,2.255,4.701,1.22,9.801C1.11,10.342,1.46,10.87,2.001,10.98z"></path>
                    <path fill="currentColor" d="M21.999,13.02c-0.541-0.111-1.069,0.24-1.179,0.781C19.973,17.973,16.264,21,12,21 c-1.821,0-3.562-0.544-5.039-1.547l3.12-3.12l-9.297-1.549l1.549,9.297l3.198-3.198C7.401,22.25,9.644,23,12,23 c5.211,0,9.745-3.701,10.78-8.801C22.89,13.658,22.54,13.13,21.999,13.02z" data-color="color-2"></path>
                  </g>
                </svg>
              </div>
              <div>
                Data Integration & System Automation
              </div>
            </h2>
            <p className="mb-2 text-gray-700">Connect, process, and manage data from multiple sources to streamline decision-making.<br/>We help organizations unify their data, eliminate silos, and automate routine processes to enable real-time decision-making and operational efficiency.</p>
            <ul className="list-disc ml-6 text-gray-700 text-sm mb-2">
              <li>Real-time data integration from diverse systems</li>
              <li>Workflow automation & system synchronization</li>
              <li>Centralized dashboards and reporting</li>
              <li>Scalable architecture for growing data needs</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <div>
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
              <div className="w-[32px] h-[32px] min-w-[32px] min-h-[32px] bg-primary rounded-full flex items-center justify-center">
                <svg 
                  version="1.1" 
                  xmlns="http://www.w3.org/2000/svg" 
                  xmlnsXlink="http://www.w3.org/1999/xlink" 
                  x="0px" 
                  y="0px" 
                  viewBox="0 0 24 24" 
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                >
                  <g className="nc-icon-wrapper" fill="currentColor">
                    <path data-color="color-2" fill="currentColor" d="M4,4V1H1C0.447,1,0,1.447,0,2v2H4z"></path>
                    <path data-color="color-2" fill="currentColor" d="M24,4V2c0-0.553-0.447-1-1-1H6v3H24z"></path>
                    <path fill="currentColor" d="M0,6v16c0,0.553,0.447,1,1,1h22c0.553,0,1-0.447,1-1V6H0z M8.414,16L7,17.414l-2.707-2.707 c-0.391-0.391-0.391-1.023,0-1.414L7,10.586L8.414,12l-2,2L8.414,16z M11.728,19.213l-1.94-0.485l2.485-9.94l1.94,0.485 L11.728,19.213z M19.707,14.707L17,17.414L15.586,16l2-2l-2-2L17,10.586l2.707,2.707C20.098,13.684,20.098,14.316,19.707,14.707z"></path>
                  </g>
                </svg>
              </div>
              <div>
                Custom Software & Application Development
              </div>
            </h2>
            <p className="mb-2 text-gray-700">From concept to deployment, we build digital solutions to match your unique needs.<br/>Our development team creates tailored web and mobile applications that align with your business processes — whether you&apos;re optimizing internal operations or launching a new digital product.</p>
            <ul className="list-disc ml-6 text-gray-700 text-sm mb-2">
              <li>Full-cycle software development</li>
              <li>Web & mobile application design</li>
              <li>Custom APIs and backend systems</li>
              <li>UX/UI design and prototyping</li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image src="/components.png" alt="Services" width={400} height={250} className="rounded-3xl object-cover w-full h-auto" />
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-8 items-center">
        <div className="hidden lg:block">
          <Image src="/consistenly.png" alt="Services" width={400} height={250} className="rounded-3xl object-cover w-full h-auto" />
        </div>
        <div>
          <div>
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
              <div className="w-[32px] h-[32px] min-w-[32px] min-h-[32px] bg-primary rounded-full flex items-center justify-center">
                <svg 
                  version="1.1" 
                  xmlns="http://www.w3.org/2000/svg" 
                  xmlnsXlink="http://www.w3.org/1999/xlink" 
                  x="0px" 
                  y="0px" 
                  viewBox="0 0 24 24" 
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                >
                  <g className="nc-icon-wrapper">
                    <path data-color="color-2" fill="currentColor" d="M8,1C6.7,1,5.6,1.8,5.2,3C5.1,3,5.1,3,5,3C2.2,3,0,5.2,0,8c0,1.3,0.5,2.6,1.4,3.5 C0.6,12,0,12.9,0,14c0,1,0.5,1.9,1.3,2.4C1.1,16.9,1,17.5,1,18c0,2.8,2.2,5,5,5s5-2.2,5-5V4C11,2.3,9.7,1,8,1z"></path>
                    <path fill="currentColor" d="M22.6,11.5C23.5,10.6,24,9.3,24,8c0-2.8-2.2-5-5-5c-0.1,0-0.1,0-0.2,0c-0.4-1.2-1.5-2-2.8-2 c-1.7,0-3,1.3-3,3v14c0,2.8,2.2,5,5,5s5-2.2,5-5c0-0.5-0.1-1.1-0.3-1.6C23.5,15.9,24,15,24,14C24,12.9,23.4,12,22.6,11.5z"></path>
                  </g>
                </svg>
              </div>
              <div>
                AI Solutions
              </div>
            </h2>
            <p className="mb-2 text-gray-700">Tailored AI models for prediction, classification, automation, and optimization of business processes.<br/>We design and deploy intelligent systems that unlock the value of your data, enabling you to automate decisions, identify patterns, and forecast outcomes.</p>
            <ul className="list-disc ml-6 text-gray-700 text-sm mb-2">
              <li>Predictive analytics and data modeling</li>
              <li>Natural Language Processing (NLP)</li>
              <li>Intelligent automation & AI agents</li>
              <li>Machine learning for structured and unstructured data</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <div>
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
              <div className="w-[32px] h-[32px] min-w-[32px] min-h-[32px] bg-primary rounded-full flex items-center justify-center">
                <svg 
                  version="1.1" 
                  xmlns="http://www.w3.org/2000/svg" 
                  xmlnsXlink="http://www.w3.org/1999/xlink" 
                  x="0px" 
                  y="0px" 
                  viewBox="0 0 24 24" 
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                >
                  <g className="nc-icon-wrapper" fill="currentColor">
                    <path data-color="color-2" fill="currentColor" d="M7,10H5V1c0-0.553,0.447-1,1-1h12c0.553,0,1,0.447,1,1v6h-2V2H7V10z"></path>
                    <path fill="currentColor" d="M23,8h-9c-0.553,0-1,0.447-1,1v13h-2v-9c0-0.553-0.447-1-1-1H1c-0.553,0-1,0.447-1,1v10c0,0.553,0.447,1,1,1 h22c0.553,0,1-0.447,1-1V9C24,8.447,23.553,8,23,8z M7,21H4v-2h3V21z M7,17H4v-2h3V17z M20,21h-3v-2h3V21z M20,17h-3v-2h3V17z M20,13h-3v-2h3V13z"></path>
                  </g>
                </svg>
              </div>
              <div>
                Strategic IT Consulting
              </div>
            </h2>
            <p className="mb-2 text-gray-700">From concept to deployment, we build digital solutions to match your unique needs.<br/>Our development team creates tailored web and mobile applications that align with your business processes — whether you&apos;re optimizing internal operations or launching a new digital product.</p>
            <ul className="list-disc ml-6 text-gray-700 text-sm mb-2">
              <li>Digital transformation strategy</li>
              <li>System assessment & gap analysis</li>
              <li>IT infrastructure planning</li>
              <li>Technology selection & vendor evaluation</li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image src="/palette.png" alt="Services" width={400} height={250} className="rounded-3xl object-cover w-full h-auto" />
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16 pt-2">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-black">Our <span className="text-primary">Process</span></h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">From Ideas to Impactful Digital Solutions</p>
          <p className="text-md text-gray-600 max-w-3xl mx-auto mt-2">At PT Inovasi Otentik Indonesia, we follow a structured, collaborative, and agile development process to ensure every project meets your goals, timelines, and expectations.</p>
        </div>

        {/* Stepper */}
        <Stepper />
      </section>
    </div>
  )
}

function Stepper() {
  const steps = [
    {
      title: "Discovery & Consultation",
      icon: "🔹 1.",
      desc: "We start by understanding your business, challenges, and goals through in-depth consultations.",
      detail: "✅ What we do: Needs assessment, stakeholder interviews, technical scoping",
    },
    {
      title: "Planning & Strategy",
      icon: "🔹 2.",
      desc: "Our team defines the roadmap, features, architecture, and success metrics to guide the development.",
      detail: "✅ What we do: Project timeline, system design, tech stack selection",
    },
    {
      title: "Design & Prototyping",
      icon: "🔹 3.",
      desc: "We create wireframes, user flows, and UI mockups that align with your brand and user experience goals.",
      detail: "✅ What we do: UI/UX design, feedback iterations, user-centric design",
    },
    {
      title: "Development & Integration",
      icon: "🔹 4.",
      desc: "We build your solution using modern frameworks, integrating AI, APIs, and automation as needed.",
      detail: "✅ What we do: Agile development, system integration, regular testing",
    },
    {
      title: "Testing & Quality Assurance",
      icon: "🔹 5.",
      desc: "Before launch, we rigorously test the product to ensure functionality, performance, and security.",
      detail: "✅ What we do: Functional testing, performance testing, bug fixing",
    },
    {
      title: "Deployment & Training",
      icon: "🔹 6.",
      desc: "We launch the system, set up hosting (if needed), and provide training to your team.",
      detail: "✅ What we do: Go-live support, onboarding sessions, documentation",
    },
    {
      title: "Maintenance & Support",
      icon: "🔹 7.",
      desc: "Our partnership doesn’t stop at launch. We offer continuous monitoring, support, and feature updates.",
      detail: "✅ What we do: SLA-based support, updates, performance monitoring",
    },
  ];
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <div className="flex flex-col items-center">
      {/* Step Indicator */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {steps.map((step, idx) => (
          <button
            key={idx}
            className={`flex flex-col items-center px-2 focus:outline-none ${
              idx === activeStep
                ? "text-blue-700 font-bold"
                : "text-gray-400"
            }`}
            onClick={() => setActiveStep(idx)}
            aria-current={idx === activeStep ? "step" : undefined}
          >
            <span
              className={`w-8 h-8 flex items-center justify-center rounded-full border-2 mb-1 ${
                idx === activeStep
                  ? "border-blue-700 bg-blue-100"
                  : "border-gray-300 bg-white"
              }`}
            >
              {idx + 1}
            </span>
            <span className="text-xs text-center max-w-[80px]">
              {step.title.split(" ")[0]}
            </span>
          </button>
        ))}
      </div>
      {/* Step Content */}
      <div className="bg-gray-50 rounded-xl shadow p-6 max-w-xl w-full text-center mb-4">
        <h3 className="text-xl font-bold flex items-center gap-2 mb-1 justify-center">
          {steps[activeStep].icon} {steps[activeStep].title}
        </h3>
        <p className="text-gray-700 mb-1">{steps[activeStep].desc}</p>
        <p className="text-green-700 text-sm">{steps[activeStep].detail}</p>
      </div>
      {/* Navigation */}
      <div className="flex gap-4">
        <button
          className="px-4 py-2 rounded bg-gray-200 text-gray-700 font-semibold disabled:opacity-50"
          onClick={() => setActiveStep((s) => Math.max(0, s - 1))}
          disabled={activeStep === 0}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 rounded bg-blue-700 text-white font-semibold disabled:opacity-50"
          onClick={() => setActiveStep((s) => Math.min(steps.length - 1, s + 1))}
          disabled={activeStep === steps.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
