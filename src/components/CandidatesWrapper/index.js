import { useEffect, useState } from 'react';
import { arrayOf, number, shape, string } from 'prop-types';
import { checkForWinner, getWinnerClassName, getWinnerName } from '../../utilities';
import Candidates from '../Candidates';

const CandidatesWrapper = ({
  candidates,
  evPct,
  popVoteTotals,
  pvPct,
  winnerTakeAllTotals
}) => {
  const [wtaWinnerIndex, setWtaWinnerIndex] = useState(checkForWinner(winnerTakeAllTotals));
  const [propWinnerIndex, setPropWinnerIndex] = useState(checkForWinner(popVoteTotals));
  const [wtaWinnerName, setWtaWinnerName] = useState(getWinnerName((wtaWinnerIndex + 1)));
  const [propWinnerName, setPropWinnerName] = useState(getWinnerName((propWinnerIndex + 1)));
  const [wtaWinnerClassName, setWtaWinnerClassName] = useState(getWinnerClassName((wtaWinnerIndex + 1)));
  const [propWinnerClassName, setPropWinnerClassName] = useState(getWinnerClassName((propWinnerIndex + 1)));

  useEffect(() => {
    setPropWinnerIndex(checkForWinner(pvPct));
  }, [ pvPct ]);

  useEffect(() => {
    setWtaWinnerIndex(checkForWinner(evPct));
  }, [ evPct ]);

  useEffect(() => {
    const index = propWinnerIndex + 1;
    const name = getWinnerName(index);
    setPropWinnerName(name);
    setPropWinnerClassName(getWinnerClassName(index));
  }, [ propWinnerIndex ]);

  useEffect(() => {
    const index = wtaWinnerIndex + 1;
    const name = getWinnerName(index);
    setWtaWinnerName(name);
    setWtaWinnerClassName(getWinnerClassName(index));
  }, [ wtaWinnerIndex ]);

  const calculateUnawardedEvsPct = percentages => {
    const awardedEvsPct = percentages.reduce((a, b) => a + b, 0);
    return (100 - awardedEvsPct);
  };

  return (
    <div>
      <h1>Electoral College 2024</h1>
      <div className='votes-counter' id='ev-votes-counter'>
        <h3>Winner-Take-All Electoral Votes Counter</h3>
        <h3 className={`wta-winner ${wtaWinnerClassName} ${wtaWinnerIndex > -1 ? 'show' : 'hide'}`}>
          {`Winner: ${wtaWinnerName}`}
        </h3>
        <div>
          <div className='votes-winner-line'></div>
          <div className='votes-parties'>
            <span className='gop-votes' style={{'width': evPct[0] + '%'}} />
            <span className='lib-votes' style={{'width': evPct[2] + '%'}} />
            <span className='unawarded-votes' style={{'width': calculateUnawardedEvsPct(evPct) + '%'}} />
            <span className='grn-votes' style={{'width': evPct[3] + '%'}} />
            <span className='ind-votes' style={{'width': evPct[4] + '%'}} />
            <span className='dem-votes' style={{'width': evPct[1] + '%'}} />
          </div>
        </div>
      </div>
      <div className='votes-counter' id='pop-votes-counter'>
        <h3>Proportional Electoral Votes Counter</h3>
        <h3 className={`prop-winner ${propWinnerClassName} ${propWinnerIndex > -1 ? 'show' : 'hide'}`}>
          {`Winner: ${propWinnerName}`}
        </h3>
        <div>
          <div className='votes-winner-line'></div>
          <div className='votes-parties'>
            <span className='gop-votes' style={{'width': pvPct[0] + '%'}} />
            <span className='lib-votes' style={{'width': pvPct[2] + '%'}} />
            <span className='unawarded-votes' style={{'width': calculateUnawardedEvsPct(pvPct) + '%'}} />
            <span className='grn-votes' style={{'width': pvPct[3] + '%'}} />
            <span className='ind-votes' style={{'width': pvPct[4] + '%'}} />
            <span className='dem-votes' style={{'width': pvPct[1] + '%'}} />
          </div>
        </div>
      </div>
      <Candidates
        candidatesData={candidates}
        popularVoteTotals={popVoteTotals}
        winnerTakeAllTotals={winnerTakeAllTotals} />
    </div>
  );
};

CandidatesWrapper.propTypes = {
  candidates: arrayOf(shape({
    name: string.isRequired,
    party: string.isRequired
  })).isRequired,
  evPct: arrayOf(number).isRequired,
  popVoteTotals: arrayOf(number).isRequired,
  pvPct: arrayOf(number).isRequired,
  winnerTakeAllTotals: arrayOf(number).isRequired
};

export default CandidatesWrapper;
