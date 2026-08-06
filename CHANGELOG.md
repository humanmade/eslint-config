# Changelog

<!-- When submitting a PR for a feature, add the appropriate prerelease heading here
and fill in the contents as you go. This simplifies later release management. -->

Changelog entries below this point have been adapted from [humanmade/coding-standards' CHANGELOG.md](https://github.com/humanmade/coding-standards/blob/main/CHANGELOG.md), where this project used to be managed as part of a monorepo.

## Unreleased

### Breaking Changes:

- Extend `@wordpress/eslint-plugin`'s `recommended-with-formatting` instead of restating its rules. WP rules we never enabled now apply, including `camelcase`, `curly`, `no-shadow`, `no-else-return`, `prefer-const`, `react-hooks/*`, the `@wordpress/*` custom rules and JSDoc content checks
- `arrow-parens` requires parens, matching WP; it was `as-needed`
- `no-var` is an error rather than a warning
- `jsdoc/require-jsdoc` is no longer enforced. WP's config turns it off, as did every project of ours we checked
- Reduce `import/order` to two groups, packages by name then local files by path, and stop sorting `@wordpress/*` separately #297
- Enable `import/no-unresolved`, exempting `@wordpress/*` since wp-scripts externalizes them. It was off
- Stop matching `.ts` and `.tsx`. They were matched with no parser configured, so linting them never worked
- Require ESLint 9 or 10

### Enhancements:

- Plugins ship as dependencies, so installing needs neither `install-peerdeps` nor `--legacy-peer-deps` #301
- Drop the `npm` engines constraint; only Node is pinned

## 2.1.0 (September 9, 2025)

### Breaking Changes:

- Replaced the legacy `.eslintrc` configuration with an ESLint v9 flat config, published as an ES module; consumers must create an `eslint.config.js` which imports this package
- Raised the ESLint peer dependency to `^9.0.0`, from `^5.10.0 || ^6.0.0 || ^7.0.0`
- Raised the minimum Node version to 22 and npm to 10.8.2
- Replaced the `eslint-config-react-app` peer dependency with `@wordpress/eslint-plugin`
- Removed the `babel-eslint`, `eslint-plugin-flowtype`, `eslint-plugin-react-hooks` and `eslint-plugin-sort-destructure-keys` peer dependencies, and added `@babel/eslint-parser`
- Removed the Prettier integration, along with the packaged `.prettierrc.js` and `.prettierignore`
- `eslint-plugin-jsdoc` is no longer a peer dependency, though the config still requires it

### Added:

- Enforce `no-unused-vars`

Versions through 1.0.0 were published as `eslint-config-humanmade`, before the package was renamed to `@humanmade/eslint-config`. There was no 2.0.0 release due to monorepo versioning issues.

## 1.2.1 (September 14, 2022)

- Require spaces in template strings #256
- Raise the minimum Node version to 16 and npm to 7
- Document running the standards under the Altis build script

## 1.1.3 (February 3, 2021)

- Open ESLint peer dependency range to accept ESLint v6 & v7 #222

## 1.1.0 (September 18, 2020)

### Added:

 - Added ESLint `eslint-plugin-import` plugin to enforce consistent ordering of `import` statements in JavaScript module files #219, #84
 - Added ESLint `eslint-plugin-jsdoc` plugin #218
 - Added ESLint `eslint-plugin-sort-destructure-keys` plugin #218

### Changed:

 - Make JSX property sorting case-insensitive #217

##  1.0.0 (July 31, 2020)

### Added:
 - Added ESLint rule for requiring docblocks #209
 - Added ESLint rule for JSX boolean values #183
 - Added ESLint rule for sorting JSX props #195  
 - Added ESLInt Rules of Hooks ruleset #197

### Changed:
 - Moved ESLint `.editorconfig` to project _root_ #175

##  0.8.0 (January 29, 2020)

### Added:
 - Enforce semicolons in JS #169
 - Enforced consistent curly newlines in jsx #172
 - Added `eslint-plugin-sort-destructure-keys` package #179

## 0.6.0 (April 2, 2019)

### Summation:
- Updated eslint to 5.10 and associated deps #101

### Changed:
- Use ecmaversion 2018 #87
- Require space in curly braces for React JSX children #121

### Removed:
- Remove `href-no-hash` rule exclusion #114

## 0.5.0 (May 22, 2018)

- Update ESLint config peer dependencies #65
- Add ESLint config test script with example fixtures #42

## 0.4.2 (May 1, 2018)

- Remove support for ESLint-via-phpcs #54
- Adjust object rules for destructuring #59

## 0.4.0 (Apr 17, 2018)

- Enforce spaces inside jsx curly braces #38
- Make index pass its own rules #41
