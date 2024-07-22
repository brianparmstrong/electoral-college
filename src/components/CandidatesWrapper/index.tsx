import { useEffect, useState } from 'react';
import { IfcCandidatesWrapper } from '../../types';
import {
  checkForWinner,
  getWinnerClassName,
  getWinnerName,
} from '../../utilities';
import Candidates from '../Candidates';

const CandidatesWrapper = (candidatesWrapper: IfcCandidatesWrapper) => {
  const {
    candidateImageSources,
    candidates,
    evPct,
    popVoteTotals,
    pvPct,
    winnerTakeAllTotals,
  } = candidatesWrapper;
  const [wtaWinnerIndex, setWtaWinnerIndex] = useState<number>(
    checkForWinner(winnerTakeAllTotals)
  );
  const [propWinnerIndex, setPropWinnerIndex] = useState<number>(
    checkForWinner(popVoteTotals)
  );
  const [wtaWinnerName, setWtaWinnerName] = useState<string>(
    getWinnerName(String(wtaWinnerIndex + 1))
  );
  const [propWinnerName, setPropWinnerName] = useState<string>(
    getWinnerName(String(propWinnerIndex + 1))
  );
  const [wtaWinnerClassName, setWtaWinnerClassName] = useState<string>(
    getWinnerClassName(String(wtaWinnerIndex + 1))
  );
  const [propWinnerClassName, setPropWinnerClassName] = useState<string>(
    getWinnerClassName(String(propWinnerIndex + 1))
  );

  useEffect(() => {
    setPropWinnerIndex(checkForWinner(pvPct));
  }, [pvPct]);

  useEffect(() => {
    setWtaWinnerIndex(checkForWinner(evPct));
  }, [evPct]);

  useEffect(() => {
    const index = String(propWinnerIndex + 1);
    const name = getWinnerName(index);
    setPropWinnerName(name);
    setPropWinnerClassName(getWinnerClassName(index));
  }, [propWinnerIndex]);

  useEffect(() => {
    const index = String(wtaWinnerIndex + 1);
    const name = getWinnerName(index);
    setWtaWinnerName(name);
    setWtaWinnerClassName(getWinnerClassName(index));
  }, [wtaWinnerIndex]);

  const calculateUnawardedEvsPct = (percentages: Array<number>) => {
    const awardedEvsPct = percentages.reduce((a, b) => a + b, 0);
    return 100 - awardedEvsPct;
  };

  return (
    <div>
      <h1>Electoral College 2024</h1>
      <div className="votes-counter" id="ev-votes-counter">
        <h3>Winner-Take-All Electoral Votes Counter</h3>
        <h3
          className={`wta-winner ${wtaWinnerClassName} ${
            wtaWinnerIndex > -1 ? 'show' : 'hide'
          }`}
        >
          {`Winner: ${wtaWinnerName}`}
        </h3>
        <div>
          <div className="votes-winner-line"></div>
          <div className="votes-parties">
            <span className="gop-votes" style={{ width: evPct[0] + '%' }} />
            <span className="lib-votes" style={{ width: evPct[2] + '%' }} />
            <span
              className="unawarded-votes"
              style={{ width: calculateUnawardedEvsPct(evPct) + '%' }}
            />
            <span className="grn-votes" style={{ width: evPct[3] + '%' }} />
            <span className="ind-votes" style={{ width: evPct[4] + '%' }} />
            <span className="dem-votes" style={{ width: evPct[1] + '%' }} />
          </div>
        </div>
      </div>
      <div className="votes-counter" id="pop-votes-counter">
        <h3>Proportional Electoral Votes Counter</h3>
        <h3
          className={`prop-winner ${propWinnerClassName} ${
            propWinnerIndex > -1 ? 'show' : 'hide'
          }`}
        >
          {`Winner: ${propWinnerName}`}
        </h3>
        <div>
          <div className="votes-winner-line"></div>
          <div className="votes-parties">
            <span className="gop-votes" style={{ width: pvPct[0] + '%' }} />
            <span className="lib-votes" style={{ width: pvPct[2] + '%' }} />
            <span
              className="unawarded-votes"
              style={{ width: calculateUnawardedEvsPct(pvPct) + '%' }}
            />
            <span className="grn-votes" style={{ width: pvPct[3] + '%' }} />
            <span className="ind-votes" style={{ width: pvPct[4] + '%' }} />
            <span className="dem-votes" style={{ width: pvPct[1] + '%' }} />
          </div>
        </div>
      </div>
      <Candidates
        candidateImageSources={candidateImageSources}
        candidatesData={candidates}
        popularVoteTotals={popVoteTotals}
        winnerTakeAllTotals={winnerTakeAllTotals}
      />
    </div>
  );
};

export default CandidatesWrapper;
