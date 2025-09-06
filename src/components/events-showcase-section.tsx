import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Code, Rocket } from "lucide-react";

export default function EventsShowcaseSection() {
  const events = [
    {
      icon: Code,
      title: "CodeMon",
      description:
        "A series of competitive programming contests aimed at fostering a robust coding culture. These contests challenge participants to solve complex algorithmic problems, encouraging them to enhance their problem-solving skills and prepare for technical interviews.",
      "data-testid": "codemon",
    },
    {
      icon: Rocket,
      title: "Noobathon",
      description:
        "A beginner-friendly hackathon designed to immerse students in the world of software development. Participants can explore various domains, including web development, AI/ML, and game development, while collaborating in a supportive and engaging environment.",
      "data-testid": "noobathon",
    },
    {
      icon: Lightbulb,
      title: "Acing the Intern Drive (ATID)",
      description:
        "A comprehensive workshop series designed to help students ace their internship interviews. The event includes mock online tests, resume building sessions, and mock interviews to give students a competitive edge.",
      "data-testid": "atid",
    },
  ];

  return (
    <section id="events-showcase" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold mb-4"
            data-testid="events-showcase-title"
          >
            Our Events
          </h2>
          <p
            className="text-xl text-slate-400 max-w-3xl mx-auto"
            data-testid="events-showcase-subtitle"
          >
            Engaging events that foster community and friendly competition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card
              key={index}
              className="cyberpunk-glow-card hover-lift relative"
              data-testid={`event-card-${event["data-testid"]}`}
            >
              <div className="absolute inset-0 cyberpunk-scan-lines"></div>
              <CardContent className="p-6 relative z-10">
                <event.icon className="text-green-500 text-3xl mb-4" />
                <h3
                  className="text-2xl font-semibold mb-3"
                  data-testid={`event-title-${event["data-testid"]}`}
                >
                  {event.title}
                </h3>
                <p
                  className="text-slate-300"
                  data-testid={`event-description-${event["data-testid"]}`}
                >
                  {event.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}