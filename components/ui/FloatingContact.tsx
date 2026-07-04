"use client";

import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingContact() {
  return (
    <div
      
  className="
    hidden
    lg:flex

    fixed
    bottom-8
    right-8
    z-[9999]

    flex-col
    gap-4
  "
>
    
      {/* Call */}

      <a
        href="tel:+917709943271"
        aria-label="Call Kulal Interiors"
        className="
          w-14
          h-14

          rounded-full

          bg-[#111111]
          border
          border-[#d6b98c]/40

          flex
          items-center
          justify-center

          shadow-lg

          transition-all
          duration-300

          hover:bg-[#d6b98c]
          hover:scale-110
        "
      >
        <Phone
          size={24}
          className="text-[#d6b98c] hover:text-black"
        />
      </a>

      {/* WhatsApp */}

      <a
        href="https://wa.me/917709943271?text=Hi%20Kulal%20Interiors,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Kulal Interiors"
        className="
          w-14
          h-14

          rounded-full

          bg-[#25D366]

          flex
          items-center
          justify-center

          shadow-lg

          transition-all
          duration-300

          hover:scale-110
        "
      >
        <FaWhatsapp
          size={28}
          className="text-white"
        />
      </a>
    </div>
  );
}