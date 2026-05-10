const projects = {
  "living-room": {
    title: "Modern Living Room",
    image: "/images/project1.jpg",
    description:
      "Elegant minimal luxury interior concept with warm textures and premium finishes.",
  },

  bedroom: {
    title: "Contemporary Bedroom",
    image: "/images/project2.jpg",
    description:
      "Sophisticated modern bedroom with calming neutral aesthetics.",
  },

  kitchen: {
    title: "Luxury Kitchen",
    image: "/images/project3.jpg",
    description:
      "Modern functionality blended with timeless luxury aesthetics.",
  },
};

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects[slug as keyof typeof projects];

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center text-4xl">
        Project Not Found
      </div>
    );
  }

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-black/70 via-black/50 to-black/70 backdrop-blur-xl border-b border-white/10 shadow-2xl">

        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

          {/* Logo */}
          <div className="flex items-center gap-4">

            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-16 md:h-20 w-auto object-contain rounded-full shadow-[0_0_25px_rgba(255,215,160,0.35)]"
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

            <a href="/projects" className="hover:text-[#d6b98c] transition duration-300">
              Projects
            </a>

            <a href="/#services" className="hover:text-[#d6b98c] transition duration-300">
              Services
            </a>

            <a href="/contact" className="hover:text-[#d6b98c] transition duration-300">
              Contact
            </a>

          </div>

        </div>

      </nav>

      <main className="bg-[#f8f5f1] min-h-screen text-black">

        {/* Hero Section */}
        <section className="relative h-[70vh]">

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">

            <p className="uppercase tracking-[0.4em] text-sm text-[#d6b98c] mb-6">
              Interior Project
            </p>

            <h1 className="text-5xl md:text-7xl font-bold">
              {project.title}
            </h1>

          </div>

        </section>

        {/* Project Details */}
        <section className="py-24 px-8">

          <div className="max-w-5xl mx-auto">

            <h2 className="text-4xl font-bold mb-8">
              Project Overview
            </h2>

            <p className="text-xl text-gray-700 leading-relaxed">
              {project.description}
            </p>

            {/* Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">

              <img
                src={project.image}
                alt=""
                className="rounded-3xl h-[400px] w-full object-cover"
              />

              <img
                src={project.image}
                alt=""
                className="rounded-3xl h-[400px] w-full object-cover"
              />

            </div>

          </div>

        </section>

      </main>
    </>
  );
}