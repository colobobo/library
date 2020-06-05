import { PayloadSocket } from '../index';
import { Members, PlayerRoles } from '../../types';
import { World } from '../../enums';

export module PayloadsRound {
  export type Init = PayloadSocket<{
    id: number;
    world: World;
    duration: number;
    tick: number;
    members: Members;
    playerRoles: PlayerRoles;
  }>;

  export type PlayerReady = {};

  export type Start = PayloadSocket<null>;

  export type Tick = PayloadSocket<{
    members: Members;
  }>;

  export type Fail = PayloadSocket<{}>;

  export type Success = PayloadSocket<{}>;

  export type MemberSpawned = {
    memberId: string;
  };

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

  export type MemberTrapped = {
    memberId: string;
  };

  export type MemberDropped = {
    memberId: string;
  };

  export type MemberArrived = {
    memberId: string;
  };
}
