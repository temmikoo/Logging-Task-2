// routes.js
// Määrittää sovelluksen HTTP-reitit (endpointit).

const express = require("express");
const logger = require("./logger");
const counter = require("./counter");

const router = express.Router();

// GET /counter-read
router.get("/counter-read", (req, res) => {
  logger.info(`[ENDPOINT] GET '/counter-read'`);
  const value = counter.read();
  res.json({ count: value });
});

// GET /counter-increase
router.get("/counter-increase", (req, res) => {
  logger.info(`[ENDPOINT] GET '/counter-increase'`);
  const value = counter.increase();
  res.json({ count: value });
});

// GET /counter-reset
router.get("/counter-reset", (req, res) => {
  logger.info(`[ENDPOINT] GET '/counter-reset'`);
  const value = counter.reset();
  res.json({ count: value });
});

module.exports = router;
