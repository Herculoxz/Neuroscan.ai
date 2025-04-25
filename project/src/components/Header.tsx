import React from 'react';
import { Brain } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center border-b border-gray-800">
      <div className="flex items-center space-x-2">
        <Brain className="w-8 h-8 text-blue-400" />
        <h1 className="text-xl font-bold text-white">NeuroScan AI</h1>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;