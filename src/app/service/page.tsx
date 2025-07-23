import Image from "next/image"

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
            <p className="mb-2 text-gray-700">From concept to deployment, we build digital solutions to match your unique needs.<br/>Our development team creates tailored web and mobile applications that align with your business processes — whether you're optimizing internal operations or launching a new digital product.</p>
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
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">🤖 AI & Machine Learning Solutions</h2>
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
            <p className="mb-2 text-gray-700">From concept to deployment, we build digital solutions to match your unique needs.<br/>Our development team creates tailored web and mobile applications that align with your business processes — whether you're optimizing internal operations or launching a new digital product.</p>
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
        <div className="grid md:grid-cols-2 gap-8 sm:mx-16">
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-bold flex items-center gap-2 mb-1">🔹 1. Discovery & Consultation</h3>
              <p className="text-gray-700 mb-1">We start by understanding your business, challenges, and goals through in-depth consultations.</p>
              <p className="text-green-700 text-sm">✅ What we do: Needs assessment, stakeholder interviews, technical scoping</p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold flex items-center gap-2 mb-1">🔹 2. Planning & Strategy</h3>
              <p className="text-gray-700 mb-1">Our team defines the roadmap, features, architecture, and success metrics to guide the development.</p>
              <p className="text-green-700 text-sm">✅ What we do: Project timeline, system design, tech stack selection</p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold flex items-center gap-2 mb-1">🔹 3. Design & Prototyping</h3>
              <p className="text-gray-700 mb-1">We create wireframes, user flows, and UI mockups that align with your brand and user experience goals.</p>
              <p className="text-green-700 text-sm">✅ What we do: UI/UX design, feedback iterations, user-centric design</p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold flex items-center gap-2 mb-1">🔹 4. Development & Integration</h3>
              <p className="text-gray-700 mb-1">We build your solution using modern frameworks, integrating AI, APIs, and automation as needed.</p>
              <p className="text-green-700 text-sm">✅ What we do: Agile development, system integration, regular testing</p>
            </div>
          </div>
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-bold flex items-center gap-2 mb-1">🔹 5. Testing & Quality Assurance</h3>
              <p className="text-gray-700 mb-1">Before launch, we rigorously test the product to ensure functionality, performance, and security.</p>
              <p className="text-green-700 text-sm">✅ What we do: Functional testing, performance testing, bug fixing</p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold flex items-center gap-2 mb-1">🔹 6. Deployment & Training</h3>
              <p className="text-gray-700 mb-1">We launch the system, set up hosting (if needed), and provide training to your team.</p>
              <p className="text-green-700 text-sm">✅ What we do: Go-live support, onboarding sessions, documentation</p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold flex items-center gap-2 mb-1">🔹 7. Maintenance & Support</h3>
              <p className="text-gray-700 mb-1">Our partnership doesn’t stop at launch. We offer continuous monitoring, support, and feature updates.</p>
              <p className="text-green-700 text-sm">✅ What we do: SLA-based support, updates, performance monitoring</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-2 text-blue-700">Let's Build the Future Together</h3>
          <p className="text-md text-gray-700 mb-4 max-w-2xl mx-auto">No matter where you are in your digital journey, our team is ready to collaborate and create solutions that make a difference.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">📩 Get in Touch</a>
            <a href="/consultation" className="bg-white border border-blue-700 text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">Schedule a Free Consultation</a>
          </div>
        </div>
      </section>
    </div>
  )
}
