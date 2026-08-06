import wordpress from '@wordpress/eslint-plugin';

/**
 * Human Made JavaScript coding standards.
 *
 * WordPress' own config already encodes most of our house style, so we extend it
 * and keep only the deltas below. We use `recommended-with-formatting` rather
 * than `recommended`: the latter enables Prettier whenever Prettier happens to
 * be installed, which disables the spacing rules we care about and makes the
 * config's behaviour depend on the consumer's dependency tree.
 */
export default [
	{
		ignores: [ '**/build/**', '**/dist/**', '**/vendor/**', '**/*.min.js' ],
	},
	...wordpress.configs[ 'recommended-with-formatting' ],
	// Jest globals and rules, scoped as wp-scripts scopes them.
	...wordpress.configs[ 'test-unit' ].map( ( config ) => ( {
		...config,
		files: [ '**/@(test|__tests__)/**/*.js', '**/?(*.)test.js' ],
	} ) ),
	{
		files: [ '**/@(test|__tests__)/**/*.js', '**/?(*.)test.js' ],
		rules: {
			// Reads jest's version off disk and throws when jest isn't
			// installed, which breaks linting test files in projects that
			// don't use it.
			'jest/no-deprecated-functions': 'off',
		},
	},
	{
		// Also brings .jsx and .mjs into scope; ESLint only lints .js by default.
		files: [ '**/*.{js,mjs,cjs,jsx}' ],
		rules: {
			// Spacing and layout preferences beyond WordPress'.
			'comma-dangle': [
				'error',
				{
					arrays: 'always-multiline',
					objects: 'always-multiline',
					imports: 'always-multiline',
					exports: 'always-multiline',
					functions: 'never',
				},
			],
			'no-mixed-spaces-and-tabs': [ 'error', 'smart-tabs' ],
			'object-curly-newline': [
				'error',
				{
					ObjectExpression: {
						consistent: true,
						minProperties: 2,
						multiline: true,
					},
					ObjectPattern: {
						consistent: true,
						multiline: true,
					},
					ImportDeclaration: {
						consistent: true,
						multiline: true,
					},
					ExportDeclaration: {
						consistent: true,
						minProperties: 2,
						multiline: true,
					},
				},
			],
			'object-property-newline': 'error',
			'space-before-function-paren': [
				'error',
				{
					anonymous: 'always',
					asyncArrow: 'always',
					named: 'never',
				},
			],
			yoda: [ 'error', 'never' ],

			// Worth flagging in review, not worth failing a build over.
			'no-console': 'warn',

			// Two enforced groups: packages by name, then local files by path.
			// Side-effect imports are order-dependent, so they are left alone.
			// See humanmade/coding-standards#297.
			'import/order': [
				'error',
				{
					groups: [
						[ 'builtin', 'external' ],
						[ 'internal', 'parent', 'sibling', 'index' ],
					],
					'newlines-between': 'always',
					alphabetize: {
						order: 'asc',
						caseInsensitive: true,
					},
				},
			],

			// wp-scripts externalizes @wordpress/* to the WordPress runtime, so
			// these are imported without ever appearing in package.json.
			'import/no-unresolved': [ 'error', { ignore: [ '^@wordpress/' ] } ],
			'import/no-extraneous-dependencies': 'off',

			// JSX preferences beyond WordPress'.
			'react/jsx-boolean-value': [ 'error', 'never' ],
			'react/jsx-curly-newline': [
				'warn',
				{
					multiline: 'consistent',
					singleline: 'consistent',
				},
			],
			'react/jsx-sort-props': [
				'warn',
				{
					reservedFirst: [ 'key', 'ref' ],
					callbacksLast: true,
					ignoreCase: true,
				},
			],
			'react/jsx-wrap-multilines': 'error',
		},
	},
];
