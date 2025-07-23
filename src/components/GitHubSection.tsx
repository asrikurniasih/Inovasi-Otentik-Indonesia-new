import Image from "next/image"

export default function GitHubSection() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <div className="bg-red-600 rounded-3xl overflow-hidden flex flex-col md:flex-row md:gap-8">
          <div className="py-20 px-14 md:w-7/12">
            {/* <p className="text-white font-normal opacity-70 mb-2">
              Open Source
            </p> */}
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-5">
              Let’s build something impactful — together.
            </h2>
            <p className="text-lg text-white leading-relaxed">
              Whether you&apos;re looking to implement AI-powered solutions, automate workflows, or create a custom digital system, our team is ready to help you move forward.
            </p>
            <a href="#">
              <button className="border-2 border-white text-white px-6 rounded-lg font-medium hover:bg-white hover:text-red-600 transition-colors mt-5 h-[32px] font-semibold text-xs">
                GET STARTED
              </button>
            </a>
          </div>
          <div className="relative grid h-96 place-items-center md:h-auto md:w-5/12">
            <Image
              src="/github.png"
              alt="github"
              width={400}
              height={300}
              className="h-full w-full object-cover md:absolute"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 