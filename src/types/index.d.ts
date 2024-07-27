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

export interface IfcElectoralCollegeProps {
  candidateImageSources?: CandidateImageSrc;
  candidatesData: CandidatesData;
  enableStickyEVCounter?: boolean;
}

type NewStateData = {
  newWinningParty: string;
  stateId: string;
} | null;

type PopVotesData = {
  name: string;
  values: Array<string>;
};

export type StatesData = [
  {
    evs: string;
    name: string;
    stateCode: string;
    stateEvs?: string;
    winner?: string;
  },
];

type StateWinnerNames = {
  [key: string]: string;
};

export type WinnerData = {
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
  winnerTakeAllTotals: Array<number>;
}

export interface IfcCandidatesWrapper {
  candidateImageSources?: CandidateImageSrc;
  candidates: CandidatesData;
  evPct: Array<number>;
  popVoteTotals: Array<number>;
  pvPct: Array<number>;
  winnerTakeAllTotals: Array<number>;
}

export interface IfcElectoralVotes {
  party: string;
  popularVoteTotals: number;
  winnerTakeAllTotal: number;
}

export interface IfcMap {
  handleMapStateClick: (state: string) => void;
  hasClearedSavedData: 'false' | 'true';
  newStateData: NewStateData;
  stateWinnerNames?: StateWinnerNames | Partial<StateWinnerNames> | undefined;
  statesData: StatesData;
}

export interface IfcPopularVoteInput {
  currentPVTotals: Array<number>;
  evs: string;
  handlePropVotes: (newPVTotals: Array<number>) => void;
  hasClearedSavedData: 'false' | 'true';
  name: string;
  party: string;
  percent: string;
  stateEvs: string;
}

export interface IfcPopularVotes {
  currentPVTotals: Array<number>;
  evs: string;
  handlePropVotes: (newPVTotals: Array<number>) => void;
  hasClearedSavedData: 'false' | 'true';
  name: string;
  popVotesData: PopVotesData;
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
  evs: string;
  isFromStorage: boolean;
  name: string;
  stateClickedFromMap: string;
  stateCode: string;
  stateEvs?: string;
  toggleWinner: (data: WinnerData) => void;
  winner?: string;
}

export interface IfcStates {
  currentEVTotals: Array<number>;
  currentPVTotals: Array<number>;
  handlePropVotes: (newPVTotals: Array<number>) => void;
  handleStateWinner: (newEVTotals: Array<number>) => void;
  hasClearedSavedData: 'false' | 'true';
  isFromStorage: boolean;
  popVotesData?: PopVotesData;
  statesData: StatesData;
}
