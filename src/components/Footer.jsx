import React from 'react';
import { Code2, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-foreground/5 bg-background/80">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
              <Code2 className="text-primary" size={20} />
            </div>
            <span className="text-lg font-display font-bold">
              Asinake<span className="text-primary">.dev</span>
            </span>
          </a>
          <p className="text-secondary text-sm">
            Handcrafted with intent by Asinake Hailie. &copy; {currentYear}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/asinakeh" target="_blank" className="text-secondary hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="text-secondary hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:asinakehailie00@gmail.com" className="text-secondary hover:text-primary transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
