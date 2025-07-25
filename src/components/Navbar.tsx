"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// Profile menu items
// const profileMenuItems = [
//   { label: "My Profile", icon: "👤" },
//   { label: "Edit Profile", icon: "⚙️" },
//   { label: "Inbox", icon: "📧" },
//   { label: "Help", icon: "❓" },
//   { label: "Sign Out", icon: "🚪" },
// ];

// Account menu items
const accountItems = [
  { title: "Login", href: "/login" },
  { title: "Sign Up", href: "/signup" }
];

// Pages menu items
const navListMenuItems = [
  { title: "About Us", href: "/about" },
  { title: "Landing Page", href: "/landing" },
  { title: "404", href: "/404" },
];

// Solution menu items
const solutionMenuItems = [
  { title: "SIAGA", href: "#" },
  { title: "IOCX", href: "#" },
  { title: "IOCORE", href: "#" },
  { title: "IOPeople", href: "#" },
  { title: "Distribution Management System", href: "#" },
  { title: "Nyuciin", href: "#" },
];

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

function DropdownMenu({ title, items, icon }: { title: string; items: Array<{ title: string; href: string }>; icon?: string }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  // Close dropdown when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const dropdown = document.getElementById(`dropdown-menu-${title}`);
      if (dropdown && !dropdown.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen, title]);

  return (
    <div className="relative" id={`dropdown-menu-${title}`}> 
      <button
        className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-100 transition-colors text-blue-gray-900"
        onClick={() => setIsMenuOpen((open) => !open)}
        type="button"
      >
        {icon && <span className="text-sm">{icon}</span>}
        <span className="text-sm font-normal">{title}</span>
        <svg
          className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isMenuOpen && (
        <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border py-1 z-50">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <Link
        href="/service"
        className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-100 transition-colors text-blue-gray-900 lg:rounded-full"
      >
        <span className="text-sm font-normal">Services</span>
      </Link>
      <DropdownMenu title="Solution" items={solutionMenuItems} />
      <Link
        href="/about-us"
        className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-100 transition-colors text-blue-gray-900 lg:rounded-full"
      >
        <span className="text-sm font-normal">About</span>
      </Link>
      <Link
        href="/career"
        className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-100 transition-colors text-blue-gray-900 lg:rounded-full"
      >
        <span className="text-sm font-normal">Career</span>
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
      className={`sticky top-0 z-10 mx-auto max-w-screen-2xl p-2 lg:pl-6 mt-4 transition-shadow bg-white rounded-lg ${
        shouldShowBorder ? "border-b border-gray-300 shadow-lg" : "shadow-md"
      }`}
    >
      <div className="relative mx-auto flex items-center text-blue-gray-900">
        <Link
          href="/"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium text-lg hover:text-blue-600 transition-colors"
        >
          <Image src="/logo-ioi/logo.png" alt="logo" width={150} height={100} />
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