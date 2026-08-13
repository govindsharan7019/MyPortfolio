import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0B0B0C] border-t border-zinc-900 py-12 px-8 text-zinc-500 font-sans">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Copyright & Tech Flex */}
        <div className="text-center md:text-left">
          <p className="text-sm text-zinc-400 font-semibold">
            © 2026 Govind. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600 mt-1">
            Engineered from the shadows using <span className="hover:text-batAccent transition-colors duration-200">React</span> & <span className="hover:text-batAccent transition-colors duration-200">GSAP</span>.
          </p>
        </div>

        {/* Center: System Status Signal */}
        <div className="flex items-center space-x-2 bg-zinc-950 px-3 py-1.5 rounded-full border border-zinc-900">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-batAccent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-batAccent"></span>
          </span>
          <span className="text-[11px] font-mono tracking-wider uppercase text-zinc-400">
            Signal Active: Open for Opportunities
          </span>
        </div>

        {/* Right Side: Professional Vectors & Navigation */}
        <div className="flex items-center space-x-6 text-sm">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors duration-200 font-medium"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors duration-200 font-medium"
          >
            LinkedIn
          </a>
          <button 
            onClick={scrollToTop} 
            className="text-xs text-zinc-600 hover:text-batAccent transition-colors duration-200 flex items-center space-x-1 border border-zinc-800 hover:border-batAccent/30 px-2.5 py-1 rounded"
          >
            <span>Top</span>
            <span>↑</span>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
