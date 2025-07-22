import Image from "next/image"

export default function ProSection() {
  const stats = [
    { count: "140+", title: "Coded Elements", desc: "From buttons, inputs, navbar, alert, table, card to chart." },
    { count: "10", title: "Example Pages", desc: "Save months of work when you use our ready-made pages." },
    { count: "30+", title: "Design Blocks", desc: "Mix and match the sections you've created and unleash your creativity." },
    { count: "40+", title: "Global Styles", desc: "Colors, typography system, shadows, and blur effects ready to use." },
  ]

  return (
    <section className="bg-white px-8 py-20">
      <div className="container mx-auto relative">
        <div className="text-left">
          <p className="text-blue-600 font-bold text-lg mb-5">
            Fully Coded Components based on Astro
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
            Astro LaunchUI Pro
          </h2>
          <p className="text-gray-700 font-light mb-5 lg:w-[30rem]" style={{ lineHeight: '1.625 !important' }}>
            All the sections and pages made with these elements will be fully responsive and will look beautiful on all types of screens, including phones, tables, or desktops.
          </p>
        </div>
        <div className="lg:flex relative">
          <div className="lg:w-1/2">
            <div className="p-2 lg:p-0 mb-8">
              <div className="grid gap-y-16 gap-x-8 grid-cols-2 md:grid-cols-2 mb-8">
                {stats.map((stat, key) => (
                  <div key={key} className="bg-transparent">
                    <h3 className="text-5xl font-bold text-gray-900 mb-4">{stat.count}</h3>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{stat.title}</h4>
                    <p className="text-gray-600">{stat.desc}</p>
                  </div>
                ))}
              </div>
              <a href="#" target="_blank">
                <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800">
                  Astro Pro
                </button>
              </a>
            </div>
          </div>
          <Image 
            src="/components.png" 
            alt="components" 
            width={600} 
            height={400}
            className="lg:w-1/2 rounded-3xl hidden md:flex ml-auto lg:absolute -right-32 -top-24" 
          />
        </div>
      </div>
    </section>
  )
} 