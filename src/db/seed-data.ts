// This file contains seed data.
export const users = [
    {
        id: "User-SeedUser-Id-001",
        name: "SeedUser",
        email: "seeduser@test.de",
        emailVerified: true,
        role: "user",
    }
]

export const developmentCategories = [
    { id: 1, label: "Backend", },
    { id: 2, label: "Frontend", },
    { id: 3, label: "Data Layer", },
];

export const frameworks = [
    { id: 1, label: "Spring Boot", },
    { id: 2, label: "React", },
    { id: 3, label: "Next.js", },
];

export const languages = [
    { id: 1, label: "Java", },
    { id: 2, label: "SQL", },
    { id: 3, label: "JavaScript", },
    { id: 4, label: "PHP", },
];

export const learningSubjects = [
    { id: 1, label: "Fetching Data", },
    { id: 2, label: "Authentication", },
    { id: 3, label: "Testing", },
    { id: 4, label: "UI/UX", },
];

export const projects = [
    {
        id: "550e8400-e29b-41d4-a716-446655440000",
        userId: "User-SeedUser-Id-001",
        label: "Next.js Learning Dashboard",
        description:
            "Next.js Learning Dashboard made for my personal GitHub portfolio.",
        startDate: "2026-09-09",
        endDate: null,
    },
];

export const certificates = [
    {
        id: "7c9e6679-7425-40de-944b-e07fc1f90ae7",
        userId: "User-SeedUser-Id-001",
        label: "Next.js App Router Fundamentals",
        date: "2026-09-09",
    },
];

export const learningGoals = [
    {
        id: "b3b7c1d2-5e6f-4a89-8c12-9d4e7f2a1b63",
        userId: "User-SeedUser-Id-001",
        learningSubjectId: 1, //Fetching Data
        label: "Seeding Data",
        status: "in progress",
    },
    {
        id: "1f83a9c4-6d72-4e51-b8a3-2c9f7d0e6145",
        userId: "User-SeedUser-Id-001",
        learningSubjectId: 1, //Fetching Data
        label: "Create and update learning goals",
        status: "planned",
    },
];

export const learningSessions = [
    {
        id: "a47c2e91-83d5-4b76-9f02-6e1a5c8d734b",
        userId: "User-SeedUser-Id-001",
        learningGoalId: "b3b7c1d2-5e6f-4a89-8c12-9d4e7f2a1b63", //Seeding Data
        startTime: "2026-09-15 19:30:00",
        endTime: "2026-09-15 21:10:00",
    },
];

/*
 * Junction tables
 *
 * The IDs are intentionally not hard-coded here.
 * They should be obtained from the inserted records.
 */

export const frameworkDevelopmentCategories = [
    {
        frameworkId: 1, //Spring Boot
        developmentCategoryId: 1, //Backend
    },
    {
        frameworkId: 2, //React
        developmentCategoryId: 2, //Frontend
    },
    {
        frameworkId: 3, //Next.js
        developmentCategoryId: 1, //Backend
    },
    {
        frameworkId: 3, //Next.js
        developmentCategoryId: 2, //Frontend
    },
];

export const languageDevelopmentCategories = [
    {
        languageId: 1, //Java
        developmentCategoryId: 1, //Backend
    },
    {
        languageId: 2, //SQL
        developmentCategoryId: 3, //Data Layer
    },
    {
        languageId: 3, //JavaScript
        developmentCategoryId: 1, //Backend
    },
    {
        languageId: 3, //JavaScript
        developmentCategoryId: 2, //Frontend
    },
    {
        languageId: 4, //PHP
        developmentCategoryId: 1, //Backend
    },
];

export const frameworkProjects = [
    {
        frameworkId: 2, //React
        projectId: "550e8400-e29b-41d4-a716-446655440000", //Next.js Learning Dashboard
    },
    {
        frameworkId: 3, //Next.js
        projectId: "550e8400-e29b-41d4-a716-446655440000", //Next.js Learning Dashboard
    },
];

export const languageProjects = [
    {
        languageId: 2, //SQL
        projectId: "550e8400-e29b-41d4-a716-446655440000", //Next.js Learning Dashboard
    },
    {
        languageId: 3, //JavaScript
        projectId: "550e8400-e29b-41d4-a716-446655440000", //Next.js Learning Dashboard
    },
];

export const learningGoalLanguages = [
    {
        learningGoalId: "b3b7c1d2-5e6f-4a89-8c12-9d4e7f2a1b63", //Seeding Data
        languageId: 2, //SQL
    },
    {
        learningGoalId: "b3b7c1d2-5e6f-4a89-8c12-9d4e7f2a1b63", //Seeding Data
        languageId: 3, //JavaScript
    },
];

export const learningGoalFrameworks = [
    {
        learningGoalId: "b3b7c1d2-5e6f-4a89-8c12-9d4e7f2a1b63", //Seeding Data
        frameworkId: 2, //React
    },
    {
        learningGoalId: "b3b7c1d2-5e6f-4a89-8c12-9d4e7f2a1b63", //Seeding Data
        frameworkId: 3, //Next.js
    },
];