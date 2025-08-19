'use client'

import Image from "next/image";

export default function SiagaPage() {
  return (
    <section className="px-2 sm:px-[74px] bg-white text-black">
      <div className="container mx-auto">
        {/* Hero Section */}
        <section className="mx-auto mb-[55px] mt-[55px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image src="/page-siaga.png" alt="SIAGA Platform" width={600} height={400} className="object-cover w-full h-auto" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4 justify-center sm:justify-end">
                <Image src="/logo-siaga.png" alt="SIAGA Logo" width={206} height={77} className="object-contain" />
              </div>
              <div className="md:text-[40px] text-[30px] font-extrabold mb-[15px] text-[#802012] text-center sm:text-right leading-[1.2]">
                From Problem to Solution Faster, Smarter, and Accountable
              </div>
              <p className="mb-[30px] text-[16px] text-black">
                <span className="font-bold">SIAGA</span> is our <span className="font-bold">Smart Issue & Action Management</span> system that empowers organizations to <span className="font-bold">detect</span>, <span className="font-bold">report</span>, <span className="font-bold">track</span>, and <span className="font-bold">resolve</span> issues quickly and transparently, ensuring accountability at every step.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                <button className="bg-[#1B9AAA] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#158a9a] transition-colors">
                  Request a Demo
                </button>
                <p className="text-gray-600 text-sm">
                  See how SIAGA can transform your issue management process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 - Why Choose SIAGA & Real-World Applications */}
        <section className="mb-[55px] relative">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image src="/bg-circle.png" alt="Background" fill className="object-contain" />
          </div>
          
          <div className="relative z-2 grid lg:grid-cols-2 sm:gap-32">
            {/* Left Column - Why Choose SIAGA */}
            <div className="bg-transparent p-8 rounded-lg">
              <div className="md:text-[40px] text-[30px] font-bold mb-8 text-black">
                Why Choose <span className="text-primary">SIAGA</span>?
              </div>
              
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-black/25"></div>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Centralized Issue Tracking</div>
                      <div className="text-[14px] text-gray-700">One platform for collecting, categorizing, and monitoring all issues.</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                  <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Real-Time Notifications</div>
                      <div className="text-[14px] text-gray-700">Automatic alerts to the right teams for immediate action.</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                  <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Clear Accountability</div>
                      <div className="text-[14px] text-gray-700">Assign tasks, set deadlines, and track progress transparently.</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                  <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Analytics & Reporting</div>
                      <div className="text-[14px] text-gray-700">Measure performance, identify recurring problems, and improve processes.</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                  <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Multi-Channel Access</div>
                      <div className="text-[14px] text-gray-700">Accessible via web, mobile, and integrated systems (e.g., WhatsApp, email, IoT sensors).</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Real-World Applications */}
            <div className="bg-transparent p-8 rounded-lg">
              <div className="md:text-[40px] text-[30px] font-bold mb-8">
                <span className="text-primary">Real-World Issue & Action Management</span> from IOI:
              </div>
              
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute right-4 top-0 bottom-0 w-0.5 bg-black/25"></div>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2 text-center">Government Public Service Complaints</div>
                      <div className="text-[14px] text-gray-700">Citizen reports on public facilities routed to relevant departments for quick resolution.</div>
                    </div>
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 right-[11px]"></div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2 text-center">Enterprise Internal Issue Management</div>
                      <div className="text-[14px] text-gray-700">Track and resolve operational or compliance-related problems.</div>
                    </div>
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 right-[11px]"></div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2 text-center">Facility & Asset Maintenance</div>
                      <div className="text-[14px] text-gray-700">Automatic alerts for equipment breakdowns with status updates until resolved.</div>
                    </div>
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 right-[11px]"></div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2 text-center">Community-Based Reporting</div>
                      <div className="text-[14px] text-gray-700">Residents submit safety or environmental issues via mobile app.</div>
                    </div>
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 right-[11px]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Turn Problems into Progress Section with Custom Stepper */}
        <section className="mx-auto sm:py-[55px] py-10 rounded-[20px] mb-[55px]">
          <div className="md:text-[40px] text-[30px] font-bold mb-[15px] text-black text-center">
            How We Turn Problems into Progress with SIAGA:
          </div>
          
          <div className="mt-12">
            <div className="relative sm:h-[385px] flex flex-col justify-center hidden xl:flex">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-black hidden sm:block transform -translate-y-1/2"></div>
              
              <div className="grid sm:grid-cols-5 grid-cols-1 gap-4 sm:gap-8 items-center">
                {/* Step 1 - Content Above, Number on Line */}
                <div className="relative text-center">
                  <div className="mb-1 -mt-[125px] h-[120px]">
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2 h-[48px]">Needs Analysis & Configuration</div>
                    <div className="text-[14px] text-gray-700">Customize SIAGA to your workflows and categories.</div>
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
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">System Setup & Integration</div>
                    <div className="text-[14px] text-gray-700">Connect with existing databases, apps, or IoT devices.</div>
                  </div>
                </div>
                
                {/* Step 3 - Content Above, Number on Line */}
                <div className="relative text-center">
                  <div className="mb-1 -mt-[125px] h-[120px]">
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2 h-[48px]">User Training</div>
                    <div className="text-[14px] text-gray-700">Ensure all stakeholders can report, track, and manage issues effectively.</div>
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
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Go Live & Monitoring</div>
                    <div className="text-[14px] text-gray-700">Launch with live support for smooth adoption.</div>
                  </div>
                </div>
                
                {/* Step 5 - Content Above, Number on Line */}
                <div className="relative text-center">
                  <div className="mb-1 -mt-[125px] h-[120px]">
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2 h-[48px]">Continuous Optimization</div>
                    <div className="text-[14px] text-gray-700">Add features, refine workflows, and improve analytics over time.</div>
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
                        <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Needs Analysis & Configuration</div>
                        <div className="text-[14px] text-gray-700">Customize SIAGA to your workflows and categories.</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                      <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                        <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">System Setup & Integration</div>
                        <div className="text-[14px] text-gray-700">Connect with existing databases, apps, or IoT devices.</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                      <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                        <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">User Training</div>
                        <div className="text-[14px] text-gray-700">Ensure all stakeholders can report, track, and manage issues effectively.</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                      <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                        <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Go Live & Monitoring</div>
                        <div className="text-[14px] text-gray-700">Launch with live support for smooth adoption.</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                      <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                        <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Continuous Optimization</div>
                        <div className="text-[14px] text-gray-700">Add features, refine workflows, and improve analytics over time.</div>
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
            Turn Issues into Action, and Actions into Results
          </div>
          <p className="text-[16px] text-gray-700 mb-8 max-w-2xl mx-auto">
            With SIAGA, your organization can respond faster, act smarter, and build public or stakeholder trust.
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
