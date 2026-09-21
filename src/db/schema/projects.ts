import {date, integer, pgTable, primaryKey, text, uuid, varchar} from "drizzle-orm/pg-core";
import {user} from "@/src/db/schema/auth";
import {framework, language} from "@/src/db/schema/technologies";

export const project = pgTable("project", {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: text("user_id")
        .notNull()
        .references(() => user.id, { onDelete: "cascade" }),
    label: varchar("label", { length: 100 }).notNull(),
    description: text("description"),
    startDate: date("start_date").notNull().defaultNow(),
    endDate: date("end_date"),
});

// ==========================
// JUNCTION TABLES
// ==========================

export const frameworkProject = pgTable(
    "framework_project",
    {
        frameworkId: integer("framework_id")
            .notNull()
            .references(() => framework.id, { onDelete: "cascade" }),
        projectId: uuid("project_id")
            .notNull()
            .references(() => project.id, { onDelete: "cascade" }),
    },
    (table) => [
        primaryKey({
            columns: [table.frameworkId, table.projectId],
        }),
    ],
);

export const languageProject = pgTable(
    "language_project",
    {
        languageId: integer("language_id")
            .notNull()
            .references(() => language.id, { onDelete: "cascade" }),
        projectId: uuid("project_id")
            .notNull()
            .references(() => project.id, { onDelete: "cascade" }),
    },
    (table) => [
        primaryKey({
            columns: [table.languageId, table.projectId],
        }),
    ],
);