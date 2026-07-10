"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/contacts/Hero";
import ContactInfo from "@/components/contacts/ContactInfo";
import ContactForm from "@/components/contacts/ContactForm";

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
    <main className="relative overflow-hidden">

<Navbar />

      {/* Animated Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

        <div className="absolute top-20 left-10 w-[250px] h-[250px] bg-[#d6b98c]/10 rounded-full blur-[120px] animate-pulse"></div>

        <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-white/5 rounded-full blur-[140px] animate-pulse"></div>

      </div>


      <Hero />

      {/* Contact Section */}
      <section className="relative z-10 py-12 md:py-28 px-4 md:px-10 bg-[#0a0a0a]">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

         <ContactInfo />

<ContactForm
  form={form}
  sendEmail={sendEmail}
  loading={loading}
  success={success}
/>

        </div>

      </section>

<Footer />

    </main>
  );
}