import React from 'react';

const Skills = () => {
  const skillGroups = [
    {
      category: 'Frontend',
      icon: '🖥️',
      color: '#2563EB',
      bg: 'rgba(37,99,235,0.07)',
      border: 'rgba(37,99,235,0.15)',
      skills: ['React', 'React Native', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Responsive Design']
    },
    {
      category: 'Backend',
      icon: '⚙️',
      color: '#7c3aed',
      bg: 'rgba(124,58,237,0.07)',
      border: 'rgba(124,58,237,0.15)',
      skills: ['Node.js', 'Express', 'PHP', 'REST API', 'Socket.io', 'JWT', 'MySQL', 'MongoDB', 'PostgreSQL']
    },
    {
      category: 'Mobile',
      icon: '📱',
      color: '#059669',
      bg: 'rgba(5,150,105,0.07)',
      border: 'rgba(5,150,105,0.15)',
      skills: ['React Native', 'Expo', 'Redux', 'React Navigation', 'Firebase', 'Mobile UI/UX']
    },
    {
      category: 'Tools & Other',
      icon: '🛠️',
      color: '#d97706',
      bg: 'rgba(217,119,6,0.07)',
      border: 'rgba(217,119,6,0.15)',
      skills: ['Git', 'GitHub', 'Vercel', 'Prisma', 'Agile/Scrum', 'UI/UX Design', 'Figma', 'i18next']
    }
  ];

  return (
    <section id="skills" className="section-padding bg-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block bg-primary/5 inline-block px-3 py-1 rounded-full">Capabilities</p>
          <h2 className="section-title">Technical Skills</h2>
          <div className="decoration-line mx-auto mt-4"></div>
          <p className="text-text-secondary max-w-xl mx-auto mt-6">
            Technologies and tools I use to build web and mobile applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div key={group.category}
              className="bg-white rounded-2xl p-6 border card-hover"
              style={{ borderColor: group.border }}>
              {/* Header */}
              <div className="mb-4 pb-3" style={{ borderBottom: `1px solid ${group.border}` }}>
                <h3 className="text-base font-bold text-text-primary">{group.category}</h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg transition-all cursor-default hover:scale-105"
                    style={{
                      background: group.bg,
                      color: group.color,
                      border: `1px solid ${group.border}`
                    }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {[
            { label: 'Projects Shipped', value: '5+' },
            { label: 'Languages', value: '6+' },
            { label: 'Frameworks', value: '8+' },
            { label: 'Months of XP', value: '12+' }
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-5 text-center border border-light-gray card-hover">
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;