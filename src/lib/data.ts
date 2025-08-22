import type { Event, TeamMember, TerminalLog } from "@shared/schema";

const uuid = () => (globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2));

// Static sample data previously provided by the server's in-memory storage
const eventsData: Event[] = [
  {
    id: uuid(),
    title: "AI/ML Workshop Series",
    description:
      "Dive deep into machine learning algorithms and practical AI applications with industry experts.",
    date: "March 15, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    registrationOpen: true,
    createdAt: new Date(),
  },
  {
    id: uuid(),
    title: "CodeNITW Hackathon",
    description:
      "48-hour coding marathon to build innovative solutions for real-world problems.",
    date: "March 22-24, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    registrationOpen: true,
    createdAt: new Date(),
  },
  {
    id: uuid(),
    title: "Industry Connect",
    description:
      "Network with alumni and industry professionals. Learn about career opportunities.",
    date: "April 5, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    registrationOpen: true,
    createdAt: new Date(),
  },
];

const teamMembersData: TeamMember[] = [
  {
    id: uuid(),
    name: "Dheer Pandey",
    position: "General Secretary",
    year: "Final Year, CSE",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    linkedinUrl: null,
    githubUrl: null,
    twitterUrl: null,
    displayOrder: 1,
  },
  {
    id: uuid(),
    name: "Rashwin Musuku",
    position: "General Secretary",
    year: "Final Year, CSE",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    linkedinUrl: null,
    githubUrl: null,
    twitterUrl: null,
    displayOrder: 2,
  },
];

const sampleLogLines = [
  "  @@@@@@@@@@      @@@@@@@@@        @@@@@@@@@@       @@@@@@@@@", 
"@@              @@               @@               @@            ",
"@@                @@@@@@@@@        @@@@@@           @@@@@@@@@   ",
"@@                         @@    @@                          @@ ",
"@@                         @@    @@                          @@ ",
"  @@@@@@@@@@     @@@@@@@@@@        @@@@@@@@@@      @@@@@@@@@@",
  "[INFO] New event registered: AI/ML Workshop",
  "[INFO] 15 new members joined today",
  "[SUCCESS] Hackathon submissions deployed",
  "[INFO] Newsletter sent to 847 subscribers",
  ">"
];

const terminalLogsData: TerminalLog[] = sampleLogLines.map((content) => {
  let type: TerminalLog["type"] = "info" as TerminalLog["type"];
  if (content.includes("$")) type = "command" as TerminalLog["type"];
  else if (content.includes("[SUCCESS]") || content.includes("✓"))
    type = "success" as TerminalLog["type"];
  else if (content.includes("[ERROR]")) type = "error" as TerminalLog["type"];

  return {
    id: uuid(),
    content,
    type,
    timestamp: new Date(),
  } as TerminalLog;
});

export async function getEvents(): Promise<Event[]> {
  return eventsData.slice();
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  return teamMembersData
    .slice()
    .sort((a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0));
}

export async function getTerminalLogs(limit = 15): Promise<TerminalLog[]> {
  return terminalLogsData.slice(-limit);
}
