import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-primary via-primary-light to-coffee pt-24 lg:pt-20 relative overflow-hidden"
    >
      {/* Animated Gradient Mesh */}
      <div className="absolute top-[-10%] left-[-10%] w-[45vw] h-[45vw] max-w-3xl max-h-3xl rounded-full bg-secondary/20 blur-3xl animate-blob"></div>
      <div className="absolute bottom-[-15%] right-[-10%] w-[40vw] h-[40vw] max-w-2xl max-h-2xl rounded-full bg-coffee/40 blur-3xl animate-blob" style={{ animationDelay: '4s' }}></div>
      <div className="absolute inset-0 grid-pattern-light"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full shadow-lg mb-6 border border-white/20 animate-fade-down">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-white/85">Available for opportunities</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-heading text-5xl md:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight animate-fade-up" style={{ animationDelay: '100ms' }}>
              Hi, I'm{' '}
              <span className="gradient-gold">Selamawit</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl md:text-2xl text-white/80 mb-6 font-light tracking-wide animate-fade-up" style={{ animationDelay: '200ms' }}>
              Web Developer <span className="text-secondary mx-2">&amp;</span> Mobile App Developer
            </h2>

            {/* Decorative Line */}
            <div className="w-[60px] h-1 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto lg:mx-0 mb-8 animate-fade-up" style={{ animationDelay: '300ms' }}></div>

            {/* Description */}
            <p className="text-lg text-white/75 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-up" style={{ animationDelay: '400ms' }}>
              I build web and mobile apps that actually work. Started coding because I needed to solve real problems,
              and stuck with it because there's nothing better than seeing something you built come to life.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-up" style={{ animationDelay: '500ms' }}>
              <a
                href="#projects"
                className="px-8 py-3 bg-secondary text-coffee rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl inline-flex items-center justify-center"
              >
                View My Work
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-white/70 text-white rounded-lg font-medium transition-all duration-300 hover:bg-white hover:text-primary hover:-translate-y-0.5 inline-flex items-center justify-center"
              >
                Get In Touch
              </a>
            </div>

            {/* Resume Download */}
            <div className="flex justify-center lg:justify-start mb-10 animate-fade-up" style={{ animationDelay: '600ms' }}>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-lg hover:bg-secondary hover:text-coffee transition-all duration-300 font-medium shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 animate-fade-up" style={{ animationDelay: '700ms' }}>
              {[
                { href: "https://github.com", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
                { href: "https://linkedin.com", icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
                { href: "mailto:tsegayes332@gmail.com", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", isPath: true }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : "_blank"}
                  rel={social.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 shadow-lg text-white hover:text-primary hover:bg-white transition-all duration-300 border border-white/25"
                >
                  <svg className="w-5 h-5" fill={social.isPath ? "none" : "currentColor"} stroke={social.isPath ? "currentColor" : "none"} viewBox="0 0 24 24">
                    <path strokeLinecap={social.isPath ? "round" : undefined} strokeWidth={social.isPath ? 2 : undefined} d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Visual (also shown stacked on mobile) */}
          <div className="flex justify-center animate-fade-up" style={{ animationDelay: '300ms' }}>
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              {/* Rotating dashed ring */}
              <div className="absolute inset-[-28px] rounded-full border-2 border-dashed border-white/30 animate-spin-slow"></div>
              {/* Soft gold glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent rounded-full blur-3xl opacity-25 animate-pulse"></div>

              {/* Main Circle */}
              <div className="absolute inset-0 bg-white rounded-full flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <div className="font-heading text-8xl font-bold gradient-text mb-2">ST</div>
                  <div className="text-coffee/70 text-sm tracking-widest uppercase">Web &amp; Mobile Developer</div>
                </div>
              </div>

              {/* Floating: experience badge */}
              <div className="absolute -top-6 -right-6 lg:-right-8 bg-white p-4 rounded-2xl shadow-xl border border-light-gray animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text leading-none">2025</div>
                    <div className="text-sm text-text-secondary">Graduate</div>
                  </div>
                </div>
              </div>

              {/* Floating: open to work badge */}
              <div className="absolute -bottom-6 -left-6 lg:-left-8 bg-white p-4 rounded-2xl shadow-xl border border-light-gray animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-sm font-medium text-text-primary">Open to Work</span>
                </div>
              </div>

              {/* Floating: mobile code dot */}
              <div className="absolute top-8 -left-6 w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-accent text-white flex items-center justify-center shadow-xl animate-float-slow">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/70 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;