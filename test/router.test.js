// router.test.js
// Testaa REST-endpointit supertestillä.

const request = require("supertest");
const { expect } = require("chai");

const { createApp } = require("../src/main");
const counter = require("../src/counter");

describe("Tally counter endpoints", function () {
  let app;

  beforeEach(function () {
    // Nollataan laskuri ennen jokaista testiä, jotta testit ovat toistettavia.
    counter.reset();
    app = createApp();
  });

  it("GET /counter-read should return 0 after reset", async function () {
    const res = await request(app).get("/counter-read");
    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal({ count: 0 });
  });

  it("GET /counter-increase should increase counter by 1", async function () {
    const res1 = await request(app).get("/counter-increase");
    expect(res1.status).to.equal(200);
    expect(res1.body).to.deep.equal({ count: 1 });

    const res2 = await request(app).get("/counter-increase");
    expect(res2.status).to.equal(200);
    expect(res2.body).to.deep.equal({ count: 2 });
  });

  it("GET /counter-reset should reset counter to 0", async function () {
    await request(app).get("/counter-increase");
    await request(app).get("/counter-increase");

    const res = await request(app).get("/counter-reset");
    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal({ count: 0 });

    const resRead = await request(app).get("/counter-read");
    expect(resRead.status).to.equal(200);
    expect(resRead.body).to.deep.equal({ count: 0 });
  });
});
