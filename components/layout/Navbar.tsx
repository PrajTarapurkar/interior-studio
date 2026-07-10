"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();   // <-- ADD THIS LINE

 const [menuOpen, setMenuOpen] = useState(false);

useEffect(() => {
  document.body.style.overflow = menuOpen ? "hidden" : "";

  return () => {
    document.body.style.overflow = "";
  };
}, [menuOpen]);

// Close menu automatically on page change
useEffect(() => {
  setMenuOpen(false);
}, [pathname]);

  return (
    <>
      {/* PREMIUM NAVBAR */}
<nav
  id="navbar"
  style={{
    opacity: pathname === "/" ? 0 : 1,
    transform:
      pathname === "/" ? "translateY(-40px)" : "translateY(0px)",
  }}
  className="
    fixed
    top-0
    left-0
    w-full
    z-50
    bg-black/85
    backdrop-blur-2xl
    border-b
    border-white/10
    transform-gpu
will-change-transform
  "
>


  <div
  className="
   max-w-[1440px]
mx-auto
flex
items-center
justify-between
px-5
sm:px-6
md:px-8
lg:px-10
xl:px-12
2xl:px-16
py-4
  "
>

    {/* LEFT SIDE */}
    <div className="flex items-center gap-3 min-w-0">

      {/* LOGO */}
      <div className="relative flex-shrink-0">

        <div className="absolute inset-0 bg-[#d6b98c]/20 blur-xl rounded-full"></div>

        <img
  id="navbar-logo"
  src="/images/logo.png"
  alt="Logo"
  className="
                  relative
                 h-[clamp(48px,4vw,56px)]
w-[clamp(48px,4vw,56px)]
                  rounded-full
                  object-cover
                  border
                  border-[#d6b98c]/20
                  shadow-[0_0_25px_rgba(214,185,140,0.25)]
                "
              />

      </div>

      {/* BRAND TEXT */}
      <div className="leading-none min-w-0">

        <h1
  className="
    text-[clamp(18px,2vw,24px)]
    font-semibold
    text-white
    tracking-[0.03em]
    leading-none
  "
>
  KULAL INTERIORS
</h1>

        <p
          className="
  mt-1.5
  uppercase
  tracking-[0.30em]
 text-[clamp(7px,0.8vw,9px)]
  text-[#d6b98c]
"
        >
          Luxury Interior Design
        </p>

      </div>

    </div>

    {/* DESKTOP NAVIGATION */}
    <div
      className="
        hidden
        lg:flex
        items-center
       gap-[clamp(1rem,2vw,2rem)]
        text-sm
        uppercase
        tracking-[0.18em]
        font-semibold
        text-white
      "
    >

      <Link
  href="/"
  className={`px-4 py-2 rounded-full transition duration-300 ${
    pathname === "/"
      ? "text-[#d6b98c] bg-[#d6b98c]/10 border border-[#d6b98c]/25"
      : "text-white hover:text-[#d6b98c]"
  }`}
>
  Home
</Link>

      <Link
  href="/projects"
  className={`px-4 py-2 rounded-full border transition-all duration-300 ${
    pathname === "/projects"
      ? "bg-[#d6b98c]/10 border-[#d6b98c]/25 text-[#d6b98c]"
      : "border-transparent text-white hover:text-[#d6b98c]"
  }`}
>
  Projects
</Link>

<Link
  href="/reviews"
  className={`px-4 py-2 rounded-full border transition-all duration-300 ${
    pathname === "/reviews"
      ? "bg-[#d6b98c]/10 border-[#d6b98c]/25 text-[#d6b98c]"
      : "border-transparent text-white hover:text-[#d6b98c]"
  }`}
>
  Reviews
</Link>

      <Link
  href="/services"
  className={`px-4 py-2 rounded-full border transition-all duration-300 ${
    pathname === "/services"
      ? "bg-[#d6b98c]/10 border-[#d6b98c]/25 text-[#d6b98c]"
      : "border-transparent text-white hover:text-[#d6b98c]"
  }`}
>
  Services
</Link>

      <Link
  href="/contact"
  className={`px-4 py-2 rounded-full border transition-all duration-300 ${
    pathname === "/contact"
      ? "bg-[#d6b98c]/10 border-[#d6b98c]/25 text-[#d6b98c]"
      : "border-transparent text-white hover:text-[#d6b98c]"
  }`}
>
  Contact
</Link>

<Link
  href="/about"
  className={`px-4 py-2 rounded-full border transition-all duration-300 ${
    pathname === "/about"
      ? "bg-[#d6b98c]/10 border-[#d6b98c]/25 text-[#d6b98c]"
      : "border-transparent text-white hover:text-[#d6b98c]"
  }`}
>
  About Us
</Link>

    </div>

    {/* MOBILE MENU BUTTON */}
    <button
      onClick={() => setMenuOpen(true)}
      className="
  lg:hidden
  text-white
text-[clamp(34px,6vw,40px)]"
    >
      <HiOutlineMenuAlt3 />
    </button>

  </div>

</nav>

{/* MOBILE MENU */}
{menuOpen && (

  <motion.div
    initial={{ opacity: 0, x: "100%" }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: "100%" }}
    transition={{ duration: 0.35 }}
    className="
      fixed
      inset-0
      z-[100]
      bg-[#050505]
     px-5
     sm:px-6
     py-5
      flex
      flex-col
      overflow-y-auto
    "
  >

    {/* TOP */}
    <div className="flex items-start justify-between">

      {/* LEFT */}
      <div className="flex items-center gap-3">

        {/* LOGO */}
        <img
          src="/images/logo.png"
          alt="Logo"
          className="
            h-[52px]
            w-[52px]
            rounded-full
            object-cover
            border
            border-[#d6b98c]/30
            shadow-[0_0_20px_rgba(214,185,140,0.2)]
          "
        />

        {/* TEXT */}
        <div>

          <h2
            className="
              text-white
              text-[20px]
              font-bold
              leading-none
            "
          >
            KULAL INTERIORS
          </h2>

          <p
            className="
              text-[#d6b98c]
              uppercase
              tracking-[0.24em]
              text-[7px]
              mt-1
            "
          >
            Luxury Interior Design
          </p>

        </div>

      </div>

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setMenuOpen(false)}
        className="
          text-white
          text-[clamp(36px,6vw,42px)]
          leading-none
        "
      >
        <HiOutlineX />
      </button>

    </div>

    {/* NAV LINKS */}
    <div className="mt-10 flex flex-col">

      <Link
        href="/"
        onClick={() => setMenuOpen(false)}
        className="
          py-4
          border-b
          border-white/8
          text-[clamp(17px,2vw,18px)]
          font-light
          text-[#d6b98c]
        "
      >
        Home
      </Link>

      <Link
        href="/projects"
        onClick={() => setMenuOpen(false)}
        className="
          py-4
          border-b
          border-white/8
          text-[clamp(17px,2vw,18px)]
          font-light
          text-white
        "
      >
        Projects
      </Link>

      <Link
        href="/reviews"
        onClick={() => setMenuOpen(false)}
        className="
          py-4
          border-b
          border-white/8
          text-[clamp(17px,2vw,18px)]
          font-light
          text-white
        "
      >
        Reviews
      </Link>

      <Link
        href="/services"
        onClick={() => setMenuOpen(false)}
        className="
          py-4
          border-b
          border-white/8
          text-[clamp(17px,2vw,18px)]
          font-light
          text-white
        "
      >
        Services
      </Link>
      

      <Link
        href="/contact"
        onClick={() => setMenuOpen(false)}
        className="
          py-4
          border-b
          border-white/8
          text-[clamp(17px,2vw,18px)]
          font-light
          text-white
        "
      >
        Contact
      </Link>

<Link
  href="/about"
  onClick={() => setMenuOpen(false)}
  className="
    py-4
    border-b
    border-white/10
    text-[clamp(17px,2vw,18px)]
    font-light
    text-white
  "
>
  About Us
</Link>

    </div>

    {/* PHONE + WHATSAPP */}
    <div
      className="
        mt-8
        border
        border-white/10
       rounded-[clamp(20px,2vw,24px)]
        px-5
        py-4
        flex
        items-center
        justify-between
        bg-[#0b0b0b]
      "
    >

      {/* LEFT */}
      <div>

        <p
          className="
            text-gray-500
            uppercase
            tracking-[0.22em]
            text-[9px]
            mb-2
          "
        >
          Call Us
        </p>

      <p className="font-[family:var(--font-body)] text-xl font-semibold text-white">
  +91 7709 943 271
</p>

      </div>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/917709943271"
        target="_blank"
        rel="noopener noreferrer"
        className="
          h-[clamp(64px,8vw,80px)]
          w-[clamp(64px,8vw,80px)]
          rounded-[22px]
          border
          border-[#d6b98c]/30
          flex
          items-center
          justify-center
          text-[#d6b98c]
          text-[clamp(30px,3vw,36px)]
          bg-[#d6b98c]/5
          shadow-[0_0_30px_rgba(214,185,140,0.12)]
        "
      >
        <FaWhatsapp />
      </a>

    </div>

    {/* BUTTON */}
    <a
      href="/contact"
      className="
        mt-5
        w-full
        flex
        items-center
        justify-center
        bg-[#d6b98c]
        text-black
        py-[clamp(.9rem,2vw,1rem)]
        min-h-[48px]
        rounded-2xl
        text-[15px]
        font-semibold
        shadow-[0_10px_30px_rgba(214,185,140,0.25)]
      "
    >
      Get Free Consultation
    </a>

    {/* FOLLOW */}
<div className="mt-8 text-center">

  <p
    className="
      text-gray-500
      uppercase
      tracking-[0.30em]
      text-[10px]
      mb-5
    "
  >
    Follow Us
  </p>

  {/* SOCIAL */}
  <div className="flex items-center justify-center gap-5">

    <a
      href="https://www.instagram.com/kulal_interiors?igsh=OHhwNm9yMHd6aDll"
      target="_blank"
      rel="noopener noreferrer"
      className="
        h-[clamp(56px,7vw,64px)]
w-[clamp(56px,7vw,64px)]
        rounded-full
        border
        border-[#d6b98c]/30
        flex
        items-center
        justify-center
        text-white
        text-[clamp(22px,3vw,26px)]
      "
    >
      <FaInstagram />
    </a>

    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      className="
        h-[clamp(56px,7vw,64px)]
w-[clamp(56px,7vw,64px)]
        rounded-full
        border
        border-[#d6b98c]/30
        flex
        items-center
        justify-center
        text-white
        text-[clamp(22px,3vw,26px)]
      "
    >
      <FaLinkedinIn />
    </a>

    <a
      href="https://youtube.com"
      target="_blank"
      rel="noopener noreferrer"
      className="
        h-[clamp(56px,7vw,64px)]
w-[clamp(56px,7vw,64px)]
        rounded-full
        border
        border-[#d6b98c]/30
        flex
        items-center
        justify-center
        text-white
        text-[clamp(22px,3vw,26px)]
      "
    >
      <FaYoutube />
    </a>

  </div>

</div>

</motion.div>

)}
    </>
  );
}