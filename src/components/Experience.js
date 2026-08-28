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
    <section id="experience" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block bg-primary/5 inline-block px-3 py-1 rounded-full">Experience</p>
          <h2 className="section-title">Work Experience</h2>
          <div className="decoration-line mx-auto mt-4"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-6 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-px bg-light-gray"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="absolute left-6 lg:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full border-2 border-white shadow-sm mt-6 z-10"></div>

                  <div className="ml-14 lg:ml-0 lg:w-1/2 lg:pr-12">
                    <div className="bg-dark rounded-xl p-6 border border-light-gray">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-text-primary mb-1">{exp.title}</h3>
                          <div className="text-sm text-primary font-medium">{exp.company}</div>
                        </div>
                        <div className="mt-2 sm:mt-0 sm:text-right">
                          <span className="inline-block px-2.5 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">{exp.period}</span>
                          <div className="text-xs text-text-secondary mt-1">{exp.location}</div>
                        </div>
                      </div>

                      <p className="text-sm text-text-secondary mb-4 leading-relaxed">{exp.description}</p>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-text-primary mb-2">Key Achievements</h4>
                        <ul className="space-y-1.5">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start text-xs text-text-secondary">
                              <span className="w-1 h-1 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-0.5 bg-light text-text-secondary text-xs rounded border border-light-gray">
                            {tech}
                          </span>
                        ))}
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