// Require the framework and instantiate it
// const fastify = require("fastify")({ logger: true });
// import Fastify from "fastify";
import Fastify from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";

import { returnString } from "../globalFunctions/returnString.mjs";

const server = Fastify({});

// Declare a route
server.get("/", async (request, reply) => {
  const str = "hello world";
  return await returnString(str);
});

// Run the server!
const start = async () => {
  try {
    await server.listen({ port: 3000 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
