export type PayloadSocket<T> = { data: T };

export type PayloadSocketError<T = null> = PayloadSocket<T> & {
  code: number;
  message: string;
};

export { PayloadsArea as area } from './area';
export { PayloadsMotion as motion } from './motion';
export { PayloadsGame as game } from './game';
export { PayloadsRoom as room } from './room';
