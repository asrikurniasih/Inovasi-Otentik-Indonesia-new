export default function PricingSection() {
  return (
    <section id="products" className="py-24 px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Featured Products
        </h2>
      </div>
      <div className="mt-12">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* SIAGA Card */}
          <div className="border border-gray-200 bg-white p-3 rounded-lg flex flex-col">
            <div className="pt-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 capitalize mb-2">SIAGA</h3>
              <div className="text-base font-semibold text-gray-700 mb-2">Integrated Reporting & Action System</div>
              <div className="text-sm text-gray-600 mb-4">SIAGA is a smart platform that enables structured reporting, real-time issue tracking, and actionable responses across departments or organizational units. Built for government agencies and corporate environments, SIAGA helps ensure accountability, transparency, and timely follow-up on every report submitted.</div>
              <div className="text-left px-3">
                <div className="font-semibold mb-1 text-gray-700">Key Features:</div>
                <ul className="list-disc list-inside text-sm text-gray-700 mb-2">
                  <li>Real-time incident & issue reporting</li>
                  <li>Automated task assignment and escalation</li>
                  <li>Status tracking and progress monitoring</li>
                  <li>Integrated dashboard for analytics and insights</li>
                  <li>Custom workflows for different units or departments</li>
                </ul>
                <div className="font-semibold mb-1 text-gray-700">Ideal For:</div>
                <ul className="list-disc list-inside text-sm text-gray-700 mb-5">
                  <li>Public service complaint handling</li>
                  <li>Internal company audits & inspections</li>
                  <li>Community or field-based reporting</li>
                  <li>Crisis and emergency response coordination</li>
                </ul>
              </div>
            </div>
          </div>

          {/* IOCX Card */}
          <div className="border border-gray-200 bg-[#1e293b] text-white p-3 rounded-lg flex flex-col">
            <div className="pt-6 text-center">
              <h3 className="text-xl font-bold text-white capitalize mb-2">IOCX</h3>
              <div className="text-base font-semibold text-white mb-2">Intelligent Omni-Channel Experience</div>
              <div className="text-sm text-white mb-4">IOCX is a customer engagement platform that centralizes communication across WhatsApp, email, social media, and CRM into a single dashboard—empowered by AI to improve service quality and customer retention.</div>
              <div className="text-left px-3">
                <div className="font-semibold mb-1 text-white">Key Features:</div>
                <ul className="list-disc list-inside text-sm text-white mb-2">
                  <li>Omni-channel inbox</li>
                  <li>Automated response with AI</li>
                  <li>Customer insights and segmentation</li>
                  <li>CRM integration</li>
                </ul>
                <div className="font-semibold mb-1 text-white">Ideal For:</div>
                <ul className="list-disc list-inside text-sm text-white mb-5">
                  <li>Customer support teams managing multiple channels</li>
                  <li>Sales and marketing teams running digital campaigns</li>
                  <li>Public service desks or contact centers</li>
                  <li>Educational institutions handling student inquiries</li>
                  <li>SMEs looking to scale customer experience without scaling headcount</li>
                </ul>
              </div>
            </div>
          </div>

          {/* IOCORE Card */}
          <div className="border border-gray-200 bg-white p-3 rounded-lg flex flex-col">
            <div className="pt-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 capitalize mb-2">IOCORE</h3>
              <div className="text-base font-semibold text-gray-700 mb-2">AI-Driven Data Integration & Decision Engine</div>
              <div className="text-sm text-gray-600 mb-4">IOCORE connects, processes, and analyzes multi-source data in real time. Built for organizations that need scalable, automated data pipelines and insights for better decision-making.</div>
              <div className="text-left px-3">
                <div className="font-semibold mb-1 text-gray-700">Key Features:</div>
                <ul className="list-disc list-inside text-sm text-gray-700 mb-2">
                  <li>Real-time data integration</li>
                  <li>Predictive analytics</li>
                  <li>Custom rule-based automations</li>
                  <li>API-ready for system interoperability</li>
                </ul>
                <div className="font-semibold mb-1 text-gray-700">Ideal For:</div>
                <ul className="list-disc list-inside text-sm text-gray-700 mb-5">
                  <li>Enterprises managing complex operational data</li>
                  <li>Government institutions requiring centralized data insight</li>
                  <li>Organizations seeking data-driven decision-making</li>
                  <li>Businesses automating reporting and performance tracking</li>
                  <li>IT teams building scalable data architectures</li>
                </ul>
              </div>
            </div>
          </div>

          {/* DMS Card */}
          <div className="border border-gray-200 bg-[#1e293b] text-white p-3 rounded-lg flex flex-col">
            <div className="pt-6 text-center">
              <h3 className="text-xl font-bold text-white capitalize mb-2">DMS</h3>
              <div className="text-base font-semibold text-white mb-2">Streamline. Control. Grow.</div>
              <div className="text-sm text-white mb-4">DMS by IOI is a comprehensive Distribution Management System that empowers companies to efficiently manage their sales, inventory, orders, deliveries, and customer relations — all in one intelligent platform.</div>
              <div className="text-left px-3">
                <div className="font-semibold mb-1 text-white">Key Features:</div>
                <ul className="list-disc list-inside text-sm text-white mb-2">
                  <li>User Management</li>
                  <li>Sales & Orders</li>
                  <li>Customer Management</li>
                  <li>Product & Inventory</li>
                  <li>Visit & Attendance</li>
                  <li>Delivery Management</li>
                  <li>Promo & Pricing</li>
                  <li>Finance & Billing</li>
                </ul>
                <div className="font-semibold mb-1 text-white">Ideal For</div>
                <ul className="list-disc list-inside text-sm text-white mb-5">
                  <li>FMCG Distributors: End-to-end distribution flow.</li>
                  <li>Pharma & Healthcare: Expiry control & compliance.</li>
                  <li>Retail Chains: Centralized stock & branch orders.</li>
                  <li>Logistics Firms: Driver & delivery optimization.</li>
                  <li>Food & Beverage: Promo-driven push sales.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto text-center mt-10">
          <a href="#" className="inline-block">
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800">
              More Product Solution
            </button>
          </a>
        </div>
      </div>
    </section>
  )
} 