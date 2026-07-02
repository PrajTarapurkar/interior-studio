import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { notFound } from "next/navigation";
import Image from "next/image";




const projects = {
  "living-room": {
  title: "Modern Living Room",

  owner: "Tarapurkar Family",

  location: "Pune, Maharashtra",

  category: "Residential",

  area: "3200 sq.ft",

  completed: "2025",

  style: "Modern Luxury",

  image: "/images/project1.jpg",

  requirements: [
    "Luxury modern interiors",
    "Open floor planning",
    "Premium furniture",
    "Warm ambient lighting",
    "Smart storage solutions",
  ],


  description:
    "This residence was designed to create a luxurious yet welcoming atmosphere. Premium materials, elegant lighting, and carefully selected furnishings combine to deliver a timeless living experience.",

  gallery: [
    "/images/project1.jpg",
    "/images/project1-2.jpg",
    "/images/project1-3.jpg",
    "/images/project1-4.jpg",
    "/images/project1-5.jpg",
    "/images/project1-6.jpg",
  ],

},


  bedroom: {
    title: "Contemporary Bedroom",

owner: "Sharma Family",

location: "Mumbai, Maharashtra",

category: "Residential",

area: "1800 sq.ft",

completed: "2025",

style: "Contemporary Luxury",

image: "/images/project2.jpg",

    requirements: [
"Premium wardrobe",
"Ambient lighting",
"Wooden flooring",
"Luxury furniture",
],

description:
      "Sophisticated modern bedroom with calming neutral aesthetics.",
  
    gallery: [
  "/images/project2.jpg",
  "/images/project2.jpg",
  "/images/project2.jpg",
  "/images/project2.jpg",
  "/images/project2.jpg",
  "/images/project2.jpg",
],

    
    },

  kitchen: {
   title: "Luxury Kitchen",

owner: "Patil Family",

location: "Bengaluru, Karnataka",

category: "Residential",

area: "1500 sq.ft",

completed: "2024",

style: "Modern Minimal",

image: "/images/project3.jpg",

    requirements: [
"Premium wardrobe",
"Ambient lighting",
"Wooden flooring",
"Luxury furniture",
],
description:
      "Modern functionality blended with timeless luxury aesthetics.",
  
    gallery: [
  "/images/project2.jpg",
  "/images/project2.jpg",
  "/images/project2.jpg",
  "/images/project2.jpg",
  "/images/project2.jpg",
  "/images/project2.jpg",
],

    
    },

  office: {
  title: "Corporate Office",

  owner: "Vertex Technologies Pvt. Ltd.",

  location: "Pune, Maharashtra",

  category: "Commercial",

  area: "5200 sq.ft",

  completed: "2025",

  style: "Corporate Modern",

  image: "/images/project4.jpg",

  requirements: [
    "Executive cabin interiors",
    "Open workstation layout",
    "Conference room design",
    "Acoustic ceiling solutions",
    "Premium reception area",
    "Smart lighting automation",
  ],

  description:
    "A premium corporate office designed to maximize productivity while maintaining a sophisticated and modern work environment.",

  gallery: [
    "/images/project4.jpg",
    "/images/project4-2.jpg",
    "/images/project4-3.jpg",
    "/images/project4-4.jpg",
    "/images/project4-5.jpg",
    "/images/project4-6.jpg",
  ],
},
cafe: {
  title: "Luxury Café",

  owner: "The Brew House",

  location: "Mumbai, Maharashtra",

  category: "Commercial",

  area: "2400 sq.ft",

  completed: "2024",

  style: "Industrial Luxury",

  image: "/images/project5.jpg",

  requirements: [
    "Instagram-worthy interiors",
    "Ambient lighting",
    "Premium seating",
    "Custom coffee counter",
    "Indoor plants",
    "Decorative ceiling design",
  ],

  description:
    "A modern café designed with luxurious materials, warm lighting and elegant finishes to create an unforgettable customer experience.",

  gallery: [
    "/images/project5.jpg",
    "/images/project5-2.jpg",
    "/images/project5-3.jpg",
    "/images/project5-4.jpg",
    "/images/project5-5.jpg",
    "/images/project5-6.jpg",
  ],
},
showroom: {
  title: "Premium Showroom",

  owner: "Elite Furnishings",

  location: "Hyderabad, Telangana",

  category: "Commercial",

  area: "4100 sq.ft",

  completed: "2025",

  style: "Luxury Contemporary",

  image: "/images/project6.jpg",

  requirements: [
    "Luxury display units",
    "Premium flooring",
    "Designer lighting",
    "Product display zones",
    "Customer lounge",
    "Modern reception",
  ],

  description:
    "Designed to elevate the shopping experience through luxurious materials, elegant lighting and premium display concepts.",

  gallery: [
    "/images/project6.jpg",
    "/images/project6-2.jpg",
    "/images/project6-3.jpg",
    "/images/project6-4.jpg",
    "/images/project6-5.jpg",
    "/images/project6-6.jpg",
  ],
},
boutique: {
  title: "Designer Boutique",

  owner: "Aura Fashion Studio",

  location: "Ahmedabad, Gujarat",

  category: "Commercial",

  area: "2200 sq.ft",

  completed: "2024",

  style: "Elegant Minimal",

  image: "/images/project7.jpg",

  requirements: [
    "Luxury clothing displays",
    "Premium fitting rooms",
    "Decorative lighting",
    "Modern billing counter",
    "Elegant waiting area",
    "Designer mirrors",
  ],

  description:
    "An elegant boutique designed to showcase premium fashion collections with sophisticated interiors and luxurious finishes.",

  gallery: [
    "/images/project7.jpg",
    "/images/project7-2.jpg",
    "/images/project7-3.jpg",
    "/images/project7-4.jpg",
    "/images/project7-5.jpg",
    "/images/project7-6.jpg",
  ],
},

clinic: {
  title: "Modern Healthcare Clinic",

  owner: "LifeCare Clinic",

  location: "Nagpur, Maharashtra",

  category: "Commercial",

  area: "2800 sq.ft",

  completed: "2025",

  style: "Modern Healthcare",

  image: "/images/project9.jpg",

  requirements: [
    "Luxury waiting lounge",
    "Patient-friendly interiors",
    "Doctor consultation rooms",
    "Premium reception",
    "Soft lighting",
    "Modern storage solutions",
  ],

  description:
    "A modern healthcare facility designed to provide comfort, functionality and a premium patient experience through contemporary interiors.",

  gallery: [
    "/images/project9.jpg",
    "/images/project9-2.jpg",
    "/images/project9-3.jpg",
    "/images/project9-4.jpg",
    "/images/project9-5.jpg",
    "/images/project9-6.jpg",
  ],
},
}


