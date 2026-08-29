import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #ffffff 50%, #f8f0ff 100%)' }}>
      {/* Background decorative blobs */}
      <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container-custom w-full pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium"
              style={{ background: 'rgba(37,99,235,0.08)', color: '#2563EB', border: '1px solid rgba(37,99,235,0.15)' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block', animation: 'pulse 2s infinite' }} />
              Available for full-time and contract roles
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-text-primary mb-4 leading-tight">
              Selamawit{' '}
              <span style={{ background: 'linear-gradient(135deg, #2563EB, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Tsegaye
              </span>
            </h1>

            <h2 className="text-lg md:text-xl text-text-secondary font-medium mb-6">
              Web &amp; Mobile App Developer
            </h2>

            <div className="w-12 h-1 rounded-full mx-auto lg:mx-0 mb-8"
              style={{ background: 'linear-gradient(90deg, #2563EB, #7c3aed)' }} />

            <p className="text-base text-text-secondary mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Computer Science graduate from Haramaya University. I build responsive web
              applications and cross-platform mobile apps with React, React Native, and Node.js.
              Based in Addis Ababa, Ethiopia.
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
              {['React', 'React Native', 'Node.js', 'TypeScript', 'MongoDB'].map(tag => (
                <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full"
                  style={{ background: 'rgba(37,99,235,0.07)', color: '#2563EB', border: '1px solid rgba(37,99,235,0.15)' }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a href="#projects" className="btn-primary inline-flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m7-7l-7 7 7 7" style={{ transform: 'scaleX(-1)' }} />
                </svg>
                View Projects
              </a>
              <a href="#contact" className="btn-secondary inline-flex items-center justify-center gap-2">
                Contact Me
              </a>
            </div>

            {/* Resume + Social */}
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <a href="/resume.pdf" download
                className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-primary transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
              <div className="flex space-x-3">
                <a href="https://github.com/tsegayes332-cell" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-text-secondary hover:text-primary hover:border-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="mailto:tsegayes332@gmail.com" aria-label="Email"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-text-secondary hover:text-primary hover:border-primary transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Profile Photo */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Glow ring */}
              <div style={{
                position: 'absolute', inset: '-6px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #2563EB, #7c3aed, #2563EB)',
                animation: 'spin 8s linear infinite',
                padding: '3px'
              }} />
              {/* Photo */}
              <div style={{
                width: '280px', height: '280px', borderRadius: '50%',
                overflow: 'hidden', position: 'relative', zIndex: 1,
                border: '4px solid white',
                boxShadow: '0 20px 60px rgba(37,99,235,0.2)'
              }}>
                <img
                  src={`${process.env.PUBLIC_URL || ''}/images/profile.jpg`}
                  alt="Selamawit Tsegaye"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>

              {/* Floating badge — experience */}
              <div style={{
                position: 'absolute', bottom: '20px', left: '-30px',
                background: 'white', borderRadius: '12px', padding: '10px 16px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.12)', zIndex: 2,
                display: 'flex', alignItems: 'center', gap: '8px'
              }}>
                <span style={{ fontSize: '20px' }}>🚀</span>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: '700', color: '#1e293b' }}>5+ Projects</div>
                  <div style={{ fontSize: '11px', color: '#64748b' }}>Built & Deployed</div>
                </div>
              </div>

              {/* Floating badge — open to work */}
              <div style={{
                position: 'absolute', top: '10px', right: '-20px',
                background: 'white', borderRadius: '12px', padding: '10px 16px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.12)', zIndex: 2,
                display: 'flex', alignItems: 'center', gap: '8px'
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'block', flexShrink: 0 }} />
                <div style={{ fontSize: '12px', fontWeight: '600', color: '#1e293b' }}>Open to Work</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a href="#about" className="text-text-secondary hover:text-primary transition-colors">
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
      `}</style>
    </section>
  );
};

export default Hero;