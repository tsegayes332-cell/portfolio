import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-dark relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-medium text-sm tracking-wider uppercase mb-4 block">Get To Know Me</span>
          <h2 className="section-title">About Me</h2>
          <div className="decoration-line mx-auto mt-4"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h3 className="font-heading text-3xl font-bold text-text-primary mb-6">
              I Like Building Things That <span className="gradient-text">Actually Work</span>
            </h3>
            
            <div className="space-y-4 text-text-secondary leading-relaxed mb-8">
              <p>
                Computer Science grad from Haramaya University. I got into coding because I needed to solve a problem, 
                and I stayed because I like making things that help people get stuff done.
              </p>
              <p>
                I'm pretty straightforward - I focus on building apps that work well and make sense. No fancy buzzwords, 
                just clean code and practical solutions. When I'm not coding, I'm probably figuring out how to make 
                something work better.
              </p>
            </div>
            
            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Frontend', skills: 'HTML, CSS, JavaScript', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
                { title: 'Backend', skills: 'PHP, MySQL, Database', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4' },
                { title: 'Mobile', skills: 'React Native, Expo', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
                { title: 'Tools', skills: 'Git, GitHub, UI/UX', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="group p-5 bg-dark-light rounded-xl border border-light-gray hover:border-primary/20 hover:shadow-soft transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">{item.title}</h4>
                      <p className="text-sm text-text-secondary">{item.skills}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Profile Image/Visual */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Decorative Ring */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-20 animate-pulse"></div>
              
              {/* Main Circle */}
              <div className="relative w-72 h-72 bg-gradient-to-br from-primary via-primary-light to-secondary rounded-full flex items-center justify-center shadow-glow">
                <div className="text-white text-center">
                  <div className="font-heading text-7xl font-bold mb-2">ST</div>
                  <div className="text-white/80 text-sm tracking-wider uppercase">Developer</div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-dark-light p-5 rounded-2xl shadow-soft border border-light-gray">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">2025</div>
                  <div className="text-sm text-text-secondary">Graduate</div>
                </div>
              </div>
              
              {/* Experience Badge */}
              <div className="absolute -top-4 -left-4 bg-dark-light p-4 rounded-xl shadow-soft border border-light-gray">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-sm font-medium text-text-primary">Open to Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