export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects[slug as keyof typeof projects];

  if (!project) {
  notFound();
}

  return (
    
    <>
      <Navbar />

<main className="bg-black min-h-screen text-white overflow-x-hidden">
       

        {/* ================= PROJECT DETAILS ================= */}

<section className="bg-black py-30 px-5 sm:px-6 md:px-8 lg:px-12">

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT IMAGE */}

    <div>

      <Image
        src={project.image}
        alt={project.title}
        width={900}
        height={700}
        className="rounded-[28px] w-full object-cover"
      />

    </div>

    {/* RIGHT CONTENT */}

    <div>

      <p className="uppercase tracking-[0.35em] text-[#d6b98c] text-sm">

        {project.category}

      </p>

      <h2 className="mt-4 text-[clamp(2rem,5vw,4rem)] font-bold">

        {project.title}

      </h2>

      {/* OWNER */}

      <div className="mt-8">

        <h4 className="text-[#d6b98c] uppercase tracking-[0.25em] text-sm">

          Owner

        </h4>

        <p className="mt-2 text-lg">

          {project.owner}

        </p>

      </div>

      {/* LOCATION */}

      <div className="mt-8">

        <h4 className="text-[#d6b98c] uppercase tracking-[0.25em] text-sm">

          Location

        </h4>

        <p className="mt-2 text-lg">

          {project.location}

        </p>

      </div>

      {/* REQUIREMENTS */}

      <div className="mt-8">

        <h4 className="text-[#d6b98c] uppercase tracking-[0.25em] text-sm">

          Requirements

        </h4>

        <ul className="mt-4 space-y-3">

          {project.requirements.map((item, index) => (

            <li key={index} className="flex gap-3">

              <span className="text-[#d6b98c]">✓</span>

              <span>{item}</span>

            </li>

          ))}

        </ul>

      </div>

      {/* DESCRIPTION */}

      <div className="mt-10">

        <h4 className="text-[#d6b98c] uppercase tracking-[0.25em] text-sm">

          Design Approach

        </h4>

        <p className="mt-4 leading-8 text-gray-300">

          {project.description}

        </p>

      </div>

    </div>

  </div>

