import {integer, pgTable, primaryKey, varchar} from "drizzle-orm/pg-core";

export const developmentCategory = pgTable("development_category", {
    id: integer("id").generatedByDefaultAsIdentity().primaryKey(),
    label: varchar("label", { length: 100 }).notNull(),
});

export const framework = pgTable("framework", {
    id: integer("id").generatedByDefaultAsIdentity().primaryKey(),
    label: varchar("label", { length: 100 }).notNull().unique(),
});

export const language = pgTable("language", {
    id: integer("id").generatedByDefaultAsIdentity().primaryKey(),
    label: varchar("label", { length: 100 }).notNull().unique(),
});

// ==========================
// JUNCTION TABLES
// ==========================

export const frameworkDevelopmentCategory = pgTable(
    "framework_development_category",
    {
        frameworkId: integer("framework_id")
            .notNull()
            .references(() => framework.id, { onDelete: "cascade" }),
        developmentCategoryId: integer("development_category_id")
            .notNull()
            .references(() => developmentCategory.id, { onDelete: "cascade" }),
    },
    (table) => [
        primaryKey({
            columns: [table.frameworkId, table.developmentCategoryId],
        }),
    ],
);

export const languageDevelopmentCategory = pgTable(
    "language_development_category",
    {
        languageId: integer("language_id")
            .notNull()
            .references(() => language.id, { onDelete: "cascade" }),
        developmentCategoryId: integer("developmnet_category_id")
            .notNull()
            .references(() => developmentCategory.id, { onDelete: "cascade" }),
    },
    (table) => [
        primaryKey({
            columns: [table.languageId, table.developmentCategoryId],
        }),
    ],
);