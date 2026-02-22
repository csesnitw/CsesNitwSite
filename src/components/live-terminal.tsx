import { useEffect, useState, useRef } from "react";

type Segment = { text: string; color: string };
type LineData =
  | { mode: "typed"; text: string; color: string; delay: number }
  | { mode: "instant"; segments: Segment[] }
  | { mode: "blank" };

// Unicode box-drawing logo — 6 lines, with matching stats
const neofetchLogo = [
  " ██████╗███████╗███████╗███████╗",
  "██╔════╝██╔════╝██╔════╝██╔════╝",
  "██║     ███████╗█████╗  ███████╗",
  "██║     ╚════██║██╔══╝  ╚════██║",
  "╚██████╗███████║███████╗███████║",
  " ╚═════╝╚══════╝╚══════╝╚══════╝",
];

const neofetchStats: Segment[][] = [
  [
    { text: "cses", color: "text-green-400" },
    { text: "@", color: "text-slate-500" },
    { text: "nitw", color: "text-green-400" },
  ],
  [{ text: "──────────────────", color: "text-slate-600" }],
  [
    { text: "OS", color: "text-green-400" },
    { text: " ........... ", color: "text-slate-600" },
    { text: "NIT Warangal", color: "text-slate-300" },
  ],
  [
    { text: "Members", color: "text-green-400" },
    { text: " ...... ", color: "text-slate-600" },
    { text: "50+", color: "text-slate-300" },
  ],
  [
    { text: "Events", color: "text-green-400" },
    { text: " ....... ", color: "text-slate-600" },
    { text: "20+ hosted", color: "text-slate-300" },
  ],
  [
    { text: "Uptime", color: "text-green-400" },
    { text: " ....... ", color: "text-slate-600" },
    { text: "Since 2019", color: "text-slate-300" },
  ],
];

const logoColors = [
  "text-green-500",
  "text-green-500",
  "text-green-400",
  "text-green-400",
  "text-green-300",
  "text-green-300",
];

const pad = "    ";

// Build neofetch block: logo line + padding + stats on same row
const neofetchLines: LineData[] = neofetchLogo.map((logoLine, i) => ({
  mode: "instant" as const,
  segments: [
    { text: logoLine + pad, color: logoColors[i] },
    ...(neofetchStats[i] ?? []),
  ],
}));

const terminalLines: LineData[] = [
  { mode: "typed", text: "$ ssh cses@nitw.ac.in", color: "text-cyan-400", delay: 40 },
  { mode: "typed", text: "Connected to CSES-NITW mainframe.", color: "text-slate-500", delay: 20 },
  { mode: "blank" },
  { mode: "typed", text: "$ neofetch --cses", color: "text-cyan-400", delay: 40 },
  ...neofetchLines,
  { mode: "blank" },
  { mode: "typed", text: "$ echo \"Welcome to CSES NITW 🚀\"", color: "text-cyan-400", delay: 40 },
  { mode: "typed", text: "Welcome to CSES NITW 🚀", color: "text-green-300", delay: 25 },
  { mode: "blank" },
];

type RenderedLine = { segments: Segment[] };

export default function LiveTerminal() {
  const [lines, setLines] = useState<RenderedLine[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Blinking cursor
  useEffect(() => {
    const timer = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(timer);
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines, currentChar]);

  // Typing effect
  useEffect(() => {
    if (currentLine >= terminalLines.length) return;

    const entry = terminalLines[currentLine];

    // Blank lines
    if (entry.mode === "blank") {
      setLines((prev) => [...prev, { segments: [{ text: "", color: "" }] }]);
      setCurrentLine((l) => l + 1);
      setCurrentChar(0);
      return;
    }

    // Instant lines (neofetch block) — appear one row at a time with a small delay
    if (entry.mode === "instant") {
      const timeout = setTimeout(() => {
        setLines((prev) => [...prev, { segments: entry.segments }]);
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, 80);
      return () => clearTimeout(timeout);
    }

    // Typed lines — character by character
    if (entry.mode === "typed") {
      if (currentChar === 0) {
        setLines((prev) => [
          ...prev,
          { segments: [{ text: "", color: entry.color }] },
        ]);
      }

      if (currentChar < entry.text.length) {
        const timeout = setTimeout(() => {
          setLines((prev) => {
            const updated = [...prev];
            updated[updated.length - 1] = {
              segments: [
                { text: entry.text.slice(0, currentChar + 1), color: entry.color },
              ],
            };
            return updated;
          });
          setCurrentChar((c) => c + 1);
        }, entry.delay);
        return () => clearTimeout(timeout);
      } else {
        const pause = setTimeout(() => {
          setCurrentLine((l) => l + 1);
          setCurrentChar(0);
        }, 150);
        return () => clearTimeout(pause);
      }
    }
  }, [currentLine, currentChar]);

  const isTyping = currentLine < terminalLines.length;

  return (
    <div className="w-full mt-12">
      <div className="rounded-xl overflow-hidden border border-border/50 shadow-2xl shadow-green-900/10">
        {/* Title bar */}
        <div className="flex items-center gap-3 px-4 py-2.5 bg-slate-900/90 border-b border-border/40">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors"></div>
          </div>
          <span className="text-xs text-slate-500 font-mono flex-1 text-center">
            cses@nitw: ~
          </span>
          <div className="w-12" />
        </div>

        {/* Terminal body */}
        <div
          ref={scrollRef}
          className="bg-[#0a0e14] px-5 py-4 font-mono text-sm leading-relaxed max-h-80 overflow-y-auto overflow-x-auto scrollbar-thin text-left"
          data-testid="terminal-content"
        >
          {lines.map((line, i) => {
            const isLastLine = i === lines.length - 1 && isTyping;
            return (
              <div key={i} className="whitespace-pre">
                {line.segments.map((seg, j) => (
                  <span key={j} className={seg.color}>
                    {seg.text}
                  </span>
                ))}
                {isLastLine && (
                  <span
                    className={`inline-block w-2 h-4 ml-0.5 -mb-0.5 bg-green-400 ${
                      showCursor ? "opacity-100" : "opacity-0"
                    }`}
                  />
                )}
              </div>
            );
          })}
          {!isTyping && (
            <div className="text-cyan-400 whitespace-pre">
              ${" "}
              <span
                className={`inline-block w-2 h-4 ml-0.5 -mb-0.5 bg-green-400 ${
                  showCursor ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}