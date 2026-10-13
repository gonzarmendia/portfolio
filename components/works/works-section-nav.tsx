"use client";

import { useCallback } from "react";

export function WorksSectionNav() {
  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="works-section-nav" aria-label="Jump to section">
      <button
        id="nav-filmmaking"
        className="works-section-nav__item"
        onClick={() => scrollTo("filmmaking-section")}
      >
        Filmmaking
      </button>
      <span className="works-section-nav__divider" aria-hidden="true">/</span>
      <button
        id="nav-marketing"
        className="works-section-nav__item"
        onClick={() => scrollTo("marketing-section")}
      >
        Marketing
      </button>
    </div>
  );
}
