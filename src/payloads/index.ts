export type PayloadSocket<T> = {data: T}

export type PayloadSocketError<T = null> = PayloadSocket<T> & {
  code: number,
  message: string
}

export { PayloadsArea } from './area'
export { PayloadsGame } from './game'
export { PayloadsRoom } from './room'
