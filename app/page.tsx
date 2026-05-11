export default function Home() {
  return (
    <main className="bg-white text-white overflow-hidden">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-2xl">

        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-12 md:h-20 w-auto drop-shadow-2xl"
            />

            <h1 className="text-base md:text-2xl font-bold tracking-wide">
              Interior Studio
            </h1>

          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-4 md:gap-10 text-[10px] md:text-sm uppercase tracking-[0.18em] font-medium overflow-x-auto whitespace-nowrap">

            <a href="/" className="hover:text-[#d6b98c] transition">
              Home
            </a>

            <a
              href="/projects"
              className="hover:text-[#d6b98c] transition"
            >
              Projects
            </a>

            <a
              href="/#services"
              className="hover:text-[#d6b98c] transition"
            >
              Services
            </a>

            <a
              href="/contact"
              className="hover:text-[#d6b98c] transition"
            >
              Contact
            </a>

          </div>

        </div>

      </nav>

      {/* Hero Section */}
      <section
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-center px-4 md:px-6"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl pt-24 md:pt-32">

          <p className="uppercase tracking-[0.4em] text-[11px] md:text-[18px] font-semibold text-[#d6b98c] mb-6">
            Luxury Interior Design
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)]">

            Designing Timeless
            <br />
            Modern Spaces

          </h1>

          <p className="mt-8 text-base md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-2">

            Creating elegant interiors that blend modern sophistication
            with timeless comfort and functionality.

          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">

            <a
              href="/projects"
              className="bg-[#d6b98c] text-black px-8 py-4 rounded-full font-semibold hover:bg-white transition duration-300 shadow-[0_10px_40px_rgba(214,185,140,0.35)]"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-300"
            >
              Contact Us
            </a>

          </div>

        </div>

      </section>

      {/* Projects Section */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-[#f8f5f1] text-black">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16 md:mb-20">

            <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
              Portfolio
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Featured Projects
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[1, 2, 3].map((item) => (

              <div
                key={item}
                className="bg-white rounded-3xl overflow-hidden shadow-xl group hover:-translate-y-2 transition duration-500"
              >

                <div className="overflow-hidden">

                  <img
                    src={`/images/project${item}.jpg`}
                    alt="Project"
                    className="h-[320px] md:h-[420px] w-full object-cover group-hover:scale-110 transition duration-700"
                  />

                </div>

                <div className="p-8">

                  <h3 className="text-2xl md:text-3xl font-semibold">

                    {item === 1
                      ? "Modern Living Room"
                      : item === 2
                      ? "Contemporary Bedroom"
                      : "Luxury Kitchen"}

                  </h3>

                  <p className="mt-3 text-gray-600 leading-relaxed">

                    Elegant luxury interiors crafted with timeless aesthetics.

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 md:py-28 px-4 md:px-8 bg-black text-white"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16 md:mb-20">

            <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-4">
              Services
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              What We Offer
            </h2>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "Residential Design",
              "Commercial Spaces",
              "Space Planning",
              "Furniture Styling",
            ].map((service) => (

              <div
                key={service}
                className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-[#d6b98c]/50 transition duration-300"
              >

                <h3 className="text-2xl font-semibold mb-4">
                  {service}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  Premium luxury interiors designed with modern elegance.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* About Section */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-[#f8f5f1] text-black">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Image */}
          <div>

            <img
              src="/images/about.jpg"
              alt="About"
              className="rounded-3xl shadow-2xl w-full h-[400px] md:h-[700px] object-cover"
            />

          </div>

          {/* Content */}
          <div>

            <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
              About Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">

              Creating Elegant Interiors That Inspire Everyday Living

            </h2>

            <p className="mt-8 text-base md:text-lg text-gray-600 leading-relaxed">

              We believe that every space should reflect timeless beauty,
              comfort, and functionality.

            </p>

            <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">

              From luxury residences to commercial environments,
              we create interiors that elevate experiences.

            </p>

            <button className="mt-10 bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition">

              Learn More

            </button>

          </div>

        </div>

      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-black text-white">

        <div className="max-w-6xl mx-auto text-center">

          <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">

            Let’s Design Your Dream Space

          </h2>

          <p className="mt-8 text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">

            Ready to transform your interiors? Contact us today
            to discuss your vision and create spaces that inspire.

          </p>

          {/* Contact Info */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

            {/* Email */}
            <div>

              <p className="text-gray-400 mb-3">
                Email
              </p>

              <p className="text-sm md:text-lg break-words">
                kulalinteriors@gmail.com
              </p>

            </div>

            {/* Phone */}
            <div>

              <p className="text-gray-400 mb-3">
                Phone
              </p>

              <p className="text-lg">
                +91 7709 943 271
              </p>

            </div>

            {/* Location */}
            <div>

              <p className="text-gray-400 mb-3">
                Location
              </p>

              <p className="text-sm md:text-lg">
                Pune, Maharashtra, India
              </p>

            </div>

          </div>

          {/* Premium Map */}
          <div className="mt-14 flex justify-center">

            <a
              href="https://www.google.com/search?client=ms-android-samsung-ss&hs=FuW&sca_esv=7cae0ba7a4b07b45&sxsrf=ANbL-n49-Qy11r5Qd7ZJS2KNmVYbWLjCPA%3A1778404975800&kgmid=%2Fg%2F11wx8p1g75&q=Kulal%20Interiors&shem=rimspwouoe&shndl=30&source=sh%2Fx%2Floc%2Fact%2Fm1%2F2&kgs=d225d3d8f74ca2e0"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >

              <div className="bg-white/5 border border-white/10 rounded-[50px] p-3 backdrop-blur-xl hover:border-[#d6b98c]/50 transition duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.45)]">

                <iframe
                  src="https://maps.google.com/maps?q=Pune,%20Maharashtra,%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-[300px] md:w-[650px] rounded-[40px] grayscale group-hover:grayscale-0 transition duration-500"
                ></iframe>

              </div>

            </a>

          </div>

          {/* Button */}
          <button className="mt-14 bg-white text-black px-10 py-5 rounded-full text-lg font-medium hover:bg-[#d6b98c] transition duration-300">

            Book Consultation

          </button>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-[#111] text-gray-400 py-8 px-4 md:px-8 border-t border-white/10">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-sm text-center md:text-left">
            © 2026 Interior Studio. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm uppercase tracking-widest">

            <a
              href="https://www.instagram.com/kulal_interiors?igsh=OHhwNm9yMHd6aDll"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d6b98c] transition"
            >
              Instagram
            </a>

            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d6b98c] transition"
            >
              Facebook
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}