import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-red-900 py-4 px-8">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">
            <span className="text-white text-xl font-bold">Transportinator</span>
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link href="/login">
                <span className="text-white">Login</span>
              </Link>
            </li>
            <li>
              <Link href="/register">
                <span className="text-white">Register</span>
              </Link>
            </li>
            <li>
              <Link href="/manufacturer">
                <span className="text-white">Manufacturer</span>
              </Link>
            </li>
            <li>
              <Link href="/transporter">
                <span className="text-white">Transporter</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 13H6v-2h12v2zm0-5H6V6h12v2zm0 10H6v-2h12v2z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5h16v2H4V5zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="mt-4 md:hidden">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link href="/login">
                <span className="text-white">Login</span>
              </Link>
            </li>
            <li>
              <Link href="/register">
                <span className="text-white">Register</span>
              </Link>
            </li>
            <li>
              <Link href="/manufacturer">
                <span className="text-white">Manufacturer</span>
              </Link>
            </li>
            <li>
              <Link href="/transporter">
                <span className="text-white">Transporter</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
