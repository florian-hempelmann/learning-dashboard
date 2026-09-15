import bcrypt from 'bcrypt';
import postgres from 'postgres';
import { users , certificates, projects , devCategories, frameworks, languages, learnsubjects, learngoals,
    learnsessions, frameworksDevCategories, languagesDevCategories, frameworksProjects, languagesProjects,
    learngoalsLanguages, learngoalsFrameworks } from './placeholder-data';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedUsers() {
    const insertedUsers = await Promise.all(
        users.map(async (user) => {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            return sql`
                INSERT INTO users (id, name, email, password)
                VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
                ON CONFLICT (id) DO NOTHING;
            `;
        }),
    );

    return insertedUsers;
}

async function seedCertificates() {
    const insertedCertificates = await Promise.all(
        certificates.map(async (certificate) => {
            return sql`
                INSERT INTO certificate (id, user_id, label, date)
                VALUES (${certificate.id}, ${certificate.userId}, ${certificate.label}, ${certificate.date})
                ON CONFLICT (id) DO NOTHING;
            `;
        }),
    );

    return insertedCertificates;
}

async function seedProjects() {
    const insertedProjects = await Promise.all(
        projects.map(async (project) => {
            return sql`
                INSERT INTO project (id, user_id, label, description, start_date, end_date)
                VALUES (${project.id}, ${project.userId}, ${project.label}, ${project.description},
                        ${project.startDate}, ${project.endDate})
                ON CONFLICT (id) DO NOTHING;
            `;
        }),
    );

    return insertedProjects;
}

async function seedDevCategories() {
    const insertedDevCategories = await Promise.all(
        devCategories.map(async (devCategory) => {
            return sql`
                INSERT INTO dev_category (id, label)
                VALUES (${devCategory.id}, ${devCategory.label})
                ON CONFLICT (id) DO NOTHING;
            `;
        }),
    );

    return insertedDevCategories;
}

async function seedFrameworks() {
    const insertedFrameworks = await Promise.all(
        frameworks.map(async (framework) => {
            return sql`
                INSERT INTO framework (id, label)
                VALUES (${framework.id}, ${framework.label})
                ON CONFLICT (id) DO NOTHING;
            `;
        }),
    );

    return insertedFrameworks;
}

async function seedLanguages() {
    const insertedLanguages = await Promise.all(
        languages.map(async (language) => {
            return sql`
                INSERT INTO language (id, label)
                VALUES (${language.id}, ${language.label})
                ON CONFLICT (id) DO NOTHING;
            `;
        }),
    );

    return insertedLanguages;
}

async function seedLearnsubjects() {
    const insertedLearnsubjects = await Promise.all(
        learnsubjects.map(async (learnsubject) => {
            return sql`
                INSERT INTO learnsubject (id, label)
                VALUES (${learnsubject.id}, ${learnsubject.label})
                ON CONFLICT (id) DO NOTHING;
            `;
        }),
    );

    return insertedLearnsubjects;
}

async function seedLearngoals() {
    const insertedLearngoals = await Promise.all(
        learngoals.map(async (learngoal) => {
            return sql`
                INSERT INTO learngoal (id, user_id, lsub_id, label, status)
                VALUES (${learngoal.id}, ${learngoal.userId}, ${learngoal.lsubId}, ${learngoal.label},
                        ${learngoal.status})
                ON CONFLICT (id) DO NOTHING;
            `;
        }),
    );

    return insertedLearngoals;
}

async function seedLearnSessions() {
    const insertedLearnsessions = await Promise.all(
        learnsessions.map(async (learnsession) => {
            return sql`
                INSERT INTO learnsession (id, user_id, lg_id, start_time, end_time)
                VALUES (${learnsession.id}, ${learnsession.userId}, ${learnsession.lgId},
                        ${learnsession.startTime}, ${learnsession.endTime})
                ON CONFLICT (id) DO NOTHING;
            `;
        }),
    );

    return insertedLearnsessions;
}

// ==========================
// JUNCTION TABLES
// ==========================

async function seedFrameworksDevCategories() {
    const insertedFrameworksDevCategories = await Promise.all(
        frameworksDevCategories.map(async (frameworkDevCategory) => {
            return sql`
                INSERT INTO framework_dev_category (fw_id, cat_id)
                VALUES (${frameworkDevCategory.fwId}, ${frameworkDevCategory.catId});
            `;
        }),
    );

    return insertedFrameworksDevCategories;
}

async function seedLanguagesDevCategories() {
    const insertedLanguagesDevCategories = await Promise.all(
        languagesDevCategories.map(async (languageDevCategory) => {
            return sql`
                INSERT INTO language_dev_category (l_id, cat_id)
                VALUES (${languageDevCategory.lId}, ${languageDevCategory.catId});
            `;
        }),
    );

    return insertedLanguagesDevCategories;
}

async function seedFrameworksProjects() {
    const insertedFrameworksProjects = await Promise.all(
        frameworksProjects.map(async (frameworkProject) => {
            return sql`
                INSERT INTO framework_project (fw_id, p_id)
                VALUES (${frameworkProject.fwId}, ${frameworkProject.pId});
            `;
        }),
    );

    return insertedFrameworksProjects;
}

async function seedLanguagesProjects() {
    const insertedLanguagesProjects = await Promise.all(
        languagesProjects.map(async (languageProject) => {
            return sql`
                INSERT INTO language_project (l_id, p_id)
                VALUES (${languageProject.lId}, ${languageProject.pId});
            `;
        }),
    );

    return insertedLanguagesProjects;
}

async function seedLearngoalsLanguages() {
    const insertedLearngoalsLanguages = await Promise.all(
        learngoalsLanguages.map(async (learngoalLanguage) => {
            return sql`
                INSERT INTO learngoal_language (lg_id, l_id)
                VALUES (${learngoalLanguage.lgId}, ${learngoalLanguage.lId});
            `;
        }),
    );

    return insertedLearngoalsLanguages;
}

async function seedLearngoalsFrameworks() {
    const insertedLearngoalsFrameworks = await Promise.all(
        learngoalsFrameworks.map(async (learngoalFramework) => {
            return sql`
                INSERT INTO learngoal_framework (lg_id, fw_id)
                VALUES (${learngoalFramework.lgId}, ${learngoalFramework.fwId});
            `;
        }),
    );

    return insertedLearngoalsFrameworks;
}

export async function seedData() {
        await seedUsers();
        await seedCertificates();
        await seedProjects();
        await seedDevCategories();
        await seedFrameworks();
        await seedLanguages();
        await seedLearnsubjects();
        await seedLearngoals();
        await seedLearnSessions();

        // Junction Tables
        await seedFrameworksDevCategories();
        await seedLanguagesDevCategories();
        await seedFrameworksProjects();
        await seedLanguagesProjects();
        await seedLearngoalsLanguages();
        await seedLearngoalsFrameworks();
}