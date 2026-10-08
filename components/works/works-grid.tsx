"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

export interface WorksItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  href: string;
}

interface WorksGridProps {
  items: WorksItem[];
}

export function WorksGrid({ items }: WorksGridProps) {
  return (
    <section className="works-grid">
      <div className="works-grid__container">
        {items.map((item, index) => (
          <motion.article
            key={item.id}
            className="works-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Link href={item.href} className="works-item__link">
              <div className="works-item__image-wrapper">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="works-item__image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="works-item__overlay" />
              </div>

              <div className="works-item__content">
                <div className="works-item__metadata">
                  <span className="works-item__subtitle">{item.subtitle}</span>
                </div>

                <h3 className="works-item__title">{item.title}</h3>

                <p className="works-item__description">{item.description}</p>

                <div className="works-item__footer">
                  <span className="works-item__cta">View Project</span>
                  <svg
                    className="works-item__arrow"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12L11 7L6 2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
