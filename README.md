The first Electoral College application available in npm open source!

# How Do I Use This?

Go to [HOW_TO_USE](./docs/HOW_TO_USE.md) for complete information.

# What Does This Module Do?

This is currently configured for the 2024 Presidential Election:

- Trump (Republican)
- Biden (Democratic)
- Oliver (Libertarian)
- Stein (Green)
- Kennedy, Jr. (Independent)

# Terms used in this application:

`CD` -- Congressional District
`EV` -- Electoral Vote
`PV` -- Popular Vote
`gop` -- Republican
`dem` -- Democratic
`lib` -- Libertarian
`grn` -- Green
`ind` -- Independent

# Two versions of results shown:

Current state-by-state system
-- winner-take-all prevailing except for Maine and Nebraska, which award 2 EVs to the PV winner and 1 EV to the winner of each Congressional District

Proportional Representation
-- a "What If?" scenario were all EVs awarded proportionally on a state-by-state basis according to the PV in each state.
-- E.g. Wisconsin has 10 EVs. A candidate in WI winning 60% of the PV would receive 6 EVs instead of all 10 EVs. A candidate winning 30% of the PV would receive 3 EVs rather than 0 EVs.

See `/docs/HOW_TO_USE.md` for more information.

# 2016 Results For Each Version

538 EVs
270 EVs needed to win

Current / Winner-Take-All (Trump Wins):

Trump -- 306 EVs
Clinton -- 232 EVs
Johnson -- 0 EVs
Stein -- 0 EVs
McMullin -- 0 EVs

Proportional (No Winner):

Trump -- 260 EVs
Clinton -- 267 EVs
Johnson -- 9 EVs
Stein -- 1 EV
McMullin -- 1 EV

No winner if the Proportional System was used! This would have thrown the election to Congress, with the House of Representatives picking the President (1 vote per State delegation; majority of States required to win), the Senate picking the Vice President (majority of Senators required to win). The top three EV-getters for President qualify, meaning Trump, Clinton, and Johnson would have been eligible; the top two EV-getters for VP qualify, meaning Pence and Kaine would have been eligible. Would Trump have won in the House? Maybe. Johnson may have been seen as a compromise candidate and won instead. It's likely Clinton would not have won given the make-up of the House. Pence probably would have won in the Senate.

The point, though, is that even though Trump won comfortably using the current system, his actual level of support wasn't so wide-spread. Keep in mind, though, that Clinton's margin of victories in CA and NY were substantial, which accounts entirely for this discrepancy.

# Why should we care about the Electoral College and Proportional Representation "What If?"

No electoral system is perfect. Each one has its pros and cons. It is my belief the Electoral College is a vital part of our Republic's electoral system, rather than an outdated relic. It requires the winning candidate for President to have broad support across the country and its different regions, cultures, and socio-economic differences. It balances majority rule with protection of minority rights -- something a direct, national, popular-vote-only election would not do.

But a winner-take-all system is not the most representative. It allows the two major parties, Republicans and Democrats, to have a stranglehold on elections. Awarding EVs proportionally would lead to a much more accurate reflection of each candidate's actual support. It would also begin to break the hold of the two major parties, enabling third-party candidates to win EVs. It might even cause elections to be thrown to Congress because it would increase the likelihood no one would receive a majority of EVs. This would have happened in 2016! And it just might result in better candidates -- from all parties -- rather than a constant "lesser of two evils" system in which we are stuck today. For third parties to start gaining traction in American politics, voters have to see third-party candidates as viable. Imagine if they started winning a few EVs -- voters would see actual results rather than be told they're wasting their votes. Imagine what could happen. And I believe this is a system the Founders would have approved of as it would maintain the integrity of the Electoral College by continuing to balance majority rule with protection of minority rights.

# Interesting Historical Facts

In 1992 and 1996, Independent candidate Ross Perot received a substantial portion of the PV. In each of those years the winner was Bill Clinton. In each of those years, even with a Proportional system, Bill Clinton still would have won a majority of EVs, meaning the elections would not have been thrown to Congress. But imagine what could have happened if people saw a third-party candidate winning a substantial number of EVs!

# What Else Would I Like To Do With This Module?

I'd like to support passing in state-by-state voting data so you don't have to manually enter the vote percentages in each state. I'd also like to support passing in _all_ data, including the candidates complete with their pictures, party info, etc. Maybe in version 3.x.

Add full unit testing. Currently have full test coverage for `utilities` and `constants` and basic snapshot tests for everything else.
Turn this into a more-easily-importable module into other websites and applications.
Reduce initial load time.

# CRA and other Info

Yes, yes, I know, I know. I'm using CRA. This was a just-for-fun project that I quickly built in 2016 using React 13, upgraded to React 16, then quickly forgot about it in early 2017. I got back around to in time for the 2020 election. Would this be better without CRA, set up to use Webpack, etc.? Yup. For now this is what it is.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
