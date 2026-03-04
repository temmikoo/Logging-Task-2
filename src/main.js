// main.js
// Käynnistää Express-palvelimen ja liittää reitit.

const express = require("express");
const logger = require("./logger");
const router = require("./router");

const PORT = 3000;

// Rakentaa Express-appin (käytetään myös testeissä).
function createApp() {
  const app = express();
  app.use("/", router);
  return app;
}

module.exports = { createApp };

// Käynnistetään serveri vain, jos tiedosto ajetaan suoraan (node src/main.js).
if (require.main === module) {
  const app = createApp();

  logger.info("[MAIN] Starting");

  const server = app.listen(PORT, () => {
    logger.info(`[MAIN] Listening on port ${PORT}`);
  });

  process.on("SIGINT", () => {
    logger.info("[MAIN] Stopping");
    server.close(() => process.exit(0));
  });
}
