"use client";

export default function CTA() {
  return (
    <section className="relative bg-black py-20 px-5 sm:px-6 md:px-8 lg:px-12 overflow-hidden">

      {/* Soft Gold Glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[420px] w-[420px] rounded-full bg-[#d6b98c]/5 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        <p className="uppercase tracking-[0.45em] text-[#d6b98c] text-sm">
          LET&apos;S WORK TOGETHER
        </p>

        <h2 className="mt-5 text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-tight text-white">
          Transform Your Dream Space
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-[clamp(1rem,2vw,1.25rem)] leading-8 text-gray-300">
          From luxury residences to premium commercial interiors, we create
          timeless spaces tailored to your lifestyle and vision.
        </p>

        <a
          href="/contact"
          className="
            mt-10
            inline-flex
            items-center
            justify-center
            rounded-full
            bg-[#d6b98c]
            px-10
            py-4
            font-semibold
            text-black
            shadow-[0_10px_35px_rgba(214,185,140,0.25)]
            transition-all
            duration-300
            hover:scale-105
            hover:bg-[#e0c393]
          "
        >
          Contact Us →
        </a>

      </div>

    </section>
  );
}