import React from 'react';
import { Layout, Server, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="text-primary" size={24} />,
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS"],
      color: "border-primary/20 bg-primary/5"
    },
    {
      title: "Backend",
      icon: <Server className="text-accent" size={24} />,
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "Mongoose"],
      color: "border-accent/20 bg-accent/5"
    },
    {
      title: "Database",
      icon: <Database className="text-green-400" size={24} />,
      skills: ["MongoDB", "Cloudinary", "Firebase (Basic)", "JSON", "Aggregation"],
      color: "border-green-400/20 bg-green-400/5"
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Stack</h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            A comprehensive set of tools and technologies I use to bring ideas to life. My focus is on the MERN stack for modern, scalable applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div 
              key={cat.title}
              className={`p-8 rounded-3xl border ${cat.color} backdrop-blur-sm transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-foreground/5 border border-foreground/10">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold">{cat.title}</h3>
              </div>
              <ul className="space-y-4">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-secondary group">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></div>
                    <span className="group-hover:text-foreground transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
