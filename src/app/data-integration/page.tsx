'use client'

import Image from "next/image";

export default function DataIntegrationPage() {
  return (
    <section className="px-2 sm:px-[74px] bg-white text-black">
      <div className="container mx-auto">
        {/* Hero Section */}
        <section className="mx-auto mb-[55px] mt-[55px]">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="md:text-[40px] text-[30px] font-extrabold mb-[15px] text-[#1B9AAA] leading-[1.2]">
                Unify Your Data, Automate Your Operations
              </div>
              <p className="mb-[30px] text-[16px] text-gray-700">
                We help organizations centralize data from multiple sources and automate workflows for <strong>faster, smarter decision-making.</strong>
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                <button className="bg-[#1B9AAA] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#158a9a] transition-colors">
                  Discuss Your Data Project
                </button>
                <p className="text-gray-600 text-sm">
                  Let&apos;s discuss your data integration needs with our experts.
                </p>
              </div>
            </div>
            <div>
              <Image src="/imageData.png" alt="Data Integration" width={600} height={400} className="object-cover w-full h-auto" />
            </div>
          </div>
        </section>

        {/* Section 2 - Why Choose IOI & Solutions */}
        <section className="mb-[55px] relative">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image src="/bg-circle.png" alt="Background" fill className="object-contain" />
          </div>
          
          <div className="relative z-2 grid lg:grid-cols-2 sm:gap-32">
            {/* Left Column - Why Choose IOI */}
            <div className="bg-transparent p-8 rounded-lg">
              <div className="md:text-[40px] text-[30px] font-bold mb-8 text-black">
                Why Choose <span className="text-primary">IOI</span>?
              </div>
              
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-black/25"></div>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Comprehensive Data Integration</div>
                      <div className="text-[14px] text-gray-700">Connect databases, applications, and devices.</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Real-Time Data Flow</div>
                      <div className="text-[14px] text-gray-700">Keep all platforms in sync instantly.</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Automation-Ready</div>
                      <div className="text-[14px] text-gray-700">Streamline repetitive tasks with rules.</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Scalable Architecture</div>
                      <div className="text-[14px] text-gray-700">Ready to grow with your business.</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Compliance & Security</div>
                      <div className="text-[14px] text-gray-700">Data handling meets industry standards.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Unified Data & Automation Solutions */}
            <div className="bg-transparent p-8 rounded-lg">
              <div className="md:text-[40px] text-[30px] font-bold mb-8">
                <span className="text-primary">Unified Data & Automation Solutions</span> from IOI:
              </div>
              
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute right-4 top-0 bottom-0 w-0.5 bg-black/25"></div>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-black font-semibold text-[16px] mb-2 text-primary">Centralized multi-branch sales data.</div>
                    </div>
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 right-[11px]"></div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-black font-semibold text-[16px] mb-2 text-primary">AI Chatbots for 24/7 customer service.</div>
                    </div>
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 right-[11px]"></div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-black font-semibold text-[16px] mb-2 text-primary">Predictive Maintenance for equipment.</div>
                    </div>
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 right-[11px]"></div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-black font-semibold text-[16px] mb-2 text-primary">Automated Sales & Marketing workflows.</div>
                    </div>
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 right-[11px]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Synchronize Section with Custom Stepper */}
        <section className="mx-auto sm:py-[55px] px-2 sm:px-[74px] py-10 rounded-[20px] mb-[55px]" style={{ boxShadow: '0px 2px 6px 0px rgba(27, 153, 170, 0.15)' }}>
          <div className="md:text-[40px] text-[30px] font-bold mb-[15px] text-black text-center">
            How We Synchronize Your Data & Workflows
          </div>
          
          <div className="mt-12">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-300 hidden sm:block"></div>
              
              <div className="grid sm:grid-cols-5 grid-cols-1 gap-4 sm:gap-8">
                {/* Step 1 - Content Above, Number on Line */}
                <div className="relative text-center">
                  <div className="mb-16">
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Data Source Mapping</div>
                    <div className="text-[14px] text-gray-700">Identify and audit all data inputs.</div>
                  </div>
                  <div className="w-16 h-16 bg-[#1B9AAA] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto relative z-10">
                    1
                  </div>
                </div>
                
                {/* Step 2 - Number on Line, Content Below */}
                <div className="relative text-center">
                  <div className="w-16 h-16 bg-[#1B9AAA] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-16 relative z-10">
                    2
                  </div>
                  <div>
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Integration Design & Development</div>
                    <div className="text-[14px] text-gray-700">Plan and connect systems.</div>
                  </div>
                </div>
                
                {/* Step 3 - Content Above, Number on Line */}
                <div className="relative text-center">
                  <div className="mb-16">
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Automation Workflow Setup</div>
                    <div className="text-[14px] text-gray-700">Define triggers and rules.</div>
                  </div>
                  <div className="w-16 h-16 bg-[#1B9AAA] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto relative z-10">
                    3
                  </div>
                </div>
                
                {/* Step 4 - Number on Line, Content Below */}
                <div className="relative text-center">
                  <div className="w-16 h-16 bg-[#1B9AAA] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-16 relative z-10">
                    4
                  </div>
                  <div>
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Testing & Optimization</div>
                    <div className="text-[14px] text-gray-700">Ensure accuracy and speed.</div>
                  </div>
                </div>
                
                {/* Step 5 - Content Above, Number on Line */}
                <div className="relative text-center">
                  <div className="mb-16">
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Deployment & Optimization</div>
                    <div className="text-[14px] text-gray-700">Continuous performance checks.</div>
                  </div>
                  <div className="w-16 h-16 bg-[#1B9AAA] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto relative z-10">
                    5
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white text-black sm:my-[55px] my-10 text-center">
          <div className="md:text-[40px] text-[30px] font-bold mb-[15px] text-black">
            Break Down Data Silos
          </div>
          <p className="text-[16px] text-gray-700 mb-8 max-w-2xl mx-auto">
            Unlock efficiency and insight with integrated, automated data systems.
          </p>
          <div className="flex justify-center">
            <button className="bg-[#1B9AAA] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#158a9a] transition-colors">
              Contact Us
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}
