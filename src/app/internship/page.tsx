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
                <p className="text-[16px] text-black leading-relaxed">
                 Join IOI’s Internship Program and work on real projects in <span className="font-bold">AI</span>, <span className="font-bold">IoT</span>, <span className="font-bold">software development</span>, and <span className="font-bold">digital transformation</span>. Learn from industry experts and build the skills to thrive in the modern workplace.
                </p>
              </div>
            </div>
            <div className="relative text-center sm:text-right mt-10">
              <div className="">
                <button className="bg-primary hover:bg-[#1B9AAA] text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-300">
                 Apply For Internship
                </button>
                <p className="text-sm text-black mt-3 text-center sm:text-right italic">
                  Our team will respond within <span className="font-bold">1–2 business days</span>.
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

        <section className="mx-auto sm:pt-[55px] pt-10 rounded-[20px]">
          <div className="md:text-[40px] text-[30px] font-bold mb-[15px] text-black text-center">
            How It Works
          </div>
          
          <div className="mt-1">
            <div className="relative sm:h-[385px] flex flex-col justify-center hidden xl:flex">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-black hidden sm:block transform -translate-y-1/2"></div>
              
              <div className="grid sm:grid-cols-4 grid-cols-1 gap-4 sm:gap-8 items-center">
                {/* Step 1 - Content Above, Number on Line */}
                <div className="relative text-center">
                  <div className="mb-1 -mt-[125px] h-[120px]">
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2 h-[48px]">Prepare Your Documents</div>
                    <div className="text-[14px] text-gray-700">CV/Resume, portfolio (if any), and a short cover letter.</div>
                  </div>
                  <div className="w-[26px] h-[26px] bg-[#1B9AAA] text-white rounded-full flex items-center justify-center font-bold text-xs mx-auto relative z-2">
                      1
                    </div>
                </div>
                
                {/* Step 2 - Number on Line, Content Below */}
                <div className="relative text-center w-[175px]">
                  <div className="w-[26px] h-[26px] bg-[#1B9AAA] text-white rounded-full flex items-center justify-center font-bold text-xs mx-auto mb-1 relative z-2 mt-[7.5rem]">
                    2
                  </div>
                  <div>
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Submit Application</div>
                    <div className="text-[14px] text-gray-700">Fill out our internship application form or send an email to hi@ioi.co.id</div>
                  </div>
                </div>
                
                {/* Step 3 - Content Above, Number on Line */}
                <div className="relative text-center">
                  <div className="mb-1 -mt-[125px] h-[120px]">
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2 h-[48px]">Interview & Selection</div>
                    <div className="text-[14px] text-gray-700">Shortlisted candidates will be contacted for an interview.</div>
                  </div>
                  <div className="w-[26px] h-[26px] bg-[#1B9AAA] text-white rounded-full flex items-center justify-center font-bold text-xs mx-auto relative z-2">
                      3
                    </div>
                </div>
                
                {/* Step 4 - Number on Line, Content Below */}
                <div className="relative text-center">
                  <div className="w-[26px] h-[26px] bg-[#1B9AAA] text-white rounded-full flex items-center justify-center font-bold text-xs mx-auto mb-1 relative z-2 mt-[4.5rem]">
                    4
                  </div>
                  <div>
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Start Your Internship</div>
                    <div className="text-[14px] text-gray-700">Begin your journey with guidance from the IOI team.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative xl:hidden">
              <div className="bg-transparent rounded-lg">
                
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-black/25"></div>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-5">
                      <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                      <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                        <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Prepare Your Documents</div>
                        <div className="text-[14px] text-gray-700">CV/Resume, portfolio (if any), and a short cover letter.</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                      <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                        <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Submit Application</div>
                        <div className="text-[14px] text-gray-700">Fill out our internship application form or send an email to hi@ioi.co.id</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                      <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                        <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Interview & Selection</div>
                        <div className="text-[14px] text-gray-700">Shortlisted candidates will be contacted for an interview.</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                      <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                        <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Start Your Internship</div>
                        <div className="text-[14px] text-gray-700">Begin your journey with guidance from the IOI team.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Statement Section */}
        <section className="mx-auto sm:py-[55px] rounded-[20px]">
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
