import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all events
  app.get("/api/events", async (req, res) => {
    try {
      const events = await storage.getEvents();
      res.json(events);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch events" });
    }
  });

  // Get all team members
  app.get("/api/team", async (req, res) => {
    try {
      const teamMembers = await storage.getTeamMembers();
      res.json(teamMembers);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch team members" });
    }
  });

  // Get terminal logs
  app.get("/api/terminal-logs", async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 15;
      const logs = await storage.getTerminalLogs(limit);
      res.json(logs);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch terminal logs" });
    }
  });

  // Create contact submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.status(201).json(contact);
    } catch (error) {
      res.status(400).json({ message: "Invalid contact data" });
    }
  });

  // Add new terminal log (for live updates)
  app.post("/api/terminal-logs", async (req, res) => {
    try {
      const { content, type } = req.body;
      const log = await storage.createTerminalLog({ content, type });
      res.status(201).json(log);
    } catch (error) {
      res.status(400).json({ message: "Failed to create terminal log" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
