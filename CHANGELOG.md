# CHANGELOG

Semver versioning is followed.

[3.1.0]

### UPGRADE

- New optional prop `mapSize` (defaults to `large` -- see documentation for more information)
- New optional prop `stateControlSize` (defaults to `large` -- see documentation for more information)
- Adjusted styling of sticky EV counter so it doesn't take up as much vertical space
- Adjusted styling of `#info-box` so it's not as wide
- Updated `DocumentationTemplate` to specify that you must include one and only one candidate for each political party

[3.0.1]

### DOCS

- `DocumentationTemplate` had old info on how to run this module

[3.0.0]

### VERSION BUMP

- Typings are being picked up from the published package. Yay!
- See `README.md` for updated way to import this module
- Decided to make `candidateImageSources` prop optional
- Tweaked styling of the `Map`'s `info-box` to have `border-color` match the hovered State's winner
- Fixed a couple lint errors re: not needing to explicitly type trivially inferred types
- Deleted `/.storybook/docs/screenshots/2016_BLANK.png` since module no longer loads with an alert message
- Added `--collectCoverage` flag to Jest
- Package is now ready to be taken out of beta

[3.0.0-beta-6]

### FIX

- Trying to get types to work

[3.0.0-beta-5]

### FIX

- Forgot to bundle previous changes

[3.0.0-beta-4]

### FIX

- Trying to get types to work. May have had incorrect file name in rollup bundler.
- Moving some reset logic from `ClearButton` to `ElectoralCollege`

[3.0.0-beta-3]

### FIX

- Forgot to save `PopularVoteInput` changes in previous version
- Forgot to re-bundle package
- Removed sourcemap files in bundled output since `sourcemap` is no longer set to `true`

[3.0.0-beta-2]

### FIX

- 3.0.0 should be ready, but still trying to get types picked up by changing the rollup output for the types file
- Removed `alert()` messages in favor of inline messaging
- Removed messaging for when there is no saved data in localStorage (was previously an `alert`)
- Removed `location.reload()` in favor of new functionality to reset the map, state buttons, and popular vote input fields
- Changed Save and Clear button functionality to show buttons only if Storage is enabled; Clear button will show only if data has been previously saved

[3.0.0-beta]

### VERSION BUMP

- Package is ready for beta. Package is now published only with `/dist`, runtime warnings are fixed.
- Want to think over if there's anything else to be done before publishing as a full-fledged 3.x.
- Removing a couple more CRA-related files

[3.0.0-alpha-5]

### FIX

- Remove `sourcemap: true` from `rollup.config.js` to eliminate runtime warnings re: cannot find the files that are in `/src`

[3.0.0-alpha-4]

### FIX

- Remove `@rollup/plugin-image` (module now requires caller to pass in image src as of `v3.0.0-alpha`)
- add `electoral-college-root` class to root of module
- Add Kamala Harris (at least temporarily) as Democratic nominee
- remove `Candidate` component `id={name}` in favor of adding the party to the className
- delete `/public` folder, which was a leftover from 2.x CRA
- adding `files` to `package.json` to whitelist files received when importing package

[3.0.0-alpha-3]

### DOCS

- Updating how to import the module (`3.0.0-alpha-2` worked!).
- Still need to remove all the unnecessary files from the bundle, but module can now be imported into an application! (Will do this before taking module out of alpha). Also need to export types.

[3.0.0-alpha-2]

### FIX

- Looks like `3.0.0-alpha` didn't properly export ElectoralCollege

[3.0.0-alpha]

### UPGRADE

Possible WIP (am publishing as an alpha to test importing it as a published package)

- Converted to exportable module via `rollup`!
- Removed `react-scripts`
- Added `storybook` using the webpack configuration and setup
- Moved `/docs` folder to `/.storybook`
- Added `typecheck` script and fixed TS errors
- Added required props `candidateImageSources` and `candidatesData` and optional prop `enableStickyEVCounter` (defaults to Boolean(true))
- Removed `/assets` (must use `candidateImageSources` prop)
- Removed `/src/constants/candidatesData` (must use `candidatesData` prop)

[2.1.0]

### UPGRADE

