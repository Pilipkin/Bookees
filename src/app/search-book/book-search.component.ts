import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { BookSearchService } from '../services/BookSearchService';
import { Book } from '../models/Book';

@Component({
    selector: 'book-search',
    templateUrl: './book-search.component.html',
    styleUrls: [ './book-search.component.css' ],
    providers: [BookSearchService]
})
export class BookSearchComponent implements OnInit {
    books: Observable<Book[]>;
    private searchTerms = new Subject<string>();
    constructor(
        private bookSearchService: BookSearchService,
        private router: Router) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.books = this.searchTerms
        .debounceTime(100)
        .distinctUntilChanged()
        .switchMap(term => term ? this.bookSearchService.search(term) : Observable.of<Book[]>([]))
        .catch(error => {
          console.log(error);
          return Observable.of<Book[]>([]);
        });
  }
  gotoDetail(book:Book): void {
    let link = ['/book/', book.id];
    this.router.navigate(link);
  }
}