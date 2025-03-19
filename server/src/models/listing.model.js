import mongoose from "mongoose";



const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minLength: [3, "Listing title must be at least 3 characters"],
  },
  address: {
    type: String,
    required: true
  },
  rate: {
    type: Number,
    required: true
  },
  availableDates: [
    {
      startDate: {
        type: Date,
        required: true,
      },
      endDate: {
        type: Date,
        required: true,
        validate: {
          validator: function (value) {
            return this.startDate < value;
          },
          message: "End date must be greater than start date",
        },
      },
    },
  ],
  requirements: {
    type: String,
    },
  media: {
      type : [String]
    },
    listingCreator: {
        type: mongoose.Types.ObjectId,
        ref: "User"
  }
});

export const Listing = mongoose.model("Listing", listingSchema);