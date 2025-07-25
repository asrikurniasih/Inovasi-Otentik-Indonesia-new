import Image from 'next/image'

export default function PricingSection() {
  return (
    <div className="bg-white text-gray-900">
      <section className="container mx-auto px-4 pt-12 text-center gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Product Solutions</h2>
          <p className="mb-6 max-w-4xl mx-auto">
            Discover our suite of intelligent platforms designed to empower organizations, streamline operations, and drive digital transformation across industries.
          </p>
        </div>
      </section>

      {/* SIAGA Section */}
      <section className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-blue-700">SIAGA</h2>
          <div className="text-base font-semibold mb-2">Integrated Reporting & Action System</div>
          <p className="mb-4 max-w-3xl">
            SIAGA is a smart platform that enables structured reporting, real-time issue tracking, and actionable responses across departments or organizational units. Built for government agencies and corporate environments, SIAGA helps ensure accountability, transparency, and timely follow-up on every report submitted.
          </p>
          <div className="font-semibold mb-1">Key Features:</div>
          <ul className="list-disc ml-6 mb-2 max-w-3xl">
            <li>Real-time incident & issue reporting</li>
            <li>Automated task assignment and escalation</li>
            <li>Status tracking and progress monitoring</li>
            <li>Integrated dashboard for analytics and insights</li>
            <li>Custom workflows for different units or departments</li>
          </ul>
          <div className="font-semibold mb-1">Ideal For:</div>
          <ul className="list-disc ml-6 mb-4 max-w-3xl">
            <li>Public service complaint handling</li>
            <li>Internal company audits & inspections</li>
            <li>Community or field-based reporting</li>
            <li>Crisis and emergency response coordination</li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <Image src="/product/SIAGA.png" alt="SIAGA" width={600} height={400} className="rounded-3xl object-cover w-full h-auto" />
        </div>
      </section>

      {/* IOCX Section */}
      <section className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-8 items-center">
        <div className="order-2 lg:order-2">
          <h2 className="text-2xl font-bold mb-2 text-blue-700">IOCX</h2>
          <div className="text-base font-semibold mb-2">Intelligent Omni-Channel Experience</div>
          <p className="mb-4 max-w-3xl">
            IOCX is a customer engagement platform that centralizes communication across WhatsApp, email, social media, and CRM into a single dashboard—empowered by AI to improve service quality and customer retention.
          </p>
          <div className="font-semibold mb-1">Key Features:</div>
          <ul className="list-disc ml-6 mb-2 max-w-3xl">
            <li>Omni-channel inbox</li>
            <li>Automated response with AI</li>
            <li>Customer insights and segmentation</li>
            <li>CRM integration</li>
          </ul>
          <div className="font-semibold mb-1">Ideal For:</div>
          <ul className="list-disc ml-6 mb-4 max-w-3xl">
            <li>Customer support teams managing multiple channels</li>
            <li>Sales and marketing teams running digital campaigns</li>
            <li>Public service desks or contact centers</li>
            <li>Educational institutions handling student inquiries</li>
            <li>SMEs looking to scale customer experience without scaling headcount</li>
          </ul>
        </div>
        <div className="order-1 lg:order-1 hidden lg:block">
          <Image src="/product/IOCX.png" alt="IOCX" width={600} height={400} className="rounded-3xl object-cover w-full h-auto" />
        </div>
      </section>

      {/* IOCORE Section */}
      <section className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-blue-700">IOCORE</h2>
          <div className="text-base font-semibold mb-2">AI-Driven Data Integration & Decision Engine</div>
          <p className="mb-4 max-w-3xl">
            IOCORE connects, processes, and analyzes multi-source data in real time. Built for organizations that need scalable, automated data pipelines and insights for better decision-making.
          </p>
          <div className="font-semibold mb-1">Key Features:</div>
          <ul className="list-disc ml-6 mb-2 max-w-3xl">
            <li>Real-time data integration</li>
            <li>Predictive analytics</li>
            <li>Custom rule-based automations</li>
            <li>API-ready for system interoperability</li>
          </ul>
          <div className="font-semibold mb-1">Ideal For:</div>
          <ul className="list-disc ml-6 mb-4 max-w-3xl">
            <li>Enterprises managing complex operational data</li>
            <li>Government institutions requiring centralized data insight</li>
            <li>Organizations seeking data-driven decision-making</li>
            <li>Businesses automating reporting and performance tracking</li>
            <li>IT teams building scalable data architectures</li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <Image src="/product/IOCORE.png" alt="IOCORE" width={600} height={400} className="rounded-3xl object-cover w-full h-auto" />
        </div>
      </section>

      {/* DMS Section */}
      <section className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-8 items-center">
        <div className="order-2 lg:order-2">
          <h2 className="text-2xl font-bold mb-2 text-blue-700">DMS</h2>
          <div className="text-base font-semibold mb-2">Streamline. Control. Grow.</div>
          <p className="mb-4 max-w-3xl">
            DMS by IOI is a comprehensive Distribution Management System that empowers companies to efficiently manage their sales, inventory, orders, deliveries, and customer relations — all in one intelligent platform.
          </p>
          <div className="font-semibold mb-1">Key Features:</div>
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
          <div className="font-semibold mb-1">Ideal For:</div>
          <ul className="list-disc ml-6 mb-4 max-w-3xl">
            <li>FMCG Distributors: End-to-end distribution flow.</li>
            <li>Pharma & Healthcare: Expiry control & compliance.</li>
            <li>Retail Chains: Centralized stock & branch orders.</li>
            <li>Logistics Firms: Driver & delivery optimization.</li>
            <li>Food & Beverage: Promo-driven push sales.</li>
          </ul>
        </div>
        <div className="order-1 lg:order-1 hidden lg:block">
          <Image src="/product/DMS.png" alt="DMS" width={600} height={400} className="rounded-3xl object-cover w-full h-auto" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          We can tailor our platforms to your organization’s unique needs. Let’s discuss how we can help you achieve your digital transformation goals.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="mailto:hi@ioi.co.id">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">📩 Get in Touch</button>
          </a>
          <a href="#">
            <button className="bg-gray-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors">More Product Solution</button>
          </a>
        </div>
      </section>
    </div>
  )
} 