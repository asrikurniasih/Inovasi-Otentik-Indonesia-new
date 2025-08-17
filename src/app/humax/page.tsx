'use client'

import Image from "next/image";

export default function HumaxPage() {
  return (
    <section className="px-2 sm:px-[74px] bg-white text-black">
      <div className="container mx-auto">
        {/* Hero Section */}
        <section className="mx-auto mb-[55px] mt-[55px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image src="/page-Human.png" alt="HUMAX Platform" width={600} height={400} className="object-cover w-full h-auto" />
            </div>
            <div className="text-center sm:text-right">
              <div className="flex items-center gap-3 mb-4 justify-center sm:justify-end">
                <Image src="/logo-Human.png" alt="HUMAX Logo" width={206} height={77} className="object-contain" />
              </div>
              <div className="md:text-[40px] text-[30px] font-extrabold mb-[15px] text-[#1B9AAA] text-center sm:text-right leading-[1.2]">
                Smarter HR Management for a More Productive Workforce
              </div>
              <p className="mb-[30px] text-[16px] text-gray-700">
                HUMAX is our Smart Human Resource Management system that streamlines recruitment, attendance, payroll, and performance tracking all in one secure, cloud-based platform.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-6 justify-center sm:justify-end">
                <p className="text-gray-600 text-sm">
                  Discover how HUMAX can simplify your HR operations.
                </p>
                <button className="bg-[#1B9AAA] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#158a9a] transition-colors">
                  Request a Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 - Why Choose HUMAX & Smart Workforce Systems */}
        <section className="mb-[55px] relative py-16">
          <div className="absolute inset-0 z-0">
            <Image src="/bg-circle.png" alt="Background" fill className="object-contain" />
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Why Choose NEXORA */}
            <div className="bg-transparent p-8 rounded-lg">
              <div className="md:text-[40px] text-[30px] font-bold mb-8 text-black">
                Why Choose <span className="text-[#1B9AAA]">HUMAX</span>?
              </div>
              
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-black/25"></div>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">All-in-One HR Platform</div>
                      <div className="text-[14px] text-gray-700">From hiring to payroll, manage every HR process in one system.</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Cloud-Based & Secure</div>
                      <div className="text-[14px] text-gray-700">Access anywhere, anytime, with enterprise-level security.</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Automation-Ready</div>
                      <div className="text-[14px] text-gray-700">Reduce manual HR tasks with smart workflows and notifications.</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Employee Self-Service</div>
                      <div className="text-[14px] text-gray-700">Empower staff to manage attendance, leave requests, and payslips online.</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Data-Driven Insights</div>
                      <div className="text-[14px] text-gray-700">Analytics to track workforce performance and optimize HR strategies.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Seamless Data Flow */}
            <div className="bg-transparent p-8 rounded-lg">
              <div className="md:text-[40px] text-[30px] font-bold mb-8 text-black">
                Seamless Data Flow Powered by <span className="text-[#1B9AAA]">HUMAX</span>:
              </div>
              
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute right-4 top-0 bottom-0 w-0.5 bg-black/25"></div>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2 text-center">Recruitment Management</div>
                      <div className="text-[14px] text-gray-700">Post vacancies, track applications, and streamline candidate evaluation.</div>
                    </div>
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 right-[11px]"></div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2 text-center">Attendance & Leave Tracking</div>
                      <div className="text-[14px] text-gray-700">Automated logs with biometric, mobile, or geotag check-ins.</div>
                    </div>
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 right-[11px]"></div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2 text-center">Payroll Automation</div>
                      <div className="text-[14px] text-gray-700">Generate accurate payrolls with tax and benefits calculations.</div>
                    </div>
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 right-[11px]"></div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                      <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2 text-center">Performance Reviews</div>
                      <div className="text-[14px] text-gray-700">Track KPIs and provide actionable feedback.</div>
                    </div>
                    <div className="w-3 h-3 bg-black rounded-full mt-[2.5rem] flex-shrink-0 relative z-2 right-[11px]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Manage Talent with HUMAX Section */}
        <section className="mx-auto sm:py-[55px] px-2 sm:px-[74px] py-10 rounded-[20px] mb-[55px]" style={{ boxShadow: '0px 2px 6px 0px rgba(27, 153, 170, 0.15)' }}>
          <div className="md:text-[40px] text-[30px] font-bold mb-[15px] text-black text-center">
            How We Manage Talent with HUMAX
          </div>
          
          <div className="mt-12">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-300 hidden sm:block"></div>
              
              <div className="grid sm:grid-cols-5 grid-cols-1 gap-4 sm:gap-8">
                {/* Step 1 */}
                <div className="relative text-center">
                  <div className="mb-16">
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Needs Assessment</div>
                    <div className="text-[14px] text-gray-700">Understand your HR challenges and workflow.</div>
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
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">System Setup & Configuration</div>
                    <div className="text-[14px] text-gray-700">Customize modules to fit your organization.</div>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative text-center">
                  <div className="mb-16">
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Data Migration</div>
                    <div className="text-[14px] text-gray-700">Securely transfer existing HR data into HUMAX.</div>
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
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Training & Onboarding</div>
                    <div className="text-[14px] text-gray-700">Ensure HR teams and employees can use the platform effectively.</div>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="relative text-center">
                  <div className="mb-16">
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Ongoing Support & Updates</div>
                    <div className="text-[14px] text-gray-700">Keep the system up-to-date and aligned with labor regulations.</div>
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
            Empower Your HR Team and Your People
          </div>
          <p className="text-[16px] text-gray-700 mb-8 max-w-2xl mx-auto">
            With HUMAX, you get a smarter, faster, and more reliable HR process so your team can focus on growth.
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
