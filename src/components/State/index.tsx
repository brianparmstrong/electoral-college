import { MouseEvent, useEffect, useRef, useState } from 'react';
import { IfcState } from '../../types';
import { getWinnerClassName } from '../../utilities';

const State = (stateInfo: IfcState) => {
  const {
    dataMode,
    evs,
    isFromStorage,
    name,
    stateClickedFromMap,
    stateCode,
    stateEvs,
    stateWinnerData,
    toggleWinner,
    winner,
  } = stateInfo;

  const stateNode = useRef(null);
  const [winningParty, setWinningParty] = useState<number>(
    isFromStorage || dataMode === 'auto' ? Number(winner) : 0
  );
  const [winningPartyClass, setWinningPartyClass] = useState(
    getWinnerClassName(winner)
  );

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore for click() not existing on type never
    stateClickedFromMap !== 'false' && stateNode?.current?.click();
  }, [stateClickedFromMap]);

  useEffect(() => {
    if (stateWinnerData?.[0]?.stateId === stateCode) {
      const newWinningParty = stateWinnerData?.[0].newWinningParty;
      const newWinningPartyClass = getWinnerClassName(newWinningParty);
      setWinningParty(Number(newWinningParty));
      setWinningPartyClass(newWinningPartyClass);
    }
  }, [stateWinnerData]);

  const updateWinningParty = (event: MouseEvent<HTMLDivElement>) => {
    if (dataMode === 'manual') {
      const newWinningParty = winningParty === 5 ? 0 : winningParty + 1;
      const newWinningPartyClass = getWinnerClassName(String(newWinningParty));

      const newData = {
        evs: Number(evs),
        newWinningParty: String(newWinningParty),
        stateId: event.currentTarget.dataset.statecode as string,
      };

      setWinningParty(newWinningParty);
      setWinningPartyClass(newWinningPartyClass);
      toggleWinner(newData);
    }
  };

  useEffect(() => {
    setWinningParty(Number(winner));
    setWinningPartyClass(getWinnerClassName(winner));
  }, [winner]);

  return (
    <div className="stateWrapper" id={name.trim()}>
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
