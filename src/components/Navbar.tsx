"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Profile menu items
// const profileMenuItems = [
//   { label: "My Profile", icon: "👤" },
//   { label: "Edit Profile", icon: "⚙️" },
//   { label: "Inbox", icon: "📧" },
//   { label: "Help", icon: "❓" },
//   { label: "Sign Out", icon: "🚪" },
// ];





// function ProfileMenu() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
//   return (
//     <div className="relative">
//       <button
//         className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 hover:bg-gray-100 transition-colors"
//         onClick={() => setIsMenuOpen(!isMenuOpen)}
//       >
//         <img
//           src="https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80"
//           alt="Profile"
//           className="w-8 h-8 rounded-full border border-gray-300"
//         />
//         <svg
//           className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//         </svg>
//       </button>
      
//       {isMenuOpen && (
//         <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-1 z-50">
//           {profileMenuItems.map((item, index) => (
//             <button
//               key={item.label}
//               className={`w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2 ${
//                 index === profileMenuItems.length - 1 ? "text-red-500 hover:bg-red-50" : ""
//               }`}
//               onClick={() => setIsMenuOpen(false)}
//             >
//               <span>{item.icon}</span>
//               <span className="text-sm">{item.label}</span>
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

function DigitalProductDropdown() {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const menuItems = [
    { label: "Nyuciin", href: "https://nyuciin.id/" },
    // { label: "Sentra Kas", href: "/#" },
  ];

  // Close dropdown when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-100 transition-colors text-blue-gray-900 lg:rounded-full cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[15px] font-normal">Digital Product</span>
        <svg
          className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
        {isOpen && (
          <div 
            className="absolute left-0 mt-2 w-[150px] bg-white rounded-tl-[20px] rounded-tr-[0px] rounded-br-[20px] rounded-bl-[20px] shadow-[0_10px_25px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] py-1 z-40"
          >
          {menuItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={`block w-full px-4 py-2 text-left hover:bg-gray-100 text-sm transition-colors ${
                index === menuItems.length - 1 ? "" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function SolutionDropdown() {
  const [isOpenSolution, setIsOpenSolution] = React.useState(false);
  const dropdownRefSolution = React.useRef<HTMLDivElement>(null);

  const softwareServices = [
    {
      title: "Web Development",
      link: "/web-development"
    },
    {
      title: "Mobile Apps Development",
      link: "/mobile"
    },
    {
      title: "Custom Software Solution",
      link: "/software"
    },
    {
      title: "API Development & Integration",
      link: "/api"
    }
  ];

  const otherServices = [
    {
      title: "IoT System Development & Integration",
      description: "Lorem ipsum dolor sit",
      icon: "/IoT.png",
      link: "/iot"
    },
    {
      title: "AI-Powered Automation",
      description: "Lorem ipsum dolor sit", 
      icon: "/AI-Powered.png",
      link: "/ai"
    },
    {
      title: "Data Integration & Automation",
      description: "Lorem ipsum dolor sit",
      icon: "/Data.png",
      link: "/data-integration"
    },
    // {
    //   title: "Strategic IT Consulting",
    //   description: "Lorem ipsum dolor sit",
    //   icon: "/Strategic.png",
    //   link: "/#"
    // }
  ];

  // Close dropdown when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRefSolution.current && !dropdownRefSolution.current.contains(event.target as Node)) {
        setIsOpenSolution(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRefSolution}>
      <button
        type="button"
        className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-100 transition-colors text-blue-gray-900 lg:rounded-full cursor-pointer"
        onClick={() => setIsOpenSolution(!isOpenSolution)}
      >
        <span className="text-[15px] font-normal">Service</span>
        <svg
          className={`h-3 w-3 transition-transform ${isOpenSolution ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpenSolution && (
        <div className="absolute right-0 mt-2 w-[600px] bg-white rounded-tl-[20px] rounded-tr-[0px] rounded-br-[20px] rounded-bl-[20px] shadow-[0_10px_25px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] border py-4 px-6 z-30">
          <div className="grid grid-cols-2 gap-8">
            {/* Left Column - Software Development */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Image 
                  src="/Software.png" 
                  alt="Software Development" 
                  width={48} 
                  height={48}
                  className="text-teal-600"
                />
                <h3 className="text-lg font-semibold text-teal-600">Software Development</h3>
              </div>
              <ul className="space-y-2 pl-12">
                {softwareServices.map((service, index) => (
                  <li key={index} className="text-[12px] text-black font-semibold flex items-center">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>
                    <Link href={service.link} className="text-[12px] text-black font-semibold flex items-center" target="_blank">{service.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Other IT Services */}
            <div className="space-y-4">
              {otherServices.map((service, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Image 
                    src={service.icon} 
                    alt={service.title} 
                    width={48} 
                    height={48}
                    className="text-teal-600 mt-0.5"
                  />
                  <div>
                    <Link href={service.link} className="text-[12px] font-semibold text-black mb-1 leading-[1.2]" target="_blank">{service.title}</Link>
                    <p className="text-[8px] text-gray-500">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ServicesDropdown() {
  const [isOpenServices, setIsOpenServices] = React.useState(false);
  const dropdownRefServices = React.useRef<HTMLDivElement>(null);

  const services = [
    {
      title: "Smart Issue & Action Management",
      description: "Lorem ipsum dolor sit",
      icon: "/siaga-fav.png",
      link: "/siaga"
    },
    {
      title: "Smart Human Resource Management",
      description: "Lorem ipsum dolor sit",
      icon: "/humax-fav.png",
      link: "/humax"
    },
    {
      title: "Omnichannel Customer Experience",
      description: "Lorem ipsum dolor sit",
      icon: "/IOCX-fav.png",
      link: "/iocx"
    },
    {
      title: "Data Integration & Automation Engine",
      description: "Lorem ipsum dolor sit",
      icon: "/data-fav.png",
      link: "/nexora"
    }
  ];

  // Close dropdown when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRefServices.current && !dropdownRefServices.current.contains(event.target as Node)) {
        setIsOpenServices(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRefServices}>
      <button
        type="button"
        className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-100 transition-colors text-blue-gray-900 lg:rounded-full cursor-pointer"
        onClick={() => setIsOpenServices(!isOpenServices)}
      >
        <span className="text-[15px] font-normal">Solution</span>
        <svg
          className={`h-3 w-3 transition-transform ${isOpenServices ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpenServices && (
        <div className="absolute right-0 mt-2 w-[650px] bg-white rounded-tl-[20px] rounded-tr-[0px] rounded-br-[20px] rounded-bl-[20px] shadow-[0_10px_25px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] border p-4 z-30">
          <div className="grid grid-cols-2 gap-3">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                target="_blank"
                className="flex items-start gap-3 p-1 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Image 
                  src={service.icon} 
                  alt={service.title} 
                  width={48} 
                  height={48}
                  className="mt-1"
                />
                <div>
                  <h4 className="text-[12px] font-bold text-gray-800 mb-1">{service.title}</h4>
                  <p className="text-[8px] text-gray-500">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function NavList() {
  const pathname = usePathname();
  
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <Link
        href="/work"
        className={`flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-100 transition-colors text-blue-gray-900 lg:rounded-xl w-[80px] justify-center ${
          pathname === '/work' ? 'bg-[#1B9AAA]/50' : ''
        }`}
      >
        <span className="text-[15px] font-normal">Work</span>
      </Link>
      <ServicesDropdown />
      <SolutionDropdown />
      <DigitalProductDropdown />
      <Link
        href="/about-us"
        className={`flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-100 transition-colors text-blue-gray-900 lg:rounded-xl w-[80px] justify-center ${
          pathname === '/about-us' ? 'bg-[#1B9AAA]/50' : ''
        }`}
      >
        <span className="text-[15px] font-normal">About</span>
      </Link>
    </ul>
  );
}

export default function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [shouldShowBorder, setShouldShowBorder] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen(cur => !cur);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShouldShowBorder(true);
      } else {
        setShouldShowBorder(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-10 mx-auto max-full px-6 sm:px-[74px] py-2 mt-0 transition-shadow bg-white rounded-0 ${
        shouldShowBorder ? "border-b border-gray-300 shadow-lg" : "shadow-md"
      }`}
    >
      <div className="relative mx-auto flex items-center text-blue-gray-900 container h-[51px]">
        <Link
          href="/"
          className="mr-4 cursor-pointer py-1.5 font-medium text-lg hover:text-blue-600 transition-colors"
        >
          <Image src="/logo-ioi/logo.png" alt="logo" width={250} height={100} className="w-[238px] h-auto" />
        </Link>
        
        <div className="hidden lg:flex ml-auto">
          <NavList />
        </div>
        
        <button
          className="ml-auto mr-2 lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={toggleIsNavOpen}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg> 
        </button>
        
        {/* <a 
          href="https://discord.gg/WCvQWMwT" 
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <i className="fab fa-discord text-lg leading-none text-gray-700 hover:text-indigo-600 transition-colors" aria-hidden="true"></i>
        </a>
        
        <a 
          href="https://github.com/creativetimofficial/astro-launch-ui" 
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <i className="fab fa-github text-xl leading-none text-gray-700 hover:text-gray-900 transition-colors" aria-hidden="true"></i>
        </a> */}
        
        {/* <a href="/astro-launch-ui/#examplePages">
          <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
            Get started
          </button>
        </a> */}
      </div>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isNavOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="pt-4 pb-2">
          <NavList />
        </div>
      </div>
    </nav>
  );
} 