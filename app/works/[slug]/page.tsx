import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { projectsDetails } from "@/config/works";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsDetails[slug];

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} — ${project.subtitle}`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsDetails[slug];

  if (!project) {
    return (
      <main className="project-detail">
        <SiteHeader currentPath="/works" />
        <div className="project-detail__content">
          <p>Project not found. Please check the URL and try again.</p>
          <Link href="/works" className="project-detail__back-link">
            ← Back to Works
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="project-detail">
      <SiteHeader currentPath="/works" />

      <article className="project-detail__content">
        {/* Header Section */}
        <section className="project-detail__header">
          <div className="project-detail__header-content">
            <Link href="/works" className="project-detail__back-link">
              ← WORKS
            </Link>

            <h1 className="project-detail__title">{project.title}</h1>

            <div className="project-detail__metadata-grid">
              <div className="project-detail__metadata-item">
                <span className="project-detail__metadata-label">Category</span>
                <span className="project-detail__metadata-value">
                  {project.subtitle}
                </span>
              </div>

              {project.client && (
                <div className="project-detail__metadata-item">
                  <span className="project-detail__metadata-label">Client</span>
                  <span className="project-detail__metadata-value">
                    {project.client}
                  </span>
                </div>
              )}

              {project.year && (
                <div className="project-detail__metadata-item">
                  <span className="project-detail__metadata-label">Year</span>
                  <span className="project-detail__metadata-value">
                    {project.year}
                  </span>
                </div>
              )}

              {project.timeline && (
                <div className="project-detail__metadata-item">
                  <span className="project-detail__metadata-label">
                    Timeline
                  </span>
                  <span className="project-detail__metadata-value">
                    {project.timeline}
                  </span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Main Visual - Replace with video or your own imagery */}
        <section className="project-detail__visual">
          <div className="project-detail__image-wrapper">
            <Image
              src={`/images/works-${project.id}.png`}
              alt={project.title}
              fill
              className="project-detail__image"
              priority
              sizes="100vw"
            />
          </div>
        </section>

        {/* Description Section */}
        <section className="project-detail__description-section">
          <div className="project-detail__description-container">
            <div className="project-detail__description">
              <h2 className="project-detail__section-title">Overview</h2>
              <p className="project-detail__overview">
                {project.fullDescription || project.description}
              </p>
            </div>

            {(project.role || project.results) && (
              <aside className="project-detail__sidebar">
                {project.role && (
                  <div className="project-detail__sidebar-item">
                    <h3 className="project-detail__sidebar-title">Role</h3>
                    <p className="project-detail__sidebar-text">
                      {project.role}
                    </p>
                  </div>
                )}

                {project.results && (
                  <div className="project-detail__sidebar-item">
                    <h3 className="project-detail__sidebar-title">Results</h3>
                    <p className="project-detail__sidebar-text">
                      {project.results}
                    </p>
                  </div>
                )}

                {project.tools && project.tools.length > 0 && (
                  <div className="project-detail__sidebar-item">
                    <h3 className="project-detail__sidebar-title">Tools</h3>
                    <ul className="project-detail__tools-list">
                      {project.tools.map((tool) => (
                        <li key={tool} className="project-detail__tool">
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </aside>
            )}
          </div>
        </section>

        {/* Links Section */}
        {project.links && project.links.length > 0 && (
          <section className="project-detail__links-section">
            <div className="project-detail__links-container">
              <h2 className="project-detail__section-title">View Full Work</h2>
              <div className="project-detail__links">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.target || "_self"}
                    rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                    className="project-detail__link"
                  >
                    {link.label}
                    <svg
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
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Navigation to other projects */}
        <section className="project-detail__navigation">
          <Link href="/works" className="project-detail__nav-link">
            ← Back to All Works
          </Link>
        </section>
      </article>
    </main>
  );
}
