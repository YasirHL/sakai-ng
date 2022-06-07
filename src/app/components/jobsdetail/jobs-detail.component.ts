import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './jobs-detail.component.html'
})
export class JobsDetailComponent implements OnInit {

    display: boolean;

    constructor(private router: Router) {}

    ngOnInit() {   
    }
}