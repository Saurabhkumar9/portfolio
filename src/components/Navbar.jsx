import React, { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("about");

  const navItems = ["about", "skills", "experience", "projects", "contact"];

  return (
    <header className="fixed inset-x-0 top-0 z-50  bg-opacity-80 backdrop-blur-sm  border-b border-gray-800">
      <nav className="flex items-center justify-center p-6 lg:px-12 sm:m-10" aria-label="Global">
        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex lg:gap-x-12 relative">
          
          
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setActiveItem(item)}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                activeItem === item ? 'text-indigo-300' : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              
              {/* Hover/Active Effects */}
              <span className={`absolute left-1/2 -bottom-1 h-0.5 w-3/4 bg-indigo-400 transform -translate-x-1/2 transition-all duration-300 ${
                activeItem === item ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-50 group-hover:opacity-100 group-hover:scale-x-100'
              }`}></span>
              
              {/* Circular Background Effect */}
              <span className={`absolute inset-0 rounded-full bg-indigo-900/30 opacity-0 ${
                activeItem === item ? 'scale-100 opacity-100' : 'scale-50 group-hover:scale-100 group-hover:opacity-30'
              } transition-all duration-300 -z-10`}></span>
              
              {/* Glow Effect */}
              <span className={`absolute inset-0 rounded-full shadow-[0_0_8px_0px_rgba(99,102,241,0.5)] opacity-0 ${
                activeItem === item ? 'opacity-100' : 'group-hover:opacity-50'
              } transition-opacity duration-300`}></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button (Optional) */}
       
      </nav>
    </header>
  );
};

export default Navbar;