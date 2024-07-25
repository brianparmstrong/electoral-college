import { useEffect, useState } from 'react';
import CandidatesWrapper from '../CandidatesWrapper';
import ClearButton from '../ClearButton';
import SaveButton from '../SaveButton';
import States from '../States';
import { STATES_DATA } from '../../constants';
import { calculateEVPercentage } from '../../utilities';
import '../../style.scss';
import { IfcElectoralCollegeProps } from '../../types';

const checkForStickyEVCounter = () => {
  const candidatesEVCounter = document.querySelector('.candidatesWrapper');

  if (candidatesEVCounter instanceof HTMLElement) {
    const candidatesEVCounterOffsetTop = candidatesEVCounter.offsetTop;

    if (window.pageYOffset > candidatesEVCounterOffsetTop) {
      candidatesEVCounter.classList.add('sticky');
    } else {
      candidatesEVCounter.classList.remove('sticky');
    }
  }
};

const ElectoralCollege = (props: IfcElectoralCollegeProps) => {
  const {
    candidateImageSources,
    candidatesData,
    enableStickyEVCounter = true,
  } = props;
  const [isFromStorage, setIsFromStorage] = useState<boolean>(
    Boolean(localStorage?.getItem('ElectoralCollegeStatus'))
  );
  const startingEVTotals = isFromStorage
    ? JSON.parse(localStorage?.getItem('WinnerTakeAllTotals') as string)
    : [0, 0, 0, 0, 0];
  const [popularVoteTotals, setPopularVoteTotals] = useState(
    isFromStorage
      ? JSON.parse(localStorage?.getItem('PopularVoteTotals') as string)
      : [0, 0, 0, 0, 0]
  );
  const [gopTotal, setGopTotal] = useState(startingEVTotals[0]);
  const [demTotal, setDemTotal] = useState(startingEVTotals[1]);
  const [libTotal, setLibTotal] = useState(startingEVTotals[2]);
  const [grnTotal, setGrnTotal] = useState(startingEVTotals[3]);
  const [indTotal, setIndTotal] = useState(startingEVTotals[4]);
  const [winnerTakeAllTotals, setWinnerTakeAllTotals] = useState([
    gopTotal,
    demTotal,
    libTotal,
    grnTotal,
    indTotal,
  ]);
  const [evPct, setEvPct] = useState(
    winnerTakeAllTotals.map((total: number) => calculateEVPercentage(total))
  );
  const [pvPct, setPvPct] = useState(
    popularVoteTotals.map((total: number) => calculateEVPercentage(total))
  );
  const [showSavedMessage, setShowSavedMessage] = useState<boolean>(false);
  const [showClearedMessage, setShowClearedMessage] = useState<boolean>(false);
  const [hasClearedSavedData, setHasClearedSavedData] = useState<
    'false' | 'true'
  >('false');
  const [statesData, setStatesData] = useState(
    isFromStorage
      ? JSON.parse(localStorage.getItem('ElectoralCollegeStatus') as string)
      : STATES_DATA
  );
  const [popVotesData, setPopVotesData] = useState(
    isFromStorage
      ? JSON.parse(localStorage.getItem('PopularVoteStatus') as string)
      : []
  );

  useEffect(() => {
    if (enableStickyEVCounter) {
      window.onscroll = () => checkForStickyEVCounter();
    }
  });

  useEffect(() => {
    setShowClearedMessage(showClearedMessage);
  }, [showClearedMessage]);

  useEffect(() => {
    setShowSavedMessage(showSavedMessage);
  }, [showSavedMessage]);

  const handlePropVotes = (newPVTotals: Array<number>) => {
    const gopPvPct = calculateEVPercentage(newPVTotals[0]);
    const demPvPct = calculateEVPercentage(newPVTotals[1]);
    const libPvPct = calculateEVPercentage(newPVTotals[2]);
    const grnPvPct = calculateEVPercentage(newPVTotals[3]);
    const indPvPct = calculateEVPercentage(newPVTotals[4]);

    setPopularVoteTotals(newPVTotals);
    setPvPct([gopPvPct, demPvPct, libPvPct, grnPvPct, indPvPct]);
  };

  const handleStateWinner = (newEVTotals: Array<number>) => {
    const gopPct = calculateEVPercentage(newEVTotals[0]);
    const demPct = calculateEVPercentage(newEVTotals[1]);
    const libPct = calculateEVPercentage(newEVTotals[2]);
    const grnPct = calculateEVPercentage(newEVTotals[3]);
    const indPct = calculateEVPercentage(newEVTotals[4]);

    setGopTotal(newEVTotals[0]);
    setDemTotal(newEVTotals[1]);
    setLibTotal(newEVTotals[2]);
    setGrnTotal(newEVTotals[3]);
    setIndTotal(newEVTotals[4]);
    setWinnerTakeAllTotals(newEVTotals);
    setEvPct([gopPct, demPct, libPct, grnPct, indPct]);
  };

  const resetWidget = () => {
    handleStateWinner([0, 0, 0, 0, 0]);
    handlePropVotes([0, 0, 0, 0, 0]);
    setStatesData(STATES_DATA);
    setPopVotesData([]);
    setPopularVoteTotals([0, 0, 0, 0, 0]);
    setHasClearedSavedData('true');
    setIsFromStorage(false);
  };

  const handleClear = () => {
    resetWidget();
    setShowSavedMessage(false);
    setShowClearedMessage(true);
    setTimeout(() => {
      setShowClearedMessage(false);
      setHasClearedSavedData('false');
    }, 3000);
  };

  const handleSave = () => {
    setStatesData(
      JSON.parse(localStorage.getItem('ElectoralCollegeStatus') as string)
    );
    setIsFromStorage(true);
    setShowClearedMessage(false);
    setShowSavedMessage(true);
    setTimeout(() => setShowSavedMessage(false), 3000);
  };

  return (
    <div className="electoral-college-root">
      <CandidatesWrapper
        candidateImageSources={candidateImageSources}
        candidates={candidatesData}
        evPct={evPct}
        pvPct={pvPct}
        popVoteTotals={popularVoteTotals}
        winnerTakeAllTotals={winnerTakeAllTotals}
      />
      <States
        currentEVTotals={winnerTakeAllTotals}
        currentPVTotals={popularVoteTotals}
        handlePropVotes={handlePropVotes}
        handleStateWinner={handleStateWinner}
        hasClearedSavedData={hasClearedSavedData}
        isFromStorage={isFromStorage}
        popVotesData={popVotesData}
        statesData={statesData}
      />
      {typeof Storage !== 'undefined' && (
        <div id="buttons">
          <SaveButton
            currentEVTotals={winnerTakeAllTotals}
            currentPVTotals={popularVoteTotals}
            handleSave={handleSave}
          />
          {isFromStorage && <ClearButton handleClear={handleClear} />}
          <p className={`${showSavedMessage ? 'show' : 'hide'}`}>Saved!</p>
          <p className={`${showClearedMessage ? 'show' : 'hide'}`}>Cleared!</p>
        </div>
      )}
    </div>
  );
};

export default ElectoralCollege;
