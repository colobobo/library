export type PayloadSocket<T> = {data: T}

export type PayloadSocketError<T = null> = PayloadSocket<T> & {
  code: number,
  message: string
}

export { PayloadsRoom } from './room'
