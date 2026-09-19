# Implementation

This File documents the implementation of this App chronologically as an overview.

1. Setup Next.js Project with IntelliJ IDEA (wsl2 terminal)
2. Connect project to Github repository
3. Connect Github project with Vercel
4. Create storage using neondb (PostgreSQL) in Vercel
5. Connect neondb with Project (create .env file)
6. Connect neondb with IntelliJ 
7. Create an Entity Relation Diagram (using Draw.io) to identify necessary tables and junction tables
8. Create tables by using the /seed/route.ts
9. Seeding tables with placeholder-data by using the /seed/route.ts
10. Creating mockups for dashboard homepage with light and dark theme (using Penpot)
11. Adjust structured documentations in the /docs folder
12. Implementing the UI from the mockups to the project
    - implementing light-/darkmode logic from the start (using next-themes)
13. Implementing ORM Drizzle
14. Changing project structure
15. Change DB Setup from direct sql queries to drizzle migrations
16. Install BetterAuth and adjusting schema and seed data