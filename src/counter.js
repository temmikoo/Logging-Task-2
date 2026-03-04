// counter.js
// In-memory laskuri (count) REST-endpointteja varten.

const logger = require("./logger");

// Laskurin arvo pidetään muistissa tässä moduulissa.
let count = 0;

// Palauttaa nykyisen laskurin arvon.
function read() {
  logger.info(`[COUNTER] read ${count}`);
  return count;
}

// Kasvattaa laskuria yhdellä ja palauttaa uuden arvon.
function increase() {
  count += 1;
  // Lokitetaan arvo kasvatuksen jälkeen.
  logger.info(`[COUNTER] increase ${count}`);
  return count;
}

// Nollaa laskurin ja palauttaa 0.
function reset() {
  count = 0;
  logger.info(`[COUNTER] zeroed ${count}`);
  return count;
}

// Viedään funktiot muiden tiedostojen käyttöön.
module.exports = {
  read,
  increase,
  reset,
};
