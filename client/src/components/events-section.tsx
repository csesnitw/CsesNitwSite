import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import type { Event } from "@shared/schema";

export default function EventsSection() {
  const { data: events = [], isLoading } = useQuery<Event[]>({
    queryKey: ["/api/events"],
  });

  const stats = [
    { value: "50+", label: "Workshops Conducted" },
    { value: "2000+", label: "Participants" },
    { value: "150+", label: "Projects Built" },
    { value: "95%", label: "Placement Rate" },
  ];

  if (isLoading) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading events...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="events" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="events-title">Events & Activities</h2>
          <p className="text-xl text-slate-400" data-testid="events-subtitle">
            Engaging workshops, competitions, and community gatherings that drive learning and innovation.
          </p>
        </div>
        
        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center" data-testid="upcoming-events-title">Upcoming Events</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card key={event.id} className="glass-card hover-lift overflow-hidden">
                <img 
                  src={event.imageUrl || "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"} 
                  alt={event.title} 
                  className="w-full h-48 object-cover"
                  data-testid={`event-image-${event.id}`}
                />
                <CardContent className="p-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="text-primary mr-2 h-4 w-4" />
                    <span className="text-sm text-slate-400" data-testid={`event-date-${event.id}`}>{event.date}</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-3" data-testid={`event-title-${event.id}`}>{event.title}</h4>
                  <p className="text-slate-300 mb-4" data-testid={`event-description-${event.id}`}>
                    {event.description}
                  </p>
                  <Button 
                    className="w-full"
                    data-testid={`button-register-${event.id}`}
                  >
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Past Events Stats */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2" data-testid={`stat-value-${index}`}>
                  {stat.value}
                </div>
                <div className="text-slate-400" data-testid={`stat-label-${index}`}>{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
