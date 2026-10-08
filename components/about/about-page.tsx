"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { siteConfig } from "@/config/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function AboutPage() {
  const reduceMotion = useReducedMotion();
  const transition = (delay = 0) => ({
    duration: reduceMotion ? 0 : 0.8,
    delay: reduceMotion ? 0 : delay,
    ease,
  });

  return (
    <main className="about-page" aria-label="About Gonzalo Arzamendia">
      <section className="about-page__hero">
        <div className="about-page__portrait-wrap">
          <motion.div
            className="about-page__portrait"
            initial={reduceMotion ? false : { clipPath: "inset(100% 0 0 0)", y: 18 }}
            animate={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
            transition={transition(0.15)}
          >
            <Image
              src="/images/showreel-poster.png"
              alt="Portrait placeholder — replace with Gonzalo Arzamendia's portrait"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 56vw"
              className="about-page__portrait-image"
            />
            <div className="about-page__portrait-placeholder">
              <span>PORTRAIT / 001</span>
            </div>
          </motion.div>
          <p className="about-page__caption">THE PERSON BEHIND THE FRAME</p>
          <Link className="about-page__curriculum" href="/curriculum">
            CURRICULUM <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>

        <div className="about-page__intro">
          <motion.p className="about-page__eyebrow" initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={transition(0.3)}>
            THE PERSON BEHIND THE FRAME
          </motion.p>
          <motion.h1 className="about-page__title" initial={reduceMotion ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={transition(0.4)}>
            Images that move
          </motion.h1>
          <motion.p className="about-page__name" initial={reduceMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={transition(0.55)}>
            {siteConfig.personal.firstName} {siteConfig.personal.lastName}
          </motion.p>
          <motion.div className="about-page__bio" initial={reduceMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={transition(0.65)}>
            <p>I&apos;m a filmmaker and visual storyteller driven by a simple belief: every image has the power to make someone feel something.</p>
            <p>Through filmmaking, editing, and creative direction, I seek to make pictures that create a strong emotional link between audience and art.</p>
          </motion.div>
          <span className="about-page__meta">FRAME 01 / ABOUT</span>
        </div>
      </section>

    </main>
  );
}

export function CurriculumViewer() {
  return (
    <main className="curriculum-page" aria-label="Curriculum">
      <div className="curriculum-page__header">
        <p className="about-page__eyebrow">CURRICULUM / 01</p>
        <h1>CURRICULUM</h1>
        <p>The curriculum PDF will appear here when it is added to <code>/public/documents/curriculum.pdf</code>.</p>
      </div>
      <div className="curriculum-page__empty" role="status">
        <span>DOCUMENT / NOT YET AVAILABLE</span>
        <p>Add the PDF locally to enable the embedded viewer and download link.</p>
      </div>
    </main>
  );
}
