import { getStateWinnerName } from './';

const getStateWinnerNames = data => {
  const stateWinnerNames = {};

  data.map((state, i) => {
    if (state.name.indexOf('-CD') === -1) {
      stateWinnerNames[state.stateCode] = getStateWinnerName(state.winner);
    }
    return stateWinnerNames;
  });

  return stateWinnerNames;
};

export default getStateWinnerNames;