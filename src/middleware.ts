import { getCurrentUser } from "@/actions/auth.action";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
const public_routes = ["/", "/hotels", "/hotels/:hotelId", "/login", "/register"];

export async function middleware(request: NextRequest) {
  const currentUser = await getCurrentUser();
  const pathname = request.nextUrl.pathname;
  const isPublicRoute = public_routes.some((route) => route === pathname)
  const adminRoutes = pathname.startsWith('/dashboard')

  if (!currentUser && !isPublicRoute){
    return NextResponse.redirect(new URL("/login", request.url));
  }else if(currentUser && currentUser.role === 'user' && adminRoutes){
    return NextResponse.redirect(new URL("/", request.url));
  }else if(currentUser?.role === 'admin' && !pathname.startsWith('/dashboard')){
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
};
