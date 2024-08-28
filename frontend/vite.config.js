export default {
  // Other Vite configuration options...
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
};
