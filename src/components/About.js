import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-[#0B0F19] relative border-t border-slate-800/80">
      <div className="container-custom">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <p className="text-blue-400 font-medium text-xs tracking-wider uppercase mb-3 inline-block bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">About Me</p>
            <h2 className="section-title">Engineering Philosophy</h2>
            <div className="decoration-line mx-auto mt-4"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              I Build Things That <span className="text-blue-400">Actually Work</span>
            </h3>

            <div className="space-y-4 text-slate-400 leading-relaxed text-base mb-12 max-w-2xl mx-auto">
              <p>
                Computer Science graduate from Haramaya University. I got into coding because I needed to solve a problem,
                and I stayed because I like making things that help people get stuff done.
              </p>
              <p>
                I focus on building web and mobile applications that work reliably, load fast, and make sense to real users.
                Clean code, modular architecture, and practical engineering.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left stagger-children">
              {[
                { title: 'Frontend', skills: 'React, React Native, TypeScript, Tailwind' },
                { title: 'Backend', skills: 'Node.js, Express, PHP, REST APIs' },
                { title: 'Databases', skills: 'MongoDB, MySQL, PostgreSQL, Prisma' },
                { title: 'Workflows', skills: 'Git, GitHub, Vercel, CI/CD, Agile' },
              ].map((item, index) => (
                <div key={index} className="p-5 bg-[#1E293B] rounded-xl border border-slate-800 hover:border-blue-500/40 card-hover transition-all shadow-sm">
                  <h4 className="font-bold text-white mb-1.5 text-sm">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.skills}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;