import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {

  return (
    <footer className="relative z-2 bg-[#0D1B2A] px-6 sm:px-[74px] py-10 sm:py-[55px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="w-full">
            <Image src="/logo-ioi/logo.png" alt="IOI" width={350} height={350} className="rounded-3xl object-cover " />
            {/* <h4 className="text-xl font-semibold text-black mb-2 mt-4">
              PT Inovasi Otentik Indonesia
            </h4> */}
            <p className="text-md mt-0 mb-2 font-normal text-white mt-2 px-2 sm:px-0" style={{ lineHeight: '36px' }}>
              Jl. Abiyoso, Sidokerto, No. 28, Blok I <br />
              Daerah Istimewa Yogyakarta
            </p>

            <div className='text-white mb-6 sm:mb-0 px-2 sm:px-0'>
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
              <div className='col-span-1'>
                <div className='text-white mb-[12px] font-bold mb-4'>
                  Company
                </div>
                <Link href="/career">
                  <div className='text-white mb-[12px]'>
                    Career
                  </div>
                </Link>
                <Link href="/">
                  <div className='text-white mb-[12px]'>
                    Home
                  </div>
                </Link>
                <Link href="/about">
                  <div className='text-white mb-[12px]'>
                    About
                  </div>
                </Link>
                <Link href="/works">
                  <div className='text-white mb-[12px]'>
                    Works
                  </div>
                </Link>
                <Link href="/solutions">
                  <div className='text-white mb-[12px]'>
                    Solutions
                  </div>
                </Link>
              </div>
              <div className='col-span-1'>
                <div className='text-white mb-[12px] font-bold mb-4'>
                  Contact Us
                </div>
                <Link href="/request-project">
                  <div className='text-white mb-[12px]'>
                    Request Project
                  </div>
                </Link>
                <Link href="/partnership">
                  <div className='text-white mb-[12px]'>
                   Partnership
                  </div>
                </Link>
                <Link href="/reseller">
                  <div className='text-white mb-[12px]'>
                    Reseller
                  </div>
                </Link>
                <Link href="/internship">
                  <div className='text-white mb-[12px]'>
                   Internship
                  </div>
                </Link>
                <Link href="/support">
                  <div className='text-white mb-[12px]'>
                    Technical Support
                  </div>
                </Link>
              </div>
              <div className='col-span-1'>
                <div className='text-white mb-[12px] font-bold mb-4'>
                Privacy Policy
                </div>
                <Link href="/privacy-policy">
                  <div className='text-white mb-[12px]'>
                    Privacy Policy
                  </div>
                </Link>
                <Link href="/terms-and-conditions">
                  <div className='text-white mb-[12px]'>
                    Terms & Conditions
                  </div>
                </Link>
              </div>
              <div className='text-white opacity-[75%] mt-[30px] lg:col-span-3 col-span-3'>
                © 2025 PT Inovasi Otentik Indonesia. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 