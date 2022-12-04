require('dotenv').config({ path: __dirname + '/.env' });

module.exports = {
  env: {
    API_URL: process.env.API_URL,
    PRIVATE_KEY: process.env.PRIVATE_KEY,
    PROJECT_ID: process.env.PROJECT_ID,
    PROJECT_SECRET: process.env.PROJECT_SECRET,
  },
};
