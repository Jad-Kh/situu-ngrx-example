import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from 'src/app/models/List';
import { Record } from 'src/app/models/Record';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { addRecordToList, loadLists, removeRecordFromList, updateRecordOfList } from '../state/list/list.actions';
import { selectLists } from '../state/list/list.selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  lists$: Observable<List[]>;
  username: string = '';

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadLists());
    this.lists$ = this.store.select(selectLists);
    this.store.select(state => state.auth.user).subscribe(
      user => {
        this.username = user?.username;
      }
    );
  }

  addRecordToList(listTitle: string, record: Record) {
    record.description = `This is record ${record.id} of ${listTitle}`
    this.store.dispatch(addRecordToList({ listTitle, record }));
  }

  removeRecordFromList(listTitle: string, recordId: number): void {
    this.store.dispatch(removeRecordFromList({ listTitle, recordId }));
  }

  updateRecordOfList(listTitle: string, recordId: number, recordDescription: string): void {
    recordDescription += " UPDATED!"
    this.store.dispatch(updateRecordOfList({ listTitle, recordId, recordDescription }));
  }

}