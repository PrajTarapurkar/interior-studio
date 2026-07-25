

import { motion } from "framer-motion";


import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/contacts/Hero";
import ContactInfo from "@/components/contacts/ContactInfo";
import ContactForm from "@/components/contacts/ContactForm";
import { getContactHero } from "@/lib/getContactHero";
import { getContactInfo } from "@/lib/getContactInfo";
import { getContactForm } from "@/lib/getContactForm";

export default async function ContactPage() {

  const contactHero = await getContactHero();
  const contactInfo = await getContactInfo();
  const contactForm = await getContactForm();

    
  return (
    <main className="relative overflow-hidden">

<Navbar />

      {/* Animated Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

        <div className="absolute top-20 left-10 w-[250px] h-[250px] bg-[#d6b98c]/10 rounded-full blur-[120px] animate-pulse"></div>

        <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-white/5 rounded-full blur-[140px] animate-pulse"></div>

      </div>


      <Hero section={contactHero} />

      {/* Contact Section */}
      <section className="relative z-10 py-12 md:py-28 px-4 md:px-10 bg-[#0a0a0a]">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

         <ContactInfo section={contactInfo} />

<ContactForm section={contactForm} />

        </div>

      </section>

<Footer />

    </main>
  );
}