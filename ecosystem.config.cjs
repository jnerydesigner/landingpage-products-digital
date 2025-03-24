module.exports = {
  apps: [
    {
      name: "landing-page-link-tree",
      script: "./server.js",
      instances: 1,
      autorestart: true,
      wait_ready: true,
      watch: false,
      max_memory_restart: "1G",
      listen_timeout: 5000,
      env: {
        NODE_ENV: "production",
        PORT: 8090,
      },
    },
  ],
};
