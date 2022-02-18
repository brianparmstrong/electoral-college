import React from 'react';
import { arrayOf, number } from 'prop-types';

const SaveButton = ({
  currentEVTotals,
  currentPVTotals
}) => {
  const saveStateStatus = () => {
    const states = document.getElementsByClassName('stateWrapper');
    const statesLength = states.length;
    let currentStateStatus = [];
    let currentPopVoteStatus = [];
    let state;
    let stateData;
    let pvData;

    const dynamicSort = property => {
      const sortOrder = 1;
      return (a,b) => {
        const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
      };
    };

    const setStateStatus = stateData => {
      currentStateStatus.push(stateData);
      currentStateStatus.sort(dynamicSort('name'));

      return currentStateStatus;
    };

    const setPopVoteStatus = pvData => {
      let inputValues = [];
      let popVoteData = {};
      const inputElems = pvData?.elem?.querySelectorAll('.pvInput');
      if (inputElems) {
        for (let i=0; i<inputElems.length; i++) {
          inputValues[i] = inputElems[i].value;
        }
      }
      popVoteData = {name: pvData.stateName, values: inputValues};
      currentPopVoteStatus.push(popVoteData);
      currentPopVoteStatus.sort(dynamicSort('name'));

      return currentPopVoteStatus;
    };

    for (state = 0; state < statesLength; state++) {
      stateData = {
        evs: states[state].childNodes[0].getAttribute('data-evs'),
        name: states[state].childNodes[0].getAttribute('data-statename'),
        stateCode: states[state].childNodes[0].getAttribute('data-statecode'),
        winner: states[state].childNodes[0].getAttribute('data-winner')
      };
      pvData = {
        elem: states[state].parentElement.childNodes[1],
        name: states[state].childNodes[0].getAttribute('data-statename')
      };
      setStateStatus(stateData);
      setPopVoteStatus(pvData);
    }
    if (typeof(Storage) !== 'undefined') {
        localStorage.setItem('ElectoralCollegeStatus', JSON.stringify(currentStateStatus));
        localStorage.setItem('WinnerTakeAllTotals', JSON.stringify(currentEVTotals));
        localStorage.setItem('PopularVoteStatus', JSON.stringify(currentPopVoteStatus));
        localStorage.setItem('PopularVoteTotals', JSON.stringify(currentPVTotals));
        currentStateStatus = [];
        currentPopVoteStatus = [];
        alert('Saved!');
    } else {
      alert('Please enable Storage to save your selections.');
    }
  };
  return (
    <div className='buttonWrapper'>
      <button id='saveButton' type='button' onClick={saveStateStatus}>Save</button>
    </div>
  );
};

SaveButton.propTypes = {
  currentEVTotals: arrayOf(number).isRequired,
  currentPVTotals: arrayOf(number).isRequired
};

export default SaveButton;
