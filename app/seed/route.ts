import postgres from 'postgres';
import { createTables } from '../lib/db/create-tables';
import { seedData } from '../lib/db/seed-data';
import { resetDatabase } from '../lib/db/reset-database';

const sql = postgres(process.env.POSTGRES_URL!, {
    ssl: 'require',
});

export async function GET() {
    try {
        await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

        await resetDatabase();
        await createTables();
        await seedData();

        return Response.json({
            message: 'Database seeded successfully',
        });
    } catch (error) {
        console.error(error);

        return Response.json(
            { error: 'Database seeding failed' },
            { status: 500 },
        );
    }
}