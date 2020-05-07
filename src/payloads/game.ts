import { PayloadSocket } from './index';

export module PayloadsGame {
  export type Tick = PayloadSocket<{
    x: number;
    y: number;
    tick: number;
    objects: { [id: string]: { x: number; y: number } };
  }>;

  export type PositionUpdate = PayloadSocket<{
    x: number;
    y: number;
    id: string;
  }>;
}
