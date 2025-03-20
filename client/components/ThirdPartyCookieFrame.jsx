"use client"
import { useEffect } from "react";

export default function ThirdPartyCookieFrame() {
  useEffect(() => {
    const iframe = document.createElement("iframe");
    iframe.src = "https://cozystay-l0p6.onrender.com/set-cookie";
    iframe.style.display = "none"; // Hide iframe
    document.body.appendChild(iframe);

    return () => {
      document.body.removeChild(iframe);
    };
  }, []);

  return null;
}
