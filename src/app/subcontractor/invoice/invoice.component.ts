import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './invoice.component.html'
})
export class InvoiceComponent implements OnInit {

    display: boolean;

    constructor(private router: Router) {}

    ngOnInit() {   
    }
}