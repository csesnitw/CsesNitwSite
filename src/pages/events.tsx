import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Rocket,
  Lightbulb,
  GraduationCap,
  Globe,
  Users,
  Calendar,
} from "lucide-react";
import ParticlesBackground from "@/components/particles-background";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const flagshipEvents = [
  {
    icon: Code,
    title: "CodeMon",
    tag: "Competitive Programming",
    description:
      "A series of competitive programming contests aimed at fostering a robust coding culture. These contests challenge participants to solve complex algorithmic problems, encouraging them to enhance their problem-solving skills and prepare for technical interviews.",
  },
  {
    icon: Rocket,
    title: "Noobathon",
    tag: "Hackathon",
    description:
      "A beginner-friendly hackathon designed to immerse students in the world of software development. Participants explore various domains including web development, AI/ML, and game development while collaborating in a supportive and engaging environment.",
  },
  {
    icon: Lightbulb,
    title: "Acing the Intern Drive (ATID)",
    tag: "Workshop Series",
    description:
      "A comprehensive workshop series designed to help students ace their internship interviews. Includes mock online tests, resume building sessions, and mock interviews to give students a competitive edge in placement season.",
  },
];

const pastEvents = [
  {
    icon: Globe,
    title: "Web Development Bootcamp",
    date: "January 2025",
    description:
      "An intensive bootcamp covering modern web technologies — React, Node.js, and databases. Students built full-stack projects from scratch over the course of a week.",
  },
  {
    icon: GraduationCap,
    title: "Internito Launch",
    date: "November 2024",
    description:
      "Launch of the Internito platform — a dedicated portal to aggregate internship and placement opportunities for CSE students at NIT Warangal.",
  },
  {
    icon: Users,
    title: "Industry Connect",
    date: "October 2024",
    description:
      "A networking event where students connected with alumni and industry professionals. Featured talks on career paths in tech, startup culture, and opportunities in core CS roles.",
  },
  {
    icon: Code,
    title: "CodeMon 3.0",
    date: "September 2024",
    description:
      "The third edition of our flagship competitive programming contest. Over 200 participants battled through algorithmic challenges across multiple rounds.",
  },
  {
    icon: Lightbulb,
    title: "AI/ML Workshop Series",
    date: "August 2024",
    description:
      "A hands-on workshop series diving into machine learning algorithms and practical AI applications. Students trained models and deployed them using real-world datasets.",
  },
  {
    icon: Calendar,
    title: "Freshers' Orientation",
    date: "July 2024",
    description:
      "Welcomed the new batch of CSE students into the CSES community. Introduced the society's mission, events, and opportunities to get involved.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <ParticlesBackground />
      <Navigation />

      <div className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Our Events</h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Engaging events that foster community, technical growth, and
              friendly competition.
            </p>
          </motion.div>

          {/* Flagship Events */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold text-green-400 font-mono mb-6 flex items-center gap-2">
              <span className="text-slate-600">&gt;</span> Flagship Events
            </h2>

            <motion.div
              className="grid md:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {flagshipEvents.map((event) => (
                <motion.div key={event.title} variants={itemVariants}>
                  <Card className="cyberpunk-glow-card hover-lift relative h-full">
                    <div className="absolute inset-0 cyberpunk-scan-lines"></div>
                    <CardContent className="p-6 relative z-10 flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <event.icon className="text-green-500 h-7 w-7 flex-shrink-0" />
                        <span className="text-xs font-mono text-green-400/70 bg-green-400/10 px-2 py-0.5 rounded">
                          {event.tag}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">
                        {event.title}
                      </h3>
                      <p className="text-sm text-slate-300 flex-1">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Past Events Timeline
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold text-green-400 font-mono mb-6 flex items-center gap-2">
              <span className="text-slate-600">&gt;</span> Past Events
            </h2>

            <motion.div
              className="grid md:grid-cols-2 gap-5"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {pastEvents.map((event) => (
                <motion.div key={event.title} variants={itemVariants}>
                  <Card className="cyberpunk-glow-card hover-lift relative h-full">
                    <div className="absolute inset-0 cyberpunk-scan-lines"></div>
                    <CardContent className="p-5 relative z-10">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-green-400/10 flex-shrink-0">
                          <event.icon className="text-green-400 h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                            <h3 className="text-base font-semibold">
                              {event.title}
                            </h3>
                            <span className="text-xs font-mono text-slate-500">
                              {event.date}
                            </span>
                          </div>
                          <p className="text-sm text-slate-300">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div> */}
        </div>
      </div>

      <Footer />
    </div>
  );
}
