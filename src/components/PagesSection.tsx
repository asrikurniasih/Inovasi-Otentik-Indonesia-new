

export default function PagesSection() {
  const reasons = [
    {
      title: "Authentic & Localized Solutions",
      desc: "We build solutions that are tailored to the real needs of local institutions, industries, and communities — not just generic tools.",
    },
    {
      title: "AI-Driven Innovation",
      desc: "Our platforms are built with Artificial Intelligence and data analytics at their core, ensuring automation, insight, and performance.",
    },
    {
      title: "End-to-End Expertise",
      desc: "From strategy and development to deployment and support, we provide full-cycle solutions for sustainable impact.",
    },
    {
      title: "Scalable & Customizable",
      desc: "Every product we offer can grow with your organization — modular, flexible, and fully adaptable.",
    },
    {
      title: "Trusted by Government & Enterprises",
      desc: "We have successfully served public institutions, educational sectors, and private companies across Indonesia.",
    },
    {
      title: "Commitment to Long-Term Partnerships",
      desc: "We go beyond project delivery — we stay with you to ensure adoption, training, and continuous improvement.",
    },
  ]

  return (
    <section id="whyChooseUs">
      <div className="container mx-auto px-8 py-10 bg-white">
        <div className="mb-16 text-left">
          <p className="text-blue-600 mb-2 text-lg font-semibold">
            Why Choose Us?
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Choosing the right technology partner is critical to your digital transformation.
          </h2>
          <p className="text-blue-gray-900 font-light">
            At PT Inovasi Otentik Indonesia, we bring more than just technical solutions — we deliver measurable impact with a human-centered approach.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-y-6 gap-x-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ title, desc }) => (
            <div key={title} className="bg-transparent shadow-sm rounded-lg p-4 border border-gray-200 h-full">
              <div className="p-0">
                <div className="grid grid-cols-6 items-baseline gap-2 text-gray-900">
                  <div className="col-span-5">
                    <h3 className="text-2xl font-semibold normal-case">{title}</h3>
                  </div>
                </div>
                <p className="leading-relaxed text-gray-700 mb-6 font-normal">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 