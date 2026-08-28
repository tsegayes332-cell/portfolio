import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-primary pt-24 lg:pt-20 relative overflow-hidden"
    >
      {/* Subtle solid accents */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-white/5"></div>

      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            {/* Availability */}
            <p className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span className="text-sm font-medium text-white/90">Available for full-time and contract roles</span>
            </p>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight">
              Selamawit Tsegaye
            </h1>

            <h2 className="text-lg md:text-2xl text-[#c9a227] font-semibold mb-6">
              Web &amp; Mobile App Developer
            </h2>

            <div className="w-16 h-1 bg-[#c9a227] rounded-full mx-auto lg:mx-0 mb-8"></div>

            <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Computer Science graduate from Haramaya University. I build responsive web
              applications and cross-platform mobile apps with React, React Native, and PHP.
              Available in Addis Ababa, Ethiopia.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#projects"
                className="px-8 py-3 bg-[#c9a227] text-primary font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-primary inline-flex items-center justify-center"
              >
                View My Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-white/70 text-white font-medium rounded-lg transition-all duration-300 hover:bg-white hover:text-primary inline-flex items-center justify-center"
              >
                Contact Me
              </a>
            </div>

            {/* Resume + Social */}
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-lg hover:bg-[#c9a227] hover:text-primary transition-all duration-300 font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/tsegayes332-cell"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#c9a227] hover:text-primary transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#c9a227] hover:text-primary transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="mailto:tsegayes332@gmail.com"
                  aria-label="Email"
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#c9a227] hover:text-primary transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Profile Summary */}
          <div className="hidden lg:block">
            <div className="bg-white/5 rounded-2xl border border-white/15 p-8">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider border-b border-white/15 pb-3 mb-6">
                Profile
              </h3>
              <dl className="space-y-4">
                <div className="flex justify-between gap-4">
                  <dt className="text-white/60 text-sm">Location</dt>
                  <dd className="text-white text-sm font-medium text-right">Addis Ababa, Ethiopia</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-white/60 text-sm">Education</dt>
                  <dd className="text-white text-sm font-medium text-right">B.Sc. Computer Science</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-white/60 text-sm">Focus</dt>
                  <dd className="text-white text-sm font-medium text-right">Web &amp; Mobile</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-white/60 text-sm">Stack</dt>
                  <dd className="text-white text-sm font-medium text-right">React, React Native, PHP</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-white/60 text-sm">Status</dt>
                  <dd className="text-[#c9a227] text-sm font-medium text-right">Open to Work</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a href="#about" className="text-white/70 hover:text-white transition-colors">
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;