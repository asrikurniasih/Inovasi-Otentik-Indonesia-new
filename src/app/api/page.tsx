'use client'

import Image from "next/image";

export default function ApiPage() {
  return (
    <section className="px-2 sm:px-[74px] bg-white text-black">
      <div className="container mx-auto">
        {/* Hero Section */}
        <section className="mx-auto mb-[55px] mt-[55px]">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="md:text-[40px] text-[30px] font-extrabold mb-[15px] text-[#1B9AAA]">
                Connecting Systems, Powering Innovation
              </div>
              <p className="mb-[30px] text-[16px] text-gray-700">
                We develop and integrate APIs that enable your systems, apps, and platforms to work together <strong>seamlessly</strong>.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                <button className="bg-[#1B9AAA] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#158a9a] transition-colors">
                  Discuss Your API Project
                </button>
                <p className="text-gray-600 text-sm">
                  Build software that works exactly the way you need.
                </p>
              </div>
            </div>
            <div>
              <Image src="/imageApi.png" alt="API Integration" width={600} height={400} className="object-cover w-full h-auto" />
            </div>
          </div>
        </section>

        {/* Section 2 - Why Choose IOI & Seamless API Integration Solutions */}
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
                    <div className="bg-white p-4 rounded-lg border border-gray-200 text-center flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Custom API Development</div>
                      <div className="text-[14px] text-gray-700">Secure, scalable, and built around your business processes.</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 text-center flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Seamless System Integration</div>
                      <div className="text-[14px] text-gray-700">Bridge old and new systems effortlessly.</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 text-center flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Data Security First</div>
                      <div className="text-[14px] text-gray-700">Built with encryption and authentication best practices.</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 text-center flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Cross-Platform Compatibility</div>
                      <div className="text-[14px] text-gray-700">Works across web, mobile, and IoT.</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 text-center flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Lifecycle Management</div>
                      <div className="text-[14px] text-gray-700">From design and deployment to monitoring and scaling.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Seamless API Integration Solutions */}
            <div className="bg-transparent p-8 rounded-lg">
              <div className="md:text-[40px] text-[30px] font-bold mb-8">
                <span className="text-primary">Seamless API Integration</span><br />
                Solutions from IOI:
              </div>
              
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute right-4 top-0 bottom-0 w-0.5 bg-black/25"></div>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200 text-center flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Payment Gateway Integration</div>
                      <div className="text-[14px] text-gray-700">for e-commerce</div>
                    </div>
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 right-[11px]"></div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200 text-center flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">CRM-ERP Synchronization</div>
                      <div className="text-[14px] text-gray-700">for unified operations</div>
                    </div>
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 right-[11px]"></div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200 text-center flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Logistics API</div>
                      <div className="text-[14px] text-gray-700">for real-time order tracking</div>
                    </div>
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 right-[11px]"></div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200 text-center flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Social Media API</div>
                      <div className="text-[14px] text-gray-700">for marketing automation</div>
                    </div>
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 right-[11px]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Connect Your Systems Section */}
        <section className="mx-auto sm:py-[55px] px-2 sm:px-[74px] py-10 rounded-[20px] mb-[55px]" style={{ boxShadow: '0px 2px 6px 0px rgba(27, 153, 170, 0.15)' }}>
          <div className="md:text-[40px] text-[30px] font-bold mb-[15px] text-black text-center">
            How We Connect Your Systems:
          </div>
          
          <div className="mt-12">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-300 hidden sm:block"></div>
              
              <div className="grid sm:grid-cols-5 grid-cols-1 gap-4 sm:gap-8">
                {/* Step 1 */}
                <div className="relative text-center">
                  <div className="mb-16">
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Requirements Gathering</div>
                    <div className="text-[14px] text-gray-700">Identify integration points and objectives.</div>
                  </div>
                  <div className="w-16 h-16 bg-[#1B9AAA] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto relative z-10">
                    1
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="relative text-center">
                  <div className="w-16 h-16 bg-[#1B9AAA] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-16 relative z-10">
                    2
                  </div>
                  <div>
                    <div className="text-black font-semibold text-[16px] mb-2">API Design & Documentation</div>
                    <div className="text-[14px] text-gray-700">Blueprint and technical specs.</div>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative text-center">
                  <div className="mb-16">
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Development & Security Setup</div>
                    <div className="text-[14px] text-gray-700">Build with best practices.</div>
                  </div>
                  <div className="w-16 h-16 bg-[#1B9AAA] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto relative z-10">
                    3
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="relative text-center">
                  <div className="w-16 h-16 bg-[#1B9AAA] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-16 relative z-10">
                    4
                  </div>
                  <div>
                    <div className="text-black font-semibold text-[16px] mb-2">Testing & Validation</div>
                    <div className="text-[14px] text-gray-700">Ensure accuracy and performance.</div>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="relative text-center">
                  <div className="mb-16">
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Deployment & Monitoring</div>
                    <div className="text-[14px] text-gray-700">Go live and track performance.</div>
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
            Make Your Systems Talk to Each Other
          </div>
          <p className="text-[16px] text-gray-700 mb-8 max-w-2xl mx-auto">
            Unlock efficiency and innovation with API integration.
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
