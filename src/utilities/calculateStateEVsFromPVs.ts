import { calculateStateEVs, reawardEVs } from '.';
import { CalculateStateEVsFromPVs } from '../types';

const calculateStateEVsFromPVs = ({
  proportionalReawardMode,
  renderPropErrorMessage,
  stateEVs,
  voteTotals,
}: CalculateStateEVsFromPVs) => {
  const voteTotalsCopy = [...voteTotals];
  const convertedVoteTotals = voteTotalsCopy.map((percent) => Number(percent));
  const preliminaryEVsAwarded = calculateStateEVs(
    stateEVs,
    convertedVoteTotals
  );
  let preliminaryEVsTotal = 0;
  let calculatedEVTotals = [...preliminaryEVsAwarded];
  let difference = 0;

  preliminaryEVsAwarded.forEach((evs) => (preliminaryEVsTotal += evs));

  if (preliminaryEVsTotal > 0 && preliminaryEVsTotal !== stateEVs) {
    difference = stateEVs - preliminaryEVsTotal;
    calculatedEVTotals = reawardEVs({
      calculatedEVTotals,
      convertedVoteTotals,
      difference,
      proportionalReawardMode,
      renderPropErrorMessage,
    });
  }

  return calculatedEVTotals;
};

export default calculateStateEVsFromPVs;
