import { useEffect, useState } from 'react';
import PopularVoteInput from '../PopularVoteInput';
import { PARTY_MAP, STATES_DATA } from '../../constants';
import { IfcPopularVotes } from '../../types';
import { calculateStateEVsFromPVs } from '../../utilities';

const PopularVotes = (popularVotes: IfcPopularVotes) => {
  const {
    autoModeToggleWinner,
    currentPVTotals,
    dataMode,
    evs,
    handlePropVotes,
    hasClearedSavedData,
    name,
    popVotesData,
    proportionalReawardMode,
    showPopVotes,
    stateEvs,
  } = popularVotes;
  const popVotesDataValues = popVotesData
    ? popVotesData.values
    : ['0', '0', '0', '0', '0'];
  const wrapperClass = showPopVotes ? '' : 'hide';
  const [clearInputs, setClearInputs] = useState<'false' | 'true'>(
    hasClearedSavedData
  );
  const [hasCalculatedEVsFromPVs, setHasCalculatedEVsFromPVs] =
    useState<boolean>(false);

  useEffect(() => {
    setClearInputs(hasClearedSavedData);
  }, [hasClearedSavedData]);

  useEffect(() => {
    if (
      dataMode === 'auto' &&
      !hasCalculatedEVsFromPVs &&
      popVotesDataValues.filter((value) => Number(value) > 0).length > 0
    ) {
      setHasCalculatedEVsFromPVs(true);
      const stateId = STATES_DATA.find((state) => state.name === name)
        ?.stateCode as string;
      const numericVoteTotals = popVotesDataValues.map((votes) =>
        Number(votes)
      );
      const mostVotes = Math.max(...numericVoteTotals);
      const newWinningParty = String(
        numericVoteTotals.findIndex((votes) => votes === mostVotes) + 1
      );
      const evsFromPVs = calculateStateEVsFromPVs({
        proportionalReawardMode,
        stateEVs: Number(evs),
        voteTotals: popVotesDataValues,
      });
      handlePropVotes(evsFromPVs);
      autoModeToggleWinner({
        evs: Number(evs),
        newWinningParty,
        stateId,
      });
    }
  }, [
    dataMode,
    evs,
    handlePropVotes,
    hasCalculatedEVsFromPVs,
    proportionalReawardMode,
    popVotesDataValues,
    setHasCalculatedEVsFromPVs,
  ]);

  const renderPopVoteInput = () =>
    popVotesDataValues.map((value: string, i: number) => (
      <PopularVoteInput
        currentPVTotals={currentPVTotals}
        evs={evs}
        handlePropVotes={handlePropVotes}
        hasClearedSavedData={clearInputs}
        isReadOnly={dataMode === 'auto'}
        key={`${name}-${PARTY_MAP[i]}`}
        name={name}
        party={PARTY_MAP[i]}
        percent={clearInputs === 'true' ? '0' : popVotesData && value}
        stateEvs={stateEvs}
      />
    ));

  return (
    <div className={`popVotesWrapper ${wrapperClass}`}>
      {renderPopVoteInput()}
    </div>
  );
};

export default PopularVotes;
