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
    <footer className="relative z-40 bg-[#0D1B2A] px-6 sm:px-[74px] py-10 sm:py-[55px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          <div className="w-full lg:col-span-2">
            <Image src="/logo-ioi/logo.png" alt="IOI" width={350} height={350} className="rounded-3xl object-cover " />
            {/* <h4 className="text-xl font-semibold text-black mb-2 mt-4">
              PT Inovasi Otentik Indonesia
            </h4> */}
            <p className="text-md mt-0 mb-2 font-normal text-white mt-2 px-2 sm:px-0" style={{ lineHeight: '36px' }}>
              Jl. Abiyoso, <br /> Sidokerto, No. 28, Blok I <br />
              Daerah Istimewa Yogyakarta
            </p>

            <div className='text-white mt-4 sm:mt-[56px] mb-6 sm:mb-0 px-2 sm:px-0'>
              <div className='text-white mb-[15px]'>
                <span className='font-bold'>Liona:</span> 0851 6583 9992
              </div>

              <div className='text-white'>
                <span className='font-bold'>Email:</span> hi@ioi.co.id
              </div>
            </div>
          </div>
          <div className="ml-auto w-full px-4 mt-[20px]">
            <div className='text-white grid grid-cols-3 gap-0 opacity-[75%]'>
              <div className='col-span-2'>
                <div className='text-white mb-[12px]'>
                  About
                </div>
                <div className='text-white mb-[12px]'>
                  Work
                </div>
                <div className='text-white mb-[12px]'>
                  Services
                </div>
                <div className='text-white mb-[12px]'>
                  Solutions
                </div>
                <div className='text-white mb-[12px]'>
                  Contact
                </div>
              </div>
              <div className='col-span-1'>
                <div className='text-white mb-[12px]'>
                  Facebook
                </div>
                <div className='text-white mb-[12px]'>
                  Twitter
                </div>
                <div className='text-white mb-[12px]'>
                  Linkedin
                </div>
                <div className='text-white mb-[12px]'>
                  Instagram
                </div>
              </div>
              <div className='text-white opacity-[75%] mt-[53px] lg:col-span-2 lg:pr-[50px] col-span-3'>
                © 2025 PT Inovasi Otentik Indonesia. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 