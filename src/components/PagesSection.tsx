import Image from "next/image"

export default function PagesSection() {
  const pages = [
    {
      img: "/aboutus.jpg",
      title: "About Us Page",
      desc: "Designed to introduce the website's purpose and encourage users to take action.",
      url: "#",
    },
    {
      img: "/signin.jpg", 
      title: "Sign In Page",
      desc: "Designed to give users all the information they need to log in safely.",
      url: "#",
    },
    {
      img: "/404.jpg",
      title: "404 Error Page",
      desc: "If you're looking for important information to make a decision, our website has everything you need.",
      url: "#",
    },
  ]

  return (
    <section id="examplePages">
      <div className="container mx-auto px-8 py-10 bg-white">
        <div className="mb-16 text-left">
          <p className="text-blue-600 mb-2 text-lg font-semibold">
            Get inspired!
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Example Pages
          </h2>
          <p className="text-blue-gray-900 font-light">
            You can start using our fully coded Ecommerce page examples if you want to get inspired or show something to your client.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-y-16 gap-x-8 md:grid-cols-2 lg:grid-cols-3">
          {pages.map(({ img, title, desc, url }) => (
            <div key={title} className="bg-transparent">
              <div className="mx-0 mt-0 mb-8 h-56">
                <a href={url}>
                  <Image 
                    src={img} 
                    alt={title} 
                    width={400} 
                    height={300}
                    className="h-full w-full object-cover rounded-lg" 
                  />
                </a>
              </div>
              <div className="p-0">
                <a href={url} className="grid grid-cols-6 items-baseline gap-2 text-gray-900 transition-colors hover:text-blue-600">
                  <div className="col-span-5">
                    <h3 className="text-2xl font-semibold normal-case">{title}</h3>
                  </div>
                </a>
                <p className="leading-relaxed text-gray-700 mb-6 font-normal">{desc}</p>
                <a href={url}>
                  <button className="text-gray-900 border-0 bg-transparent p-0 font-medium hover:text-blue-600 flex items-center">
                    Lihat Halaman
                    <svg className="ml-2" width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.8314 0.306358C11.4483 -0.0914636 10.8153 -0.103408 10.4175 0.27968C10.0196 0.662768 10.0077 1.29582 10.3908 1.69364L11.8314 0.306358ZM13.2797 4.69364C13.6628 5.09146 14.2958 5.10341 14.6936 4.72032C15.0915 4.33723 15.1034 3.70418 14.7203 3.30636L13.2797 4.69364ZM14.7203 4.69364C15.1034 4.29582 15.0915 3.66277 14.6936 3.27968C14.2958 2.89659 13.6628 2.90854 13.2797 3.30636L14.7203 4.69364ZM10.3908 6.30636C10.0077 6.70418 10.0196 7.33723 10.4175 7.72032C10.8153 8.10341 11.4483 8.09146 11.8314 7.69364L10.3908 6.30636ZM14 5C14.5523 5 15 4.55228 15 4C15 3.44772 14.5523 3 14 3V5ZM1 3C0.447715 3 0 3.44772 0 4C0 4.55228 0.447715 5 1 5V3ZM10.3908 1.69364L13.2797 4.69364L14.7203 3.30636L11.8314 0.306358L10.3908 1.69364ZM13.2797 3.30636L10.3908 6.30636L11.8314 7.69364L14.7203 4.69364L13.2797 3.30636ZM14 3H1V5H14V3Z" fill="#111827"/>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 