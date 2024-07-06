type CandidatesData = [
  {
    name: string;
    party: string;
  },
  {
    name: string;
    party: string;
  },
  {
    name: string;
    party: string;
  },
  {
    name: string;
    party: string;
  },
  {
    name: string;
    party: string;
  }
];

type NewStateData = {
  newWinningParty: string;
  stateId: string;
};

type PopVotesData = {
  name: string;
  values: Array<number>;
};

export type StatesData = [
  {
    evs: string;
    name: string;
    stateCode: string;
    stateEvs?: string;
    winner?: string;
  }
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
  name: string;
  party: string;
  popularVoteTotals: number;
  winnerTakeAllTotal: number;
}

export interface IfcCandidates {
  candidatesData: CandidatesData;
  popularVoteTotals: Array<number>;
  winnerTakeAllTotals: Array<number>;
}

export interface IfcCandidatesWrapper {
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
  newStateData: NewStateData;
  stateWinnerNames?: StateWinnerNames | Partial<StateWinnerNames>;
  statesData: StatesData;
}

export interface IfcPopularVoteInput {
  currentPVTotals: Array<number>;
  evs: string;
  handlePropVotes: (newPVTotals: Array<number>) => void;
  name: string;
  party: string;
  percent: string;
  stateEvs: string;
}

export interface IfcPopularVotes {
  currentPVTotals: Array<number>;
  evs: string;
  handlePropVotes: (newPVTotals: Array<number>) => void;
  name: string;
  popVotesData: PopVotesData;
  showPopVotes: boolean;
  stateEvs: string;
}

export interface IfcSaveButton {
  currentEVTotals: Array<number>;
  currentPVTotals: Array<number>;
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
  isFromStorage: boolean;
  popVotesData?: PopVotesData;
  statesData: StatesData;
}
