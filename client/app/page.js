import ListingsContainer from "@/components/ListingsContainer";
import {
  ArrowRight,
  Check,
  ShieldCheckIcon,
  Star,
  TimerResetIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <section
        id="hero"
        className="relative h-screen overflow-hidden bg-neutral-900 text-white"
      >
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"></div>
        </div>

        <div className="relative z-20 flex flex-col justify-center items-center h-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold  mb-4">
            <span className="text-white">Discover Your</span>
            <span className="text-[#D4AF37] block">Dream Property</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-['Montserrat,_sans-serif'] text-gray-200 mb-8 max-w-3xl">
            Exclusive luxury properties handpicked for the most discerning
            clients.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
            <Link
              href="#featured-properties"
              className="px-8 py-4 bg-[#D4AF37] hover:bg-[#c9a333] text-black font-bold rounded-md transition-colors duration-300 transform hover:scale-105"
            >
              Find Properties
            </Link>
            <Link
              href="/list"
              className="px-8 py-4 bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold rounded-md transition-colors duration-300 transform hover:scale-105"
            >
              List Your Property
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-4xl">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#D4AF37]">500+</p>
              <p className="text-lg font-light">Luxury Properties</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#D4AF37]">98%</p>
              <p className="text-lg font-light">Customer Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#D4AF37]">24/7</p>
              <p className="text-lg font-light">Premium Support</p>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      <section
        id="featured-properties"
        className="py-20 md:py-28 bg-neutral-50 dark:bg-neutral-900"
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
      <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-neutral-800 dark:text-white leading-tight">
              Featured <span className="text-[#D4AF37]">Properties</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto font-['Montserrat,_sans-serif']">
              Discover our selection of exclusive properties that define luxury
              living.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            <ListingsContainer limit={3} />
          </div>

          <div className="text-center mt-16">
            <Link
              href="/listings"
              className="inline-block px-10 py-4 bg-[#D4AF37] hover:bg-[#c9a333] text-black font-semibold rounded-lg transition-transform duration-300 transform hover:scale-105 shadow-lg"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      <section
        id="listing-process"
        className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-900"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4  text-neutral-800 dark:text-white">
              List Your <span className="text-[#D4AF37]">Luxury Property</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto font-['Montserrat,_sans-serif']">
              Showcase your prestigious property to discerning buyers with our
              premium listing service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-16">
            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 relative transform transition-transform duration-300 hover:-translate-y-2">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#D4AF37] text-black w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold mb-4 text-neutral-800 dark:text-white ">
                  Create an Account
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                  Sign up for a free account and verify your identity as a
                  property owner or agent.
                </p>
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-[#D4AF37]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 relative transform transition-transform duration-300 hover:-translate-y-2">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#D4AF37] text-black w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold mb-4 text-neutral-800 dark:text-white ">
                  Submit Property Details
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-6 font-['Montserrat,_sans-serif']">
                  Complete our comprehensive form with high-quality photos and
                  detailed specifications.
                </p>
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-[#D4AF37]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 relative transform transition-transform duration-300 hover:-translate-y-2">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#D4AF37] text-black w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold mb-4 text-neutral-800 dark:text-white ">
                  Get Featured & Connect
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-6 font-['Montserrat,_sans-serif']">
                  Your property is showcased to qualified buyers. Receive
                  inquiries and manage viewings.
                </p>
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-[#D4AF37]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/list"
              className="inline-block px-8 py-4 bg-[#D4AF37] hover:bg-[#c9a333] text-black font-bold rounded-md transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              List Your Property
            </Link>
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="py-16 bg-neutral-50 dark:bg-neutral-900"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover firsthand experiences from our satisfied clients who
              found their perfect luxury properties through our platform.
            </p>
          </div>

          <div className="relative overflow-hidden" id="testimonial-slider">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              id="testimonial-track"
            >
              <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gray-200 dark:bg-neutral-700 rounded-full flex items-center justify-center overflow-hidden mr-4">
                      <svg
                        className="w-8 h-8 text-gray-400 dark:text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Jennifer Anderson
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        New York, USA
                      </p>
                    </div>
                  </div>
                  <div className="mb-4 flex">
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 flex-grow italic">
                    "I was looking for a luxury penthouse in Manhattan and this
                    platform made the process incredibly smooth. The booking
                    system was intuitive, and the virtual tour feature helped me
                    make my decision without even visiting in person.
                    Exceptional service!"
                  </p>
                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-neutral-700">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Property: Manhattan Skyline Penthouse
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gray-200 dark:bg-neutral-700 rounded-full flex items-center justify-center overflow-hidden mr-4">
                      <svg
                        className="w-8 h-8 text-gray-400 dark:text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Robert Carter
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Los Angeles, USA
                      </p>
                    </div>
                  </div>
                  <div className="mb-4 flex">
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 flex-grow italic">
                    "As a property owner, listing my Beverly Hills villa was
                    remarkably easy. The platform's professional photography
                    services and detailed listing options helped me showcase my
                    property perfectly. I received multiple booking inquiries
                    within days!"
                  </p>
                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-neutral-700">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Property: Beverly Hills Luxury Villa
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gray-200 dark:bg-neutral-700 rounded-full flex items-center justify-center overflow-hidden mr-4">
                      <svg
                        className="w-8 h-8 text-gray-400 dark:text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Emma Rodriguez
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Miami, USA
                      </p>
                    </div>
                  </div>
                  <div className="mb-4 flex">
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 flex-grow italic">
                    "We needed a beachfront property for our family vacation,
                    and the filtering system made it so easy to find exactly
                    what we wanted. The concierge service arranged everything
                    from airport pickup to stocking the fridge before our
                    arrival. Truly five-star experience!"
                  </p>
                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-neutral-700">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Property: Miami Beachfront Estate
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gray-200 dark:bg-neutral-700 rounded-full flex items-center justify-center overflow-hidden mr-4">
                      <svg
                        className="w-8 h-8 text-gray-400 dark:text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        David Chen
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Chicago, USA
                      </p>
                    </div>
                  </div>
                  <div className="mb-4 flex">
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 flex-grow italic">
                    "I've used many luxury property platforms before, but none
                    compare to the level of detail and service here. The
                    verified reviews helped me choose the perfect downtown loft
                    for my business trip. The seamless check-in process was an
                    added bonus."
                  </p>
                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-neutral-700">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Property: Chicago Downtown Luxury Loft
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gray-200 dark:bg-neutral-700 rounded-full flex items-center justify-center overflow-hidden mr-4">
                      <svg
                        className="w-8 h-8 text-gray-400 dark:text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Sarah Johnson
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        San Francisco, USA
                      </p>
                    </div>
                  </div>
                  <div className="mb-4 flex">
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 flex-grow italic">
                    "Creating a listing for my Napa Valley property was
                    incredibly straightforward. The professional photography
                    team captured my home beautifully, and the detailed
                    analytics dashboard helps me understand booking patterns and
                    optimize my pricing strategy."
                  </p>
                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-neutral-700">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Property: Napa Valley Wine Country Estate
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              id="prev-testimonial"
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white dark:bg-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-700 text-gray-800 dark:text-white rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 opacity-75 hover:opacity-100"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>

            <button
              id="next-testimonial"
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white dark:bg-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-700 text-gray-800 dark:text-white rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 opacity-75 hover:opacity-100"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className="flex justify-center space-x-2 mt-8"
            id="testimonial-dots"
          >
            <button
              className="w-3 h-3 rounded-full bg-blue-600"
              data-index="0"
              aria-label="Testimonial page 1"
            ></button>
            <button
              className="w-3 h-3 rounded-full bg-gray-300 dark:bg-neutral-700"
              data-index="1"
              aria-label="Testimonial page 2"
            ></button>
            <button
              className="w-3 h-3 rounded-full bg-gray-300 dark:bg-neutral-700"
              data-index="2"
              aria-label="Testimonial page 3"
            ></button>
          </div>

          <div className="mt-16 pt-10 border-t border-gray-200 dark:border-neutral-700">
            <h3 className="text-xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
              Trusted by Luxury Property Owners Worldwide
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <div className="flex items-center">
                <Star color="gold" size={32} />
                <span className="ml-2 text-lg font-medium text-gray-700 dark:text-gray-300">
                  5-Star Rated
                </span>
              </div>
              <div className="flex items-center">
                <ShieldCheckIcon color="gold" size={32} />
                <span className="ml-2 text-lg font-medium text-gray-700 dark:text-gray-300">
                  Secure Bookings
                </span>
              </div>
              <div className="flex items-center">
                <Check color="gold" size={32} />
                <span className="ml-2 text-lg font-medium text-gray-700 dark:text-gray-300">
                  Verified Properties
                </span>
              </div>
              <div className="flex items-center">
                <TimerResetIcon color="gold" size={32} />
                <span className="ml-2 text-lg font-medium text-gray-700 dark:text-gray-300">
                  24/7 Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
