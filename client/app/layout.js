import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import ThirdPartyCookieFrame from "@/components/ThirdPartyCookieFrame";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "CozyStay",
  description: "Book the best houses  at affordable prices",
};

export default function RootLayout({ children }) {
      const consent =
        typeof window !== "undefined"
          ? localStorage.getItem("cookieConsent")
          : null;
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
      
          <div className="">
            <Navbar />
            {children}
            <CookieBanner />
            {consent === "accepted" && <ThirdPartyCookieFrame />}
            <Footer />

            <Toaster position="top-right" richColors />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
