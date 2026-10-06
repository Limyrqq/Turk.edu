export interface AnalyticsAdapter {
  track(event: string, properties?: Record<string, string | number>): void;
}
// Providers must be loaded after explicit consent. No tracking is installed by default.
export const analytics: AnalyticsAdapter = { track() {} };
