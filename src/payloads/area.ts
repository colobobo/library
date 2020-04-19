import { PayloadSocket } from "./index";
import { AreaDevice, Device } from "../types";

export module PayloadsArea {
  export type Update = PayloadSocket<{
    width: Device["width"];
    height: Device["height"];
    devices: Map<string, AreaDevice>
  }>
}
