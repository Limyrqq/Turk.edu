import "server-only";
import type { Lead } from "./database";
export interface NotificationAdapter {
  send(lead: Lead): Promise<"delivered" | "disabled">;
}
class DisabledNotifications implements NotificationAdapter {
  async send() {
    return "disabled" as const;
  }
}
class TelegramNotifications implements NotificationAdapter {
  async send(lead: Lead) {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!token || !chatId) throw new Error("Notifications are not configured");
    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: `Turk.edu · Новое обращение\nИмя: ${lead.name}\nТелефон: ${lead.phone}\nИнтерес: ${lead.interest}\nID: ${lead.id}`,
        }),
        signal: AbortSignal.timeout(8000),
      },
    );
    if (!response.ok) throw new Error("Notification delivery failed");
    const body = await response.json();
    if (body.ok !== true) throw new Error("Notification delivery failed");
    return "delivered" as const;
  }
}
export function notifications(): NotificationAdapter {
  const mode =
    process.env.NOTIFICATION_ADAPTER ||
    (process.env.TELEGRAM_BOT_TOKEN ? "telegram" : "disabled");
  if (mode !== "telegram" && mode !== "disabled")
    throw new Error("Unsupported notification adapter");
  return mode === "telegram"
    ? new TelegramNotifications()
    : new DisabledNotifications();
}
