CHANGELOG
=========

Semver versioning is followed.

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
