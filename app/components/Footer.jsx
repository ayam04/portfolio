import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative border-t border-gray-200/50 text-gray-900 mt-8 overflow-hidden">
      {/* Editorial decorative elements */}
      <div className="absolute top-8 right-20 w-6 h-6 opacity-6">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-gray-400"/>
        </svg>
      </div>
      <div className="absolute bottom-8 left-16 w-8 h-8 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-slate-300"/>
        </svg>
      </div>
      <div className="absolute top-4 left-1/3 w-4 h-4 opacity-7">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-zinc-400"/>
        </svg>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-4">
        <div className="grid md:grid-cols-12 gap-16">
          {/* Brand Section - Editorial style */}
          <div className="md:col-span-6">
            <h3 className="text-2xl font-light text-gray-900 mb-6">
              Ayamullah Khan
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed max-w-md font-light">
              AI Engineer and Full Stack Developer passionate about building intelligent solutions 
              that drive innovation and create meaningful impact.
            </p>
            <div className="flex space-x-6">
              <Link 
                href="https://github.com/ayam04"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors border-b border-transparent hover:border-gray-900"
              >
                GitHub
              </Link>
              <Link 
                href="https://linkedin.com/in/ayam04"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors border-b border-transparent hover:border-gray-900"
              >
                LinkedIn
              </Link>
              <Link 
                href="https://ayamullah-khan.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors border-b border-transparent hover:border-gray-900"
              >
                Portfolio
              </Link>
            </div>
          </div>
          
          {/* Quick Links - Editorial style */}
          <div className="md:col-span-3">
            <h4 className="text-sm uppercase tracking-wider text-gray-500 font-light mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  href="https://drive.google.com/file/d/1qw-CG5YYz_8YhJ26e0e9vqSVBVgqt31W/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services - Editorial style */}
          <div className="md:col-span-3">
            <h4 className="text-sm uppercase tracking-wider text-gray-500 font-light mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="https://calendly.com/ayamk/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link 
                  href="https://calendly.com/ayamk/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  AI/ML Solutions
                </Link>
              </li>
              <li>
                <Link 
                  href="https://calendly.com/ayamk/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  GenAI Development
                </Link>
              </li>
              <li>
                <Link 
                  href="https://calendly.com/ayamk/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Data Science
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section - Editorial style */}
        <div className="border-t border-gray-200/50 mt-16 pt-8 text-center">
          <p className="text-sm text-gray-500 font-light">
            © {currentYear} Ayamullah Khan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;