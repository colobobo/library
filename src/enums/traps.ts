import { World } from "./world";

export enum Jungle {
  liana = 'liana',
  bubblePlant = 'bubble-plant',
  chameleon = 'chameleon',
}

export enum River {
  liana = 'liana',
  bubblePlant = 'bubble-plant',
  fish = 'fish',
}

export enum Desert {
  fire = 'fire',
  snake = 'snake',
  meerkat = 'meerkat',
}

export enum Mountain {
  geyser = 'geyser',
  penguin = 'penguin',
  stalactite = 'stalactite',
}

export type All = Jungle | River | Desert | Mountain

export const Traps = {
  [World.jungle]: Jungle,
  [World.river]: River,
  [World.desert]: Desert,
  [World.mountain]: Mountain
}