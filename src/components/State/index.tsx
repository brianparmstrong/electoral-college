import { MouseEvent, useEffect, useRef, useState } from 'react';
import { IfcState } from '../../types';
import { getWinnerClassName } from '../../utilities';

const State = (stateInfo: IfcState) => {
  const {
    evs,
    isFromStorage,
    name,
    stateClickedFromMap,
    stateCode,
    stateEvs,
    toggleWinner,
    winner,
  } = stateInfo;
  const stateNode = useRef(null);
  const [winningParty, setWinningParty] = useState(
    isFromStorage ? Number(winner) : 0
  );
  const [winningPartyClass, setWinningPartyClass] = useState(
    getWinnerClassName(winner)
  );

  useEffect(() => {
    stateClickedFromMap !== 'false' && stateNode.current.click();
  }, [stateClickedFromMap]);

  const updateWinningParty = (event: MouseEvent<HTMLDivElement>) => {
    const newWinningParty = winningParty === 5 ? 0 : winningParty + 1;
    let newWinningPartyClass = '';
    let newPreviousWinningPartyClass = '';

    switch (newWinningParty) {
      case 1:
        newWinningPartyClass = 'gop';
        newPreviousWinningPartyClass = '';
        break;
      case 2:
        newWinningPartyClass = 'dem';
        newPreviousWinningPartyClass = 'gop';
        break;
      case 3:
        newWinningPartyClass = 'lib';
        newPreviousWinningPartyClass = 'dem';
        break;
      case 4:
        newWinningPartyClass = 'grn';
        newPreviousWinningPartyClass = 'lib';
        break;
      case 5:
        newWinningPartyClass = 'ind';
        newPreviousWinningPartyClass = 'grn';
        break;
      default:
        newWinningPartyClass = '';
        newPreviousWinningPartyClass = 'ind';
        break;
    }

    const newData = {
      evs: parseInt(evs),
      newPreviousWinnerTargetElem: `${newPreviousWinningPartyClass}-wta`,
      newWinningParty: String(newWinningParty),
      newWinningTargetElem: `${newWinningPartyClass}-wta`,
      stateId: event.currentTarget.dataset.statecode,
    };

    setWinningParty(newWinningParty);
    setWinningPartyClass(newWinningPartyClass);
    toggleWinner(newData);
  };

  return (
    <div className="stateWrapper" id={name}>
      <div
        className={`state ${winningPartyClass}`}
        data-evs={evs}
        data-stateevs={stateEvs}
        data-fromstorage={isFromStorage}
        data-statecode={stateCode}
        data-statename={name}
        data-winner={winningParty}
        onClick={updateWinningParty}
        ref={stateNode}
        tabIndex={0}
      >
        <span className="evs">{evs}</span>
      </div>
      <p className="stateName">{name}</p>
    </div>
  );
};

export default State;
