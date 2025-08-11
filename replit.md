# Overview

This is a full-stack web application for the Computer Science Engineers Society (CSES) at NIT Warangal. The application serves as a digital presence for the student society, featuring a modern, interactive website with a live terminal feed, event management, team showcase, and contact functionality. Built with a React frontend and Express backend, it demonstrates modern web development practices with a focus on user experience and real-time updates.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design system
- **State Management**: TanStack Query for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Extensive use of Radix UI primitives through shadcn/ui for accessibility
- **Particles Animation**: Custom particles.js integration for interactive background effects

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for type safety across the stack
- **API Design**: RESTful endpoints with proper error handling and logging
- **Development**: Vite integration for hot module replacement and development server
- **Storage**: Abstracted storage interface supporting both in-memory and database implementations

## Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Connection**: Neon serverless PostgreSQL for cloud hosting
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Session Storage**: PostgreSQL-based session storage with connect-pg-simple

## Real-time Features
- **Live Terminal**: Real-time terminal log updates with 3-second polling interval
- **Activity Feed**: Dynamic display of society activities and system logs
- **Auto-refresh**: Query invalidation and refetching for live data updates

## Development Workflow
- **Build System**: Vite for fast development and optimized production builds
- **Code Quality**: TypeScript strict mode with comprehensive type checking
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)
- **Development Server**: Integrated Vite dev server with Express backend

# External Dependencies

## Database & ORM
- **PostgreSQL**: Primary database with Neon serverless hosting
- **Drizzle ORM**: Type-safe database queries and schema management
- **Drizzle Kit**: Database migrations and schema synchronization

## UI & Styling
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **shadcn/ui**: Component library built on Radix UI primitives
- **Radix UI**: Unstyled, accessible UI components
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Extended icon set including brand icons

## State Management & Data Fetching
- **TanStack Query**: Server state management with caching and synchronization
- **React Hook Form**: Form state management with validation
- **Zod**: Runtime type validation for form schemas

## Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety across frontend and backend
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Autoprefixer

## Animation & Interactions
- **Particles.js**: Interactive particle background animations
- **Class Variance Authority**: Type-safe variant management for components
- **Embla Carousel**: Touch-friendly carousel component

## Third-party Services
- **Google Fonts**: Inter font family for typography
- **Unsplash**: Placeholder images for events and team members
- **Replit Integration**: Development environment optimizations and banner script