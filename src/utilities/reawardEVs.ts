import { getOrderedVoteTotals } from '.';
import { ReawardEVs } from '../types';

// This function should and must be called only when `difference` is non-zero.
const reawardEVs = ({
  calculatedEVTotals,
  convertedVoteTotals,
  difference,
  proportionalReawardMode,
  renderPropErrorMessage,
}: ReawardEVs) => {
  const reawardedEVs = [...calculatedEVTotals];
  const fewerEVsPreliminarilyAwarded = difference > 0;
  const absDifference = Math.abs(difference);
  const orderedVoteTotals = getOrderedVoteTotals(
    convertedVoteTotals,
    renderPropErrorMessage
  );
  const stateWinnerIndex = convertedVoteTotals.findIndex(
    (total) => total === orderedVoteTotals.first
  );
  const stateSecondIndex = convertedVoteTotals.findIndex(
    (total) => total === orderedVoteTotals.second
  );

  const getNextIndex = (currentIndex: string) => {
    switch (currentIndex) {
      case 'fifth':
        return 'fourth';
      case 'fourth':
        return 'third';
      case 'third':
        return 'second';
      // we should never need to get to the first index so there is no need for a default
    }
  };

  /**
   * Because `reawardEVs`is called only when more EVs were preliminarily awarded, the index should never get to 0.
   * The stateWinner will always keep all of their EVs.
   * Keep checking until enough EVs have been taken away so that total EVs awarded === that state's available EVs.
   */
  const takeEVsFromLowest = (remainingEVsToTake: number, index = 'fifth') => {
    const reawardedEVsIndexToCheck = convertedVoteTotals.findIndex(
      (total) =>
        total === orderedVoteTotals[index as keyof typeof orderedVoteTotals]
    );
    const evsAtIndex = reawardedEVs[reawardedEVsIndexToCheck];
    if (evsAtIndex && evsAtIndex < remainingEVsToTake) {
      // candidate does not have enough EVs, remove all EVs from this candidate and try again
      reawardedEVs[reawardedEVsIndexToCheck] = 0;
      takeEVsFromLowest(remainingEVsToTake - evsAtIndex, getNextIndex(index));
    } else if (evsAtIndex) {
      // candidate has enough EVs, remove the remaining difference and finish
      reawardedEVs[reawardedEVsIndexToCheck] -= remainingEVsToTake;
    } else {
      // candidate has no EVs, try again
      takeEVsFromLowest(remainingEVsToTake, getNextIndex(index));
    }
  };

  if (fewerEVsPreliminarilyAwarded) {
    // these scenarios are the easiest -- just add the difference according to the proportionalReawardMode
    if (proportionalReawardMode === 'stateWinner') {
      reawardedEVs[stateWinnerIndex] += absDifference;
    } else {
      // using Math methods precludes the need to know whether the difference is even or odd
      reawardedEVs[stateWinnerIndex] += Math.ceil(difference / 2);
      reawardedEVs[stateSecondIndex] += Math.floor(difference / 2);
    }
  } else {
    /**
     * Must check the other candidates' totals, starting with the lowest vote-getter, to determine where to reaward EVs.
     */
    takeEVsFromLowest(absDifference);
  }

  // `reawardedEVs` should now add up to exactly what is available for the State
  return reawardedEVs;
};

export default reawardEVs;
