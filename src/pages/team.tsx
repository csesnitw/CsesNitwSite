import { useEffect, useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Linkedin, Github, Twitter } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ParticlesBackground from "@/components/particles-background";

type Member = {
  id: string;
  name: string;
  position: string;
  year: string;
  imageUrl?: string | null;
  linkedinUrl?: string | null;
  githubUrl?: string | null;
  twitterUrl?: string | null;
  displayOrder?: number | null;
};

export default function TeamPage() {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    // Load from static JSON bundled by Vite
    import("@/data/team.json").then((mod) => setMembers(mod.default as Member[]));
  }, []);

  const [leaders, rest] = useMemo(() => {
    const gs = members.filter((m) => /general secretary/i.test(m.position));
    const others = members.filter((m) => !/general secretary/i.test(m.position));
    // Sort GS by displayOrder then name
    gs.sort((a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0) || a.name.localeCompare(b.name));
    // Sort rest by displayOrder then name
    others.sort((a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0) || a.name.localeCompare(b.name));
    return [gs, others] as const;
  }, [members]);

  const Social = ({ m }: { m: Member }) => (
    <div className="flex justify-center space-x-3 mt-3">
      {m.linkedinUrl && (
        <a href={m.linkedinUrl} className="text-slate-400 hover:text-blue-400" target="_blank" rel="noreferrer">
          <Linkedin className="h-5 w-5" />
        </a>
      )}
      {m.githubUrl && (
        <a href={m.githubUrl} className="text-slate-400 hover:text-slate-300" target="_blank" rel="noreferrer">
          <Github className="h-5 w-5" />
        </a>
      )}
      {m.twitterUrl && (
        <a href={m.twitterUrl} className="text-slate-400 hover:text-blue-400" target="_blank" rel="noreferrer">
          <Twitter className="h-5 w-5" />
        </a>
      )}
    </div>
  );

  return (
    <div className="min-h-screen">
      <div className="pt-24 pb-16 px-4">
        <ParticlesBackground />
        <Navigation />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold ">Our Team</h1>
            <p className="text-xl text-slate-400 mt-2">
              Meet the people driving CSES NITW forward.
            </p>
          </div>

          {/* General Secretaries row - centered and bigger */}
          {leaders.length > 0 && (
            <div className="mb-14">
              <div className="grid place-items-center gap-8 sm:grid-cols-2">
                {leaders.map((m) => (
                  <Card
                    key={m.id}
                    className="w-full max-w-xl glass-card hover-lift text-center"
                  >
                    <CardContent className="p-8">
                      <div className="w-28 h-28 rounded-full mx-auto mb-4 bg-gradient-to-br from-green-900 to-black flex items-center justify-center">
                        <Users className="text-green-400 text-3xl" />
                      </div>
                      <h2 className="text-2xl font-semibold ">{m.name}</h2>
                      <p className="text-green-400  mt-1">{m.position}</p>
                      <p className="text-sm text-slate-400 mt-1">{m.year}</p>
                      <Social m={m} />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Rest of the team in a responsive grid */}
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((m) => (
              <Card key={m.id} className="glass-card hover-lift text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-gradient-to-br from-green-900 to-black flex items-center justify-center">
                    <Users className="text-green-400 text-3xl" />
                  </div>
                  <h3 className="text-xl font-semibold ">{m.name}</h3>
                  <p className="text-green-300  mt-1">{m.position}</p>
                  <p className="text-sm text-slate-400 mt-1">{m.year}</p>
                  <Social m={m} />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
