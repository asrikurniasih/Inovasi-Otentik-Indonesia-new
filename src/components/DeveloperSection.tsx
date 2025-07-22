import Image from "next/image"

export default function DeveloperSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto grid items-center relative lg:grid-cols-2">
        <div className="mb-8">
          <p className="text-blue-600 font-bold text-lg mb-5">
            Attention to high-quality code
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Develop consistenly using Astro architecture principles
          </h2>
          <p className="text-gray-900 lg:pr-32" style={{ lineHeight: '1.625 !important' }}>
            With AstroLaunch UI, you get everything you need to start creating 
            fully functional and responsive Ecommerce websites in days, not months.
          </p>
        </div>
        <Image 
          src="/consistenly.png" 
          alt="components" 
          width={650} 
          height={450}
          className="mx-auto hidden md:flex" 
        />
      </div>
    </section>
  )
} 