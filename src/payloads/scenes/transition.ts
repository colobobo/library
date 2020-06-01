import { PayloadSocket } from '../index';

export module PayloadsTransition {
  export type Init = PayloadSocket<{}>;

  export type PlayerReady = {
    playerId: string;
  };

  export type Start = PayloadSocket<{}>;

  export type Ended = {};
}
