import ParticlesBackground from "@/components/particles-background"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

const resources = [
    {
        year: "1st Year",
        description: "Study Material , Previous Papers",
        href: "https://youtube.com",
    },
    {
        year: "2nd Year",
        description: "Study Material , Previous Papers",
        href: "https://youtube.com",
    },
    {
        year: "3rd Year",
        description: "Study Material , Previous Papers",
        href: "https://youtube.com",
    },
    {
        year: "4th Year",
        description: "Study Material , Previous Papers",
        href: "https://youtube.com",
    },
];

const containerVariant = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        }
    }
}

const cardVariant = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    }
}

export default function Resources() {
    return (
        <div className="min-h-screen flex flex-col">
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
                        <h1 className="text-3xl md:text-4xl font-bold mb-3">Resources</h1>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            Academic resources curated by CSES for students.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        variants={containerVariant}
                        initial="hidden"
                        animate="show"
                    >
                        {resources.map((resource) => (
                            <motion.a
                                key={resource.year}
                                href={resource.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={cardVariant}
                                className="h-full"
                            >
                                <div className="border border-border rounded-lg p-6 bg-background/40 backdrop-blur-sm transition-all duration-300 hover:border-green-400/50 hover:-translate-y-1">
                                    <h2 className="text-2xl font-semibold text-green-400">
                                        {resource.year}
                                    </h2>
                                    <p className="mt-3 text-slate-200">
                                        {resource.description}
                                    </p>
                                    <div className="mt-6 font-mono text-sm text-green-400">
                                        OPEN RESOURCES
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
