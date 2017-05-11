import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { BookInspectComponent } from './book-inspect/book-inspect.component';
import { BookService } from './BookService';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { SearchBookComponent } from './search-book/search-book.component';

const appRoutes: Routes = [
    { path: 'books', component: BooksComponent },
    { path: 'book/:id', component: BookInspectComponent },
    { path: 'add', component: AddBookComponent},
    { path: '',
        redirectTo: '/books',
        pathMatch: 'full'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        BookInspectComponent,
        BooksComponent,
        AddBookComponent,
        SearchBookComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        RouterModule.forRoot(appRoutes),
        NgbModule.forRoot()
    ],
    providers: [BookService],
    bootstrap: [AppComponent]
})
export class AppModule { }
