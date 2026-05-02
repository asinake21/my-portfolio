import React from 'react';
// import workingImg from '../assets/images/working.png'; // Uncomment when image is added
const workingImg = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4">
              <span className="text-primary">01.</span> About Me
              <div className="h-[1px] flex-1 bg-foreground/10 ml-4"></div>
            </h2>
            
            <div className="space-y-6 text-lg text-secondary leading-relaxed">
              <p>
                I'm currently a 3rd-year Computer Science student at <span className="text-foreground font-semibold">Bahir Dar University</span>. My journey into web development started with a simple curiosity about how things work behind the screen, which eventually evolved into a deep interest in the <span className="text-foreground">MERN stack</span>.
              </p>
              <p>
                I don't just write code; I enjoy the process of turning a rough idea into a functional, user-centric application. Whether it's architecting a database in MongoDB or fine-tuning a UI in React, I focus on building things that are both <span className="text-foreground">clean</span> and <span className="text-foreground">efficient</span>.
              </p>
              <p>
                Right now, I'm looking for an internship opportunity where I can contribute my skills to real-world projects and learn from experienced developers. I'm a fast learner, a disciplined worker, and I genuinely love what I do.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="glass p-6 rounded-2xl border-foreground/5 space-y-2 group hover:border-primary/20 transition-colors">
                <h3 className="text-4xl font-black text-primary italic">3rd</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-secondary">Year Student</p>
              </div>
              <div className="glass p-6 rounded-2xl border-foreground/5 space-y-2 group hover:border-accent/20 transition-colors">
                <h3 className="text-4xl font-black text-accent italic">5+</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-secondary">Core Skills</p>
              </div>
            </div>
          </div>

          <div className="relative group transition-all duration-700 delay-200">
            <div className="relative rounded-[32px] overflow-hidden border border-foreground/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10"></div>
              <img 
                src={workingImg} 
                alt="Asinake at work" 
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-8 left-8 z-20">
                <p className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-1">Current Focus</p>
                <h4 className="text-xl font-bold text-white">Full-Stack Scalability</h4>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
