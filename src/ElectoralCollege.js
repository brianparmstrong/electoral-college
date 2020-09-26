import React, { useEffect, useState } from 'react';
import {
  CandidatesWrapper,
  ClearButton,
  SaveButton,
  States
} from './components';
import {
  CANDIDATES_DATA,
  STATES_DATA
} from './constants';
import {
  calculateEVPercentage
} from './utilities';

const ElectoralCollege = () => {
  const isFromStorage = Boolean(localStorage.getItem('ElectoralCollegeStatus'));
  const startingEVTotals = isFromStorage ?
    JSON.parse(localStorage.getItem('WinnerTakeAllTotals')) :
    [0, 0, 0, 0, 0];
  const [popularVoteTotals, setPopularVoteTotals] = useState(
    isFromStorage ?
    JSON.parse(localStorage.getItem('PopularVoteTotals')) :
    [0, 0, 0, 0, 0]
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
    indTotal
  ]);
  const [evPct, setEvPct] = useState(winnerTakeAllTotals.map(total => calculateEVPercentage(total)));
  const [pvPct, setPvPct] = useState(popularVoteTotals.map(total => calculateEVPercentage(total)));
  const statesData = isFromStorage ?
    JSON.parse(localStorage.getItem('ElectoralCollegeStatus')) :
    STATES_DATA;
  const popVotesData = isFromStorage ?
    JSON.parse(localStorage.getItem('PopularVoteStatus')) :
    [];

  useEffect(() => {
    if (!isFromStorage) {
      alert('no saved data so loading blank');
    }
  }, [isFromStorage]);

  const handlePropVotes = newPVTotals => {
    const gopPvPct = calculateEVPercentage(newPVTotals[0]);
    const demPvPct = calculateEVPercentage(newPVTotals[1]);
    const libPvPct = calculateEVPercentage(newPVTotals[2]);
    const grnPvPct = calculateEVPercentage(newPVTotals[3]);
    const indPvPct = calculateEVPercentage(newPVTotals[4]);

    setPopularVoteTotals(newPVTotals);
    setPvPct([ gopPvPct, demPvPct, libPvPct, grnPvPct, indPvPct ]);
  };

  const handleStateWinner = newEVTotals => {
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
    setEvPct([ gopPct, demPct, libPct, grnPct, indPct ]);
  };

  return (
    <div className="App">
      <CandidatesWrapper
        candidates={CANDIDATES_DATA}
        evPct={evPct}
        pvPct={pvPct}
        popVoteTotals={popularVoteTotals}
        winnerTakeAllTotals={winnerTakeAllTotals} />
      <States
        currentEVTotals={winnerTakeAllTotals}
        currentPVTotals={popularVoteTotals}
        handlePropVotes={handlePropVotes}
        handleStateWinner={handleStateWinner}
        isFromStorage={isFromStorage}
        popVotesData={popVotesData}
        statesData={statesData} />
      <div id="buttons">
        <SaveButton 
          currentEVTotals={winnerTakeAllTotals}
          currentPVTotals={popularVoteTotals} />
        <ClearButton />
      </div>
    </div>
  );
}

export default ElectoralCollege;
