"use client"
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent || consent==='rejected') setShowBanner(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
    window.location.reload(); 
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center z-50">
      <p>This site uses third-party cookies for better experience. Accept?</p>
      <div>
        <button
          onClick={acceptCookies}
          className="bg-green-500 px-4 py-2 mr-2 rounded"
        >
          Accept
        </button>
        <button
          onClick={rejectCookies}
          className="bg-red-500 px-4 py-2 rounded"
        >
          Reject
        </button>
      </div>
    </div>
  );
}
