// vite.config.js
import dotenv from "dotenv";

module.exports = {
  root: "src",
  build: {
    outDir: "../dist",
  },
};

dotenv.config(); // load env vars from .env
