import React from 'react';

const Skills = () => {
  const skillGroups = [
    {
      category: 'Frontend',
      color: '#60A5FA',
      bg: 'rgba(59,130,246,0.12)',
      border: 'rgba(59,130,246,0.25)',
      skills: ['React', 'React Native', 'JavaScript', 'TypeScript', 'HTML5/CSS3', 'Tailwind CSS', 'Responsive UI']
    },
    {
      category: 'Backend',
      color: '#A78BFA',
      bg: 'rgba(167,139,250,0.12)',
      border: 'rgba(167,139,250,0.25)',
      skills: ['Node.js', 'Express', 'PHP', 'RESTful API', 'Socket.io', 'JWT Auth', 'MySQL', 'MongoDB', 'PostgreSQL']
    },
    {
      category: 'Mobile',
      color: '#34D399',
      bg: 'rgba(52,211,153,0.12)',
      border: 'rgba(52,211,153,0.25)',
      skills: ['React Native', 'Expo', 'Redux Toolkit', 'React Navigation', 'Firebase', 'Mobile UX']
    },
    {
      category: 'Tools & DevOps',
      color: '#FBBF24',
      bg: 'rgba(251,191,36,0.12)',
      border: 'rgba(251,191,36,0.25)',
      skills: ['Git', 'GitHub', 'Vercel', 'Prisma ORM', 'Agile / Scrum', 'Postman', 'Figma', 'i18next']
    }
  ];

  return (
    <section id="skills" className="section-padding bg-[#0B0F19] relative border-t border-slate-800/80">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-blue-400 font-medium text-xs tracking-wider uppercase mb-3 inline-block bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">Capabilities</p>
          <h2 className="section-title">Technical Skills</h2>
          <div className="decoration-line mx-auto mt-4"></div>
          <p className="text-slate-400 max-w-xl mx-auto mt-6 text-sm sm:text-base">
            Core technologies, libraries, and developer tools I use in daily production.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-[#1E293B] rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all card-hover"
            >
              {/* Header */}
              <div className="mb-4 pb-3" style={{ borderBottom: `1px solid ${group.border}` }}>
                <h3 className="text-base font-bold text-white tracking-wide">{group.category}</h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-default hover:scale-105"
                    style={{
                      background: group.bg,
                      color: group.color,
                      border: `1px solid ${group.border}`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { label: 'Projects Shipped', value: '5+' },
            { label: 'Core Languages', value: '6+' },
            { label: 'Frameworks & Tools', value: '10+' },
            { label: 'Production Ready', value: '100%' }
          ].map((stat) => (
            <div key={stat.label} className="bg-[#1E293B] rounded-xl p-5 text-center border border-slate-800 hover:border-blue-500/30 transition-all">
              <div className="text-2xl font-bold text-blue-400 mb-1">{stat.value}</div>
              <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;