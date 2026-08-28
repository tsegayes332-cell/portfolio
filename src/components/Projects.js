import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Beauty Salon Management System",
      description: "Built this to help salons manage appointments and staff schedules. Different dashboards for customers, staff, and admins. Handles bookings, services, and basic analytics.",
      technologies: ["React 19", "Node.js", "Express", "MySQL", "Bootstrap"],
      image: "https://via.placeholder.com/400x250/c9a227/FFFFFF?text=Salon+Manager",
      liveUrl: "#",
      githubUrl: "https://github.com/tsegayes332-cell/beauty-salon"
    },
    {
      title: "Donation Platform",
      description: "Crowdfunding platform with Stripe payments. Users can create campaigns, donate, and track progress. Built with role-based access so admins can moderate content.",
      technologies: ["PHP 8", "MySQL", "Stripe API", "JavaScript", "PWA"],
      image: "https://via.placeholder.com/400x250/1e3a5f/FFFFFF?text=Donation+Platform",
      liveUrl: "#",
      githubUrl: "https://github.com/tsegayes332-cell/donation-platform"
    },
    {
      title: "Farmers Marketplace App",
      description: "My final year project - a mobile marketplace connecting farmers with buyers. Farmers can list products, set prices, and chat with buyers directly.",
      technologies: ["React Native", "Expo", "TypeScript", "Git/GitHub"],
      image: "https://via.placeholder.com/400x250/10B981/FFFFFF?text=Farmers+Market",
      liveUrl: "#",
      githubUrl: "https://github.com"
    },
    {
      title: "Ethiopian Roads Admin Website",
      description: "Built a website for Ethiopian Roads Administration during my internship. Focused on making information easy to find and accessible for everyone.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      image: "https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=Roads+Admin",
      liveUrl: "#",
      githubUrl: "https://github.com"
    },
    {
      title: "Portfolio Website",
      description: "This website you're looking at right now. Built with React and Tailwind to show what I can do.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      image: "https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=Portfolio",
      liveUrl: "#",
      githubUrl: "https://github.com"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-dark relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-secondary/5 to-transparent"></div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-medium text-sm tracking-wider uppercase mb-4 block">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Showcasing my best work in web and mobile development</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-dark-light rounded-2xl overflow-hidden shadow-soft card-hover border border-light-gray"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-secondary"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-coffee/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-text-secondary mb-5 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-light text-text-primary text-xs font-medium rounded-lg border border-light-gray group-hover:border-primary/20 group-hover:bg-primary/5 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-light-gray">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary font-medium hover:text-primary-light transition-colors duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-secondary hover:text-primary font-medium transition-colors duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Code
                  </a>
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
