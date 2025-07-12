import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Assistant Platform",
    description: "Built an intelligent AI assistant using LangChain and FastAPI, featuring natural language processing and contextual responses.",
    technologies: ["Python", "LangChain", "FastAPI", "PostgreSQL"],
    category: "AI/ML",
    status: "Prototype",
    github: "https://github.com/amujtaba527/AIChatBot",
    button: "Not Available"
  },
  {
    title: "Complaints Management System",
    description: "Developed a comprehensive complaint tracking system with automated workflow and real-time notifications.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    category: "Full-Stack",
    status: "Production",
    github: "https://github.com/amujtaba527/ComplaintManagementSystem",
    link: "https://complaint-manage.vercel.app/"
  },
  {
    title: "Mobile Chat Application",
    description: "Cross-platform mobile application for chat with the feature f anonymous messaging in groups and offline sync capabilities and intuitive UI.",
    technologies: ["Flutter", "Dart", "Firebase", "SQLite"],
    category: "Mobile",
    status: "Development",
    github: "https://github.com/amujtaba527/chat_app",
    button: "Not Available"
  },
  {
    title: "Sundown Landing Page",
    description: "A modern landing page for a startup or product with a clean and minimalist design.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    category: "UI/UX",
    status: "Featured",
    github: "https://github.com/amujtaba527/frontend-sundown",
    link: "https://frontend-sundown.vercel.app/"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Featured
            <span className="block text-primary">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            A collection of my recent work showcasing different technologies 
            and problem-solving approaches.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group p-8 bg-surface border-border hover:border-primary/50 transition-all duration-300 hover:shadow-subtle cursor-pointer"
            >
              {/* Project Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <span className="text-xs px-2 py-1 bg-surface-hover text-muted-foreground rounded">
                  {project.status}
                </span>
              </div>
              
              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 text-sm bg-background border border-border rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Actions */}
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center gap-2 hover:bg-surface-hover"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <Github className="w-4 h-4" />
                  Code
                </Button>
                {project.link && (
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center gap-2 hover:bg-surface-hover"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
        
        {/* View All Projects CTA */}
        {/* <div className="text-center">
          <Button 
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View All Projects
          </Button>
        </div> */}
      </div>
    </section>
  );
};