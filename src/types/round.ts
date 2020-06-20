import * as enums from '../enums'
import { Members } from './member';

export type Information = {
  id: number;
  duration: number;
  elapsedTime: number;
  members: Members;
  gameScore: number;
  lives: number;
  world: enums.World;
};

export type ScoreDetail = {
  value: number;
  points: number;
}

export type ScoreDetails = {
  total: number;
  details: {
    [key: string]: any;
    [enums.round.ScoreDetails.arrivedMembers]: ScoreDetail;
    [enums.round.ScoreDetails.traps]: ScoreDetail;
    [enums.round.ScoreDetails.remainingTime]?: ScoreDetail;
  }
}

export type EndInformation = Information & {
  endType: enums.round.EndType;
  failCause: enums.round.FailCauses | null;
  roundScore: ScoreDetails;
}
