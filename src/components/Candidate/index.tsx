import ElectoralVotes from '../ElectoralVotes';
import { IfcCandidate } from '../../types';

const Candidate = (candidate: IfcCandidate) => {
  const { imageSrc, name, party, popularVoteTotals, winnerTakeAllTotal } =
    candidate;
  return (
    <div className={`candidate candidate-${party}`}>
      <h2>{candidate.name}</h2>
      <img src={imageSrc} alt={name} />
      <ElectoralVotes
        party={party}
        popularVoteTotals={popularVoteTotals}
        winnerTakeAllTotal={winnerTakeAllTotal}
      />
    </div>
  );
};

export default Candidate;
