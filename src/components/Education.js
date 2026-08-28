import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Education = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="education" className="section-padding bg-white">
      <div className="container-custom">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <p className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block bg-primary/5 inline-block px-3 py-1 rounded-full">Education</p>
            <h2 className="section-title">Education</h2>
            <div className="decoration-line mx-auto mt-4"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-dark rounded-xl p-6 md:p-8 border border-light-gray card-hover">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-text-primary mb-1">Bachelor of Science in Computer Science</h3>
                  <p className="text-primary font-medium text-sm">Haramaya University</p>
                </div>
                <div className="mt-3 md:mt-0 md:text-right">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">2023 – 2027</span>
                  <p className="text-xs text-text-secondary mt-1">East Hararghe, Oromia, Ethiopia</p>
                </div>
              </div>

              <div className="border-t border-light-gray pt-4">
                <h4 className="text-sm font-semibold text-text-primary mb-3">Relevant Coursework</h4>
                <div className="grid sm:grid-cols-2 gap-2 stagger-children">
                  {[
                    "Data Structures & Algorithms",
                    "Object-Oriented Programming",
                    "Database Management Systems",
                    "Software Engineering",
                    "Mobile Application Development",
                    "Computer Networks",
                    "Artificial Intelligence",
                    "Web Development"
                  ].map((course, index) => (
                    <div key={index} className="flex items-center text-sm text-text-secondary">
                      <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;