export enum EventsRoom {
  create = "room:create",
  createSuccess = "room:create:success",
  createError = "room:create:error",
  join = "room:join",
  joinSuccess = "room:join:success",
  joinError = "room:join:error",
}

export enum EventsExample {
  SOCKET_EVENT_EXAMPLE = "SOCKET_EVENT_EXAMPLE"
}

export type Events = EventsRoom | EventsExample

