import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  console.log(url.pathname);

  if (url.pathname.startsWith("/public")) {
    return NextResponse.next();
  }

  if (url.pathname !== "/") {
    url.pathname = "/public" + url.pathname;
    return NextResponse.rewrite(url);
    // const rewriteTo = "/public" + url.pathname;
    // return NextResponse.rewrite(
    //   new URL(rewriteTo + request.nextUrl.search, request.nextUrl.origin)
    // );
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/((?!.*\\..*|_next|dynamic-og).*)", "/", "/(api|trpc)(.*)"],
};
