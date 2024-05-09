# fetch-sample

```text
npm test
```

Demonstrate testing using Node.js support for `fetch` (available since v17 with
experimental flag, available by default in v18, stable since v21).

Benefits:

- [Web standard](https://fetch.spec.whatwg.org/); JavaScript developers already
  use it for front-end code
  ([MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API))
  as a modern replacement for `XMLHttpRequest`
- Avoids commiting to a specific request library and distracting from the main
  purpose of the sample
- Avoids adding extra package dependencies (keeps `package.json` tidy)

Dependencies avoided:

- [supertest](https://github.com/ladjs/supertest)
