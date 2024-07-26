The first Electoral College module available in npm open source!

# How Do I Use This?

```
import ElectoralCollege from 'electoral-college/dist';
```

Go to [DocumentationTemplate](./.storybook/DocumentationTemplate.mdx) for complete information, including required and optional props.

# What Does This Module Do?

This is currently configured for the 2024 Presidential Election:

- Trump (Republican)
- Harris (Democratic)
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

See `/.storybook/DocumentationTemplate.mdx` for more information.

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

I'd like to support passing in state-by-state voting data so you don't have to manually enter the vote percentages in each state. I'd also like to support passing in _all_ data, including the candidates complete with their party info, etc. Maybe in version 3.x.

Add full unit testing. Currently have full test coverage for `utilities` and `constants` and basic snapshot tests for everything else.

# Why Rollup for bundling?

Vite and Webpack really seem more appropriate for applications. Plus the setup and configuration for Rollup (even with Storybook, which OOTB supports only Vite and Webpack, which can be made to work with Rollup) was more straightforward.
