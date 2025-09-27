# RastaLink Frontend

React frontend for the RastaLink trucking platform with industrial blueprint design.

## Tech Stack
- **React 18**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Shadcn/ui Components**
- **TanStack React Query**
- **Wouter** (Routing)

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Visit: http://localhost:5173

### Build for Production
```bash
npm run build
npm run preview
```

## Environment Configuration

Create `.env.local`:
```env
VITE_API_URL=http://localhost:8080
```

## API Integration

The frontend connects to the Java Spring Boot backend via:
- **Development**: `http://localhost:8080`
- **Production**: Set `VITE_API_URL` environment variable

## Features

### Core Components
- **Technical Dashboard** - Industrial blueprint-style analytics
- **Real-time Tracking** - Live truck positioning and status
- **Load Matching** - AI-powered cargo-truck matching
- **Driver Portal** - Mobile-optimized driver interface
- **Rate Ticker** - Live freight rate updates

### Design System
- **Theme**: Industrial blueprint with dark navy backgrounds
- **Colors**: Blueprint cyan accents (`#4ECDC4`)
- **Typography**: JetBrains Mono for technical elements
- **Layout**: Grid-based technical design

## Project Structure

```
client/
├── src/
│   ├── components/     # React components
│   │   ├── ui/        # Shadcn components
│   │   └── *.tsx      # Feature components
│   ├── pages/         # Route pages
│   ├── hooks/         # Custom hooks
│   ├── lib/           # Utilities
│   └── App.tsx        # Main app
├── index.html
└── vite.config.ts
```

## Deployment

### Vercel
```bash
npm run build
# Deploy dist/ folder
```

### Netlify
```bash
npm run build
# Deploy dist/ folder
```

### Docker
```bash
docker build -t rastalink-frontend .
docker run -p 3000:3000 rastalink-frontend
```