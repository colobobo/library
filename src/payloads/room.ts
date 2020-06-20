import { game } from '../types';
import { PayloadSocket, PayloadSocketError } from './index';

export module PayloadsRoom {
  export type Create = {
    width: number;
    height: number;
    isAdmin?: boolean;
  };

  export type CreateSuccess = PayloadSocket<{
    id: string;
    playerId: string;
    players: game.Properties['players']
  }>;

  export type CreateError = PayloadSocketError;

  export type Join = {
    id: string;
    width: number;
    height: number;
    adminIndex?: string;
  };

  export type JoinSuccess = PayloadSocket<{
    id: string;
    isCreator: boolean;
    playerId: string;
    players: game.Properties['players']
  }>;

  export type JoinError = PayloadSocketError;
}
