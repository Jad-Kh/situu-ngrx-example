import { createReducer, on } from '@ngrx/store';
import { User } from '../../models/User';
import * as AuthActions from './auth.actions';

export interface AuthState {
  user: User;
  isAuthenticated: boolean;
  token: string;
  loading: 'loading' | 'success' | 'error' | null;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  token: null,
  loading: null,
  error: null,
};

export const authReducer = createReducer(
    
  initialState,

  on(AuthActions.login, (state) => ({ 
    ...state, 
    loading: 'loading' 
  })),

  on(AuthActions.loginSuccess, (state, { user, token }) => ({
    ...state,
    user,
    isAuthenticated: true,
    token,
    loading: 'success',
  })),

  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    error,
    loading: 'error',
  }))
);