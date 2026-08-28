import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer Intern",
      company: "Ethiopian Roads Administration",
      location: "Addis Ababa, Ethiopia",
      period: "2025",
      type: "Internship",
      description: "Designed and built a responsive website using HTML, CSS, and JavaScript. Focused on user-friendly navigation and accessibility for stakeholders, aligning IT solutions with organizational needs through real-world project delivery.",
      achievements: [
        "Designed and developed a responsive website for the organization",
        "Implemented user-friendly navigation and accessibility features",
        "Aligned IT solutions with organizational stakeholder needs",
        "Delivered real-world project solutions on time"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-dark-light relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-primary/5 to-transparent"></div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-medium text-sm tracking-wider uppercase mb-4 block">My Journey</span>
          <h2 className="section-title">Work Experience</h2>
          <div className="decoration-line mx-auto mt-4"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/30"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 lg:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gradient-to-br from-primary to-secondary rounded-full border-4 border-dark-light shadow-glow z-10"></div>
                  
                  {/* Content Card */}
                  <div className={`ml-20 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-dark rounded-2xl p-8 shadow-soft card-hover border border-light-gray">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                        <div>
                          <h3 className="font-heading text-xl font-bold text-text-primary mb-2">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-primary font-medium">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            {exp.company}
                          </div>
                        </div>
                        <div className="mt-4 sm:mt-0 sm:text-right">
                          <div className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1 mt-2 text-text-secondary text-sm">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-text-secondary mb-6 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-text-primary mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center">
                            <svg className="w-3 h-3 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </span>
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start text-sm text-text-secondary">
                              <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-text-primary mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-4 py-1.5 bg-light text-text-primary text-sm rounded-lg border border-light-gray hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
