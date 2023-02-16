import { createAction, props } from '@ngrx/store';
import { List } from '../../models/List';
import { Record } from 'src/app/models/Record';

export const loadLists = createAction(
    '[List] Load Lists'
);

export const loadListsSuccess = createAction(
    '[List] Load Lists Success', 
    props<{ lists: List[] }>()
);

export const loadListsFailure = createAction(
    '[List] Load Lists Failure',
    props<{ error: string }>()
);

export const addRecordToList = createAction(
    '[List] Add Record to List',
    props<{ listTitle: string, record: Record }>()
);

export const addRecordToListSuccess = createAction(
    '[List] Add Record to List Success'
);

export const addRecordToListFailure = createAction(
    '[List] Add Record to List Failure',
    props<{ error: string }>()
);

export const removeRecordFromList = createAction(
    '[List] Remove Record from List',
    props<{ listTitle: string, recordId: number }>()
);

export const removeRecordFromListSuccess = createAction(
    '[List] Remove Record from List Success'
);

export const removeRecordFromListFailure = createAction(
    '[List] Remove Record from List Failure',
    props<{ error: string }>()
);

export const updateRecordOfList = createAction(
    '[List] Update Record of List',
    props<{ listTitle: string, recordId: number, recordDescription: string }>()
);

export const updateRecordOfListSuccess = createAction(
    '[List] Update Record of List Success'
);

export const updateRecordOfListFailure = createAction(
    '[List] Update Record of List Failure',
    props<{ error: string }>()
);