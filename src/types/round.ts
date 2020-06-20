import * as enums from '../enums'
import { Members } from './member';

export type Information = {
  id: number;
  duration: number;
  elapsedTime: number;
  members: Members;
  score: number;
  lives: number;
  world: enums.World;
};

export type ScoreDetail = {
  value: number;
  points: number;
}

export type ScoreDetails = {
  arrivedMembers: ScoreDetail;
  traps: ScoreDetail;
  remainingTime?: ScoreDetail;
}

export type EndInformation = Information & {
  endType: enums.round.EndType;
  failCause: enums.round.FailCauses | null;
  scoreDetails: ScoreDetails;
}
