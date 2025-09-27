# RastaLink.In - AI-Powered Trucking Network Platform

[![Deployment Status](https://img.shields.io/badge/deployment-ready-green.svg)](https://replit.com)
[![Node.js](https://img.shields.io/badge/node.js-18+-blue.svg)](https://nodejs.org)
[![React](https://img.shields.io/badge/react-18+-blue.svg)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/typescript-5+-blue.svg)](https://typescriptlang.org)

**India's Premier AI-Powered Trucking Network Platform**  
Connecting small-scale lorry businesses across India from Kashmir to Kanyakumari.

## 🚛 Features

- **Real-time Truck Tracking** - Live GPS monitoring and fleet status
- **Load Matching** - AI-powered cargo-truck matching system  
- **Fleet Management** - Comprehensive fleet monitoring and analytics
- **Live Rate Ticker** - Dynamic freight rate updates
- **Technical Dashboard** - PALANTIR-inspired professional interface
- **Health Monitoring** - System status and performance tracking

## 🎨 Design

Professional PALANTIR DEFCON-inspired interface featuring:
- Technical blueprint aesthetic with cyan/green accents
- Dark navy backgrounds with subtle grid animations
- Monospace fonts for technical data display
- Status indicators with military-grade color coding
- Responsive design for web and mobile

## 🏗️ Architecture

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** with custom technical theme
- **Radix UI** components with shadcn/ui
- **TanStack Query** for server state management
- **Wouter** for client-side routing
- **Framer Motion** for animations

### Backend
- **Node.js** with Express.js
- **TypeScript** for type safety
- **Drizzle ORM** with PostgreSQL
- **Health check endpoints** for monitoring
- **Error handling** and logging

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd rastalink
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5000
   ```

### Production Deployment

#### On Replit
1. Connect your GitHub repository to Replit
2. Deploy using Autoscale deployment
3. Connect custom domain (rastalink.in)

#### Self-hosted
1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

## 📁 Project Structure

```
rastalink/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utilities and configurations
│   │   └── pages/         # Page components
│   └── index.html
├── server/                # Backend Express application
│   ├── index.ts          # Main server entry point
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Data storage interface
│   └── vite.ts           # Vite development setup
├── shared/               # Shared types and schemas
│   └── schema.ts
└── package.json
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Type checking
- `npm run db:push` - Push database schema changes

## 🌐 API Endpoints

### Health & Status
- `GET /api/health` - Health check for monitoring
- `GET /api/status` - API status and version info

### Core Features
- Fleet tracking and management
- Load matching algorithms
- Real-time rate updates
- Driver portal functionality

## 🔐 Environment Variables

```bash
# Database
DATABASE_URL=your_postgresql_url

# Server
PORT=5000
NODE_ENV=production

# Session
SESSION_SECRET=your_session_secret
```

## 🚦 Development Guidelines

### Code Style
- TypeScript for all new code
- Use existing component patterns
- Follow technical naming conventions (UPPER_CASE for technical elements)
- Add data-testid attributes for testing

### Technical Theme
- Use `.technical-text` for monospace elements
- Use `.data-display` for technical data
- Use status colors: `.status-active`, `.status-warning`, `.status-critical`
- Apply `.technical-border` and `.technical-glow` for styling

## 📊 Monitoring

The application includes built-in monitoring:
- Health check endpoint at `/api/health`
- Process error handling and logging
- Server startup validation
- Deployment verification endpoints

## 🌍 Production URL

**Live Application**: https://rastalink.in

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For support and queries:
- Create an issue in this repository
- Contact: support@rastalink.in

---

**Built with ❤️ for India's trucking community**  
*Connecting Kashmir to Kanyakumari* 🚛