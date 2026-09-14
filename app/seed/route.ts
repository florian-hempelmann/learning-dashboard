import bcrypt from 'bcrypt';
import postgres from 'postgres';
import { users } from '../lib/placeholder-data';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedUsers() {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sql`
    CREATE TABLE IF NOT EXISTS user (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL UNIQUE,
      password VARCHAR(100) NOT NULL
    );
  `;

    const insertedUsers = await Promise.all(
        users.map(async (user) => {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            return sql`
            INSERT INTO user (id, name, email, password)
            VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
            ON CONFLICT (id) DO NOTHING;
      `;
        }),
    );

    return insertedUsers;
}

async function seedCertificates(){
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sql`
    CREATE TABLE IF NOT EXISTS certificate (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      user_id INTEGER NOT NULL,
      label VARCHAR(100) NOT NULL,
      date DATE NOT NULL,

        CONSTRAINT fk_certificate_user
          FOREIGN KEY (user_id)
          REFERENCES users(id)
    );
    `;

    const insertedCertificates = await Promise.all(
        certificates.map(async (certificate) => {
            return sql`
            INSERT INTO certificate (user_id, label, date)
            VALUES (${certificate.user_id}, ${certificate.label}, ${certificate.date});
      `;
        }),
    );

    return insertedCertificates;
}

async function seedProjects(){
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sql`
    CREATE TABLE IF NOT EXISTS project (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      user_id INTEGER NOT NULL,
      label VARCHAR(100) NOT NULL,
      description TEXT,
      start_date DATE NOT NULL,
      end_date DATE,

        CONSTRAINT fk_project_user
          FOREIGN KEY (user_id)
          REFERENCES users(id)
    );
    `;

    const insertedProjects = await Promise.all(
        projects.map(async (project) => {
            return sql`
            INSERT INTO project (user_id, label, description, start_date, end_date)
            VALUES (${project.user_id}, ${project.label}, ${project.description}, 
                    ${project.start_date}, ${project.end_date});
      `;
        }),
    );

    return insertedProjects;
}

async function seedDevCategories(){
    await sql`
    CREATE TABLE IF NOT EXISTS dev_category (
      id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      label VARCHAR(100) NOT NULL
    );
    `;

    const insertedDevCategories = await Promise.all(
        devCategories.map(async (devCategory) => {
            return sql`
            INSERT INTO dev_category (label)
            VALUES (${devCategory.label});
      `;
        }),
    );

    return insertedDevCategories;
}

async function seedFrameworks(){
    await sql`
    CREATE TABLE IF NOT EXISTS framework (
      id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      cat_id INTEGER NOT NULL,
      label VARCHAR(100) NOT NULL,

        CONSTRAINT fk_framework_user
          FOREIGN KEY (cat_id)
          REFERENCES dev_category(id)
    );
    `;

    const insertedFrameworks = await Promise.all(
        frameworks.map(async (framework) => {
            return sql`
            INSERT INTO framework (cat_id, label)
            VALUES (${framework.cat_id}, ${framework.label});
      `;
        }),
    );

    return insertedFrameworks;
}

async function seedLanguages(){
    await sql`
    CREATE TABLE IF NOT EXISTS language (
      id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      cat_id INTEGER NOT NULL,
      label VARCHAR(100) NOT NULL,

        CONSTRAINT fk_language_user
          FOREIGN KEY (cat_id)
          REFERENCES dev_category(id)
    );
    `;

    const insertedLanguages = await Promise.all(
        languages.map(async (language) => {
            return sql`
            INSERT INTO language (cat_id, label)
            VALUES (${language.label}, ${language.date});
      `;
        }),
    );

    return insertedLanguages;
}

async function seedLearnsubjects(){
    await sql`
    CREATE TABLE IF NOT EXISTS learnsubject (
      id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      label VARCHAR(100) NOT NULL
    );
    `;

    const insertedLearnsubjects = await Promise.all(
        learnsubjects.map(async (learnsubject) => {
            return sql`
            INSERT INTO learnsubject (label)
            VALUES (${learnsubject.label});
      `;
        }),
    );

    return insertedLearnsubjects;
}

async function seedLearngoals(){
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sql`
    CREATE TABLE IF NOT EXISTS language (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      user_id INTEGER NOT NULL,
      lsub_id INTEGER NOT NULL,
      label VARCHAR(255) NOT NULL,
      status TEXT DEFAULT 'UNKNOWN',

        CONSTRAINT fk_learngoal_user
          FOREIGN KEY (user_id)
          REFERENCES user(id),
        
        CONSTRAINT fk_learngoal_learnsubject
          FOREIGN KEY (lsub_id)
          REFERENCES learnsubject(id)
    );
    `;

    const insertedLearngoals = await Promise.all(
        learngoals.map(async (learngoal) => {
            return sql`
            INSERT INTO learngoal (user_id, lsub_id, label, status)
            VALUES (${learngoal.user_id}, ${learngoal.lsub_id}, ${learngoal.label}, ${learngoal.status});
      `;
        }),
    );

    return insertedLearngoals;
}

