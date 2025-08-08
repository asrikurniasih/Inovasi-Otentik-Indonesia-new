import Image from 'next/image'

export default function Build() {
  return (
    <div className="bg-white text-black sm:my-[55px] my-10">
      <div className="text-[20px] lg:text-[40px] font-bold text-black text-center px-[74px]">
        <div>
          Let's Build Something That Works — <span className="text-primary">Together</span>
        </div>
      </div>

      <div className='relative'>
        <Image src="/build.png" alt="Build" width={1000} height={1000} className="rounded-0 object-cover w-full h-auto" />
      </div>


      <div className='text-[18px] text-black font-[300] mt-[15px] text-center px-[74px] italic'>
        Whether you're ready to launch or just exploring options, we're here to help turn your vision into a powerful digital solution.
      </div>
    </div>
  )
} 