"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { siteUrlPaths } from "@/config/site";

const cinematicEase = [0.22, 1, 0.36, 1] as const;

export function HeroIntro() {
  const shouldReduceMotion = useReducedMotion();

  const entrance = (delay: number) => ({
    duration: shouldReduceMotion ? 0 : 0.72,
    delay: shouldReduceMotion ? 0 : delay,
    ease: cinematicEase,
  });

  return (
    <section className="cinematic-hero__stage" aria-label="Introduction">
      <div className="cinematic-hero__copy">
        <motion.p
          className="cinematic-hero__eyebrow"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={entrance(0.22)}
        >
          INDEPENDENT FILMMAKER &amp; VIDEO EDITOR
        </motion.p>

        <h1 className="cinematic-hero__title">
          <span className="cinematic-hero__line">
            <motion.span
              className="cinematic-hero__line-inner"
              initial={shouldReduceMotion ? false : { y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ ...entrance(0.28), duration: shouldReduceMotion ? 0 : 0.9 }}
            >
              EVERY FRAME
            </motion.span>
          </span>
          <span className="cinematic-hero__line">
            <motion.span
              className="cinematic-hero__line-inner"
              initial={shouldReduceMotion ? false : { y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ ...entrance(0.4), duration: shouldReduceMotion ? 0 : 0.9 }}
            >
              TELLS A STORY.
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="cinematic-hero__description"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={entrance(0.62)}
        >
          Transforming ideas into cinematic experiences through film,
          storytelling, and visual creativity.
        </motion.p>

        <motion.div
          className="cinematic-hero__actions"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={entrance(0.78)}
        >
          <Link
            href={siteUrlPaths.works}
            className="cinematic-hero__cta"
          >
            <span>EXPLORE MY WORK</span>
            <ArrowUpRight
              className="cinematic-hero__arrow"
              aria-hidden="true"
              size={16}
              strokeWidth={1.8}
            />
          </Link>
          <span className="cinematic-hero__reel-label">
            <span className="cinematic-hero__reel-dot" aria-hidden="true" />
            SHOWREEL / 2026
          </span>
        </motion.div>
      </div>

      <motion.p
        className="cinematic-hero__signature"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={entrance(0.84)}
      >
        <span>Images</span>
        <span>that</span>
        <span>move</span>
      </motion.p>
    </section>
  );
}

