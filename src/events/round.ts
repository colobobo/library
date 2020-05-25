export enum EventsRound {
  init = 'round:init',
  start = 'round:start',
  tick = 'round:tick',
  memberSpawned = 'round:member:spawned',
  memberDragStart = 'round:member:drag:start',
  memberDragEnd = 'round:member:drag:end',
  memberMove = 'round:member:move',
  memberTrapped = 'round:member:trapped',
  memberDropped = 'round:member:dropped',
  memberArrived = 'round:member:arrived',
  fail = 'round:fail',
  success = 'round:success',
}
