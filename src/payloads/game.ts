import { PayloadSocket } from "./index";
import { scene } from '../enums';

export module PayloadsGame {
  export type StartSuccess = null;
  export type SceneTypeUpdate = PayloadSocket<{
    type: scene.Type,
  }>;
  export type End = {};
}
