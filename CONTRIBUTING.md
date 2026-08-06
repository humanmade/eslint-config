# Contributing

The HM coding standards represent the best practices for enabling our engineering teams to work together. As the way we work evolves over time, our coding standards likewise need to evolve.


## Guidelines for Rule Changes

Bugfixes are always welcomed and can be released in minor or patch versions.

New rules or major changes to rules need to be carefully considered and balanced against the churn they may cause. Generally, code that exists right now should continue to pass in the future unless we are **intentionally** ratcheting up rules to be stricter. These cases need to be carefully considered, as breaking production code should be avoided in most cases.

Relaxing rules can be done in minor releases, but generally should be done in major releases if it's a major change (for example, allowing different file names). Use your best judgement to decide what is a major and what is a minor change, and if in doubt, run it past @joehoyle or @rmccue.

Generally, so long as changes to rules have consensus, they are fine to be published. Any controversial rules should be widely discussed, and if a tie-breaker is needed, @joehoyle can make a final call. If you're not sure, ask @rmccue. Non-controversial changes or bugfixes do not need input from @joehoyle or @rmccue provided versioning and release processes are all followed.


## Testing

### Running tests

```bash
npm ci
npm test
```

Pass `--verbose` for the full ESLint report rather than just the summary:

```bash
npm test -- --verbose
```

### Fixture tests

`fixtures/eslint.config.js` re-exports `index.js` so that we can lint our fixtures with our exact published configuration.

Every file in `fixtures/pass` must report no errors; warnings are tolerated. Every file in `fixtures/fail` must report at least one error or warning, so a fail fixture that doesn't trigger something fails the test suite to catch rules which silently stop applying.

When adding or changing a rule, add fixtures to both directories: one file showing the accepted form, one showing the version that the rule rejects. Name both after the relevant rule.


## Changelog entries

Add your changes under an `Unreleased` heading at the top of `CHANGELOG.md`, adding the heading if it isn't there yet. Group them under the subsection matching their semver impact, since that determines the next version number:

- **Breaking Change** — requires consumers to act to keep passing (major).
- **New Feature** — a new backwards-compatible capability (minor).
- **Enhancement** — a backwards-compatible improvement to existing behavior (minor).
- **Bug Fix** — resolves incorrect behavior (patch).
- **Internal** — no effect on the published config (patch).


## Releasing

Any changes which cause existing, working production code to fail should trigger a new major release. Only bugfixes or making rules more lenient should be in minor releases.

The process for releasing is:

* Ensure your working directory is clean and up-to-date on `main`.
* Move the unreleased entries in `CHANGELOG.md` under the new version number.
* Run `npm version <patch|minor|major>` to bump `package.json` and create the release commit and tag.
* Run `npm publish`. Check you're logged in with `npm whoami`, and note that you must have [2FA enabled](https://docs.npmjs.com/getting-started/using-two-factor-authentication). `npm publish --dry-run` reports what would be packed.
* Run `git push --follow-tags`.
* Publish a GitHub release using the changelog entries for that version.
* For major and minor releases, publish a changelog to the Dev H2 (significant bugfixes may also warrant a post).

If you're releasing a major version, you should also create a branch for the major version so that bugfix releases can be created. This branch should be a humanised name of the version; e.g. 0.4 would be `oh-dot-four`, 1.6 would be `one-dot-six`.
