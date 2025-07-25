"use client"
import Image from "next/image"
import React from "react";

export default function ServicePage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-12 text-center gap-8 items-center">
        <div>
          <h1 className="text-4xl font-extrabold mb-4 text-blue-700">Our Services</h1>
          <p className="mb-4 max-w-3xl mx-auto text-lg">
            At PT Inovasi Otentik Indonesia, we provide cutting-edge digital solutions that empower organizations to operate smarter, faster, and more efficiently. Explore our core services below:
          </p>
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
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">🔹 Data Integration & System Automation</h2>
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
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">🛠️ Custom Software & Application Development</h2>
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
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">🤖 AI Solutions</h2>
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
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">💼 Strategic IT Consulting</h2>
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
          <h2 className="text-4xl font-extrabold mb-2 text-blue-700">Our Process</h2>
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
