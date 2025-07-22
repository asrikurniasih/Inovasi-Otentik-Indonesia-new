export default function HeroSection() {
  return (
    <section className="bg-white relative px-8 py-8 lg:mb-36">
      <div className="container mx-auto grid items-center lg:grid-cols-2">
        <div className="text-center lg:text-left pt-32">
          <div className="mb-8 lg:mr-32 leading-tight font-black text-4xl lg:text-5xl text-blue-gray-900 line-height-[1.25]" style={{ lineHeight: '1.25 !important' }}>
            Digital Transformation for Your <span className="text-blue">Business Growth</span>
          </div>
          <div className="lg:pr-32 text-lg text-[#253238]" style={{ lineHeight: '1.625 !important' }}>
            We are your strategic partner in creating a smarter, more efficient, and data-driven business ecosystem. Welcome to the future of innovation with Inovasi Otentik Indonesia.
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a href="#pricing">
              <button className="bg-gray-900 text-white px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors h-[40px] text-[14px]">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex">
        <img src="header.png" alt="components" className="absolute -top-10 right-0 w-1/2" />
      </div>
    </section>
  )
} 