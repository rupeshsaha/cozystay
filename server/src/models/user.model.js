import mongoose from "mongoose";
import bcrypt from 'bcryptjs'



const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
        minLength: [3,"Name must be atleast 3 characters"]
    },
    email: {
        type: String,
        required: true,
        unique :true
    },
    password: {
        type: String,
        required: true,
        minLength : [6,"Password must have atleast 6 characters"]
  },
  listings: {
    type: [mongoose.Types.ObjectId],
    ref : "Listing"
  },
  bookings: {
    type: {
      type: [mongoose.Types.ObjectId],
      ref : "Listing"
    }
  }
    
})

userSchema.pre("save", async function (next){
    if(this.isModified("password")){
       this.password = await bcrypt.hash(this.password,12)
    next()   
    }
})

export const User = mongoose.model("User", userSchema);

