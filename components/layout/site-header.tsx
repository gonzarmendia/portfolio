"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { displayName, siteConfig, type PortfolioPath } from "@/config/site";

type SiteHeaderProps = {
  currentPath: PortfolioPath;
};

export function SiteHeader({ currentPath }: SiteHeaderProps) {
  const shouldReduceMotion = useReducedMotion();
  const entranceTransition = {
    duration: shouldReduceMotion ? 0 : 0.72,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <motion.header
      className="site-header"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={entranceTransition}
    >
      <Link
        href="/"
        className="site-brand"
        aria-label={`${displayName}, home`}
        aria-current={currentPath === "/" ? "page" : undefined}
      >
        <span className="site-brand__name">{displayName}</span>
        <span className="site-brand__subtitle">
          {siteConfig.personal.subtitle}
        </span>
      </Link>

      <nav className="site-navigation" aria-label="Primary navigation">
        {siteConfig.navigation.map((item, index) => (
          <motion.div
            key={item.href}
            className="site-navigation__item"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ...entranceTransition,
              delay: shouldReduceMotion ? 0 : 0.12 + index * 0.08,
            }}
          >
            <Link
              href={item.href}
              className="site-navigation__link"
              aria-current={currentPath === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </nav>
    </motion.header>
  );
}
