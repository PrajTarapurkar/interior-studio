"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white overflow-x-hidden relative">

      {/* Animated Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

        <div className="absolute top-20 left-10 w-[250px] h-[250px] bg-[#d6b98c]/10 rounded-full blur-[120px] animate-pulse"></div>

        <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-white/5 rounded-full blur-[140px] animate-pulse"></div>

      </div>

     {/* Navbar */}
<nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-2xl border-b border-white/5 shadow-2xl">

  <div className="max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-5 md:px-8 py-3 md:py-4">

    {/* LEFT SIDE */}
    <div className="flex items-center gap-2 md:gap-4 min-w-0">

      {/* Logo */}
      <img
        src="/images/logo.png"
        alt="Logo"
        className="h-10 w-10 sm:h-12 sm:w-12 md:h-20 md:w-20 rounded-full object-cover shadow-[0_0_30px_rgba(214,185,140,0.35)] flex-shrink-0"
      />

      {/* Brand Text */}
      <div className="leading-none">

        <h1 className="text-[15px] sm:text-[18px] md:text-[42px] font-bold text-white tracking-[-0.04em]">
          InteriorStudio
        </h1>

        <p className="uppercase tracking-[0.28em] text-[5px] sm:text-[6px] md:text-[10px] text-[#d6b98c] mt-1 md:mt-2">
          Luxury Interior Design
        </p>

      </div>

    </div>

    {/* RIGHT SIDE NAVIGATION */}
    <div className="flex items-center gap-2 sm:gap-3 md:gap-10 text-[8px] sm:text-[9px] md:text-sm uppercase tracking-[0.12em] md:tracking-[0.2em] font-medium text-white">

      <a
        href="/"
        className="hover:text-[#d6b98c] transition duration-300 whitespace-nowrap"
      >
        Home
      </a>

      <a
        href="/projects"
        className="hover:text-[#d6b98c] transition duration-300 whitespace-nowrap"
      >
        Projects
      </a>

      <a
        href="/#services"
        className="hover:text-[#d6b98c] transition duration-300 whitespace-nowrap"
      >
        Services
      </a>

      <a
        href="/contact"
        className="text-[#d6b98c] whitespace-nowrap"
      >
        Contact
      </a>

    </div>

  </div>

</nav>

      {/* Hero Section */}
      <section className="relative pt-40 sm:pt-44 md:pt-52 pb-16 md:pb-32 bg-black text-center overflow-hidden">

        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,185,140,0.18),transparent_55%)]"></div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl mx-auto px-5"
        >

          <p className="uppercase tracking-[0.35em] text-[10px] md:text-sm text-[#d6b98c] mb-5">
            Contact Us
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-8xl font-bold leading-[1.05]">

  Let’s Create
  <span className="block text-[#d6b98c]">
    Beautiful Spaces
  </span>

