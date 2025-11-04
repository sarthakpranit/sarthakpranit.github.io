# Claude.md - Portfolio Website Project Documentation

**Last Updated:** 2025-11-04
**Project:** Sarthak Pranit's Portfolio Website
**Repository:** sarthakpranit.github.io
**Tech Stack:** React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture & Technology Stack](#architecture--technology-stack)
3. [Directory Structure](#directory-structure)
4. [Core Concepts](#core-concepts)
5. [Content Management](#content-management)
6. [Component Architecture](#component-architecture)
7. [Routing & Navigation](#routing--navigation)
8. [State Management](#state-management)
9. [Styling & Theming](#styling--theming)
10. [Case Study System](#case-study-system)
11. [Special Features](#special-features)
12. [Development Workflow](#development-workflow)
13. [Build & Deployment](#build--deployment)
14. [Performance Optimizations](#performance-optimizations)
15. [Future Enhancements](#future-enhancements)

---

## Project Overview

This is a modern, portfolio website showcasing UX/product design case studies and professional experience. The site emphasizes:

- **Clean, editorial design** with a focus on storytelling
- **Dark/light theme support** with system preference detection
- **Performance-optimized** with code splitting and lazy loading
- **Content-driven** approach using Markdown and JSON
- **Password protection** for sensitive case studies
- **Responsive design** mobile-first approach

### Key Features

- Dynamic countdown timer in hero section
- Three main case studies with detailed views
- Work experience timeline
- Social media links with CV download
- 404 error handling
- Test content playground

---

## Architecture & Technology Stack

### Core Technologies

```json
{
  "react": "^18.3.1",
  "typescript": "^5.5.3",
  "vite": "^5.4.1",
  "tailwindcss": "^3.4.11",
  "react-router-dom": "^6.26.2"
}
```

### UI Component Library

- **shadcn/ui** - 37+ accessible components built on Radix UI
- **Lucide React** - Icon library with tree-shaking
- **Next-themes** - Theme management utilities

### Build Tools

- **Vite** with SWC for fast compilation
- **ESLint** for code quality
- **PostCSS** with Autoprefixer
- **Custom markdown loader plugin**

### State & Utilities

- **React Context API** for global state
- **React hooks** for component logic
- **Class Variance Authority** for type-safe CSS utilities
- **clsx + tailwind-merge** for conditional classes

---

## Directory Structure

```
src/
├── components/           # React components
│   ├── ui/              # shadcn/ui components (37 files)
│   ├── sections/        # Page sections (Hero, Experience, etc.)
│   └── [shared]         # Shared components
├── pages/               # Route pages
│   ├── Index.tsx        # Home page (/)
│   ├── CaseStudies.tsx  # Case studies listing (/case-studies)
│   ├── CaseStudyDetail.tsx  # Single case study (/case-study/:id)
│   ├── NotFound.tsx     # 404 page
│   └── TestContent.tsx  # Test page
├── content/             # Content files
│   ├── hero.md          # Hero section markdown
│   ├── about.md         # About section markdown
│   ├── experience.json  # Work experience data
│   ├── social-links.json # Social links data
│   └── case-studies/    # Case study markdown files
│       ├── cujo.md
│       ├── healthcare.md
│       └── fintech.md
├── hooks/               # Custom React hooks
│   ├── use-theme.tsx    # Theme management
│   ├── use-app-state.tsx # Global app state
│   ├── use-mobile.tsx   # Mobile detection
│   └── [others]
├── utils/               # Utility functions
│   ├── contentLoader.ts # Content loading logic
│   ├── contentParser.ts # Frontmatter parsing
│   ├── iconImports.ts   # Icon optimization
│   └── [others]
├── config/              # Configuration
│   └── passwords.ts     # Password protection config
├── providers/           # Context providers
│   └── app-providers.tsx # Combined providers
├── integrations/        # External services
│   └── supabase/        # Supabase client (minimal usage)
└── lib/                 # Library utilities
    └── utils.ts         # cn() utility
```

---

## Core Concepts

### Entry Point Flow

```
index.html → main.tsx → App.tsx → Routes → Pages → Components
```

1. **index.html** - HTML shell with SEO meta tags
2. **main.tsx** - React root initialization
3. **App.tsx** - Router setup, providers, and route definitions
4. **Pages** - Route-specific components
5. **Components** - Reusable UI elements

### Key Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Build configuration, markdown loader |
| `tailwind.config.ts` | Theme colors, dark mode, responsive breakpoints |
| `tsconfig.json` | TypeScript compiler options (loose config) |
| `components.json` | shadcn/ui configuration |
| `postcss.config.js` | CSS processing pipeline |

---

## Content Management

### Content Architecture

The site uses a **three-layer content system**:

#### 1. Markdown Files (Narrative Content)

```markdown
---
id: 1
title: "Project Title"
subtitle: "Project Subtitle"
roles: ["Role 1", "Role 2"]
year: "2023"
client: "Client Name"
image: "/placeholder.svg"
heroImage: "/placeholder.svg"
---

# Introduction
Content here...

# Problem
Content here...

# Solution
Content here...

# Conclusion
Content here...
```

**Files:**
- `/src/content/hero.md` - Hero section text
- `/src/content/about.md` - About section text
- `/src/content/case-studies/*.md` - Individual case studies

#### 2. JSON Files (Structured Data)

```json
// experience.json
[
  {
    "title": "Job Title",
    "company": "Company Name",
    "period": "2020 - Present",
    "description": "Job description..."
  }
]

// social-links.json
[
  {
    "name": "LinkedIn",
    "url": "https://linkedin.com/in/...",
    "icon": "linkedin"
  }
]
```

#### 3. Hardcoded Fallback Data

Located in `contentLoader.ts` as the `fallbackCaseStudies` array. Used when markdown files aren't available or as development fallback.

### Content Loading System

**contentLoader.ts** (`src/utils/contentLoader.ts:1`)

Key functions:

```typescript
// Load all case studies
loadAllCaseStudies(): CaseStudy[]

// Load specific case study by ID
loadCaseStudyById(id: number): CaseStudy | null

// Load metadata for listing pages
loadCaseStudyMetadata()

// Load generic markdown content
loadMarkdownContent(path: string): string
```

**contentParser.ts** (`src/utils/contentParser.ts:1`)

```typescript
// Parse YAML frontmatter from markdown
parseFrontmatter(content: string): { frontmatter, content }
```

### Data Flow Examples

**Experience Section:**
```
ExperienceSection → loads experience.json → ExperienceList → renders
```

**Case Studies:**
```
CaseStudiesSection → loadCaseStudyMetadata() → CaseStudyCard grid → render
```

**Single Case Study:**
```
CaseStudyDetail → useParams (id) → loadCaseStudyById(id) → render content
```

---

## Component Architecture

### Component Hierarchy

```
App
├── AppProviders (ThemeProvider + AppProvider)
├── TooltipProvider
├── Toaster (notifications)
└── BrowserRouter
    └── Routes
        ├── Index Page
        │   ├── ThemeToggle
        │   ├── HeroSection
        │   │   └── HeroContent (markdown + countdown)
        │   ├── ExperienceSection
        │   │   └── ExperienceList
        │   ├── CaseStudiesSection
        │   │   └── CaseStudyCard (×3)
        │   └── AboutSection
        │       └── SocialLinks
        ├── CaseStudies Page
        │   └── CaseStudy Grid
        └── CaseStudyDetail Page
            ├── PasswordGate (optional)
            └── CaseStudyContent
```

### Component Categories

#### Layout Components
- `HeroSection` - Hero container
- `ExperienceSection` - Experience timeline container
- `CaseStudiesSection` - Case studies grid container
- `AboutSection` - About section container
- `ThemeToggle` - Fixed theme toggle button

#### Section Components
- `HeroContent` - Renders hero markdown with countdown timer
- `ExperienceList` - Renders experience from JSON
- `CaseStudyCard` - Preview card with image, title, roles
- `SocialLinks` - Social media links from JSON

#### UI Components (shadcn/ui)
- **Layout:** Card, Accordion, Tabs, Carousel, Separator
- **Forms:** Button, Input, Select, Checkbox, Switch, RadioGroup
- **Overlays:** Dialog, Popover, Tooltip, Sheet, Drawer
- **Feedback:** Toast, Alert, Progress, Skeleton
- **Data Display:** Table, Badge, Avatar

#### Special Components
- `OptimizedImage` - Lazy loading, responsive, aspect ratio
- `PasswordGate` - Password protection wrapper
- `CountdownTimer` - Dynamic countdown (injected into hero)

### Component File Locations

| Component Type | Location | Count |
|----------------|----------|-------|
| UI Components | `src/components/ui/` | 37 files |
| Section Components | `src/components/sections/` | 4 files |
| Page Components | `src/pages/` | 5 files |

---

## Routing & Navigation

### Routes Configuration

```typescript
// App.tsx route definitions
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/case-studies" element={<CaseStudies />} />
  <Route path="/case-study/:id" element={<CaseStudyDetail />} />
  <Route path="/test-content" element={<TestContent />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

### Navigation Features

- **Client-side SPA navigation** - No full page reloads
- **Lazy loading** with Suspense fallback
- **Back navigation** with ArrowLeft icon
- **URL parameters** for case study IDs (`:id`)
- **404 fallback** for undefined routes

### Navigation Components

```tsx
// Link component from react-router-dom
<Link to="/case-studies">Case Studies</Link>

// Back navigation
<Link to="/case-studies">
  <ArrowLeft className="h-4 w-4 mr-2" />
  Back to Case Studies
</Link>
```

---

## State Management

### Dual-Provider Architecture

The app uses two main context providers:

#### 1. Theme Management (`use-theme.tsx`)

**Context:**
```typescript
interface ThemeContextType {
  theme: Theme  // 'light' | 'dark' | 'system'
  setTheme: (theme: Theme) => void
  isDark: boolean
  toggleTheme: () => void
  isSystemTheme: boolean
}
```

**Features:**
- localStorage persistence
- System theme detection via matchMedia
- Smooth transitions
- Respects `prefers-reduced-motion`

**Usage:**
```tsx
const { isDark, setTheme, toggleTheme } = useTheme()
```

#### 2. App State Management (`use-app-state.tsx`)

**State:**
```typescript
interface AppState {
  currentPage: string
  isNavigating: boolean
  isLoading: boolean
  loadingMessage: string
  sidebarOpen: boolean
  modalOpen: boolean
  modalType: string | null
  animationsEnabled: boolean
  reducedMotion: boolean
  scrollY: number
  isScrolled: boolean
  viewport: { width, height, isMobile, isTablet, isDesktop }
  error: string | null
}
```

**Features:**
- `useReducer` with 11 action types
- Window resize tracking
- Scroll position tracking
- Reduced motion detection
- localStorage persistence

**Usage:**
```tsx
const { state, setLoading, setError, setSidebarOpen } = useAppState()
```

#### 3. Combined Providers

```tsx
// app-providers.tsx
<ThemeProvider>
  <AppProvider>
    {children}
  </AppProvider>
</ThemeProvider>
```

### State Persistence

- **Theme preference** → localStorage key: `theme`
- **App state** (animations, current page) → localStorage

---

## Styling & Theming

### Tailwind CSS Configuration

**Color System** - HSL-based CSS variables

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --primary: 0 0% 9%;
  /* ... 12+ colors */
}

.dark {
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
  /* ... inverted colors */
}
```

**Theme Colors:**
- `background/foreground` - Main contrast
- `primary/primary-foreground` - Accent buttons
- `secondary/muted/accent` - Subtle elements
- `destructive` - Error states
- `border/input/ring` - UI elements
- `card/popover` - Component backgrounds

### Dark Mode Implementation

- **Class-based toggle** (not media query)
- Controlled via `useTheme` hook
- CSS custom properties for color switching
- Smooth transitions via `transition-colors`

```tsx
// ThemeToggle component
<button onClick={toggleTheme}>
  {isDark ? <Sun /> : <Moon />}
</button>
```

### Font Stack

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
```

### Responsive Design

**Breakpoints:**
- `sm` - 640px
- `md` - 768px
- `lg` - 1024px
- `xl` - 1280px
- `2xl` - 1536px

**Approach:**
- Mobile-first utilities
- Grid layouts: `grid md:grid-cols-3`
- Responsive typography: `text-4xl md:text-5xl`

### Animation System

```css
/* Tailwind utilities */
transition-colors duration-300
transition-transform duration-500
animate-pulse
animate-spin
animate-fade-in  /* custom */

/* Built-in keyframes */
@keyframes accordion-down { /* 0.2s ease-out */ }
@keyframes accordion-up   { /* 0.2s ease-out */ }
```

---

## Case Study System

### Current Architecture

**Data Structure:**

```typescript
interface CaseStudyFrontmatter {
  id: number
  title: string
  subtitle: string
  roles: string[]
  year: string
  client: string
  image: string        // Card preview image
  heroImage: string    // Detail page hero
}

interface CaseStudy {
  frontmatter: CaseStudyFrontmatter
  content: string
  sections: {
    introduction?: string
    problem?: string
    solution?: string
    conclusion?: string
  }
}
```

### Case Study Pages

#### 1. Listing Page (`/case-studies`)

**File:** `src/pages/CaseStudies.tsx:1`

**Features:**
- Grid layout (3 columns on desktop)
- Card preview with image
- Title, subtitle, roles
- Year and client metadata
- Links to detail pages

#### 2. Detail Page (`/case-study/:id`)

**File:** `src/pages/CaseStudyDetail.tsx:1`

**Sections:**
1. Back navigation
2. Hero section (title, subtitle, roles)
3. Hero image (optimized, lazy-loaded)
4. Introduction section
5. Problem section
6. Solution section
7. Conclusion section
8. Project details grid (client, year, role)
9. Bottom navigation

**Current Layout Structure:**

```tsx
<div className="max-w-4xl mx-auto px-6 py-16">
  {/* Hero Section */}
  <section className="mb-20">
    <h1>{title}</h1>
    <p>{subtitle}</p>
    <div>{roles.map(...)}</div>
  </section>

  {/* Hero Image */}
  <OptimizedImage />

  {/* Content Sections */}
  <section className="mb-16">
    <h2>Introduction</h2>
    <p>{introduction}</p>
  </section>
  {/* ... more sections ... */}

  {/* Project Details */}
  <section className="mb-16">
    <div className="grid md:grid-cols-3 gap-8">
      {/* Client, Year, Role */}
    </div>
  </section>

  {/* Navigation */}
  <section className="pt-16 border-t">
    {/* Back link */}
  </section>
</div>
```

### Case Study Loading Flow

```
1. User navigates to /case-study/1
2. CaseStudyDetail extracts `id` from URL params
3. loadCaseStudyById(id) called
4. Returns { frontmatter, content, sections }
5. Optional: PasswordGate wraps content
6. Render CaseStudyContent component
```

### Current Limitations

**Uniform Layout:**
- All case studies use the **same layout structure**
- Fixed section order (Introduction → Problem → Solution → Conclusion)
- Same typography and spacing
- Identical visual hierarchy

**Content Constraints:**
- Sections are **plain text** (no rich formatting)
- No support for **images within sections**
- No **galleries, videos, or interactive elements**
- No **custom components** per case study

---

## Special Features

### 1. Password Protection

**Feature:** Sensitive case studies can be password-protected.

**Implementation:**
- `PasswordGate` component wraps case study content
- Passwords stored in `config/passwords.ts`
- Configurable per case study
- Session keys for multi-study support
- Environment variable toggle: `VITE_DISABLE_PASSWORD_PROTECTION`

**Configuration:**

```typescript
// config/passwords.ts
export const passwords = {
  global: import.meta.env.VITE_GLOBAL_PASSWORD || 'design2025',
  caseStudy1: import.meta.env.VITE_CASE_STUDY_1_PASSWORD || 'design2025',
  caseStudy2: import.meta.env.VITE_CASE_STUDY_2_PASSWORD || 'design2025',
  caseStudy3: import.meta.env.VITE_CASE_STUDY_3_PASSWORD || 'design2025',
}
```

**Usage:**

```tsx
<PasswordGate
  password={getPassword(caseStudyId)}
  sessionKey={getSessionKey(caseStudyId)}
  title="This Case Study is Password Protected"
  subtitle={`Please enter the password to view "${title}".`}
>
  <CaseStudyContent />
</PasswordGate>
```

### 2. Countdown Timer

**Feature:** Dynamic countdown showing tenure at Booking.com.

**Implementation:**
- `CountdownTimer` component with state-based countdown
- Integrated into `hero.md` via placeholder: `{COUNTDOWN_TIMER}`
- `HeroContent` splits markdown and injects component
- Custom ReactMarkdown component overrides

**Code:**

```tsx
// HeroContent.tsx
const parts = content.split('{COUNTDOWN_TIMER}')
<ReactMarkdown>{parts[0]}</ReactMarkdown>
<CountdownTimer />
<ReactMarkdown>{parts[1]}</ReactMarkdown>
```

### 3. Image Optimization

**Component:** `OptimizedImage` (`src/components/ui/optimized-image.tsx:1`)

**Features:**
- Lazy loading (IntersectionObserver)
- Responsive srcSet support
- Aspect ratio preservation
- Loading skeleton
- Priority prop for above-the-fold images
- objectFit options (cover, contain, fill)

**Usage:**

```tsx
<OptimizedImage
  src="/image.jpg"
  alt="Description"
  priority={true}
  aspectRatio="video"  // 16:9
  objectFit="cover"
  className="w-full rounded-lg"
/>
```

### 4. Icon Optimization

**Strategies:** (`src/utils/iconImports.ts:1`)

1. **Regular imports** for frequently used icons
2. **Dynamic imports** for less-used icons
3. **React.lazy** wrapping for conditional rendering
4. **Icon registry** pattern for organized imports

**Example:**

```typescript
// Frequently used
import { Sun, Moon, ArrowLeft } from 'lucide-react'

// Less used
const Settings = React.lazy(() =>
  import('lucide-react').then(m => ({ default: m.Settings }))
)
```

### 5. Markdown Rendering

**Libraries:**
- `react-markdown` - Main parser
- `remark-gfm` - GitHub Flavored Markdown support

**Features:**
- Frontmatter extraction (YAML-style)
- Custom component overrides
- Code block support
- Link rendering

**Custom Components:**

```tsx
<ReactMarkdown
  components={{
    h1: ({ node, ...props }) => (
      <h1 className="custom-styles" {...props} />
    ),
  }}
>
  {content}
</ReactMarkdown>
```

---

## Development Workflow

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Server runs on http://localhost:8080

# Type checking
npm run type-check

# Linting
npm run lint
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server (port 8080) |
| `npm run build` | Production build |
| `npm run build:dev` | Development mode build |
| `npm run build:analyze` | Bundle analysis |
| `npm run preview` | Preview built output |
| `npm run lint` | ESLint check |
| `npm run type-check` | TypeScript verification |
| `npm run clean` | Clear dist & cache |

### Adding a New Case Study

1. **Create markdown file:**
   ```bash
   touch src/content/case-studies/new-project.md
   ```

2. **Add frontmatter and content:**
   ```markdown
   ---
   id: 4
   title: "New Project Title"
   subtitle: "Project Subtitle"
   roles: ["Role 1", "Role 2"]
   year: "2024"
   client: "Client Name"
   image: "/path/to/preview.jpg"
   heroImage: "/path/to/hero.jpg"
   ---

   # Introduction
   Content...

   # Problem
   Content...

   # Solution
   Content...

   # Conclusion
   Content...
   ```

3. **Update fallback data** (optional):
   Add entry to `fallbackCaseStudies` array in `contentLoader.ts`

4. **Add images:**
   Place images in `public/assets/` or external CDN

5. **Test:**
   Navigate to `/case-study/4`

### Adding New Components

1. **UI Component (shadcn):**
   ```bash
   npx shadcn@latest add [component-name]
   ```

2. **Custom Component:**
   ```bash
   touch src/components/MyComponent.tsx
   ```

3. **Import and use:**
   ```tsx
   import MyComponent from '@/components/MyComponent'
   ```

---

## Build & Deployment

### Build Configuration

**Vite Configuration** (`vite.config.ts:1`)

```typescript
export default defineConfig({
  plugins: [
    react(),
    markdownLoader(),  // Custom plugin
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 8080,
    host: true,
  },
})
```

### Build Process

```bash
# Production build
npm run build

# Output: dist/
# - index.html
# - assets/
#   - index-[hash].js
#   - index-[hash].css
#   - [images]
```

### Bundle Analysis

```bash
npm run build:analyze
```

**Analyzes:**
- Total bundle size
- Asset sizes
- Large files (>500KB)
- Performance recommendations

### Deployment Targets

**GitHub Pages (Current):**
```bash
# Build
npm run build

# Deploy
# Push dist/ to gh-pages branch
# Or configure GitHub Actions
```

**Vercel:**
```bash
# Connect repository
# Auto-detects Vite
# Build command: npm run build
# Output directory: dist
```

**Netlify:**
```bash
# Connect repository
# Build command: npm run build
# Publish directory: dist
```

### Environment Variables

```bash
# .env file (optional)
VITE_GLOBAL_PASSWORD=yourpassword
VITE_CASE_STUDY_1_PASSWORD=password1
VITE_CASE_STUDY_2_PASSWORD=password2
VITE_CASE_STUDY_3_PASSWORD=password3
VITE_DISABLE_PASSWORD_PROTECTION=false
```

**Access in code:**
```typescript
import.meta.env.VITE_GLOBAL_PASSWORD
```

---

## Performance Optimizations

### Implemented

1. **Code Splitting**
   - Pages lazy-loaded with `React.lazy()`
   - Route-based splitting
   - Suspense boundaries

2. **Image Optimization**
   - `OptimizedImage` component with lazy loading
   - Responsive srcSet
   - Aspect ratio preservation
   - Loading skeletons

3. **Icon Tree-shaking**
   - Selective imports from lucide-react
   - Multiple import strategies
   - Icon registry pattern

4. **Theme Caching**
   - localStorage for preferences
   - System theme detection
   - No flash of wrong theme

5. **CSS Optimization**
   - Tailwind PurgeCSS
   - PostCSS with Autoprefixer
   - CSS code splitting

6. **Markdown Pre-loading**
   - Loaded at build time via Vite plugin
   - No runtime fetch overhead

### Potential Improvements

- **Image WebP conversion** - Smaller file sizes
- **PWA support** - Offline functionality
- **Service workers** - Caching strategy
- **Compression plugins** - Gzip/Brotli
- **Font subsetting** - Only used characters
- **Critical CSS inlining** - Faster first paint

---

## Future Enhancements

### Custom Editorial Layouts (Planned)

See detailed plan in accompanying analysis document.

**Key Features:**
- Per-project custom layouts
- Rich content components (galleries, videos, quotes)
- Dynamic component rendering
- Layout templates
- Advanced markdown processing

### Other Enhancements

1. **Content Management**
   - Admin panel for case studies
   - Visual markdown editor
   - Image upload and management
   - Draft/publish workflow

2. **Analytics & SEO**
   - Enhanced meta tags per page
   - Structured data (JSON-LD)
   - Open Graph images
   - Analytics dashboard

3. **Interactivity**
   - Case study filtering/sorting
   - Search functionality
   - Related case studies
   - Reading progress indicator

4. **Performance**
   - Image CDN integration
   - Edge caching
   - Pre-rendering
   - Incremental Static Regeneration

5. **Accessibility**
   - ARIA labels audit
   - Keyboard navigation enhancements
   - Screen reader testing
   - Color contrast checker

---

## Key Files Reference

### Critical Files

| File | Purpose | Lines |
|------|---------|-------|
| `src/App.tsx` | Main app component, routing | 42 |
| `src/main.tsx` | React root entry | 5 |
| `src/pages/Index.tsx` | Home page | ~200 |
| `src/pages/CaseStudyDetail.tsx` | Case study detail page | 239 |
| `src/utils/contentLoader.ts` | Content loading logic | 120 |
| `src/hooks/use-theme.tsx` | Theme management | ~100 |
| `src/hooks/use-app-state.tsx` | App state management | ~300 |
| `vite.config.ts` | Build configuration | ~50 |
| `tailwind.config.ts` | Theme configuration | ~80 |

### Documentation Files

| File | Purpose | Bytes |
|------|---------|-------|
| `README.md` | Project overview | ~2KB |
| `CONTENT_MANAGEMENT.md` | Content guide | 2.5KB |
| `STATE_MANAGEMENT.md` | State architecture | 10.8KB |
| `VITE_OPTIMIZATION.md` | Build optimizations | 6KB |
| `IMAGE_OPTIMIZATION.md` | Image guide | 9.4KB |
| `ICON_OPTIMIZATION.md` | Icon guide | 5.3KB |

---

## Useful Commands

### Git

```bash
# Current branch
git branch --show-current
# claude/analyze-codebase-structure-011CUoY8h5wjTLiEUG6seQqK

# Status
git status

# Commit
git add .
git commit -m "Your message"

# Push (with retry logic)
git push -u origin claude/analyze-codebase-structure-011CUoY8h5wjTLiEUG6seQqK
```

### Development

```bash
# Start dev server
npm run dev

# Open in browser
http://localhost:8080

# Build for production
npm run build

# Preview production build
npm run preview
```

### Debugging

```bash
# Type check
npm run type-check

# Lint
npm run lint

# Bundle analysis
npm run build:analyze

# Clean cache
npm run clean
```

---

## Contact & Support

**Developer:** Sarthak Pranit
**Repository:** https://github.com/sarthakpranit/sarthakpranit.github.io
**Portfolio:** https://sarthakpranit.github.io

For questions or issues, refer to project documentation or repository issues.

---

**Last Updated:** 2025-11-04
**Version:** 1.0.0
**Documentation Status:** Complete ✓
