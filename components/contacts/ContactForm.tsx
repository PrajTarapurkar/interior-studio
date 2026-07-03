"use client";

import { motion } from "framer-motion";

type ContactFormProps = {
  form: React.RefObject<HTMLFormElement | null>;
  sendEmail: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  success: boolean;
};

export default function ContactForm({
  form,
  sendEmail,
  loading,
  success,
}: ContactFormProps) {

  return (
    <>

      {/* RIGHT SIDE */}
          <motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.2 }}
className="
bg-gradient-to-br
from-[#111111]
to-[#1c1c1c]
rounded-[28px]
md:rounded-[42px]
border
border-white/10
px-5
py-6
md:px-10
md:py-10
shadow-[0_20px_80px_rgba(0,0,0,0.45)]
transform-gpu
will-change-transform
"          >

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

    </>
  );
}



