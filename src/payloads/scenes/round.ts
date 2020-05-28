import { PayloadSocket } from '../index';
import { GameObjects } from '../../types';

export module PayloadsRound {
  export type Init = PayloadSocket<{}>;

  export type PlayerReady = {};

  export type Start = PayloadSocket<{}>;

  export type Tick = PayloadSocket<{
    tick: number;
    objects: GameObjects;
  }>;

  export type Fail = PayloadSocket<{}>;

  export type Success = PayloadSocket<{}>;

  export type MemberSpawned = {};

  export type MemberDragStart = {};

  export type MemberDragEnd = {};

  export type MemberMove = {
    x: number;
    y: number;
    id: string;
  };

  export type MemberTrapped = {};

  export type MemberDropped = {};

  export type MemberArrived = {};
}
