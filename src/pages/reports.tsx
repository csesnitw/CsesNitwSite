import { useState } from "react"
import ParticlesBackground from "@/components/particles-background"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import { Eye, Download } from "lucide-react"
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select"

const reportYears = [
    {
        year: "2025-26",
        reports: [
            {
                semester: "Odd Semester",
                title: "Odd Semester Report",
                pdf: "/reports/2025-26/odd-sem.pdf",
                thumbnail: "/reports/2025-26/odd-sem.png",
            },
            {
                semester: "Even Semester",
                title: "Even Semester Report",
                pdf: "/reports/2025-26/even-sem.pdf",
                thumbnail: "/reports/2025-26/even-sem.png",
            },
        ],
    },
]

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show:{
        opacity:1,
        y:0,
        transition:{
            duration:0.4,
            ease:"easeOut",
        }
    }
}

export default function Reports() {
    const [selectedYear, setSelectedYear] = useState("all");
    const filteredYears = selectedYear === "all"?reportYears: reportYears.filter((year) => year.year === selectedYear);
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
                        <h1 className="text-3xl md:text-4xl font-bold mb-3">Semester Reports</h1>
                    </motion.div>

                    <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center mb-10">
                        <h2 className="font-mono text-xl text-slate-400 tracking-wide ">ACADEMIC YEAR</h2>
                        <Select value={selectedYear} onValueChange={setSelectedYear}>
                            <SelectTrigger className="w-40">
                                <SelectValue placeholder="Select Year"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Years</SelectItem>
                                {reportYears.map((year)=>(
                                    <SelectItem key={year.year} value={year.year}>{year.year}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        {filteredYears.map((year) => (
                            <section key={year.year} className="mb-14">
                                <h2 className="text-2xl font-semibold mb-6 text-green-400 ">{year.year}</h2>
                                <motion.div
                                    key={selectedYear}
                                    variants={container}
                                    initial="hidden"
                                    animate="show"
                                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                                >
                                    {year.reports.map((report) => (
                                        <motion.div
                                            key={report.semester}
                                            variants={item}
                                        >
                                            <div className="group rounded-xl border border-border bg-background/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-400/50 overflow-hidden">
                                            {/* Thumbnail */}
                                            <div className="relative h-64 border-b border-border overflow-hidden">
                                                <img
                                                    src={report.thumbnail}
                                                    alt={report.title}
                                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                                <div className="hidden md:flex absolute inset-0 items-center justify-center gap-6 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <a
                                                        href={report.pdf}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center justify-center gap-2 rounded-md border border-green-400/60 px-4 py-2 font-mono text-sm text-green-400 transition-colors hover:bg-green-400 hover:text-black"
                                                    >
                                                        <Eye size={16} />
                                                        View
                                                    </a>
                                                    <a
                                                        href={report.pdf}
                                                        download
                                                        className=" flex items-center justify-center gap-2 rounded-md border border-green-400/60 px-4 py-2 font-mono text-sm text-green-400 transition-colors hover:bg-green-400 hover:text-black"
                                                    >
                                                        <Download size={16} />
                                                        Download
                                                    </a>
                                                </div>
                                            </div>
                                            {/* content     */}
                                            <div className="p-6">
                                                <p className="font-mono text-sm text-green-400 mb-2">{report.semester} {year.year}</p>
                                                <h3 className="text-2xl font-semibold">
                                                    {report.title}
                                                </h3>
                                                <div className="flex md:hidden gap-3 mt-5 ">
                                                    <a
                                                        href={report.pdf}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1 flex items-center justify-center rounded-md border border-green-400/60 px-4 py-2 text-center font-mono text-sm text-green-400 transition-colors hover:bg-green-400 hover:text-black"
                                                    >
                                                        <Eye size={16} />
                                                        View
                                                    </a>
                                                    <a
                                                        href={report.pdf}
                                                        download
                                                        className="flex-1 flex items-center justify-center rounded-md border border-green-400/60 px-4 py-2 text-center font-mono text-sm text-green-400 transition-colors hover:bg-green-400 hover:text-black"
                                                    >
                                                        <Download size={16} />
                                                        Download
                                                    </a>
                                                </div>
                                            </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </section>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
