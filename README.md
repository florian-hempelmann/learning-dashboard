# Learning Dashboard (WIP)

A full-stack learning project built with **Next.js, TypeScript, React,** and a **relational database**.

The project started as a way to deepen my practical knowledge of modern React and Next.js development after
completing the Next.js App Router tutorial. I am now developing it into an application for managing and visualizing 
learning progress across different categories.

### Live-Demo: [Learning Dashboard](https://learning-dashboard-silk-kappa.vercel.app/login)
You can explore the navigation, layout, authentication flow and light/dark mode using the demo account below.
```testuser
Email: testuser@test.de
Password: Pa55w.rd
```

### Work in Progress
The project ist being developed by myself incrementally. The core  application architecture, authentication, 
database structure and UI foundation are implemented. CRUD functionality and data visualizations are currently 
under development. I intentionally keep the project public from now on to show my working-, documenting- and 
learning-process (look in /docs for further information).

## My Goal 
To visualize my learning progress in a dashboard application, including the ability to create, edit, 
and manage learning content, like technologies, learning goals or projects.

### My Focus
- structuring  a larger React/Next.js application
- designing and working with relational data (using drizzle and neondb)
- implementing authentication
- building reusable UI components
- working with server- and client-side functionality
- maintaining and extending an application as its complexity grows
--- 
## Tech Stack

- **Next.js 16** — App Router, full-stack React framework
- **React 19** — component-based UI development
- **TypeScript** — type-safe development
- **Tailwind CSS 4** — responsive UI styling
- **Drizzle ORM** — type-safe database access and schema management
- **Drizzle Kit** — database migrations
- **PostgreSQL / Neon** — relational database
- **Better Auth** — authentication
- **next-themes** — light/dark mode
- **ESLint** — code quality and linting

## Deployment
- **Vercel** — deployment and hosting
- **Neon** — hosted PostgreSQL database
--- 
## Database

The application uses a relational PostgreSQL database with a data model consisting of 18+ tables.

Database schema changes are managed through **Drizzle Kit migrations**, while a dedicated seed script provides 
representative development data.

### Database Commands

pnpm run db:generate - Generate a new migration after changing the database schema<br>
pnpm run db:migrate - Apply pending migrations<br>
pnpm run db:seed - Populate the database with development data

The seed data is intended for local development and demonstration purposes.

---
## Start
**Prerequisites**
- node.js
- npm/pnpm/yarn
- A configured database

**Git clone repository and install dependencies**
```bash
git clone https://github.com/florian-hempelmann/learning-dashboard.git
cd learning-dashboard
pnpm i
```
**Set environment variables:**
```.env.example
# Database
DATABASE_URL="postgresql://USER:PASSWORD@HOST/DATABASE"

# Better Auth
BETTER_AUTH_SECRET="your-secret-here"
BETTER_AUTH_URL="http://localhost:3000"
```
Note: 
- The values shown above are placeholders. Actual credentials are not included in the repository.
- You might need to change paths in drizzle.config.ts and /src/db/drizzle.ts to env.local


**Create and seed database tables:**
```bash
pnpm db:migrate
pnpm db:seed
```
**Run the development server:**
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---
## About the Project

This project is part of my continued development as a software developer following my completed retraining 
program. It builds on my previous experience working with B2B applications and CMS-based environments while 
allowing me to deepen my knowledge of modern frontend and full-stack web development with React and Next.js.

---
## Resources and Documentation
- [Next.js Documentation](https://nextjs.org/docs) - Framework & App Router
- [Vercel Documentation](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) - Deployment & Hosting
- [Drizzle Documentation](https://orm.drizzle.team/docs/get-started/neon-new) - ORM & Database Migrations
- [BetterAuth Documentation](https://better-auth.com/docs/integrations/next) - Authentication
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation/using-vite) - Styling
- [Neon Documentation](https://neon.com/docs/guides/nextjs) - PostgreSQL Database
