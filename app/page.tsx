export default function Home() {
  return (
    <main className="bg-white text-white overflow-hidden">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-black/70 via-black/50 to-black/70 backdrop-blur-xl border-b border-white/10 shadow-2xl">

       <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">

          <div className="flex items-center gap-3">

  <img
    src="/images/logo.png"
    alt="Logo"
    className="h-14 md:h-20 w-auto drop-shadow-2xl"
  />

  <h1 className="text-lg md:text-2xl font-bold tracking-wide">
    Interior Studio
  </h1>

</div>

          <div className="flex items-center gap-4 md:gap-10 text-[11px] md:text-sm uppercase tracking-[0.18em] font-medium overflow-x-auto whitespace-nowrap">

  <a href="/" className="hover:text-[#d6b98c] transition">
    Home
  </a>

  <a
    href="/projects"
    className="hover:text-[#d6b98c] transition duration-300"
  >
    Projects
  </a>

  <a href="/#services" className="hover:text-[#d6b98c] transition">
    Services
  </a>

  <a href="/contact" className="hover:text-[#d6b98c] transition">
    Contact
  </a>

</div>

        </div>

      </nav>

      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl">

          <p className="uppercase tracking-[0.35em] text-[10px] text-[#d6b98c] mt-1">
  Luxury Interior Design
</p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Designing Timeless Modern Spaces
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Creating elegant interiors that blend modern sophistication with timeless comfort and functionality.
          </p>

         
        </div>

      </section>

      {/* Projects Section */}
      <section className="py-28 px-8 bg-[#f8f5f1] text-black">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
              Portfolio
            </p>

            <h2 className="text-5xl font-bold">
              Featured Projects
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* Card 1 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl group">

              <div className="overflow-hidden">
                <img
                  src="/images/project1.jpg"
                  alt="Project"
                  className="h-[420px] w-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-8">

                <h3 className="text-3xl font-semibold">
                  Modern Living Room
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  Elegant minimal luxury interior concept with warm textures and premium finishes.
                </p>

              </div>

            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl group">

              <div className="overflow-hidden">
                <img
                  src="/images/project2.jpg"
                  alt="Project"
                  className="h-[420px] w-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-8">

                <h3 className="text-3xl font-semibold">
                  Contemporary Bedroom
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  Sophisticated modern bedroom with calming neutral aesthetics.
                </p>

              </div>

            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl group">

              <div className="overflow-hidden">
                <img
                  src="/images/project3.jpg"
                  alt="Project"
                  className="h-[420px] w-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-8">

                <h3 className="text-3xl font-semibold">
                  Luxury Kitchen
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  Modern functionality blended with timeless luxury aesthetics.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>
{/* Services Section */}
<section className="py-28 px-8 bg-black text-white">

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-20">

      <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-4">
        Services
      </p>

      <h2 className="text-5xl font-bold">
        What We Offer
      </h2>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Service 1 */}
      <div className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition duration-300">

        <h3 className="text-2xl font-semibold mb-4">
          Residential Design
        </h3>

        <p className="text-gray-300 leading-relaxed">
          Elegant home interiors crafted with comfort and sophistication.
        </p>

      </div>

      {/* Service 2 */}
      <div className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition duration-300">

        <h3 className="text-2xl font-semibold mb-4">
          Commercial Spaces
        </h3>

        <p className="text-gray-300 leading-relaxed">
          Modern office and retail environments designed for experience.
        </p>

      </div>

      {/* Service 3 */}
      <div className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition duration-300">

        <h3 className="text-2xl font-semibold mb-4">
          Space Planning
        </h3>

        <p className="text-gray-300 leading-relaxed">
          Functional layouts that maximize beauty and usability.
        </p>

      </div>

      {/* Service 4 */}
      <div className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition duration-300">

        <h3 className="text-2xl font-semibold mb-4">
          Furniture Styling
        </h3>

        <p className="text-gray-300 leading-relaxed">
          Curated furniture and décor selections for timeless aesthetics.
        </p>

      </div>

    </div>

  </div>

</section>
{/* About Section */}
<section className="py-28 px-8 bg-[#f8f5f1] text-black">

  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

    {/* Left Side Image */}
    <div>

      <img
        src="/images/about.jpg"
        alt="About Interior Studio"
        className="rounded-3xl shadow-2xl w-full h-[700px] object-cover"
      />

    </div>

    {/* Right Side Content */}
    <div>

      <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
        About Us
      </p>

      <h2 className="text-5xl font-bold leading-tight">
        Creating Elegant Interiors That Inspire Everyday Living
      </h2>

      <p className="mt-8 text-lg text-gray-600 leading-relaxed">
        We believe that every space should reflect timeless beauty, comfort, and functionality.
        Our design philosophy combines modern sophistication with warm, inviting aesthetics
        tailored to each client’s lifestyle.
      </p>

      <p className="mt-6 text-lg text-gray-600 leading-relaxed">
        From luxury residences to commercial environments, we create interiors that elevate
        experiences and leave lasting impressions.
      </p>

      <button className="mt-10 bg-black text-white px-10 py-5 rounded-full hover:bg-gray-800 transition">
        Learn More
      </button>

    </div>

  </div>

</section>
{/* Contact Section */}
<section className="py-28 px-8 bg-black text-white">

  <div className="max-w-5xl mx-auto text-center">

    <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-4">
      Contact
    </p>

    <h2 className="text-5xl font-bold leading-tight">
      Let’s Design Your Dream Space
    </h2>

    <p className="mt-8 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
      Ready to transform your interiors? Contact us today to discuss your vision and create spaces that inspire.
    </p>

    {/* Contact Info */}
    <div className="mt-14 flex flex-col md:flex-row justify-center gap-10 text-lg">

      <div>
        <p className="text-gray-400 mb-2">
          Email
        </p>

        <p>
          praj@interiorstudio.com
        </p>
      </div>

      <div>
        <p className="text-gray-400 mb-2">
          Phone
        </p>

        <p>
          +91 9730011051
        </p>
      </div>

      <div>
        <p className="text-gray-400 mb-2">
          Location
        </p>

        <p>
          Joyville Hadapsar Annex, India
        </p>
      </div>

    </div>

    {/* Button */}
    <button className="mt-12 bg-white text-black px-10 py-5 rounded-full text-lg hover:bg-gray-200 transition">
      Book Consultation
    </button>

  </div>

</section>

{/* Footer */}
<footer className="bg-[#111] text-gray-400 py-8 px-8 border-t border-white/10">

  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

    <p>
      © 2026 Interior Studio. All rights reserved.
    </p>

    <div className="flex gap-6 text-sm uppercase tracking-widest">

  {/* Instagram */}
  <a
    href="https://instagram.com/_praj_tarapurkar_10"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#d6b98c] transition"
  >
    Instagram
  </a>

  {/* Facebook */}
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