import express from 'express';
import {api} from "./api.js";

const port = parseInt(process.env.PORT || "8080", 10);
const app = express();

app.use("/api", api);


/**
 * Start server listening on the specified port.
 * @param {number} port
 * @returns {Promise<Server>}
 */
export async function start(port) {
  return new Promise(resolve => {
    const server = app.listen(port, () => {
      const p = server.address().port;
      console.log(`listening on http://localhost:${p}/\n`);
    });
    resolve(server);
  });
}

export async function stop(server) {
  return new Promise(resolve => {
    server.close(resolve);
  });
}
