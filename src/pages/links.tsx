import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import ParticlesBackground from "@/components/particles-background";
import heroLogoUrl from "@/cses_black.svg";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
    <div className="min-h-screen relative">
      <ParticlesBackground />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
        {/* Logo & Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            <img
              src={heroLogoUrl}
              alt="CSES NITW logo"
              className="h-auto w-full max-w-[200px]"
            />
          </div>
          <p className="text-sm font-mono text-green-400 tracking-widest uppercase">
            Computer Science &amp; Engineering Society
          </p>
          <p className="text-xs text-slate-500 font-mono mt-1">
            NIT Warangal
          </p>
        </motion.div>

        {/* Links */}
        <motion.div
          className="w-full max-w-md space-y-4"
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

        {/* Footer tagline */}
        <motion.p
          className="mt-12 text-xs text-slate-600 font-mono text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          &gt; fostering innovation &amp; technical excellence_
        </motion.p>
      </div>
    </div>
  );
}
