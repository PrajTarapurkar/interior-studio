"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {

  const form = useRef<HTMLFormElement>(null);

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);

const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!form.current) return;

  setLoading(true);

  try {
    await emailjs.sendForm(
      "service_9bbcojc",
      "template_jxl2bf2",
      form.current,
      "66QAqP2UdvPtC3cSE"
    );

    setSuccess(true);
    form.current.reset();

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  } catch (error) {
    alert("Failed to send message.");
    console.error(error);
  }

  setLoading(false);
};
    
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white overflow-x-hidden relative">

<Navbar />

      {/* Animated Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

        <div className="absolute top-20 left-10 w-[250px] h-[250px] bg-[#d6b98c]/10 rounded-full blur-[120px] animate-pulse"></div>

        <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-white/5 rounded-full blur-[140px] animate-pulse"></div>

      </div>

    

      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 md:pt-36 pb-12 md:pb-20 bg-black text-center overflow-hidden">

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

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* LEFT SIDE */}
          <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[#111111] to-[#1c1c1c] rounded-[28px] md:rounded-[42px] border border-white/10 px-5 py-6 md:px-10 md:py-10 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
          >

            <p className="uppercase tracking-[0.3em] text-[10px] md:text-sm text-[#d6b98c] mb-4 md:mb-6">
              Luxury Consultation
            </p>

            <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight text-white">
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
<motion.a
  href="tel:+917709943271"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="flex items-center gap-4 bg-white/[0.04] border border-white/10 rounded-[22px] px-5 py-4 md:px-7 md:py-4 hover:bg-white/[0.07] hover:border-[#d6b98c]/30 transition-all duration-300 cursor-pointer"
>
  <div className="text-[#d6b98c] text-xl md:text-2xl flex-shrink-0">
    ☎
  </div>

  <div>
    <p className="uppercase tracking-[0.25em] text-[8px] md:text-[10px] text-[#d6b98c] mb-1">
      Phone
    </p>

    <p className="font-[family:var(--font-body)] text-lg md:text-[20px] font-semibold text-white">
      +91 7709 943 271
    </p>
  </div>
</motion.a>

              {/* EMAIL */}
              <motion.a
                href="mailto:kulalinteriors@gmail.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
               className="flex items-center gap-4 bg-white/[0.04] border border-white/10 rounded-[22px] px-5 py-4 md:px-7 md:py-4 hover:bg-white/[0.07] hover:border-[#d6b98c]/30 transition-all duration-300 cursor-pointer"
              >

                <div className="text-[#d6b98c] text-xl md:text-2xl flex-shrink-0">
                  ✉
                </div>

                <div className="min-w-0">

                  <p className="uppercase tracking-[0.25em] text-[8px] md:text-[10px] text-[#d6b98c] mb-1">
                    Email
                  </p>

                  <h3 className="text-xs sm:text-sm md:text-[18px] font-semibold text-white break-words">
                    kulalinteriors@gmail.com
                  </h3>

                </div>

              </motion.a>

              {/* LOCATION */}
              <motion.a
                href="https://maps.google.com/?q=Pune,Maharashtra,India"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 bg-white/[0.04] border border-white/10 rounded-[22px] px-5 py-4 md:px-7 md:py-4 hover:bg-white/[0.07] hover:border-[#d6b98c]/30 transition-all duration-300 cursor-pointer"
              >

                <div className="text-[#d6b98c] text-2xl md:text-2xl flex-shrink-0">
                  ⌂
                </div>

                <div>

                  <p className="uppercase tracking-[0.25em] text-[8px] md:text-[10px] text-[#d6b98c] mb-1">
                    Location
                  </p>

                  <h3 className="text-sm md:text-[20px] font-semibold text-white">
                    Pune, Maharashtra, India
                  </h3>

                </div>

              </motion.a>

            </div>

            {/* GOOGLE MAP */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="mt-8 overflow-hidden rounded-[22px] md:rounded-[28px] border border-white/10"
            >

              <iframe
                src="https://www.google.com/maps?q=Kulal%20Interiors&output=embed"
                width="100%"
                height="180"
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
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-[#111111] to-[#1c1c1c] rounded-[28px] md:rounded-[36px] border border-white/10 p-5 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
          >

            <p className="uppercase tracking-[0.3em] text-[10px] md:text-sm text-[#d6b98c] mb-5">
              Get In Touch With Us
            </p>

            <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-6 md:mb-10 text-white">
              Leave a Message
            </h2>

            <form
  ref={form}
  onSubmit={sendEmail}
  className="space-y-4"
>

  <input
    type="text"
    name="from_name"
    placeholder="Name"
    className="w-full bg-black/40 border border-white/10 rounded-2xl px-4 py-4 md:px-6 md:py-4 text-sm md:text-lg text-white placeholder:text-gray-500 outline-none focus:border-[#d6b98c] focus:bg-black/60 transition"
  />

  <input
    type="email"
    name="from_email"
    placeholder="Email"
    className="w-full bg-black/40 border border-white/10 rounded-2xl px-4 py-4 md:px-6 md:py-4 text-sm md:text-lg text-white placeholder:text-gray-500 outline-none focus:border-[#d6b98c] focus:bg-black/60 transition"
  />

  <input
    type="text"
    name="phone"
    placeholder="Contact Number"
    className="w-full bg-black/40 border border-white/10 rounded-2xl px-4 py-4 md:px-6 md:py-4 text-sm md:text-lg text-white placeholder:text-gray-500 outline-none focus:border-[#d6b98c] focus:bg-black/60 transition"
  />

  <input
    type="text"
    name="service"
    placeholder="Project Type"
    className="w-full bg-black/40 border border-white/10 rounded-2xl px-4 py-4 md:px-6 md:py-4 text-sm md:text-lg text-white placeholder:text-gray-500 outline-none focus:border-[#d6b98c] focus:bg-black/60 transition"
  />

  <textarea
    rows={5}
    name="message"
    placeholder="Tell us about your project..."
    className="w-full bg-black/40 border border-white/10 rounded-2xl px-4 py-4 md:px-6 md:py-5 text-sm md:text-lg text-white placeholder:text-gray-500 outline-none focus:border-[#d6b98c] focus:bg-black/60 transition resize-none"
  ></textarea>

  <motion.button
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.96 }}
  type="submit"
  disabled={loading}
  className="w-full sm:w-auto bg-[#d6b98c] text-black px-8 py-4 md:px-10 md:py-5 rounded-full text-sm md:text-lg font-semibold hover:bg-white transition duration-300 shadow-[0_10px_30px_rgba(214,185,140,0.35)] disabled:opacity-60"
>
  {loading ? "Sending..." : "Submit Form"}
</motion.button>

{success && (
  <motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  className="rounded-xl bg-green-500/10 border border-green-500/30 px-4 py-3 text-green-400 font-medium"
>
  ✓ Thank you! Your enquiry has been sent successfully.
</motion.div>
)}

</form>
          </motion.div>

        </div>

      </section>

<Footer />

    </main>
  );
}