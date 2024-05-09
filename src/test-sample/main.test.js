import assert from "node:assert/strict";
import {
  describe, it,
  before, beforeEach,
  after, afterEach,
} from "node:test";

import {
  ping,
  echo,
  foo,
  throwWhenFalsy,
} from "./main.js";

describe("ping tests", () => {

  it("ping", () => {
    const expected = "pong";
    const actual = ping();
    assert.equal(actual, expected);
  });

});

describe("echo tests", () => {

  it("should return hello", () => {
    const expected = "hello";
    const actual = echo("hello");
    assert.equal(actual, expected);
  });

  it("should be undefined", () => {
    const expected = undefined;
    const actual = echo();
    assert.equal(actual, expected);
  });

});

describe("async foo tests", () => {

  it("should return bar", async () => {
    const expected = "bar";
    const actual = await foo();
    assert.equal(actual, expected);
  });
})

describe("throwWhenFalsy tests", () => {

  it("should not throw when truthy", () => {
    assert.doesNotThrow(() => {
      throwWhenFalsy(true);
    });
  });

  it("should throw when falsy", () => {
    assert.throws(() => {
      throwWhenFalsy(false);
    });
  });

});

describe("test lifecycle demo", () => {
  let testingSuite = false;
  let newTest = false;
  let testID = 0;

  before(() => {
    // starting test suite
    testingSuite = true;
    newTest = false;
    testID = 0;
  });

  after(() => {
    // done, reset everything
    testingSuite = false;
    newTest = false;
    testID = 0;
  });

  beforeEach(() => {
    newTest = true;
    testID++;
  });

  afterEach(() => {
    newTest = false;
  });

  it("test 1", () => {
    assert.ok(testingSuite);
    assert.ok(newTest);
    assert.equal(testID, 1);
  });

  it("test 2", () => {
    assert.ok(testingSuite);
    assert.ok(newTest);
    assert.equal(testID, 2);
  });

});
