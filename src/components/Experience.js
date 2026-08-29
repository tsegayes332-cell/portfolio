import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Experience = () => {
  const [ref, isVisible] = useScrollAnimation();

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
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-white border-t border-slate-200">
      <div className="container-custom">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <p className="text-primary font-medium text-xs tracking-wider uppercase mb-3 inline-block bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Experience</p>
            <h2 className="section-title">Work Experience</h2>
            <div className="decoration-line mx-auto mt-4"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all card-hover">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-1">{exp.title}</h3>
                      <div className="text-sm text-primary font-semibold">{exp.company}</div>
                    </div>
                    <div className="sm:text-right">
                      <span className="inline-block px-3 py-1 bg-blue-50 text-primary text-xs font-semibold rounded-full border border-blue-100">{exp.period}</span>
                      <div className="text-xs text-slate-500 mt-1">{exp.location}</div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 mb-5 leading-relaxed">{exp.description}</p>

                  <div className="mb-5">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-xs text-slate-600 leading-relaxed">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2.5 mt-1.5 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs rounded-md border border-slate-200 font-medium">
                        {tech}
                      </span>
                    ))}
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