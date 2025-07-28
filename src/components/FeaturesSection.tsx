import Image from "next/image"

export default function FeaturesSection() {
  const features = [
    {
      icon: "/data-integration.png",
      title: "Data Integration & System Automation",
      description: "Connect, process, and manage data from multiple sources to streamline decision-making.",
    },
    {
      icon: "/ai-solutions.png",
      title: "AI Solutions",
      description: "Tailored AI models for prediction, classification, automation, and optimization of business processes.",
    },
    {
      icon: "/coding.png",
      title: "Custom Software & Application Development",
      description: "From concept to deployment, we build digital solutions to match your unique needs.",
    },
    {
      icon: "/consultant.png",
      title: "Strategic IT Consulting",
      description: "Expert guidance for your successful digital transformation journey.",
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Header Section */}
          <div className="text-left mb-16 col-span-1 p-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The world has become so fast paced that people don&apos;t want to stand by reading a page of info
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 col-span-2">
            {features.map(({ icon, title, description }, index) => (
              <div key={title} className="group">
                <div className="text-left p-6 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight flex gap-4 justify-start" style={{ alignItems: index === 0 ? "flex-start" : index === 1 ? "flex-center" : index === 2 ? "flex-start" : "flex-center" }}>
                    {index === 0 ? (
                      <div className="w-[52px] h-[52px] min-w-[52px] min-h-[52px] bg-primary rounded-full flex items-center justify-center">
                        <svg 
                          version="1.1" 
                          xmlns="http://www.w3.org/2000/svg" 
                          xmlnsXlink="http://www.w3.org/1999/xlink" 
                          x="0px" 
                          y="0px" 
                          viewBox="0 0 24 24" 
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                        >
                          <g className="nc-icon-wrapper" fill="currentColor">
                            <path fill="currentColor" d="M2.001,10.98C2.068,10.994,2.135,11,2.201,11c0.466,0,0.883-0.327,0.979-0.801C4.027,6.027,7.736,3,12,3 c1.821,0,3.562,0.544,5.039,1.547l-3.12,3.12l9.297,1.549l-1.549-9.297l-3.198,3.198C16.599,1.75,14.356,1,12,1 C6.789,1,2.255,4.701,1.22,9.801C1.11,10.342,1.46,10.87,2.001,10.98z"></path>
                            <path fill="currentColor" d="M21.999,13.02c-0.541-0.111-1.069,0.24-1.179,0.781C19.973,17.973,16.264,21,12,21 c-1.821,0-3.562-0.544-5.039-1.547l3.12-3.12l-9.297-1.549l1.549,9.297l3.198-3.198C7.401,22.25,9.644,23,12,23 c5.211,0,9.745-3.701,10.78-8.801C22.89,13.658,22.54,13.13,21.999,13.02z" data-color="color-2"></path>
                          </g>
                        </svg>
                      </div>
                    ) : index === 1 ? (
                      <div className="w-[52px] h-[52px] min-w-[52px] min-h-[52px] bg-primary rounded-full flex items-center justify-center">
                        <svg 
                          version="1.1" 
                          xmlns="http://www.w3.org/2000/svg" 
                          xmlnsXlink="http://www.w3.org/1999/xlink" 
                          x="0px" 
                          y="0px" 
                          viewBox="0 0 24 24" 
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                        >
                          <g className="nc-icon-wrapper">
                            <path data-color="color-2" fill="currentColor" d="M8,1C6.7,1,5.6,1.8,5.2,3C5.1,3,5.1,3,5,3C2.2,3,0,5.2,0,8c0,1.3,0.5,2.6,1.4,3.5 C0.6,12,0,12.9,0,14c0,1,0.5,1.9,1.3,2.4C1.1,16.9,1,17.5,1,18c0,2.8,2.2,5,5,5s5-2.2,5-5V4C11,2.3,9.7,1,8,1z"></path>
                            <path fill="currentColor" d="M22.6,11.5C23.5,10.6,24,9.3,24,8c0-2.8-2.2-5-5-5c-0.1,0-0.1,0-0.2,0c-0.4-1.2-1.5-2-2.8-2 c-1.7,0-3,1.3-3,3v14c0,2.8,2.2,5,5,5s5-2.2,5-5c0-0.5-0.1-1.1-0.3-1.6C23.5,15.9,24,15,24,14C24,12.9,23.4,12,22.6,11.5z"></path>
                          </g>
                        </svg>
                      </div>
                    ) : index === 2 ? (
                      <div className="w-[52px] h-[52px] min-w-[52px] min-h-[52px] bg-primary rounded-full flex items-center justify-center">
                        <svg 
                          version="1.1" 
                          xmlns="http://www.w3.org/2000/svg" 
                          xmlnsXlink="http://www.w3.org/1999/xlink" 
                          x="0px" 
                          y="0px" 
                          viewBox="0 0 24 24" 
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                        >
                          <g className="nc-icon-wrapper" fill="currentColor">
                            <path data-color="color-2" fill="currentColor" d="M4,4V1H1C0.447,1,0,1.447,0,2v2H4z"></path>
                            <path data-color="color-2" fill="currentColor" d="M24,4V2c0-0.553-0.447-1-1-1H6v3H24z"></path>
                            <path fill="currentColor" d="M0,6v16c0,0.553,0.447,1,1,1h22c0.553,0,1-0.447,1-1V6H0z M8.414,16L7,17.414l-2.707-2.707 c-0.391-0.391-0.391-1.023,0-1.414L7,10.586L8.414,12l-2,2L8.414,16z M11.728,19.213l-1.94-0.485l2.485-9.94l1.94,0.485 L11.728,19.213z M19.707,14.707L17,17.414L15.586,16l2-2l-2-2L17,10.586l2.707,2.707C20.098,13.684,20.098,14.316,19.707,14.707z"></path>
                          </g>
                        </svg>
                      </div>
                    ) : index === 3 ? (
                      <div className="w-[52px] h-[52px] min-w-[52px] min-h-[52px] bg-primary rounded-full flex items-center justify-center">
                        <svg 
                          version="1.1" 
                          xmlns="http://www.w3.org/2000/svg" 
                          xmlnsXlink="http://www.w3.org/1999/xlink" 
                          x="0px" 
                          y="0px" 
                          viewBox="0 0 24 24" 
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                        >
                          <g className="nc-icon-wrapper" fill="currentColor">
                            <path data-color="color-2" fill="currentColor" d="M7,10H5V1c0-0.553,0.447-1,1-1h12c0.553,0,1,0.447,1,1v6h-2V2H7V10z"></path>
                            <path fill="currentColor" d="M23,8h-9c-0.553,0-1,0.447-1,1v13h-2v-9c0-0.553-0.447-1-1-1H1c-0.553,0-1,0.447-1,1v10c0,0.553,0.447,1,1,1 h22c0.553,0,1-0.447,1-1V9C24,8.447,23.553,8,23,8z M7,21H4v-2h3V21z M7,17H4v-2h3V17z M20,21h-3v-2h3V21z M20,17h-3v-2h3V17z M20,13h-3v-2h3V13z"></path>
                          </g>
                        </svg>
                      </div>
                    ) : (
                      <Image 
                        src={icon} 
                        alt={title} 
                        width={40} 
                        height={40} 
                        className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300" 
                      />
                    )}
                    <div className="text-xl font-semibold text-gray-900 mb-4 leading-tight flex items-center gap-4 justify-start">
                      {title}
                    </div>
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 