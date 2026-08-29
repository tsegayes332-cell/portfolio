import React from 'react';

const Skills = () => {
  const skillGroups = [
    {
      category: 'Frontend',
      skills: ['React', 'React Native', 'JavaScript', 'TypeScript', 'HTML5 / CSS3', 'Tailwind CSS', 'Responsive UI']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'PHP', 'RESTful API', 'Socket.io', 'JWT Auth', 'MySQL', 'MongoDB', 'PostgreSQL']
    },
    {
      category: 'Mobile',
      skills: ['React Native', 'Expo', 'Redux Toolkit', 'React Navigation', 'Firebase', 'Mobile UX']
    },
    {
      category: 'Tools & DevOps',
      skills: ['Git', 'GitHub', 'Vercel', 'Prisma ORM', 'Agile / Scrum', 'Postman', 'Figma', 'i18next']
    }
  ];

  return (
    <section id="skills" className="section-padding bg-slate-50 border-t border-slate-200">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Technical Skills</h2>
          <div className="decoration-line mx-auto mt-4"></div>
          <p className="text-slate-600 max-w-xl mx-auto mt-6 text-sm sm:text-base">
            Core technologies, libraries, and developer tools I use in daily production.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm transition-all card-hover"
            >
              {/* Header without glowing colored underline */}
              <div className="mb-5 pb-3 border-b border-slate-200">
                <h3 className="text-base font-bold text-slate-900 tracking-tight">{group.category}</h3>
              </div>

              {/* Clean Skill tags */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 text-slate-700 border border-slate-200 transition-all hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {[
            { label: 'Featured Apps', value: '4' },
            { label: 'Core Languages', value: '6+' },
            { label: 'Frameworks & Tools', value: '10+' },
            { label: 'Production Ready', value: '100%' }
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-5 text-center border border-slate-200 shadow-sm">
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-xs text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;