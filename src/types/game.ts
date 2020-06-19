export type Properties = {
  difficultyStep: number;
  lives: number;
  members: {
    min: number;
    max: number;
  };
  players: {
    min: number;
    max: number;
  };
  tick: number;
  score: {
    memberArrived: number;
    memberTrapped: number;
  };
  variables: {
    [playerNumber: number]: {
      duration: {
        defaultValue: number;
        decreaseCoefficient: number;
      };
      traps: {
        defaultInterval: number;
        decreaseCoefficient: number;
      };
    };
  };
}
