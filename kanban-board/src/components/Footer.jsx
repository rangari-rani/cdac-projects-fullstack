import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 text-sm py-6 border-t border-gray-700 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-2 md:mb-0">
          Built with ❤️ by <span className="text-white font-semibold">Rani Rangari</span>
        </p>
        <div className="flex space-x-6">
          <a
            href="https://github.com/rangari-rani"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rani-rangari/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
