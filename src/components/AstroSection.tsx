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
    <section className="container mx-auto px-5 py-16 grid lg:grid-cols-2 gap-0 md:px-0 md:gap-[5rem] items-center">
      <div className="order-2 lg:order-2">
        <p className="text-black font-bold mb-2">
          Technology Partnership
        </p>
        <h2 className="text-3xl lg:text-4xl font-normal text-black mb-5">
          Why IOI People Is the Best Technology Partner?
        </h2>
        <p className="text-lg text-black leading-relaxed">
          We&apos;re not just a tech provider—we&apos;re your growth partner. Built by experienced professionals, our flexible and fully customizable systems deliver real business impact. With enterprise-level security, real-time insights, and genuine human support, we help you build a strong digital foundation for sustainable growth.
        </p>
        <a href="#">
          <button className="border-2 border-black text-white bg-black px-4 rounded-lg font-medium hover:bg-black hover:text-white transition-colors mt-12 h-[32px] font-semibold text-xs">
            GET STARTED
          </button>
        </a>
      </div>
      <div className="order-1 lg:order-1 hidden lg:block">
        <Image src="/why.png" alt="why-ioi" width={600} height={400} className="rounded-3xl object-cover w-full h-auto" />
      </div>
    </section>
  )
} 