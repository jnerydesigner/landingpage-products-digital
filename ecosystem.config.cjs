module.exports = {
  apps: [
    {
      name: "landing-page-links",
      script: "yarn",
      args: "preview --port 8090",
      instances: 1,
      autorestart: true,
      wait_ready: true,
      watch: true,
      max_memory_restart: "1G",
      listen_timeout: 5000,
      env: {
        NODE_ENV: "production",
        PORT: 8090,
      },
    },
  ],
};
