import { PayloadSocket } from './index';

export module PayloadsGame {
  export type Tick = PayloadSocket<{
    x: number;
    y: number;
    tick: number;
  }>;
}
