import { player, round, traps } from '../enums';


export type PlayerRolePropertiesPlateform = {
  direction: round.Direction
}

export type PlayerRolePropertiesTrap = {
  type: traps.All,
  interval: number
}

export type PlayerRole = {
  role: player.Role;
  properties: PlayerRolePropertiesTrap | PlayerRolePropertiesPlateform;
};

export type PlayerRoles = {
  [playerId: string]: PlayerRole;
};
