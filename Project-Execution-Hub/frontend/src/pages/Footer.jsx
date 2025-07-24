import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700 text-sm">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-center sm:text-left">
          <p>
            Built with ❤️ by <span className="font-semibold">Rani Rangari</span>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            🎓 PG-DAC (CDAC) Academic Project | SoftPolynomials, Nagpur, India | 2023

          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/rangari-rani"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/rani-rangari"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
