import Image from "next/image"

export default function Ready() {

  return (
    <section className="bg-white py-10 sm:py-[55px] px-2 sm:px-[74px] ">
      <div className="mx-auto container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          <div className="text-[20px] lg:text-[37px] font-bold text-black col-span-1 lg:col-span-1 flex items-center">
            <Image src="/ready.png" alt="Ready" width={98} height={98} className="rounded-0 object-cover w-[98px] h-[98px]" />
            <div>
              Ready to Start?
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2 pt-4 lg:pl-[180px]">
            <div className="lg:flex text-center lg:text-start items-center gap-4 lg:h-[173px] bg-gradient-to-l from-[#c0e3e8] to-[#FFF] rounded-[20px] pb-[14px] lg:pb-0">
              <Image src="/Consultation.png" alt="Consultation Right" width={85} height={85} className="rounded-0 object-cover w-[85px] h-[85px] mx-auto lg:mx-0" />
              <div className="text-[18px] lg:text-[20px] text-black font-bold">
                 Book a Free Consultation

                <div className="text-[12.5px] text-black font-normal lg:mr-[100px]">
                  Talk with our experts to explore your needs and how we can support your goals.
                </div>
              </div>

              <div className="lg:pr-[53px] mt-2 sm:mt-0">
                <button className="bg-[#1B9AAA] text-white px-[15px] rounded-[7px] font-semibold hover:bg-white hover:text-[#1B9AAA] transition-colors h-[50px] text-[16px] w-[180px]">
                  Schedule a Call
                </button>
              </div>
            </div>
            

            <div className="lg:flex text-center lg:text-start items-center gap-4 lg:h-[173px] bg-gradient-to-r from-[#c0e3e8] to-[#FFF] rounded-[20px] mt-[14px] pb-[14px] lg:pb-0">
              <Image src="/Request.png" alt="Request" width={85} height={85} className="rounded-0 object-cover w-[85px] h-[85px] mx-auto lg:mx-0" />
              <div className="text-[18px] lg:text-[20px] text-black font-bold">
                Request a Demo

                <div className="text-[12.5px] text-black font-normal lg:mr-[100px]">
                  See how our solutions can fit your organization in a hands-on walkthrough.
                </div>
              </div>

              <div className="lg:pr-[53px] mt-2 sm:mt-0">
                <button className="bg-[#1B9AAA] text-white px-[15px] rounded-[7px] font-semibold hover:bg-white hover:text-[#1B9AAA] transition-colors h-[50px] text-[16px] w-[180px]">
                  Try a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 