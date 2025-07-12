const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React/Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Flutter", level: 75 }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", level: 90 },
      { name: "FastAPI", level: 85 },
      { name: "Node.js", level: 75 },
      { name: "Java", level: 70 }
    ]
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Docker", level: 75 },
      { name: "Git", level: 95 }
    ]
  },
  {
    title: "AI/ML & Other",
    skills: [
      { name: "LangChain", level: 80 },
      { name: "C++", level: 70 },
      { name: "Firebase", level: 75 },
      { name: "RESTful APIs", level: 90 }
    ]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Technical
            <span className="block text-primary">Skills</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            A comprehensive overview of my technical expertise across 
            different domains and technologies.
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-2xl font-bold text-primary mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-primary transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-8">
            Always learning and exploring new technologies to stay current 
            with industry trends and best practices.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground">Years Coding</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-muted-foreground">Major Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};