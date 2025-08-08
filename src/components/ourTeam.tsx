import Image from "next/image"

export default function LogoSection() {
  const logos = ['openai', 'anthropic', 'aws', 'azure', 'pinecone', 'relevance', 'n8n']

  return (
    <section className="px-2 pb-10 sm:px-[74px] sm:mb-[10px] bg-white">
      <div className="container mx-auto text-center">
        <p className="text-[20px] lg:text-[40px] font-[900] mb-6 text-gray-900">
          Tech we <span className="text-primary">Work With</span>
        </p>
        <div className="overflow-hidden w-full">
          <div className="flex gap-8 animate-marquee">
            {logos.map((logo, key) => (
              <Image
                key={key}
                src={`/logos/${logo}.png`}
                alt={logo}
                width={160}
                height={80}
                className="w-40 h-20 object-contain filter grayscale brightness-0"
              />
            ))}
            {/* Duplikat untuk efek looping */}
            {logos.map((logo, key) => (
              <Image
                key={`dup-${key}`}
                src={`/logos/${logo}.png`}
                alt={logo}
                width={160}
                height={80}
                className="w-40 h-20 object-contain filter grayscale brightness-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 