"use client";

import { ArrowUpRight, Send } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { FormEvent, useState } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/config/site";

const ease = [0.22, 1, 0.36, 1] as const;

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="18" cy="6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ContactPage() {
  const reduceMotion = useReducedMotion();
  const [formState, setFormState] = useState<{
    status: "idle" | "success" | "error";
    message: string;
    mailtoUrl?: string;
  }>({
    status: "idle",
    message: "",
  });

  const transition = (delay = 0) => ({
    duration: reduceMotion ? 0 : 0.75,
    delay: reduceMotion ? 0 : delay,
    ease,
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = ((formData.get("name") as string) || "").trim();
    const email = ((formData.get("email") as string) || "").trim();
    const projectType = ((formData.get("projectType") as string) || "").trim();
    const message = ((formData.get("message") as string) || "").trim();

    if (!name || !email || !message) {
      setFormState({
        status: "error",
        message: "Please fill in all required fields (Name, Email, and Message).",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormState({
        status: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    const recipient = siteConfig.contact.email || "gonzalonicolas98@hotmail.com";
    const subject = projectType
      ? `[Portfolio Inquiry] ${projectType} — ${name}`
      : `[Portfolio Inquiry] Message from ${name}`;
    const body = `Name: ${name}
Email: ${email}
Project Type: ${projectType || "General Inquiry"}

Message:
${message}`;

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setFormState({
      status: "success",
      message: `Opening your email client to send to ${recipient}...`,
      mailtoUrl,
    });

    window.location.href = mailtoUrl;
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
            <a className="contact-page__email" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email} <ArrowUpRight aria-hidden="true" /></a>
            <a className="contact-page__social" href="https://www.instagram.com/gonzarmendia" target="_blank" rel="noreferrer"><InstagramIcon aria-hidden="true" /> <span>Gonzarmendia</span><ArrowUpRight aria-hidden="true" /></a>
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
          {formState.message ? (
            <p
              className={`contact-page__form-message ${
                formState.status === "error"
                  ? "contact-page__form-message--error"
                  : formState.status === "success"
                  ? "contact-page__form-message--success"
                  : ""
              }`}
              role={formState.status === "error" ? "alert" : "status"}
            >
              {formState.message}{" "}
              {formState.status === "success" && formState.mailtoUrl ? (
                <a href={formState.mailtoUrl} className="contact-page__form-message-link">
                  Click here if your email app didn&apos;t open.
                </a>
              ) : null}
            </p>
          ) : null}
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
