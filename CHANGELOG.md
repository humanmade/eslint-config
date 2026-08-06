# Changelog

<!-- When submitting a PR for a feature, add the appropriate prerelease heading here
and fill in the contents as you go. This simplifies later release management. -->

Changelog entries below this point have been adapted from [humanmade/coding-standards' CHANGELOG.md](https://github.com/humanmade/coding-standards/blob/main/CHANGELOG.md), where this project used to be managed as part of a monorepo.

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
