import React, { useState } from 'react';
import { arrayOf, func, number, oneOfType, string } from 'prop-types';

const PopularVoteInput = ({
  currentPVTotals,
  evs,
  handlePropVotes,
  name,
  party,
  percent,
  stateEvs
}) => {
  const initialInputValue = percent ? percent : '';
  const [evsAwarded, setEvsAwarded] = useState(0);
  const [inputValue, setInputValue] = useState(initialInputValue);
  const [savedValue, setSavedValue] = useState('');
  const inputId = party + 'PopVoteInput';
  const inputPlaceholder = `${party.toUpperCase()} %`;

  const calculateProportionalVotes = (e, value) => {
    const newInputValue = value ? Number(value) : (e && e.target) ? Number(e.target.value) : 0;
    let totalEvs = stateEvs ? stateEvs : evs;
    const popVotePercent = (Boolean(newInputValue) || percent) ? (newInputValue / 100) : 0;
    const evsWon = Math.round(totalEvs * popVotePercent);
    const polParty = (value || Boolean(e) === false) ? null : e.target.getAttribute('data-party');
    let newGopPropTotal = currentPVTotals[0];
    let newDemPropTotal = currentPVTotals[1];
    let newLibPropTotal = currentPVTotals[2];
    let newGrnPropTotal = currentPVTotals[3];
    let newIndPropTotal = currentPVTotals[4];

    if (Boolean(evsWon) && (newInputValue <= 100)) {
      switch (polParty) {
        case 'gop':
          newGopPropTotal += evsWon;
          break;
        case 'dem':
          newDemPropTotal += evsWon;
          break;
        case 'lib':
          newLibPropTotal += evsWon;
          break;
        case 'grn':
          newGrnPropTotal += evsWon;
          break;
        case 'ind':
          newIndPropTotal += evsWon;
          break;
        default:
          break;
      }

      const newPVTotals = [
        newGopPropTotal,
        newDemPropTotal,
        newLibPropTotal,
        newGrnPropTotal,
        newIndPropTotal
      ];

      if (e && e.target) {
        e.target.setAttribute('data-evsawarded', evsWon);
        handlePropVotes(newPVTotals);
      } else if (percent) {
        return evsWon;
      }
    }
  };

  const resetEvsWon = (e, newEvsAwarded) => {
    const politicalParty = e.target.getAttribute('data-party');
    let newGopPropTotal = currentPVTotals[0];
    let newDemPropTotal = currentPVTotals[1];
    let newLibPropTotal = currentPVTotals[2];
    let newGrnPropTotal = currentPVTotals[3];
    let newIndPropTotal = currentPVTotals[4];

    switch (politicalParty) {
      case 'gop':
        newGopPropTotal -= newEvsAwarded;
        break;
      case 'dem':
        newDemPropTotal -= newEvsAwarded;
        break;
      case 'lib':
        newLibPropTotal -= newEvsAwarded;
        break;
      case 'grn':
        newGrnPropTotal -= newEvsAwarded;
        break;
      case 'ind':
        newIndPropTotal -= newEvsAwarded;
        break;
      default:
        break;
    }

    const newPVTotals = [
        newGopPropTotal,
        newDemPropTotal,
        newLibPropTotal,
        newGrnPropTotal,
        newIndPropTotal
      ];

    e.target.setAttribute('data-evsawarded', 0);
    handlePropVotes(newPVTotals);
  };

  const handleInputBlur = e => {
    e.persist();
    if (inputValue !== '' && e.target.value === '') {
      setInputValue(savedValue);
      calculateProportionalVotes(null, savedValue);
    } else {
      calculateProportionalVotes(e);
    }
  };

  const handleInputFocus = e => {
    const evsAwardedData = Number(e.target.getAttribute('data-evsawarded'));
    const newEvsAwarded = isNaN(evsAwardedData) ? evsAwarded : parseInt(evsAwardedData);
    e.persist();
    setEvsAwarded(newEvsAwarded);
    setSavedValue(inputValue);
    setInputValue('');
    resetEvsWon(e, newEvsAwarded);
  };

  return (
    <div className='pvInputWrapper'>
      <input
        type='text'
        className='pvInput'
        id={inputId}
        pattern="^(100(?:\.00)?|0(?:\.\d\d)?|\d?\d(?:\.\d\d)?)$"
        placeholder={inputPlaceholder}
        data-evsawarded={String(calculateProportionalVotes(null, inputValue))}
        data-party={party}
        data-statename={name}
        defaultValue={inputValue}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus} />
    </div>
  );
};

PopularVoteInput.propTypes = {
  currentPVTotals: arrayOf(number).isRequired,
  evs: oneOfType([number, string]).isRequired,
  handlePropVotes: func.isRequired,
  name: string.isRequired,
  party: string.isRequired,
  percent: oneOfType([number, string]).isRequired,
  stateEvs: number
};

export default PopularVoteInput;
