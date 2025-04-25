import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-4 px-6 border-t border-gray-800 mt-auto">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} NeuroScan AI. All rights reserved.
        </p>
        <div className="flex space-x-4 text-sm">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;