# test-sample

```text
npm test
```

Demonstrate tests using the built-in test runner for Node.js (available since
v18.20).

Benefits:

- Avoids commiting to a specific test framework or library and distracting from
  the main purpose of the sample
- Avoids adding extra package dependencies (keeps `package.json` tidy)

Dependencies avoided:

- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)


> [!NOTE]
>
> In addition to the current BDD style using `describe` and `it`, v22 adds
> support for TDD style using `suite` and `test`.
