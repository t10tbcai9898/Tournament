import { updateSession } from "@/lib/supabase/middleware"
i// Source - https://stackoverflow.com/q
// Posted by rolias4031
// Retrieved 2026-01-22, License - CC BY-SA 4.0

import { NextResponse } from 'next/server';

export default function middleware(request) {
  return NextResponse.next();
}


export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}
