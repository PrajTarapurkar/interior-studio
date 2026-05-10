export default function ProjectsPage() {
  return (
    <main className="bg-[#f8f5f1] min-h-screen text-black">

  {/* Navbar */}
  <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-black/70 via-black/50 to-black/70 backdrop-blur-xl border-b border-white/10 shadow-2xl">

    <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

      {/* Logo Section */}
      <div className="flex items-center gap-4">

        <img
          src="/images/logo.png"
          alt="Logo"
          className="h-16 md:h-20 w-auto object-contain rounded-full 
          shadow-[0_0_25px_rgba(255,215,160,0.35)]"
        />

        <div>

          <h1 className="text-2xl md:text-3xl font-semibold tracking-wide text-white leading-none">
            Interior Studio
          </h1>

          <p className="uppercase tracking-[0.35em] text-[10px] text-[#d6b98c] mt-1">
            Luxury Interior Design
          </p>

        </div>

      </div>

      {/* Navigation */}
      <div className="hidden md:flex gap-10 text-sm uppercase tracking-[0.2em] font-medium text-white">

        <a href="/" className="hover:text-[#d6b98c] transition duration-300">
          Home
        </a>

        <a href="/projects" className="text-[#d6b98c]">
          Projects
        </a>

        <a href="#" className="hover:text-[#d6b98c] transition duration-300">
          Services
        </a>

        <a href="contact" className="hover:text-[#d6b98c] transition duration-300">
          Contact
        </a>

      </div>

    </div>

  </nav>
      {/* Header */}
      <section className="py-32 text-center bg-black text-white">

        <p className="uppercase tracking-[0.4em] text-sm text-[#d6b98c] mb-4">
          Portfolio
        </p>

        <h1 className="text-6xl font-bold">
          Our Interior Projects
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          Explore our curated collection of luxury residential and commercial interiors crafted with timeless elegance.
        </p>

      </section>

      {/* Projects Grid */}
<section className="py-24 px-8">

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

    {/* Project 1 */}
    <a href="/projects/living-room">

      <div className="bg-white rounded-3xl overflow-hidden shadow-xl group hover:scale-105 transition duration-300">

        <div className="overflow-hidden">
          <img
            src="/images/project1.jpg"
            alt="Project"
            className="h-[420px] w-full object-cover group-hover:scale-110 transition duration-700"
          />
        </div>

        <div className="p-8">

          <h2 className="text-3xl font-semibold">
            Full Luxury Interior
          </h2>

          <p className="mt-2 uppercase tracking-widest text-sm text-[#b08d57]">
            Pune • Residential
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Elegant modern villa interior crafted with warm lighting, premium textures, and timeless aesthetics.
          </p>

        </div>

      </div>

    </a>

    {/* Project 2 */}
    <a href="/projects/bedroom">

      <div className="bg-white rounded-3xl overflow-hidden shadow-xl group hover:scale-105 transition duration-300">

        <div className="overflow-hidden">
          <img
            src="/images/project2.jpg"
            alt="Project"
            className="h-[420px] w-full object-cover group-hover:scale-110 transition duration-700"
          />
        </div>

        <div className="p-8">

          <h2 className="text-3xl font-semibold">
            Contemporary Bedroom
          </h2>

          <p className="mt-2 uppercase tracking-widest text-sm text-[#b08d57]">
            Mumbai • Luxury Home
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Sophisticated neutral palette bedroom designed for comfort, calmness, and luxury living.
          </p>

        </div>

      </div>

    </a>

    {/* Project 3 */}
    <a href="/projects/kitchen">

      <div className="bg-white rounded-3xl overflow-hidden shadow-xl group hover:scale-105 transition duration-300">

        <div className="overflow-hidden">
          <img
            src="/images/project3.jpg"
            alt="Project"
            className="h-[420px] w-full object-cover group-hover:scale-110 transition duration-700"
          />
        </div>

        <div className="p-8">

          <h2 className="text-3xl font-semibold">
            Modern Luxury Kitchen
          </h2>

          <p className="mt-2 uppercase tracking-widest text-sm text-[#b08d57]">
            Bangalore • Interior Styling
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Minimal modern kitchen blending premium functionality with timeless elegance.
          </p>

        </div>

      </div>

    </a>

  </div>

</section>

    </main>
  );
}