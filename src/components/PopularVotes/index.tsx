import PopularVoteInput from '../PopularVoteInput';
import { PARTY_MAP } from '../../constants';
import { IfcPopularVotes } from '../../types';

const PopularVotes = (popularVotes: IfcPopularVotes) => {
  const {
    currentPVTotals,
    evs,
    handlePropVotes,
    name,
    popVotesData,
    showPopVotes,
    stateEvs,
  } = popularVotes;
  const popVotesDataValues = popVotesData
    ? popVotesData.values
    : [0, 0, 0, 0, 0];
  const wrapperClass = showPopVotes ? '' : 'hide';

  const renderPopVoteInput = () => {
    return popVotesDataValues.map((value: number, i: number) => {
      return (
        <PopularVoteInput
          currentPVTotals={currentPVTotals}
          evs={evs}
          handlePropVotes={handlePropVotes}
          key={`${name}-${PARTY_MAP[i]}`}
          name={name}
          party={PARTY_MAP[i]}
          percent={popVotesData && String(value)}
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
