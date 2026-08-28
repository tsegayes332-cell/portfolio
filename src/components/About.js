import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-dark">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block bg-primary/5 inline-block px-3 py-1 rounded-full">About Me</p>
          <h2 className="section-title">About Me</h2>
          <div className="decoration-line mx-auto mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-text-primary mb-8">
            I Like Building Things That <span className="text-primary">Actually Work</span>
          </h3>

          <div className="space-y-4 text-text-secondary leading-relaxed text-lg mb-12">
            <p>
              Computer Science graduate from Haramaya University. I got into coding because I needed to solve a problem,
              and I stayed because I like making things that help people get stuff done.
            </p>
            <p>
              I focus on building web and mobile applications that work reliably and make sense to users - no buzzwords,
              just clean code and practical solutions. When I'm not coding, I'm probably figuring out how to make
              something work better.
            </p>
          </div>

          {/* Focus Areas */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {[
              { title: 'Frontend', skills: 'HTML, CSS, JavaScript' },
              { title: 'Backend', skills: 'PHP, MySQL, Database' },
              { title: 'Mobile', skills: 'React Native, Expo' },
              { title: 'Tools', skills: 'Git, GitHub, UI/UX' },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border border-light-gray card-hover"
              >
                <h4 className="font-semibold text-text-primary mb-2">{item.title}</h4>
                <p className="text-sm text-text-secondary">{item.skills}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;