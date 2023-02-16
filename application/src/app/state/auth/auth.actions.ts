import { createAction, props } from '@ngrx/store';
import { User } from '../../models/User';

export const login = createAction(
    '[Auth] Login', 
    props<{ username: string }>()
);

export const loginSuccess = createAction(
    '[Auth] Login Success', 
    props<{ user: User, token: string }>()
);

export const loginFailure = createAction(
    '[Auth] Login Failure', 
    props<{ error: string }>()
);