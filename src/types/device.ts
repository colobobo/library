export type Device = {
  width: number;
  height: number;
};

export type AreaDevice = Device & {
  offsetX: number;
  position: number;
};
