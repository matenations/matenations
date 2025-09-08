# Overview

MATE DOT is a music society web application focused on discovering and promoting unique music across Hip-Hop/Rap/R&B, Pop/Dance Pop, and Afrobeats/Afro Fusion genres. The platform serves as both a music discovery service and an artist development platform, connecting music lovers with emerging artists while providing promotional services including music videos, curated playlists, and custom lyrics.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Animations**: Framer Motion for smooth animations and transitions
- **UI Components**: Comprehensive component library using Radix UI primitives

The frontend follows a component-based architecture with clearly separated concerns:
- Page components handle route-level logic
- UI components provide reusable interface elements
- Custom hooks manage shared logic and state
- Utility functions handle common operations

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for type safety
- **API Design**: RESTful API with structured error handling
- **Development**: Hot module replacement with Vite integration
- **Storage**: In-memory storage implementation with interface for future database integration

The backend uses a modular approach with:
- Route handlers for API endpoints
- Storage abstraction layer for data persistence
- Middleware for request logging and error handling
- Shared schema validation between frontend and backend

## Data Storage Solutions
- **Current**: In-memory storage using Map data structures
- **Planned**: PostgreSQL with Drizzle ORM for production
- **Schema**: Shared TypeScript schemas using Drizzle and Zod for validation
- **Tables**: Users and contact submissions with UUID primary keys

The storage layer uses an interface-based design allowing easy migration from in-memory to database storage without changing application logic.

## Authentication and Authorization
- **Current**: Basic user storage structure in place
- **Implementation**: Username/password based authentication ready for implementation
- **Session Management**: Cookie-based sessions with connect-pg-simple for PostgreSQL session store

## External Dependencies
- **Database**: Neon Database (PostgreSQL) for production data storage
- **UI Framework**: shadcn/ui built on Radix UI primitives
- **Validation**: Zod for runtime type checking and schema validation
- **ORM**: Drizzle with PostgreSQL dialect for type-safe database operations
- **Development Tools**: Replit-specific plugins for development environment integration
- **Styling**: Google Fonts integration for typography (Inter, DM Sans, Fira Code, Geist Mono, Architects Daughter)

The application integrates with external services for enhanced functionality:
- Social media links for artist promotion (Instagram integration shown)
- Partnership integration with Unison Music App for collaboration features
- Font delivery through Google Fonts CDN for consistent typography