import React, { useEffect, useState } from 'react';

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

  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const categories = ["Frontend", "Backend", "Tools", "Design"];
  const categoryIcons = {
    Frontend: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    Backend: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
    Tools: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    Design: "M12 21a9 9 0 100-18 9 9 0 000 18zM12 8a4 4 0 100 8 4 4 0 000-8z"
  };

  const getSkillsByCategory = (category) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section id="skills" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block bg-primary/5 inline-block px-3 py-1 rounded-full">What I'm Good At</span>
            <h2 className="section-title">Technical Skills</h2>
            <div className="decoration-line mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category}
                className="group bg-dark rounded-2xl p-6 shadow-soft card-hover border border-light-gray"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={categoryIcons[category]} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">{category}</h3>
                </div>

                <div className="space-y-4">
                  {getSkillsByCategory(category).map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-text-primary">{skill.name}</span>
                        <span className="text-sm text-text-secondary">{skill.level}%</span>
                      </div>

                      <div className="w-full bg-light-gray/60 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-2 rounded-full transition-all duration-[1200ms] ease-out"
                          style={{
                            width: animated ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 120}ms`,
                            background: 'linear-gradient(90deg, #654321, #c9a227 120%)'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;