import { Component, OnInit } from '@angular/core';
import { Book } from '../Book';
import { BookService} from '../BookService';

@Component({
    selector: 'books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.css'],
    providers :[BookService]
})
export class BooksComponent implements OnInit{
    constructor(private bookService:BookService){}
    books:Book[];
    selectedBook:Book;
    ngOnInit():void {
        this.getBooks();
    }

    getBooks():void{
        this.bookService.getBooks()
            .then(books=>this.books = books);
    }

    onSelect(book:Book):void {
        this.selectedBook = book;
    }
}
