import { NextResponse } from "next/server";
export async function POST() {
  // Fail closed. A provider adapter must verify the raw request signature before parsing.
  // Persist the provider event ID atomically before fulfillment; acknowledge duplicate events.
  return NextResponse.json(
    { message: "Payments are disabled" },
    { status: 501 },
  );
}
