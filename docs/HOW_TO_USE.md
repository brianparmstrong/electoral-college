How To Use This Module
======================

This module can be run locally as its own application.  Just download, install, build, and run.  To import into another application you should be able to:

```
import ElectoralCollege from 'electoral-college/src/ElectoralCollege';
```

You can copy all the styles from `electoral-college/src/style.css'.  Apologies that this isn't in a nice, neat .scss file.



## Winner-Take-All / Current System

### Using the Map

Click on each state to toggle the winner.  You'll see the state change colors to match the political party, as well as the Winner-Take-All total change.  The `Electoral Votes Counter` will update accordingly.

Maine and Nebraska award their EVs as follows:

2 EVs to the candidate receiving the most votes statewide
1 EV to the candidate receiving the most votes in each CD

Clicking on either of these states on the map will award only the 2 EVs described above.  You will have to manually select the winner of each CD in the list of states below the map.

When clicking on a state you should see the corresponding state update accordingly in the list of states below the map.

### Using the list of states

Click on the box with the number of EVs above each state name to toggle the winner.  This works the same for Maine and Nebraska's CDs.

When clicking on a state's EV box you should see the corresponding state update accordingly in the map above the list.

## Proportional Representation

Enter the percentage of votes won by each candidate.  This will calculate how many EVs the candidate would win if EVs were awarded proportionally.  In some cases the total EVs awarded will not quite add up to 100% of that State's EVs, due to rounding.  In this case you'll have to fudge the numbers until 100% of EVs for that state have been awarded.  What I do, and what I would recommend for a Proportional system (which, of course, would have to be spelled out in the law), is:

Only 1 EV unawarded?  Give it to the candidate with the most votes in that State.
Only 2 EVs unawarded?  Give 1 EV each to the top two vote getters?
Only 3 EVs unawarded?  Give 2 EVs to the candidate with the most votes, 1 EV to the candidate with the second most votes.  Or, if there are three candidates with a similar % of votes in the state then give 1 EV to each of them.
More than 3 EVs unawarded?  Give at least 2 EVs to the candidate with the most votes then split the remaining according to your preference.

You're free to fudge the numbers however you wish.  Maybe you want to give a candidate 1 EV who has received at least 5% or 10% of the PV in that State && who has not already received at least 1 EV.  Maybe you want to give them all to the winner.  It's up to you!  The point is to see how a different electoral system could result in different outcomes.

However you do it, the `Proportional` total changes, as well as the `Popular Votes Counter`.

For both counters there is a black arrow pointing at the line a winner must cross.

## Saving Results

Click the `Save` button.  This will save the results to localStorage.  The next time you try to load the application it will use this data instead of loading blank.

## Clearing Results

Click the `Clear` button.  This will clear the current results as well as your localStorage data.

Screenshots
===========

`2016_BLANK` -- how this will load if you do not have saved data in local storage

`2016_FINAL_RESULTS` -- Winner-take-all and proportional representation EV results for Trump and Clinton
