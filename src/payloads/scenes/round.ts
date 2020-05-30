import { PayloadSocket } from '../index';
import { Members } from '../../types';
import { player, World } from "../../enums";

type PlayerRole = {
  role: player.Role,
  properties: { interval: number } | null | null
}

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

  export type Start = PayloadSocket<{}>;

  export type Tick = PayloadSocket<{
    tick: number;
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
