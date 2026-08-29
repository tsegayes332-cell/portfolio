import React, { useState } from 'react';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('developer.ts');

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-16"
      style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)' }}
    >
      {/* Decorative background glow elements */}
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-100px',
          left: '-100px',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-custom w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Introduction & CTA (7 cols on lg) */}
          <div className="lg:col-span-6 text-center lg:text-left">
            {/* Availability Pill */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs sm:text-sm font-medium"
              style={{
                background: 'rgba(37,99,235,0.08)',
                color: '#2563EB',
                border: '1px solid rgba(37,99,235,0.2)',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#22c55e',
                  display: 'inline-block',
                  boxShadow: '0 0 8px #22c55e',
                }}
              />
              Available for Full-time &amp; Contract Roles
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-slate-900 mb-4 leading-tight tracking-tight">
              Hi, I'm{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #2563EB 0%, #4f46e5 50%, #7c3aed 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Selamawit
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl text-slate-700 font-semibold mb-6 flex items-center justify-center lg:justify-start gap-2">
              <span>Full-Stack &amp; Mobile Developer</span>
            </h2>

            <div
              className="w-16 h-1 rounded-full mx-auto lg:mx-0 mb-6"
              style={{ background: 'linear-gradient(90deg, #2563EB, #7c3aed)' }}
            />

            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Computer Science graduate from Haramaya University. I design and build production-ready web platforms and cross-platform mobile apps with a focus on clean architecture, performance, and real-world utility.
            </p>

            {/* Quick Tech Highlights */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
              {[
                'React',
                'React Native',
                'Node.js',
                'Express',
                'TypeScript',
                'MongoDB',
                'MySQL',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-semibold rounded-md transition-all hover:scale-105"
                  style={{
                    background: '#f1f5f9',
                    color: '#334155',
                    border: '1px solid #e2e8f0',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#projects"
                className="btn-primary inline-flex items-center justify-center gap-2 text-sm font-semibold shadow-lg shadow-blue-500/20"
              >
                <span>Explore Projects</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="btn-secondary inline-flex items-center justify-center gap-2 text-sm font-semibold"
              >
                Contact Me
              </a>
            </div>

            {/* Resume & Social Links */}
            <div className="flex items-center gap-6 justify-center lg:justify-start">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>Download Resume</span>
              </a>

              <div className="flex space-x-3">
                <a
                  href="https://github.com/tsegayes332-cell"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-600 hover:bg-blue-50/50 transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="mailto:tsegayes332@gmail.com"
                  aria-label="Email Contact"
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-600 hover:bg-blue-50/50 transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Code & Terminal Window (5/6 cols on lg) */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0">
            {/* Background ambient glow behind editor */}
            <div
              style={{
                position: 'absolute',
                inset: '-12px',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, rgba(37,99,235,0.25), rgba(124,58,237,0.2))',
                filter: 'blur(20px)',
                zIndex: 0,
              }}
            />

            {/* Code Editor Container */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl border"
              style={{
                background: '#0f172a',
                borderColor: 'rgba(255,255,255,0.1)',
                zIndex: 1,
              }}
            >
              {/* Window Titlebar */}
              <div
                className="flex items-center justify-between px-4 py-3 border-b"
                style={{
                  background: '#1e293b',
                  borderColor: 'rgba(255,255,255,0.08)',
                }}
              >
                {/* Window Controls Dots */}
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 inline-block opacity-85 hover:opacity-100 transition-opacity" />
                  <span className="w-3 h-3 rounded-full bg-amber-500 inline-block opacity-85 hover:opacity-100 transition-opacity" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block opacity-85 hover:opacity-100 transition-opacity" />
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 text-xs">
                  <button
                    onClick={() => setActiveTab('developer.ts')}
                    className={`px-3 py-1 rounded-md transition-all font-mono flex items-center gap-1.5 ${
                      activeTab === 'developer.ts'
                        ? 'bg-slate-900 text-blue-400 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span className="text-blue-400">TS</span>
                    <span>developer.ts</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('stats.sh')}
                    className={`px-3 py-1 rounded-md transition-all font-mono flex items-center gap-1.5 ${
                      activeTab === 'stats.sh'
                        ? 'bg-slate-900 text-emerald-400 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span className="text-emerald-400">$</span>
                    <span>status.sh</span>
                  </button>
                </div>

                {/* Status Indicator */}
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="hidden sm:inline text-[11px]">Ready</span>
                </div>
              </div>

              {/* Code Content Area */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto select-none">
                {activeTab === 'developer.ts' ? (
                  <div className="space-y-1 text-slate-300">
                    <div>
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-blue-300 font-semibold">developer</span>
                      <span className="text-slate-400">:</span>{' '}
                      <span className="text-amber-300">DeveloperProfile</span>{' '}
                      <span className="text-slate-400">=</span> <span className="text-slate-400">{'{'}</span>
                    </div>

                    <div className="pl-4">
                      <span className="text-sky-300">name</span>
                      <span className="text-slate-400">:</span>{' '}
                      <span className="text-emerald-300">"Selamawit Tsegaye"</span>
                      <span className="text-slate-400">,</span>
                    </div>

                    <div className="pl-4">
                      <span className="text-sky-300">role</span>
                      <span className="text-slate-400">:</span>{' '}
                      <span className="text-emerald-300">"Full-Stack &amp; Mobile Engineer"</span>
                      <span className="text-slate-400">,</span>
                    </div>

                    <div className="pl-4">
                      <span className="text-sky-300">location</span>
                      <span className="text-slate-400">:</span>{' '}
                      <span className="text-emerald-300">"Addis Ababa, Ethiopia"</span>
                      <span className="text-slate-400">,</span>
                    </div>

                    <div className="pl-4">
                      <span className="text-sky-300">degree</span>
                      <span className="text-slate-400">:</span>{' '}
                      <span className="text-emerald-300">"B.Sc. Computer Science"</span>
                      <span className="text-slate-400">,</span>
                    </div>

                    <div className="pl-4">
                      <span className="text-sky-300">primaryStack</span>
                      <span className="text-slate-400">:</span>{' '}
                      <span className="text-slate-400">[</span>
                    </div>
                    <div className="pl-8 text-amber-200">
                      <span>"React"</span><span className="text-slate-400">, </span>
                      <span>"React Native"</span><span className="text-slate-400">, </span>
                      <span>"Node.js"</span><span className="text-slate-400">, </span>
                      <span>"MongoDB"</span><span className="text-slate-400">, </span>
                      <span>"MySQL"</span>
                    </div>
                    <div className="pl-4 text-slate-400">],</div>

                    <div className="pl-4">
                      <span className="text-sky-300">hardWorker</span>
                      <span className="text-slate-400">:</span>{' '}
                      <span className="text-orange-400">true</span>
                      <span className="text-slate-400">,</span>
                    </div>

                    <div className="pl-4">
                      <span className="text-sky-300">availableForHire</span>
                      <span className="text-slate-400">:</span>{' '}
                      <span className="text-orange-400">true</span>
                    </div>

                    <div>
                      <span className="text-slate-400">{'}'};</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2 text-slate-300">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">$</span>
                      <span className="text-slate-200">curl -s https://selamawit.dev/status</span>
                    </div>
                    <div className="text-slate-400 text-xs pl-2 border-l-2 border-slate-700 py-1">
                      <div>✓ Systems: <span className="text-emerald-400">All Live &amp; Responsive</span></div>
                      <div>✓ Projects Shipped: <span className="text-blue-400">5 Full-Stack &amp; Mobile</span></div>
                      <div>✓ Code Quality: <span className="text-blue-400">Clean, Modular &amp; Documented</span></div>
                      <div>✓ Database: <span className="text-amber-400">MongoDB, PostgreSQL, MySQL</span></div>
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                      <span className="text-emerald-400 font-bold">$</span>
                      <span className="text-slate-200">selamawit --contact</span>
                    </div>
                    <div className="text-emerald-400 text-xs pl-2">
                      &gt; Open for exciting software engineering roles! 🚀
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom bar */}
              <div
                className="px-4 py-2 text-[11px] font-mono flex items-center justify-between border-t"
                style={{
                  background: '#0b1120',
                  borderColor: 'rgba(255,255,255,0.05)',
                  color: '#64748b',
                }}
              >
                <span>UTF-8</span>
                <span>TypeScript / React</span>
                <span className="text-emerald-400">● Live Preview</span>
              </div>
            </div>

            {/* Floating Metric Badges */}
            <div
              className="hidden sm:flex items-center gap-3 absolute -bottom-5 -left-4 bg-white rounded-xl p-3.5 border border-slate-200 shadow-xl"
              style={{ zIndex: 2 }}
            >
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-base">
                🚀
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">5+ Full-Stack Apps</div>
                <div className="text-[11px] text-slate-500">Shipped &amp; Tested</div>
              </div>
            </div>

            <div
              className="hidden sm:flex items-center gap-2 absolute -top-4 -right-3 bg-white rounded-xl px-3.5 py-2 border border-slate-200 shadow-lg"
              style={{ zIndex: 2 }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-slate-800">Open to Work</span>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <a
          href="#about"
          className="text-slate-400 hover:text-blue-600 transition-colors p-2 inline-block"
          aria-label="Scroll to About section"
        >
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;