import { IfcClearButton } from '../../types';

const ClearButton = (clearButtonProps: IfcClearButton) => {
  const { handleClear } = clearButtonProps;

  return (
    <div className="buttonWrapper">
      <button id="clearButton" type="button" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
};

export default ClearButton;
