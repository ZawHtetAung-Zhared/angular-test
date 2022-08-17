import { createAction, props } from '@ngrx/store';

export const getBookList = createAction(
  'Get book list',
  props<{ books:any }>()
);
