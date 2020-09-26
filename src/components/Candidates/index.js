import React from 'react';
import { arrayOf, number, shape, string } from 'prop-types';
import Candidate from '../Candidate';

const Candidates = ({
  candidatesData,
  popularVoteTotals,
  winnerTakeAllTotals
}) => {
  const candidates = candidatesData.map((candidate, i) => {
    return (
      <Candidate
        name={candidate.name}
        key={`candidate-${i}`}
        party={candidate.party}
        popularVoteTotals={popularVoteTotals[i]}
        winner={candidate.winner}
        winnerTakeAllTotal={winnerTakeAllTotals[i]} />
    );
  });
  return (
    <div className='candidatesWrapper'>{candidates}</div>
  );
};

Candidates.propTypes = {
  candidatesData: arrayOf(shape({
    name: string.isRequired,
    party: string.isRequired
  })).isRequired,
  popularVoteTotals: arrayOf(number).isRequired,
  winnerTakeAllTotals: arrayOf(number).isRequired
};

export default Candidates;
