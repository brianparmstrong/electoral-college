const dynamicSort = property => {
  const sortOrder = 1;
  return (a,b) => {
    const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    return result * sortOrder;
  };
};

export const setStateStatus = stateData => {
	let currentStateStatus = [];
	currentStateStatus.push(stateData);
	currentStateStatus.sort(dynamicSort('name'));

	return currentStatus;
};

export const setPopVoteStatus = pvData => {
	let inputValues = [];
	let popVoteData = {};
	let currentPopVoteStatus = [];
	const inputElems = data.elem.querySelectorAll('.pvInput');
	for (let i=0; i<inputElems.length; i++) {
		inputValues[i] = inputElems[i].value;
	}
	popVoteData = {name: data.stateName, values: inputValues};
	currentPopVoteStatus.push(popVoteData);
	currentPopVoteStatus.sort(dynamicSort('name'));

	return currentPopVoteStatus;
};
