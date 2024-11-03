import { useEffect, useState } from 'react';
import Map from '../Map';
import PopularVotes from '../PopularVotes';
import State from '../State';
import {
  IfcStates,
  NewStateData,
  StatesData,
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
    dataMode,
    handlePropVotes,
    handleStateWinner,
    hasClearedSavedData,
    isFromStorage,
    mapSize,
    popVotesData,
    proportionalReawardMode,
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
  const [hasRenderedAllStates, setHasRenderedAllStates] =
    useState<boolean>(false);
  let autoModeStateWinnerNames: StateWinnerNames = {};

  useEffect(() => {
    if (dataMode === 'auto' && !hasRenderedAllStates) {
      setStateWinnerNames(autoModeStateWinnerNames);
      setHasRenderedAllStates(true);
    }
  });

  useEffect(() => {
    setStatesDataToUse(statesData);
    if (dataMode === 'manual') {
      setStateWinnerNames(getStateWinnerNames(statesData));
    }
  }, [
    dataMode,
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
        if (dataMode === 'manual') {
          newGopTotal -= data.evs;
        }
        break;
      case '3':
        newLibTotal += data.evs;
        if (dataMode === 'manual') {
          newDemTotal -= data.evs;
        }
        break;
      case '4':
        newGrnTotal += data.evs;
        if (dataMode === 'manual') {
          newLibTotal -= data.evs;
        }
        break;
      case '5':
        newIndTotal += data.evs;
        if (dataMode === 'manual') {
          newGrnTotal -= data.evs;
        }
        break;
      default:
        if (dataMode === 'manual') {
          newIndTotal -= data.evs;
        }
        break;
    }

    newEVTotals = [
      newGopTotal,
      newDemTotal,
      newLibTotal,
      newGrnTotal,
      newIndTotal,
    ];

    handleStateWinner(newEVTotals, data);

    const updateObj: UpdateObj = {
      [data.stateId]: getWinnerName(data.newWinningParty),
    };
    setNewStateData({
      newWinningParty: data.newWinningParty,
      stateId: data.stateId,
    });
    if (dataMode === 'manual') {
      setStateWinnerNames({ ...stateWinnerNames, ...updateObj });
    } else {
      autoModeStateWinnerNames = { ...autoModeStateWinnerNames, ...updateObj };
    }
  };

  const renderStates = (stateClicked: string, data: StatesData[]) => {
    // `indexOffset` avoids having to use different `data` from `/constants/statesData` based on dataMode
    let indexOffset = 0;
    return data.map((state, i) => {
      if (state.name.indexOf('-CD') === -1) {
        return (
          <div
            className={`state-control ${stateControlSize}`}
            key={`state-${i - indexOffset}`}
          >
            <State
              dataMode={dataMode}
              evs={
                state.stateEvs && dataMode === 'auto'
                  ? state.stateEvs
                  : state.evs
              }
              isFromStorage={isFromStorage}
              name={state.name}
              stateClickedFromMap={
                stateClicked?.split('-')[0] === state.stateCode
                  ? stateClicked
                  : 'false'
              }
              stateCode={state.stateCode}
              stateEvs={state.stateEvs}
              stateWinnerData={[newStateData]}
              toggleWinner={toggleWinner}
              winner={state.winner || '0'}
            />
            <PopularVotes
              autoModeToggleWinner={toggleWinner}
              currentPVTotals={currentPVTotals}
              dataMode={dataMode}
              evs={
                state.stateEvs && dataMode === 'auto'
                  ? state.stateEvs
                  : state.evs
              }
              handlePropVotes={handlePropVotes}
              hasClearedSavedData={clearPopularVotes}
              name={state.name}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore for `i`, which is the index in the array
              popVotesData={popVotesData?.[i - indexOffset]}
              proportionalReawardMode={proportionalReawardMode}
              stateEvs={state.stateEvs as string}
              showPopVotes={showPopVotes}
            />
          </div>
        );
      } else if (dataMode === 'auto') {
        indexOffset++;
      } else if (dataMode === 'manual') {
        return (
          <div
            className={`state-control ${stateControlSize}`}
            key={`state-${i}`}
          >
            <State
              dataMode={dataMode}
              evs={state.evs}
              isFromStorage={isFromStorage}
              name={state.name}
              stateClickedFromMap={'false'}
              stateCode={state.stateCode}
              stateEvs={state.stateEvs}
              stateWinnerData={[newStateData]}
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
        dataMode={dataMode}
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
        {renderStates(stateClickedFromMap, statesDataToUse)}
      </div>
    </div>
  );
};

export default States;
