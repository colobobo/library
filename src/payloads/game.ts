import { PayloadSocket } from './index';
import { GameObjects, Route } from '../types';

export module PayloadsGame {
  export type RouterUpdate = PayloadSocket<Route>;

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
