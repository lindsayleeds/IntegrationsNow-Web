# PM2 Deployment Guide

This guide explains how to deploy the IntegrationsNow web application using PM2 on your Ubuntu server.

## Prerequisites

1. **Install Node.js and npm** (if not already installed):
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **Install PM2 globally**:
   ```bash
   sudo npm install -g pm2
   ```

## Deployment Steps

### Quick Deployment
Run the automated deployment script:
```bash
chmod +x deploy.sh
./deploy.sh
```

### Manual Deployment
If you prefer to run commands manually:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Build the application**:
   ```bash
   npm run build
   ```

3. **Start with PM2**:
   ```bash
   pm2 start ecosystem.config.js --env production
   ```

4. **Save PM2 configuration**:
   ```bash
   pm2 save
   pm2 startup
   ```

## PM2 Management Commands

- **Check status**: `pm2 status`
- **View logs**: `pm2 logs integrationsnow-web`
- **Restart app**: `pm2 restart integrationsnow-web`
- **Stop app**: `pm2 stop integrationsnow-web`
- **Delete app**: `pm2 delete integrationsnow-web`
- **Monitor**: `pm2 monit`

## Configuration

The application is configured to run on **port 4002** by default. You can modify this in:
- `ecosystem.config.js` - PM2 configuration
- `server.js` - Express server configuration
- `vite.config.ts` - Development server configuration

## Logs

Application logs are stored in the `logs/` directory:
- `logs/out.log` - Standard output
- `logs/err.log` - Error logs  
- `logs/combined.log` - Combined logs

## Auto-start on Boot

To ensure PM2 starts your application automatically after server reboot:
```bash
pm2 startup
pm2 save
```

## Nginx Configuration (Optional)

If you want to use Nginx as a reverse proxy:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:4002;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
``` 