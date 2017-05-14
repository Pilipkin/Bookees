import {Injectable} from "@angular/core";
import {Book} from "../models/Book";
import {Http, Headers } from "@angular/http";
import "rxjs/add/operator/toPromise";


@Injectable()
export class BookService{
    constructor(private http: Http) { }
    private booksUrl = 'api/books';
    private headers = new Headers({'Content-Type': 'application/json'});

    getBooks(): Promise<Book[]> {
        return this.http.get(this.booksUrl)
            .toPromise()
            .then(response => response.json().data as Book[])
            .catch(this.handleError);
    }

    getBook(id:number):Promise<Book>{
        const url = `${this.booksUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Book)
            .catch(this.handleError)
    }

    update(book:Book):Promise<Book>{
        const url = `${this.booksUrl}/${book.id}`;
        return this.http
            .put(url, JSON.stringify(book), {headers:this.headers})
            .toPromise()
            .then(() => book)
            .catch(this.handleError)
    }

    create(book:Book): Promise<Book> {
        return this.http
            .post(this.booksUrl, JSON.stringify(book), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Book)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.booksUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error:any):Promise<any>{
        console.log('Errrrrrrorrrr', error);
        return Promise.reject(error.message || error)
    }



}