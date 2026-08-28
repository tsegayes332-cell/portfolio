import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Haramaya University",
      location: "Ethiopia",
      period: "2021 - 2025",
      gpa: "Completed",
      type: "Undergraduate",
      description: "Comprehensive computer science education with focus on software development, web technologies, and mobile application development. Completed Final Year Project on Farmers Marketplace App.",
      relevantCoursework: [
        "Data Structures & Algorithms",
        "Web Development",
        "Database Systems",
        "Software Engineering",
        "Mobile App Development",
        "Object-Oriented Programming"
      ],
      achievements: [
        "Active member of HUCISA (Computing and Informatics Students Association)",
        "Certificate of Appreciation from HUCISA 2024-2025",
        "Completed Final Year Project with excellence",
        "Participated in various tech community activities"
      ]
    }
  ];

  const certifications = [
    {
      name: "Certificate of Appreciation - HUCISA",
      issuer: "Haramaya University Computing and Informatics Students Association",
      date: "2024-2025",
      credentialId: "HUCISA-2024-2025",
      description: "Awarded for active membership and dedicated contribution to HUCISA during the academic year"
    }
  ];

  return (
    <section id="education" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">
            Education & Certifications
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-text-primary">
                Education
              </h3>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="bg-dark-light rounded-lg p-6 shadow-lg card-hover border border-light-gray">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-text-primary mb-1">
                          {edu.degree}
                        </h4>
                        <div className="text-primary font-medium">
                          {edu.school}
                        </div>
                      </div>
                      <div className="mt-2 sm:mt-0 text-right">
                        <div className="text-sm text-text-secondary">
                          {edu.period}
                        </div>
                        <div className="text-sm text-text-secondary">
                          {edu.location}
                        </div>
                        <div className="text-sm font-medium text-text-primary">
                          GPA: {edu.gpa}
                        </div>
                        <span className="inline-block mt-1 px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
                          {edu.type}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-text-secondary mb-4">
                      {edu.description}
                    </p>
                    
                    <div className="mb-4">
                      <h5 className="font-medium text-text-primary mb-2">Relevant Coursework:</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevantCoursework.map((course, courseIndex) => (
                          <span
                            key={courseIndex}
                            className="px-3 py-1 bg-dark text-text-secondary text-xs rounded-full border border-light-gray"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {edu.achievements.length > 0 && (
                      <div>
                        <h5 className="font-medium text-text-primary mb-2">Achievements:</h5>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start text-sm text-text-secondary">
                              <svg className="w-4 h-4 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-text-primary">
                Professional Certifications
              </h3>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-dark-light rounded-lg p-6 shadow-lg card-hover border border-light-gray">
                    <div className="flex items-start justify-between mb-3">
                      <div>
<h4 className="text-lg font-semibold text-text-primary mb-1">
                          {cert.name}
                        </h4>
                        <div className="text-primary font-medium">
                          {cert.issuer}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-text-secondary">
                          {cert.date}
                        </div>
                        <div className="text-xs text-text-secondary">
                          ID: {cert.credentialId}
                        </div>
                      </div>
                    </div>

                    <p className="text-text-secondary text-sm mb-4">
                      {cert.description}
                    </p>

                    <div className="flex items-center text-sm text-primary hover:text-primary-light cursor-pointer transition-colors duration-200">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Verify Certificate
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Additional Skills */}
              <div className="mt-8 bg-white rounded-lg p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-text-primary mb-4">
                  Continuous Learning
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-text-secondary">
                    <svg className="w-5 h-5 text-secondary mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    Regular online courses on Udemy and Coursera
                  </div>
                  <div className="flex items-center text-sm text-text-secondary">
                    <svg className="w-5 h-5 text-secondary mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    Active participant in developer communities
                  </div>
                  <div className="flex items-center text-sm text-text-secondary">
                    <svg className="w-5 h-5 text-secondary mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM5 8a1 1 0 011-1h1a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" />
                    </svg>
                    Attend tech conferences and workshops
                  </div>
                  <div className="flex items-center text-sm text-text-secondary">
                    <svg className="w-5 h-5 text-secondary mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                    </svg>
                    Contribute to open source projects
                  </div>
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
