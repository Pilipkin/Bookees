import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book'



@Component({
    selector: 'app-add-book',
    templateUrl: './add-book.component.html',
    styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }
    model:Book = {id:22,title:'qwee',author:'kek', img:'gui', about:'keke', date:1223};

}
