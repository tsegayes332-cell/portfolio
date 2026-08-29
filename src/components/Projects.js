import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Habesha Events",
      description: "Bilingual event management platform for Ethiopian events with ticket purchasing, calendar integration, and admin moderation.",
      image: "/images/projects/habesha-events.png",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Express", "i18next", "Chapa", "REST API"],
      role: "Full-Stack Developer",
      keyFeatures: [
        "Bilingual Support (EN/AM) — full Amharic translations with i18next",
        "Ethiopian Calendar Integration — Gregorian-to-Ethiopian date converter",
        "Ticket Purchasing with Chapa — real payment processing with concurrency locking",
        "Admin Moderation Dashboard — approval workflow & invite-code admin signup"
      ],
      github: "https://github.com/tsegayes332-cell/habesha-251-events",
      demo: "https://habesha-events-pied.vercel.app",
      featured: true,
    },
    {
      id: 2,
      title: "BakeHub",
      description: "Bakery management system with ordering, product catalog, and admin dashboard. Full-stack web application for bakery businesses.",
      image: "/images/projects/bakehub.png",
      category: "fullstack",
      technologies: ["React", "Node.js", "JavaScript", "MongoDB", "Express"],
      role: "Full-Stack Developer",
      keyFeatures: [
        "Product catalog with categories and images",
        "Order placement and tracking system",
        "Admin dashboard for business management",
        "Responsive design for mobile and desktop"
      ],
      github: "https://github.com/tsegayes332-cell",
      demo: "https://bakehub-swart.vercel.app",
      featured: true,
    },
    {
      id: 3,
      title: "BSD Website",
      description: "Business website with modern design, responsive layout, and interactive features built for a professional organization.",
      image: "/images/projects/bsd-website.jpg",
      category: "frontend",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
      role: "Frontend Developer",
      keyFeatures: [
        "Modern responsive layout",
        "Interactive UI components",
        "Smooth animations and transitions",
        "Mobile-first design approach"
      ],
      github: "https://github.com/tsegayes332-cell/bsd-website",
      demo: "https://bsd-website.vercel.app",
      featured: true,
    },
    {
      id: 4,
      title: "Beauty Salon Website",
      description: "Full-stack salon management platform with appointment booking, role-based dashboards, and admin analytics.",
      image: "/images/projects/beauty-salon.jpg",
      category: "fullstack",
      technologies: ["React", "Node.js", "Express", "MySQL", "JWT", "Recharts", "Vercel"],
      role: "Full-Stack Developer",
      keyFeatures: [
        "Appointment Booking System — browse services, specialist scheduling & time slots",
        "Role-Based Portals — Admin, Staff, and Customer dashboards with protected routes",
        "Admin Management Panel — CRUD for services & users with real-time analytics",
        "Cloud Deployment — Vercel with serverless Express backend and Aiven MySQL"
      ],
      github: "https://github.com/tsegayes332-cell/beauty-salon-website",
      demo: "https://beauty-salon-l2hl.vercel.app",
      featured: true,
    },
    {
      id: 5,
      title: "Farmers Marketplace",
      description: "Cross-platform mobile app connecting farmers directly with buyers. Features real-time messaging, payment integration, and multi-language support.",
      image: "/images/projects/farmers-marketplace.jpg",
      category: "mobile",
      technologies: ["React Native", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Socket.io", "Redux", "Chapa"],
      role: "Full-Stack Developer",
      keyFeatures: [
        "Real-time messaging — Socket.io chat between farmers, buyers, and transporters",
        "Payment integration — Chapa (Ethiopian fintech) with webhook verification",
        "Multi-role system — 4 user roles with custom dedicated dashboards",
        "Trilingual support — English, Amharic, Afaan Oromoo with runtime switching"
      ],
      github: "https://github.com/tsegayes332-cell/FarmersMarketplace-",
      featured: true,
    },
  ];

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Frontend', value: 'frontend' },
    { name: 'Full Stack', value: 'fullstack' },
    { name: 'Mobile', value: 'mobile' },
  ];

  const categoryColors = {
    fullstack: { color: '#2563EB', bg: 'rgba(37,99,235,0.08)', border: 'rgba(37,99,235,0.2)' },
    frontend:  { color: '#7C3AED', bg: 'rgba(124,58,237,0.08)', border: 'rgba(124,58,237,0.2)' },
    mobile:    { color: '#059669', bg: 'rgba(5,150,105,0.08)', border: 'rgba(5,150,105,0.2)' },
  };

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-white border-t border-slate-200">
      <div className="container-custom">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">Featured Projects</h2>
          <div className="decoration-line mx-auto mt-4"></div>
          <p className="text-slate-600 max-w-xl mx-auto mt-6 text-sm sm:text-base">
            Production web applications and mobile apps built with modern full-stack architectures.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all ${
                activeFilter === filter.value
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-primary border border-slate-200 hover:border-slate-400'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                {/* Image Container with Clean Background */}
                <a
                  href={project.demo || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden bg-slate-50 relative border-b border-slate-100"
                  style={{ height: '210px' }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL || ''}${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full items-center justify-center bg-slate-100 hidden absolute inset-0">
                    <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </a>

                {/* Card Body */}
                <div className="flex flex-col flex-1 p-5">
                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed flex-1 font-normal">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <ul className="space-y-1.5 mb-4">
                    {project.keyFeatures.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.slice(0, 5).map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-slate-100 text-slate-500 border border-slate-200">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-100 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-primary transition-colors"
                    >
                      <svg className="w-4 h-4 text-slate-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span>Code</span>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-primary hover:bg-blue-700 text-white transition-all hover:scale-105 shadow-sm"
                      >
                        <span>Live Demo</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;