import "server-only";
const buckets = new Map<string, { count: number; expires: number }>();
export async function allowRequest(key: string): Promise<boolean> {
  const url = process.env.RATE_LIMIT_REST_URL;
  const token = process.env.RATE_LIMIT_REST_TOKEN;
  if (url && token) {
    const endpoint = new URL("/pipeline", url);
    if (endpoint.protocol !== "https:")
      throw new Error("HTTPS rate-limit endpoint required");
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        ["INCR", `turk:lead:${key}`],
        ["EXPIRE", `turk:lead:${key}`, 600, "NX"],
      ]),
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) throw new Error("Rate limit unavailable");
    const results = await response.json();
    if (results[0]?.error || typeof results[0]?.result !== "number")
      throw new Error("Rate limit unavailable");
    return results[0].result <= 5;
  }
  if (process.env.NODE_ENV === "production")
    throw new Error("Distributed rate limiting is required in production");
  const now = Date.now();
  for (const [k, v] of buckets) if (v.expires <= now) buckets.delete(k);
  if (buckets.size > 10000) return false;
  const bucket = buckets.get(key) || { count: 0, expires: now + 600000 };
  bucket.count++;
  buckets.set(key, bucket);
  return bucket.count <= 5;
}
