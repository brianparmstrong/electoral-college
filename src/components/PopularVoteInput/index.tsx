import { FocusEvent, useState } from 'react';
import { IfcPopularVoteInput } from '../../types';

const PopularVoteInput = (popularVoteInput: IfcPopularVoteInput) => {
  const {
    currentPVTotals,
    evs,
    handlePropVotes,
    name,
    party,
    percent,
    stateEvs,
  } = popularVoteInput;
  const initialInputValue = percent ? percent : '';
  const [evsAwarded, setEvsAwarded] = useState(0);
  const [inputValue, setInputValue] = useState(initialInputValue);
  const [savedValue, setSavedValue] = useState('');
  const inputId = `${party}PopVoteInput`;
  const inputPlaceholder = `${party.toUpperCase()} %`;

  const calculateProportionalVotes = (
    event: FocusEvent<HTMLInputElement>,
    savedValue?: string
  ) => {
    const eventTarget = event?.target as HTMLInputElement;
    const value = eventTarget?.value;
    /* eslint-disable indent */
    const newInputValue = savedValue
      ? Number(savedValue)
      : eventTarget
      ? Number(value)
      : 0;
    /* eslint-enable indent */
    let totalEvs = stateEvs ?? evs;
    if (name === 'Maine') {
      totalEvs = '4';
    } else if (name === 'Nebraska') {
      totalEvs = '5';
    }
    const popVotePercent =
      Boolean(newInputValue) || percent ? newInputValue / 100 : 0;
    const evsWon = Math.round(Number(totalEvs) * popVotePercent);
    const polParty =
      savedValue || Boolean(event) === false
        ? null
        : event.target.dataset.party;
    let newGopPropTotal = currentPVTotals[0];
    let newDemPropTotal = currentPVTotals[1];
    let newLibPropTotal = currentPVTotals[2];
    let newGrnPropTotal = currentPVTotals[3];
    let newIndPropTotal = currentPVTotals[4];

    if (Boolean(evsWon) && newInputValue <= 100) {
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
        newIndPropTotal,
      ];

      if (event?.target) {
        event.target.setAttribute('data-evsawarded', String(evsWon));
        handlePropVotes(newPVTotals);
      } else if (percent) {
        return evsWon;
      }
    }
  };

  const resetEvsWon = (
    event: FocusEvent<HTMLInputElement>,
    newEvsAwarded: number
  ) => {
    const politicalParty = event.currentTarget.dataset.party;
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
      newIndPropTotal,
    ];

    event.target.setAttribute('data-evsawarded', '0');
    handlePropVotes(newPVTotals);
  };

  const handleInputBlur = (event: FocusEvent<HTMLInputElement>) => {
    event.persist();
    const { value } = event.currentTarget as HTMLInputElement;
    if (inputValue !== '' && value === '') {
      setInputValue(savedValue);
      calculateProportionalVotes(null, savedValue);
    } else {
      calculateProportionalVotes(event);
    }
  };

  const handleInputFocus = (event: FocusEvent<HTMLInputElement>) => {
    const evsAwardedData = Number(event.currentTarget.dataset.evsawarded);
    const newEvsAwarded = isNaN(evsAwardedData) ? evsAwarded : evsAwardedData;
    event.persist();
    setEvsAwarded(newEvsAwarded);
    setSavedValue(inputValue);
    setInputValue('');
    resetEvsWon(event, newEvsAwarded);
  };

  return (
    <div className="pvInputWrapper">
      <input
        type="text"
        className="pvInput"
        id={inputId}
        pattern="^(100(?:\.00)?|0(?:\.\d\d)?|\d?\d(?:\.\d\d)?)$"
        placeholder={inputPlaceholder}
        data-evsawarded={String(calculateProportionalVotes(null, inputValue))}
        data-party={party}
        data-statename={name}
        defaultValue={inputValue}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
      />
    </div>
  );
};

export default PopularVoteInput;
