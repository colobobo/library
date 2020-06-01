import { player } from "../enums";

export type PlayerRole = {
  role: player.Role,
  properties: { interval: number } | null | null
}
