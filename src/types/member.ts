import { member } from "../enums";

export type Member = {
  isDragged: boolean;
  manager: string;
  status: member.Status;
  skin: member.Skins;
  position: {
    x: number;
    y: number;
  };
  velocity: {
    x: number;
    y: number;
  };
};

export type Members = {
  [id: string]: Member;
};
