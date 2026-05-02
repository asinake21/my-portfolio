import { ArrowRight, Github, Linkedin, Mail, Code2 } from 'lucide-react';
// import profileImg from '../assets/images/profile.png'; // Uncomment when image is added
const profileImg = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse transition-delay-700"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="transition-all duration-700 ease-out">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
              Available for Internships
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
              Building the web with <span className="text-primary">intent</span> and <span className="text-accent">precision.</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary mb-10 max-w-xl leading-relaxed">
              Hello, I'm <span className="text-foreground font-semibold">Asinake Hailie</span>. A 3rd-year CS student and Full-Stack Developer specializing in the MERN stack. I build practical solutions that bridge the gap between code and reality.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <a href="#projects" className="btn-primary flex items-center gap-2">
                View My Work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
              
              <div className="flex items-center gap-4 ml-2 md:ml-6 border-l border-foreground/10 pl-6 py-2">
                <a href="https://github.com/asinakeh" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="text-secondary hover:text-primary transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:asinakehailie00@gmail.com" className="text-secondary hover:text-primary transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative transition-all duration-700 delay-200">
            <div className="relative w-[480px] h-[580px] mx-auto">
              {/* Profile Image Frame */}
              <div className="absolute inset-0 bg-foreground/5 rounded-[40px] border border-foreground/10 backdrop-blur-sm overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10"></div>
                <img 
                  src={profileImg} 
                  alt="Asinake Hailie" 
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                
                {/* Decorative Elements */}
                <div className="absolute top-6 right-6 p-4 glass rounded-2xl z-20 shadow-xl border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
                    <span className="text-sm font-bold tracking-tight">Available</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -bottom-8 -left-12 glass p-6 rounded-3xl shadow-2xl border-foreground/10 z-20 animate-bounce-slow">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center">
                    <Code2 className="text-accent" size={32} />
                  </div>
                  <div>
                    <p className="text-xs text-secondary font-bold uppercase tracking-[0.2em]">Specialization</p>
                    <p className="text-xl font-black">MERN Stack</p>
                  </div>
                </div>
              </div>

              {/* Geometric Decoration */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-[80px] -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
