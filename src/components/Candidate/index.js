import { number, string } from 'prop-types';
import ElectoralVotes from '../ElectoralVotes';
import * as assets from '../../assets';

const Candidate = ({
  name,
  party,
  popularVoteTotals,
  winnerTakeAllTotal
}) => {
  const src = assets[`${name.toLowerCase()}Img`];
  return (
    <div className='candidate' id={name}>
        <h2>{name}</h2>
        <img src={src} alt={name}/>
        <ElectoralVotes
          party={party}
          popularVoteTotals={popularVoteTotals}
          winnerTakeAllTotal={winnerTakeAllTotal} />
    </div>
  );
};

Candidate.propTypes = {
  name: string,
  party: string,
  popularVoteTotals: number,
  winnerTakeAllTotal: number
};

export default Candidate;
