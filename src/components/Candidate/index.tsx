import ElectoralVotes from '../ElectoralVotes';
import * as assets from '../../assets';
import { IfcCandidate } from '../../types';

const Candidate = (candidate: IfcCandidate) => {
  const { name, party, popularVoteTotals, winnerTakeAllTotal } = candidate;
  const src = assets[`${name.toLowerCase()}Img`];
  return (
    <div className="candidate" id={name}>
      <h2>{candidate.name}</h2>
      <img src={src} alt={name} />
      <ElectoralVotes
        party={party}
        popularVoteTotals={popularVoteTotals}
        winnerTakeAllTotal={winnerTakeAllTotal}
      />
    </div>
  );
};

export default Candidate;
