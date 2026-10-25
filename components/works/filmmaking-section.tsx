"use client";

import { motion } from "motion/react";
import type { FilmmakingProject } from "@/config/works";

interface FilmmakingSectionProps {
  projects: FilmmakingProject[];
}

export function FilmmakingSection({ projects }: FilmmakingSectionProps) {
  return (
    <section
      id="filmmaking-section"
      className="works-filmmaking"
      aria-labelledby="filmmaking-title"
    >
      <div className="works-filmmaking__header">
        <span className="works-eyebrow">01 — FILMMAKING</span>
        <h2 id="filmmaking-title" className="works-section-title">
          Film &amp; Video
        </h2>
        <p className="works-section-desc">
          Cinematic work spanning documentaries, music videos, narrative shorts,
          and commercial films.
        </p>
      </div>

      <div className="works-filmmaking__grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            className="film-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Video / Thumbnail area */}
            <div className="film-card__media">
              {project.videoUrl ? (
                project.videoUrl.includes('youtu') ? (
                  <div className="film-card__thumb-wrap">
                    <iframe
                      src={`https://www.youtube.com/embed/${project.videoUrl.split('/').pop()}`}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="film-card__video-embed"
                    />
                  </div>
                ) : (
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="film-card__play-link"
                    aria-label={`Watch ${project.title}`}
                  >
                    <div className="film-card__thumb-wrap">
                      <div className="film-card__thumb-placeholder">
                        <span className="film-card__category">
                          {project.category}
                        </span>
                      </div>
                      <div className="film-card__play-btn" aria-hidden="true">
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                )
              ) : (
                <div className="film-card__thumb-wrap">
                  <div className="film-card__thumb-placeholder">
                    <span className="film-card__category">
                      {project.category}
                    </span>
                  </div>
                </div>
              )}
              <div className="film-card__duration">{project.duration}</div>
            </div>

            {/* Info */}
            <div className="film-card__info">
              <div className="film-card__meta">
                <span className="film-card__year">{project.year}</span>
                <span className="film-card__role">{project.role}</span>
              </div>
              <h3 className="film-card__title">{project.title}</h3>
              <p className="film-card__subtitle">{project.subtitle}</p>
              <p className="film-card__desc">{project.description}</p>
              {project.videoUrl && (
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="film-card__watch"
                >
                  Watch Film
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 13L13 3M13 3H5M13 3v8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
