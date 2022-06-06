import { Component, OnDestroy } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items: MenuItem[];
    menuItems: MenuItem[];

    constructor(public appMain: AppMainComponent) {
        this.menuItems = [
            {
                label: 'Yasir', icon: ''
            },
            {
                label: 'yasir@gmail.com', icon: ''
            },
            {
                separator: true
            },
            {
                label: 'Edit Profile', icon: 'pi pi-cog', routerLink:'../pages/login'
            },
            {
                label: 'Logout', icon: 'pi pi-fw pi-sign-out'
            }
        ];
    }
}
