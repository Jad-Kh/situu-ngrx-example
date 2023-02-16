import { ActionReducerMap } from '@ngrx/store';
import { authReducer, AuthState } from './auth/auth.reducer';
import { listReducer, ListState } from './list/list.reducer';

export interface AppState {
  auth: AuthState;
  list: ListState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  list: listReducer
};