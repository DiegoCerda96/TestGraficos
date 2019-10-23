import { Component, OnInit, Renderer, ViewChild, ElementRef } from '@angular/core';
import { ROUTES } from '../../sidebar/sidebar.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AuthService } from '../../services/auth.service';



@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit {
    private listTitles: any[];
    location: Location;
    private nativeElement: Node;
    private toggleButton;
    private sidebarVisible: boolean;

    // @ViewChild("navbar-cmp",) button;

    constructor(location: Location, private renderer: Renderer, private element: ElementRef,
        private afAuth: AngularFireAuth,
        private router: Router,
        private authService: AuthService) {
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }

    ngOnInit() {
        this.listTitles = ROUTES.filter(listTitle => listTitle);
        var navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        this.router.events.subscribe((event) => {
            this.sidebarClose();
        });

    }
    getTitle() {
        return localStorage.getItem('NombreComunidad')
    }

    getUser() {
        return localStorage.getItem('NombreUsuario')
    }

    logOUT() {
        localStorage.clear();
        this.authService.logout().then(
            () => {
                this.router.navigate(['/login']);
            }
        );
    }

    sidebarToggle() {
        // var toggleButton = this.toggleButton;
        // var body = document.getElementsByTagName('body')[0];

        if (this.sidebarVisible === false) {
            this.sidebarOpen();
            // setTimeout(function () {
            //     toggleButton.classList.add('toggled');
            // }, 500);
            // body.classList.add('nav-open');
            // this.sidebarVisible = true;
        } else {
            // this.toggleButton.classList.remove('toggled');
            // this.sidebarVisible = false;
            // body.classList.remove('nav-open');
            this.sidebarClose();
        }
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        const mainPanel =  <HTMLElement>document.getElementsByClassName('main-panel')[0];
        setTimeout(function() {
            toggleButton.classList.add('toggled');
        }, 500);

        html.classList.add('nav-open');
        if (window.innerWidth < 991) {
          mainPanel.style.position = 'fixed';
        }
        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        const mainPanel =  <HTMLElement>document.getElementsByClassName('main-panel')[0];
        if (window.innerWidth < 991) {
          setTimeout(function() {
            mainPanel.style.position = '';
          }, 500);
        }
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
}
