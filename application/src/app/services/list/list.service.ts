import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from '../../models/List';
import { Record } from '../../models/Record';

@Injectable({
  providedIn: 'root',
})

export class ListService {

  private url = 'assets/data/list-response.json';
  private url_add = 'assets/data/list-add-response.json';
  private url_remove = 'assets/data/list-remove-response.json';
  private url_update = 'assets/data/list-update-response.json';

  constructor(private http: HttpClient) {}

  getLists(): Observable<List[]> {
    return this.http.get
        <List[]>(this.url);
  }

  addRecordToList(listTitle: string, record: Record): Observable<List> {
    return this.http.post
        <List>(this.url_add, record);
  }

  removeRecordFromList(listTitle: string, recordId: number): Observable<List> {
    return this.http.put
        <List>(this.url_remove, recordId);
  }

  updateRecordOfList(listTitle: string, recordId: number, recordDescription: string): Observable<List> {
    return this.http.put
        <List>(this.url_update, recordId);
  }
}
