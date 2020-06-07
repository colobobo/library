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

export type EndInformation = Information & {
  endType: enums.game.EndType;
}
