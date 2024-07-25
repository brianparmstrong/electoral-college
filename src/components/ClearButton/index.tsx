import { IfcClearButton } from '../../types';

const ClearButton = (clearButtonProps: IfcClearButton) => {
  const { handleClear } = clearButtonProps;
  const clearStatus = () => {
    localStorage.removeItem('ElectoralCollegeStatus');
    localStorage.removeItem('PopularVoteStatus');
    localStorage.removeItem('PopularVoteTotals');
    localStorage.removeItem('WinnerTakeAllTotals');
    handleClear();
  };

  return (
    <div className="buttonWrapper">
      <button id="clearButton" type="button" onClick={clearStatus}>
        Clear
      </button>
    </div>
  );
};

export default ClearButton;
