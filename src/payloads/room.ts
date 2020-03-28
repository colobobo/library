import { PayloadSocket } from "./index";

export module PayloadsRoom {
  export type Create = {
    width: number,
    height: number
  }

  export type CreateSuccess = PayloadSocket<{
    id: string
  }>

  export type CreateError = PayloadSocket<{
    code: number,
    data: null,
    message: string,
  }>

  export type Join = {
    width: number,
    height: number
  }

  export type JoinSuccess = PayloadSocket<{
    id: string
  }>

  export type JoinError = PayloadSocket<{
    code: number,
    data: null,
    message: string,
  }>
}
