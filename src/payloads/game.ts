import { PayloadSocket, PayloadSocketError } from './index';
import { game, scene } from '../enums';

export module PayloadsGame {
  export type StartSuccess = null;
  export type StartError = PayloadSocketError;
  export type DispositionSelected = PayloadSocket<{
    disposition: game.Disposition
  }>;
  export type DispositionValidated = PayloadSocket<{
    disposition: game.Disposition
  }>;
  export type SceneTypeUpdate = PayloadSocket<{
    type: scene.Type
  }>;
  export type End = {};
}
