import { RoutesTypes } from '../enums';

export type Device = {
  width: number;
  height: number;
};

export type AreaDevice = Device & {
  offsetX: number;
  position: number;
};

export type GameObject = {
  x: number;
  y: number;
  width: number;
  height: number;
  color?: string;
};

export type GameObjects = {
  [id: string]: GameObject;
};

export type Route = {
  type: RoutesTypes
}
