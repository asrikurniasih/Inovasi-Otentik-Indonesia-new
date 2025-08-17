'use client'

import Image from "next/image";

export default function WorkPage() {
  return (
    <section className="px-2 sm:px-[74px] bg-white text-black">
      <div className="container mx-auto">
        {/* Hero Section */}
        <section className="mx-auto pt-[55px] text-center gap-8 items-center">
          <div className="grid lg:grid-cols-2 xl:gap-32 sm:gap-12 items-center">
            <div>
              <Image src="/work.png" alt="Work" width={495} height={335} className="object-cover w-full h-auto" />
            </div>
            <div className="sm:text-right text-left xl:ml-12 ml-0">
              <div className="xl:text-[40px] text-[30px] font-extrabold mb-[15px] text-black">
                Our <span className="text-primary">Work</span> Speaks for Itself
              </div>
              <p className="mb-[30px] xl:text-[16px] text-[14px] lg:ml-5 ml-0">
                From government platforms to enterprise automation, our projects are built to deliver measurable impact and long-term value. Explore some of the solutions we&apos;ve created for our clients.
              </p>
              <button className="bg-primary text-white px-[15px] py-3 rounded-[7px] font-semibold hover:bg-white hover:text-primary transition-colors h-[50px] xl:text-[16px] text-[14px]">
                Start Your Project With Us
              </button>
            </div>
          </div>
        </section>

        {/* Why Our Work Stands Out Section */}
        <section className="mx-auto sm:py-[55px] py-10 sm:my-[55px] my-10 rounded-[20px]" style={{ boxShadow: '0px 2px 6px 0px rgba(27, 153, 170, 0.15)' }}>
          <div className="flex items-center w-full gap-4 mb-[46px] px-2 sm:px-[74px]">
            <div className="xl:text-[40px] text-[30px] flex-shrink-0 font-bold">
              Why Our <span className="text-primary">Work</span> Stands Out
            </div>
            <div className="flex-1 flex justify-center">
              <hr className="w-full max-full" />
            </div>
          </div>

          <div className="grid sm:grid-cols-3 grid-cols-1 xl:gap-[40px] gap-[20px] px-2">
            <div className="text-center sm:w-[280px] w-full">
              <div className="w-2 h-2 bg-black rounded-full mx-auto mb-3"></div>
              <div className="text-[16px] font-semibold my-[15px] text-primary">Diverse Industry Expertise</div>
              <div className="text-[16px] text-gray-600 text-balance">Government, Education, Enterprise, Retail, and more.</div>
            </div>
            <div className="text-center sm:w-[280px] w-full sm:mx-auto mx-0">
              <div className="w-2 h-2 bg-black rounded-full mx-auto mb-3"></div>
              <div className="text-[16px] font-semibold my-[15px] text-primary">Proven Results</div>
              <div className="text-[16px] text-gray-600 text-balance">Measurable improvements in efficiency, engagement, and ROI.</div>
            </div>
            <div className="text-center sm:w-[280px] w-full sm:ml-auto mx-0">
              <div className="w-2 h-2 bg-black rounded-full mx-auto mb-3"></div>
              <div className="text-[16px] font-semibold my-[15px] text-primary">End-to-End Delivery</div>
              <div className="text-[16px] text-gray-600 text-balance">From ideation to launch and ongoing support.</div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-[20px] px-2 sm:mt-[54px] mt-[30px] sm:mx-[74px]">
            <div className="text-center sm:w-[280px] w-full sm:mx-auto mx-0">
              <div className="w-2 h-2 bg-black rounded-full mx-auto mb-3"></div>
              <div className="text-[16px] font-semibold my-[15px] text-primary">Custom-Fit Solutions</div>
              <div className="text-[16px] text-gray-600 text-balance">Each project is designed to match the client&apos;s exact needs.</div>
            </div>
            <div className="text-center sm:w-[280px] w-full sm:mx-auto mx-0">
              <div className="w-2 h-2 bg-black rounded-full mx-auto mb-3"></div>
              <div className="text-[16px] font-semibold my-[15px] text-primary">Cutting-Edge Technology</div>
              <div className="text-[16px] text-gray-600 text-balance">AI, IoT, data automation, and omnichannel integration.</div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        {/* <section className="mx-auto sm:py-[55px] px-2 sm:px-[74px] py-10 rounded-[20px]" style={{ boxShadow: '0px 2px 6px 0px rgba(27, 153, 170, 0.15)' }}>
          <div className="text-center mb-8">
            <div className="text-[30px] sm:text-[40px] font-bold mb-[15px] text-red-500">Featured Projects</div>
            <div className="flex justify-center">
              <Image src="/ready.png" alt="Compass" width={48} height={48} className="object-contain w-[48px] h-[48px]" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-[30px]">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Image src="/product/SIAGA.png" alt="SIAGA" width={300} height={200} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h4 className="text-xl font-bold mb-2">SIAGA</h4>
              <p className="text-gray-600 text-sm">Emergency response and disaster management system</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Image src="/product/IOCX.png" alt="IOCX" width={300} height={200} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h4 className="text-xl font-bold mb-2">IOCX</h4>
              <p className="text-gray-600 text-sm">Omnichannel experience platform</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Image src="/product/IOCORE.png" alt="IOCORE" width={300} height={200} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h4 className="text-xl font-bold mb-2">IOCORE</h4>
              <p className="text-gray-600 text-sm">Core system platform for enterprise applications</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Image src="/product/HUMAX.png" alt="HUMAX" width={300} height={200} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h4 className="text-xl font-bold mb-2">HUMAX</h4>
              <p className="text-gray-600 text-sm">Human-centric AI platform</p>
            </div>
          </div>
        </section> */}

        {/* Our Process Section */}

        <section className="mx-auto sm:py-[55px] py-10 rounded-[20px]">
          <div className="md:text-[40px] text-[30px] font-bold mb-[15px] text-black text-center">
              Our Process to Deliver Outstanding Work
          </div>
          
          <div className="mt-12">
            <div className="relative sm:h-[385px] flex flex-col justify-center hidden xl:flex">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-black hidden sm:block transform -translate-y-1/2"></div>
              
              <div className="grid sm:grid-cols-5 grid-cols-1 gap-4 sm:gap-8 items-center">
                {/* Step 1 - Content Above, Number on Line */}
                <div className="relative text-center">
                  <div className="mb-1 -mt-[125px] h-[120px]">
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2 h-[48px]">Discovery & Consultation</div>
                    <div className="text-[14px] text-gray-700">Understanding the challenge and defining goals.</div>
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
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Design & Development</div>
                    <div className="text-[14px] text-gray-700">Crafting the right solution with best-fit technology.</div>
                  </div>
                </div>
                
                {/* Step 3 - Content Above, Number on Line */}
                <div className="relative text-center">
                  <div className="mb-1 -mt-[125px] h-[120px]">
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2 h-[48px]">Testing & Refinement</div>
                    <div className="text-[14px] text-gray-700">Ensuring performance, security, and usability.</div>
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
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Launch & Training</div>
                    <div className="text-[14px] text-gray-700">Smooth handover with stakeholder readiness.</div>
                  </div>
                </div>
                
                {/* Step 5 - Content Above, Number on Line */}
                <div className="relative text-center">
                  <div className="mb-1 -mt-[125px] h-[120px]">
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2 h-[48px]">Ongoing Support</div>
                    <div className="text-[14px] text-gray-700">Continuous improvement after deployment.</div>
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
                        <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Discovery & Consultation</div>
                        <div className="text-[14px] text-gray-700">Understanding the challenge and defining goals.</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                      <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                        <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Design & Development</div>
                        <div className="text-[14px] text-gray-700">Crafting the right solution with best-fit technology.</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                      <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                        <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Testing & Refinement</div>
                        <div className="text-[14px] text-gray-700">Ensuring performance, security, and usability.</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                      <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                        <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Launch & Training</div>
                        <div className="text-[14px] text-gray-700">Smooth handover with stakeholder readiness.</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                      <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                        <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Ongoing Support</div>
                        <div className="text-[14px] text-gray-700">Continuous improvement after deployment.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white text-black sm:my-[55px] my-10">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center">
            <div className="">
              <div className="text-[25px] xl:text-[40px] font-bold text-black">
                <div>
                  Your <span className="text-primary">Project</span> Could Be Our Next Success Story
                </div>
              </div>

              <div className="xl:text-[16px] text-[14px] text-black font-[300] mt-4">
                Let&apos;s work together to create solutions that make a real difference.
              </div>
            </div>
            <div className="sm:justify-end flex justify-center">
              <button className="bg-primary text-white px-[15px] rounded-[7px] font-semibold hover:bg-white hover:text-primary transition-colors h-[50px] text-[16px]">
                Start Your Project
              </button>
            </div>
          </div>

        </section>
      </div>
    </section>
  );
}
