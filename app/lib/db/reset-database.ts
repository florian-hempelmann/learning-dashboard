import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function resetDatabase() {
    await sql`
        DROP TABLE IF EXISTS
            learngoal_framework,
            learngoal_language,
            language_project,
            framework_project,
            language_dev_category,
            framework_dev_category,
            learnsession,
            learngoal,
            project,
            certificate,
            learnsubject,
            language,
            framework,
            dev_category,
            users
        CASCADE;
    `;
}