const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
       // Ensure this matches your server's URL
    },
    baseUrl: 'https://bookstoreapi-q86w.onrender.com',
  },
});
