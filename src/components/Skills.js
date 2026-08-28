import React from 'react';

const Skills = () => {
  const skills = [
    { name: "HTML/CSS", level: 90, category: "Frontend" },
    { name: "JavaScript", level: 85, category: "Frontend" },
    { name: "React Native", level: 80, category: "Frontend" },
    { name: "Responsive Design", level: 90, category: "Frontend" },
    { name: "PHP", level: 75, category: "Backend" },
    { name: "MySQL", level: 80, category: "Backend" },
    { name: "Database Management", level: 75, category: "Backend" },
    { name: "TypeScript", level: 70, category: "Backend" },
    { name: "Git", level: 85, category: "Tools" },
    { name: "GitHub", level: 85, category: "Tools" },
    { name: "Expo", level: 80, category: "Tools" },
    { name: "Agile/Scrum", level: 75, category: "Tools" },
    { name: "UI/UX Design", level: 85, category: "Design" },
    { name: "Mobile App Design", level: 80, category: "Design" },
    { name: "User Research", level: 75, category: "Design" },
    { name: "Prototyping", level: 80, category: "Design" }
  ];

  const categories = ["Frontend", "Backend", "Tools", "Design"];

  const getSkillsByCategory = (category) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section id="skills" className="section-padding bg-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block bg-primary/5 inline-block px-3 py-1 rounded-full">Capabilities</p>
          <h2 className="section-title">Technical Skills</h2>
          <div className="decoration-line mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category} className="bg-white rounded-xl p-5 border border-light-gray">
              <h3 className="text-base font-semibold text-text-primary mb-5 pb-3 border-b border-light-gray">
                {category}
              </h3>
              <div className="space-y-3">
                {getSkillsByCategory(category).map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-text-primary">{skill.name}</span>
                      <span className="text-xs text-text-secondary">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-light-gray rounded-full h-1.5">
                      <div className="h-1.5 rounded-full bg-primary" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;