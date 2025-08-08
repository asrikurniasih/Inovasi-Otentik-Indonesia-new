'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function FloatingContactButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number
    const phoneNumber = '6281234567890'
    const message = 'Hello! I would like to get in touch.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted')
    setIsModalOpen(false)
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true)}
        className="fixed bottom-6 right-6 z-50 text-white rounded-[20px] p-2 transition-all duration-300 transform border-[1.5px] border-[#304e70] hover:bg-[#fff] hover:boxShadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)]"
        aria-label="Contact us"
      >
        <Image src="/liona.png" alt="Liona" width={40} height={40} />
      </button>

      {/* Side Panel */}
      {isModalOpen && (
        <div className="fixed bottom-6 right-[6rem] z-50">
          {/* Side Panel Content */}
          <div className="relative bg-gradient-to-b from-[#7ac4cd] to-[#feffff] rounded-2xl p-4 shadow-2xl" style={{ width: '233px', height: '273px' }}>
            {/* Header */}
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 mr-3">
                <div className="w-12 h-12 rounded-0 flex items-center justify-center">
                  <Image src="/liona.png" alt="Liona" width={40} height={40} />
                </div>
              </div>
              <div>
                <h2 className="text-lg font-bold text-black italic">Ask Liona!</h2>
              </div>
            </div>

            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg mb-1 flex items-center justify-center transition-colors duration-300 text-sm h-[30px]"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp
            </button>

            {/* Separator */}
            <div className="text-center text-black text-[7.5px] mb-1">or you can</div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-1">
              <input
                type="text"
                placeholder="Your name..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 italic text-sm h-[30px]"
                required
              />
              <input
                type="email"
                placeholder="Your email..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 italic text-sm h-[30px]"
                required
              />
              <input
                type="tel"
                placeholder="Your contact..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 italic text-sm h-[30px]"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#1B9AAA] hover:bg-[#FFF] text-white hover:text-[#1B9AAA] font-bold py-1 px-4 rounded-lg transition-all duration-300 text-sm h-[30px]"
                style={{ backgroundColor: '#1B9AAA' }}
              >
                Send
              </button>
            </form>

            {/* Close Button */}
            {/* <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
              aria-label="Close panel"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button> */}
          </div>
        </div>
      )}
    </>
  )
} 