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
  requestAnimationFrame(() => {
    setLoading(false);
  });
}, 2200);

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
 className="
absolute
w-[clamp(260px,45vw,550px)]
h-[clamp(260px,45vw,550px)]
rounded-full
bg-[#d6b98c]/10
blur-[140px]
md:blur-[180px]
"
/>

      <div
  className="
    relative
    flex
    flex-col
    items-center
    justify-center
    w-full
    max-w-[900px]
    mx-auto
    px-6
    sm:px-8
    md:px-10
    text-center
  "
>

       {/* Logo */}
<div id="loader-logo-wrapper">
  <img
    id="loader-logo"
    src="/images/logo-transparent.png"
    alt="Kulal Interiors"
    style={{ opacity: 0, transform: "scale(0.85)" }}
    className="w-[clamp(120px,22vw,240px)] object-contain"
  />
</div>

        {/* Brand */}
        <h1
  id="loader-title"
  style={{ opacity: 0 }}
  className="
mt-6
w-full
mx-auto
text-center
text-white
font-bold
leading-[0.9]
tracking-tight
text-[clamp(3rem,10vw,6rem)]
"
>
          
  <span className="block">KULAL</span>
  <span className="block whitespace-nowrap">INTERIORS</span>

        </h1>

        {/* Subtitle */}
        <p
  id="loader-subtitle"
  style={{ opacity: 0 }}
  className="
mt-3
text-center
uppercase
tracking-[0.45em]
text-[#d6b98c]
text-[clamp(10px,2vw,18px)]
"
>
  Luxury Interior Design
</p>

        {/* Gold Line */}
        <div className="mt-8 relative flex justify-center">

 <div
  id="loader-line"
  className="h-[2px] w-[clamp(180px,60vw,320px)] bg-[#d6b98c] relative overflow-hidden"
  style={{
    transform: "scaleX(0)",
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
  className="
  mt-6
  text-center
  text-white/70
  text-[clamp(14px,2vw,24px)]
  tracking-wide
"
>
          Crafting Timeless Spaces
        </p>

      </div>
    </div>
  );
}