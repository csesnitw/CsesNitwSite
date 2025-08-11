import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Mail, Users } from "lucide-react";
import { FaDiscord, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const socialLinks = [
    { icon: FaDiscord, href: "#", color: "hover:text-blue-400" },
    { icon: FaLinkedin, href: "#", color: "hover:text-blue-600" },
    { icon: FaGithub, href: "#", color: "hover:text-slate-300" },
    { icon: FaTwitter, href: "#", color: "hover:text-blue-400" },
    { icon: FaInstagram, href: "#", color: "hover:text-red-500" },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="contact-title">Get In Touch</h2>
          <p className="text-xl text-slate-400" data-testid="contact-subtitle">
            Join our community and stay updated with the latest events and opportunities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="text-primary text-xl mt-1" />
                <div>
                  <h4 className="font-semibold mb-2" data-testid="location-title">Location</h4>
                  <p className="text-slate-400" data-testid="location-address">
                    National Institute of Technology Warangal<br />
                    Hanamkonda, Warangal - 506004<br />
                    Telangana, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="text-secondary text-xl mt-1" />
                <div>
                  <h4 className="font-semibold mb-2" data-testid="email-title">Email</h4>
                  <p className="text-slate-400">
                    <a 
                      href="mailto:cses@nitw.ac.in" 
                      className="hover:text-secondary transition-colors"
                      data-testid="email-link"
                    >
                      cses@nitw.ac.in
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Users className="text-accent text-xl mt-1" />
                <div>
                  <h4 className="font-semibold mb-2" data-testid="community-title">Join Our Community</h4>
                  <div className="flex space-x-4 mt-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`text-slate-400 transition-colors text-2xl ${social.color}`}
                        data-testid={`social-link-${index}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <social.icon />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="glass-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6" data-testid="contact-form-title">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="bg-background border-border"
                    data-testid="input-name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="bg-background border-border"
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="bg-background border-border"
                    data-testid="input-subject"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    className="bg-background border-border resize-none"
                    data-testid="input-message"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={contactMutation.isPending}
                  data-testid="button-submit-contact"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
