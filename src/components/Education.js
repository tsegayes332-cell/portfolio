import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Education = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="education" className="section-padding bg-[#0B0F19] relative border-t border-slate-800/80">
      <div className="container-custom">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <p className="text-blue-400 font-medium text-xs tracking-wider uppercase mb-3 inline-block bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">Education</p>
            <h2 className="section-title">Academic Background</h2>
            <div className="decoration-line mx-auto mt-4"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-[#1E293B] rounded-2xl p-6 md:p-8 border border-slate-800 hover:border-blue-500/40 transition-all card-hover shadow-xl">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-5">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1.5">Bachelor of Science in Computer Science</h3>
                  <p className="text-blue-400 font-semibold text-sm">Haramaya University</p>
                </div>
                <div className="mt-3 md:mt-0 md:text-right">
                  <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-full border border-blue-500/20">2023 – 2027</span>
                  <p className="text-xs text-slate-400 mt-1">East Hararghe, Oromia, Ethiopia</p>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-5">
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3.5">Relevant Coursework</h4>
                <div className="grid sm:grid-cols-2 gap-2.5 stagger-children">
                  {[
                    "Data Structures & Algorithms",
                    "Object-Oriented Programming",
                    "Database Management Systems",
                    "Software Engineering",
                    "Mobile Application Development",
                    "Computer Networks",
                    "Artificial Intelligence",
                    "Web Systems & Architectures"
                  ].map((course, index) => (
                    <div key={index} className="flex items-center text-xs text-slate-300 font-medium">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2.5 flex-shrink-0"></span>
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