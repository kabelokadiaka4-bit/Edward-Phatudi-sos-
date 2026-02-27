# Edward Phatudi Maths, Science & ICT School of Specialisation

## 🏫 School Website

A modern, premium school website for **Edward Phatudi Maths, Science & ICT School of Specialisation** - a nuclear science-focused school in South Africa. Built with cutting-edge web technologies featuring interactive 3D elements, nuclear science visualizations, and a professional dark theme.

---

## 📋 Table of Contents

- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Requirements](#-requirements)
- [Installation](#-installation)
  - [Windows 11 Setup](#windows-11-setup)
  - [macOS/Linux Setup](#macoslinux-setup)
- [Running the Project](#-running-the-project)
- [Project Structure](#-project-structure)
- [Pages](#-pages)
- [Customization](#-customization)
- [Troubleshooting](#-troubleshooting)
- [License](#-license)

---

## ✨ Features

- **🎨 Modern Dark Theme** - Professional dark design with teal/cyan accents
- **⚛️ Nuclear Science Visualizations** - Interactive 3D nuclear model, animated atoms, and particle effects
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **🚀 Fast Performance** - Built with Next.js 16 for optimal speed
- **🎯 SEO Optimized** - Proper metadata and semantic HTML
- **♿ Accessible** - WCAG compliant with proper ARIA labels
- **🖼️ Image Gallery** - School facilities, campus, and activities showcase
- **📝 Multi-Page Structure** - About, Programs, Facilities, Admissions, and Contact pages

---

## 🛠️ Technology Stack

### Core Framework
- **Next.js 16** - React framework with App Router
- **TypeScript 5** - Type-safe JavaScript
- **React 19** - Modern UI library

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - High-quality accessible components
- **Lucide React** - Beautiful icons
- **Framer Motion** - Smooth animations

### Database
- **Prisma ORM** - Type-safe database toolkit
- **SQLite** - Lightweight embedded database

### Additional Features
- **Next Themes** - Dark/Light mode support
- **Sharp** - High-performance image optimization
- **React Hook Form** - Form handling
- **Zod** - Schema validation

---

## 💻 Requirements

### For Windows 11

| Requirement | Version | Download |
|------------|---------|----------|
| Node.js | 18.x or higher | [nodejs.org](https://nodejs.org/) |
| npm or pnpm | npm 9+ / pnpm 8+ | Included with Node.js or [pnpm.io](https://pnpm.io/) |
| Git | Latest | [git-scm.com](https://git-scm.com/) |
| Visual Studio Code | Latest (recommended) | [code.visualstudio.com](https://code.visualstudio.com/) |

### System Requirements
- **OS**: Windows 11 (also works on Windows 10, macOS, Linux)
- **RAM**: 4GB minimum, 8GB recommended
- **Disk Space**: 500MB minimum
- **Browser**: Chrome, Firefox, Edge, or Safari (latest versions)

---

## 🚀 Installation

### Windows 11 Setup

#### Step 1: Install Node.js

1. Download Node.js from [https://nodejs.org/](https://nodejs.org/)
2. Choose the **LTS (Long Term Support)** version
3. Run the installer and follow the prompts
4. Verify installation:
   ```powershell
   node --version
   npm --version
   ```

#### Step 2: Install pnpm (Optional but Recommended)

pnpm is a fast, disk space efficient package manager:

```powershell
# Using npm
npm install -g pnpm

# Using PowerShell script
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

Verify installation:
```powershell
pnpm --version
```

#### Step 3: Clone or Download the Project

If you have the project files:
1. Extract the ZIP file to your desired location (e.g., `C:\Projects\edward-phatudi-school`)
2. Open the folder in Visual Studio Code or your preferred editor

Or clone from Git:
```powershell
cd C:\Projects
git clone <repository-url> edward-phatudi-school
cd edward-phatudi-school
```

#### Step 4: Install Dependencies

Open PowerShell or Command Prompt in the project directory:

```powershell
# Using npm
npm install

# Or using pnpm (recommended - faster and saves disk space)
pnpm install
```

#### Step 5: Configure Environment

1. Copy the example environment file:
   ```powershell
   # Using PowerShell
   Copy-Item .env.example .env
   
   # Or using Command Prompt
   copy .env.example .env
   ```

2. The default configuration should work for local development. Edit `.env` if needed:
   ```env
   DATABASE_URL="file:./db/custom.db"
   NEXTAUTH_SECRET="your-secret-key-here"
   NEXTAUTH_URL="http://localhost:3000"
   ```

#### Step 6: Initialize Database

```powershell
# Using npm
npm run db:generate
npm run db:push

# Or using pnpm
pnpm run db:generate
pnpm run db:push
```

---

### macOS/Linux Setup

```bash
# Install pnpm (optional)
npm install -g pnpm

# Navigate to project directory
cd /path/to/project

# Install dependencies
npm install
# or: pnpm install

# Configure environment
cp .env.example .env

# Initialize database
npm run db:generate
npm run db:push
```

---

## 🏃 Running the Project

### Development Mode

Start the development server:

```powershell
# Using npm
npm run dev

# Using pnpm
pnpm run dev
```

Open your browser and navigate to: **http://localhost:3000**

The development server features:
- Hot module replacement (changes reflect instantly)
- Detailed error messages
- Source maps for debugging

### Production Build

Build for production deployment:

```powershell
# Using npm
npm run build
npm run start

# Using pnpm
pnpm run build
pnpm run start
```

### Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| Development | `npm run dev` | Start development server on port 3000 |
| Build | `npm run build` | Create optimized production build |
| Start | `npm run start` | Start production server |
| Lint | `npm run lint` | Run ESLint for code quality |
| DB Push | `npm run db:push` | Push Prisma schema to database |
| DB Generate | `npm run db:generate` | Generate Prisma client |
| DB Studio | `npm run db:studio` | Open Prisma database GUI |

---

## 📁 Project Structure

```
edward-phatudi-school/
├── 📁 public/                    # Static assets
│   └── 📁 images/               # School images
│       ├── logo-new.png         # School logo
│       ├── campus-building.jpg  # Campus photo
│       ├── students-activities.jpg
│       └── ...
│
├── 📁 src/
│   ├── 📁 app/                   # Next.js App Router pages
│   │   ├── page.tsx             # Homepage
│   │   ├── layout.tsx           # Root layout
│   │   ├── globals.css          # Global styles
│   │   ├── about/page.tsx       # About page
│   │   ├── programs/page.tsx    # Programs page
│   │   ├── facilities/page.tsx  # Facilities page
│   │   ├── admissions/page.tsx  # Admissions page
│   │   └── contact/page.tsx     # Contact page
│   │
│   ├── 📁 components/
│   │   ├── 📁 school/           # School-specific components
│   │   │   ├── Navigation.tsx   # Main navigation
│   │   │   ├── HeroSection.tsx  # Hero with nuclear animations
│   │   │   ├── WelcomeSection.tsx
│   │   │   ├── SpecializationSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── FacilitiesSection.tsx
│   │   │   ├── AchievementsSection.tsx
│   │   │   ├── AdmissionsSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── PageWrapper.tsx
│   │   │
│   │   └── 📁 ui/               # shadcn/ui components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── ...
│   │
│   ├── 📁 hooks/                # Custom React hooks
│   │   ├── use-toast.ts
│   │   └── use-mobile.ts
│   │
│   └── 📁 lib/                  # Utility functions
│       ├── utils.ts
│       └── db.ts
│
├── 📁 prisma/
│   └── schema.prisma            # Database schema
│
├── 📁 db/
│   └── custom.db                # SQLite database file
│
├── 📁 scripts/
│   └── copy-files.mjs           # Build helper script
│
├── .env                          # Environment variables
├── .env.example                  # Example environment file
├── package.json                  # Project configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # This file
```

---

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Main landing page with hero, welcome, specialization sections |
| About | `/about` | School history, mission, vision, and values |
| Programs | `/programs` | Academic programs and curriculum details |
| Facilities | `/facilities` | Labs, classrooms, and infrastructure |
| Admissions | `/admissions` | Admission requirements and application process |
| Contact | `/contact` | Contact information and inquiry form |

---

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --primary: 180 70% 50%;      /* Teal/Cyan - change hue for different colors */
  --background: 222 47% 11%;    /* Dark background */
  --foreground: 210 40% 98%;    /* Light text */
}
```

### Adding New Images

1. Place images in the `public/images/` folder
2. Reference them in code as: `/images/your-image.jpg`

### Updating School Information

- Edit the content in respective component files in `src/components/school/`
- Update metadata in `src/app/layout.tsx`

---

## 🔧 Troubleshooting

### Common Issues on Windows 11

#### 1. "pnpm: command not found"
**Solution**: Restart your terminal after installation, or add pnpm to your PATH manually.

#### 2. "ENOENT: no such file or directory"
**Solution**: Ensure you're in the correct project directory:
```powershell
cd C:\Path\To\edward-phatudi-school
```

#### 3. Database Errors
**Solution**: Reset and reinitialize the database:
```powershell
npm run db:push -- --force-reset
# or
pnpm run db:push -- --force-reset
```

#### 4. Port 3000 Already in Use
**Solution**: Kill the process using port 3000 or change the port:
```powershell
# Find process using port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID with actual process ID)
taskkill /PID <PID> /F
```

#### 5. Module Not Found Errors
**Solution**: Clear node_modules and reinstall:
```powershell
# Using npm
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install

# Using pnpm
Remove-Item -Recurse -Force node_modules
Remove-Item pnpm-lock.yaml
pnpm install
```

#### 6. Build Errors
**Solution**: Clear Next.js cache and rebuild:
```powershell
Remove-Item -Recurse -Force .next
npm run build
# or: pnpm run build
```

#### 7. PowerShell Execution Policy Error
**Solution**: If you get an execution policy error, run:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Getting Help

1. Check the browser console for JavaScript errors
2. Check the terminal for server-side errors
3. Review the [Next.js Documentation](https://nextjs.org/docs)
4. Check [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

## 🚀 Deployment

### Deploying to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Deploying to Other Platforms

The project uses standalone output mode, making it compatible with:
- Docker containers
- Traditional VPS hosting
- AWS, Azure, Google Cloud
- Any Node.js hosting service

Build and start commands:
```bash
npm run build
npm run start
```

---

## 📝 License

This project is created for Edward Phatudi Maths, Science & ICT School of Specialisation.

---

## 👥 Credits

- **School**: Edward Phatudi Maths, Science & ICT School of Specialisation
- **Built with**: Next.js, React, Tailwind CSS, shadcn/ui
- **Specialization Focus**: Nuclear Science

---

<div align="center">

**Built with ❤️ for Edward Phatudi School**

[↑ Back to Top](#-edward-phatudi-maths-science--ict-school-of-specialisation)

</div>
