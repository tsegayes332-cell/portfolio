import React, { useState } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Tadesse Kebede (MSc)",
      position: "Head Registrar",
      company: "College of Computing and Informatics, Haramaya University",
      avatar: "TK",
      content: "Selamawit is an intelligent, hardworking, and innovative student who participated effectively in class. She has the ability to grasp complex ideas and shows great motivation for further studies or professional roles in Computer Science. I highly recommend her for any software development position.",
      rating: 5,
      relationship: "Academic Supervisor"
    },
    {
      name: "HUCISA Committee",
      position: "Student Association",
      company: "Haramaya University Computing and Informatics Students Association",
      avatar: "HU",
      content: "Selamawit demonstrated exceptional dedication and active membership in HUCISA during the 2024-2025 academic year. Her contributions to the computing community and commitment to professional development are truly commendable.",
      rating: 5,
      relationship: "Organization"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-light-gray'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-dark-light">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Recommendations
          </h2>
          
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="bg-dark-light rounded-2xl p-8 shadow-xl border border-light-gray">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                  {testimonials[activeIndex].avatar}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary">
                    {testimonials[activeIndex].name}
                  </h3>
                  <p className="text-primary font-medium">
                    {testimonials[activeIndex].position}
                  </p>
                  <p className="text-text-secondary text-sm">
                    {testimonials[activeIndex].company}
                  </p>
                  <span className="inline-block mt-1 px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
                    {testimonials[activeIndex].relationship}
                  </span>
                </div>
              </div>
              
              <div className="mb-4">
                {renderStars(testimonials[activeIndex].rating)}
              </div>
              
              <blockquote className="text-text-secondary text-lg leading-relaxed mb-6 italic">
                "{testimonials[activeIndex].content}"
              </blockquote>
              
              {/* Navigation Buttons */}
              <div className="flex justify-between items-center">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-dark-light shadow-md hover:shadow-lg transition-shadow duration-200 border border-light-gray"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-6 h-6 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                        index === activeIndex ? 'bg-primary' : 'bg-light-gray'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-dark-light shadow-md hover:shadow-lg transition-shadow duration-200 border border-light-gray"
                  aria-label="Next testimonial"
                >
                  <svg className="w-6 h-6 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Thumbnail Testimonials */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {testimonials.map((testimonial, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`p-4 rounded-lg text-left transition-all duration-200 ${
                    index === activeIndex
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-dark-light text-text-secondary hover:bg-dark hover:border-primary/30 border border-light-gray'
                  }`}
                >
                  <div className="flex items-center mb-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-2 ${
                      index === activeIndex ? 'bg-white text-primary' : 'bg-primary text-white'
                    }`}>
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">
                        {testimonial.name}
                      </div>
                      <div className={`text-xs truncate ${
                        index === activeIndex ? 'text-primary-light' : 'text-text-secondary'
                      }`}>
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* LinkedIn Recommendations Link */}
          <div className="mt-12 text-center">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors duration-200 font-medium shadow-soft"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              View More Recommendations on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
