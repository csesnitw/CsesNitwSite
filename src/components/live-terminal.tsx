import { useEffect, useState, useRef } from "react";
import {navItems} from "./navItems";

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

type RenderedLine = { segments: Segment[]; wrap?: boolean };

export default function LiveTerminal() {
  const [lines, setLines] = useState<RenderedLine[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"booting" | "interactive">("booting");
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
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
  //switches phase from booting to interactive once the terminal finishes the animation
  useEffect(() => {
    if (currentLine >= terminalLines.length){
      setPhase("interactive");
      return;
    }

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

  //this is the input function
  function CommandInput(raw: string){
    const input = raw.trim();
    const extraInput = raw.split(' ');
    if(!input) return;
    let output: Segment[][] = [];
    if(input === "clear") {
      setLines([]);
      setInputValue("");
      return;
    }
    else if(input === "boot"){
      setLines([]);
      setCurrentLine(0);
      setCurrentChar(0);
      setPhase("booting");
      setInputValue("");
      return;
    }
    else if(input === "help") {
      output = [
        [{text: "Available commands:",color: "text-slate-300"}],
        [{text: "   help    -    show this list",color: "text-slate-400"}],
        [{text: "   whoami  -    show current user",color: "text-slate-400"}],
        [{text: "   clear   -    clear the terminal",color:"text-slate-400"}],
        [{text: "   boot    -    boots the terminal",color:"text-slate-400"}],
        [{text: "   echo    -    displays the message",color:"text-slate-400"}],
        [{text: "   ls      -    list all files and directories",color:"text-slate-400"}],
        [{text: "   cd      -    Navigates into another page",color:"text-slate-400"}]
      ];
    }
    else if(input === "whoami"){
      output= [[{text:"cses",color:"text-green-300"}]];
    }
    else if(extraInput[0] === "echo"){
      let lastWord: number = extraInput.length-1;
      let lastLetter: number = extraInput[lastWord].length - 1;
      if((extraInput[1][0] === "\"" && extraInput[lastWord][lastLetter] === "\"")
          ||(extraInput[1][0] === "\'" && extraInput[lastWord][lastLetter] === "\'")){
        const echoLine = extraInput.slice(1,extraInput.length+1).join(' ');
        output=[[{text:echoLine,color:"text-green-300"}]];
      }
      else{
        output=[[{text:"Enclose string in quotations",color:"text-red-400"}]];
      }
    }
    else if(input === "ls"){
      const dirs = navItems.map(link => ({
        text: link.label + "\t",
        color: "text-blue-400"
      }));
      output=[[...dirs]];
    }
    else if(extraInput[0] === "cd"){
      const dir = extraInput[1];
      const navExists = navItems.find(directory => directory.label === dir);
      if(navExists){
        output = [[{ text: `Changing directory to ${navExists.label}...`, color: "text-cyan-300" }]];
        setTimeout(() => { window.location.href = navExists.href;},500);
      }
      else{
        output = [[{ text: `cd: ${dir}: No such file or directory`, color: "text-red-400" }]];
      }
    }
    else{
      output= [[{text:`Command '${input}' not found`,color:"text-red-400"}]];
    }
    setLines((prev) => [
      ...prev,
      {segments: [{text: `$ ${input}`, color: "text-cyan-400"}]},
      ...output.map((seg: any) => ({
        segments: seg,
        wrap: input === "ls"  
      })),
    ]);
    setInputValue("");
  }

  const isTyping = currentLine < terminalLines.length;
  //checking if phase is switching
  console.log("phase is: ",phase);
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
          onClick={()=>inputRef.current?.focus()}
          className="bg-[#0a0e14] px-5 py-4 font-mono text-sm leading-relaxed max-h-80 overflow-y-auto overflow-x-auto scrollbar-thin text-left"
          data-testid="terminal-content"
        >
          {lines.map((line, i) => {
            const isLastLine = i === lines.length - 1 && isTyping;
            return (
              <div key={i} className={line.wrap ? "whitespace-pre-wrap break-words" : "whitespace-pre"}>
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
          {phase === "interactive" && (
            <div className="flex items-center whitespace-pre text-cyan-400">
              <span>$&nbsp;</span>
              <input
                ref = {inputRef}
                autoFocus
                value = {inputValue}
                onChange = {(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && CommandInput(inputValue)}
                className="flex-1 bg-transparent border-none outline-none text-slate-200 font-mono text-sm caret-green-400"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}