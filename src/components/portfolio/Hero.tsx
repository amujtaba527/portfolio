import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, View } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';

export const Hero = () => {
  return <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden">
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background opacity-50" />

    <div className="flex flex-col justify-center items-center relative z-10 max-w-7xl mx-auto w-full text-center">
      <div className="animate-fade-in">
        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.85] mb-8">
          <span className="block">AHMAD</span>
          <span className="block text-primary bg-gradient-primary bg-clip-text">
            MUJTABA
          </span>
        </h1>

        {/* Subtitle */}
        <div className="mb-12 max-w-2xl mx-auto text-center">
          <TypeAnimation
            sequence={[
              'Software Engineer',
              1000,
              'Full Stack Developer',
              1000,
              'AI Enthusiast',
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 text-text-secondary"
            repeat={Infinity}
          />
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed  mt-4">Passionate about building full-stack web applications and experimenting with AI integrations. Crafting digital experiences with modern technologies.</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-16 justify-center items-center">
          <Button size="lg" className="group text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-300 hover:shadow-glow" onClick={() => {
            const contactSection = document.querySelector("#projects");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}>
            View My Work
            <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </Button>

          <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-border hover:bg-surface-hover transition-all duration-300" onClick={() => {
            const contactSection = document.querySelector("#contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}>
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center items-center">
          <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-surface-hover transition-all duration-300 group">
            <Github className="w-5 h-5 group-hover:text-primary transition-colors" onClick={() => window.open("https://github.com/amujtaba527")} />
          </a>
          <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-surface-hover transition-all duration-300 group">
            <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" onClick={() => window.open("https://linkedin.com/in/amujtaba527")} />
          </a>
          <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-surface-hover transition-all duration-300 group">
            <Mail className="w-5 h-5 group-hover:text-primary transition-colors" onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=amujtaba527@gmail.com")} />
          </a>
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
        <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
      </div>
    </div>
  </section>;
};