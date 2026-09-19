import { betterAuth } from "better-auth/minimal"; //bundlesize optimization
import { drizzleAdapter } from "@better-auth/drizzle-adapter/relations-v2";
import {db} from "@/src/db/drizzle";
import {nextCookies} from "better-auth/next-js";

import {
    user,
    session,
    account,
    verification,
} from "@/src/db/schema/auth";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: {
            user,
            session,
            account,
            verification,
        }, // representing the generated tables necessary for betterAuth
    }),
    emailAndPassword: {
        enabled: true
    },
    plugins: [nextCookies()]
});