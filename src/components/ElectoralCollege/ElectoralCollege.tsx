import { useEffect, useState } from 'react';
import CandidatesWrapper from '../CandidatesWrapper';
import ClearButton from '../ClearButton';
import SaveButton from '../SaveButton';
import States from '../States';
import { STATES_DATA } from '../../constants';
import { calculateEVPercentage } from '../../utilities';
import '../../style.scss';
import { IfcElectoralCollegeProps, StatesData, WinnerData } from '../../types';

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
    dataMode = 'manual',
    enableStickyEVCounter = true,
    handlePropError,
    mapSize = 'large',
    proportionalReawardMode = 'stateWinner',
    stateControlSize = 'large',
    voteTotals,
  } = props;
  const renderErrorMessage = () => (
    <>
      This application is currently unable to display the Electoral College
      widget.
    </>
  );
  if (!candidatesData) {
    handlePropError &&
      handlePropError('candidatesData', 'candidatesData prop is required');
    return renderErrorMessage();
  }
  if (dataMode === 'auto' && voteTotals?.length !== 51) {
    handlePropError &&
      handlePropError(
        'voteTotals',
        'voteTotals prop is required in auto mode and must contain data for all 50 states plus Washington, D.C. Do not include data for the Congressional Districts of Maine and Nebraska'
      );
    return renderErrorMessage();
  }
  const [hasPropError, setHasPropError] = useState<boolean>(false);
  const [isFromStorage, setIsFromStorage] = useState<boolean>(
    dataMode === 'manual' &&
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
      : dataMode === 'auto'
        ? voteTotals
        : []
  );
  const [hasCalculatedAllEVsFromPVs, setHasCalculatedAllEVsFromPVs] =
    useState<boolean>(false);
  const cumulativePVTotals = [0, 0, 0, 0, 0];
  const cumulativeEVTotalsFromPVs = [0, 0, 0, 0, 0];
  const statesDataCopy = [...statesData];

  useEffect(() => {
    if (enableStickyEVCounter) {
      window.onscroll = () => checkForStickyEVCounter();
    }

    if (dataMode === 'auto' && !hasCalculatedAllEVsFromPVs) {
      setHasCalculatedAllEVsFromPVs(true);
      const gopEvPct = calculateEVPercentage(cumulativeEVTotalsFromPVs[0]);
      const demEvPct = calculateEVPercentage(cumulativeEVTotalsFromPVs[1]);
      const libEvPct = calculateEVPercentage(cumulativeEVTotalsFromPVs[2]);
      const grnEvPct = calculateEVPercentage(cumulativeEVTotalsFromPVs[3]);
      const indEvPct = calculateEVPercentage(cumulativeEVTotalsFromPVs[4]);

      const gopPvPct = calculateEVPercentage(cumulativePVTotals[0]);
      const demPvPct = calculateEVPercentage(cumulativePVTotals[1]);
      const libPvPct = calculateEVPercentage(cumulativePVTotals[2]);
      const grnPvPct = calculateEVPercentage(cumulativePVTotals[3]);
      const indPvPct = calculateEVPercentage(cumulativePVTotals[4]);

      setPopularVoteTotals(cumulativePVTotals);
      setPvPct([gopPvPct, demPvPct, libPvPct, grnPvPct, indPvPct]);

      setGopTotal(cumulativeEVTotalsFromPVs[0]);
      setDemTotal(cumulativeEVTotalsFromPVs[1]);
      setLibTotal(cumulativeEVTotalsFromPVs[2]);
      setGrnTotal(cumulativeEVTotalsFromPVs[3]);
      setIndTotal(cumulativeEVTotalsFromPVs[4]);
      setWinnerTakeAllTotals(cumulativeEVTotalsFromPVs);
      setEvPct([gopEvPct, demEvPct, libEvPct, grnEvPct, indEvPct]);
      setStatesData(statesDataCopy);
    }
  });

  useEffect(() => {
    setShowClearedMessage(showClearedMessage);
  }, [showClearedMessage]);

  useEffect(() => {
    setShowSavedMessage(showSavedMessage);
  }, [showSavedMessage]);

  useEffect(() => {
    if (voteTotals) {
      setPopVotesData(voteTotals);
    }
  }, [setPopVotesData, voteTotals]);

  const handlePropVotes = (newPVTotals: Array<number>) => {
    const gopPvPct = calculateEVPercentage(newPVTotals[0]);
    const demPvPct = calculateEVPercentage(newPVTotals[1]);
    const libPvPct = calculateEVPercentage(newPVTotals[2]);
    const grnPvPct = calculateEVPercentage(newPVTotals[3]);
    const indPvPct = calculateEVPercentage(newPVTotals[4]);

    setPopularVoteTotals(newPVTotals);
    setPvPct([gopPvPct, demPvPct, libPvPct, grnPvPct, indPvPct]);
  };

  const handlePropVotesInAutoMode = (newPVTotals: Array<number>) => {
    cumulativePVTotals[0] += newPVTotals[0];
    cumulativePVTotals[1] += newPVTotals[1];
    cumulativePVTotals[2] += newPVTotals[2];
    cumulativePVTotals[3] += newPVTotals[3];
    cumulativePVTotals[4] += newPVTotals[4];
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

  const handleStateWinnerInAutoMode = (
    newEVTotals: Array<number>,
    data?: WinnerData
  ) => {
    cumulativeEVTotalsFromPVs[0] += newEVTotals[0];
    cumulativeEVTotalsFromPVs[1] += newEVTotals[1];
    cumulativeEVTotalsFromPVs[2] += newEVTotals[2];
    cumulativeEVTotalsFromPVs[3] += newEVTotals[3];
    cumulativeEVTotalsFromPVs[4] += newEVTotals[4];

    const stateId = data?.stateId;
    const stateDataIndex = statesDataCopy.findIndex(
      (state) => state.stateCode === stateId
    );
    // typecasting because we know it will be defined
    const stateData = statesDataCopy.find(
      (state) => state.stateCode === stateId
    ) as StatesData;
    stateData.winner = data?.newWinningParty;
    statesDataCopy.splice(stateDataIndex, 1, stateData);
  };

  const resetWidget = () => {
    localStorage.removeItem('ElectoralCollegeStatus');
    localStorage.removeItem('PopularVoteStatus');
    localStorage.removeItem('PopularVoteTotals');
    localStorage.removeItem('WinnerTakeAllTotals');
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
    if (dataMode === 'manual') {
      setShowClearedMessage(false);
      setShowSavedMessage(true);
      setTimeout(() => setShowSavedMessage(false), 3000);
    }
  };

  const handleSubComponentPropError = (prop: string, errorMessage: string) => {
    handlePropError && handlePropError(prop, errorMessage);
    setHasPropError(true);
  };

  return hasPropError ? (
    renderErrorMessage()
  ) : (
    <div className={`electoral-college-root data-mode-${dataMode}`}>
      <CandidatesWrapper
        candidateImageSources={candidateImageSources}
        candidates={candidatesData}
        evPct={evPct}
        pvPct={pvPct}
        popVoteTotals={popularVoteTotals}
        renderPropErrorMessage={handleSubComponentPropError}
        winnerTakeAllTotals={winnerTakeAllTotals}
      />
      <States
        currentEVTotals={winnerTakeAllTotals}
        currentPVTotals={popularVoteTotals}
        dataMode={dataMode}
        handlePropVotes={
          dataMode === 'manual' ? handlePropVotes : handlePropVotesInAutoMode
        }
        handleStateWinner={
          dataMode === 'manual'
            ? handleStateWinner
            : handleStateWinnerInAutoMode
        }
        hasClearedSavedData={hasClearedSavedData}
        isFromStorage={isFromStorage}
        mapSize={mapSize}
        popVotesData={popVotesData}
        proportionalReawardMode={proportionalReawardMode}
        renderPropErrorMessage={handleSubComponentPropError}
        stateControlSize={stateControlSize}
        statesData={statesData}
      />
      {typeof Storage !== 'undefined' && dataMode === 'manual' && (
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
