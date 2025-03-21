"use client";
import { useEffect } from "react";

export default function ThirdPartyCookieFrame() {
  useEffect(() => {
    async function requestAccess() {
      if (await document.hasStorageAccess()) {
        console.log("Storage access already granted");
        return;
      }

      try {
        await document.requestStorageAccess();
        console.log("Storage access granted");
      } catch (error) {
        console.error("Storage access denied", error);
      }
    }

    const iframe = document.createElement("iframe");
    iframe.src = "https://cozystay-l0p6.onrender.com/";
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    iframe.onload = requestAccess;

    return () => {
      document.body.removeChild(iframe);
    };
  }, []);

  return null;
}