- Upgrading `react` and related deps to v18.x (I want to convert this to a true importable package instead of a create-react-app app but ran into issues with React v17.x, so doing this upgrade first).
- Upgrading `react-scripts`, `jest`, `prettier`, and linters

[2.0.4]

### FIX

- Typos in `data-info` for CT and TX
- Removing `updateElectoralVotes()` from `States` component as it is not needed; `toggleWinner()` handles all necessary updating of the EV counters. (Was wanting to figure out how to get rid of `document.getElementById` functionality -- a React anti-pattern. Seems to have been left over from a 1.x version of this package, as best as I can figure out.)

[2.0.3]

### FIX

- Forgot to update tests in 2.0.1

[2.0.2]

### DOCS

- Forgot to update README in 2.0.1

[2.0.1]

### UPDATE

- 2024 General Election candidates for all parties
- Removed unnecessary `return` statement from `/Candidates/index`

[2.0.0]

### UPGRADE

- Hello TypeScript! Goodbye prop-types.
- Also added: eslint, prettier

### FIX

- Jest test console warning messages re: window.alert
- Jest test console warning messages re: incorrect prop type received

[1.6.0]

### UPGRADE

- Upgrade to React 17 and CRA 5.x. This enables removal of `import React from 'react'` statements and some easier-to-read tests with `@testing-libary/react`.
- Use optional chaining
- Use SASS instead of CSS

### FIX

- Typo in h1: `2020` ==> `2024`

[1.5.5]

### UPDATE

- Really this is just a re-publish of 1.5.4. I realized I had forgotten to push the code changes to Git (for a while, maybe since 1.2.x or 1.3.x -- major facepalm!);

[1.5.4]

### FIX

- Fix CSS of each `Candidate` component to restore background color

[1.5.3]

### UPDATE

- Unit tests for constants

[1.5.2]

### UPDATE

- Remove 2016 and 2020 candidate images from `/src/assets`

[1.5.1]

### UPDATE

- Update a few unit tests that failed as a result of 1.5.0 changes
- Add unit tests for `statesData` file
- Move historical candidatesData and statesData to new `/docs/historical-data` folder to reduce build size; rename `statesData-{Census Year}.js` back to `statesData.js`

[1.5.0]

### UPDATE

- Add 2020 Census-related info (candidatesData-2024.js and statesData-2020.js)
- Rename `statesData` const file to `statesData-{Census Year}.js`

[1.4.2]

### FIX

- Accidentally removed code for properly calculating Maine and Nebraska proportional EVs

[1.4.1]

### FIX

- Re-order Maine and Nebraska in `statesData` const to fix a bug where the popular vote inputs would not show after saving.

[1.4.0]

### ADD

- Make the candidates' Electoral Votes totals into a sticky header when page is scrolled down so that it's easier to see the updated totals

[1.3.0]

### ADD

- `Winner: {winnerName}` to Electoral Votes counters when a candidate has won at > 50% of possible EVs
- Colored borders to each PopularVoteInput to match the party to which that input belongs
- `checkForWinner` util for determining if a candidate has won > 50% of possible EVs

### UPDATE

- Rename `getStateWinnerName` to `getWinnerName` since the function is now being used by multiple components

[1.2.1]

### ADD

- Jest test snapshots for all components

[1.2.0]

### ADD

- Add State Winner to info box that appears onMouseEnter of a state on the map
- Tests for utilities

### UPDATE

- Use CSS to set default `fill` property for SVG instead of in the SVG html

[1.1.1]

### UPDATE

- Update favicon.ico and related images

[1.1.0]

### UPDATE

- Move `react-scripts` to devDeps

[1.0.4]

### UPDATE

- Reduce image asset size
- Remove unused file
- Update HOW_TO_USE.md doc re: saving and clearing results.

[1.0.3]

### UDPATE

- Add git repo to package.json

[1.0.2]

### FIX / UPDATE

- Fix bug where Washington, D.C. wasn't working in the map
- Add credit for SVG code

[1.0.1]

### UPDATE

- remove `private` tag from package.json
- update README

[1.0.0]

- Initial publication
- Contains 2016 and 2020 election year data
- Has map and list of states

TODO: full tests
