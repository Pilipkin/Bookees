import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Book }           from '../models/Book';
@Injectable()
export class BookSearchService {
    constructor(private http: Http) {}
    search(term: string): Observable<Book[]> {
        return this.http
            .get(`app/books/?title=${term}`)
            .map(response => response.json().data as Book[]);
    }
}