import Candidate from '../Candidate';
import { CandidateImageSrc, IfcCandidates } from '../../types';

const Candidates = (candidates: IfcCandidates) => {
  const {
    candidateImageSources,
    candidatesData,
    popularVoteTotals,
    winnerTakeAllTotals,
  } = candidates;
  const candidatesMap = candidatesData.map((candidate, i) => (
    <Candidate
      imageSrc={
        candidateImageSources[candidate.party as keyof CandidateImageSrc]
      }
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
