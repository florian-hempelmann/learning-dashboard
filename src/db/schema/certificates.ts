import {date, pgTable, text, uuid, varchar} from "drizzle-orm/pg-core";
import {user} from "@/src/db/schema/auth";

export const certificate = pgTable("certificate", {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: text("user_id")
        .notNull()
        .references(() => user.id, { onDelete: "cascade" }),
    label: varchar("label", { length: 100 }).notNull(),
    date: date("date").notNull(),
});