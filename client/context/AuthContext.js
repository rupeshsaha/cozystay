"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter()

  // Check for existing session on load
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER}/auth`,
          {
            method: "GET",
            credentials: "include", 
          }
        );
        if (res.ok) {
          const data = await res.json();
          
          setUser(data.loggedInUser);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        const data = await res.json();
        if (res.ok) toast.success(data.message);
        else toast.error(data.message);
        
        setUser(data.user);
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  // Signup function
  const signup = async (fullName, email, password) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, email, password }),
      });
      const data = await res.json()
      if (res.ok)
      {
        toast.success(data.message);
    }
      else
        toast.error(data.message)
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  // Logout function
 const logout = async () => {
   try {
     const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/auth/logout`, {
       method: "POST",
       credentials: "include",
     });

     const data = await res.json();

     if (res.ok) {
       toast.success("Logged Out Successfully");
       setUser(null)
     } else {
       toast.error(data.message);
     }
   } catch (error) {
     console.error("Error while logging out:", error);
   }
 };


  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
