import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-primary">404</h1>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
          Page Not Found
        </h2>

        <p className="text-text-secondary mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-light transition-colors"
          >
            Back to Home
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-light-gray text-text-primary font-medium rounded-lg hover:bg-light transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;