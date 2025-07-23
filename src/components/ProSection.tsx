import Image from "next/image"

export default function ProSection() {
  const stats = [
    { count: "140+", title: "Coded Elements", desc: "From buttons, inputs, navbar, alert, table, card to chart." },
    { count: "10", title: "Example Pages", desc: "Save months of work when you use our ready-made pages." },
    { count: "30+", title: "Design Blocks", desc: "Mix and match the sections you&apos;ve created and unleash your creativity." },
    { count: "40+", title: "Global Styles", desc: "Colors, typography system, shadows, and blur effects ready to use." },
  ]

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
                <li><span className="font-semibold text-gray-900">Authentic & Localized Solutions</span><br/>We build solutions that are tailored to the real needs of local institutions, industries, and communities — not just generic tools.</li>
                <li><span className="font-semibold text-gray-900">AI-Driven Innovation</span><br/>Our platforms are built with Artificial Intelligence and data analytics at their core, ensuring automation, insight, and performance.</li>
                <li><span className="font-semibold text-gray-900">End-to-End Expertise</span><br/>From strategy and development to deployment and support, we provide full-cycle solutions for sustainable impact.</li>
                <li><span className="font-semibold text-gray-900">Scalable & Customizable</span><br/>Every product we offer can grow with your organization — modular, flexible, and fully adaptable.</li>
                <li><span className="font-semibold text-gray-900">Trusted by Government & Enterprises</span><br/>We have successfully served public institutions, educational sectors, and private companies across Indonesia.</li>
                <li><span className="font-semibold text-gray-900">Commitment to Long-Term Partnerships</span><br/>We go beyond project delivery — we stay with you to ensure adoption, training, and continuous improvement.</li>
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