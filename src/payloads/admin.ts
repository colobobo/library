import { PayloadSocket } from './index';

export module PayloadsAdmin {
  export type DeviceConnected = PayloadSocket<{
    deviceIndex: string;
    playerId: string;
  }>;
}
