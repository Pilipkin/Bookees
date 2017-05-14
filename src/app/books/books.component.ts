import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book';
import { BookService} from '../services/BookService';

@Component({
    selector: 'books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.css'],
    providers :[BookService]

})
export class BooksComponent implements OnInit{
    constructor(private bookService:BookService){}
    books:Book[];
    model:Book = new Book;
    ifAdd:boolean=false;
    ngOnInit():void {
        this.getBooks();
    }

    addBook():void{
        this.ifAdd = !this.ifAdd;
    }

    getBooks():void{
        this.bookService.getBooks()
            .then(books=>this.books = books);
    }
    add(book:Book): void {
        this.bookService.create(book)
            .then(book => {
                this.books.push(book);
                this.addBook();
                this.model = new Book();
            });
    }

    delete(book:Book): void {
        this.bookService
            .delete(book.id)
            .then(() => {
                this.books = this.books.filter(h => h !== book);
            });
    }

    get diagnostic() { return JSON.stringify(this.model); }

}
