module.exports = {
  apps: [{
    name: 'integrationsnow-web',
    script: './server.js',
    instances: 1,
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 4002
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 4002
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true,
    restart_delay: 4000,
    max_memory_restart: '1G',
    node_args: '--max-old-space-size=1024'
  }]
}; 