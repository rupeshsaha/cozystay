import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  bookingStartDate: {
    type: Date,
    required: true,
  },
  bookingEndDate: {
    type: Date,
    required: true,
  },
  listingId: {
    type: mongoose.Types.ObjectId,
    ref: "Listing",
    required: true,
  },
  bookedUser: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Booking = mongoose.model("Booking", bookingSchema);
