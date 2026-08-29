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
        "Bilingual Support (EN/AM) — full Amharic translations with i18next, custom date formatting, and language toggle",
        "Ethiopian Calendar Integration — hand-written Gregorian-to-Ethiopian date converter (not a library)",
        "Ticket Purchasing with Chapa — real payment processing in Ethiopian Birr with row-level locking to prevent overselling",
        "Admin Moderation Dashboard — event submission, approval/rejection workflow, invite-code protected admin signup"
      ],
      contribution: "Built the full-stack platform — bilingual frontend with i18n, Ethiopian calendar converter, event CRUD, ticket purchasing with Chapa payment integration, and admin moderation dashboard with approval workflow.",
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
      contribution: "Built the full application from scratch — product management, order workflow, and admin panel.",
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
      contribution: "Developed the complete frontend — layout, components, responsive styling, and interactive features.",
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
      technologies: ["React", "Node.js", "Express", "MySQL", "JWT", "Recharts", "react-big-calendar", "Vercel"],
      role: "Full-Stack Developer",
      keyFeatures: [
        "Appointment Booking System — browse services, pick a specialist, select date/time. Double-booking prevention at API level",
        "Role-Based Portals — three separate dashboards (Admin, Staff, Customer) with protected routes",
        "Admin Management Panel — CRUD for services, staff, users. Real-time analytics with charts and calendar view",
        "Cloud Deployment — Vercel with serverless Express backend, API proxy rewrites, and Aiven MySQL"
      ],
      contribution: "Built the React frontend from scratch — routing, context/auth state management, all UI components, responsive layout, and the pink luxury design system. Built the Node.js/Express backend — RESTful API with JWT authentication, bcrypt password hashing, role-based access middleware, rate limiting, and MySQL database layer. Implemented the booking workflow including staff acceptance, completion, cancellation, and conflict detection. Handled deployment and DevOps — Vercel config, CORS setup, database SSL/port support for cloud MySQL, and API proxy configuration.",
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
      technologies: ["React Native", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL", "Socket.io", "Redux", "Chapa", "Firebase"],
      role: "Full-Stack Developer",
      keyFeatures: [
        "Real-time messaging — Socket.io chat between farmers, buyers, and transporters",
        "Payment integration — Chapa (Ethiopian fintech) with webhook verification",
        "Multi-role system — 4 user roles (Farmer, Buyer, Transporter, Admin) with different dashboards",
        "Trilingual support — English, Amharic, Afaan Oromoo with runtime switching"
      ],
      contribution: "Built the full-stack marketplace platform including REST API with Express/Prisma, React Native mobile app, real-time chat with Socket.io, payment integration with Chapa, and admin dashboard. Designed and implemented the backend API, database schema (8 models), authentication system, and payment webhook. Built the React Native frontend with Redux state management and real-time messaging.",
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

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <div>
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block bg-primary/5 inline-block px-3 py-1 rounded-full">Portfolio</p>
          <h2 className="section-title">Featured Projects</h2>
          <div className="decoration-line mx-auto mt-4"></div>
          <p className="text-text-secondary max-w-xl mx-auto mt-6">
            Real projects I've built — from full-stack web apps to mobile applications.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                activeFilter === filter.value
                  ? 'bg-primary text-white'
                  : 'bg-light text-text-secondary hover:bg-light-gray hover:text-text-primary border border-light-gray'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-dark rounded-xl border border-light-gray overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Side */}
                <a
                  href={project.demo || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-64 md:h-full bg-light-gray overflow-hidden block"
                >
                  <img
                    src={`${process.env.PUBLIC_URL || ''}${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      if (e.target.nextSibling) {
                        e.target.nextSibling.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="w-full h-full items-center justify-center bg-light hidden absolute inset-0">
                    <div className="text-center">
                      <svg className="w-12 h-12 text-text-secondary mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm text-text-secondary">{project.title}</span>
                    </div>
                  </div>
                </a>

                {/* Content Side */}
                <div className="p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      {project.featured && (
                        <span className="px-2 py-0.5 bg-primary text-white text-xs font-medium rounded-full">
                          Featured
                        </span>
                      )}
                      <span className="px-2 py-0.5 bg-light text-text-secondary text-xs rounded border border-light-gray">
                        {project.role}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-text-primary mb-2">{project.title}</h3>
                    <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="px-2 py-0.5 bg-light text-text-secondary text-xs rounded border border-light-gray">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">Key Features</h4>
                      <ul className="space-y-1">
                        {project.keyFeatures.map((feature, index) => (
                          <li key={index} className="flex items-start text-xs text-text-secondary">
                            <span className="w-1 h-1 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Contribution */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-1">My Contribution</h4>
                      <p className="text-xs text-text-secondary leading-relaxed">{project.contribution}</p>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-light-gray mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-primary transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Source Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-primary transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;