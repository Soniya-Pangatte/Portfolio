import { Heart, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-display font-bold text-gradient mb-2">
              SONIYA
            </h3>
            <p className="text-muted-foreground">
              Computer Science Student & Web Developer
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:soniya@example.com"
              className="p-3 rounded-full glass-card hover:bg-white/10 hover:text-primary transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full glass-card hover:bg-white/10 hover:text-primary transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full glass-card hover:bg-white/10 hover:text-primary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Soniya
          </p>
        </div>
      </div>
    </footer>
  );
}