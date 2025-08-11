import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Github, Twitter } from "lucide-react";
import type { TeamMember } from "@shared/schema";

export default function TeamSection() {
  const { data: teamMembers = [], isLoading } = useQuery<TeamMember[]>({
    queryKey: ["/api/team"],
  });

  if (isLoading) {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading team members...</div>
        </div>
      </section>
    );
  }

  const getPositionColor = (position: string) => {
    if (position.includes('President')) return 'text-green-500 matrix-glow';
    if (position.includes('Vice')) return 'text-green-400 matrix-glow';
    if (position.includes('Technical')) return 'text-green-300 matrix-glow';
    if (position.includes('Events')) return 'text-green-400 matrix-glow';
    if (position.includes('Design')) return 'text-green-300 matrix-glow';
    if (position.includes('Outreach')) return 'text-green-400 matrix-glow';
    return 'text-green-500 matrix-glow';
  };

  return (
    <section id="team" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 matrix-text matrix-glow" data-testid="team-title">Our Team</h2>
          <p className="text-xl text-slate-400 matrix-text" data-testid="team-subtitle">
            Meet the passionate individuals driving CSES NITW forward.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="glass-card text-center hover-lift">
              <CardContent className="p-6">
                <img 
                  src={member.imageUrl || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"} 
                  alt={`${member.name} profile`} 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  data-testid={`member-image-${member.id}`}
                />
                <h4 className="text-xl font-semibold mb-2 matrix-text" data-testid={`member-name-${member.id}`}>
                  {member.name}
                </h4>
                <p className={`mb-2 matrix-text ${getPositionColor(member.position)}`} data-testid={`member-position-${member.id}`}>
                  {member.position}
                </p>
                <p className="text-sm text-slate-400 mb-4 matrix-text" data-testid={`member-year-${member.id}`}>
                  {member.year}
                </p>
                <div className="flex justify-center space-x-3">
                  {member.linkedinUrl && (
                    <a 
                      href={member.linkedinUrl} 
                      className="text-slate-400 hover:text-blue-400 transition-colors"
                      data-testid={`member-linkedin-${member.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {member.githubUrl && (
                    <a 
                      href={member.githubUrl} 
                      className="text-slate-400 hover:text-slate-300 transition-colors"
                      data-testid={`member-github-${member.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {member.twitterUrl && (
                    <a 
                      href={member.twitterUrl} 
                      className="text-slate-400 hover:text-blue-400 transition-colors"
                      data-testid={`member-twitter-${member.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="h-5 w-5" />
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
