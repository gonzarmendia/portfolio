"use client";

import { ArrowUpRight, Camera, Send } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { FormEvent, useState } from "react";
import { SiteHeader } from "@/components/layout/site-header";

const ease = [0.22, 1, 0.36, 1] as const;

export function ContactPage() {
  const reduceMotion = useReducedMotion();
  const [error, setError] = useState("");

  const transition = (delay = 0) => ({
    duration: reduceMotion ? 0 : 0.75,
    delay: reduceMotion ? 0 : delay,
    ease,
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("Message delivery is not configured yet. Please use the email address instead.");
  }

  return (
    <div className="contact-shell">
      <SiteHeader currentPath="/contact" />
      <main className="contact-page" aria-label="Contact Gonzalo Arzamendia">
      <section className="contact-page__workspace" aria-label="Contact information and message form">
        <motion.div className="contact-page__information" initial={reduceMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={transition(0.1)}>
          <p className="contact-page__eyebrow">TELL ME ABOUT YOUR PROJECT</p>
          <p className="contact-page__intro">From the first frame to the final cut, I&apos;m interested in thoughtful collaborations and stories with something to say.</p>
          <div className="contact-page__details">
            <span className="contact-page__label">GENERAL INQUIRIES</span>
            <a className="contact-page__email" href="mailto:gonzalonicolas98@hotmail.com">gonzalonicolas98@hotmail.com <ArrowUpRight aria-hidden="true" /></a>
            <a className="contact-page__social" href="https://www.instagram.com/gonzarmendia" target="_blank" rel="noreferrer"><Camera aria-hidden="true" /> <span>Gonzarmendia</span><ArrowUpRight aria-hidden="true" /></a>
          </div>
        </motion.div>

        <motion.form className="contact-page__form" onSubmit={handleSubmit} initial={reduceMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={transition(0.2)} noValidate>
          <ContactField label="Name" name="name" placeholder="Your name" required />
          <ContactField label="Email" name="email" type="email" placeholder="Your email address" required />
          <label className="contact-page__field">
            <span>Project Type</span>
            <select name="projectType" defaultValue=""><option value="" disabled>Select a project type</option><option>Film Production</option><option>Video Editing</option><option>Creative Direction</option><option>Marketing Campaign</option><option>Other</option></select>
          </label>
          <label className="contact-page__field"><span>Message</span><textarea name="message" placeholder="Tell me about your project..." rows={4} required /></label>
          {error ? <p className="contact-page__form-message" role="alert">{error}</p> : null}
          <button className="contact-page__submit" type="submit">SEND MESSAGE <Send aria-hidden="true" /></button>
        </motion.form>
      </section>

      </main>
    </div>
  );
}

function ContactField({ label, name, type = "text", placeholder, required = false }: { label: string; name: string; type?: string; placeholder: string; required?: boolean }) {
  return <label className="contact-page__field"><span>{label}</span><input name={name} type={type} placeholder={placeholder} required={required} /></label>;
}

export function ContactPageShell() {
  return <ContactPage />;
}
