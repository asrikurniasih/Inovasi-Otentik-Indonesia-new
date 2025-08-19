'use client'

import Image from "next/image";

export default function NexoraPage() {
  return (
    <section className="px-2 sm:px-[74px] bg-white text-black">
      <div className="container mx-auto">
        {/* Hero Section */}
        <section className="mx-auto mb-[55px] mt-[55px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image src="/page-nexora.png" alt="NEXORA Platform" width={600} height={400} className="object-cover w-full h-auto" />
            </div>
            <div className="text-center sm:text-right">
              <div className="md:text-[40px] text-[30px] font-extrabold mb-[15px] text-[#1B9AAA] leading-[1.2]">
                Unify Your Data. Automate Your Operations. Accelerate Your Decisions.
              </div>
              <p className="mb-[30px] text-[16px] text-gray-700">
              <span className="font-bold">NEXORA</span> is our Data Integration & Automation Engine that connects multiple data sources, streamlines workflows, and delivers real-time insights helping organizations make faster, smarter, and more accurate decisions.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-6 justify-center sm:justify-end">
                <p className="text-gray-600 text-sm">
                  See how IOCORE can transform your data into action.
                </p>
                <button className="bg-[#1B9AAA] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#158a9a] transition-colors">
                  Request a Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Why Choose NEXORA & Seamless Data Flow */}
        <section className="mb-[55px] relative py-16">
          <div className="absolute inset-0 z-0">
            <Image src="/bg-circle.png" alt="Background" fill className="object-contain" />
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Why Choose NEXORA */}
            <div className="bg-transparent p-8 rounded-lg">
              <div className="md:text-[40px] text-[30px] font-bold mb-8 text-black">
                Why Choose <span className="text-[#1B9AAA]">NEXORA</span>?
              </div>
              
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-black/25"></div>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Centralized Data Hub</div>
                      <div className="text-[14px] text-gray-700">Consolidate data from multiple systems into a single, unified view.</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Real-Time Synchronization</div>
                      <div className="text-[14px] text-gray-700">Keep all applications updated instantly without manual intervention.</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Workflow Automation</div>
                      <div className="text-[14px] text-gray-700">Reduce repetitive tasks and improve operational efficiency.</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Scalable Architecture</div>
                      <div className="text-[14px] text-gray-700">Ready to handle growing data volumes and business expansion.</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Secure & Compliant</div>
                      <div className="text-[14px] text-gray-700">Built with enterprise-grade security and compliance in mind.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Seamless Data Flow */}
            <div className="bg-transparent p-8 rounded-lg">
              <div className="md:text-[40px] text-[30px] font-bold mb-8 text-black">
                Seamless Data Flow Powered by <span className="text-[#1B9AAA]">NEXORA</span>:
              </div>
              
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute right-4 top-0 bottom-0 w-0.5 bg-black/25"></div>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2 text-center">Enterprise Data Consolidation</div>
                      <div className="text-[14px] text-gray-700">Integrating CRM, ERP, and analytics platforms for a single source of truth.</div>
                    </div>
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 right-[11px]"></div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2 text-center">Automated Financial Reporting</div>
                      <div className="text-[14px] text-gray-700">Real-time data pipelines for monthly and annual reporting.</div>
                    </div>
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 right-[11px]"></div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2 text-center">IoT Data Aggregation</div>
                      <div className="text-[14px] text-gray-700">Centralizing sensor data for predictive maintenance and monitoring.</div>
                    </div>
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 right-[11px]"></div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2 text-center">Marketing Data Automation</div>
                      <div className="text-[14px] text-gray-700">Connecting ads, CRM, and analytics for better campaign performance tracking.</div>
                    </div>
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 right-[11px]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Flow Section - How We Build Flow with NEXORA */}
        <section className="mx-auto sm:py-[55px] py-10 rounded-[20px] mb-[55px]">
          <div className="md:text-[40px] text-[30px] font-bold mb-[15px] text-black text-center">
            How We Build Flow with NEXORA
          </div>
          
          <div className="mt-12">
            <div className="relative sm:h-[385px] flex flex-col justify-center hidden xl:flex">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-black hidden sm:block transform -translate-y-1/2"></div>
              
              <div className="grid sm:grid-cols-5 grid-cols-1 gap-4 sm:gap-8 items-center">
                {/* Step 1 - Content Above, Number on Line */}
                <div className="relative text-center">
                  <div className="mb-1 -mt-[125px] h-[120px]">
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2 h-[48px]">Data Source Mapping</div>
                    <div className="text-[14px] text-gray-700">Identify and catalog all your existing data systems.</div>
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
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Integration Design</div>
                    <div className="text-[14px] text-gray-700">Architect the best approach for connecting your systems.</div>
                  </div>
                </div>
                
                {/* Step 3 - Content Above, Number on Line */}
                <div className="relative text-center">
                  <div className="mb-1 -mt-[125px] h-[120px]">
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2 h-[48px]">Automation Workflow Setup</div>
                    <div className="text-[14px] text-gray-700">Define triggers, rules, and processes to reduce manual work.</div>
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
                    <div className="text-[14px] text-gray-700">Ensure speed, accuracy, and reliability of data flows.</div>
                  </div>
                </div>
                
                {/* Step 5 - Content Above, Number on Line */}
                <div className="relative text-center">
                  <div className="mb-1 -mt-[125px] h-[120px]">
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2 h-[48px]">Monitoring & Maintenance</div>
                    <div className="text-[14px] text-gray-700">Continuous health checks and updates for peak performance.</div>
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
                        <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Data Source Mapping</div>
                        <div className="text-[14px] text-gray-700">Identify and catalog all your existing data systems.</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                      <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                        <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Integration Design</div>
                        <div className="text-[14px] text-gray-700">Architect the best approach for connecting your systems.</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                      <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                        <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Automation Workflow Setup</div>
                        <div className="text-[14px] text-gray-700">Define triggers, rules, and processes to reduce manual work.</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                      <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                        <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Testing & Optimization</div>
                        <div className="text-[14px] text-gray-700">Ensure speed, accuracy, and reliability of data flows.</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                      <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                        <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Monitoring & Maintenance</div>
                        <div className="text-[14px] text-gray-700">Continuous health checks and updates for peak performance.</div>
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
            Break Down Data Silos. Unlock Your Business Potential
          </div>
          <p className="text-[16px] text-gray-700 mb-8 max-w-2xl mx-auto">
            With IOCORE, your organization gains real-time visibility and automation for every critical process.
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
