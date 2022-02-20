import { IfcElectoralVotes } from '../../types';

const ElectoralVotes = (electoralVotes: IfcElectoralVotes) => (
  <div className="electoralVotesWrapper">
    <p className="electoralVotesLabel">Winner-Take-All:</p>
    <span className="electoralVotes" id={`${electoralVotes.party}-wta`}>
      {electoralVotes.winnerTakeAllTotal}
    </span>
    <p className="electoralVotesLabel">Proportional:</p>
    <span className="electoralVotes" id={`${electoralVotes.party}-prop`}>
      {electoralVotes.popularVoteTotals}
    </span>
  </div>
);

export default ElectoralVotes;
