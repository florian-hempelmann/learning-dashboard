import { db } from "./drizzle";

import { user } from "./schema/auth";
import { certificate } from "./schema/certificates";
import { learningSubject, learningGoal, learningSession, learningGoalLanguage, learningGoalFramework } from "./schema/learning";
import { project, frameworkProject, languageProject } from "./schema/projects";
import { framework, language, developmentCategory, frameworkDevelopmentCategory, languageDevelopmentCategory } from "./schema/technologies";

import {
    users,
    developmentCategories,
    frameworks,
    languages,
    learningSubjects,
    projects,
    certificates,
    learningGoals,
    learningSessions,
    frameworkDevelopmentCategories,
    languageDevelopmentCategories,
    frameworkProjects,
    languageProjects,
    learningGoalLanguages,
    learningGoalFrameworks,
} from "./seed-data";

export async function seed() {
    // ========================================
    // Base data
    // ========================================

    await db
        .insert(user)
        .values(users)
        .onConflictDoNothing()
        .returning();

    await db
        .insert(developmentCategory)
        .values(developmentCategories)
        .onConflictDoNothing()
        .returning();

    await db
        .insert(framework)
        .values(frameworks)
        .onConflictDoNothing()
        .returning();

    await db
        .insert(language)
        .values(languages)
        .onConflictDoNothing()
        .returning();

    await db
        .insert(learningSubject)
        .values(learningSubjects)
        .onConflictDoNothing()
        .returning();

    // ========================================
    // User-dependent data
    // ========================================

    await db
        .insert(project)
        .values(projects)
        .onConflictDoNothing()
        .returning();

    await db
        .insert(certificate)
        .values(certificates)
        .onConflictDoNothing()
        .returning();

    await db
        .insert(learningGoal)
        .values(learningGoals)
        .onConflictDoNothing()
        .returning();

    await db
        .insert(learningSession)
        .values(
            learningSessions.map((learningSession) => ({
                id: learningSession.id,
                userId: learningSession.userId,
                learningGoalId: learningSession.learningGoalId,
                startTime: new Date(learningSession.startTime),
                endTime: new Date(learningSession.endTime),
            }))
        )
        .onConflictDoNothing();

    // ========================================
    // Junction tables
    // ========================================

    await db
        .insert(frameworkDevelopmentCategory)
        .values(frameworkDevelopmentCategories)
        .onConflictDoNothing();

    await db
        .insert(languageDevelopmentCategory)
        .values(languageDevelopmentCategories)
        .onConflictDoNothing();

    await db
        .insert(frameworkProject)
        .values(frameworkProjects)
        .onConflictDoNothing();

    await db
        .insert(languageProject)
        .values(languageProjects)
        .onConflictDoNothing();

    await db
        .insert(learningGoalLanguage)
        .values(learningGoalLanguages)
        .onConflictDoNothing();

    await db
        .insert(learningGoalFramework)
        .values(learningGoalFrameworks)
        .onConflictDoNothing();
}

seed()
    .then(() => {
        console.log("Seeding completed.");
    })
    .catch((error) => {
        console.error("Seeding failed:", error);
        process.exit(1);
    });