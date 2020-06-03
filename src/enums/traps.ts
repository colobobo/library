import { World } from "./world";

enum Jungle {
  liana = 'liana',
  bubblePlant = 'bubble-plant',
  chameleon = 'chameleon',
}

enum River {
  liana = 'liana',
  bubblePlant = 'bubble-plant',
  fish = 'fish',
}

enum Desert {
  fire = 'fire',
  snake = 'snake',
  meerkat = 'meerkat',
}

enum Mountain {
  geyser = 'geyser',
  penguin = 'penguin',
  stalactite = 'stalactite',
}

export const Traps = {
  [World.jungle]: Jungle,
  [World.river]: River,
  [World.desert]: Desert,
  [World.mountain]: Mountain
}
