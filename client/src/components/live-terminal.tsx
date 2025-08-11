import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { TerminalLog } from "@shared/schema";

export default function LiveTerminal() {
  const [displayedLogs, setDisplayedLogs] = useState<TerminalLog[]>([]);

  const { data: logs = [] } = useQuery<TerminalLog[]>({
    queryKey: ["/api/terminal-logs"],
    refetchInterval: 3000, // Refetch every 3 seconds for live updates
  });

  useEffect(() => {
    if (logs.length > 0) {
      setDisplayedLogs(logs);
    }
  }, [logs]);

  const getLineColor = (type: string, content: string) => {
    if (content.includes('$')) return 'text-slate-700';
    if (type === 'success' || content.includes('✓')) return 'text-green-600';
    if (type === 'error' || content.includes('[ERROR]')) return 'text-red-600';
    if (content.includes('[INFO]')) return 'text-blue-600';
    return 'text-slate-600';
  };

  return (
    <div className="max-w-4xl mx-auto mt-12">
      <div className="bg-slate-50 rounded-lg p-6 text-left minimal-border">
        <div className="flex items-center mb-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
          <span className="ml-4 text-slate-600 modern-text">CSES Terminal - Live Activity Feed</span>
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
          <div className="typing-cursor text-slate-600"></div>
        </div>
      </div>
    </div>
  );
}
