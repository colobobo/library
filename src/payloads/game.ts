import { PayloadSocket } from './index';
import { GameObjects } from '../types';

export module PayloadsGame {
  export type Tick = PayloadSocket<{
    tick: number;
    objects: GameObjects;
  }>;

  export type PositionUpdate = {
    x: number;
    y: number;
    id: string;
  };
}
