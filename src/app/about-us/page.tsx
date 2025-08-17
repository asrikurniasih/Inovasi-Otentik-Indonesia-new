'use client'

import Image from "next/image";

export default function AboutUsPage() {
  return (
    <section className="px-2 sm:px-[74px] bg-white text-black">
      <div className="container mx-auto">
        <section className="mx-auto pt-[55px] text-center gap-8 items-center">
          <div>
            <div className="md:text-[40px] text-[30px] font-extrabold mb-[15px] text-black">Who <span className="text-primary">We</span> Are</div>
            <p className="mb-[30px] mx-auto text-[16px]">
              PT Inovasi Otentik Indonesia is a technology company committed to delivering authentic and intelligent digital solutions tailored for governments, enterprises, and educational institutions. We believe that true innovation comes from understanding local challenges and solving them with the right mix of technology, strategy, and collaboration.
            </p>
          </div>
          <div className="">
            <Image src="/aboutUs.png" alt="Services" width={400} height={250} className="object-cover w-full h-auto" />
          </div>
        </section>

        <section className="mx-auto sm:py-[55px] px-2 sm:px-[74px] py-10 sm:my-[55px] my-10 rounded-[20px]" style={{ boxShadow: '0px 2px 6px 0px rgba(27, 153, 170, 0.15)' }}>
          <div className="flex items-center w-full gap-4">
            <div className="md:text-[40px] text-[30px] mb-[15px] flex-shrink-0 font-bold">
              <span className="text-primary">Our</span> Philosophy
            </div>
            <div className="flex-1 flex justify-center">
              <hr className="w-full max-full" />
            </div>
          </div>

          <div className="text-[16px] line-height-[20px]">
            We don't just build systems, we create impact. Through AI-driven platforms, smart integrations, and scalable applications, we help organizations transform digitally while staying aligned with their goals and culture.
          </div>
        </section>

        <section className="grid sm:grid-cols-2 grid-cols-1 gap-[55px]">
          <div className="sm:px-[55px] px-2 py-[15px]" style={{ boxShadow: '0px 2px 6px 0px rgba(27, 153, 170, 0.15)' }}>
            <div className="flex items-center gap-1 justify-center mb-[15px]">
              <Image src="/Vision.png" alt="Vision" width={64} height={64} className="rounded-3xl object-cover w-[64px] h-[64px]" />
              <div className="md:text-[40px] text-[30px] font-bold text-black ml-2">Vision</div>
            </div>
            <div className="text-[16px] line-height-[23px] font-[400] sm:mb-[85px] mb-[30px]">
              We build and connect intelligent IoT ecosystems from smart sensors and gateways to cloud platforms helping you monitor, automate, and optimize operations in real time.
            </div>
          </div>

          <div className="sm:px-[55px] px-2 py-[15px]" style={{ boxShadow: '0px 2px 6px 0px rgba(27, 153, 170, 0.15)' }}>
            <div className="flex items-center gap-1 justify-center mb-[15px]">
              <Image src="/Vision.png" alt="Vision" width={64} height={64} className="rounded-3xl object-cover w-[64px] h-[64px]" />
              <div className="md:text-[40px] text-[30px] font-bold text-black ml-2">Mission</div>
            </div>
            <div className="text-[16px] line-height-[23px] font-[400] sm:mb-[85px] mb-[30px]">
              <ul className="list-disc list-inside">
                <li>Develop customized digital solutions rooted in local needs</li>
                <li>Provide integrated systems that enhance decision-making</li>
                <li>Deliver sustainable and scalable technology</li>
                <li>Build long-term partnerships with public and private sectors</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mx-auto sm:py-[55px] px-2 text-center">
          <div>
            <div className="text-[30px] sm:text-[40px] font-bold mb-[15px]">Our <span className="text-primary">Values</span></div>
            <div className="grid sm:grid-cols-2 gap-[47px] mt-[15px] max-w-2xl mx-auto">
              <div>
                <div className="flex gap-[15px] items-center">
                  <div>
                    <Image src="/Authentic.png" alt="Authentic" width={64} height={64} className="object-contain w-[64px] min-w-[64px] h-[64px]" />
                  </div>
                  <div className="text-left">
                    <div className="text-[20px] text-black font-semibold">
                      Authentic
                    </div>
                    <div className="text-[14px] text-black font-[400]">
                      We build with integrity and real understanding of user needs
                    </div>
                  </div>
                </div>

                <div className="flex gap-[15px] items-center mt-[15px]">
                  <div>
                    <Image src="/Integrated.png" alt="Integrated" width={64} height={64} className="object-contain w-[64px] min-w-[64px] h-[64px]" />
                  </div>
                  <div className="text-left">
                    <div className="text-[20px] text-black font-semibold">
                      Partnership
                    </div>
                    <div className="text-[14px] text-black font-[400]">
                    We believe in growing together with our clients
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
                      Innovation
                    </div>
                    <div className="text-[14px] text-black font-[400]">
                    We combine technology with creativity for future-ready solutions
                    </div>
                  </div>
                </div>
                <div className="flex gap-[15px] items-center mt-[15px]">
                   <div>
                     <Image src="/Impact-driven.png" alt="Impact-driven" width={64} height={64} className="object-contain w-[64px] min-w-[64px] h-[64px]" />
                   </div>
                  <div className="text-left">
                    <div className="text-[20px] text-black font-semibold">
                      Impact
                    </div>
                    <div className="text-[14px] text-black font-[400]">
                    We measure success by real change and value delivered
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="mx-auto sm:py-[55px] px-2 sm:px-[74px] py-10 rounded-[20px]" style={{ boxShadow: '0px 2px 6px 0px rgba(27, 153, 170, 0.15)' }}>
          <div className="flex items-center w-full gap-4">
            <div className="md:text-[40px] text-[30px] flex-shrink-0 font-bold">
              <span className="text-primary">Our</span> Clients & Partners
            </div>
            <div className="flex-1 flex justify-center">
              <hr className="w-full max-full" />
            </div>
          </div>

          <div className="text-[16px] line-height-[20px] mt-[15px] mb-[18px]">
            We proudly support digital transformation for:
          </div>

            <div className="grid sm:grid-cols-2 grid-cols-1 gap-[15px]">
             <div className="flex items-center gap-1 text-[16px]">
               <Image src="/Inspection.png" alt="Inspection" width={32} height={32} className="object-contain w-[32px] min-w-[32px] h-[32px]" />
               <div>
                 Local and regional governments
               </div>
             </div>
             <div className="flex items-center gap-1 text-[16px]">
               <Image src="/Inspection.png" alt="Inspection" width={32} height={32} className="object-contain w-[32px] min-w-[32px] h-[32px]" />
               <div>
                 Educational institutions
               </div>
             </div>
             <div className="flex items-center gap-1 text-[16px]">
               <Image src="/Inspection.png" alt="Inspection" width={32} height={32} className="object-contain w-[32px] min-w-[32px] h-[32px]" />
               <div>
                 Private companies and SMEs
               </div>
             </div>
             <div className="flex items-center gap-1 text-[16px]">
               <Image src="/Inspection.png" alt="Inspection" width={32} height={32} className="object-contain w-[32px] min-w-[32px] h-[32px]" />
               <div>
                 Non-profit and community organizations
               </div>
             </div>
           </div>
        </section>

        <section className="bg-white text-black sm:my-[55px] my-10">
          <div className="text-[20px] lg:text-[40px] font-bold text-black text-center px-[74px]">
            <div>
              Let&apos;s Work <span className="text-primary">Together</span>
            </div>
          </div>

          <div className='relative py-5'>
            <Image src="/imgAboutUs.png" alt="imgAboutUs" width={1000} height={1000} className="rounded-0 object-cover w-full h-auto" />
          </div>

          <div className='text-[18px] text-black font-[300] text-center px-[74px] italic'>
            Whether you&&apos;re ready to launch or just exploring options, we&apos;re here to help turn your vision into a powerful digital solution.
          </div>

          <div className="flex justify-center mt-[15px]">
            <a href="#">
              <button className="bg-[#1B9AAA] text-white px-[15px] rounded-[7px] font-semibold hover:bg-white hover:text-[#1B9AAA] transition-colors h-[50px] text-[16px]">
               Get in Touch
              </button>
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
