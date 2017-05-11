import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from './app.component';
import { BookInspectComponent } from './book-inspect/book-inspect.component';
import { BookService } from './BookService';
import { BooksComponent } from './books/books.component';

const appRoutes: Routes = [
    { path: 'books', component: BooksComponent },
    { path: 'book/:id', component: BookInspectComponent },
    { path: '',
        redirectTo: '/books',
        pathMatch: 'full'
    }
];



@NgModule({
    declarations: [
        AppComponent,
        BookInspectComponent,
        BooksComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [BookService],
    bootstrap: [AppComponent]
})
export class AppModule { }
