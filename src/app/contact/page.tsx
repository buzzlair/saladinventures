"use client";

import { useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  const nameRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const name = nameRef.current?.value || "";
    const subject = subjectRef.current?.value || "";
    const message = messageRef.current?.value || "";
    setStatus("Sending...");
    try {
      await fetch("https://discord.com/api/webhooks/1408044579789213706/4Lip-DbCAhRbD0xFqjVe4Zd3rPDV_FKb3z8aqMMPiWVJQgBnqsAAyyQoOa2FTQx0-Jyt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `New contact submission:\nName: ${name}\nSubject: ${subject}\nMessage: ${message}`,
        }),
      });
      setStatus("Message sent!");
      if (nameRef.current) nameRef.current.value = "";
      if (subjectRef.current) subjectRef.current.value = "";
      if (messageRef.current) messageRef.current.value = "";
    } catch {
      setStatus("Failed to send. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <section className="px-6 py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">Contact Us</h1>
          <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit}>
            <input ref={nameRef} type="text" placeholder="Your Name" required className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground" />
            <input ref={subjectRef} type="text" placeholder="Subject" required className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground" />
            <textarea ref={messageRef} placeholder="Your Message" required className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground min-h-[120px]" />
            <button type="submit" className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all">Send Message</button>
          </form>
          {status && <div className="mt-4 text-base text-primary font-semibold">{status}</div>}
          <div className="mt-8 text-left text-muted-foreground text-base">
            <h2 className="font-bold text-lg mb-2 text-foreground">Business Address</h2>
            <address className="not-italic">
              F2-17-13, Tamarind Suites<br />
              63000 Cyberjaya, Selangor<br />
              Malaysia
            </address>
            <div className="mt-4">
              <span className="font-semibold text-foreground">Email:</span> <a href="mailto:team@saladinventures.com" className="underline text-primary">team@saladinventures.com</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
