import Image from 'next/image'

export default function PricingSection() {
  return (
    <div className="bg-white text-black my-10 sm:my-[55px] px-2 sm:px-[74px]">
      <div className="text-[20px] lg:text-[40px] font-bold text-black text-center">
        <div>
          <span className="text-primary">Targeted Solutions</span> That Deliver Real Impact
        </div>
        <div className="text-[15px] text-black font-normal mt-[15px] text-center">
          At IOI, we develop intelligent, scalable solutions to help you solve critical challenges from managing field operations and human resources to enhancing customer engagement and enterprise data automation.
        </div>
      </div>

      {/* IOCX Section */}
      <section className="container mx-auto sm:px-4 py-16 grid lg:grid-cols-2 gap-8 items-start">
        <div className="order-2 lg:order-2">
          <Image src="/logo-siaga.png" alt="Logo Siaga" width={200} height={79} className="rounded-3xl object-cover sm:w-[200px] h-auto w-[130px]" />

          <div className="font-bold mb-[25px] lg:text-[24px] text-[18px] mt-[15px]">Smart Issue & Action Management</div>
          <p className="mb-4 font-[300] text-[18px]">
           Streamline complaint handling, audit workflows, and field reporting with real-time tracking and accountability.
          </p>
          <p className="font-[300] text-[18px]">
           Trusted by public institutions and compliance-driven sectors.
          </p>
        </div>
        <div className="order-1 lg:order-1 lg:block">
          <Image src="/page-siaga.png" alt="Page Siaga" width={600} height={400} className="rounded-3xl object-cover w-full h-auto" />
        </div>
      </section>

      <section className="container mx-auto sm:px-4 py-16 grid lg:grid-cols-2 gap-8 items-start">
        <div className="order-2 lg:order-1">
          <Image src="/iocx.png" alt="Logo Omnichannel" width={150} height={79} className="rounded-3xl object-cover w-[80px] sm:w-[150px] h-auto" />

          <div className="font-bold mb-[25px] lg:text-[24px] text-[18px] mt-[15px]">Omnichannel Customer Experience</div>
          <p className="mb-4 font-[300] text-[18px]">
            Unify WhatsApp, Email, Web, and CRM enhanced with smart automation and efficient response routing.
          </p>
          <p className="font-[300] text-[18px]">
            Ideal for service-driven businesses that prioritize fast, unified communication.
          </p>
        </div>
        <div className="order-1 lg:order-1 lg:block">
          <Image src="/page-Omnichannel.png" alt="Page Omnichannel" width={600} height={400} className="rounded-3xl object-cover w-full h-auto" />
        </div>
      </section>


      <section className="container mx-auto sm:px-4 py-16 grid lg:grid-cols-2 gap-8 items-start">
        <div className="order-2 lg:order-2">
          <Image src="/logo-siaga.png" alt="Logo Siaga" width={200} height={79} className="rounded-3xl object-cover sm:w-[200px] h-auto w-[130px]" />

          <div className="font-bold mb-[25px] lg:text-[24px] text-[18px] mt-[15px]">Data Integration & Automation Engine</div>
          <p className="mb-4 font-[300] text-[18px]">
            Connect systems, automate rules and workflows, and turn data into decisions instantly.
          </p>
          <p className="font-[300] text-[18px]">
           Built for enterprises that require reliable, real-time infrastructure.
          </p>
        </div>
        <div className="order-1 lg:order-1 lg:block">
          <Image src="/page-siaga.png" alt="Page Siaga" width={600} height={400} className="rounded-3xl object-cover w-full h-auto" />
        </div>
      </section>

      <section className="container mx-auto sm:px-4 py-16 grid lg:grid-cols-2 gap-8 items-start">
        <div className="order-2 lg:order-1">
          <Image src="/iocx.png" alt="Logo Omnichannel" width={150} height={79} className="rounded-3xl object-cover w-[80px] sm:w-[150px] h-auto" />

          <div className="font-bold mb-[25px] lg:text-[24px] text-[18px] mt-[15px]">IoT Integration & Monitoring Platform</div>
          <p className="mb-4 font-[300] text-[18px]">
          Seamlessly connect and manage data from IoT devices, sensors, and physical systems enabling real-time monitoring, automation, and smarter decision-making across various environments.
          </p>
        </div>
        <div className="order-1 lg:order-1 lg:block">
          <Image src="/page-Omnichannel.png" alt="Page Omnichannel" width={600} height={400} className="rounded-3xl object-cover w-full h-auto" />
        </div>
      </section>

      <section className="container mx-auto sm:px-4 py-16 grid lg:grid-cols-2 gap-8 items-start">
        <div className="order-2 lg:order-2">
          <Image src="/logo-Human.png" alt="Logo Humanx" width={200} height={79} className="rounded-3xl object-cover sm:w-[200px] h-auto w-[130px]" />

          <div className="font-bold mb-[25px] lg:text-[24px] text-[18px] mt-[15px]">Smart Human Resource Management</div>
          <p className="mb-4 font-[300] text-[18px]">
            Centralize employee records, automate payroll, monitor performance, and streamline HR operations.
          </p>
          <p className="font-[300] text-[18px]">
            Optimized for companies looking to digitize and simplify workforce management.
          </p>
        </div>
        <div className="order-1 lg:order-1 lg:block">
          <Image src="/page-Human.png" alt="Page Humanx" width={600} height={400} className="rounded-3xl object-cover w-full h-auto" />
        </div>
      </section>
    </div>
  )
} 