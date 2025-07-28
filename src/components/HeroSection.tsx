export default function HeroSection() {
  return (
    <section className="relative" style={{ backgroundImage: 'url(/bg-section-1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="bg-[#000000d4] px-8 py-8">
        <div className="container mx-auto grid items-center lg:grid-cols-3">
          <div className="text-center lg:text-left xl:py-[70px] lg:py-12 col-span-2">
            <div className="mb-8 lg:mr-32 leading-tight text-4xl lg:text-[48px] text-white font-[700] xl:pr-[3em]" style={{ lineHeight: '1.3 !important' }}>
              Digital Transformation for Your <span className="text-primary">Business Growth</span>
            </div>
            <div className="lg:pr-[4em] text-[16px] text-white lg:mr-32" style={{ lineHeight: '1.625 !important' }}>
              We are your strategic partner in creating a smarter, more efficient, and data-driven business ecosystem. Welcome to the future of innovation with <b>Inovasi Otentik Indonesia</b>.
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a href="#">
                <button className="bg-primary text-white px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors h-[47px] text-[16px]">
                  Explore Our Solutions <i className="fa-solid fa-arrow-right ml-2"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex">
        </div>
      </div>
      {/* className="w-1/2 3xl:w-[45%] 4xl:w-[35%] h-auto absolute -top-10 right-0" */}
    </section>
  )
} 