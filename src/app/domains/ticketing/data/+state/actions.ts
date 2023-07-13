import { createActionGroup, props, emptyProps } from '@ngrx/store';
import { Flight } from '../flight';

export const ticketingActions = createActionGroup({
  source: 'ticketing',
  events: {
    'load flights': props<{ from: string; to: string }>(),
    'flights loaded': props<{ flights: Flight[] }>(),
    'update flight': props<{ flight: Flight }>(),
    'clear flights': emptyProps(),
  },
});
