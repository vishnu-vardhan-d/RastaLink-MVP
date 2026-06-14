import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // No backend routes — the app runs entirely on client-side data (no auth, no DB).
  const httpServer = createServer(app);
  return httpServer;
}
