"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

import LoginComponent from "./LoginComponent";
import SignupComponent from "./SignupComponent";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <>
      <header id="header" className="relative">
        <nav className="bg-neutral-900 text-white py-4 px-6 lg:px-12">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="text-xl md:text-2xl font-bold  text-[#D4AF37]"
            >
              <span className="flex items-center">
                <span>Cozy</span>
                <span className="text-white ml-1">Stay</span>
              </span>
            </Link>

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
                <>
                  <Button
                    variant="destructive"
                    onClick={async () => await logout()}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <LoginComponent triggerButton={true} />

                  <SignupComponent triggerButton={true} />
                </>
              )}
            </ul>

            <button
              id="mobileMenuBtn"
              className="lg:hidden focus:outline-none"
              aria-label="Toggle mobile menu"
              aria-expanded="false"
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div
            id="mobileMenu"
            className="lg:hidden hidden mt-4 bg-neutral-800 rounded-lg p-4 absolute left-0 right-0 mx-6 z-10"
          >
            <ul className="space-y-3 font-['Montserrat,_sans-serif']">
              <li>
                <a
                  href="#"
                  className="block hover:text-[#D4AF37] transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#featured-properties"
                  className="block hover:text-[#D4AF37] transition-colors duration-300"
                >
                  Properties
                </a>
              </li>
              <li>
                <a
                  href="#property-search"
                  className="block hover:text-[#D4AF37] transition-colors duration-300"
                >
                  Search
                </a>
              </li>
              <li>
                <a
                  href="#listing-process"
                  className="block hover:text-[#D4AF37] transition-colors duration-300"
                >
                  List Property
                </a>
              </li>
              <li>
                <a
                  href="#booking-system"
                  className="block hover:text-[#D4AF37] transition-colors duration-300"
                >
                  Book Now
                </a>
              </li>
              <li>
                <a
                  href="#premium-services"
                  className="block hover:text-[#D4AF37] transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block hover:text-[#D4AF37] transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

//  <script>
//         const mobileMenuBtn = document.getElementById('mobileMenuBtn');
//         const mobileMenu = document.getElementById('mobileMenu');

//         mobileMenuBtn.addEventListener('click', () => {
//           const expanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
//           mobileMenuBtn.setAttribute('aria-expanded', !expanded);
//           mobileMenu.classList.toggle('hidden');
//         });
//       </script>

// <div className="top-0 p-4 mx-4 flex justify-between">
//   <Link href="/">
//     <h1 className="text-3xl font-bold text-blue-400">CozyStay</h1>
//   </Link>
//   <div className="flex items-center gap-4">

//   <Link href={"/listings"}>
//   Listings
//   </Link>
//   <Link href={"/list"}>
//   List Your House
//   </Link>
//   </div>
