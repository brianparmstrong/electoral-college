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
  const isFromStorage = Boolean(localStorage.getItem('ElectoralCollegeStatus'));
  const startingEVTotals = isFromStorage
    ? JSON.parse(localStorage.getItem('WinnerTakeAllTotals') as string)
    : [0, 0, 0, 0, 0];
  const [popularVoteTotals, setPopularVoteTotals] = useState(
    isFromStorage
      ? JSON.parse(localStorage.getItem('PopularVoteTotals') as string)
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
  const statesData = isFromStorage
    ? JSON.parse(localStorage.getItem('ElectoralCollegeStatus') as string)
    : STATES_DATA;
  const popVotesData = isFromStorage
    ? JSON.parse(localStorage.getItem('PopularVoteStatus') as string)
    : [];

  useEffect(() => {
    if (enableStickyEVCounter) {
      window.onscroll = () => checkForStickyEVCounter();
    }
  });

  useEffect(() => {
    if (!isFromStorage) {
      alert('no saved data so loading blank');
    }
  }, [isFromStorage]);

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

  return (
    <div className="App">
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
        isFromStorage={isFromStorage}
        popVotesData={popVotesData}
        statesData={statesData}
      />
      <div id="buttons">
        <SaveButton
          currentEVTotals={winnerTakeAllTotals}
          currentPVTotals={popularVoteTotals}
        />
        <ClearButton />
      </div>
    </div>
  );
};

export default ElectoralCollege;
