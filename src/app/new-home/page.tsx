'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

// Hero Section - Full width with background image
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center" style={{ backgroundImage: 'url(/bg-section-1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              Digital Transformation for Your <span className="text-primary">Business Growth</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed">
              We are your strategic partner in creating a smarter, more efficient, and data-driven business ecosystem. Welcome to the future of innovation with <strong>Inovasi Otentik Indonesia</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                Explore Our Solutions <i className="fas fa-arrow-right ml-2"></i>
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Watch Demo <i className="fas fa-play ml-2"></i>
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image 
              src="/header-new.png" 
              alt="Digital Transformation" 
              width={500} 
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// About Section
function AboutSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-primary">IOI</span>
            </h2>
            <p className="text-base lg:text-lg text-gray-600 mb-8 leading-relaxed">
              PT Inovasi Otentik Indonesia (IOI) is a leading technology company specializing in digital transformation solutions. We help businesses leverage cutting-edge technology to achieve their goals and stay competitive in the digital age.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-gray-600 text-sm lg:text-base">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600 text-sm lg:text-base">Projects Completed</div>
              </div>
            </div>
          </div>
          <div>
            <Image 
              src="/aboutus.jpg" 
              alt="About IOI" 
              width={500} 
              height={350}
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// Services Section
function ServicesSection() {
  const services = [
    {
      icon: "/ai-solutions.png",
      title: "AI Solutions",
      description: "Custom artificial intelligence solutions to automate and optimize your business processes.",
      color: "bg-blue-500"
    },
    {
      icon: "/data-integration.png",
      title: "Data Integration",
      description: "Seamless data integration across all your systems and platforms for better insights.",
      color: "bg-green-500"
    },
    {
      icon: "/biometric-authentication.png",
      title: "Biometric Authentication",
      description: "Secure biometric authentication systems for enhanced security and user experience.",
      color: "bg-purple-500"
    }
  ]

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive digital transformation services to help your business thrive in the modern digital landscape.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-6 lg:p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className={`w-12 h-12 lg:w-16 lg:h-16 ${service.color} rounded-lg flex items-center justify-center mb-4 lg:mb-6`}>
                <Image 
                  src={service.icon} 
                  alt={service.title}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">{service.title}</h3>
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Solutions Section
function SolutionsSection() {
  const solutions = [
    {
      name: "SIAGA",
      description: "Smart Integrated Analytics & Governance Application",
      image: "/product/SIAGA.png",
      features: ["Real-time Analytics", "Governance Dashboard", "Smart Reporting"]
    },
    {
      name: "IOCX",
      description: "IOI Customer Experience Platform",
      image: "/product/IOCX.png",
      features: ["Customer Journey Mapping", "Omnichannel Support", "Feedback Management"]
    },
    {
      name: "IOCORE",
      description: "IOI Core Business Platform",
      image: "/product/IOCORE.png",
      features: ["Business Process Management", "Workflow Automation", "Resource Planning"]
    },
    {
      name: "DMS",
      description: "Distribution Management System",
      image: "/product/DMS.png",
      features: ["Inventory Management", "Order Processing", "Route Optimization"]
    }
  ]

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Our <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive software solutions designed to address specific business challenges and drive growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 lg:p-8 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start space-x-4 lg:space-x-6">
                <div className="flex-shrink-0">
                  <Image 
                    src={solution.image} 
                    alt={solution.name}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">{solution.name}</h3>
                  <p className="text-gray-600 text-sm lg:text-base mb-3 lg:mb-4">{solution.description}</p>
                  <ul className="space-y-1 lg:space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs lg:text-sm text-gray-700">
                        <i className="fas fa-check text-primary mr-2 text-xs"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Why Choose Us Section
function WhyChooseUsSection() {
  return (
    <section className="py-16 lg:py-20 bg-primary text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">
            Why Choose <span className="text-yellow">IOI</span>
          </h2>
          <p className="text-lg lg:text-xl opacity-90 max-w-3xl mx-auto">
            We combine technical excellence with business acumen to deliver solutions that drive real results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="text-center">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
              <i className="fas fa-users text-lg lg:text-2xl text-yellow"></i>
            </div>
            <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4">Expert Team</h3>
            <p className="opacity-90 text-sm lg:text-base">Our team consists of experienced professionals with deep expertise in technology and business.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
              <i className="fas fa-rocket text-lg lg:text-2xl text-yellow"></i>
            </div>
            <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4">Innovation Focus</h3>
            <p className="opacity-90 text-sm lg:text-base">We stay ahead of technology trends to deliver cutting-edge solutions for your business.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
              <i className="fas fa-shield-alt text-lg lg:text-2xl text-yellow"></i>
            </div>
            <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4">Quality Assurance</h3>
            <p className="opacity-90 text-sm lg:text-base">Rigorous testing and quality control processes ensure reliable and robust solutions.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
              <i className="fas fa-headset text-lg lg:text-2xl text-yellow"></i>
            </div>
            <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4">24/7 Support</h3>
            <p className="opacity-90 text-sm lg:text-base">Round-the-clock support to ensure your systems run smoothly at all times.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Partners Section
function PartnersSection() {
  const partners = [
    "/logos/aws.png",
    "/logos/azure.png",
    "/logos/openai.png",
    "/logos/anthropic.png",
    "/logos/pinecone.png",
    "/logos/n8n.png",
    "/logos/relevance.png",
    "/logos/logo-microsoft.svg",
    "/logos/logo-salesforce.svg",
    "/logos/logo-ibm.svg"
  ]

  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">Trusted by Industry Leaders</h3>
          <p className="text-gray-600 text-sm lg:text-base">We partner with leading technology companies to deliver the best solutions</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image 
                src={partner}
                alt="Partner"
                width={100}
                height={50}
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTASection() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-primary to-blue-600 text-white">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg lg:text-xl opacity-90 mb-6 lg:mb-8 max-w-2xl mx-auto">
          Let&apos;s discuss how our innovative solutions can help you achieve your business goals and drive growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/service">
            <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Explore Our Services
            </button>
          </Link>
          <Link href="/about-us">
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              Learn More About Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

// Main Page Component
export default function NewHome() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SolutionsSection />
      <WhyChooseUsSection />
      <PartnersSection />
      <CTASection />
      <Footer />
    </div>
  )
}
