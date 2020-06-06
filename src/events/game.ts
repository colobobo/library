export enum EventsGame {
  start = 'game:start',
  startSuccess = 'game:start:success',
  startError = 'game:start:error',
  dispositionSelected = 'game:disposition:selected',
  dispositionValidated = 'game:disposition:validated',
  sceneTypeUpdate = 'game:scene-type:update',
  statusUpdate = 'game:status:update',
  statusUpdateSuccess = 'game:status:update:success',
  statusUpdateError = 'game:status:update:error',
  end = 'game:end',
}
