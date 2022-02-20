import { IfcSaveButton } from '../../types';

type PvData = {
  elem: HTMLElement;
  name: string;
};

type StateData = {
  evs: string;
  name: string;
  stateCode: string;
  winner: string;
};

const SaveButton = (saveButton: IfcSaveButton) => {
  const { currentEVTotals, currentPVTotals } = saveButton;
  const saveStateStatus = () => {
    const states = document.getElementsByClassName('stateWrapper');
    const statesLength = states.length;
    let currentStateStatus = [];
    let currentPopVoteStatus = [];
    let stateData: StateData;
    let pvData: PvData;

    const dynamicSort = (property: string) => {
      const sortOrder = 1;
      return (a, b) => {
        const result =
          a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
        return result * sortOrder;
      };
    };

    const setStateStatus = (stateData: StateData) => {
      currentStateStatus.push(stateData);
      currentStateStatus.sort(dynamicSort('name'));

      return currentStateStatus;
    };

    const setPopVoteStatus = (pvData: PvData) => {
      const inputValues = [];
      let popVoteData = {};
      const inputElems = pvData?.elem?.querySelectorAll(
        '.pvInput'
      ) as NodeListOf<HTMLInputElement>;
      if (inputElems) {
        for (let i = 0; i < inputElems.length; i++) {
          inputValues[i] = inputElems[i].value;
        }
      }
      popVoteData = { name: pvData.name, values: inputValues };
      currentPopVoteStatus.push(popVoteData);
      currentPopVoteStatus.sort(dynamicSort('name'));

      return currentPopVoteStatus;
    };

    for (let state = 0; state < statesLength; state++) {
      const stateNode = states[state].childNodes[0] as HTMLDivElement;
      stateData = {
        evs: stateNode.getAttribute('data-evs'),
        name: stateNode.getAttribute('data-statename'),
        stateCode: stateNode.getAttribute('data-statecode'),
        winner: stateNode.getAttribute('data-winner'),
      };
      pvData = {
        elem: states[state].parentElement.childNodes[1] as HTMLDivElement,
        name: stateNode.getAttribute('data-statename'),
      };
      setStateStatus(stateData);
      setPopVoteStatus(pvData);
    }
    if (typeof Storage !== 'undefined') {
      localStorage.setItem(
        'ElectoralCollegeStatus',
        JSON.stringify(currentStateStatus)
      );
      localStorage.setItem(
        'WinnerTakeAllTotals',
        JSON.stringify(currentEVTotals)
      );
      localStorage.setItem(
        'PopularVoteStatus',
        JSON.stringify(currentPopVoteStatus)
      );
      localStorage.setItem(
        'PopularVoteTotals',
        JSON.stringify(currentPVTotals)
      );
      currentStateStatus = [];
      currentPopVoteStatus = [];
      alert('Saved!');
    } else {
      alert('Please enable Storage to save your selections.');
    }
  };
  return (
    <div className="buttonWrapper">
      <button id="saveButton" type="button" onClick={saveStateStatus}>
        Save
      </button>
    </div>
  );
};

export default SaveButton;
