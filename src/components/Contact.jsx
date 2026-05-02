import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-4">
              <span className="text-primary">03.</span> Get In Touch
              <div className="h-[1px] w-20 bg-foreground/10 ml-4"></div>
            </h2>
            <p className="text-secondary text-lg mb-10">
              I'm currently looking for an internship opportunity. If you have any questions or just want to say hi, feel free to reach out. I'll do my best to get back to you!
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-secondary uppercase tracking-widest">Email</p>
                  <a href="mailto:asinakehailie00@gmail.com" className="text-xl font-bold hover:text-primary transition-colors">
                    asinakehailie00@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:text-background transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-secondary uppercase tracking-widest">Phone</p>
                  <p className="text-xl font-bold">
                    +251 929 395 199 <span className="text-secondary font-normal mx-2 text-sm">/</span> +251 933 252 270
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-green-400/10 border border-green-400/20 flex items-center justify-center group-hover:bg-green-400 group-hover:text-background transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-secondary uppercase tracking-widest">Location</p>
                  <p className="text-xl font-bold">Ethiopia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-10 rounded-3xl border-foreground/5 transition-all duration-700 delay-200">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-background/50 border border-foreground/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-background/50 border border-foreground/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="Internship Opportunity"
                  className="w-full bg-background/50 border border-foreground/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary ml-1">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="How can I help you?"
                  className="w-full bg-background/50 border border-foreground/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-3 py-5 text-lg">
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
