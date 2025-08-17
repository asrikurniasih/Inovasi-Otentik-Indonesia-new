'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function SupportPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    issueCategory: '',
    issueDescription: '',
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
    console.log('Form submitted:', formData);
  };

  return (
    <section className="px-2 sm:px-[74px] bg-white text-black">
      <div className="container mx-auto">
        {/* Hero Section */}
        <section className="mx-auto sm:pt-[55px] pt-[20px] relative">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <Image 
                src="/support.png" 
                alt="Robot Assistant" 
                width={500} 
                height={500} 
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-6 text-center lg:text-right">
              <h1 className="text-[30px] md:text-[40px] lg:text-[50px] font-bold text-gray-900 leading-tight">
                Faster, Smarter, and Always Available <span className="text-primary">Technical Support</span>
              </h1>
              <p className="text-[16px] text-gray-700 leading-relaxed">
                IOI provides 24/7 technical support through a combination of our AI-powered agent LIONA and expert human engineers. Whether it’s a quick fix or a complex issue, we make sure you get the right help, fast.
              </p>
            </div>
          </div>
        </section>

        {/* Meet LIONA Section */}
        <section className="mx-auto sm:mt-[55px] mt-10 rounded-[20px]">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div className="">
              <h2 className="text-[30px] md:text-[40px] font-bold text-gray-900 mb-[15px]">
                Meet <span className="text-primary">LIONA!</span>
              </h2>
              <div className="text-[16px] text-gray-700 leading-relaxed mb-[15px]">
                LIONA (Live Intelligent Online Network Assistant) is your first point of contact for technical support, providing instant assistance and intelligent troubleshooting.
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-[16px] text-gray-700">Instant 24/7 Response</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-[16px] text-gray-700">Step-by-Step Troubleshooting</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-[16px] text-gray-700">Automatic Ticket Creation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-[16px] text-gray-700">Real-Time Updates</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-[16px] text-gray-700">Escalation to Human Engineers</span>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center md:justify-end">
              <Image 
                src="/lionaSupport.png" 
                alt="LIONA Assistant" 
                width={400} 
                height={400} 
                className="w-[400px] h-auto"
              />
            </div>
          </div>
        </section>

        {/* How Support Works Section */}
        <section className="mx-auto sm:mt-[55px] mt-10 rounded-[20px]">
          <div className="">
            <h2 className="text-[30px] md:text-[40px] font-bold text-gray-900 mb-[15px] text-left">
              How <span className="text-primary">Support</span> Works
            </h2>
            <div>
              <Image src="/imageSupport.png" alt="How Support Works" width={1000} height={1000} className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* Contact Technical Support Section */}
        <section className="mx-auto sm:mt-[55px] mt-10 rounded-[20px]">
          <div className="">
            <h2 className="text-[30px] md:text-[40px] font-bold text-gray-900 mb-[15px] text-center">
              Contact <span className="text-primary">Technical Support</span>
            </h2>
            <p className="text-[16px] text-gray-700 text-center mb-[15px]">
              Need immediate help? Reach us through:
            </p>
            
            <div className="text-center mb-[15px]">
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1B9AAA] transition-colors text-[18px]">
                Email: hi@ioi.co.id
              </button>
            </div>
          </div>
        </section>

        <section className="mx-auto sm:my-[55px] my-10 rounded-[20px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="flex flex-col justify-center h-full items-center">
              <div>
                <div className="md:text-[35px] text-[30px] font-bold mb-4 text-black leading-[1.2]">
                We Are Here to <span className="text-primary">Help</span>
                </div>
                <p className="text-[16px] text-gray-700">Let us know what's troubling you—our support team is ready to assist with clarity, speed, and care.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[16px] font-semibold text-gray-900 mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[16px] font-semibold text-gray-900 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[16px] font-semibold text-gray-900 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[16px] font-semibold text-gray-900 mb-2">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-[16px] font-semibold text-gray-900 mb-2">Issue Category</label>
                <select
                  name="issueCategory"
                  value={formData.issueCategory}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                >
                  <option value="">Select an issue category</option>
                  <option value="technical">Technical Issue</option>
                  <option value="billing">Billing & Payment</option>
                  <option value="account">Account Management</option>
                  <option value="feature">Feature Request</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[16px] font-semibold text-gray-900 mb-2">Issue Description</label>
                <textarea
                  name="issueDescription"
                  value={formData.issueDescription}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Please describe your issue in detail..."
                  required
                />
              </div>

              <div>
                <label className="block text-[16px] font-semibold text-gray-900 mb-2">Additional Notes or Attachments</label>
                <div className="relative">
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Any additional information or files..."
                  />
                  <div className="absolute right-3 top-3">
                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1B9AAA] transition-colors text-[18px]"
                >
                  Submit Support Request
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
}
