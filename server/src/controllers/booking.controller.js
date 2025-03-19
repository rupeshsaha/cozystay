import { Booking } from "../models/booking.model.js";
import { Listing } from "../models/listing.model.js";

export const createBooking = async (req, res) => {
  const { listingId, bookingDates } = req.body;
  console.log(listingId)
  try {
    const listing = await Listing.findById(listingId);
    if (!listing) {
      return res.status(400).json({ message: "Listing not found" });
    }

    const { startDate, endDate } = bookingDates[0];
    const bookingStartDate = new Date(startDate);
    const bookingEndDate = new Date(endDate);


    let isAvailable = false;
    let newAvailableDates = [];

    listing.availableDates.forEach((dateRange) => {
      const rangeStart = new Date(dateRange.startDate);
      const rangeEnd = new Date(dateRange.endDate);

      if (bookingStartDate >= rangeStart && bookingEndDate <= rangeEnd) {
        isAvailable = true;

        if (bookingStartDate > rangeStart) {
          newAvailableDates.push({ startDate: rangeStart, endDate: bookingStartDate });
        }
        if (bookingEndDate < rangeEnd) {
          newAvailableDates.push({ startDate: bookingEndDate, endDate: rangeEnd });
        }
      } else {
        newAvailableDates.push(dateRange);
      }
    });

    if (!isAvailable) {
      return res
        .status(400)
        .json({ message: "Requested dates are not available" });
    }
    

    listing.availableDates = newAvailableDates;

      await listing.save();
      
      const booking = await Booking.create({
          bookingStartDate,
          bookingEndDate,
          listingId: listing._id,
          bookedUser: req.user.id
      })

      if (!booking) {
          return res.status(400).json({message : "Booking not created"})
      }


    return res.status(200).json({ message: "Booking successful", booking });
  } catch (error) {
    console.error("Error booking home:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllBookings = async (req, res) => {
    try {
        const allBookings = await Booking.find({ bookedUser: req.user.id })
        if (!allBookings) {
            return res.status(404).json({message: "No booking found"})
        }

        return res.status(200).json({message: "All bookings fetched successfully", allBookings})
    } catch (error) {
        console.error("Error getting bookings:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}