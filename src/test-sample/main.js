/**
 * Always returns "pong".
 * @returns {string} "pong".
 */
export function ping() {
  return "pong";
}

/**
 * Echoes back whatever message you send it.
 * @param {string?} message
 * @returns {string} The message you sent.
 */
export function echo(message) {
  return message;
}

/**
 * Asynchronously returns "bar".
 * @returns {Promise<string>} "bar".
 */
export async function foo() {
  return new Promise(resolve => setImmediate(() => resolve("bar")));
}

/**
 * Throws when falsy.
 * @param {any} value
 * @throws {Error} if value is falsy.
 */
export function throwWhenFalsy(value) {
  if (!value) throw new Error();
}
