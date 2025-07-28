import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const socialMedia = [
    { icon: "fa-solid fa-envelope", link: "mailto:hi@ioi.co.id" },
    { icon: "fa-solid fa-location-dot", link: "https://www.google.com/maps?q=-7.7512265,110.4490606" },
  ]

  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", link: "/about-us" }
      ]
    },
    {
      title: "Help & Support",
      links: [
        { name: "Body Repairs", link: "#" }
      ]
    },
    {
      title: "Contact",
      links: [
        { name: "Contact Us", link: "#" }
      ]
    }
  ]

  return (
    <footer className="relative z-50 bg-white px-8 pt-12 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-4/12">
            <Image src="/logo-ioi/logo.png" alt="IOI" width={350} height={350} className="rounded-3xl object-cover " />
            <h4 className="text-xl font-semibold text-black mb-2 mt-4">
              PT Inovasi Otentik Indonesia
            </h4>
            <p className="text-md mt-0 mb-2 font-normal text-gray-600">
              Jl. Abiyoso, Sidokerto, No. 28, Blok I <br />
              Daerah Istimewa Yogyakarta
            </p>
            <div className="mt-6">
              {socialMedia.map(({ icon, link }, key) => (
                <a key={key} href={link} target="_blank" rel="noreferrer">
                  <i className={`${icon} font-xl align-center mr-2 inline-block items-center justify-center rounded-full border-[1.5px] border-gray-100 p-3 text-center text-black outline-none focus:outline-none`} />
                </a>
              ))}
            </div>
          </div>
          <div className="ml-auto w-full px-4 md:w-7/12">
            <div className="items-top mb-6 flex flex-wrap">
              {footerSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="w-6/12 pt-6 md:ml-auto md:px-4 md:pt-0 xl:w-3/12">
                  <span className="text-md mb-4 block font-medium text-black">
                    {section.title}
                  </span>
                  <ul className="list-unstyled">
                    {section.links.map(({ name, link }, key) => (
                      <li key={key}>
                        <a
                          href={link}
                          target="_blank"
                          rel="noreferrer"
                          className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-blue-600"
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-100" />
        <div className="flex flex-wrap items-center justify-center gap-2 md:justify-between">
          <div className="text-center lg:text-left">
            <div className="text-md mt-2 py-1 font-normal text-gray-600">
              Copyright &copy; {new Date().getFullYear()}{" "}
              <Link href="/" className="text-inherit transition-all">
                PT Inovasi Otentik Indonesia
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 