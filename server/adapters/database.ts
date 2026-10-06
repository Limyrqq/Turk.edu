import "server-only";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import type { LeadInput } from "@/lib/lead-schema";
export type Lead = Omit<LeadInput, "website"> & {
  id: string;
  createdAt: string;
  status: "pending" | "delivered" | "failed";
};
export interface DatabaseAdapter {
  save(lead: Lead): Promise<void>;
  update(lead: Lead): Promise<void>;
}
class JsonDatabase implements DatabaseAdapter {
  private directory = path.join(process.cwd(), "data", "leads");
  async save(lead: Lead) {
    await mkdir(this.directory, { recursive: true });
    await writeFile(
      path.join(this.directory, `${lead.id}.json`),
      JSON.stringify(lead, null, 2),
      { flag: "wx" },
    );
  }
  async update(lead: Lead) {
    await writeFile(
      path.join(this.directory, `${lead.id}.json`),
      JSON.stringify(lead, null, 2),
    );
  }
}
class MemoryDatabase implements DatabaseAdapter {
  private leads = new Map<string, Lead>();
  async save(lead: Lead) {
    if (this.leads.size >= 500)
      this.leads.delete(this.leads.keys().next().value!);
    this.leads.set(lead.id, lead);
  }
  async update(lead: Lead) {
    this.leads.set(lead.id, lead);
  }
}
const memory = new MemoryDatabase();
export function database(): DatabaseAdapter {
  const mode =
    process.env.DATABASE_ADAPTER ||
    (process.env.NODE_ENV === "production" ? "memory" : "json");
  if (mode === "json" && process.env.VERCEL)
    throw new Error("Local JSON is not persistent on Vercel");
  if (mode !== "json" && mode !== "memory")
    throw new Error("Unsupported database adapter");
  return mode === "json" ? new JsonDatabase() : memory;
}
