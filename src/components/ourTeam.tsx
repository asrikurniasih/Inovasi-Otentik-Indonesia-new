import Image from "next/image"

export default function LogoSection() {
  const logos = ['openai', 'anthropic', 'aws', 'azure', 'pinecone', 'relevance', 'n8n']

  return (
    <section className="py-9 px-8 lg:py-20 bg-white">
      <div className="container mx-auto text-center">
        <p className="text-xl font-extrabold mb-8 text-gray-900">
          Tech we Work With
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