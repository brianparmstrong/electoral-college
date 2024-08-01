import { useEffect, useState } from 'react';
import Map from '../Map';
import PopularVotes from '../PopularVotes';
import State from '../State';
import {
  IfcStates,
  NewStateData,
  StateWinnerNames,
  WinnerData,
} from '../../types';
import { getStateWinnerNames, getWinnerName } from '../../utilities';

type UpdateObj = {
  [key: string]: string;
};

const States = (states: IfcStates) => {
  const {
    currentEVTotals,
    currentPVTotals,
    handlePropVotes,
    handleStateWinner,
    hasClearedSavedData,
    isFromStorage,
    mapSize,
    popVotesData,
    stateControlSize,
    statesData,
  } = states;
  const HIDE_POP_VOTES_TEXT = 'Hide Popular Votes';
  const SHOW_POP_VOTES_TEXT = 'Show Popular Votes';
  const [buttonText, setButtonText] = useState<string>(HIDE_POP_VOTES_TEXT);
  const [showPopVotes, setShowPopVotes] = useState<boolean>(true);
  const [statesDataToUse, setStatesDataToUse] = useState(statesData);
  const [newStateData, setNewStateData] = useState<NewStateData>(null);
  const [stateWinnerNames, setStateWinnerNames] = useState<StateWinnerNames>(
    getStateWinnerNames(statesData)
  );
  const [stateClickedFromMap, setStateClickedFromMap] = useState<string>('');
  const [clearMapWinners, setClearMapWinners] = useState<'false' | 'true'>(
    hasClearedSavedData
  );
  const [clearPopularVotes, setClearPopularVotes] = useState<'false' | 'true'>(
    hasClearedSavedData
  );

  useEffect(() => {
    setStatesDataToUse(statesData);
    setStateWinnerNames(getStateWinnerNames(statesData));
  }, [
    getStateWinnerNames,
    setStateWinnerNames,
    setStatesDataToUse,
    statesData,
  ]);

  useEffect(() => {
    setClearMapWinners(hasClearedSavedData);
    setClearPopularVotes(hasClearedSavedData);
  }, [hasClearedSavedData]);

  const handleMapStateClick = (state: string) => {
    setStateClickedFromMap(state);
  };

  const toggleWinner = (data: WinnerData) => {
    let newGopTotal = currentEVTotals[0];
    let newDemTotal = currentEVTotals[1];
    let newLibTotal = currentEVTotals[2];
    let newGrnTotal = currentEVTotals[3];
    let newIndTotal = currentEVTotals[4];
    let newEVTotals = [];

    switch (data.newWinningParty) {
      case '1':
        newGopTotal += data.evs;
        break;
      case '2':
        newDemTotal += data.evs;
        newGopTotal -= data.evs;
        break;
      case '3':
        newLibTotal += data.evs;
        newDemTotal -= data.evs;
        break;
      case '4':
        newGrnTotal += data.evs;
        newLibTotal -= data.evs;
        break;
      case '5':
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
      newIndTotal,
    ];

    handleStateWinner(newEVTotals);

    const updateObj: UpdateObj = {
      [data.stateId]: getWinnerName(data.newWinningParty),
    };
    setNewStateData({
      newWinningParty: data.newWinningParty,
      stateId: data.stateId,
    });
    setStateWinnerNames({ ...stateWinnerNames, ...updateObj });
  };

  const renderStates = (stateClicked: string) => {
    return statesDataToUse.map((state, i) => {
      if (state.name.indexOf('-CD') === -1) {
        return (
          <div
            className={`state-control ${stateControlSize}`}
            key={`state-${i}`}
          >
            <State
              evs={state.evs}
              isFromStorage={isFromStorage}
              name={state.name}
              stateClickedFromMap={
                stateClicked?.split('-')[0] === state.stateCode
                  ? stateClicked
                  : 'false'
              }
              stateCode={state.stateCode}
              stateEvs={state.stateEvs}
              toggleWinner={toggleWinner}
              winner={state.winner ?? '0'}
            />
            <PopularVotes
              currentPVTotals={currentPVTotals}
              evs={state.evs}
              handlePropVotes={handlePropVotes}
              hasClearedSavedData={clearPopularVotes}
              name={state.name}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore for `i`, which is the index in the array
              popVotesData={popVotesData?.[i]}
              stateEvs={state.stateEvs as string}
              showPopVotes={showPopVotes}
            />
          </div>
        );
      } else {
        return (
          <div
            className={`state-control ${stateControlSize}`}
            key={`state-${i}`}
          >
            <State
              evs={state.evs}
              isFromStorage={isFromStorage}
              name={state.name}
              stateClickedFromMap={'false'}
              stateCode={state.stateCode}
              stateEvs={state.stateEvs}
              toggleWinner={toggleWinner}
              winner={state.winner ?? '0'}
            />
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
    <div className="statesPopVotes">
      <Map
        handleMapStateClick={handleMapStateClick}
        hasClearedSavedData={clearMapWinners}
        mapSize={mapSize}
        newStateData={newStateData}
        stateWinnerNames={stateWinnerNames}
        statesData={statesDataToUse}
      />
      <div className="statesWrapper">
        <button type="button" onClick={showHidePopVotes}>
          {buttonText}
        </button>
        {renderStates(stateClickedFromMap)}
      </div>
    </div>
  );
};

export default States;
