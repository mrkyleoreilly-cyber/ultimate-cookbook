import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Placeholder middleware — Supabase auth added in Phase 5
export function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icons|manifest.json|sw.js).*)",
  ],
};
