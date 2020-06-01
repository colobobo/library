import { PayloadSocket } from '../index';
import { Members, PlayerRole } from '../../types';
import { World } from '../../enums';

export module PayloadsRound {
  export type Init = PayloadSocket<{
    id: number,
    world: World,
    duration: number,
    playerRoles: {
      [playerId: string]: PlayerRole,
    }
  }>;

  export type PlayerReady = {};

  export type Start = PayloadSocket<null>;

  export type Tick = PayloadSocket<{
    members: Members;
  }>;

  export type Fail = PayloadSocket<{}>;

  export type Success = PayloadSocket<{}>;

  export type MemberSpawned = {};

  export type MemberDragStart = {
    memberId: string;
    playerId: string;
  };

  export type MemberDragEnd = {};

  export type MemberMove = {
    id: string;
    position: {
      x: number;
      y: number;
    };
    velocity: {
      x: number;
      y: number;
    };
  };

  export type MemberTrapped = {};

  export type MemberDropped = {};

  export type MemberArrived = {};
}