</section>

{/* ================= PROJECT GALLERY ================= */}

<section className="py-20 px-5 sm:px-6 md:px-8 lg:px-12 bg-black">

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-14">

      <p className="uppercase tracking-[0.4em] text-[#d6b98c] text-sm">
        Gallery
      </p>

      <h2 className="mt-4 text-[clamp(2rem,5vw,4rem)] font-bold">
        Project Showcase
      </h2>

    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {project.gallery.map((image, index) => (

        <div
          key={index}
          className="group overflow-hidden rounded-[24px] border border-[#d6b98c]/20"
        >

          <Image
            src={image}
            alt={`${project.title} ${index + 1}`}
            width={700}
            height={500}
            className="
              w-full
              h-[260px]
              md:h-[320px]
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />

        </div>

      ))}

    </div>

  </div>

</section>

{/* ================= RELATED PROJECTS ================= */}

<section className="py-24 px-5 sm:px-6 md:px-8 lg:px-12 bg-black">

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">

      <p className="uppercase tracking-[0.4em] text-[#d6b98c] text-sm">
        Portfolio
      </p>

      <h2 className="mt-4 text-[clamp(2rem,5vw,4rem)] font-bold">
        Explore More Projects
      </h2>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {Object.entries(projects)
        .filter(([key]) => key !== slug)
        .slice(0, 3)
        .map(([key, item]) => (

          <a
            key={key}
            href={`/projects/${key}`}
            className="
              group
              overflow-hidden
              rounded-[28px]
              border
              border-[#d6b98c]/20
              bg-[#0f0f0f]
              hover:border-[#d6b98c]/60
              transition-all
              duration-500
            "
          >

            <div className="overflow-hidden">

              <Image
                src={item.image}
                alt={item.title}
                width={700}
                height={500}
                className="
                  w-full
                  h-[260px]
                  object-cover
                  group-hover:scale-105
                  transition-transform
                  duration-700
                "
              />

            </div>

            <div className="p-6">

              <p className="uppercase tracking-[0.35em] text-[#d6b98c] text-xs">
                {item.category}
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-400">
                {item.location}
              </p>

            </div>

          </a>

      ))}

    </div>

  </div>

</section>

{/* ================= CALL TO ACTION ================= */}

<section className="relative bg-black py-20 px-5 sm:px-6 md:px-8 lg:px-12 overflow-hidden">

  {/* Soft Gold Glow */}
  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
    <div className="h-[420px] w-[420px] rounded-full bg-[#d6b98c]/5 blur-[160px]" />
  </div>

  <div className="relative z-10 mx-auto max-w-5xl text-center">

    <p className="uppercase tracking-[0.45em] text-[#d6b98c] text-sm">
      LET'S WORK TOGETHER
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

      </main>
      <Footer />
    </>
  );
}