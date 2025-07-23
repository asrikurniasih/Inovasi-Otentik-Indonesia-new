import Image from "next/image"

export default function FeaturesSection() {
  const features = [
    {
      icon: "/icon1.png",
      title: "Proactive Managed Services",
      description: "We proactively manage your IT, ensuring your systems remain reliable and secure.",
    },
    {
      icon: "/icon2.png",
      title: "Custom Application Development",
      description: "Building custom AI-powered applications to enhance operational efficiency for your business.",
    },
    {
      icon: "/icon3.png",
      title: "Strategic IT Consultation",
      description: "Expert guidance for your successful digital transformation journey.",
    }
  ]

  return (
    <section className="px-4 lg:py-20 bg-white">
      <div className="container mx-auto mb-10 text-center">
        <div className="flex justify-center align-center relative z-5">
          <p className="text-xl text-gray-900 mr-2 font-normal">
            Our Services
          </p>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
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