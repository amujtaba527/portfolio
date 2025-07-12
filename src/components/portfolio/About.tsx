export const About = () => {
  return <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                About
                <span className="block text-primary">Me</span>
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">I'm a software engineer with a passion for creating innovative solutions. My journey in technology has been driven by curiosity and a desire to build applications that make a difference.</p>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                I specialize in full-stack development and have hands-on experience 
                with modern frameworks and AI integration. I enjoy tackling complex 
                problems and turning ideas into scalable, user-friendly applications.
              </p>
            </div>
            
            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-primary">15+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-primary">10+</h3>
                <p className="text-muted-foreground">Technologies Mastered</p>
              </div>
            </div>
          </div>
          
          {/* Right side - Visual element */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-surface rounded-2xl border border-border flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-primary rounded-full mx-auto flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">AM</span>
                </div>
                <p className="text-muted-foreground">
                  Building the future, one line of code at a time
                </p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary rounded-full animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-primary/60 rounded-full animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </section>;
};