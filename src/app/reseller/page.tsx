'use client'

import Image from "next/image";

export default function ResellerPage() {
  return (
    <section className="px-2 sm:px-[74px] bg-white text-black">
      <div className="container mx-auto">
        {/* Hero Section */}
        <section className="mx-auto pt-[55px] text-center gap-8 items-center">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <div className="md:text-[40px] text-[30px] font-extrabold mb-[15px] text-black">
                Earn More by Selling <span className="text-primary">World-Class Digital Solutions</span>
              </div>
              <p className="mb-[30px] text-[16px]">
                Join the IOI Reseller Program and expand your business portfolio with our proven technology solutions — without the cost of building them yourself.
              </p>
              <button className="bg-[#1B9AAA] text-white px-[30px] py-[15px] rounded-[7px] font-semibold hover:bg-white hover:text-[#1B9AAA] transition-colors h-[50px] text-[16px] mb-[15px]">
                Become A Reseller
              </button>
              <p className="text-[14px] text-gray-600 italic">
                Start earning today by selling IOI solutions to your network.
              </p>
            </div>
            <div>
              <Image src="/Resellerpage.png" alt="Reseller Program" width={500} height={400} className="object-cover w-full h-auto rounded-lg" />
            </div>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="mx-auto sm:py-[55px] py-10 rounded-[20px]" style={{ boxShadow: '0px 2px 6px 0px rgba(27, 153, 170, 0.15)' }}>
          <div className="flex items-center w-full gap-4 mb-[46px] px-2 sm:px-[74px]">
            <div className="xl:text-[40px] text-[30px] flex-shrink-0 font-bold">
              Why Join the <span className="text-primary">IOI Reseller Program</span>
            </div>
            <div className="flex-1 flex justify-center">
              <hr className="w-full max-full" />
            </div>
          </div>

          <div className="grid sm:grid-cols-3 grid-cols-1 xl:gap-[40px] gap-[20px] px-2">
            <div className="text-center sm:w-[280px] w-full">
              <div className="w-2 h-2 bg-black rounded-full mx-auto mb-3"></div>
              <div className="text-[16px] font-semibold my-[15px] text-primary">Ready-to-Sell Solutions</div>
              <div className="text-[16px] text-gray-600 text-balance">Offer AI, IoT, automation, and enterprise systems to your clients immediately.</div>
            </div>
            <div className="text-center sm:w-[280px] w-full sm:mx-auto mx-0">
              <div className="w-2 h-2 bg-black rounded-full mx-auto mb-3"></div>
              <div className="text-[16px] font-semibold my-[15px] text-primary">Marketing Support</div>
              <div className="text-[16px] text-gray-600 text-balance">Access to brochures, presentations, and proposal templates.</div>
            </div>
            <div className="text-center sm:w-[280px] w-full sm:ml-auto mx-0">
              <div className="w-2 h-2 bg-black rounded-full mx-auto mb-3"></div>
              <div className="text-[16px] font-semibold my-[15px] text-primary">Trusted Technology</div>
              <div className="text-[16px] text-gray-600 text-balance">Backed by years of experience delivering projects to government, enterprise, and SMEs.</div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-[20px] px-2 sm:mt-[54px] mt-[30px] sm:mx-[74px]">
            <div className="text-center sm:w-[280px] w-full sm:mx-auto mx-0">
              <div className="w-2 h-2 bg-black rounded-full mx-auto mb-3"></div>
              <div className="text-[16px] font-semibold my-[15px] text-primary">Attractive Margins</div>
              <div className="text-[16px] text-gray-600 text-balance">Earn competitive commissions on every successful project.</div>
            </div>
            <div className="text-center sm:w-[280px] w-full sm:mx-auto mx-0">
              <div className="w-2 h-2 bg-black rounded-full mx-auto mb-3"></div>
              <div className="text-[16px] font-semibold my-[15px] text-primary">Training & Knowledge</div>
              <div className="text-[16px] text-gray-600 text-balance">Learn how to position and sell IOI solutions effectively.</div>
            </div>
          </div>
        </section>

        {/* What You Can Sell Section */}

        <section className="mx-auto sm:py-[55px] px-2 text-center">
          <div>
            <div className="text-[30px] sm:text-[40px] font-bold mb-[15px]">
              <span className="text-primary">What You Can Sell</span> as A Reseller
            </div>
            <div className="grid sm:grid-cols-2 gap-6 sm:mt-[50px] mt-[15px] max-w-2xl mx-auto">
              <div>
                <div className="flex gap-[15px] items-center">
                  <div>
                    <Image src="/reseler/siaga.png" alt="logo-siaga" width={64} height={64} className="object-contain w-[64px] min-w-[64px] h-[64px]" />
                  </div>
                  <div className="text-left">
                    <div className="text-[20px] text-black font-semibold">
                       SIAGA
                    </div>
                    <div className="text-[14px] text-black font-[400]">
                      Smart Issue & Action Management
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex gap-[15px] items-center">
                  <div>
                    <Image src="/Innovative.png" alt="Innovative" width={64} height={64} className="object-contain w-[64px] min-w-[64px] h-[64px]" />
                  </div>
                  <div className="text-left">
                    <div className="text-[20px] text-black font-semibold">
                      Custom Web & Mobile Development
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex gap-[15px] items-center">
                  <div>
                    <Image src="/reseler/iocx.png" alt="logo-Omnichannel" width={64} height={64} className="object-contain w-[64px] min-w-[64px] h-[64px]" />
                  </div>
                  <div className="text-left">
                    <div className="text-[20px] text-black font-semibold">
                      IOCX
                    </div>
                    <div className="text-[14px] text-black font-[400]">
                      Omnichannel Customer Experience
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex gap-[15px] items-center">
                   <div>
                     <Image src="/Innovative.png" alt="Innovative" width={64} height={64} className="object-contain w-[64px] min-w-[64px] h-[64px]" />
                   </div>
                  <div className="text-left">
                    <div className="text-[20px] text-black font-semibold">
                      AI-Powered Automation
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex gap-[15px] items-center">
                  <div>
                    <Image src="/reseler/nexora.png" alt="Impact-driven" width={64} height={64} className="object-contain w-[64px] min-w-[64px] h-[64px]" />
                  </div>
                  <div className="text-left">
                    <div className="text-[20px] text-black font-semibold">
                      NEXORA
                    </div>
                    <div className="text-[14px] text-black font-[400]">
                     Data Integration & Automation Engine
                    </div>
                  </div>
                </div>
              </div>

              <div>
              <div className="flex gap-[15px] items-center">
                   <div>
                     <Image src="/Innovative.png" alt="Innovative" width={64} height={64} className="object-contain w-[64px] min-w-[64px] h-[64px]" />
                   </div>
                  <div className="text-left">
                    <div className="text-[20px] text-black font-semibold">
                      API Development & Integration
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex gap-[15px] items-center">
                  <div>
                    <Image src="/reseler/humax.png" alt="logo-Human" width={64} height={64} className="object-contain w-[64px] min-w-[64px] h-[64px]" />
                  </div>
                  <div className="text-left">
                    <div className="text-[20px] text-black font-semibold">
                      HUMAX
                    </div>
                    <div className="text-[14px] text-black font-[400]">
                     Smart HR Management
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex gap-[15px] items-center">
                   <div>
                     <Image src="/Innovative.png" alt="Innovative" width={64} height={64} className="object-contain w-[64px] min-w-[64px] h-[64px]" />
                   </div>
                  <div className="text-left">
                    <div className="text-[20px] text-black font-semibold">
                      IoT System Development
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="mx-auto sm:py-[55px] px-2 sm:px-[74px] py-10 rounded-[20px]" style={{ boxShadow: '0px 2px 6px 0px rgba(27, 153, 170, 0.15)' }}>
          <div className="text-center mb-[30px]">
            <div className="md:text-[40px] text-[30px] font-bold">
              <span className="text-primary">What You Can Sell</span> as A Reseller
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
            <div className="text-center p-[20px]">
              <div className="flex justify-center mb-[15px]">
                <Image src="/page-siaga.png" alt="SIAGA" width={64} height={64} className="object-contain w-[64px] h-[64px]" />
              </div>
              <h3 className="text-[18px] font-semibold mb-[10px]">SIAGA</h3>
              <p className="text-[14px]">Smart Issue & Action Management</p>
            </div>
            <div className="text-center p-[20px]">
              <div className="flex justify-center mb-[15px]">
                <Image src="/page-Omnichannel.png" alt="IOCX" width={64} height={64} className="object-contain w-[64px] h-[64px]" />
              </div>
              <h3 className="text-[18px] font-semibold mb-[10px]">IOCX</h3>
              <p className="text-[14px]">Omnichannel Customer Experience</p>
            </div>
            <div className="text-center p-[20px]">
              <div className="flex justify-center mb-[15px]">
                <Image src="/data-integration.png" alt="NEXORA" width={64} height={64} className="object-contain w-[64px] h-[64px]" />
              </div>
              <h3 className="text-[18px] font-semibold mb-[10px]">NEXORA</h3>
              <p className="text-[14px]">Data Integration & Automation Engine</p>
            </div>
            <div className="text-center p-[20px]">
              <div className="flex justify-center mb-[15px]">
                <Image src="/page-Human.png" alt="HUMAX" width={64} height={64} className="object-contain w-[64px] h-[64px]" />
              </div>
              <h3 className="text-[18px] font-semibold mb-[10px]">HUMAX</h3>
              <p className="text-[14px]">Smart HR Management</p>
            </div>
            <div className="text-center p-[20px]">
              <div className="flex justify-center mb-[15px]">
                <Image src="/code.png" alt="Web & Mobile Development" width={64} height={64} className="object-contain w-[64px] h-[64px]" />
              </div>
              <h3 className="text-[18px] font-semibold mb-[10px]">Custom Web & Mobile Development</h3>
              <p className="text-[14px]">Tailored digital solutions</p>
            </div>
            <div className="text-center p-[20px]">
              <div className="flex justify-center mb-[15px]">
                <Image src="/AI-Powered.png" alt="AI Automation" width={64} height={64} className="object-contain w-[64px] h-[64px]" />
              </div>
              <h3 className="text-[18px] font-semibold mb-[10px]">AI-Powered Automation</h3>
              <p className="text-[14px]">Intelligent process automation</p>
            </div>
            <div className="text-center p-[20px]">
              <div className="flex justify-center mb-[15px]">
                <Image src="/data-integration.png" alt="API Development" width={64} height={64} className="object-contain w-[64px] h-[64px]" />
              </div>
              <h3 className="text-[18px] font-semibold mb-[10px]">API Development & Integration</h3>
              <p className="text-[14px]">Seamless system connectivity</p>
            </div>
            <div className="text-center p-[20px]">
              <div className="flex justify-center mb-[15px]">
                <Image src="/IoT.png" alt="IoT Development" width={64} height={64} className="object-contain w-[64px] h-[64px]" />
              </div>
              <h3 className="text-[18px] font-semibold mb-[10px]">IoT System Development</h3>
              <p className="text-[14px]">Connected device solutions</p>
            </div>
          </div>
        </section> */}

        {/* How It Works Section */}
        {/* <section className="mx-auto sm:py-[55px] px-2 sm:px-[74px] py-10 rounded-[20px]" style={{ boxShadow: '0px 2px 6px 0px rgba(27, 153, 170, 0.15)' }}>
          <div className="text-center mb-[30px]">
            <div className="md:text-[40px] text-[30px] font-bold">How It Works</div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-[20px]">
            <div className="text-center flex-1">
              <div className="w-12 h-12 bg-[#1B9AAA] text-white rounded-full flex items-center justify-center font-bold text-[20px] mx-auto mb-[15px]">1</div>
              <h3 className="text-[18px] font-semibold mb-[10px]">Register as a Reseller</h3>
              <p className="text-[16px]">Fill out the partner application form.</p>
            </div>
            <div className="hidden md:block w-8 h-0.5 bg-gray-300"></div>
            <div className="text-center flex-1">
              <div className="w-12 h-12 bg-[#1B9AAA] text-white rounded-full flex items-center justify-center font-bold text-[20px] mx-auto mb-[15px]">2</div>
              <h3 className="text-[18px] font-semibold mb-[10px]">Get Training & Materials</h3>
              <p className="text-[16px]">Receive product knowledge, sales kits, and pricing guides.</p>
            </div>
            <div className="hidden md:block w-8 h-0.5 bg-gray-300"></div>
            <div className="text-center flex-1">
              <div className="w-12 h-12 bg-[#1B9AAA] text-white rounded-full flex items-center justify-center font-bold text-[20px] mx-auto mb-[15px]">3</div>
              <h3 className="text-[18px] font-semibold mb-[10px]">Promote to Your Network</h3>
              <p className="text-[16px]">Offer IOI solutions to your existing and potential clients.</p>
            </div>
            <div className="hidden md:block w-8 h-0.5 bg-gray-300"></div>
            <div className="text-center flex-1">
              <div className="w-12 h-12 bg-[#1B9AAA] text-white rounded-full flex items-center justify-center font-bold text-[20px] mx-auto mb-[15px]">4</div>
              <h3 className="text-[18px] font-semibold mb-[10px]">Close the Deal</h3>
              <p className="text-[16px]">Work with IOI's sales engineers to finalize contracts.</p>
            </div>
            <div className="hidden md:block w-8 h-0.5 bg-gray-300"></div>
            <div className="text-center flex-1">
              <div className="w-12 h-12 bg-[#1B9AAA] text-white rounded-full flex items-center justify-center font-bold text-[20px] mx-auto mb-[15px]">5</div>
              <h3 className="text-[18px] font-semibold mb-[10px]">Earn Your Commission</h3>
              <p className="text-[16px]">Get paid for every successful project you bring in.</p>
            </div>
          </div>
        </section> */}

        {/* Who Should Join Section */}
        <section className="mx-auto sm:py-[55px] px-2 sm:px-[74px] py-10 rounded-[20px]">
          <div className="grid md:grid-cols-3 gap-3 items-start">
            <div>
              <div className="md:text-[40px] text-[30px] font-bold mb-[30px]">Who Should Join?</div>
            </div>
            <div className="col-span-2">
              <div className="grid grid-cols-5 gap-2">
                <div className="text-center">
                  <div className="relative overflow-hidden h-[300px] rounded-lg shadow-md mb-[15px]">
                    <Image src="/join-1.png" alt="Digital Agencies" width={200} height={150} className="object-cover w-full h-[300px] grayscale" />
                    <div className="absolute inset-0 bg-[#000000c2] bg-opacity-40 flex items-center justify-center">
                      <h3 className="text-white font-semibold text-[16px] text-center leading-tight">Digital<br />Agencies</h3>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="relative overflow-hidden h-[300px] rounded-lg shadow-md mb-[15px]">
                    <Image src="/join-2.png" alt="IT Consultants" width={200} height={150} className="object-cover w-full h-[300px] grayscale" />
                    <div className="absolute inset-0 bg-[#000000c2] bg-opacity-40 flex items-center justify-center">
                      <h3 className="text-white font-semibold text-[16px] text-center leading-tight">IT<br />Consultants</h3>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="relative overflow-hidden h-[300px] rounded-lg shadow-md mb-[15px]">
                    <Image src="/join-3.png" alt="System Integrators" width={200} height={150} className="object-cover w-full h-[300px] grayscale" />
                    <div className="absolute inset-0 bg-[#000000c2] bg-opacity-40 flex items-center justify-center">
                      <h3 className="text-white font-semibold text-[16px] text-center leading-tight">System<br />Integrators</h3>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="relative overflow-hidden h-[300px] rounded-lg shadow-md mb-[15px]">
                    <Image src="/join-4.png" alt="Business Development Professionals" width={200} height={150} className="object-cover w-full h-[300px] grayscale" />
                    <div className="absolute inset-0 bg-[#000000c2] bg-opacity-40 flex items-center justify-center">
                      <h3 className="text-white font-semibold text-[16px] text-center leading-tight">Business Development<br />Professionals</h3>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="relative overflow-hidden h-[300px] rounded-lg shadow-md mb-[15px]">
                    <Image src="/join-5.png" alt="Freelancers with corporate networks" width={200} height={150} className="object-cover w-full h-[300px] grayscale" />
                    <div className="absolute inset-0 bg-[#000000c2] bg-opacity-40 flex items-center justify-center">
                      <h3 className="text-white font-semibold text-[16px] text-center leading-tight">Freelancers with<br />corporate networks</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white text-black sm:my-[55px] my-10 text-center">
          <div className="text-[20px] lg:text-[40px] font-bold text-black mb-[15px]">
            Turn Your Network Into a <span className="text-primary">Revenue Stream</span>
          </div>
          <p className="text-[18px] text-black font-[300] mb-[30px] max-w-2xl mx-auto">
            Become an IOI Reseller and start earning by offering trusted, high-demand technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-[15px] justify-center">
            <button className="bg-[#1B9AAA] text-white px-[30px] py-[15px] rounded-[7px] font-semibold hover:bg-white hover:text-[#1B9AAA] transition-colors h-[50px] text-[16px]">
              Apply To Become A Reseller
            </button>
            <button className="bg-[#2BB3C4] text-white px-[30px] py-[15px] rounded-[7px] font-semibold hover:bg-white hover:text-[#2BB3C4] transition-colors h-[50px] text-[16px]">
              Schedule A Call
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}
