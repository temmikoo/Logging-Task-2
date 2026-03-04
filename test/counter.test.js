// counter.test.js
// Testaa laskurin perustoiminnot: read, increase, reset.

const { expect } = require("chai");
const counter = require("../src/counter");

describe("Counter", function () {
  // Reset ennen jokaista testiä, jotta testit eivät vaikuta toisiinsa.
  beforeEach(function () {
    counter.reset();
  });

  // Testaa, että reset jälkeen laskuri palauttaa arvon 0.
  it("read should return 0 after reset", function () {
    const value = counter.read();
    expect(value).to.equal(0);
  });

  // Testaa, että increase kasvattaa arvoa 1:llä.
  it("increase should increment count by 1", function () {
    const value1 = counter.increase();
    expect(value1).to.equal(1);

    const value2 = counter.increase();
    expect(value2).to.equal(2);
  });

  // Testaa, että reset asettaa laskurin arvoksi 0.
  it("reset should set count back to 0", function () {
    counter.increase();
    counter.increase();
    const value = counter.reset();
    expect(value).to.equal(0);
    expect(counter.read()).to.equal(0);
  });
});
