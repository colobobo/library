import { EventsAdmin as admin } from './admin';
import { EventsArea as area } from './area';
import { EventsGame as game } from './game';
import { EventsPlayer as player } from './player';
import { EventsRoom as room } from './room';
import { EventsRound as round } from './scenes/round';
import { EventsTransition as transition } from './scenes/transition';

type All = admin | area | game | player | room | round | transition

export { All, admin, area, game, player, room, round, transition }
