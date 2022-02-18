import { number, string } from 'prop-types';

const ElectoralVotes = ({
  party,
  popularVoteTotals,
  winnerTakeAllTotal
}) => (
  <div className='electoralVotesWrapper'>
    <p className='electoralVotesLabel'>Winner-Take-All:</p>
    <span className='electoralVotes' id={`${party}-wta`}>{winnerTakeAllTotal}</span>
    <p className='electoralVotesLabel'>Proportional:</p>
    <span className='electoralVotes' id={`${party}-prop`}>{popularVoteTotals}</span>
  </div>
);

ElectoralVotes.propTypes = {
  party: string.isRequired,
  popularVoteTotals: number.isRequired,
  winnerTakeAllTotal: number.isRequired
};

export default ElectoralVotes;
