const calculateStateEVs = (stateEVs: number, convertedVoteTotals: number[]) =>
  convertedVoteTotals.map((votes) => Math.round((votes / 100) * stateEVs));

export default calculateStateEVs;
