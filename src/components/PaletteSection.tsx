import Image from "next/image"

export default function PaletteSection() {
  return (
    <section className="bg-white px-8 py-8">
      <div className="container mx-auto grid items-center relative lg:grid-cols-2">
        <div className="hidden lg:flex">
          <Image 
            src="/palette.png" 
            alt="palette" 
            width={600} 
            height={400}
            className="max-w-xl rounded-3xl mx-auto" 
          />
        </div>
        
        <div className="text-center lg:text-left">
          <p className="text-blue-600 font-bold text-lg mb-5">  
            Attention to beautiful design
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight" style={{ lineHeight: '1.25 !important' }}>
            Awesome color palette, variables & elements foundation.
          </h2>
          <p className="text-gray-700 font-light lg:pr-20" style={{ lineHeight: '1.625 !important' }}>
            Customize your colors, sizes, spacing or typography in minutes so they can fit perfectly for your brand. Spend time creating dApps logic and UX, our tools take care of the rest.
          </p>
        </div>
      </div>
    </section>
  )
} 