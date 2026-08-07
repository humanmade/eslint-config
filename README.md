# @humanmade/eslint-config

[![npm](https://img.shields.io/npm/v/@humanmade/eslint-config)](https://www.npmjs.com/package/@humanmade/eslint-config)
[![Tests](https://github.com/humanmade/eslint-config/actions/workflows/test.yml/badge.svg)](https://github.com/humanmade/eslint-config/actions/workflows/test.yml)

Human Made coding standards for JavaScript, layered over [`@wordpress/eslint-plugin`](https://www.npmjs.com/package/@wordpress/eslint-plugin).

## Requirements

- ESLint 9 or 10
- Node 22+

## Installation

```bash
npm install --save-dev @humanmade/eslint-config
```

Every plugin the config uses ships with it. ESLint is the only peer dependency.

## Usage

Create an `eslint.config.js` in your project root:

```js
import humanmadeConfig from '@humanmade/eslint-config';

export default humanmadeConfig;
```

To override:

```js
import humanmadeConfig from '@humanmade/eslint-config';

export default [
	...humanmadeConfig,
	// Other custom config overrides
	{
		rules: {
			'no-console': 'off', // Example override
		},
	},
];
```

Use this instead of `@wordpress/scripts`' own ESLint config, not alongside it — they configure the same plugins.

`.ts` and `.tsx` files are not linted. Add [`typescript-eslint`](https://typescript-eslint.io/) to your own config if you need them.

## What we change

We extend WordPress' `recommended-with-formatting`, which already matches our house style for indentation, quoting and most spacing. On top of it we:

- Break multi-property object literals one property per line.
- Require a space before anonymous `function` parens.
- Omit trailing commas from function arguments.
- Lower `no-console` to a warning.
- Reduce `import/order` to two groups: packages by name, then local files by path. Side-effect imports are order-dependent, so they're left alone.
- Exempt `@wordpress/*` from `import/no-unresolved`, since wp-scripts externalizes those to the WordPress runtime.
- Add `jsx-boolean-value`, `jsx-sort-props`, `jsx-wrap-multilines` and `jsx-curly-newline`.

We use `recommended-with-formatting` rather than `recommended` because `recommended` enables Prettier whenever Prettier is installed, which would disable our spacing rules depending on what else is in the tree.

## Integration with Altis build script

The Altis build container may ship an older Node than we require. [Install a supported version with nvm](https://docs.altis-dxp.com/cloud/build-scripts/#included-build-tools) in your build script:

```bash
nvm install 24
nvm use 24
```

## Contributing

We welcome contributions to these standards. See [CONTRIBUTING.md](CONTRIBUTING.md) for how rule changes are decided, tested and released.
