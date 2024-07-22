import getWinnerName from './getWinnerName';
import { StatesData, StateWinnerNames } from '../types';

const getStateWinnerNames = (data: StatesData) => {
  const stateWinnerNames: StateWinnerNames = {};

  data.map((state) => {
    if (state.name.indexOf('-CD') === -1) {
      stateWinnerNames[state.stateCode] = getWinnerName(state.winner);
    }
    return stateWinnerNames;
  });

  return stateWinnerNames;
};

export default getStateWinnerNames;
