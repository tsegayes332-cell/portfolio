import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'sent' | 'error'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Opens the default mail client with pre-filled fields
    const mailtoLink = `mailto:tsegayes332@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailtoLink;
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'tsegayes332@gmail.com',
      href: 'mailto:tsegayes332@gmail.com'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      value: '+251 940 680 260',
      href: 'tel:+251940680260'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      value: 'Addis Ababa, Ethiopia',
      href: null
    }
  ];

  return (
    <section id="contact" className="section-padding" style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #f8f0ff 100%)' }}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block bg-primary/5 inline-block px-3 py-1 rounded-full">Get In Touch</p>
          <h2 className="section-title">Contact Me</h2>
          <div className="decoration-line mx-auto mt-4"></div>
          <p className="text-text-secondary max-w-xl mx-auto mt-6">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-2xl p-5 border border-light-gray card-hover flex items-center gap-4">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs text-text-secondary font-medium uppercase tracking-wider mb-0.5">{info.title}</p>
                  {info.href ? (
                    <a href={info.href} className="text-sm font-semibold text-text-primary hover:text-primary transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-text-primary">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* GitHub link */}
            <a href="https://github.com/tsegayes332-cell" target="_blank" rel="noopener noreferrer"
              className="bg-white rounded-2xl p-5 border border-light-gray card-hover flex items-center gap-4 w-full">
              <div className="w-11 h-11 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-text-secondary font-medium uppercase tracking-wider mb-0.5">GitHub</p>
                <p className="text-sm font-semibold text-text-primary">tsegayes332-cell</p>
              </div>
            </a>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-light-gray shadow-sm">
              <h3 className="text-lg font-bold text-text-primary mb-6">Send a Message</h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Name</label>
                  <input
                    type="text" name="name" value={form.name} onChange={handleChange} required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-light-gray text-sm text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary transition-colors"
                    style={{ background: '#f8fafc' }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange} required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-light-gray text-sm text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary transition-colors"
                    style={{ background: '#f8fafc' }}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Subject</label>
                <input
                  type="text" name="subject" value={form.subject} onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 rounded-xl border border-light-gray text-sm text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary transition-colors"
                  style={{ background: '#f8fafc' }}
                />
              </div>

              <div className="mb-6">
                <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Message</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange} required rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-xl border border-light-gray text-sm text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary transition-colors resize-none"
                  style={{ background: '#f8fafc' }}
                />
              </div>

              <button type="submit" disabled={status === 'sending'}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-60">
                {status === 'sending' ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : status === 'sent' ? (
                  <>✅ Message Sent!</>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>

              {status === 'sent' && (
                <p className="text-center text-sm text-green-600 mt-3 font-medium">
                  Thanks! Your email client should have opened. 📬
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;