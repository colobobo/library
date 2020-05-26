import { PayloadSocket } from "./index";
import { AreaDevice, Device } from "../types";

export module PayloadsArea {
  export type Update = PayloadSocket<{
    width: Device["width"];
    minHeight: Device["height"];
    maxHeight: Device["height"];
    devices: {[devideId: string] : AreaDevice}
  }>
}
