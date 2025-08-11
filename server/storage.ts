import { type User, type InsertUser, type Event, type InsertEvent, type TeamMember, type InsertTeamMember, type TerminalLog, type InsertTerminalLog, type Contact, type InsertContact } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getEvents(): Promise<Event[]>;
  getEvent(id: string): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;
  
  getTeamMembers(): Promise<TeamMember[]>;
  getTeamMember(id: string): Promise<TeamMember | undefined>;
  createTeamMember(member: InsertTeamMember): Promise<TeamMember>;
  
  getTerminalLogs(limit?: number): Promise<TerminalLog[]>;
  createTerminalLog(log: InsertTerminalLog): Promise<TerminalLog>;
  
  createContact(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private events: Map<string, Event>;
  private teamMembers: Map<string, TeamMember>;
  private terminalLogs: TerminalLog[];
  private contacts: Map<string, Contact>;

  constructor() {
    this.users = new Map();
    this.events = new Map();
    this.teamMembers = new Map();
    this.terminalLogs = [];
    this.contacts = new Map();
    
    this.initializeData();
  }

  private initializeData() {
    // Initialize with sample events
    const sampleEvents: Event[] = [
      {
        id: randomUUID(),
        title: "AI/ML Workshop Series",
        description: "Dive deep into machine learning algorithms and practical AI applications with industry experts.",
        date: "March 15, 2024",
        imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        registrationOpen: true,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "CodeNITW Hackathon",
        description: "48-hour coding marathon to build innovative solutions for real-world problems.",
        date: "March 22-24, 2024",
        imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        registrationOpen: true,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Industry Connect",
        description: "Network with alumni and industry professionals. Learn about career opportunities.",
        date: "April 5, 2024",
        imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        registrationOpen: true,
        createdAt: new Date(),
      },
    ];

    sampleEvents.forEach(event => this.events.set(event.id, event));

    // Initialize with sample team members
    const sampleTeamMembers: TeamMember[] = [
      {
        id: randomUUID(),
        name: "Dheer Pandey",
        position: "General Secretary",
        year: "Final Year, CSE",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
        linkedinUrl: null,
        githubUrl: null,
        twitterUrl: null,
        displayOrder: 1,
      },
      {
        id: randomUUID(),
        name: "Rashwin Musuku",
        position: "Technical Lead",
        year: "Final Year, CSE",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
        linkedinUrl: null,
        githubUrl: null,
        twitterUrl: null,
        displayOrder: 2,
      },
    ];

    sampleTeamMembers.forEach(member => this.teamMembers.set(member.id, member));

    // Initialize with sample terminal logs
    const sampleLogs = [
      "$ git push origin main",
      "Enumerating objects: 42, done.",
      "Counting objects: 100% (42/42), done.",
      "Delta compression using up to 8 threads",
      "Compressing objects: 100% (28/28), done.",
      "Writing objects: 100% (28/28), 3.45 KiB | 3.45 MiB/s, done.",
      "Total 28 (delta 18), reused 0 (delta 0), pack-reused 0",
      "To https://github.com/cses-nitw/website.git",
      "   f4a2b8c..8e7d9a1  main -> main",
      "",
      "$ npm run build",
      "> Building for production...",
      "✓ Build completed successfully in 2.34s",
      "",
      "[INFO] New event registered: AI/ML Workshop",
      "[INFO] 15 new members joined today",
      "[SUCCESS] Hackathon submissions deployed",
      "[INFO] Newsletter sent to 847 subscribers",
    ];

    sampleLogs.forEach(content => {
      let type = 'info';
      if (content.includes('$')) type = 'command';
      else if (content.includes('[SUCCESS]') || content.includes('✓')) type = 'success';
      else if (content.includes('[ERROR]')) type = 'error';

      this.terminalLogs.push({
        id: randomUUID(),
        content,
        type,
        timestamp: new Date(),
      });
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getEvents(): Promise<Event[]> {
    return Array.from(this.events.values());
  }

  async getEvent(id: string): Promise<Event | undefined> {
    return this.events.get(id);
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const id = randomUUID();
    const event: Event = { ...insertEvent, id, createdAt: new Date() };
    this.events.set(id, event);
    return event;
  }

  async getTeamMembers(): Promise<TeamMember[]> {
    return Array.from(this.teamMembers.values()).sort((a, b) => a.displayOrder - b.displayOrder);
  }

  async getTeamMember(id: string): Promise<TeamMember | undefined> {
    return this.teamMembers.get(id);
  }

  async createTeamMember(insertMember: InsertTeamMember): Promise<TeamMember> {
    const id = randomUUID();
    const member: TeamMember = { ...insertMember, id };
    this.teamMembers.set(id, member);
    return member;
  }

  async getTerminalLogs(limit: number = 15): Promise<TerminalLog[]> {
    return this.terminalLogs.slice(-limit);
  }

  async createTerminalLog(insertLog: InsertTerminalLog): Promise<TerminalLog> {
    const id = randomUUID();
    const log: TerminalLog = { ...insertLog, id, timestamp: new Date() };
    this.terminalLogs.push(log);
    return log;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { ...insertContact, id, createdAt: new Date() };
    this.contacts.set(id, contact);
    return contact;
  }
}

export const storage = new MemStorage();
