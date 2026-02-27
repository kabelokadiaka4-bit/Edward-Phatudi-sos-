# GEMINI.md - Project Context

## Project Overview
This is a modern, premium website for **Edward Phatudi Maths, Science & ICT School of Specialisation**, focusing on nuclear science. The application is built with a high-performance, accessible dark theme and features interactive 3D visualizations related to nuclear science.

### Main Technologies
- **Core:** Next.js 16 (App Router), React 19, TypeScript 5.
- **Styling:** Tailwind CSS 4, Framer Motion (animations), Lucide React (icons).
- **UI Components:** shadcn/ui (Radix UI primitives).
- **Data:** Prisma ORM with SQLite database.
- **Utilities:** React Hook Form, Zod (validation), Next Themes.

## Building and Running
The project uses `pnpm` as the preferred package manager, but `npm` is also supported.

### Development Commands
- `npm run dev` - Start the development server on port 3000.
- `npm run db:push` - Synchronize the Prisma schema with the local SQLite database.
- `npm run db:generate` - Generate the Prisma Client.
- `npm run db:studio` - Open the Prisma Studio GUI for database management.

### Production Commands
- `npm run build` - Create an optimized production build.
- `npm run start` - Start the production server.

## Project Structure
- `src/app/` - Application routes and layouts (App Router).
- `src/components/school/` - School-specific business components (Hero, Specialization, etc.).
- `src/components/ui/` - Reusable UI components (shadcn/ui).
- `src/lib/` - Utility functions and database client initialization (`db.ts`).
- `prisma/` - Database schema definition (`schema.prisma`).
- `public/` - Static assets including school images and logos.

## Development Conventions
- **Styling:** Utility-first CSS using Tailwind. Theme variables are defined in `src/app/globals.css`.
- **Type Safety:** Strict TypeScript usage across the codebase.
- **Animations:** Extensive use of `framer-motion` for sections and interactive elements.
- **Database:** SQLite is used for local storage, managed through Prisma.
- **Components:** Components are organized into `school` (functional) and `ui` (atomic) folders.

## Key Instructions for Gemini CLI
- **Always respect the dark theme:** Use the teal/cyan accent colors and maintain the high-contrast professional aesthetic.
- **Nuclear Science Context:** When generating content or UI, keep the school's specialization (Nuclear Science, STEM) in mind.
- **Prisma usage:** When modifying data models, remember to run `npm run db:push` and `npm run db:generate`.
- **Component Consistency:** Use existing shadcn/ui components from `src/components/ui` for consistency.
