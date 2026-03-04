# Task 2 - Tally counter REST API

## Description

This project implements a simple tally counter REST API with Express.

The counter state is stored in-memory:

- the value is kept in RAM while the server is running
- restarting the server resets the counter back to 0

## Technologies

- Node.js (used version: 22.14.0)
- Express 4.18.2
- Winston 3.11.0

## Project structure

- `src/main.js` = starts the server and mounts routes
- `src/routes.js` = defines HTTP endpoints
- `src/counter.js` = counter logic (read / increase / reset)
- `src/logger.js` = Winston logger configuration
- `rest.http` = example HTTP requests (optional)
- `.gitignore` = ignores generated/reproducible files

## Endpoints

- `GET /counter-read`  
  Returns current counter value.
- `GET /counter-increase`  
  Increases counter by 1 and returns the new value.
- `GET /counter-reset`  
  Resets counter to 0 and returns the value.

Response format:
`{ "count": <number> }`

## Logging

Log formats follow the assignment requirements:

- Main:
  - `[MAIN] Starting`
  - `[MAIN] Stopping`
- Endpoint:
  - `[ENDPOINT] GET '/counter-read'`
  - `[ENDPOINT] GET '/counter-increase'`
  - `[ENDPOINT] GET '/counter-reset'`
- Counter:
  - `[COUNTER] read <value>`
  - `[COUNTER] increase <value>`
  - `[COUNTER] zeroed <value>`

Log destinations:

- console
- `logs/combined.log`
- `logs/error.log` (error level only)

## Installation

Run:
`npm install`

## Running the server

Run:
`node src/main.js`

Server runs on:
`http://localhost:3000`

## Manual testing

With curl (examples):

- `curl http://localhost:3000/counter-read`
- `curl http://localhost:3000/counter-increase`
- `curl http://localhost:3000/counter-reset`

## Running tests

Run:
`npm test`

## Test coverage

Implemented tests verify:

- counter logic (`read`, `increase`, `reset`)
- REST endpoints:
  - `GET /counter-read`
  - `GET /counter-increase`
  - `GET /counter-reset`

## Notes

- Task instructions list Node.js 18 as the tested version.
- This project was implemented and tested with Node.js 22.14.0.
