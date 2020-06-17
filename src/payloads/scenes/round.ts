import {PayloadSocket, PayloadSocketError} from '../index';
import { Members, PlayerRoles, round } from '../../types';
import * as enums from '../../enums';
import {game} from "../../enums";

export module PayloadsRound {
  export type Init = PayloadSocket<{
    id: number;
    world: enums.World;
    duration: number;
    lives: number;
    members: Members;
    playerRoles: PlayerRoles;
    score: number;
    tick: number;
  }>;

  export type PlayerReady = {};

  export type Start = PayloadSocket<{
    endRoundTimeStamp: number;
  }>;

  export type Tick = PayloadSocket<{
    members: Members;
  }>;

  export type Fail = PayloadSocket<round.EndInformation>;

  export type Success = PayloadSocket<round.EndInformation>;

  export type StatusUpdate = { status: enums.round.Status };

  export type StatusUpdateSuccess = PayloadSocket<{
    status: enums.round.Status;
    endRoundTimeStamp: number;
  }>;

  export type StatusUpdateError = PayloadSocketError;

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