</h1>

          <p className="mt-6 md:mt-10 text-sm sm:text-base md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">

            We craft luxurious interiors designed around elegance,
            comfort, and timeless sophistication for modern living.

          </p>

        </motion.div>

      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-12 md:py-28 px-4 md:px-10 bg-[#0a0a0a]">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-start">

          {/* LEFT SIDE */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="bg-gradient-to-br from-[#111111] to-[#1c1c1c] rounded-[28px] md:rounded-[42px] border border-white/10 px-5 py-6 md:px-12 md:py-14 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
          >

            <p className="uppercase tracking-[0.3em] text-[10px] md:text-sm text-[#d6b98c] mb-4 md:mb-6">
              Luxury Consultation
            </p>

            <h2 className="text-3xl md:text-6xl font-bold leading-[1.1] tracking-tight text-white">
              Contact Info
            </h2>

            <p className="mt-5 md:mt-8 text-sm md:text-lg text-gray-400 leading-[1.8]">

              Whether it’s a luxury residence, modern workspace,
              or premium commercial interior — our studio crafts
              timeless spaces designed around elegance and comfort.

            </p>

            {/* INFO CARDS */}
            <div className="mt-8 md:mt-12 space-y-4">

              {/* PHONE */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 md:gap-8 bg-white/[0.04] border border-white/10 rounded-[22px] md:rounded-[28px] px-4 py-4 md:px-10 md:py-5 hover:bg-white/[0.07] transition-all duration-300"
              >

                <div className="text-[#d6b98c] text-2xl md:text-3xl flex-shrink-0">
                  ☎
                </div>

                <div>

                  <p className="uppercase tracking-[0.25em] text-[9px] md:text-[11px] text-[#d6b98c] mb-1">
                    Phone
                  </p>

                  <h3 className="text-base md:text-[30px] font-semibold text-white tracking-tight">
                    7709 943 271
                  </h3>

                </div>

              </motion.div>

              {/* EMAIL */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 md:gap-8 bg-white/[0.04] border border-white/10 rounded-[22px] md:rounded-[28px] px-4 py-4 md:px-10 md:py-5 hover:bg-white/[0.07] transition-all duration-300"
              >

                <div className="text-[#d6b98c] text-2xl md:text-3xl flex-shrink-0">
                  ✉
                </div>

                <div className="min-w-0">

                  <p className="uppercase tracking-[0.25em] text-[9px] md:text-[11px] text-[#d6b98c] mb-1">
                    Email
                  </p>

                  <h3 className="text-xs sm:text-sm md:text-[28px] font-semibold text-white break-all">
                    kulalinteriors@gmail.com
                  </h3>

                </div>

              </motion.div>

              {/* LOCATION */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 md:gap-8 bg-white/[0.04] border border-white/10 rounded-[22px] md:rounded-[28px] px-4 py-4 md:px-10 md:py-5 hover:bg-white/[0.07] transition-all duration-300"
              >

                <div className="text-[#d6b98c] text-2xl md:text-4xl flex-shrink-0">
                  ⌂
                </div>

                <div>

                  <p className="uppercase tracking-[0.25em] text-[9px] md:text-[11px] text-[#d6b98c] mb-1">
                    Location
                  </p>

                  <a
                    href="https://maps.google.com/?q=Pune,Maharashtra,India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-[28px] font-semibold text-white hover:text-[#d6b98c] transition duration-300"
                  >
                    Pune, Maharashtra, India
                  </a>

                </div>

              </motion.div>

            </div>

            {/* GOOGLE MAP */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="mt-8 overflow-hidden rounded-[22px] md:rounded-[28px] border border-white/10"
            >

              <iframe
                src="https://www.google.com/maps?q=Kulal%20Interiors&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition duration-500"
              ></iframe>

            </motion.div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="bg-gradient-to-br from-[#111111] to-[#1c1c1c] rounded-[28px] md:rounded-[36px] border border-white/10 p-5 md:p-14 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
          >

            <p className="uppercase tracking-[0.3em] text-[10px] md:text-sm text-[#d6b98c] mb-5">
              Get In Touch With Us
            </p>

            <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-6 md:mb-10 text-white">
              Leave a Message
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Name"
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-4 py-4 md:px-6 md:py-5 text-sm md:text-lg text-white placeholder:text-gray-500 outline-none focus:border-[#d6b98c] focus:bg-black/60 transition"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-4 py-4 md:px-6 md:py-5 text-sm md:text-lg text-white placeholder:text-gray-500 outline-none focus:border-[#d6b98c] focus:bg-black/60 transition"
              />

              <input
                type="text"
                placeholder="Contact Number"
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-4 py-4 md:px-6 md:py-5 text-sm md:text-lg text-white placeholder:text-gray-500 outline-none focus:border-[#d6b98c] focus:bg-black/60 transition"
              />

              <input
                type="text"
                placeholder="Project Type"
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-4 py-4 md:px-6 md:py-5 text-sm md:text-lg text-white placeholder:text-gray-500 outline-none focus:border-[#d6b98c] focus:bg-black/60 transition"
              />

              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-4 py-4 md:px-6 md:py-5 text-sm md:text-lg text-white placeholder:text-gray-500 outline-none focus:border-[#d6b98c] focus:bg-black/60 transition resize-none"
              ></textarea>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                className="w-full sm:w-auto bg-[#d6b98c] text-black px-8 py-4 md:px-10 md:py-5 rounded-full text-sm md:text-lg font-semibold hover:bg-white transition duration-300 shadow-[0_10px_30px_rgba(214,185,140,0.35)]"
              >
                Submit Form
              </motion.button>

            </form>

          </motion.div>

        </div>

      </section>

    </main>
  );
}