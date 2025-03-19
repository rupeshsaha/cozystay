import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
    const { fullName, email, password } = req.body;

    try {
        if (!fullName.trim() || !email.trim() || !password.trim()) {
            return res.status(400).json({ message: "All fields are required." })
        }

        const existingEmail = await User.findOne({ email })
        
        if (existingEmail) {
            return res.status(400).json({message: "Email already exists."})
        }

        if (password.length < 6) {
            return res.status(400).json({message: "Password must be atleast 6 characters"})
        }
    
        const createdUser = await User.create({
            fullName,
            email,
            password
        })
    
        if (!createdUser) {
            return res.status(400).json({ message: "User not created" })
        }
    
        return res.status(201).json({message: "User registered successfully.", createdUser})
    } catch (error) {
        console.error(`Error while registering user : ${error}`)
        return res.status(500).json({message: `Error : ${error}`})
    }

    
}

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email?.trim() || !password?.trim()) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    // Check password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, fullName: user.fullName },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      path: "/"
    });

    return res.status(200).json({
      message: "User logged in successfully",
      user: { id: user._id, fullName: user.fullName, email: user.email },
    });
  } catch (error) {
    console.error(`Error while logging in: ${error.message}`);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getLoggedInUser = async (req, res) => {
    const loggedInUser = req.user;

    return res.status(200).json({message: "User is logged in", loggedInUser})
}

export const logoutUser = (req, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      expires: new Date(0), 
      path: "/",
    });

    return res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    console.error(`Error while logging out: ${error.message}`);
    return res.status(500).json({ message: "Internal server error" });
  }
};
