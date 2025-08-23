import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Github, Twitter, Users } from "lucide-react";
import type { TeamMember } from "@shared/schema";
import { getTeamMembers } from "@/lib/data";

export default function TeamSection() {
  const { data: teamMembers = [], isLoading } = useQuery<TeamMember[]>({
    queryKey: ["team"],
    queryFn: () => getTeamMembers(),
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
    if (position.includes('President') || position.includes('General Secretary')) return 'text-green-500  holographic-text';
    if (position.includes('Vice')) return 'text-green-400 ';
    if (position.includes('Technical')) return 'text-green-300 ';
    if (position.includes('Events')) return 'text-green-400 ';
    if (position.includes('Design')) return 'text-green-300 ';
    if (position.includes('Outreach')) return 'text-green-400 ';
    return 'text-green-500 ';
  };

  return (
    <section id="team" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 " data-testid="team-title">Our Team</h2>
          <p className="text-xl text-slate-400" data-testid="team-subtitle">
            Meet the passionate individuals driving CSES NITW forward.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="cyberpunk-glow-card text-center hover-lift relative">
              <div className="absolute inset-0 cyberpunk-scan-lines"></div>
              <CardContent className="p-6 relative z-10">
                <div className="relative inline-block">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-gradient-to-br from-green-900 to-black flex items-center justify-center cyberpunk-border">
                    <Users className="text-green-400 text-3xl" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-2 " data-testid={`member-name-${member.id}`}>
                  {member.name}
                </h4>
                <p className={`mb-2 ${getPositionColor(member.position)}`} data-testid={`member-position-${member.id}`}>
                  {member.position}
                </p>
                <p className="text-sm text-slate-400 mb-4" data-testid={`member-year-${member.id}`}>
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
