import { Component } from '@angular/core';
@Component({
    selector: 'app-root',
    template: `
        <div class="container tac">
            <div class="header">
                <h1 >{{title}}</h1>
            </div>
            <hr style="color:white">           
            <router-outlet></router-outlet>
        </div>
    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'BOOOOOOOKEEEES';

}