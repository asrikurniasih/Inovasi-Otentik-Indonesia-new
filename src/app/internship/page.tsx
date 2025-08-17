'use client';


import Image from 'next/image';


export default function RequestProjectPage() {




  return (
    <section className="px-2 sm:px-[74px] bg-white text-black">
      <div className="container mx-auto">
        {/* Hero Section */}
        <section className="mx-auto sm:pt-[55px] pt-[20px] relative">
          <div className="relative p-8 sm:p-12 rounded-[20px] text-black" style={{backgroundImage: 'url(/requestPage.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-[30px] md:text-[40px] lg:text-[50px] font-bold text-gray-900 leading-tight">
                 Start Your <span className="text-primary">Career</span> with Real-World Tech Experience
                </h1>
                <p className="text-[16px] text-gray-700 leading-relaxed">
                 Join IOI’s Internship Program and work on real projects in AI, IoT, software development, and digital transformation. Learn from industry experts and build the skills to thrive in the modern workplace.
                </p>
              </div>
            </div>
            <div className="relative text-center sm:text-right mt-10">
              <div className="">
                <button className="bg-primary hover:bg-[#1B9AAA] text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-300">
                 Apply For Internship
                </button>
                <p className="text-sm text-gray-600 mt-3 text-center sm:text-right">
                  Our team will respond within <b>1–2 business days</b>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose IOI Section */}
        <section className="mx-auto sm:py-[55px] py-10 sm:my-[55px] my-10 rounded-[20px]" style={{ boxShadow: '0px 2px 6px 0px rgba(27, 153, 170, 0.15)' }}>
          <div className="flex items-center w-full gap-4 mb-[46px] px-2 sm:px-[74px]">
            <div className="xl:text-[40px] text-[30px] flex-shrink-0 font-bold">
              Why <span className="text-primary">Intern</span> At IOI
            </div>
            <div className="flex-1 flex justify-center">
              <hr className="w-full max-full" />
            </div>
          </div>

          <div className="grid sm:grid-cols-3 grid-cols-1 xl:gap-[40px] gap-[20px] px-2">
            <div className="text-center sm:w-[280px] w-full">
              <div className="w-2 h-2 bg-black rounded-full mx-auto mb-3"></div>
              <div className="text-[16px] font-semibold my-[15px] text-primary">Hands-On Experience</div>
              <div className="text-[16px] text-gray-600 text-balance">Work directly on live projects for government, enterprises, and SMEs.</div>
            </div>
            <div className="text-center sm:w-[280px] w-full sm:mx-auto mx-0">
              <div className="w-2 h-2 bg-black rounded-full mx-auto mb-3"></div>
              <div className="text-[16px] font-semibold my-[15px] text-primary">Exposure to Multiple Technologies</div>
              <div className="text-[16px] text-gray-600 text-balance">AI, IoT, automation, cloud solutions, and more.</div>
            </div>
            <div className="text-center sm:w-[280px] w-full sm:ml-auto mx-0">
              <div className="w-2 h-2 bg-black rounded-full mx-auto mb-3"></div>
              <div className="text-[16px] font-semibold my-[15px] text-primary">Opportunity for Full-Time Offer</div>
              <div className="text-[16px] text-gray-600 text-balance">High-performing interns may be offered a permanent position after graduation.</div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-[20px] px-2 sm:mt-[54px] mt-[30px] sm:mx-[74px]">
            <div className="text-center sm:w-[280px] w-full sm:mx-auto mx-0">
              <div className="w-2 h-2 bg-black rounded-full mx-auto mb-3"></div>
              <div className="text-[16px] font-semibold my-[15px] text-primary">Mentorship from Expert</div>
              <div className="text-[16px] text-gray-600 text-balance">Learn from senior engineers, data scientists, and project managers.</div>
            </div>
            <div className="text-center sm:w-[280px] w-full sm:mx-auto mx-0">
              <div className="w-2 h-2 bg-black rounded-full mx-auto mb-3"></div>
              <div className="text-[16px] font-semibold my-[15px] text-primary">Flexible & Supportive Environment</div>
              <div className="text-[16px] text-gray-600 text-balance">On-site, hybrid, or remote options depending on project needs.</div>
            </div>
          </div>
        </section>

        {/* Internship Areas Section */}
        <section className="mx-auto sm:py-[55px] py-10 sm:my-[55px] my-10 rounded-[20px]">

          <div className="flex flex-col lg:flex-row items-center justify-center gap-0">
            {/* Technology & Development */}
            <div className="bg-white rounded-xl p-6 w-full max-w-md border border-gray-200">
              <div className="bg-[#E8F4F8] rounded-lg p-4 mb-4">
                <h3 className="text-xl font-bold text-black">Technology & Development</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-[16px] text-gray-700">Web & Mobile App Development</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-[16px] text-gray-700">AI & Machine Learning</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-[16px] text-gray-700">Data Integration & Automation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-[16px] text-gray-700">IoT System Development</span>
                </li>
              </ul>
            </div>


            <div className='w-full flex flex-row items-center justify-center gap-4'>
              <hr className='flex-1' />
              <div className='sm:text-[40px] text-[30px] font-bold text-gray-900 text-center leading-[1.2] w-[200px]'>
                Internship Areas
              </div>
              <hr className='flex-1' />
            </div>

            {/* Business & Creative */}
            <div className="bg-white rounded-xl p-6 w-full max-w-md border border-gray-200">
              <div className="bg-[#E8F4F8] rounded-lg p-4 mb-4">
                <h3 className="text-xl font-bold text-black">Business & Creative</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-[16px] text-gray-700">Digital Marketing & Content Creation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-[16px] text-gray-700">Project Management & Business Analysis</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-[16px] text-gray-700">UI/UX Design</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto sm:mt-[55px] mt-10">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
            <div className="h-full items-center flex">
              <div className="md:text-[40px] text-[30px] font-bold text-black gap-4 relative">
                Program Requirements
                <Image src="/Requirement.png" alt="Requirements Model" width={175} height={159} className="absolute right-0 top-0" />
              </div>
            </div>

            <div className='col-span-2'>
              <div className="border border-gray-300 rounded-[10px] p-4 mb-4">
                <p className="text-[16px] text-gray-700">University student or fresh graduate (IT, Computer Science, Business, or related fields preferred)</p>
              </div>
              <div className="border border-gray-300 rounded-[10px] p-4 mb-4">
                <p className="text-[16px] text-gray-700">Basic understanding of your chosen field (technical or non-technical)</p>
              </div>
              <div className="border border-gray-300 rounded-[10px] p-4 mb-4">
                <p className="text-[16px] text-gray-700">Strong willingness to learn and adapt</p>
              </div>
              <div className="border border-gray-300 rounded-[10px] p-4 mb-4">
                <p className="text-[16px] text-gray-700">Able to commit to a <span className="font-bold">minimum of 3 months</span></p>
              </div>
              <div className="border border-gray-300 rounded-[10px] p-4 mb-4">
                <p className="text-[16px] text-gray-700">Good communication skills and teamwork spirit</p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Statement Section */}
        <section className="mx-auto sm:py-[55px] px-2 sm:px-[74px] py-10 sm:my-[55px] my-10 rounded-[20px]">
          <div className="text-center">
            <h2 className="text-[30px] sm:text-[40px] font-bold text-gray-900 mb-4">
             Build Your Skills, Build the Future
            </h2>
            <p className="text-[16px] text-gray-700 mb-4">
             At IOI, we give you opportunities to innovate, experiment, and grow.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-[15px] justify-center">
            <button className="bg-[#2BB3C4] text-white px-[30px] py-[15px] rounded-[7px] font-semibold hover:bg-white hover:text-[#2BB3C4] transition-colors h-[50px] text-[16px]">
              Apply Now
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}
