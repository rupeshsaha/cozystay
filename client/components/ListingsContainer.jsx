"use client";

import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";
import { Loader2 } from "lucide-react";

const ListingsContainer = ({limit}) => {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true; 

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/listing?limit=${limit}`, {
          method: "GET",
        });

        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }

        const data = await res.json();
        if (isMounted) {
          setListings(data.listings || []);
        }
      } catch (error) {
        console.error("Error while fetching listings:", error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="flex sm:justify-start justify-center items-center flex-wrap gap-4 flex-1 col-span-3 mx-auto">
      {isLoading ? (
        <Loader2 className="animate-spin" />
      ) :  (
        listings.map((listing) => (
          <ListingCard key={listing._id} data={listing} />
        ))
      ) }
    </div>
  );
};

export default ListingsContainer;
