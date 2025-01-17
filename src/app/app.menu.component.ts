import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-menu',
    template: `
        <div class="layout-menu-container">
            <ul class="layout-menu" role="menu" (keydown)="onKeydown($event)">
                <li app-menu class="layout-menuitem-category" *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true" role="none">
                    <div class="layout-menuitem-root-text" [attr.aria-label]="item.label">{{item.label}}</div>
                    <ul role="menu">
                        <li app-menuitem *ngFor="let child of item.items" [item]="child" [index]="i" role="none"></li>
                    </ul>
                </li>
                <!-- <a href="https://www.primefaces.org/primeblocks-ng/#/">
                    <img src="assets/layout/images/{{appMain.config.dark ? 'banner-primeblocks-dark' : 'banner-primeblocks'}}.png" alt="Prime Blocks" class="w-full mt-3"/>
                </a> -->
            </ul>
        </div>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];
    modelStaff: any[];

    isStaff: boolean;
    isSubcontractor: boolean;
    isAdmin: boolean;

    constructor(public appMain: AppMainComponent, public _router: Router) {
    
     }

    ngOnInit() {
        this.isSubcontractor = false;
        this.isAdmin = false;

        if(this.isAdmin){
            this.model = [
                {
                    label: 'Home-admin',
                    items:[
                        {label: 'Dashboard',icon: 'pi pi-fw pi-home', routerLink: ['/admin-dashboard']},
                        {
                            label: 'All Bids',icon: 'pi pi-fw pi-inbox', routerLink: ['/admin-bids']
                    
                        },
                        {
                            label: 'Jobs in progress',icon: 'pi pi-fw pi-inbox', routerLink: ['/admin-jobs-progress']
                    
                        },
                       
                        {label: 'Posts',icon: 'pi pi-fw pi-wallet', routerLink: ['/admin-posts']},
                        {label: 'Staff',icon: 'pi pi-fw pi-inbox', routerLink: ['/admin-staff']},
                        {label: 'Subcontractors',icon: 'pi pi-fw pi-inbox', routerLink: ['/admin-subcontractors']},
                        {label: 'Pending Subcontractors',icon: 'pi pi-fw pi-user', routerLink: ['/admin-pending-subcontractors']},
                        {label: 'Profile',icon: 'pi pi-fw pi-user', routerLink: ['/admin-profile']},
                        
                    ]
                },
                {
                    label: 'UI Components',
                    items: [
                        {label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout']},
                        {label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input']},
                        {label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel']},
                        {label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate']},
                        {label: 'Button', icon: 'pi pi-fw pi-mobile', routerLink: ['/uikit/button'], class: 'rotated-icon'},
                        {label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table']},
                        {label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list']},
                        {label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree']},
                        {label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel']},
                        {label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay']},
                        {label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media']},
                        {label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'], preventExact: true},
                        {label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message']},
                        {label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file']},
                        {label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts']},
                        {label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc']}
                    ]
                },
                {
                    label:'Prime Blocks',
                    items:[
                        {label: 'Free Blocks', icon: 'pi pi-fw pi-eye', routerLink: ['/blocks'], badge: 'NEW'},
                        {label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank'},
                    ]
                },
                {label:'Utilities',
                    items:[
                        {label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', routerLink: ['/icons']},
                        {label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank'},
                    ]
                },
                {
                    label: 'Pages',
                    items: [
                        {label: 'Crud', icon: 'pi pi-fw pi-user-edit', routerLink: ['/pages/crud']},
                        {label: 'Timeline', icon: 'pi pi-fw pi-calendar', routerLink: ['/pages/timeline']},
                        {label: 'Landing', icon: 'pi pi-fw pi-globe', routerLink: ['pages/landing']},
                        {label: 'Login', icon: 'pi pi-fw pi-sign-in', routerLink: ['pages/login']},
                        {label: 'Error', icon: 'pi pi-fw pi-times-circle', routerLink: ['pages/error']},
                        {label: 'Not Found', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['pages/notfound']},
                        {label: 'Access Denied', icon: 'pi pi-fw pi-lock', routerLink: ['pages/access']},
                        {label: 'Empty', icon: 'pi pi-fw pi-circle', routerLink: ['/pages/empty']}
                    ]
                },
                {
                    label: 'Hierarchy',
                    items: [
                        {
                            label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
                            items: [
                                {
                                    label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
                                    items: [
                                        {label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark'},
                                        {label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark'},
                                        {label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark'},
                                    ]
                                },
                                {
                                    label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
                                    items: [
                                        {label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark'}
                                    ]
                                },
                            ]
                        },
                        {
                            label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
                            items: [
                                {
                                    label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
                                    items: [
                                        {label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark'},
                                        {label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark'},
                                    ]
                                },
                                {
                                    label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
                                    items: [
                                        {label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark'},
                                    ]
                                },
                            ]
                        }
                    ]
                },
                {
                    label:'Get Started',
                    items:[
                        {
                            label: 'Documentation', icon: 'pi pi-fw pi-question', routerLink: ['/documentation']
                        },
                        {
                            label: 'View Source', icon: 'pi pi-fw pi-search', url: ['https://github.com/primefaces/sakai-ng'], target: '_blank'
                        }
                    ]
                }
            ];
        }

        else if (this.isSubcontractor){
            this.model = [
                {
                    label: 'Home-Subcontractors',
                    items:[
                        {label: 'Dashboard',icon: 'pi pi-fw pi-home', routerLink: ['/subcontractor-dashboard']},
                        {label: 'Active work orders',icon: 'pi pi-fw pi-wallet', routerLink: ['/active-work-orders'],
                           
               
                         items:[
                                {
                                    label: 'details', icon: 'pi pi-eye', routerLink: ['/active-order-detail']
                                },
                            ]

                    
                       
                        },

                        {label: 'Profile',icon: 'pi pi-fw pi-user', routerLink: ['/profile']},


                        {
                            label: 'Payment',icon: 'pi pi-fw pi-wallet', routerLink: ['/payment'],
                            items: [
                                {
                                    label: 'Bank Account', icon: 'pi pi-credit-card', routerLink: ['/bank-account']
                                },
                                {
                                    label: 'Invoices', icon: 'pi pi-book', routerLink: ['/invoices']
                                }
                            ]
                    },


                        {label: 'Bid on jobs',icon: 'pi pi-fw pi-inbox', routerLink: ['/jobslist']},
                        
                    ]
                },
                {
                    label: 'UI Components',
                    items: [
                        {label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout']},
                        {label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input']},
                        {label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel']},
                        {label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate']},
                        {label: 'Button', icon: 'pi pi-fw pi-mobile', routerLink: ['/uikit/button'], class: 'rotated-icon'},
                        {label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table']},
                        {label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list']},
                        {label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree']},
                        {label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel']},
                        {label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay']},
                        {label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media']},
                        {label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'], preventExact: true},
                        {label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message']},
                        {label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file']},
                        {label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts']},
                        {label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc']}
                    ]
                },
                {
                    label:'Prime Blocks',
                    items:[
                        {label: 'Free Blocks', icon: 'pi pi-fw pi-eye', routerLink: ['/blocks'], badge: 'NEW'},
                        {label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank'},
                    ]
                },
                {label:'Utilities',
                    items:[
                        {label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', routerLink: ['/icons']},
                        {label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank'},
                    ]
                },
                {
                    label: 'Pages',
                    items: [
                        {label: 'Crud', icon: 'pi pi-fw pi-user-edit', routerLink: ['/pages/crud']},
                        {label: 'Timeline', icon: 'pi pi-fw pi-calendar', routerLink: ['/pages/timeline']},
                        {label: 'Landing', icon: 'pi pi-fw pi-globe', routerLink: ['pages/landing']},
                        {label: 'Login', icon: 'pi pi-fw pi-sign-in', routerLink: ['pages/login']},
                        {label: 'Error', icon: 'pi pi-fw pi-times-circle', routerLink: ['pages/error']},
                        {label: 'Not Found', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['pages/notfound']},
                        {label: 'Access Denied', icon: 'pi pi-fw pi-lock', routerLink: ['pages/access']},
                        {label: 'Empty', icon: 'pi pi-fw pi-circle', routerLink: ['/pages/empty']}
                    ]
                },
                {
                    label: 'Hierarchy',
                    items: [
                        {
                            label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
                            items: [
                                {
                                    label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
                                    items: [
                                        {label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark'},
                                        {label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark'},
                                        {label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark'},
                                    ]
                                },
                                {
                                    label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
                                    items: [
                                        {label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark'}
                                    ]
                                },
                            ]
                        },
                        {
                            label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
                            items: [
                                {
                                    label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
                                    items: [
                                        {label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark'},
                                        {label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark'},
                                    ]
                                },
                                {
                                    label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
                                    items: [
                                        {label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark'},
                                    ]
                                },
                            ]
                        }
                    ]
                },
                {
                    label:'Get Started',
                    items:[
                        {
                            label: 'Documentation', icon: 'pi pi-fw pi-question', routerLink: ['/documentation']
                        },
                        {
                            label: 'View Source', icon: 'pi pi-fw pi-search', url: ['https://github.com/primefaces/sakai-ng'], target: '_blank'
                        }
                    ]
                }
            ];
        }
        else {
        this.model = [
            {
                label: 'Home-Staff',
                items:[
                    {label: 'Dashboard',icon: 'pi pi-fw pi-home', routerLink: ['/']},
                    {label: 'Profile',icon: 'pi pi-fw pi-user', routerLink: ['/profile']},
               
                ]
            },
            {
                label: 'Rights/Privileges',
                items:[
                    {label: 'Post a Job',icon: 'pi pi-fw pi-wallet', routerLink: ['/postjob']},
                    {label: 'Subcontractors',icon: 'pi pi-fw pi-users', routerLink: ['/subcontractors']},
                    {label: 'Subcontractors Request',icon: 'pi pi-fw pi-users', routerLink: ['/staff-subcontractors-request']}
                ]
            },                
        ]
    }
        
    }

    onKeydown(event: KeyboardEvent) {
        const nodeElement = (<HTMLDivElement> event.target);
        if (event.code === 'Enter' || event.code === 'Space') {
            nodeElement.click();
            event.preventDefault();
        }
    }
}
