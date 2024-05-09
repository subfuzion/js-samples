import assert from "node:assert/strict";
import { suite, test, before, beforeEach, after, afterEach, } from "node:test";
import { URL } from "node:url";
import { start, stop } from "./main.js";

suite("test lifecycle demo", () => {
  /** @type {Server} */
  let server;
  let port;
  let url;

  before(async () => {
    server = await start(0);
    port = server.address().port;
    url = `http://localhost:${server.address().port}`;
    console.log(`listening on ${url}`);
  });

  after(async () => {
    await server.close();
    console.log(`server stopped`);
  });

  test("test 1", async () => {
    let endpoint = new URL("/api/ping", url);
    const res = await fetch(endpoint);
    assert.ok(res.ok);
    const data = await res.json();
    assert.equal(data.message, "OK");
  });

});
