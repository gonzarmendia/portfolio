"use client";

import { motion } from "motion/react";
import type { MarketingSubSection } from "@/config/works";

interface MarketingSectionProps {
  sections: MarketingSubSection[];
}

export function MarketingSection({ sections }: MarketingSectionProps) {
  return (
    <section
      id="marketing-section"
      className="works-marketing"
      aria-labelledby="marketing-title"
    >
      <div className="works-marketing__header">
        <span className="works-eyebrow">02 — MARKETING</span>
        <h2 id="marketing-title" className="works-section-title">
          Marketing &amp; Strategy
        </h2>
        <p className="works-section-desc">
          Campaign direction, social media strategy, creative direction, and
          visual identity work for brands and creators.
        </p>
      </div>

      <div className="works-marketing__body">
        {sections.map((section, sIdx) => (
          <motion.div
            key={section.id}
            className="marketing-subsection"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: sIdx * 0.08 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Subsection header */}
            <div className="marketing-subsection__header">
              <span className="marketing-subsection__label">
                {section.subtitle}
              </span>
              <h3 className="marketing-subsection__title">{section.title}</h3>
              <p className="marketing-subsection__desc">{section.description}</p>
            </div>

            {/* Projects grid */}
            <div className="marketing-subsection__grid">
              {section.projects.map((project, pIdx) => (
                <motion.article
                  key={project.id}
                  className="marketing-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: pIdx * 0.1 }}
                  viewport={{ once: true, margin: "-60px" }}
                >
                  <div className="marketing-card__thumb">
                    <div className="marketing-card__thumb-inner">
                      <span className="marketing-card__client">
                        {project.client}
                      </span>
                    </div>
                  </div>

                  <div className="marketing-card__content">
                    <div className="marketing-card__top">
                      <span className="marketing-card__year">
                        {project.year}
                      </span>
                      <span className="marketing-card__subtitle">
                        {project.subtitle}
                      </span>
                    </div>
                    <h4 className="marketing-card__title">{project.title}</h4>
                    <p className="marketing-card__desc">{project.description}</p>

                    {project.metrics && (
                      <p className="marketing-card__metrics">
                        {project.metrics}
                      </p>
                    )}

                    <ul className="marketing-card__deliverables" aria-label="Deliverables">
                      {project.deliverables.map((d) => (
                        <li key={d} className="marketing-card__deliverable">
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
