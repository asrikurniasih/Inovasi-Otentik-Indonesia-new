'use client'

import Image from "next/image";

export default function PartnershipPage() {
  return (
    <section className="px-2 sm:px-[74px] bg-white text-black">
      <div className="container mx-auto">
        {/* Hero Section */}
        <section className="mx-auto pt-[55px] flex flex-col lg:flex-row xl:gap-16 gap-8 items-center">
          <div className="flex-1">
            <div className="md:text-[40px] text-[30px] font-extrabold mb-[15px] text-black">
              Let&apos;s Grow Together Through <span className="text-primary">Strategic Partnerships</span>
            </div>
            <p className="mb-[30px] text-[16px] text-gray-700">
              At IOI, we believe that collaboration drives innovation. We work with technology providers, system integrators, resellers, and industry specialists to deliver smarter solutions for businesses, governments, and communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <button className="bg-[#1B9AAA] text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1B9AAA] transition-colors">
                Become A Partner
              </button>
              <p className="text-[14px] text-gray-600 italic">Join us in creating impactful digital solutions.</p>
            </div>
          </div>
          <div className="flex-1">
            <Image src="/PartnershipPage.png" alt="Partnership Collaboration" width={500} height={400} className="object-cover w-full h-auto rounded-lg" />
          </div>
        </section>

        {/* Partnership Model Section */}
        <section className="mx-auto sm:mt-[55px] mt-10">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
            <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 col-span-2">
              <div className="md:text-[40px] text-[30px] font-bold text-black gap-4 relative">
                Partnership Model
                <Image src="/3D.png" alt="Partnership Model" width={175} height={159} className="absolute right-0 top-0" />
              </div>
              <div className="border border-gray-300 rounded-[10px] p-4 h-[165px]">
                <div className="text-[16px] font-bold text-primary text-center mb-[15px]">
                  Technology Partner
                </div>
                <div className="text-[15px] text-black text-center">
                  Integrate your product or service with IOI’s platforms to create combined solutions.
                </div>
              </div>
              <div className="border border-gray-300 rounded-[10px] p-4 h-[165px]">
                <div className="text-[16px] font-bold text-primary text-center mb-[15px]">
                  Reseller Partner
                </div>
                <div className="text-[15px] text-black text-center">
                Sell IOI’s solutions to your customers under the IOI brand and earn margins.
                </div>
              </div>
              <div className="border border-gray-300 rounded-[10px] p-4 h-[165px]">
                <div className="text-[16px] font-bold text-primary text-center mb-[15px]">
                  Implementation Partner
                </div>
                <div className="text-[15px] text-black text-center">
                  Deliver, customize, and support IOI’s solutions for end clients, often in niche industries or local markets.
                </div>
              </div>
            </div>

            <div>
              <div className="border border-gray-300 rounded-[10px] h-full pt-4 md:pb-[50px] pb-[30px]">
                <div className="text-[16px] font-bold text-primary text-center mb-[15px]">
                  White Label Partner
                </div>
                <div className="text-[15px] text-black text-left px-4 md:px-[49px]">
                  <ul className="list-disc">
                    <li>Use IOI’s technology under your own brand name.</li>
                    <li>We provide the full solution, you apply your own branding, logos, and domain.</li>
                    <li>Ideal for companies wanting to expand their portfolio without developing from scratch.</li>
                    <li>You manage customer relationships, we handle the technology backbone.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Program Benefits Section */}
        <section className="mx-auto sm:py-[55px] py-10">
          <div className="md:text-[40px] text-[30px] font-bold mb-1 text-black">
            Partner Program <span className="text-primary">Benefits</span>
          </div>

          <div className="overflow-x-auto rounded-[20px]">
            <table className="w-full border-collapse rounded-[20px]">
              <thead>
                <tr className="bg-[#1B9AAA]/25 text-black">
                  <th className="p-4 text-left border">Features/Responsibilities</th>
                  <th className="p-4 text-left border">Implementation Partner</th>
                  <th className="p-4 text-left border">Reseller Partner</th>
                  <th className="p-4 text-left border">White Label Partner</th>
                  <th className="p-4 text-left border">Technology Partner</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="p-4 border font-semibold bg-[#1B9AAA]/25">Branding</td>
                  <td className="p-4 border">IOI branding</td>
                  <td className="p-4 border">Partner&apos;s own branding (powered by IOI tech)</td>
                  <td className="p-4 border">Joint branding or integration</td>
                  <td className="p-4 border">IOI branding (with customization)</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 border font-semibold bg-[#1B9AAA]/25">Sales & Marketing</td>
                  <td className="p-4 border">Handled by Partner (with IOI marketing support)</td>
                  <td className="p-4 border">Fully handled by Partner</td>
                  <td className="p-4 border">Joint go-to-market campaigns</td>
                  <td className="p-4 border">Joint campaigns or Partner-led</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border font-semibold bg-[#1B9AAA]/25">Customer Relationship Ownership</td>
                  <td className="p-4 border">Partner</td>
                  <td className="p-4 border">Partner</td>
                  <td className="p-4 border">Shared or Partner</td>
                  <td className="p-4 border">Shared or Partner</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 border font-semibold bg-[#1B9AAA]/25">Technical Development</td>
                  <td className="p-4 border">IOI</td>
                  <td className="p-4 border">IOI</td>
                  <td className="p-4 border">Shared (integration work)</td>
                  <td className="p-4 border">IOI with Partner</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border font-semibold bg-[#1B9AAA]/25">Customization</td>
                  <td className="p-4 border">Limited</td>
                  <td className="p-4 border">Branding & UI changes allowed</td>
                  <td className="p-4 border">Full integration features</td>
                  <td className="p-4 border">High customization for client needs</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 border font-semibold bg-[#1B9AAA]/25">Revenue Model</td>
                  <td className="p-4 border">Margin per Sale</td>
                  <td className="p-4 border">License fee + Partner&apos;s selling price</td>
                  <td className="p-4 border">Shared revenue or project-based</td>
                  <td className="p-4 border">Implementation service fees + margin</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border font-semibold bg-[#1B9AAA]/25">Support & Maintenance</td>
                  <td className="p-4 border">Provided by IOI (to Partner)</td>
                  <td className="p-4 border">Provided by IOI (white-labeled for Partner)</td>
                  <td className="p-4 border">Shared depending on integration</td>
                  <td className="p-4 border">Provided jointly or by Partner</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 border font-semibold bg-[#1B9AAA]/25">Best For</td>
                  <td className="p-4 border">Agencies, IT resellers</td>
                  <td className="p-4 border">Companies wanting to expand portfolio without dev costs</td>
                  <td className="p-4 border">Tech providers seeking integration</td>
                  <td className="p-4 border">System integrators & consultants</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* How It Works Section */}
        {/* <section className="mx-auto sm:py-[55px] py-10">
          <div className="md:text-[40px] text-[30px] font-bold mb-8 text-black">
            How It <span className="text-primary">Works</span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1B9AAA] text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="font-semibold text-lg">Submit Your Partnership Application</h3>
                <p className="text-[14px] text-gray-700">Tell us about your company and target market.</p>
              </div>
            </div>
            <div className="hidden md:block w-16 h-0.5 bg-gray-300"></div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1B9AAA] text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="font-semibold text-lg">Partnership Discussion</h3>
                <p className="text-[14px] text-gray-700">Explore the best model for mutual growth.</p>
              </div>
            </div>
            <div className="hidden md:block w-16 h-0.5 bg-gray-300"></div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1B9AAA] text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="font-semibold text-lg">Agreement & Onboarding</h3>
                <p className="text-[14px] text-gray-700">Finalize terms and receive training/materials.</p>
              </div>
            </div>
            <div className="hidden md:block w-16 h-0.5 bg-gray-300"></div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1B9AAA] text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h3 className="font-semibold text-lg">Go-to-Market</h3>
                <p className="text-[14px] text-gray-700">Start selling, integrating, or implementing IOI's solutions.</p>
              </div>
            </div>
            <div className="hidden md:block w-16 h-0.5 bg-gray-300"></div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1B9AAA] text-white rounded-full flex items-center justify-center font-bold">5</div>
              <div>
                <h3 className="font-semibold text-lg">Ongoing Collaboration</h3>
                <p className="text-[14px] text-gray-700">Continuous support and co-marketing opportunities.</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Why Partner with IOI Section */}
        <section className="mx-auto sm:py-[55px] py-10 rounded-[20px]" style={{ boxShadow: '0px 2px 6px 0px rgba(27, 153, 170, 0.15)' }}>
          <div className="flex items-center w-full gap-4 mb-[46px] px-2 sm:px-[74px]">
            <div className="xl:text-[40px] text-[30px] flex-shrink-0 font-bold">
              Why Partner with <span className="text-primary">IOI</span>
            </div>
            <div className="flex-1 flex justify-center">
              <hr className="w-full max-full" />
            </div>
          </div>

          <div className="grid sm:grid-cols-3 grid-cols-1 xl:gap-[40px] gap-[20px] px-2">
            <div className="text-center sm:w-[280px] w-full">
              <div className="w-2 h-2 bg-black rounded-full mx-auto mb-3"></div>
              <div className="text-[16px] font-semibold my-[15px] text-primary">Diverse Product Portfolio</div>
              <div className="text-[16px] text-gray-600 text-balance">From AI-powered automation to IoT integration and enterprise systems.</div>
            </div>
            <div className="text-center sm:w-[280px] w-full sm:mx-auto mx-0">
              <div className="w-2 h-2 bg-black rounded-full mx-auto mb-3"></div>
              <div className="text-[16px] font-semibold my-[15px] text-primary">End-to-End Support</div>
              <div className="text-[16px] text-gray-600 text-balance">Training, marketing materials, and technical assistance for your team.</div>
            </div>
            <div className="text-center sm:w-[280px] w-full sm:ml-auto mx-0">
              <div className="w-2 h-2 bg-black rounded-full mx-auto mb-3"></div>
              <div className="text-[16px] font-semibold my-[15px] text-primary">Trusted Expertise</div>
              <div className="text-[16px] text-gray-600 text-balance">Backed by years of delivering solutions to government, enterprises, and SMEs.</div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-[20px] px-2 sm:mt-[54px] mt-[30px] sm:mx-[74px]">
            <div className="text-center sm:w-[280px] w-full sm:mx-auto mx-0">
              <div className="w-2 h-2 bg-black rounded-full mx-auto mb-3"></div>
              <div className="text-[16px] font-semibold my-[15px] text-primary">Flexible Partnership Models</div>
              <div className="text-[16px] text-gray-600 text-balance">Reseller, white-label, co-branding, or technology integration.</div>
            </div>
            <div className="text-center sm:w-[280px] w-full sm:mx-auto mx-0">
              <div className="w-2 h-2 bg-black rounded-full mx-auto mb-3"></div>
              <div className="text-[16px] font-semibold my-[15px] text-primary">Revenue Growth Opportunities</div>
              <div className="text-[16px] text-gray-600 text-balance">Earn competitive margins while expanding your market reach.</div>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="mx-auto sm:py-[55px] py-10">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            {/* Left Section - Text Content */}
            <div className="flex flex-col justify-center h-full">
              <div className="md:text-[35px] text-[30px] font-bold mb-4 text-black leading-[1.2]">
                Let&apos;s Build a Stronger Digital Ecosystem <span className="text-primary">Together</span>
              </div>
              <p className="text-[16px] text-gray-700">Join our growing network of partners and unlock new opportunities.</p>
            </div>

            {/* Right Section - Form */}
            <div className="flex-1">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B9AAA] bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B9AAA] bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Position</label>
                  <input
                    type="text"
                    placeholder="Your position in company"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B9AAA] bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Choose Model Partner</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B9AAA] bg-white">
                    <option>Model Partner</option>
                    <option>Technology Partner</option>
                    <option>White Label Partner</option>
                    <option>Reseller Partner</option>
                    <option>Implementation Partner</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Description</label>
                  <textarea
                    placeholder="Business description"
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B9AAA] bg-white"
                  ></textarea>
                </div>
                <div>
                  <button
                    className="bg-[#1B9AAA] text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1B9AAA] transition-colors w-full"
                  >
                    Apply To Become A Partner
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Our Partners Section */}
        <section className="mx-auto sm:py-[55px] py-10">
          <div className="md:text-[40px] text-[30px] font-bold mb-8 text-black">
            Our <span className="text-primary">Partner</span>
          </div>

          <div className="flex flex-wrap gap-8 items-center justify-center">
            <Image src="/partner.png" alt="Partnership Collaboration" width={249} height={110} className="object-cover w-[249px] h-[110px]" />
          </div>
        </section>
      </div>
    </section>
  );
}
