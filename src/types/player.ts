import { player, round } from '../enums';


export type PlayerRolePropertiesPlateform = {
  direction: round.Direction
}

export type PlayerRole = {
  role: player.Role;
  properties: { interval: number } | PlayerRolePropertiesPlateform | {};
};

export type PlayerRoles = {
  [playerId: string]: PlayerRole;
};
