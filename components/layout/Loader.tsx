"use client";


import { useEffect, useState } from "react";
import { startLoaderAnimation } from "@/components/animations/loader";

export default function Loader() {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
  // Start GSAP animation
  startLoaderAnimation();

  // Temporary auto hide
  const timer = setTimeout(() => {
    setLoading(false);
  }, 3500);

  return () => clearTimeout(timer);
}, []);

  if (!loading) return null;

  return (
    <div
  id="loader"
  className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden will-change-transform"
>
      {/* Gold Glow */}
      <div
  id="loader-glow"
  style={{ opacity: 0 }}
  className="absolute w-[500px] h-[500px] rounded-full bg-[#d6b98c]/10 blur-[180px]"
/>

      <div className="relative flex flex-col items-center">

       {/* Logo */}
<div id="loader-logo-wrapper">
  <img
    id="loader-logo"
    src="/images/logo-transparent.png"
    alt="Kulal Interiors"
    style={{ opacity: 0, transform: "scale(0.85)" }}
    className="w-52 md:w-64 object-contain"
  />
</div>

        {/* Brand */}
        <h1
  id="loader-title"
  style={{ opacity: 0 }}
  className="mt-7 text-white text-5xl md:text-7xl font-bold tracking-tight"
>
          KULAL INTERIORS
        </h1>

        {/* Subtitle */}
        <p
  id="loader-subtitle"
  style={{ opacity: 0 }}
  className="mt-2 uppercase tracking-[0.45em] text-[#d6b98c] text-xs md:text-sm"
>
  Luxury Interior Design
</p>

        {/* Gold Line */}
        <div className="mt-8 relative flex justify-center">

  <div
    id="loader-line"
    className="h-[2px] bg-[#d6b98c] relative overflow-hidden"
    style={{
      width: 0,
      transformOrigin: "center",
    }}
  >

    <div
      id="loader-sweep"
      className="absolute inset-0 bg-white/80"
      style={{
        transform: "translateX(-100%)",
        opacity: 0,
      }}
    />

  </div>

</div>

        {/* Tagline */}
        <p
  id="loader-tagline"
  style={{ opacity: 0 }}
  className="mt-5 text-white/70 text-lg tracking-wide"
>
          Crafting Timeless Spaces
        </p>

      </div>
    </div>
  );
}