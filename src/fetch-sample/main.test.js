import assert from "node:assert/strict";
import { describe, it, before, after } from "node:test";
import { URL } from "node:url";
import { start, stop } from "./main.js";

describe("test lifecycle demo", () => {
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

  it("should respond with OK after ping", async () => {
    const endpoint = new URL("/api/ping", url);
    const res = await fetch(endpoint);
    assert.ok(res.ok);
    const data = await res.json();
    assert.equal(data.message, "OK");
  });

  it("should respond with name after post /user", async () => {
    const expected = "Hello World" ;

    const user = {
      name: "World",
      email: "world@example.com",
    };

    const endpoint = new URL("/api/user", url);
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    assert.ok(res.ok);
    assert.equal(res.status, 200);
    assert.ok(res.headers.get("Content-Type").includes("application/json"));

    const {message} = await res.json();
    assert.equal(message, "Hello World");
  })

});