async function seedLearnSessions(){
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sql`
    CREATE TABLE IF NOT EXISTS learnsession (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      user_id INTEGER NOT NULL,
      lg_id INTEGER NOT NULL,
      start_time TIMESTAMP NOT NULL,
      end_time TIMESTAMP,

        CONSTRAINT fk_learnsession_user
          FOREIGN KEY (user_id)
          REFERENCES user(id),
        
        CONSTRAINT fk_learnsession_learngoal
          FOREIGN KEY (lg_id)
          REFERENCES learngoal(id)
    );
    `;

    const insertedLearnsessions = await Promise.all(
        learnsessions.map(async (learnsession) => {
            return sql`
            INSERT INTO learnsession (user_id, lg_id, start_date, end_date)
            VALUES (${learnsession.user_id}, ${learnsession.lg_id}, 
                    ${learnsession.start_time}, ${learnsession.end_time});
      `;
        }),
    );

    return insertedLearnsessions;
}

/* Junction Tables */

async function seedFrameworksProjects(){
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sql`
    CREATE TABLE IF NOT EXISTS framework_project (
      fw_id INTEGER NOT NULL,
      p_id UUID NOT NULL,

        CONSTRAINT pk_framework_project
          PRIMARY KEY (fw_id, p_id),
        
        CONSTRAINT fk_framework_project_framework
          FOREIGN KEY (fw_id)
          REFERENCES framework(id),
        
        CONSTRAINT fk_framework_project_project
          FOREIGN KEY (p_id)
          REFERENCES project(id)
    );
    `;

    const insertedFrameworksProjects = await Promise.all(
        frameworksProjects.map(async (frameworksProject) => {
            return sql`
            INSERT INTO frameworksProject (fw_id, p_id)
            VALUES (${frameworksProject.fw_id}, ${frameworksProject.p_id});
      `;
        }),
    );

    return insertedFrameworksProjects;
}

async function seedLanguagesProjects(){
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sql`
    CREATE TABLE IF NOT EXISTS language_project (
      l_id INTEGER NOT NULL,
      p_id UUID NOT NULL,

        CONSTRAINT pk_language_project
          PRIMARY KEY (l_id, p_id),
        
        CONSTRAINT fk_language_project_language
          FOREIGN KEY (l_id)
          REFERENCES language(id),
        
        CONSTRAINT fk_language_project_project
          FOREIGN KEY (p_id)
          REFERENCES project(id)
    );
    `;

    const insertedLanguagesProjects = await Promise.all(
        languagesProjects.map(async (languagesProject) => {
            return sql`
            INSERT INTO languagesProject (l_id, p_id)
            VALUES (${languagesProject.fw_id}, ${languagesProject.p_id});
      `;
        }),
    );

    return insertedLanguagesProjects;
}

async function seedLearngoalsLanguages(){
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sql`
    CREATE TABLE IF NOT EXISTS learngoal_language (
      lg_id INTEGER NOT NULL,
      l_id UUID NOT NULL,

        CONSTRAINT pk_learngoal_language
          PRIMARY KEY (lg_id, l_id),
        
        CONSTRAINT fk_learngoal_language_learngoal
          FOREIGN KEY (lg_id)
          REFERENCES learngoal(id),
        
        CONSTRAINT fk_learngoal_language_language
          FOREIGN KEY (l_id)
          REFERENCES language(id)
    );
    `;

    const insertedLearngoalsLanguages = await Promise.all(
        learngoalsLanguages.map(async (learngoalsLanguage) => {
            return sql`
            INSERT INTO learngoalsLanguage (lg_id, l_id)
            VALUES (${learngoalsLanguage.lg_id}, ${learngoalsLanguage.l_id});
      `;
        }),
    );

    return insertedLearngoalsLanguages;
}

async function seedLearngoalsFrameworks(){
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sql`
    CREATE TABLE IF NOT EXISTS learngoal_framework (
      lg_id INTEGER NOT NULL,
      f_id UUID NOT NULL,

        CONSTRAINT pk_learngoal_framework
          PRIMARY KEY (lg_id, f_id),
        
        CONSTRAINT fk_learngoal_framework_learngoal
          FOREIGN KEY (lg_id)
          REFERENCES learngoal(id),
        
        CONSTRAINT fk_learngoal_framework_framework
          FOREIGN KEY (f_id)
          REFERENCES framework(id)
    );
    `;

    const insertedLearngoalsFrameworks = await Promise.all(
        learngoalsFrameworks.map(async (learngoalsFramework) => {
            return sql`
            INSERT INTO learngoalsFramework (lg_id, f_id)
            VALUES (${learngoalsFramework.lg_id}, ${learngoalsFramework.f_id});
      `;
        }),
    );

    return insertedLearngoalsFrameworks;
}


export async function GET() {
    try {
        const result = await sql.begin((sql) => [
            seedUsers(),
            seedCertificates(),
            seedProjects(),
            seedDevCategories(),
            seedFrameworks(),
            seedLanguages(),
            seedLearnsubjects(),
            seedLearngoals(),
            seedLearnSessions(),
            seedFrameworksProjects(),
            seedLanguagesProjects(),
            seedLearngoalsLanguages(),
            seedLearngoalsFrameworks()
        ]);

        return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}