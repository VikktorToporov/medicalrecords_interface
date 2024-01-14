import { Component } from '@angular/core';

import { Router, NavigationStart } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    isLogged = false;

    constructor(private router: Router) { }

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (localStorage.getItem('SESSION_ID') && localStorage.getItem('USER_ID')) {
                    this.isLogged = true;
                } else {
                    this.isLogged = false;
                }
            }
          });
    }
}
