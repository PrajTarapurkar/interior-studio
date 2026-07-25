"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type LuxuryDropdownProps = {
  options: string[];
  placeholder: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
};

export default function LuxuryDropdown({
  options,
  placeholder,
  name,
  value,
  onChange,
}: LuxuryDropdownProps) {
  const [open, setOpen] = useState(false);
    

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full">

      {/* Hidden input for EmailJS */}
      <input
  type="hidden"
  name={name}
  value={value}
/>

      {/* Dropdown Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
w-full
rounded-[22px]
border
border-[#d6b98c]/20
bg-[#111111]
px-6
py-4
flex
items-center
justify-between
text-left
transition-all
duration-300
shadow-[0_0_25px_rgba(214,185,140,0.05)]
hover:border-[#d6b98c]/70
hover:shadow-[0_0_35px_rgba(214,185,140,0.18)]
focus:border-[#d6b98c]
"
      >
        <span
  className={
    value
      ? "text-white font-medium"
      : "text-gray-500"
  }
>
  {value || placeholder}
</span>

        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#d6b98c"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </button>

      <AnimatePresence>
  {open && (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
      className="
  absolute
  left-0
  right-0
  mt-3
  z-50
  max-h-80
  overflow-y-auto
  overflow-x-hidden
  no-scrollbar
  rounded-[22px]
  border
  border-[#d6b98c]/20
  bg-[#111111]
  shadow-[0_20px_60px_rgba(0,0,0,0.55)]
"
    >
      {options.map((option) => (
  <button
    key={option}
    type="button"
    onClick={() => {
  onChange(option);
  setOpen(false);
}}
    className={`
      group
      w-full
      px-6
      py-4
      flex
      items-center
      justify-between
      text-left
      transition-all
      duration-300
      border-b
      border-white/5
      last:border-b-0
      ${
        value === option
          ? "bg-[#1b1b1b]"
          : "hover:bg-[#1b1b1b]"
      }
    `}
  >
    <div className="flex items-center gap-3">
      <div
        className={`
          h-2.5
          w-2.5
          rounded-full
          transition-all
          ${
            value === option
              ? "bg-[#d6b98c]"
              : "bg-[#555] group-hover:bg-[#d6b98c]"
          }
        `}
      />

      <span
        className={`
          transition-all
          ${
            value === option
              ? "text-[#d6b98c]"
              : "text-white group-hover:text-[#d6b98c]"
          }
        `}
      >
        {option}
      </span>
    </div>

    {value === option && (
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="text-[#d6b98c] text-lg"
      >
        ✓
      </motion.span>
    )}
  </button>
))}
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
}