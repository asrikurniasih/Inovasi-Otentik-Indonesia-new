'use client'

import Image from "next/image";

export default function DataIntegrationPage() {
  return (
    <section className="px-2 sm:px-[74px] bg-white text-black">
      <div className="container mx-auto">
        {/* Hero Section */}
        <section className="mx-auto mb-[55px] mt-[55px]">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2 lg:pr-[8rem]">
              <div className="md:text-[40px] text-[30px] font-extrabold mb-[15px] text-[#1B9AAA] leading-[1.2]">
                Smarter Businesses with Connected IoT Solutions
              </div>
              <p className="mb-[30px] text-[16px] text-black">
                We design, develop, and integrate <span className="font-bold">IoT systems</span> that connect devices, collect data, and optimize operations.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                <button className="bg-[#1B9AAA] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#158a9a] transition-colors">
                  Discuss Your IoT Project
                </button>
              </div>
            </div>
            <div>
              <Image src="/iot_page.png" alt="IoT" width={600} height={400} className="object-cover w-full h-auto" />
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
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Custom IoT Solutions</div>
                      <div className="text-[14px] text-gray-700">Designed for your operational goals.</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Seamless Device Integration</div>
                      <div className="text-[14px] text-gray-700">Sensors, controllers, and smart devices connected in one ecosystem.</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Real-Time Insights</div>
                      <div className="text-[14px] text-gray-700">Monitor, control, and optimize instantly.</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Scalable Architecture</div>
                      <div className="text-[14px] text-gray-700">Built with IoT security best practices.</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Scalable & Future-Proof</div>
                      <div className="text-[14px] text-gray-700">Ready for new devices and tech upgrades.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Unified Data & Automation Solutions */}
            <div className="bg-transparent p-8 rounded-lg">
              <div className="md:text-[40px] text-[30px] font-bold mb-8">
                <span className="text-primary">End-to-End IoT Integration</span> from IOI:
              </div>
              
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute right-4 top-0 bottom-0 w-0.5 bg-black/25"></div>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-black font-semibold text-[16px] mb-2 text-primary">Smart Energy Monitoring in buildings</div>
                    </div>
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 right-[11px]"></div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-black font-semibold text-[16px] mb-2 text-primary">Asset Tracking for logistics</div>
                    </div>
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 right-[11px]"></div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-black font-semibold text-[16px] mb-2 text-primary">Remote Equipment Management in factories</div>
                    </div>
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 right-[11px]"></div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-black font-semibold text-[16px] mb-2 text-primary">Smart Classroom & Campus Systems</div>
                    </div>
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 right-[11px]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Synchronize Section with Custom Stepper */}
        <section className="mx-auto sm:py-[55px] py-10 rounded-[20px] mb-[55px]">
          <div className="md:text-[40px] text-[30px] font-bold mb-[15px] text-black text-center">
            How We Synchronize Your Data & Workflows:
          </div>
          
          <div className="mt-12">
            <div className="relative sm:h-[385px] flex flex-col justify-center hidden xl:flex">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-black hidden sm:block transform -translate-y-1/2"></div>
              
              <div className="grid sm:grid-cols-5 grid-cols-1 gap-4 sm:gap-8 items-center">
                {/* Step 1 - Content Above, Number on Line */}
                <div className="relative text-center">
                  <div className="mb-1 -mt-[125px] h-[120px]">
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2 h-[48px]">Needs Assessment</div>
                    <div className="text-[14px] text-gray-700">Understand operational challenges.</div>
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
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Hardware & Software Design</div>
                    <div className="text-[14px] text-gray-700">Select devices and plan integration.</div>
                  </div>
                </div>
                
                {/* Step 3 - Content Above, Number on Line */}
                <div className="relative text-center">
                  <div className="mb-1 -mt-[125px] h-[120px]">
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2 h-[48px]">Development & Deployment</div>
                    <div className="text-[14px] text-gray-700">Build and roll out IoT system.</div>
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
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Testing & Optimization</div>
                    <div className="text-[14px] text-gray-700">Verify performance and reliability.</div>
                  </div>
                </div>
                
                {/* Step 5 - Content Above, Number on Line */}
                <div className="relative text-center">
                  <div className="mb-1 -mt-[125px] h-[120px]">
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2 h-[48px]">Support & Scaling</div>
                    <div className="text-[14px] text-gray-700">Ongoing monitoring and feature expansion.</div>
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
                        <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Device Selection</div>
                        <div className="text-[14px] text-gray-700">Choose sensors, controllers, and smart devices.</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                      <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                        <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Integration Design</div>
                        <div className="text-[14px] text-gray-700">Map devices and create data flows.</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                      <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                        <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Development & Deployment</div>
                        <div className="text-[14px] text-gray-700">Build and deploy IoT system.</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                      <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                        <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Testing & Optimization</div>
                        <div className="text-[14px] text-gray-700">Verify performance and reliability.</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                      <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                        <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Support & Scaling</div>
                        <div className="text-[14px] text-gray-700">Ongoing monitoring and feature expansion.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white text-black sm:my-[55px] my-10 text-center">
          <div className="md:text-[40px] text-[30px] font-bold mb-[15px] text-black">
            Connect. Monitor. Optimize.
          </div>
          <p className="text-[16px] text-gray-700 mb-8 max-w-2xl mx-auto">
            Turn your business into a smarter, connected ecosystem.
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
