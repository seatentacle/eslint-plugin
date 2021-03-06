# SeaTentacle ESLint Plugin

[![GitHub license](https://img.shields.io/github/license/seatentacle/eslint-plugin?style=flat-square)](https://github.com/seatentacle/eslint-plugin/blob/master/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/@seatentacle/eslint-plugin?style=flat-square)](https://www.npmjs.com/package/@seatentacle/eslint-plugin)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

## Installation

The plugin uses [`@typescript-eslint/parser`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser) even for javascript projects.

```sh
npm i --save-dev @seatentacle/eslint-plugin
```

**Note: make sure that your project has [`typescript`](https://www.npmjs.com/package/typescript) and [`eslint`](https://www.npmjs.com/package/eslint) installed.**

## Usage

Add `@seatentacle` to the _plugins_ section of a `.eslintrc` file. In the _extends_ section add the desired config.

```json
{
  "plugin": [
    "@seatentacle"
  ],
  "extends": [
    "plugin:@eseatentacle/javascript"
  ]
}
```

**Note: make sure the appropriate extensions are passed in the `eslint` command. By default, `eslint` searches only for `.js` files.**

## Configs

The plugin contains two configs:

* `plugin:@seatentacle/javascript` describes general rules
* `plugin:@seatentacle/typescript` contains javascript config and rules specific for TS

## License

The code is licensed under [MIT](https://github.com/seatentacle/eslint-plugin/blob/master/LICENSE).
