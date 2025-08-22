import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { TerminalLog } from "@shared/schema";
import { getTerminalLogs } from "@/lib/data";

export default function LiveTerminal() {
  const [displayedLogs, setDisplayedLogs] = useState<TerminalLog[]>([]);

  const { data: logs = [] } = useQuery<TerminalLog[]>({
    queryKey: ["terminal-logs"],
    queryFn: () => getTerminalLogs(15),
    refetchInterval: 3000, // Simulate live updates
  });

  useEffect(() => {
    if (logs.length > 0) {
      setDisplayedLogs(logs);
    }
  }, [logs]);

  const getLineColor = (type: string, content: string) => {
    if (content.includes('$')) return 'text-cyan-400';
    if (type === 'success' || content.includes('✓')) return 'text-green-400';
    if (type === 'error' || content.includes('[ERROR]')) return 'text-red-400';
    if (content.includes('[INFO]')) return 'text-blue-400';
    return 'text-green-400';
  };

  return (
    <div className="max-w-4xl mx-auto mt-12">
      <div className="terminal rounded-lg p-6 text-left">
        <div className="flex items-center mb-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="ml-4 text-slate-400">CSES Terminal - Live Activity Feed</span>
        </div>
        
        <div className="text-sm space-y-1 max-h-64 overflow-y-auto" data-testid="terminal-content">
          {displayedLogs.map((log, index) => (
            <div 
              key={log.id}
              className={`terminal-line ${getLineColor(log.type, log.content)}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {log.content}
            </div>
          ))}
          <div className="typing-cursor text-green-400"></div>
        </div>
      </div>
    </div>
  );
}
