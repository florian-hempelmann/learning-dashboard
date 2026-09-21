import {integer, pgTable, primaryKey, text, timestamp, uuid, varchar} from "drizzle-orm/pg-core";
import {user} from "@/src/db/schema/auth";
import {framework, language} from "@/src/db/schema/technologies";

export const learningSubject = pgTable("learning_subject", {
    id: integer("id").generatedByDefaultAsIdentity().primaryKey(),
    label: varchar("label", { length: 100 }).notNull().unique(),
});

export const learningGoal = pgTable("learning_goal", {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: text("user_id")
        .notNull()
        .references(() => user.id, { onDelete: "cascade" }),
    learningSubjectId: integer("learning_subject_id")
        .references(() => learningSubject.id),
    label: varchar("label", { length: 255 }).notNull(),
    status: text("status").default("planned"),
});

export const learningSession = pgTable("learning_session", {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: text("user_id")
        .notNull()
        .references(() => user.id, { onDelete: "cascade" }),
    learningGoalId: uuid("learning_goal_id")
        .notNull()
        .references(() => learningGoal.id, { onDelete: "cascade" }),
    startTime: timestamp("start_time").notNull().defaultNow(),
    endTime: timestamp("end_time"),
});

// ==========================
// JUNCTION TABLES
// ==========================

export const learningGoalLanguage = pgTable(
    "learning_goal_language",
    {
        learningGoalId: uuid("learning_goal_id")
            .notNull()
            .references(() => learningGoal.id, { onDelete: "cascade" }),
        languageId: integer("language_id")
            .notNull()
            .references(() => language.id, { onDelete: "cascade" }),
    },
    (table) => [
        primaryKey({
            columns: [table.learningGoalId, table.languageId],
        }),
    ],
);

export const learningGoalFramework = pgTable(
    "learning_goal_framework",
    {
        learningGoalId: uuid("learning_goal_id")
            .notNull()
            .references(() => learningGoal.id, { onDelete: "cascade" }),
        frameworkId: integer("framework_id")
            .notNull()
            .references(() => framework.id, { onDelete: "cascade" }),
    },
    (table) => [
        primaryKey({
            columns: [table.learningGoalId, table.frameworkId],
        }),
    ],
);