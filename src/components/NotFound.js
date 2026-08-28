import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark via-white to-dark">
      <div className="text-center px-6">
        <div className="mb-8">
          <h1 className="text-9xl font-bold gradient-text mb-4">404</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          Page Not Found
        </h2>

        <p className="text-lg text-text-secondary mb-8 max-w-md mx-auto">
          Oops! The page you're looking for seems to have wandered off.
          Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors duration-200 font-medium"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Go Home
          </a>
          
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-200 font-medium"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Contact Me
          </a>
        </div>
        
        <div className="mt-12 text-text-secondary">
          <p>Looking for something else?</p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <a href="/#about" className="text-primary hover:underline">About</a>
            <span className="text-light-gray">|</span>
            <a href="/#projects" className="text-primary hover:underline">Projects</a>
            <span className="text-light-gray">|</span>
            <a href="/#experience" className="text-primary hover:underline">Experience</a>
            <span className="text-light-gray">|</span>
            <a href="/#skills" className="text-primary hover:underline">Skills</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
