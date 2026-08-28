import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Donation Platform",
      description: "Crowdfunding platform with Stripe payments. Users can create campaigns, donate, and track progress. Includes gamification (XP, badges), admin dashboard, and PWA offline support.",
      technologies: ["PHP 8", "MySQL", "Stripe API", "JavaScript", "PWA"],
      category: "Full Stack",
      githubUrl: "https://github.com/tsegayes332-cell/donation-platform",
      liveUrl: null
    },
    {
      title: "Habesha Events",
      description: "Event discovery platform for Ethiopia. Browse, search, and filter events by city and category. Includes admin panel for event approval, social sharing, and Google Calendar integration.",
      technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "Prisma", "PostgreSQL"],
      category: "Full Stack",
      githubUrl: "https://github.com/tsegayes332-cell/habesha-events",
      liveUrl: "https://habesha-events-pied.vercel.app"
    },
    {
      title: "Beauty Salon Management System",
      description: "Web-based salon management with separate dashboards for customers, staff, and admins. Handles bookings, services, staff scheduling, and basic analytics.",
      technologies: ["React", "Node.js", "Express", "MySQL", "Bootstrap"],
      category: "Web Application",
      githubUrl: "https://github.com/tsegayes332-cell/beauty-salon",
      liveUrl: "https://beauty-salon-three-psi.vercel.app"
    },
    {
      title: "Farmers Marketplace App",
      description: "Final year project - a mobile marketplace connecting farmers with buyers. Farmers can list products, set prices, and chat with buyers directly.",
      technologies: ["React Native", "TypeScript", "Expo", "Node.js"],
      category: "Mobile Application",
      githubUrl: "https://github.com/tsegayes332-cell/FarmersMarketplace-",
      liveUrl: null
    },
    {
      title: "BSD Website",
      description: "Multi-page static website for an engineering firm. Includes sections for architecture, civil, IT, and sanitary engineering services with project showcases.",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Static Website",
      githubUrl: "https://github.com/tsegayes332-cell/bsd2",
      liveUrl: "https://bsd2-nine.vercel.app"
    },
    {
      title: "DevOps Mini Project",
      description: "Node.js application built as part of DevOps coursework. Demonstrates CI/CD concepts and deployment practices.",
      technologies: ["Node.js", "JavaScript"],
      category: "Backend",
      githubUrl: "https://github.com/tsegayes332-cell/devops-mini-project",
      liveUrl: null
    }
  ];

  const isRealRepo = (url) => /^https:\/\/github\.com\/[^/]+\/[^/]+$/.test(url);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block bg-primary/5 inline-block px-3 py-1 rounded-full">Portfolio</p>
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-subtitle">Web and mobile applications built with clean, practical code</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group bg-dark rounded-2xl overflow-hidden shadow-soft card-hover border border-light-gray flex flex-col"
            >
              <div className="relative h-40 bg-primary flex items-center justify-center">
                <span className="text-white/90 text-5xl font-bold tracking-tight">
                  {project.title.split(' ').slice(0, 2).map(w => w[0]).join('')}
                </span>
                <span className="absolute right-4 bottom-3 text-sm font-medium text-white/60">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-medium text-primary uppercase tracking-wider mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-text-secondary mb-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-light text-text-primary text-xs font-medium rounded-lg border border-light-gray"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-light-gray mt-auto">
                  {isRealRepo(project.githubUrl) && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-primary font-medium text-sm hover:text-primary-light transition-colors duration-300"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-primary font-medium text-sm hover:text-primary-light transition-colors duration-300"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;