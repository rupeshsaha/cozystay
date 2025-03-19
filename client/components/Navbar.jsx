"use client"
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

import LoginComponent from "./LoginComponent";
import SignupComponent from "./SignupComponent";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {

const {user, logout} = useAuth()

  return (
    <>
      <header id="header" class="relative">
        <nav class="bg-neutral-900 text-white py-4 px-6 lg:px-12">
          <div class="flex justify-between items-center">
            <Link
              href="/"
              class="text-xl md:text-2xl font-bold  text-[#D4AF37]"
            >
              <span class="flex items-center">
                <span>Cozy</span>
                <span class="text-white ml-1">Stay</span>
              </span>
            </Link>

            <ul class="hidden lg:flex items-center space-x-8">
              <li>
                <Link
                  href="/"
                  class="hover:text-[#D4AF37] transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/listings"
                  class="hover:text-[#D4AF37] transition-colors duration-300"
                >
                  Properties
                </Link>
              </li>
              
              <li>
                <Link
                  href="/list"
                  class="hover:text-[#D4AF37] transition-colors duration-300"
                >
                  List Your Property
                </Link>
              </li>
              {user ? (
                <>
                  <li>
                    <a
                      href="#listing-process"
                      class="hover:text-[#D4AF37] transition-colors duration-300"
                    >
                      Your listings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#listing-process"
                      class="hover:text-[#D4AF37] transition-colors duration-300"
                    >
                      Your bookings
                    </a>
                  </li>
                  <Button variant="destructive" onClick={async()=>await logout()}>Logout</Button>
                </>
              ) : (
                <>
                  <LoginComponent triggerButton={true}/>

                  <SignupComponent triggerButton={true}/>
                </>
              )}
            </ul>

            <button
              id="mobileMenuBtn"
              class="lg:hidden focus:outline-none"
              aria-label="Toggle mobile menu"
              aria-expanded="false"
              aria-controls="mobileMenu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
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
            class="lg:hidden hidden mt-4 bg-neutral-800 rounded-lg p-4 absolute left-0 right-0 mx-6 z-10"
          >
            <ul class="space-y-3 font-['Montserrat,_sans-serif']">
              <li>
                <a
                  href="#"
                  class="block hover:text-[#D4AF37] transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#featured-properties"
                  class="block hover:text-[#D4AF37] transition-colors duration-300"
                >
                  Properties
                </a>
              </li>
              <li>
                <a
                  href="#property-search"
                  class="block hover:text-[#D4AF37] transition-colors duration-300"
                >
                  Search
                </a>
              </li>
              <li>
                <a
                  href="#listing-process"
                  class="block hover:text-[#D4AF37] transition-colors duration-300"
                >
                  List Property
                </a>
              </li>
              <li>
                <a
                  href="#booking-system"
                  class="block hover:text-[#D4AF37] transition-colors duration-300"
                >
                  Book Now
                </a>
              </li>
              <li>
                <a
                  href="#premium-services"
                  class="block hover:text-[#D4AF37] transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  class="block hover:text-[#D4AF37] transition-colors duration-300"
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

      
   