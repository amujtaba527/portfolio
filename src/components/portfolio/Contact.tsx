import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Let's
            <span className="block text-primary">Connect</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate or discuss opportunities? 
            I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you have a project in mind, want to collaborate, 
                or just want to say hello, I'm always open to new opportunities 
                and conversations.
              </p>
            </div>
            
            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="p-6 bg-surface border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">amujtaba527@gmail.com</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-surface border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-muted-foreground">+92 313 4223161</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-surface border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-muted-foreground">Lahore, Pakistan</p>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/amujtaba527" 
                  className="w-12 h-12 bg-surface border border-border rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                >
                  <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/amujtaba527/" 
                  className="w-12 h-12 bg-surface border border-border rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="p-8 bg-surface border-border">
            <h3 className="text-2xl font-bold mb-6">Send Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input 
                    placeholder="John" 
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input 
                    placeholder="Doe" 
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input 
                  placeholder="Project Collaboration" 
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Tell me about your project or idea..."
                  rows={6}
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-300 hover:shadow-glow"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
        
        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2025 Ahmad Mujtaba. Crafted with passion and precision.
          </p>
        </div>
      </div>
    </section>
  );
};