"use client"
import React from "react";
import { useRouter } from "next/navigation";
import { Home, MapPin, Pin } from "lucide-react";
import Link from "next/link";

const ListingCard = ({ data }) => {
  const router = useRouter()

  return (
    <div class="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
      <div class="relative overflow-hidden h-64">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="Luxury Penthouse"
          class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      
      </div>
      <div class="p-6">
        <div class="flex justify-between items-start mb-4">
          <h3 class="text-xl font-bold text-neutral-800 dark:text-white ">
            {data.title}
          </h3>
          <p class="text-lg font-bold text-[#D4AF37]">$9,450,000</p>
        </div>
        <p class="text-neutral-600 dark:text-neutral-300 mb-4 font-['Montserrat,_sans-serif']">
          {data?.requirements}
        </p>
        <div class="flex flex-wrap gap-4 mb-6">
          <div class="flex items-center text-neutral-600 dark:text-neutral-300">
            <Home className="text-yellow-500 mr-2"/>
            <span>4 Bedrooms</span>
          </div>
          <div class="flex items-center text-neutral-600 dark:text-neutral-300">
            <MapPin className="text-yellow-500 mr-2"/>
            <span>{ data.address }</span>
          </div>
         
        </div>
        <div class="flex justify-between">
          <Link
            href={`/listing/${data._id}`}
            class="text-[#D4AF37] font-bold  flex items-center hover:cursor-pointer"
          >
            View Details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
          <button class="p-2 rounded-full bg-neutral-100 dark:bg-neutral-700 hover:bg-[#D4AF37] hover:text-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
