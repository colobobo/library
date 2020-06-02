import { PayloadSocket } from './index';

export module PayloadsAdmin {
  export type DeviceConnected = PayloadSocket<{
    deviceIndex: number;
    playerId: string;
  }>;
}
