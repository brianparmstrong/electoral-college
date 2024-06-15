import Candidate from '../Candidate';
import { IfcCandidates } from '../../types';

const Candidates = (candidates: IfcCandidates) => {
  const { candidatesData, popularVoteTotals, winnerTakeAllTotals } = candidates;
  const candidatesMap = candidatesData.map((candidate, i) => (
    <Candidate
      name={candidate.name}
      key={`candidate-${i}`}
      party={candidate.party}
      popularVoteTotals={popularVoteTotals[i]}
      winnerTakeAllTotal={winnerTakeAllTotals[i]}
    />
  ));
  return <div className="candidatesWrapper">{candidatesMap}</div>;
};

export default Candidates;
