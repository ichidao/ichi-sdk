# Introduction

The [@ichidao/ichi-sdk](https://www.npmjs.com/package/@ichidao/ichi-sdk) is a Typescript library which used across various ICHI DAO applications.

## Local development

While working with this repository locally, if you want to test it's usage in another app run `npm link` in the root of this repo, so `cd /path/to/ichi-sdk && npm link`.  Then navigate to the project you want to use the `ichi-sdk` in, let's say it's `myproject`, so `cd /path/to/myproject`, then run `npm link @ichidao/ichi-sdk`.

In the project using `@ichidao/ichi-sdk` once you are done developing with the linked `ichi-sdk` and you've published the latest version of the `ichi-sdk` then you can `rm -rf node_modules/@ichidao/ichi-sdk && npm i` to install the latest published version.

### Building

`npm build`

### Testing

`npm test`

### Linting

`npm lint`

## Publishing to NPM

```bash
npm install -g np
npm login
np
```
