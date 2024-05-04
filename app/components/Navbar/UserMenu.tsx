"use client";

import { useState, useEffect, useRef } from "react";

// icons
import { IoIosMenu } from "react-icons/io";

// components
import Avatar from "../UIElements/Avatar";
import MenuItem from "../UIElements/MenuItem";

const UserMenu = () => {
  // states
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ref to keep track of the menu's DOM element
  const menuRef = useRef<HTMLDivElement | null>(null);

  // ------------ inner functions ------------
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Function to close the menu when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };
  // -----------------------------------------

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <div className="flex items-center gap-2">
        <button className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition">
          Airbnb your home
        </button>

        {/* hamburger menu */}
        <button
          className="p-4 md:py-2 md:px-4 border border-neutral-200 flex items-center gap-3 rounded-full shadow-md hover:shadow-lg transition"
          onClick={toggleMenu}
        >
          <IoIosMenu size={20} />

          {/* user icon */}
          <div className="hidden md:block">
            <Avatar />
          </div>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-14 text-sm">
          <div className="flex flex-col cursor-pointer">
            <MenuItem onClick={toggleMenu} label="Login" />
            <MenuItem onClick={toggleMenu} label="Signup" />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
