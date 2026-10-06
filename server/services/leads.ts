import "server-only";
import { randomUUID } from "node:crypto";
import { database, type Lead } from "@/server/adapters/database";
import { notifications } from "@/server/adapters/notifications";
import type { LeadInput } from "@/lib/lead-schema";
export async function createLead(input: LeadInput) {
  const db = database();
  const lead: Lead = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    name: input.name,
    phone: input.phone,
    interest: input.interest,
    consent: true,
    status: "pending",
  };
  await db.save(lead);
  try {
    const delivery = await notifications().send(lead);
    lead.status = delivery === "delivered" ? "delivered" : "pending";
    await db.update(lead);
    return { id: lead.id, delivered: delivery === "delivered" };
  } catch {
    lead.status = "failed";
    await db.update(lead);
    throw new Error("Lead delivery failed");
  }
}
