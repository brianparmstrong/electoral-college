import React, { useState } from 'react';
import { arrayOf, bool, func, number, oneOfType, shape, string } from 'prop-types';
import Map from '../Map';
import PopularVotes from '../PopularVotes';
import State from '../State';
import { getStateWinnerNames, getWinnerName } from '../../utilities';

const States = ({
  currentEVTotals,
  currentPVTotals,
  handlePropVotes,
  handleStateWinner,
  isFromStorage,
  popVotesData,
  statesData
}) => {
  const HIDE_POP_VOTES_TEXT = 'Hide Popular Votes';
  const SHOW_POP_VOTES_TEXT = 'Show Popular Votes';
  const [buttonText, setButtonText] = useState(HIDE_POP_VOTES_TEXT);
  const [showPopVotes, setShowPopVotes] = useState(true);
  const [newStateData, setNewStateData] = useState({});
  const [stateWinnerNames, setStateWinnerNames] = useState(getStateWinnerNames(statesData));
  const [stateClickedFromMap, setStateClickedFromMap] = useState(null);

  const handleMapStateClick = state => {
    setStateClickedFromMap(state);
  };

  const updateElectoralVotes = data => {
    const hasWinner = data.newWinningParty > 0;
    const hasPreviousWinner = data.newWinningParty !== 1;
    const winningTargetElem = document.getElementById(data.newWinningTargetElem);
    const previousWinningTargetElem = document.getElementById(data.newPreviousWinnerTargetElem);
    let winnerTotal;
    let previousWinnerTotal;

    if (hasWinner) {
      winnerTotal = parseInt(winningTargetElem.innerHTML) + data.evs;
      winningTargetElem.innerHTML = winnerTotal;
    }
    if (hasPreviousWinner) {
      previousWinnerTotal = parseInt(previousWinningTargetElem.innerHTML) - data.evs;
      previousWinningTargetElem.innerHTML = previousWinnerTotal;
    }
  };

  const toggleWinner = data => {
    let newGopTotal = currentEVTotals[0];
    let newDemTotal = currentEVTotals[1];
    let newLibTotal = currentEVTotals[2];
    let newGrnTotal = currentEVTotals[3];
    let newIndTotal = currentEVTotals[4];
    let newEVTotals = [];
    let updateObj;

    switch (data.newWinningParty) {
      case 1:
        newGopTotal += data.evs;
        break;
      case 2:
        newDemTotal += data.evs;
        newGopTotal -= data.evs;
        break;
      case 3:
        newLibTotal += data.evs;
        newDemTotal -= data.evs;
        break;
      case 4:
        newGrnTotal += data.evs;
        newLibTotal -= data.evs;
        break;
      case 5:
        newIndTotal += data.evs;
        newGrnTotal -= data.evs;
        break;
      default:
        newIndTotal -= data.evs;
        break;
    }

    newEVTotals = [
      newGopTotal,
      newDemTotal,
      newLibTotal,
      newGrnTotal,
      newIndTotal
    ];

    updateElectoralVotes(data);
    handleStateWinner(newEVTotals);

    updateObj = {
      [data.stateId]: getWinnerName(data.newWinningParty)
    }
    setNewStateData({
      newWinningParty: data.newWinningParty,
      stateId: data.stateId
    });
    setStateWinnerNames({...stateWinnerNames, ...updateObj});
  };

  const renderStates = stateClicked => {
    return statesData.map((state, i) => {
      if (state.name.indexOf('-CD') === -1) {
        return (
          <div key={`state-${i}`}>
            <State
              evs={state.evs}
              isFromStorage={isFromStorage}
              name={state.name}
              stateClickedFromMap={
                stateClicked?.split('-')[0] === state.stateCode ? stateClicked : false
              }
              stateCode={state.stateCode}
              stateEvs={state.stateEvs}
              toggleWinner={toggleWinner}
              winner={state.winner} />
            <PopularVotes
              currentPVTotals={currentPVTotals}
              evs={state.evs}
              handlePropVotes={handlePropVotes}
              name={state.name}
              popVotesData={popVotesData[i]}
              stateCode={state.stateCode}
              stateEvs={state.stateEvs}
              showPopVotes={showPopVotes} />
          </div>
        );
      } else {
        return (
          <div key={`state-${i}`}>
            <State
              evs={state.evs}
              isFromStorage={isFromStorage}
              name={state.name}
              stateClickedFromMap={false}
              stateCode={state.stateCode}
              stateEvs={state.stateEvs}
              toggleWinner={toggleWinner}
              winner={state.winner} />
          </div>
        );
      }
    });
  };

  const showHidePopVotes = () => {
    let newButtonText = HIDE_POP_VOTES_TEXT;
    if (showPopVotes) {
      newButtonText = SHOW_POP_VOTES_TEXT;
    }
    setButtonText(newButtonText);
    setShowPopVotes(!showPopVotes);
  };

  return (
    <div className='statesPopVotes'>
      <Map
        handleMapStateClick={handleMapStateClick}
        newStateData={newStateData}
        stateWinnerNames={stateWinnerNames}
        statesData={statesData} />
      <div className='statesWrapper'>
        <button type='button' onClick={showHidePopVotes}>{buttonText}</button>
        {renderStates(stateClickedFromMap)}
      </div>
    </div>
  );
};

States.propTypes = {
  currentEVTotals: arrayOf(number).isRequired,
  currentPVTotals: arrayOf(number).isRequired,
  handlePropVotes: func.isRequired,
  handleStateWinner: func.isRequired,
  isFromStorage: bool.isRequired,
  popVotesData: arrayOf(shape({
    name: string,
    values: arrayOf(string)
  })),
  statesData: arrayOf(shape({
    evs: oneOfType([number, string]),
    name: string,
    stateCode: string,
    winner: string
  })).isRequired
};

export default States;
