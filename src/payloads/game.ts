import { PayloadSocket } from './index';

export module PayloadsGame {
  export type Tick = PayloadSocket<{
    tick: number;
    objects: { [id: string]: { x: number; y: number } };
  }>;

  export type PositionUpdate = {
    x: number;
    y: number;
    id: string;
  };
}
