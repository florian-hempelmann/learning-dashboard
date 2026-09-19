import { betterAuth } from "better-auth/minimal"; //bundlesize optimization
import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import {db} from "@/src/db/drizzle";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
    }),
    //...
});