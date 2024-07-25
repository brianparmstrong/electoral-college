import { useEffect, useState } from 'react';
import PopularVoteInput from '../PopularVoteInput';
import { PARTY_MAP } from '../../constants';
import { IfcPopularVotes } from '../../types';

const PopularVotes = (popularVotes: IfcPopularVotes) => {
  const {
    currentPVTotals,
    evs,
    handlePropVotes,
    hasClearedSavedData,
    name,
    popVotesData,
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

  useEffect(() => {
    setClearInputs(hasClearedSavedData);
  }, [hasClearedSavedData]);

  const renderPopVoteInput = () => {
    return popVotesDataValues.map((value: string, i: number) => {
      return (
        <PopularVoteInput
          currentPVTotals={currentPVTotals}
          evs={evs}
          handlePropVotes={handlePropVotes}
          hasClearedSavedData={clearInputs}
          key={`${name}-${PARTY_MAP[i]}`}
          name={name}
          party={PARTY_MAP[i]}
          percent={clearInputs === 'true' ? '0' : popVotesData && value}
          stateEvs={stateEvs}
        />
      );
    });
  };

  return (
    <div className={`popVotesWrapper ${wrapperClass}`}>
      {renderPopVoteInput()}
    </div>
  );
};

export default PopularVotes;
