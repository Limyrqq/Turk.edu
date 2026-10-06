import "server-only";
export interface AuthAdapter {
  getSession(): Promise<{ userId: string } | null>;
}
export const auth: AuthAdapter = {
  async getSession() {
    return null;
  },
};
