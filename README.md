# FlowForge

A monorepo project using Turborepo (v2.5.2) and Bun (v1.2.10) as the package manager. This project consists of a Next.js frontend application and an Express backend API.

## Project Structure

```
flowforge/
├── apps/
│   ├── frontend/    # Next.js with TypeScript and Tailwind CSS
│   └── backend/     # Express with TypeScript
├── packages/        # Shared packages (if any)
├── package.json
└── turbo.json
```

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) v1.2.10 or higher
- [Node.js](https://nodejs.org/) v18 or higher

### Installation

```bash
# Install dependencies for all workspaces
bun install
```

### Development

```bash
# Run both frontend and backend in development mode
bun dev

# Run only the frontend
bun dev --filter=@flowforge/frontend

# Run only the backend
bun dev --filter=@flowforge/backend
```

### Building

```bash
# Build all workspaces
bun build

# Build specific workspaces
bun build --filter=@flowforge/frontend
bun build --filter=@flowforge/backend
```

## Scripts

Each workspace includes the following scripts:

- `dev`: Start the development server
- `build`: Build the application
- `start`: Start the production server
- `lint`: Run linting
- `test`: Run tests (when implemented)
- `clean`: Clean build artifacts
- `check-types`: Run TypeScript type checking
