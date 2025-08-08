import Image from "next/image"

export default function Solutions() {

  return (
    <section className="bg-white py-10 sm:py-[55px] px-2 sm:px-[74px] ">
      <div className="mx-auto container">
        <div className="grid grid-cols-1 gap-0">
          <div className="text-[20px] lg:text-[40px] font-bold text-black text-center">
            <div>
              Smart Solutions,<span className="text-primary">Built for Real Progress</span>
            </div>
            <div className="text-[15px] text-black font-normal mt-[15px] text-center">
              We deliver intelligent digital solutions that empower organizations to operate more efficiently, make smarter decisions, and scale sustainably. Whether you’re looking to automate operations, enhance user experience, or harness the power of AI  IOI is your trusted partner.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-2 gap-2 lg:gap-[30px] mt-[55px]">
            <div className="col-span-1">
              <div className="bg-white rounded-[10px]" style={{ boxShadow: '0px 2px 6px 0px rgba(27, 153, 170, 0.15)' }}>
                <div className="flex items-center pt-[10px] pr-[10px] h-[75px]">
                  <Image src="/Software.png" alt="Software" width={64} height={64} />
                  <div className="ml-[10px]">
                    <div className="text-[18px] text-primary font-bold">
                      Software Development
                    </div>
                  </div>
                </div>

                <div className="mt-[40px] text-[11.25px] text-black font-normal px-[29px] pb-[42px] h-[127px]">
                  We design and build web and mobile applications that align with your operations and business objectives.
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <div className="bg-white rounded-[10px]" style={{ boxShadow: '0px 2px 6px 0px rgba(27, 153, 170, 0.15)' }}>
                <div className="flex items-center pt-[10px] pr-[10px] h-[75px]">
                  <Image src="/AI-Powered.png" alt="AI-Powered" width={64} height={64} />
                  <div className="ml-[10px]">
                    <div className="text-[18px] text-primary font-bold">
                      AI-Powered Automation
                    </div>
                  </div>
                </div>

                <div className="mt-[40px] text-[11.25px] text-black font-normal px-[29px] pb-[42px] h-[127px]">
                  Intelligent systems that streamline workflows, enhance productivity, and support data-driven decision-making.
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <div className="bg-white rounded-[10px]" style={{ boxShadow: '0px 2px 6px 0px rgba(27, 153, 170, 0.15)' }}>
                <div className="flex items-center pt-[10px] pr-[10px] h-[75px]">
                  <Image src="/Data.png" alt="Data" width={64} height={64} />
                  <div className="ml-[10px]">
                    <div className="text-[18px] text-primary font-bold">
                      Data Integration & Automation
                    </div>
                  </div>
                </div>

                <div className="mt-[40px] text-[11.25px] text-black font-normal px-[29px] pb-[42px] h-[127px]">
                  Connect and synchronize your systems in real time to improve efficiency and reduce manual processes.
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <div className="bg-white rounded-[10px]" style={{ boxShadow: '0px 2px 6px 0px rgba(27, 153, 170, 0.15)' }}>
                <div className="flex items-center pt-[10px] pr-[10px] h-[75px]">
                  <Image src="/IoT.png" alt="IoT" width={64} height={64} />
                  <div className="ml-[10px]">
                    <div className="text-[18px] text-primary font-bold">
                      IoT System Development & Integration
                    </div>
                  </div>
                </div>

                <div className="mt-[40px] text-[11.25px] text-black font-normal px-[29px] pb-[42px] h-[127px]">
                  We build and connect intelligent IoT ecosystems from smart sensors and gateways to cloud platforms helping you monitor, automate, and optimize operations in real time.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
} 