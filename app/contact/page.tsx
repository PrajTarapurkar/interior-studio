export default function ContactPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white overflow-hidden">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-2xl border-b border-white/10">

        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

          {/* Logo */}
          <div className="flex items-center gap-6">

            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-16 w-16 rounded-full object-cover shadow-[0_0_25px_rgba(214,185,140,0.4)]"
            />

            <div>

              <h1 className="text-4xl font-semibold leading-none tracking-wide">
                Interior Studio
              </h1>

              <p className="text-[#d6b98c] uppercase tracking-[0.35em] text-[10px] mt-2">
                Luxury Interior Design
              </p>

            </div>

          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.18em] font-medium">

            <a href="/" className="hover:text-[#d6b98c] transition">
              Home
            </a>

            <a href="/projects" className="hover:text-[#d6b98c] transition">
              Projects
            </a>

            <a href="/#services" className="hover:text-[#d6b98c] transition">
              Services
            </a>

            <a href="/contact" className="text-[#d6b98c]">
              Contact
            </a>

          </div>

        </div>

      </nav>

      {/* Hero Section */}
      <section className="relative pt-52 pb-32 bg-black text-center overflow-hidden">

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,185,140,0.18),transparent_55%)]"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">

          <p className="uppercase tracking-[0.45em] text-sm text-[#d6b98c] mb-8">
            Contact Us
          </p>

          <h1 className="text-6xl md:text-8xl font-bold leading-[1.05]">
            Let’s Create
            <span className="block text-[#d6b98c]">
              Beautiful Spaces
            </span>
          </h1>

          <p className="mt-10 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We craft luxurious interiors designed around elegance,
            comfort, and timeless sophistication for modern living.
          </p>

        </div>

      </section>

      {/* Contact Section */}
<section className="py-28 px-6 md:px-10 bg-[#0a0a0a]">

  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

    {/* LEFT SIDE */}
<div className="bg-gradient-to-br from-[#111111] to-[#1c1c1c] rounded-[42px] border border-white/10 px-10 py-12 md:px-12 md:py-14 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

  <p className="uppercase tracking-[0.4em] text-sm text-[#d6b98c] mb-6">
    Luxury Consultation
  </p>

  <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-white">
    Contact Info
  </h2>

  <p className="mt-8 text-lg text-gray-400 leading-[1.9] max-w-xl">
    Whether it’s a luxury residence, modern workspace,
    or premium commercial interior — our studio crafts
    timeless spaces designed around elegance and comfort.
  </p>

  {/* INFO CARDS */}
<div className="mt-12 space-y-4">

  {/* PHONE */}
  <div className="flex items-center gap-8 bg-white/[0.04] border border-white/10 rounded-[28px] px-10 py-5 hover:bg-white/[0.07] transition-all duration-300">

    {/* ICON */}
    <div className="text-[#d6b98c] text-3xl leading-none flex-shrink-0 pl-2">
      ☎
    </div>

    {/* TEXT */}
    <div>

      <p className="uppercase tracking-[0.35em] text-[11px] text-[#d6b98c] mb-1">
        Phone
      </p>

      <h3 className="text-[30px] font-semibold text-white tracking-tight leading-none">
        7709 943 271
      </h3>

    </div>

  </div>

  {/* EMAIL */}
  <div className="flex items-center gap-8 bg-white/[0.04] border border-white/10 rounded-[28px] px-10 py-5 hover:bg-white/[0.07] transition-all duration-300">

    {/* ICON */}
    <div className="text-[#d6b98c] text-3xl leading-none flex-shrink-0 pl-2">
      ✉
    </div>

    {/* TEXT */}
    <div>

      <p className="uppercase tracking-[0.35em] text-[11px] text-[#d6b98c] mb-1">
        Email
      </p>

      <h3 className="text-[28px] font-semibold text-white tracking-tight break-all leading-none">
        kulalinteriors@gmail.com
      </h3>

    </div>

  </div>

  {/* LOCATION */}
  <div className="flex items-center gap-8 bg-white/[0.04] border border-white/10 rounded-[28px] px-10 py-5 hover:bg-white/[0.07] transition-all duration-300">

    {/* ICON */}
    <div className="text-[#d6b98c] text-4xl leading-none flex-shrink-0 pl-2">
      ⌂
    </div>

    {/* TEXT */}
    <div>

      <p className="uppercase tracking-[0.35em] text-[11px] text-[#d6b98c] mb-1">
        Location
      </p>

     <a
  href="https://maps.google.com/?q=Pune,Maharashtra,India"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[28px] font-semibold text-white tracking-tight leading-none hover:text-[#d6b98c] transition duration-300"
>
  Pune, Maharashtra, India
</a>

    </div>

  </div>

</div>
{/* GOOGLE MAP */}
<div className="mt-8 overflow-hidden rounded-[28px] border border-white/10">

  <iframe
  src="https://www.google.com/maps?q=Kulal%20Interiors&output=embed"
  width="100%"
  height="260"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="grayscale hover:grayscale-0 transition duration-500"
></iframe>

</div>

</div>
    {/* RIGHT SIDE */}
    <div className="bg-gradient-to-br from-[#111111] to-[#1c1c1c] rounded-[36px] border border-white/10 p-12 md:p-14 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

      <p className="uppercase tracking-[0.4em] text-sm text-[#d6b98c] mb-5">
        Get In Touch With Us
      </p>

      <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-10 text-white">
        Leave a Message
      </h2>

      <form className="space-y-5">

        <input
          type="text"
          placeholder="Name"
          className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-lg text-white placeholder:text-gray-500 outline-none focus:border-[#d6b98c] focus:bg-black/60 transition"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-lg text-white placeholder:text-gray-500 outline-none focus:border-[#d6b98c] focus:bg-black/60 transition"
        />

<input
          type="Contact"
          placeholder="Contact number"
          className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-lg text-white placeholder:text-gray-500 outline-none focus:border-[#d6b98c] focus:bg-black/60 transition"
        />
        

        <input
          type="text"
          placeholder="Project Type"
          className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-lg text-white placeholder:text-gray-500 outline-none focus:border-[#d6b98c] focus:bg-black/60 transition"
        />

        <textarea
          rows={5}
          placeholder="Tell us about your project..."
          className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-lg text-white placeholder:text-gray-500 outline-none focus:border-[#d6b98c] focus:bg-black/60 transition resize-none"
        ></textarea>

        <button
          type="submit"
          className="bg-[#d6b98c] text-black px-10 py-5 rounded-full text-lg font-semibold hover:bg-white transition duration-300 shadow-[0_10px_30px_rgba(214,185,140,0.35)]"
        >
          Submit Form
        </button>

      </form>

    </div>

  </div>

</section>

    </main>
  );
}