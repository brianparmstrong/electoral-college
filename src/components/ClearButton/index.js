const ClearButton = () => {
  const clearStatus = () => {
    if (typeof(Storage) !== 'undefined') {
        localStorage.removeItem('ElectoralCollegeStatus');
        localStorage.removeItem('PopularVoteStatus');
        localStorage.removeItem('PopularVoteTotals');
        localStorage.removeItem('WinnerTakeAllTotals');
        alert('Cleared!');
        location.reload(); // eslint-disable-line no-restricted-globals
    } else {
      alert('Please enable Storage to save your selections.');
    }
  };

  return (
    <div className='buttonWrapper'>
      <button id='clearButton' type='button' onClick={clearStatus}>Clear</button>
    </div>
  );
};

export default ClearButton;
