import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { ExternalLink, Target, Eye, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ParticlesBackground from "@/components/particles-background";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const links = [
  {
    title: "LinkedIn",
    description: "Connect with us professionally",
    url: "https://www.linkedin.com/company/cses-nitw/",
    icon: FaLinkedin,
    color: "hover:border-blue-400 hover:shadow-blue-400/20",
    iconColor: "group-hover:text-blue-400",
  },
  {
    title: "Instagram",
    description: "Follow our journey",
    url: "https://www.instagram.com/cses_nitw/",
    icon: FaInstagram,
    color: "hover:border-pink-400 hover:shadow-pink-400/20",
    iconColor: "group-hover:text-pink-400",
  },
  {
    title: "Internito",
    description: "Internship & opportunity portal",
    url: "https://internito.csesnitw.in/",
    icon: ExternalLink,
    color: "hover:border-cyan-400 hover:shadow-cyan-400/20",
    iconColor: "group-hover:text-cyan-400",
  },
  {
    title: "Codemon",
    description: "Competitive programming platform",
    url: "https://codemon.csesnitw.in/",
    icon: ExternalLink,
    color: "hover:border-green-400 hover:shadow-green-400/20",
    iconColor: "group-hover:text-green-400",
  },
];

const aboutCards = [
  {
    icon: Target,
    iconColor: "text-green-500",
    title: "Our Mission",
    description:
      "To create a vibrant community of computer science enthusiasts, fostering technical excellence, innovation, and collaborative learning at NIT Warangal.",
  },
  {
    icon: Eye,
    iconColor: "text-green-400",
    title: "Our Vision",
    description:
      "To be the leading platform for computer science students to explore cutting-edge technologies, build meaningful connections, and develop industry-ready skills.",
  },
  {
    icon: Users,
    iconColor: "text-green-300",
    title: "Our Community",
    description: "",
    richDescription: (
      <>
        Join <span className="text-green-500 font-semibold">40+</span> passionate
        students who are shaping the future of technology through collaboration
        and innovation.
      </>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
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

export default function LinksPage() {
  return (
    <div className="min-h-screen">
      <ParticlesBackground />
      <Navigation />

      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* About Section */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-4">About CSES NITW</h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Empowering the next generation of computer science professionals
              through community, learning, and innovation.
            </p>
          </motion.div>

          <motion.div
            className="space-y-6 mb-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {aboutCards.map((card) => (
              <motion.div key={card.title} variants={itemVariants}>
                <Card className="cyberpunk-glow-card hover-lift relative">
                  <div className="absolute inset-0 cyberpunk-scan-lines"></div>
                  <CardContent className="p-6 relative z-10">
                    <card.icon className={`${card.iconColor} text-2xl mb-4`} />
                    <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                    <p className="text-slate-300">
                      {card.richDescription ?? card.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Links Section */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-2">Our Links</h2>
            <p className="text-slate-400">
              Find us across the web
            </p>
          </motion.div>

          <motion.div
            className="max-w-md mx-auto space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {links.map((link) => (
              <motion.a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group flex items-center gap-4 w-full p-4 rounded-lg border border-border bg-background/60 backdrop-blur-md transition-all duration-300 shadow-lg ${link.color} hover:shadow-xl`}
              >
                <div
                  className={`flex-shrink-0 p-2 rounded-md bg-muted text-slate-400 transition-colors duration-300 ${link.iconColor}`}
                >
                  <link.icon className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-mono text-base font-semibold text-foreground group-hover:text-green-400 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono truncate">
                    {link.description}
                  </p>
                </div>
                <ExternalLink className="h-4 w-4 text-slate-600 group-hover:text-green-400 transition-colors flex-shrink-0" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
