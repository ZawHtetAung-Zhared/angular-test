import { createReducer, on } from '@ngrx/store';
import { getBookList } from './book.actions';

export const initialState = 'Harry Potter';

export const booksReducer = createReducer(
  initialState,
  on(getBookList, (state, { books }) => books)
);
