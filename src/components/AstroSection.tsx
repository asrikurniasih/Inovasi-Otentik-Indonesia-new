import Image from "next/image"

export default function AstroSection() {
  return (
    // <section className="py-8 px-8 lg:py-16 bg-white">
    //   <div className="container mx-auto">
    //     <div className="bg-blue-600 rounded-3xl overflow-hidden flex flex-col md:flex-row md:gap-8">
    //       <div className="py-20 px-14 md:w-7/12">
    //         <p className="text-white font-bold mb-2">
    //           Technology Partnership
    //         </p>
    //         <h2 className="text-3xl lg:text-4xl font-normal text-white mb-5">
    //           Why IOI People Is the Best Technology Partner?
    //         </h2>
    //         <p className="text-lg text-white leading-relaxed">
    //           We&apos;re not just a tech provider—we&apos;re your growth partner. Built by experienced professionals, our flexible and fully customizable systems deliver real business impact. With enterprise-level security, real-time insights, and genuine human support, we help you build a strong digital foundation for sustainable growth.
    //         </p>
    //         <a href="#">
    //           <button className="border-2 border-white text-white px-4 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors mt-12 h-[32px] font-semibold text-xs">
    //             GET STARTED
    //           </button>
    //         </a>
    //       </div>
    //       <div className="relative grid h-96 place-items-center md:h-auto md:w-5/12">
    //         <Image
    //           src="/astro.png"
    //           alt="IOI People Technology"
    //           width={400}
    //           height={300}
    //           className="h-full w-full object-cover md:absolute"
    //         />
    //       </div>
    //     </div>
    //   </div>

    // </section>
    <section className="px-2 pb-4 pt-10 sm:px-[74px] sm:py-[55px] bg-white">
      <div className="container mx-auto grid lg:grid-cols-5 gap-0 md:gap-4 items-center">
        <div className="order-2 lg:order-2 lg:col-span-3">
          <div className="text-[20px] lg:text-[40px] text-black mb-5 font-[700] text-center lg:text-right" style={{ lineHeight: '1.1 !important' }}>
            Trusted by Industry Leaders Built to <span className="text-primary">Solve Real-World Challenges</span>

            <div className="text-[15px] text-black mt-[25px] font-normal">
              With over a decade of experience, we deliver scalable digital solutions that drive results for governments, enterprises, and institutions across Indonesia.
            </div>
          </div>
          <div className="overflow-hidden w-full mt-[25px]">
            <div className="flex gap-8 animate-marquee">
              {/* <div className="mt-[25px] flex gap-[10px] justify-center lg:justify-end"> */}
                <Image src="/pemda-klaten.png" alt="pemda-klaten" width={150} height={59} className="rounded-[10px] h-[59px] w-[150px] object-contain" />
                <Image src="/diskominfo.png" alt="diskominfo" width={150} height={59} className="rounded-[10px] h-[59px] w-[150px] object-contain" />
                <Image src="/Hamaparan.png" alt="Hamaparan" width={150} height={59} className="rounded-[10px] h-[59px] w-[150px] object-contain" />
                <Image src="/mitra-warung.png" alt="mitra-warung" width={150} height={59} className="rounded-[10px] h-[59px] w-[150px] object-contain" />
                <Image src="/pemda-klaten.png" alt="pemda-klaten" width={150} height={59} className="rounded-[10px] h-[59px] w-[150px] object-contain" />
                <Image src="/diskominfo.png" alt="diskominfo" width={150} height={59} className="rounded-[10px] h-[59px] w-[150px] object-contain" />
                <Image src="/Hamaparan.png" alt="Hamaparan" width={150} height={59} className="rounded-[10px] h-[59px] w-[150px] object-contain" />
                <Image src="/mitra-warung.png" alt="mitra-warung" width={150} height={59} className="rounded-[10px] h-[59px] w-[150px] object-contain" />
                <Image src="/pemda-klaten.png" alt="pemda-klaten" width={150} height={59} className="rounded-[10px] h-[59px] w-[150px] object-contain" />
                <Image src="/diskominfo.png" alt="diskominfo" width={150} height={59} className="rounded-[10px] h-[59px] w-[150px] object-contain" />
                <Image src="/Hamaparan.png" alt="Hamaparan" width={150} height={59} className="rounded-[10px] h-[59px] w-[150px] object-contain" />
                <Image src="/mitra-warung.png" alt="mitra-warung" width={150} height={59} className="rounded-[10px] h-[59px] w-[150px] object-contain" />
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-1 lg:block lg:col-span-2 lg:pr-[50px] lg:h-[285px]">
          <video src="/Trusted.mp4" autoPlay muted loop className="w-full h-full object-cover rounded-[10px]" />
        </div>
      </div>
    </section>
  )
} 