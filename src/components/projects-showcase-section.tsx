import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Trophy, Github, Globe } from "lucide-react";

export default function ProjectsShowcaseSection() {
  const projects = [
    {
      icon: Briefcase,
      title: "Internito",
      description:
        "A platform built by the CSES Development Team that helps students prepare for internships. It allows seniors to share their experiences, providing juniors with insights on everything from interview preparation to on-the-job performance.",
      "data-testid": "internito",
      githubUrl: "https://github.com/csesnitw/internito",
      websiteUrl: "https://internito.csesnitw.in/",
    },
    {
      icon: Trophy,
      title: "CodeMon Leaderboard",
      description:
       "A dedicated platform to track participant progress in CodeMon contests. Users can monitor their scores based on official scoring criteria and track their performance streaks throughout the series.",
      "data-testid": "codemon-leaderboard",
      githubUrl: "https://github.com/csesnitw/codemon-leaderboard",
      websiteUrl: "https://codemon.csesnitw.in/",
    },
  ];

  return (
    <section id="projects-showcase" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold mb-4"
            data-testid="projects-showcase-title"
          >
            Our Projects
          </h2>
          <p
            className="text-xl text-slate-400 max-w-3xl mx-auto"
            data-testid="projects-showcase-subtitle"
          >
            Innovative projects developed by our team to help the student
            community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="cyberpunk-glow-card hover-lift relative"
              data-testid={`project-card-${project["data-testid"]}`}
            >
              <div className="absolute inset-0 cyberpunk-scan-lines"></div>
              <CardContent className="p-6 relative z-10 text-center">
                <project.icon className="text-green-500 text-3xl mb-4 mx-auto" />
                <h3
                  className="text-2xl font-semibold mb-3"
                  data-testid={`project-title-${project["data-testid"]}`}
                >
                  {project.title}
                </h3>
                <p
                  className="text-slate-300"
                  data-testid={`project-description-${project["data-testid"]}`}
                >
                  {project.description}
                </p>
                <div className="flex justify-center space-x-4 mt-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-green-400 transition-colors"
                    >
                      <Github className="h-6 w-6" />
                    </a>
                  )}
                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-green-400 transition-colors"
                    >
                      <Globe className="h-6 w-6" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}