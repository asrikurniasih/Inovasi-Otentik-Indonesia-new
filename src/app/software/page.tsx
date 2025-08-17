'use client'

import Image from "next/image";

export default function SoftwarePage() {
  return (
    <section className="px-2 sm:px-[74px] bg-white text-black">
      <div className="container mx-auto">
        {/* Hero Section */}
        <section className="mx-auto mb-[55px] mt-[55px]">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="md:text-[40px] text-[30px] font-extrabold mb-[15px] text-[#1B9AAA] leading-[1.2]">
                Custom-Built Software for Your Unique Business Needs
              </div>
              <p className="mb-[30px] text-[16px] text-gray-700">
                We design and develop fully customized software solutions that align with your workflows, scale with your growth, and integrate seamlessly with your existing systems.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                <button className="bg-[#1B9AAA] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#158a9a] transition-colors shadow-md">
                  Get a Free Consultation
                </button>
                <p className="text-gray-600 text-sm italic">
                  Build software that works exactly the way you need.
                </p>
              </div>
            </div>
            <div>
              <Image 
                src="/ImageSoftware.png" 
                alt="Custom Software Development" 
                width={600} 
                height={400} 
                className="object-cover w-full h-auto shadow-lg rounded-lg" 
              />
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
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Built for Your Business</div>
                      <div className="text-[14px] text-gray-700">100% customized, not generic off-the-shelf products.</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Industry-Specific Expertise</div>
                      <div className="text-[14px] text-gray-700">Solutions adapted for government, enterprise, SMEs, and education.</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Seamless Integration</div>
                      <div className="text-[14px] text-gray-700">Connect with ERP, CRM, IoT devices, and other platforms.</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Future-Ready</div>
                      <div className="text-[14px] text-gray-700">Designed for scalability and adaptability to evolving needs.</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Agile Development</div>
                      <div className="text-[14px] text-gray-700">Faster delivery with continuous iteration and improvement.</div>
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
                    <div className="bg-white p-4 rounded-lg border text-center text-center border-gray-200 flex-1">
                      <div className="text-black font-semibold text-[16px] mb-2 text-primary">HR & Workforce Management System.</div>
                      <div className="text-[14px] text-gray-700">Recruitment, payroll, and attendance in one platform.</div>
                    </div>
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 right-[11px]"></div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="bg-white p-4 rounded-lg border text-center text-center border-gray-200 flex-1">
                      <div className="text-black font-semibold text-[16px] mb-2 text-primary">Distribution Management System (DMS).</div>
                      <div className="text-[14px] text-gray-700">Track sales, stock, and deliveries in real-time.</div>
                    </div>
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 right-[11px]"></div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="bg-white p-4 rounded-lg border text-center text-center border-gray-200 flex-1">
                      <div className="text-black font-semibold text-[16px] mb-2 text-primary">Customer Self-Service Portals.</div>
                      <div className="text-[14px] text-gray-700">Reduce support workload and improve satisfaction.</div>
                    </div>
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 right-[11px]"></div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="bg-white p-4 rounded-lg border text-center text-center border-gray-200 flex-1">
                      <div className="text-black font-semibold text-[16px] mb-2 text-primary">Business Intelligence Dashboard.</div>
                      <div className="text-[14px] text-gray-700">Centralized analytics for data-driven decision-making.</div>
                    </div>
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 right-[11px]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Build Your Software Section */}
        <section className="mx-auto sm:py-[55px] py-10 rounded-[20px] mb-[55px]">
          <div className="md:text-[40px] text-[30px] font-bold mb-[15px] text-black text-center">
            How We Build Your Software:
          </div>
          
          <div className="mt-12">
            <div className="relative sm:h-[385px] flex flex-col justify-center hidden xl:flex">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-black hidden sm:block transform -translate-y-1/2"></div>
              
              <div className="grid sm:grid-cols-5 grid-cols-1 gap-4 sm:gap-8 items-center">
                {/* Step 1 - Content Above, Number on Line */}
                <div className="relative text-center">
                  <div className="mb-1 -mt-[125px] h-[120px]">
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2 h-[48px]">Requirement Analysis</div>
                    <div className="text-[14px] text-gray-700">Deep dive into your goals and workflows.</div>
                  </div>
                  <div className="w-[26px] h-[26px] bg-[#1B9AAA] text-white rounded-full flex items-center justify-center font-bold text-xs mx-auto relative z-2">
                      1
                    </div>
                </div>
                
                {/* Step 2 - Number on Line, Content Below */}
                <div className="relative text-center w-[175px]">
                  <div className="w-[26px] h-[26px] bg-[#1B9AAA] text-white rounded-full flex items-center justify-center font-bold text-xs mx-auto mb-1 relative z-2 mt-[7.5rem]">
                    2
                  </div>
                  <div>
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">System Architecture & UI/UX Design</div>
                    <div className="text-[14px] text-gray-700">Create blueprint and intuitive interface.</div>
                  </div>
                </div>
                
                {/* Step 3 - Content Above, Number on Line */}
                <div className="relative text-center">
                  <div className="mb-1 -mt-[125px] h-[120px]">
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2 h-[48px]">Development & Integration</div>
                    <div className="text-[14px] text-gray-700">Custom coding and connecting with existing systems.</div>
                  </div>
                  <div className="w-[26px] h-[26px] bg-[#1B9AAA] text-white rounded-full flex items-center justify-center font-bold text-xs mx-auto relative z-2">
                      3
                    </div>
                </div>
                
                {/* Step 4 - Number on Line, Content Below */}
                <div className="relative text-center">
                  <div className="w-[26px] h-[26px] bg-[#1B9AAA] text-white rounded-full flex items-center justify-center font-bold text-xs mx-auto mb-1 relative z-2 mt-[4.5rem]">
                    4
                  </div>
                  <div>
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Testing & Quality Assurance</div>
                    <div className="text-[14px] text-gray-700">Ensure performance, security, and usability.</div>
                  </div>
                </div>
                
                {/* Step 5 - Content Above, Number on Line */}
                <div className="relative text-center">
                  <div className="mb-1 -mt-[125px] h-[120px]">
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2 h-[48px]">Deployment & Maintenance</div>
                    <div className="text-[14px] text-gray-700">Smooth launch with ongoing updates.</div>
                  </div>
                  <div className="w-[26px] h-[26px] bg-[#1B9AAA] text-white rounded-full flex items-center justify-center font-bold text-xs mx-auto relative z-2">
                      5
                    </div>
                </div>
              </div>
            </div>

            <div className="relative xl:hidden">
              <div className="bg-transparent rounded-lg">
                
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-black/25"></div>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-5">
                      <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                      <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                        <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Requirement Analysis</div>
                        <div className="text-[14px] text-gray-700">Deep dive into your goals and workflows.</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                      <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                        <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">System Architecture & UI/UX Design</div>
                        <div className="text-[14px] text-gray-700">Create blueprint and intuitive interface.</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                      <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                        <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Development & Integration</div>
                        <div className="text-[14px] text-gray-700">Custom coding and connecting with existing systems.</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                      <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                        <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Testing & Quality Assurance</div>
                        <div className="text-[14px] text-gray-700">Ensure performance, security, and usability.</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                      <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                        <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Deployment & Maintenance</div>
                        <div className="text-[14px] text-gray-700">Smooth launch with ongoing updates.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-white text-black sm:my-[55px] my-10 text-center">
          <div className="md:text-[40px] text-[30px] font-bold mb-[15px] text-black">
            Your Business Deserves More Than a Generic Solution
          </div>
          <p className="text-[16px] text-gray-700 mb-8">
            Let&apos;s build it together.
          </p>
          <div className="flex justify-center">
            <button className="bg-[#1B9AAA] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#158a9a] transition-colors shadow-md">
              Contact Us
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}
