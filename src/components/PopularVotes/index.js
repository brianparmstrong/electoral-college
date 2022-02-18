import { arrayOf, bool, func, number, oneOfType, shape, string } from 'prop-types';
import PopularVoteInput from '../PopularVoteInput';
import { PARTY_MAP } from '../../constants';

const PopularVotes = ({
  currentPVTotals,
  evs,
  handlePropVotes,
  name,
  popVotesData,
  showPopVotes,
  stateEvs
}) => {
  const popVotesDataValues = popVotesData ? popVotesData.values : [0, 0, 0, 0, 0];
  const wrapperClass = showPopVotes ? '' : 'hide';

  const renderPopVoteInput = () => {
    return popVotesDataValues.map((value, i) => {
      return (
        <PopularVoteInput
          currentPVTotals={currentPVTotals}
          evs={evs}
          handlePropVotes={handlePropVotes}
          key={`${name}-${PARTY_MAP[i]}`}
          name={name}
          party={PARTY_MAP[i]}
          percent={value}
          stateEvs={stateEvs} />
      );
    });
  };

  return (
    <div className={`popVotesWrapper ${wrapperClass}`}>
      {renderPopVoteInput()}
    </div>
  ); 
};

PopularVotes.propTypes = {
  currentPVTotals: arrayOf(number).isRequired,
  evs: oneOfType([number, string]).isRequired,
  handlePropVotes: func.isRequired,
  name: string.isRequired,
  popVotesData: shape({
    name: string,
    values: arrayOf(string).isRequired
  }),
  showPopVotes: bool.isRequired,
  stateEvs: number
};

export default PopularVotes;
