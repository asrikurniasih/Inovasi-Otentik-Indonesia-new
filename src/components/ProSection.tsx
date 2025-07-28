import Image from "next/image"

export default function ProSection() {

  return (
    <section className="bg-white px-8 py-20">
      <div className="container mx-auto relative">
        <div className="lg:flex relative">
          <div className="lg:w-1/2">
            <div className="p-2 lg:p-0 mb-8">
              <div className="text-left">
                <p className="text-blue-600 font-bold text-lg mb-5">
                  Why Choose Us?
                </p>
                <p className="text-gray-700 font-light mb-5 lg:w-[30rem]" style={{ lineHeight: '1.625 !important' }}>
                  Choosing the right technology partner is critical to your digital transformation. At PT Inovasi Otentik Indonesia, we bring more than just technical solutions — we deliver measurable impact with a human-centered approach.
                </p>
              </div>
              <ul className="text-gray-700 font-light mb-5 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4" style={{ lineHeight: '1.625 !important' }}>
                <li><span className="font-semibold text-gray-900 flex items-center gap-2">
                  <Image src="/biometric-authentication.png" alt="check" width={20} height={20} />
                  Authentic & Localized Solutions</span>
                  <p className="text-gray-700 font-light mb-5" style={{ lineHeight: '1.625 !important' }}>
                    We build solutions that are tailored to the real needs of local institutions, industries, and communities — not just generic tools.
                  </p>
                </li>
                <li><span className="font-semibold text-gray-900 flex items-center gap-2">
                  <Image src="/ai.png" alt="check" width={20} height={20} />
                  AI-Driven Innovation</span>
                  <p className="text-gray-700 font-light mb-5" style={{ lineHeight: '1.625 !important' }}>
                    Our platforms are built with Artificial Intelligence and data analytics at their core, ensuring automation, insight, and performance.
                  </p>
                </li>
                <li><span className="font-semibold text-gray-900 flex items-center gap-2">
                  <Image src="/experience.png" alt="check" width={20} height={20} />
                  End-to-End Expertise</span>
                  <p className="text-gray-700 font-light mb-5" style={{ lineHeight: '1.625 !important' }}>
                    From strategy and development to deployment and support, we provide full-cycle solutions for sustainable impact.
                  </p>
                </li>
                <li><span className="font-semibold text-gray-900 flex items-center gap-2">
                  <Image src="/scalability.png" alt="check" width={20} height={20} />
                  Scalable & Customizable</span>
                  <p className="text-gray-700 font-light mb-5" style={{ lineHeight: '1.625 !important' }}>
                    Every product we offer can grow with your organization — modular, flexible, and fully adaptable.
                  </p>
                </li>
                <li><span className="font-semibold text-gray-900 flex items-center gap-2">
                  <Image src="/accountability.png" alt="check" width={20} height={20} />
                  Trusted by Government & Enterprises</span>
                  <p className="text-gray-700 font-light mb-5" style={{ lineHeight: '1.625 !important' }}>
                    We have successfully served public institutions, educational sectors, and private companies across Indonesia.
                  </p>
                </li>
                <li><span className="font-semibold text-gray-900 flex items-center gap-2">
                  <Image src="/partnership.png" alt="check" width={20} height={20} />
                  Commitment to Long-Term Partnerships</span>
                  <p className="text-gray-700 font-light mb-5" style={{ lineHeight: '1.625 !important' }}>
                    We go beyond project delivery — we stay with you to ensure adoption, training, and continuous improvement.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <Image 
            src="/components.png" 
            alt="components" 
            width={600} 
            height={400}
            className="lg:w-1/2 rounded-3xl hidden md:flex ml-auto lg:absolute -right-32"
            style={{ top: '0px' }} 
          />
        </div>
      </div>
    </section>
  )
} 