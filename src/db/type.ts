import { user, session, account } from "./schema/auth";
import { certificate } from "./schema/certificates";
import { learningSubject, learningGoal, learningSession, learningGoalLanguage, learningGoalFramework } from "./schema/learning";
import { project, frameworkProject, languageProject } from "./schema/projects";
import { framework, language, developmentCategory, frameworkDevelopmentCategory, languageDevelopmentCategory } from "./schema/technologies";

// Main tables

export type User = typeof user.$inferSelect;
export type NewUser = typeof user.$inferSelect;

// export type Session = typeof session.$inferSelect;
// export type NewSession = typeof session.$inferSelect;
//
// export type Account = typeof account.$inferSelect;
// export type NewAccount = typeof account.$inferSelect;

export type Certificate = typeof certificate.$inferSelect;
export type NewCertificate = typeof certificate.$inferInsert;

export type Project = typeof project.$inferSelect;
export type NewProject = typeof project.$inferInsert;

export type DevelopmentCategory = typeof developmentCategory.$inferSelect;
export type NewDevelopmentCategory = typeof developmentCategory.$inferInsert;

export type Framework = typeof framework.$inferSelect;
export type NewFramework = typeof framework.$inferInsert;

export type Language = typeof language.$inferSelect;
export type NewLanguage = typeof language.$inferInsert;

export type LearningSubject = typeof learningSubject.$inferSelect;
export type NewLearningSubject = typeof learningSubject.$inferInsert;

export type LearningGoal = typeof learningGoal.$inferSelect;
export type NewLearningGoal = typeof learningGoal.$inferInsert;

export type LearningSession = typeof learningSession.$inferSelect;
export type NewLearningSession = typeof learningSession.$inferInsert;


// Junction tables

export type FrameworkDevelopmentCategory =
    typeof frameworkDevelopmentCategory.$inferSelect;

export type NewFrameworkDevelopmentCategory =
    typeof frameworkDevelopmentCategory.$inferInsert;

export type LanguageDevelopmentCategory =
    typeof languageDevelopmentCategory.$inferSelect;

export type NewLanguageDevelopmentCategory =
    typeof languageDevelopmentCategory.$inferInsert;

export type FrameworkProject =
    typeof frameworkProject.$inferSelect;

export type NewFrameworkProject =
    typeof frameworkProject.$inferInsert;

export type LanguageProject =
    typeof languageProject.$inferSelect;

export type NewLanguageProject =
    typeof languageProject.$inferInsert;

export type LearningGoalLanguage =
    typeof learningGoalLanguage.$inferSelect;

export type NewLearningGoalLanguage =
    typeof learningGoalLanguage.$inferInsert;

export type LearningGoalFramework =
    typeof learningGoalFramework.$inferSelect;

export type NewLearningGoalFramework =
    typeof learningGoalFramework.$inferInsert;