import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Book } from '../Book';
import {BookService} from "../BookService";

@Component({
    selector: 'book-inspect',
    templateUrl: './book-inspect.component.html',
    styleUrls: ['./book-inspect.component.css']
})
export class BookInspectComponent implements OnInit {
    private book:Book;
    private editing:boolean = false;
     constructor(
        private bookService:BookService,
        private location:Location,
        private route: ActivatedRoute
    ) {}
    ngOnInit():void{
        this.route.params
            .switchMap((params:Params) => this.bookService.getBook(+params['id']))
            .subscribe(book => this.book = book)
    }

    save(): void {
        this.bookService.update(this.book)
            .then(() => this.goBack());
    }

    goBack():void{
        this.location.back();
    }

    edit():void{
         this.editing = !this.editing
    }
}
