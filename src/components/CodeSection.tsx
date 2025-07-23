import Image from "next/image"

export default function CodeSection() {
  return (
    <section className="bg-white px-8 py-8">
      <div className="container mx-auto grid items-center relative lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <p className="text-blue-600 font-bold text-lg mb-5">
            By developers, for entrepreneurs
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
            Don&apos;t write from scratch. Coded examples are included.
          </h2>
          <p className="text-gray-700 font-light lg:pr-20" style={{ lineHeight: '1.625 !important' }}>
            Using our ecommerce starter template will save a lot of coding time, as it provides a solid foundation for the Online Store, allowing your team to focus on customizing and adding specific features to meet the needs of your particular project.
          </p>
          <a href="#">
            <button className="text-gray-900 border border-gray-300 px-4 py-2 rounded text-sm font-medium hover:bg-gray-50 flex items-center gap-2 mt-4 mx-auto md:mr-auto lg:ml-0">
              Documentation
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </a>
        </div>
        <Image 
          src="/code.png" 
          alt="code" 
          width={800} 
          height={600}
          className="max-w-2xl rounded-3xl hidden md:flex mx-auto" 
        />
      </div>
    </section>
  )
} 