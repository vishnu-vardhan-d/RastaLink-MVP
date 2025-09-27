# RastaLink Deployment Guide

## 🚀 Deployment Options

### 1. Replit Deployment (Recommended)

**Easy one-click deployment on Replit:**

1. **Connect GitHub to Replit**
   - Go to https://replit.com/import
   - Select "GitHub" as import source
   - Connect your GitHub account
   - Choose your RastaLink repository
   - Click "Import"

2. **Deploy on Replit**
   - In your Repl, go to "Deployments" tab
   - Click "Deploy" 
   - Choose "Autoscale" for production
   - Wait for deployment to complete

3. **Connect Custom Domain**
   - In Deployments → Settings → "Link a domain"
   - Enter: `rastalink.in`
   - Copy the DNS records provided
   - Add to Hostinger DNS settings:
     - A Record: `@ → 34.132.134.162`
     - TXT Record: `@ → replit-user=YOUR_USERNAME`

### 2. Local Development Setup

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/rastalink.git
cd rastalink

# Install dependencies
npm install

# Set up environment
cp .env.example .env
# Edit .env with your configuration

# Start development server
npm run dev

# Open http://localhost:5000
```

### 3. Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up -d

# Or build manually
docker build -t rastalink .
docker run -p 5000:5000 rastalink
```

### 4. Traditional VPS Deployment

```bash
# On your server (Ubuntu/Debian)
# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone and setup
git clone https://github.com/YOUR_USERNAME/rastalink.git
cd rastalink
npm install
npm run build

# Set up environment
cp .env.example .env
# Edit .env with your production settings

# Start with PM2 (recommended)
sudo npm install -g pm2
pm2 start npm --name "rastalink" -- start
pm2 save
pm2 startup

# Or run directly
npm start
```

## 🔧 Environment Configuration

### Required Environment Variables

```bash
# Production environment
NODE_ENV=production
PORT=5000

# Database (choose one)
DATABASE_URL=postgresql://user:pass@localhost/rastalink

# Session security
SESSION_SECRET=your-super-secret-key-min-32-chars

# Optional API keys
WEATHER_API_KEY=your_weather_api_key
MAPS_API_KEY=your_maps_api_key
```

## 🌐 DNS Configuration for Custom Domain

### Hostinger DNS Settings

Add these records in Hostinger DNS management:

```
Type: A
Name: @
Content: 34.132.134.162
TTL: 14400

Type: TXT  
Name: @
Content: replit-user=YOUR_REPLIT_USERNAME
TTL: 3600
```

## 📊 Health Monitoring

The application includes health check endpoints:

- `GET /api/health` - Health status
- `GET /api/status` - API information

### Example health check response:
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 3600,
  "environment": "production"
}
```

## 🔒 Security Checklist

- [ ] Change default SESSION_SECRET
- [ ] Use HTTPS in production (auto-handled by Replit)
- [ ] Set strong database passwords
- [ ] Configure firewall rules (if self-hosting)
- [ ] Enable rate limiting for APIs
- [ ] Regular security updates

## 🐛 Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Find process using port 5000
lsof -ti:5000
kill -9 <process_id>
```

**Database connection failed:**
- Check DATABASE_URL format
- Verify database is running
- Check network connectivity

**Build fails:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Domain not working:**
- Check DNS propagation: whatsmydns.net
- Verify A record points to: 34.132.134.162
- Wait up to 48 hours for DNS propagation

## 📈 Performance Optimization

### Production Optimizations Applied

- [x] Vite build optimization
- [x] Static asset serving
- [x] Error handling and logging
- [x] Health check endpoints
- [x] Process error handling
- [x] Technical grid animations optimized

### Monitoring

Monitor your application performance:
- Server uptime via `/api/health`
- Response times and errors
- Database connection status
- Memory and CPU usage

## 📞 Support

For deployment support:
- Check GitHub Issues
- Review error logs
- Contact: support@rastalink.in