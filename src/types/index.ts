export type Device = {
  width: number;
  height: number;
};

export type AreaDevice = Device & {
  offsetX: number;
  position: number;
};

export type Member = {
  position: {
    x: number;
    y: number;
  };
  velocity: {
    x: number;
    y: number;
  };
  width: number;
  height: number;
  manager: string;
  color?: string;
};

export type Members = {
  [id: string]: Member;
};
