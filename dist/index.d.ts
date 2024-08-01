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

type Size = 'small' | 'medium' | 'large';

interface IfcElectoralCollegeProps {
  candidateImageSources?: CandidateImageSrc;
  candidatesData: CandidatesData;
  enableStickyEVCounter?: boolean;
  mapSize?: Size;
  stateControlSize?: Size;
}

declare const ElectoralCollege: (
  props: IfcElectoralCollegeProps
) => react_jsx_runtime.JSX.Element;

export { ElectoralCollege as default };
