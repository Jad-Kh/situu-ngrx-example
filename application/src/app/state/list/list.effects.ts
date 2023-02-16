import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { List } from '../../models/List';
import { ListService } from '../../services/list/list.service';
import * as ListActions from './list.actions';

@Injectable()
export class ListEffects {
    
  loadLists$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ListActions.loadLists),
      mergeMap(() =>
        this.listService.getLists().pipe(
          map((lists: List[]) => ListActions.loadListsSuccess({ lists })),
          catchError((error) => of(ListActions.loadListsFailure({ error })))
        )
      )
    )
  );

  addRecordToList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ListActions.addRecordToList),
      mergeMap(({ listTitle, record }) =>
        this.listService.addRecordToList(listTitle, record).pipe(
          map(() => ListActions.addRecordToListSuccess()),
          catchError(error => of(ListActions.addRecordToListFailure({ error })))
        )
      )
    )
  );

  removeRecordFromList$ = createEffect(() => 
    this.actions$.pipe(
      ofType(ListActions.removeRecordFromList),
      mergeMap(({ listTitle, recordId }) =>
        this.listService.removeRecordFromList(listTitle, recordId).pipe(
          map(() => ListActions.removeRecordFromListSuccess()),
          catchError((error) => of(ListActions.removeRecordFromListFailure({ error })))
        )
      )
    )
  );

  updateRecordOfList$ = createEffect(() => 
    this.actions$.pipe(
      ofType(ListActions.updateRecordOfList),
      mergeMap(({ listTitle, recordId, recordDescription }) =>
        this.listService.updateRecordOfList(listTitle, recordId, recordDescription).pipe(
          map(() => ListActions.updateRecordOfListSuccess()),
          catchError((error) => of(ListActions.updateRecordOfListFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private listService: ListService) { }

}