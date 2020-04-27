import { PayloadSocket, PayloadSocketError } from './index';

export module PayloadsRoom {
  export type Create = {
    width: number;
    height: number;
  };

  export type CreateSuccess = PayloadSocket<{
    id: string;
    deviceId: string;
  }>;

  export type CreateError = PayloadSocketError;

  export type Join = {
    id: string;
    width: number;
    height: number;
  };

  export type JoinSuccess = PayloadSocket<{
    id: string;
    deviceId: string;
  }>;

  export type JoinError = PayloadSocketError;
}
