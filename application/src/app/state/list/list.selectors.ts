import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ListState } from './list.reducer';

export const selectListState = createFeatureSelector<ListState>('list');

export const selectLists = createSelector(
    selectListState, 
    (state) => state.lists
);

export const selectListsLoading = createSelector(
    selectListState, 
    (state) => state.loading
);