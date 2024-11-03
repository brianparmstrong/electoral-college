import * as react_jsx_runtime from 'react/jsx-runtime';

type CandidateImageSrc = {
  dem: string;
  gop: string;
  grn: string;
  ind: string;
  lib: string;
};

type CandidateData = {
  name: string;
  party: string;
};

type CandidatesData = Array<CandidateData>;

type DataMode = 'manual' | 'auto';

type PopVotesData = {
  name: string;
  values: Array<string>;
};

type ProportionalReawardMode = 'stateWinner' | 'topTwoShare';

type Size = 'small' | 'medium' | 'large';

interface IfcElectoralCollegeProps {
  candidateImageSources?: CandidateImageSrc;
  candidatesData: CandidatesData;
  dataMode?: DataMode;
  enableStickyEVCounter?: boolean;
  handlePropError?: (prop: string, errorMessage: string) => void;
  mapSize?: Size;
  proportionalReawardMode?: ProportionalReawardMode;
  stateControlSize?: Size;
  voteTotals?: PopVotesData[];
}

declare const ElectoralCollege: (
  props: IfcElectoralCollegeProps
) => react_jsx_runtime.JSX.Element;

export { ElectoralCollege as default };
