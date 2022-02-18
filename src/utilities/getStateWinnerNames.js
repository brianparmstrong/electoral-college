import { getWinnerName } from './';

const getStateWinnerNames = data => {
  const stateWinnerNames = {};

  data.map(state => {
    if (state.name.indexOf('-CD') === -1) {
      stateWinnerNames[state.stateCode] = getWinnerName(state.winner);
    }
    return stateWinnerNames;
  });

  return stateWinnerNames;
};

export default getStateWinnerNames;