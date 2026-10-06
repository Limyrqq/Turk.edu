import "server-only";
export interface PaymentAdapter {
  createCheckout(input: {
    reference: string;
    amount: number;
    currency: string;
  }): Promise<{ enabled: false } | { enabled: true; url: string }>;
  verifyWebhook(body: string, signature: string): Promise<boolean>;
}
export const payments: PaymentAdapter = {
  async createCheckout() {
    return { enabled: false };
  },
  async verifyWebhook() {
    return false;
  },
};
// Enable a real provider only after signature verification and durable event-ID deduplication exist.
