import { createReducer, on, Action } from '@ngrx/store';
import { List } from '../../models/List';
import * as ListActions from './list.actions';

export interface ListState {
  lists: List[];
  loading: 'loading' | 'success' | 'error' | null;
  error: string | null;
}

const initialState: ListState = {
  lists: [],
  loading: null,
  error: null,
};

export const listReducer = createReducer(

  initialState,

  on(ListActions.loadLists, (state) => ({ 
    ...state, 
    loading: 'loading' 
  })),

  on(ListActions.loadListsSuccess, (state, { lists }) => ({ 
    ...state, 
    lists, 
    loading: 'success',
  })),

  on(ListActions.loadListsFailure, (state, { error }) => ({ 
    ...state, 
    error,
    loading: 'error',
  })),

  on(ListActions.addRecordToList, (state, { listTitle, record }) => {
    const updatedLists = state.lists.map(list => {
      if (list.title == listTitle) {
        return {
          ...list,
          records: [...list.records, record]
        };
      } else {
        return list;
      }
    });
    return { ...state, lists: updatedLists };
  }),

  on(ListActions.removeRecordFromList, (state, { listTitle, recordId }) => {
    const updatedLists = state.lists.map(list => {
        if (list.title == listTitle) {
          return {
            ...list,
            records: list.records.filter((record) => record.id !== recordId)
          };
        } else {
          return list;
        }
      });
      return { ...state, lists: updatedLists };
  }),

  on(ListActions.updateRecordOfList, (state, { listTitle, recordId, recordDescription }) => {
    const updatedLists = state.lists.map(list => {
      if (list.title === listTitle) {
        return { 
            ...list, 
            records: list.records.map(record => {
                if (record.id == recordId) {
                    return { ...record, description: recordDescription };
                } else {
                    return record;
                }
            })
        };
      } else {
        return list;
      }
    });
    return { ...state, lists: updatedLists };
  }),

);