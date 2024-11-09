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

export type RenderPropErrorMessage = (
  prop: string,
  errorMessage: string
) => void;

export interface IfcElectoralCollegeProps {
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

type NewStateData = {
  newWinningParty: string;
  stateId: string;
} | null;

export type StatesData = {
  evs: string;
  name: string;
  stateCode: string;
  stateEvs?: string;
  winner?: string;
};

type StateWinnerNames = {
  [key: string]: string;
};

export type WinnerData = {
  evs: number;
  newWinningParty: string;
  stateId: string;
};

export type AutoModeWinnerData = {
  evs: number;
  newWinningParty: string;
  stateId: string;
};

export interface IfcCandidate {
  imageSrc?: string;
  name: string;
  party: string;
  popularVoteTotals: number;
  winnerTakeAllTotal: number;
}

export interface IfcCandidates {
  candidateImageSources?: CandidateImageSrc;
  candidatesData: CandidatesData;
  popularVoteTotals: Array<number>;
  renderPropErrorMessage: RenderPropErrorMessage;
  winnerTakeAllTotals: Array<number>;
}

export interface IfcCandidatesWrapper {
  candidateImageSources?: CandidateImageSrc;
  candidates: CandidatesData;
  evPct: Array<number>;
  popVoteTotals: Array<number>;
  pvPct: Array<number>;
  renderPropErrorMessage: RenderPropErrorMessage;
  winnerTakeAllTotals: Array<number>;
}

export interface IfcElectoralVotes {
  party: string;
  popularVoteTotals: number;
  winnerTakeAllTotal: number;
}

export interface IfcMap {
  dataMode: DataMode;
  handleMapStateClick: (state: string) => void;
  hasClearedSavedData: 'false' | 'true';
  mapSize: Size;
  newStateData: NewStateData;
  stateWinnerNames?: StateWinnerNames | Partial<StateWinnerNames> | undefined;
  statesData: StatesData[];
}

export interface IfcPopularVoteInput {
  currentPVTotals: Array<number>;
  evs: string;
  handlePropVotes: (newPVTotals: Array<number>) => void;
  hasClearedSavedData: 'false' | 'true';
  isReadOnly: boolean;
  name: string;
  party: string;
  percent: string;
  stateEvs: string;
}

export interface IfcPopularVotes {
  autoModeToggleWinner: (data: AutoModeWinnerData) => void;
  currentPVTotals: Array<number>;
  dataMode: DataMode;
  evs: string;
  handlePropVotes: (newPVTotals: Array<number>) => void;
  hasClearedSavedData: 'false' | 'true';
  name: string;
  popVotesData: PopVotesData;
  proportionalReawardMode: ProportionalReawardMode;
  renderPropErrorMessage: RenderPropErrorMessage;
  showPopVotes: boolean;
  stateEvs: string;
}

export interface IfcClearButton {
  handleClear: () => void;
}

export interface IfcSaveButton {
  currentEVTotals: Array<number>;
  currentPVTotals: Array<number>;
  handleSave: () => void;
}

export interface IfcState {
  dataMode: string;
  evs: string;
  isFromStorage: boolean;
  name: string;
  stateClickedFromMap: string;
  stateCode: string;
  stateEvs?: string;
  stateWinnerData: NewStateData[] | null;
  toggleWinner: (data: WinnerData) => void;
  winner?: string;
}

export interface IfcStates {
  currentEVTotals: Array<number>;
  currentPVTotals: Array<number>;
  dataMode: DataMode;
  handlePropVotes: (newPVTotals: Array<number>) => void;
  handleStateWinner: (newEVTotals: Array<number>, data?: WinnerData) => void;
  hasClearedSavedData: 'false' | 'true';
  isFromStorage: boolean;
  mapSize: Size;
  popVotesData?: PopVotesData;
  proportionalReawardMode: ProportionalReawardMode;
  renderPropErrorMessage: RenderPropErrorMessage;
  stateControlSize: Size;
  statesData: StatesData[];
}

export type CalculateStateEVsFromPVs = {
  proportionalReawardMode: ProportionalReawardMode;
  renderPropErrorMessage: RenderPropErrorMessage;
  stateEVs: number;
  voteTotals: string[];
};

export type ReawardEVs = {
  calculatedEVTotals: number[];
  convertedVoteTotals: number[];
  difference: number;
  proportionalReawardMode: ProportionalReawardMode;
  renderPropErrorMessage: RenderPropErrorMessage;
};
