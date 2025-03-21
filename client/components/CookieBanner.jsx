"use client"
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

async function checkAndRequestStorageAccess() {
  // Check if the site already has storage access
  if (await document.hasStorageAccess()) {
    alert("Storage access already granted");
    return;
  }

  try {
    // Request storage access
    await document.requestStorageAccess();
    alert("Third-party cookie access granted");
  } catch (error) {
    alert("Third-party cookie access denied", error);
  }
}


 



  return (
    <div className="fixed bottom-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center z-50">
      <p>We use third party cookies to provide various functionalities</p>
      <div>
        <button
          id="requestAccessBtn"
          onClick={()=> checkAndRequestStorageAccess()}
          className="bg-green-500 px-4 py-2 mr-2 rounded"
        >
          I understand
        </button>
       
      </div>
    </div>
  );
}
