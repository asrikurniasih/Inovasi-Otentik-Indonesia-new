import Image from 'next/image'

export default function PricingSection() {
  return (
    <div className="bg-white text-gray-900">
      <section className="container mx-auto px-4 pt-12 text-center gap-8 items-center">
        <div>
          <h2 className="font-bold mb-4 lg:text-[45px]">Our Product <span className="text-primary">Solutions</span></h2>
        </div>
      </section>

      {/* SIAGA Section */}
      <section className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <Image src="/logo-ioi/logo.png" alt="SIAGA" width={200} height={200} className="rounded-3xl object-cover " />

          <div className="font-bold mb-2 lg:text-[40px] text-[32px] mb-4 mt-4">Integrated Reporting & Action System</div>
          <p className="mb-4 max-w-3xl">
            <span className="font-bold">SIAGA</span> is a smart platform that enables structured reporting, real-time issue tracking, and actionable responses across departments or organizational units. Built for government agencies and corporate environments, SIAGA helps ensure accountability, transparency, and timely follow-up on every report submitted.
          </p>
          <div className="font-bold mb-1">Key Features:</div>
          <ul className="list-disc ml-6 mb-2 max-w-3xl">
            <li>Real-time incident & issue reporting</li>
            <li>Automated task assignment and escalation</li>
            <li>Status tracking and progress monitoring</li>
            <li>Integrated dashboard for analytics and insights</li>
            <li>Custom workflows for different units or departments</li>
          </ul>
          {/* <div className="font-semibold mb-1">Ideal For:</div>
          <ul className="list-disc ml-6 mb-4 max-w-3xl">
            <li>Public service complaint handling</li>
            <li>Internal company audits & inspections</li>
            <li>Community or field-based reporting</li>
            <li>Crisis and emergency response coordination</li>
          </ul> */}
        </div>
        <div className="hidden lg:block">
          <Image src="/product/SIAGA.png" alt="SIAGA" width={600} height={400} className="rounded-3xl object-cover w-full h-auto" />
        </div>
      </section>

      {/* IOCX Section */}
      <section className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-8 items-center">
        <div className="order-2 lg:order-2">
          <Image src="/logo-ioi/logo.png" alt="IOCORE" width={200} height={200} className="rounded-3xl object-cover " />

          <div className="font-bold mb-2 lg:text-[40px] text-[32px] mb-4 mt-4">AI-Driven Data Integration & Decision Engine</div>
          <p className="mb-4 max-w-3xl">
            <span className="font-bold">IOCORE</span> connects, processes, and analyzes multi-source data in real time. Built for organizations that need scalable, automated data pipelines and insights for better decision-making.
          </p>
          <div className="font-bold mb-1">Key Features:</div>
          <ul className="list-disc ml-6 mb-2 max-w-3xl">
            <li>Real-time data integration</li>
            <li>Predictive analytics</li>
            <li>Custom rule-based automations</li>
            <li>API-ready for system interoperability</li>
          </ul>
          {/* <div className="font-semibold mb-1">Ideal For:</div>
          <ul className="list-disc ml-6 mb-4 max-w-3xl">
            <li>Enterprises managing complex operational data</li>
            <li>Government institutions requiring centralized data insight</li>
            <li>Organizations seeking data-driven decision-making</li>
            <li>Businesses automating reporting and performance tracking</li>
            <li>IT teams building scalable data architectures</li>
          </ul> */}
        </div>
        <div className="order-1 lg:order-1 hidden lg:block">
          <Image src="/product/IOCORE.png" alt="IOCORE" width={600} height={400} className="rounded-3xl object-cover w-full h-auto" />
        </div>
      </section>

      {/* IOCORE Section */}
      <section className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <Image src="/logo-ioi/logo.png" alt="IOCX" width={200} height={200} className="rounded-3xl object-cover " />

          <div className="font-bold mb-2 lg:text-[40px] text-[32px] mb-4 mt-4">Intelligent Omni-Channel Experience</div>
          <p className="mb-4 max-w-3xl">
            <span className="font-bold">IOCX</span> is a customer engagement platform that centralizes communication across WhatsApp, email, social media, and CRM into a single dashboard—empowered by AI to improve service quality and customer retention.
          </p>
          <div className="font-bold mb-1">Key Features:</div>
          <ul className="list-disc ml-6 mb-2 max-w-3xl">
            <li>Omni-channel inbox</li>
            <li>Automated response with AI</li>
            <li>Customer insights and segmentation</li>
            <li>CRM integration</li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <Image src="/product/IOCX.png" alt="IOCX" width={600} height={400} className="rounded-3xl object-cover w-full h-auto" />
        </div>
      </section>

      {/* DMS Section */}
      <section className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-8 items-center">
        <div className="order-2 lg:order-2">
          <Image src="/logo-ioi/logo.png" alt="DMS" width={200} height={200} className="rounded-3xl object-cover " />

          <div className="font-bold mb-2 lg:text-[40px] text-[32px] mb-4 mt-4">Streamline. Control. Grow.</div>
          <p className="mb-4 max-w-3xl">
            <span className="font-bold">DMS</span> by IOI is a comprehensive Distribution Management System that empowers companies to efficiently manage their sales, inventory, orders, deliveries, and customer relations — all in one intelligent platform.
          </p>
          <div className="font-bold mb-1">Key Features:</div>
          <ul className="list-disc ml-6 mb-2 max-w-3xl">
            <li>User Management</li>
            <li>Sales & Orders</li>
            <li>Customer Management</li>
            <li>Product & Inventory</li>
            <li>Visit & Attendance</li>
            <li>Delivery Management</li>
            <li>Promo & Pricing</li>
            <li>Finance & Billing</li>
          </ul>
          {/* <div className="font-semibold mb-1">Ideal For:</div>
          <ul className="list-disc ml-6 mb-4 max-w-3xl">
            <li>FMCG Distributors: End-to-end distribution flow.</li>
            <li>Pharma & Healthcare: Expiry control & compliance.</li>
            <li>Retail Chains: Centralized stock & branch orders.</li>
            <li>Logistics Firms: Driver & delivery optimization.</li>
            <li>Food & Beverage: Promo-driven push sales.</li>
          </ul> */}
        </div>
        <div className="order-1 lg:order-1 hidden lg:block">
          <Image src="/product/DMS.png" alt="DMS" width={600} height={400} className="rounded-3xl object-cover w-full h-auto" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#14626c]">
        <div className="container mx-auto px-4 py-12 text-center text-white">
          <h2 className="text-[40px] font-bold mb-4">Need a Custom Solution?</h2>
          <p className="mb-6 max-w-5xl mx-auto text-white text-[20px]">
            We can tailor our platforms to your organization’s unique needs. Let’s discuss how we can help you achieve your digital transformation goals.
          </p>
          <a href="mailto:hi@ioi.co.id">
            <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors mt-12 h-[45px] font-semibold text-[18px]">
              <i className="fa-solid fa-phone mr-2"></i> Contact Us
            </button>
          </a>
        {/* <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="mailto:hi@ioi.co.id">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">📩 Get in Touch</button>
          </a>
          <a href="#">
            <button className="bg-gray-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors">More Product Solution</button>
          </a>
        </div> */}
        </div>
      </section>
    </div>
  )
} 