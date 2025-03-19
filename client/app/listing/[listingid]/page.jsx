"use client";

import { useCallback } from "react";
import DatePicker from "@/components/DatePicker";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";

const ListingDetails = () => {
  const { listingid } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [listing, setListing] = useState(null);
  const intervalRef = useRef(null);

  const [formData, setFormData] = useState({
    listingId: "",
    bookingDates: {},
  });

  useEffect(() => {
    if (listingid) {
      setFormData((prev) => ({
        ...prev,
        listingId: listingid,
      }));
    }
  }, [listingid]);

  useEffect(() => {
    const fetchListingDetails = async () => {
      if (!listingid) return;
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER}/listing/?listingId=${listingid}`
        );
        if (!res.ok) throw new Error("Failed to fetch listing details");
        const data = await res.json();

        setListing(data.listings[0]);
      } catch (error) {
        console.error("Error fetching listing details:", error);
      }
    };

    fetchListingDetails();
  }, [listingid]);

  useEffect(() => {
    if (listing?.images?.length > 0) {
      if (intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % listing.images.length
        );
      }, 3000);

      return () => clearInterval(intervalRef.current);
    }
  }, [listing?.images?.length]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/book`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // ✅ Ensure listingId is sent
      });
      const data = await res.json();
      if (res.ok) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

const handleDateChange = useCallback((dates) => {
  setFormData((prev) => ({
    ...prev,
    bookingDates: dates.map((date) => ({
      startDate: new Date(date.startDate).toISOString().split("T")[0], // YYYY-MM-DD format
      endDate: new Date(date.endDate).toISOString().split("T")[0], // YYYY-MM-DD format
    })),
  }));
}, []);



if (!listing) return null;
  return (
  
    <div className="max-w-6xl mx-auto p-6">
      {/* Photo Gallery */}
      <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
        {listing?.images?.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Image ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Details Section */}
      <div className="mt-6">
        <h1 className="text-4xl font-bold text-gray-900">{listing?.title}</h1>
        <p className="text-lg text-gray-600 mt-2">
          {listing.address}
        </p>

        {/* Available Dates */}
        <div className="mt-4">
          <span className="font-semibold text-lg">Available Dates:</span>
          <p className="text-gray-700 mt-1">
            {listing &&
              listing.availableDates.map((availableDate, idx) => (
                <p key={idx}>
                  {new Date(availableDate.startDate).toLocaleDateString()} -{" "}
                  {new Date(availableDate.endDate).toLocaleDateString()}
                </p>
              ))}
          </p>
        </div>

        {/* Requirements */}
        {listing?.requirements?.length > 0 && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Requirements</h2>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              {listing.requirements}
            </ul>
          </div>
        )}

        {/* Book Now Button */}
        <div className="mt-8">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full">Book Now</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Confirm Booking</DialogTitle>
                <DialogDescription>
                  Choose your preferred dates and confirm the booking
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit}>
                <div className="grid w-full items-center gap-1.5 mt-4">
                  <DatePicker onDateChange={handleDateChange} allowedDateRanges={listing.availableDates}/>
                </div>
                <DialogFooter>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-4"
                  >
                    {isSubmitting ? (
                      <span className="animate-spin">⏳</span>
                    ) : (
                      "Confirm Booking"
                    )}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
