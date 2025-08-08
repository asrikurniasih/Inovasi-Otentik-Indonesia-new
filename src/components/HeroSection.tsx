export default function HeroSection() {
  return (
    <section className="relative" style={{ backgroundImage: 'url(/bg-section-1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="bg-[#000000d4] px-2 sm:px-[74px] pt-10 lg:pt-[144px]">
        <div className="container mx-auto">
          <div className="grid items-center lg:grid-cols-3">
            <div className="text-center lg:text-left col-span-2">
              <div className="mb-8 leading-tight text-[20px] lg:text-[40px] text-white font-[700]" style={{ lineHeight: '1.3 !important' }}>
                Empowering Authentic <div className="text-primary">Digital Transformation</div>
              </div>
              <div className="text-[16px] text-white lg:mr-32" style={{ lineHeight: '1.625 !important' }}>
                We build intelligent, integrated, and scalable digital solutions  tailored for governments, businesses, and educational institutions.
              </div>
              <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
                <a href="#">
                  <button className="bg-[#1B9AAA] text-white px-[15px] rounded-[7px] font-semibold hover:bg-white hover:text-[#1B9AAA] transition-colors h-[50px] text-[16px]">
                    Explore Our Solutions
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="pb-[55px]">
            <div className="mt-[73px] text-center lg:text-right italic text-[15px]">
              From AI-powered systems to enterprise-grade software, we help you <br></br> solve real problems with purposeful innovation.
            </div>
          </div>
        </div>
      </div>
      {/* className="w-1/2 3xl:w-[45%] 4xl:w-[35%] h-auto absolute -top-10 right-0" */}
    </section>
  )
} 