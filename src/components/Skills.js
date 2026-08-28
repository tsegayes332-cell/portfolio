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
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div key={category} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-6 text-center text-gray-800">
                  {category}
                </h3>
                
                <div className="space-y-4">
                  {getSkillsByCategory(category).map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
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
