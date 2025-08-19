'use client';

import { useState } from 'react';


export default function RequestProjectPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    projectCategory: '',
    projectDescription: '',
    budgetRange: '',
    preferredTimeline: '',
    additionalNotes: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="px-2 sm:px-[74px] bg-white text-black">
      <div className="container mx-auto">
        {/* Hero Section */}
        <section className="mx-auto sm:pt-[55px] pt-[20px] relative">
          <div className="relative p-8 sm:p-12 rounded-[20px] text-black" style={{backgroundImage: 'url(/requestPage.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-[30px] md:text-[40px] lg:text-[50px] font-bold text-gray-900 leading-tight">
                  Let&apos;s Build <span className="text-primary">Your Next</span> {' '}
                  <span className="text-primary">Big Project</span> Together
                </h1>
                <p className="text-[16px] text-black leading-relaxed">
                  Whether you need a <span className="font-bold">custom software solution</span>, a <span className="font-bold">smart automation system</span>, or an <span className="font-bold">end-to-end digital transformation</span>, our team is ready to bring your vision to life. Tell us about your project and we&apos;ll get back to you with the right approach.
                </p>
              </div>
            </div>
            <div className="relative text-center sm:text-right mt-10">
              <div className="">
                <button className="bg-primary hover:bg-[#1B9AAA] text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-300">
                  Submit Your Request
                </button>
                <p className="text-sm text-black mt-3 text-center sm:text-right italic">
                  Our team will respond within <span className="font-bold">1-2 business days</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}

        <section className="mx-auto sm:pt-[55px] pt-10 rounded-[20px]">
          <div className="md:text-[40px] text-[30px] font-bold mb-[15px] text-black text-center">
            How It Works
          </div>
          
          <div className="mt-12">
            <div className="relative sm:h-[385px] flex flex-col justify-center hidden xl:flex">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-black hidden sm:block transform -translate-y-1/2"></div>
              
              <div className="grid sm:grid-cols-5 grid-cols-1 gap-4 sm:gap-8 items-center">
                {/* Step 1 - Content Above, Number on Line */}
                <div className="relative text-center">
                  <div className="mb-1 -mt-[125px] h-[120px]">
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2 h-[48px]">Submit Your Request</div>
                    <div className="text-[14px] text-gray-700">Fill out our online form or contact our team directly.</div>
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
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Initial Consultation</div>
                    <div className="text-[14px] text-gray-700">We&apos;ll discuss your goals, challenges, and requirements.</div>
                  </div>
                </div>
                
                {/* Step 3 - Content Above, Number on Line */}
                <div className="relative text-center">
                  <div className="mb-1 -mt-[125px] h-[120px]">
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2 h-[48px]">Proposal & Timeline</div>
                    <div className="text-[14px] text-gray-700">Receive a detailed plan, cost estimate, and delivery schedule.</div>
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
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Project Kick-Off</div>
                    <div className="text-[14px] text-gray-700">Begin development with clear milestones and regular updates.</div>
                  </div>
                </div>
                
                {/* Step 5 - Content Above, Number on Line */}
                <div className="relative text-center">
                  <div className="mb-1 -mt-[125px] h-[120px]">
                    <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2 h-[48px]">Launch & Support</div>
                    <div className="text-[14px] text-gray-700">Deploy your solution and provide ongoing maintenance if needed.</div>
                  </div>
                  <div className="w-[26px] h-[26px] bg-[#1B9AAA] text-white rounded-full flex items-center justify-center font-bold text-xs mx-auto relative z-2">
                      5
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
                        <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Submit Your Request</div>
                        <div className="text-[14px] text-gray-700">Fill out our online form or contact our team directly.</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                      <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                        <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Initial Consultation</div>
                        <div className="text-[14px] text-gray-700">We&apos;ll discuss your goals, challenges, and requirements.</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                      <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                        <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Proposal & Timeline</div>
                        <div className="text-[14px] text-gray-700">Receive a detailed plan, cost estimate, and delivery schedule.</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                      <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                        <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Project Kick-Off</div>
                        <div className="text-[14px] text-gray-700">Begin development with clear milestones and regular updates.</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-black rounded-full text-center mt-[2.5rem] flex-shrink-0 relative z-2 left-[11px]"></div>
                      <div className="bg-white p-4 rounded-lg border text-center border-gray-200 flex-1">
                        <div className="text-[#1B9AAA] font-semibold text-[16px] mb-2">Launch & Support</div>
                        <div className="text-[14px] text-gray-700">Deploy your solution and provide ongoing maintenance if needed.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="mx-auto sm:py-[55px] py-10 rounded-[20px] bg-white">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col justify-center h-full">
              <div className="text-[30px] sm:text-[40px] font-bold text-gray-900" style={{lineHeight: '1 !important'}}>
                What We Need <br />from <span className="text-primary">You</span>
              </div>
              <p className="text-[16px] text-gray-700 mt-2">
                Let&apos;s work together to create solutions that make a real difference.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Company Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Information
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Category
                  </label>
                  <input
                    type="text"
                    name="projectCategory"
                    value={formData.projectCategory}
                    onChange={handleInputChange}
                    placeholder="e.g., Web Development, Mobile App, AI, IoT, Data Integration"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Description
                  </label>
                  <textarea
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    placeholder="Goals, key features, and target users."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <input
                    type="text"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleInputChange}
                    placeholder="Budget Range (optional)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Timeline
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="preferredTimeline"
                      value={formData.preferredTimeline}
                      onChange={handleInputChange}
                      placeholder="Preferred Timeline"
                      className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <i className="fas fa-calendar absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes or Attachments
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleInputChange}
                      placeholder="Notes"
                      className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <i className="fas fa-paperclip absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-[#1B9AAA] text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-300"
                >
                  Request A Project
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Why Choose IOI Section */}
        <section className="mx-auto sm:py-[55px] py-10 sm:my-[55px] my-10 rounded-[20px]" style={{ boxShadow: '0px 2px 6px 0px rgba(27, 153, 170, 0.15)' }}>
          <div className="flex items-center w-full gap-4 mb-[46px] px-2 sm:px-[74px]">
            <div className="xl:text-[40px] text-[30px] flex-shrink-0 font-bold">
              Why Start Your Project with <span className="text-primary">IOI</span>
            </div>
            <div className="flex-1 flex justify-center">
              <hr className="w-full max-full" />
            </div>
          </div>

          <div className="grid sm:grid-cols-3 grid-cols-1 xl:gap-[40px] gap-[20px] px-2">
            <div className="text-center sm:w-[280px] w-full">
              <div className="w-2 h-2 bg-black rounded-full mx-auto mb-3"></div>
              <div className="text-[16px] font-semibold my-[15px] text-primary">Expertise Across Industries</div>
              <div className="text-[16px] text-gray-600 text-balance">From government to enterprise and SMEs.</div>
            </div>
            <div className="text-center sm:w-[280px] w-full sm:mx-auto mx-0">
              <div className="w-2 h-2 bg-black rounded-full mx-auto mb-3"></div>
              <div className="text-[16px] font-semibold my-[15px] text-primary">End-to-End Delivery</div>
              <div className="text-[16px] text-gray-600 text-balance">From planning to launch and ongoing support.</div>
            </div>
            <div className="text-center sm:w-[280px] w-full sm:ml-auto mx-0">
              <div className="w-2 h-2 bg-black rounded-full mx-auto mb-3"></div>
              <div className="text-[16px] font-semibold my-[15px] text-primary">Collaborative Approach</div>
              <div className="text-[16px] text-gray-600 text-balance">We work closely with you at every stage.</div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-[20px] px-2 sm:mt-[54px] mt-[30px] sm:mx-[74px]">
            <div className="text-center sm:w-[280px] w-full sm:mx-auto mx-0">
              <div className="w-2 h-2 bg-black rounded-full mx-auto mb-3"></div>
              <div className="text-[16px] font-semibold my-[15px] text-primary">Custom-Fit Solutions</div>
              <div className="text-[16px] text-gray-600 text-balance">Each project is designed to match the client’s exact needs.</div>
            </div>
            <div className="text-center sm:w-[280px] w-full sm:mx-auto mx-0">
              <div className="w-2 h-2 bg-black rounded-full mx-auto mb-3"></div>
              <div className="text-[16px] font-semibold my-[15px] text-primary">Proven Track Record</div>
              <div className="text-[16px] text-gray-600 text-balance">Successful projects in AI, IoT, automation, and digital services.</div>
            </div>
          </div>
        </section>

        {/* Closing Statement Section */}
        <section className="mx-auto sm:py-[55px] px-2 sm:px-[74px] py-10 sm:my-[55px] my-10 rounded-[20px]">
          <div className="text-center">
            <h2 className="text-[30px] sm:text-[40px] font-bold text-gray-900 mb-6">
              Your Idea, <span className="text-primary">Our Expertise</span>
            </h2>
            <p className="text-[16px] text-gray-700">
              Let&apos;s turn your concept into a working solution that drives results.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
