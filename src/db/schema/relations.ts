import {defineRelations} from "drizzle-orm";

import { user, session, account } from "./auth";
import { certificate } from "./certificates";
import { learningSubject, learningGoal, learningSession, learningGoalLanguage, learningGoalFramework } from "./learning";
import { project, frameworkProject, languageProject } from "./projects";
import { framework, language, developmentCategory, frameworkDevelopmentCategory, languageDevelopmentCategory } from "./technologies";

const schema = {
    user,
    session,
    account,

    learningSubject,
    learningGoal,
    learningSession,
    learningGoalLanguage,
    learningGoalFramework,

    project,
    frameworkProject,
    languageProject,

    framework,
    language,
    developmentCategory,
    frameworkDevelopmentCategory,
    languageDevelopmentCategory,

    certificate,
};

export const relations = defineRelations(schema,
    (r) => ({
        // AUTH
        user: {
            sessions: r.many.session(),
            accounts: r.many.account(),
            certificates: r.many.certificate(),
            learningGoals: r.many.learningGoal(),
            learningSessions: r.many.learningSession(),
            projects: r.many.project(),
        },

        session: {
            user: r.one.user({
                from: r.session.userId,
                to: r.user.id,
            }),
        },

        account: {
            user: r.one.user({
                from: r.account.userId,
                to: r.user.id,
            }),
        },

        // CERTIFICATES
        certificate: {
            user: r.one.user({
                from: r.certificate.userId,
                to: r.user.id
            })
        },

        // LEARNING
        learningSubject: {
            learningGoals: r.many.learningGoal()
        },

        learningGoal: {
            user: r.one.user({
                from: r.learningGoal.userId,
                to: r.user.id
            }),
            learningSubject: r.one.learningSubject({
                from: r.learningGoal.learningSubjectId,
                to: r.learningSubject.id
            }),
            learningGoalLanguages: r.many.learningGoalLanguage(),
            learningGoalFrameworks: r.many.learningGoalFramework(),

            languages: r.many.language({
                from: r.learningGoal.id.through(
                    r.learningGoalLanguage.learningGoalId
                ),
                to: r.language.id.through(
                    r.learningGoalLanguage.languageId
                ),
            }),

            frameworks: r.many.framework({
                from: r.learningGoal.id.through(
                    r.learningGoalFramework.learningGoalId
                ),
                to: r.framework.id.through(
                    r.learningGoalFramework.frameworkId
                ),
            }),
        },

        learningSession: {
            user: r.one.user({
                from: r.learningSession.userId,
                to: r.user.id
            }),
            learningGoal: r.one.learningGoal({
                from: r.learningSession.learningGoalId,
                to: r.learningGoal.id
            })
        },

        learningGoalLanguage: {
            learningGoal: r.one.learningGoal({
                from: r.learningGoalLanguage.learningGoalId,
                to: r.learningGoal.id
            }),
            language: r.one.language({
                from: r.learningGoalLanguage.languageId,
                to: r.language.id
            })
        },

        learningGoalFramework: {
            learningGoal: r.one.learningGoal({
                from: r.learningGoalFramework.learningGoalId,
                to: r.learningGoal.id
            }),
            framework: r.one.framework({
                from: r.learningGoalFramework.frameworkId,
                to: r.framework.id
            })
        },

        // PROJECT
        project: {
            user: r.one.user({
                from: r.project.userId,
                to: r.user.id
            }),
            frameworkProjects: r.many.frameworkProject(),
            languageProjects: r.many.languageProject(),

            frameworks: r.many.framework({
                from: r.project.id.through(
                    r.frameworkProject.projectId
                ),
                to: r.framework.id.through(
                    r.frameworkProject.frameworkId
                ),
            }),

            languages: r.many.language({
                from: r.project.id.through(
                    r.languageProject.projectId
                ),
                to: r.language.id.through(
                    r.languageProject.languageId
                ),
            }),
        },

        frameworkProject: {
            framework: r.one.framework({
                from: r.frameworkProject.frameworkId,
                to: r.framework.id
            }),
            project: r.one.project({
                from: r.frameworkProject.projectId,
                to: r.project.id
            }),
        },

        languageProject: {
            language: r.one.language({
                from: r.languageProject.languageId,
                to: r.language.id
            }),
            project: r.one.project({
                from: r.languageProject.projectId,
                to: r.project.id
            }),
        },

        // TECHNOLOGIES
        developmentCategory: {
            frameworkDevelopmentCategories: r.many.frameworkDevelopmentCategory(),
            languageDevelopmentCategories: r.many.languageDevelopmentCategory(),
        },

        framework: {
            frameworkDevelopmentCategories: r.many.frameworkDevelopmentCategory(),
            frameworkProjects: r.many.frameworkProject(),
            learningGoalFrameworks: r.many.learningGoalFramework(),
            projects: r.many.project({
                from: r.framework.id.through(
                    r.frameworkProject.frameworkId
                ),
                to: r.project.id.through(
                    r.frameworkProject.projectId
                ),
            }),

            learningGoals: r.many.learningGoal({
                from: r.framework.id.through(
                    r.learningGoalFramework.frameworkId
                ),
                to: r.learningGoal.id.through(
                    r.learningGoalFramework.learningGoalId
                ),
            }),
        },

        language: {
            languageDevelopmentCategories: r.many.languageDevelopmentCategory(),
            languageProjects: r.many.languageProject(),
            learningGoalLanguages: r.many.learningGoalLanguage(),
            projects: r.many.project({
                from: r.language.id.through(
                    r.languageProject.languageId
                ),
                to: r.project.id.through(
                    r.languageProject.projectId
                ),
            }),

            learningGoals: r.many.learningGoal({
                from: r.language.id.through(
                    r.learningGoalLanguage.languageId
                ),
                to: r.learningGoal.id.through(
                    r.learningGoalLanguage.learningGoalId
                ),
            }),
        },

        frameworkDevelopmentCategory: {
            framework: r.one.framework({
                from: r.frameworkDevelopmentCategory.frameworkId,
                to: r.framework.id
            }),
            developmentCategory: r.one.developmentCategory({
                from: r.frameworkDevelopmentCategory.developmentCategoryId,
                to: r.developmentCategory.id
            })
        },

        languageDevelopmentCategory: {
            language: r.one.language({
                from: r.languageDevelopmentCategory.languageId,
                to: r.language.id
            }),
            developmentCategory: r.one.developmentCategory({
                from: r.languageDevelopmentCategory.developmentCategoryId,
                to: r.developmentCategory.id
            })
        }

    }));