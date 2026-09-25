import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/src/lib/auth";

export async function proxy(request: NextRequest) {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(!session) {
        const loginUrl = new URL("/sign-in", request.url);
        loginUrl.searchParams.set(
            "callbackUrl",
            request.nextUrl.pathname + request.nextUrl.search
        );
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}

export const config = {
        matcher: ["/((?!login|api|_next|).*)", "/dashboard/:path*"], // Specify the routes the middleware applies to
};