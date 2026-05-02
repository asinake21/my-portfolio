import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Code-Bridge",
      description: "A full-stack learning platform designed for computer science students. It features AI-assisted learning modules, offline course access, and progress tracking.",
      tech: ["React", "Node.js", "Express", "MongoDB", "AI-API"],
      link: "#",
      github: "https://github.com/asinakeh/code-bridge",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
    },
    {
      title: "BDU Proctor Work System",
      description: "A management system built for Bahir Dar University to streamline communication between proctors and students. Simplifies student follow-up and internal reporting.",
      tech: ["MERN Stack", "Tailwind CSS", "Redux", "JWT"],
      link: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1454165833767-027ffea9e7a7?w=800&q=80"
    },
    {
      title: "Rental System",
      description: "A full-stack rental platform for bikes and e-scooters. Includes a booking engine, real-time availability checking, and an admin dashboard for fleet management.",
      tech: ["React", "Express", "MongoDB", "Context API"],
      link: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-4">
              <span className="text-primary">02.</span> Projects
              <div className="h-[1px] w-20 bg-foreground/10 ml-4"></div>
            </h2>
            <p className="text-secondary text-lg">
              Here's a selection of projects I've built. Each one represents a unique challenge where I applied full-stack principles to solve real problems.
            </p>
          </div>
          <a href="https://github.com/asinakeh" target="_blank" className="text-primary hover:underline flex items-center gap-2 font-medium">
            View All on GitHub <ArrowUpRight size={20} />
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group glass rounded-3xl border-foreground/5 overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
              </div>

              {/* Project Info */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  <div className="flex gap-3">
                    <a href={project.github} className="text-secondary hover:text-foreground transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.link} className="text-secondary hover:text-foreground transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <p className="text-secondary mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-secondary">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
