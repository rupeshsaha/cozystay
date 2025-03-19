"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import LoginComponent from "./LoginComponent";
import SignupComponent from "./SignupComponent";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header id="header" className="relative">
      <nav className="bg-neutral-900 text-white py-4 px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold text-[#D4AF37]"
          >
            <span className="flex items-center">
              <span>Cozy</span>
              <span className="text-white ml-1">Stay</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
            <li>
              <Link
                href="/"
                className="hover:text-[#D4AF37] transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/listings"
                className="hover:text-[#D4AF37] transition-colors duration-300"
              >
                Properties
              </Link>
            </li>
            <li>
              <Link
                href="/list"
                className="hover:text-[#D4AF37] transition-colors duration-300"
              >
                List Your Property
              </Link>
            </li>
            {user ? (
              <Button
                variant="destructive"
                onClick={async () => await logout()}
              >
                Logout
              </Button>
            ) : (
              <>
                <LoginComponent triggerButton={true} />
                <SignupComponent triggerButton={true} />
              </>
            )}
          </ul>

          {/* Mobile Menu Button */}
          <button
            id="mobileMenuBtn"
            className="lg:hidden focus:outline-none"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobileMenu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobileMenu"
          className={`lg:hidden ${
            isMobileMenuOpen ? "block opacity-100" : "hidden opacity-0"
          } mt-4 bg-neutral-800 rounded-lg p-4 absolute left-0 right-0 mx-6 z-10 transition-opacity duration-300`}
        >
          <ul className="space-y-3 font-['Montserrat,_sans-serif']">
            <li>
              <Link
                href="/"
                className="block hover:text-[#D4AF37] transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/listings"
                className="block hover:text-[#D4AF37] transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Properties
              </Link>
            </li>
            <li>
              <Link
                href="/list"
                className="block hover:text-[#D4AF37] transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                List Property
              </Link>
            </li>
            {user ? (
              <Button
                variant="destructive"
                onClick={async () => await logout()}
              >
                Logout
              </Button>
            ) : (
              <>
                <LoginComponent triggerButton={true} />
                <SignupComponent triggerButton={true} />
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
