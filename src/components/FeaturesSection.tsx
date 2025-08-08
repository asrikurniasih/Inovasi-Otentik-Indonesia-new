import Image from "next/image"

export default function FeaturesSection() {

  return (
    <section className="bg-white py-10 sm:py-[55px] px-2 sm:px-[74px] ">
      <div className="mx-auto container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          <div className="text-[20px] lg:text-[40px] font-bold text-black col-span-1 lg:col-span-2 lg:pr-[100px] order-2 lg:order-1">
            <div>
              Authentic Innovation. <span className="text-primary">Real Impact.</span>
            </div>
            <div className="text-[18px] text-black font-normal mt-[15px]">
              PT Inovasi Otentik Indonesia (IOI) is a technology company committed to delivering smart, scalable, and impactful digital solutions. With deep roots in AI, system integration, and enterprise software development, we help organizations unlock the full potential of digital transformation.
            </div>

            <div className="text-[24px] text-black font-bold mt-[17px] sm:flex gap-[24px] items-center">
              <div>
                Our Core <span className="text-primary">Beliefs</span>
              </div>
              <div className="text-[16px] text-black font-[200] underline">
                We build technology that is:
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-[47px] mt-[15px]">
              <div className="flex gap-[15px] items-center">
                <div>
                  <Image src="/Authentic.png" alt="Authentic" width={62} height={62} />
                </div>
                <div>
                  <div className="text-[20px] text-black font-semibold">
                    Authentic
                  </div>
                  <div className="text-[14px] text-black font-[400]">
                    Rounded in real-world needs and local context
                  </div>
                </div>
              </div>

              <div className="flex gap-[15px] items-center">
                <div>
                  <Image src="/Innovative.png" alt="Innovative" width={62} height={62} />
                </div>
                <div>
                  <div className="text-[20px] text-black font-semibold">
                    Innovative
                  </div>
                  <div className="text-[14px] text-black font-[400]">
                    Powered by AI and creative problem-solving
                  </div>
                </div>
              </div>

              <div className="flex gap-[15px] items-center">
                <div>
                  <Image src="/Integrated.png" alt="Integrated" width={62} height={62} />
                </div>
                <div>
                  <div className="text-[20px] text-black font-semibold">
                    Integrated
                  </div>
                  <div className="text-[14px] text-black font-[400]">
                    Designed to unify systems and improve decision-making
                  </div>
                </div>
              </div>

              <div className="flex gap-[15px] items-center">
                <div>
                  <Image src="/Impact-driven.png" alt="Impact-driven" width={62} height={62} />
                </div>
                <div>
                  <div className="text-[20px] text-black font-semibold">
                    Impact-Driven
                  </div>
                  <div className="text-[14px] text-black font-[400]">
                    Focused on long-term value and measurable results
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-[55px] text-center lg:text-left">
              <button className="bg-[#1B9AAA] text-white px-[15px] rounded-[7px] font-semibold hover:bg-white hover:text-[#1B9AAA] transition-colors h-[50px] text-[16px]">
                Learn More
              </button>
            </div>
          </div>

          <div className="col-span-1 pt-4 order-1 lg:order-2">
            <video src="/benefit.mp4" autoPlay muted loop className="w-full h-full object-cover rounded-[10px]" />
          </div>
        </div>
      </div>
    </section>
  )
} 