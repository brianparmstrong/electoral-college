import React, { useEffect, useRef, useState } from 'react';
import { bool, func, number, oneOfType, string } from 'prop-types';
import { getWinnerClassName } from '../../utilities';

const State = ({
  evs,
  isFromStorage,
  name,
  stateClickedFromMap,
  stateCode,
  stateEvs,
  toggleWinner,
  winner
}) => {
  const stateNode = useRef(null);
  const [winningParty, setWinningParty] = useState(
    isFromStorage ?
    Number(winner) :
    0
  );
  const [winningPartyClass, setWinningPartyClass] = useState(getWinnerClassName(winner));

  useEffect(() => {
    stateClickedFromMap && stateNode.current.click();
  }, [ stateClickedFromMap ]);

  const updateWinningParty = e => {
    const newWinningParty = (winningParty === 5) ? 0 : (winningParty + 1);
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
      newWinningParty,
      newWinningTargetElem: `${newWinningPartyClass}-wta`,
      stateId: e.target.getAttribute('data-statecode')
    };

    setWinningParty(newWinningParty);
    setWinningPartyClass(newWinningPartyClass);
    toggleWinner(newData);
  };

  return (
    <div className='stateWrapper' id={name}>
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
        tabIndex='0' >
        <span className='evs'>{evs}</span>
      </div>
      <p className='stateName'>{name}</p>
    </div>
  );
};

State.propTypes = {
  evs: oneOfType([number, string]).isRequired,
  isFromStorage: bool.isRequired,
  name: string.isRequired,
  stateClickedFromMap: oneOfType([ bool, string]),
  stateCode: string.isRequired,
  stateEvs: number,
  toggleWinner: func.isRequired,
  winner: string
};

export default State;
