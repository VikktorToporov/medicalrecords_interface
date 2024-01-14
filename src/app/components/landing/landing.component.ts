import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
    headerSolidColor = false;

    @HostListener("window:scroll", [])
    onWindowScroll() {

        const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (number > 20) {
            this.headerSolidColor = true;
        } else {
            this.headerSolidColor = false;
        }
    }

    scroll(el: HTMLElement) {
        if (el) {
            el.scrollIntoView({behavior: 'smooth'});
        }
    }
}
