import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Habesha 251 Events",
      description: "Event management platform for Ethiopian events — weddings, concerts, festivals. Browse, book, and manage events with cultural design.",
      image: "/images/projects/habesha-events.jpg",
      category: "fullstack",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/tsegayes332-cell/habesha-251-events",
      demo: "https://habesha-251-events.vercel.app",
      featured: true,
    },
    {
      id: 2,
      title: "Beauty Salon Website",
      description: "Responsive website for a beauty salon with service browsing, appointment booking, and gallery. Clean UI focused on user experience.",
      image: "/images/projects/beauty-salon.jpg",
      category: "frontend",
      tags: ["React", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/tsegayes332-cell/beauty-salon-website",
      demo: "https://beauty-salon-website-liart.vercel.app",
      featured: true,
    },
    {
      id: 3,
      title: "BSD Website",
      description: "Business website with modern design, responsive layout, and interactive features built for a professional organization.",
      image: "/images/projects/bsd-website.jpg",
      category: "frontend",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/tsegayes332-cell/bsd-website",
      demo: "https://bsd-website.vercel.app",
      featured: true,
    },
    {
      id: 4,
      title: "Front-End Projects",
      description: "Collection of frontend practice projects — landing pages, interactive components, UI experiments. Clean, responsive implementations.",
      image: "/images/projects/frontend-practice.jpg",
      category: "frontend",
      tags: ["HTML", "CSS", "JavaScript", "React"],
      github: "https://github.com/tsegayes332-cell/front-end-practice",
      featured: false,
    },
    {
      id: 5,
      title: "Python Projects",
      description: "Collection of Python projects including automation scripts, data processing tools, and backend utilities.",
      image: "/images/projects/python-projects.jpg",
      category: "backend",
      tags: ["Python", "Automation", "Data Processing"],
      github: "https://github.com/tsegayes332-cell/python-project",
      featured: false,
    },
    {
      id: 6,
      title: "React Native Projects",
      description: "Collection of React Native mobile app projects — cross-platform apps with Expo, featuring various mobile UI patterns and APIs.",
      image: "/images/projects/react-native.jpg",
      category: "mobile",
      tags: ["React Native", "Expo", "JavaScript", "Mobile"],
      github: "https://github.com/tsegayes332-cell/react-native-projects",
      featured: false,
    },
  ];

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Frontend', value: 'frontend' },
    { name: 'Full Stack', value: 'fullstack' },
    { name: 'Mobile', value: 'mobile' },
    { name: 'Backend', value: 'backend' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-dark rounded-xl border border-light-gray overflow-hidden group">
              {/* Project Image */}
              <div className="relative h-48 bg-light-gray overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full items-center justify-center bg-light hidden">
                  <div className="text-center">
                    <svg className="w-10 h-10 text-text-secondary mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs text-text-secondary">{project.title}</span>
                  </div>
                </div>

                {project.featured && (
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-primary text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-base font-bold text-text-primary mb-2">{project.title}</h3>
                <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-0.5 bg-light text-text-secondary text-xs rounded border border-light-gray">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-3 border-t border-light-gray">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-primary transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;