# CHANGELOG

Semver versioning is followed.

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
