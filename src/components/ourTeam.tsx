import Image from "next/image"

export default function LogoSection() {
  const logos = ['microsoft', 'cisco', 'ibm', 'amazons', 'salesforce', 'vodafone']

  return (
    <section className="py-9 px-8 lg:py-20 bg-white">
      <div className="container mx-auto text-center">
        <p className="text-xl font-extrabold mb-8 text-gray-900">
          Tech we Work With
        </p>
        {/* <div className="flex flex-wrap items-center justify-center gap-8">
          {logos.map((logo, key) => (
            <Image
              key={key}
              src={`/logos/logo-${logo}.svg`}
              alt="logo"
              width={160}
              height={80}
              className="w-40"
            />
          ))}
        </div> */}
      </div>
    </section>
  )
} 