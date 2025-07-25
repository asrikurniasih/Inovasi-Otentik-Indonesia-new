import Image from "next/image"

export default function FeaturesSection() {
  const features = [
    {
      icon: "/data-integration.png",
      title: "Data Integration & System Automation",
      description: "Connect, process, and manage data from multiple sources to streamline decision-making.",
    },
    {
      icon: "/coding.png",
      title: "Custom Software & Application Development",
      description: "From concept to deployment, we build digital solutions to match your unique needs.",
    },
    {
      icon: "/ai-solutions.png",
      title: "AI Solutions",
      description: "Tailored AI models for prediction, classification, automation, and optimization of business processes.",
    },
    {
      icon: "/consultant.png",
      title: "Strategic IT Consulting",
      description: "Expert guidance for your successful digital transformation journey.",
    }
  ]

  return (
    <section className="px-4 lg:py-20 bg-white">
      <div className="container mx-auto mb-10 text-center">
        <div className="flex justify-center align-center relative z-5">
          <p className="text-xl font-extrabold mb-8 text-gray-900">
            Our Services
          </p>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-20 md:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon, title, description }) => (
          <div key={title} className="bg-transparent">
            <div className="grid justify-center text-center">
              <Image src={icon} alt={title} width={128} height={128} className="w-32 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {title}
              </h3>
              <p className="px-8 font-normal text-gray-700">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 