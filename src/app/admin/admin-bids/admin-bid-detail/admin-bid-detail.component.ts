import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-bid-detail',
  templateUrl: './admin-bid-detail.component.html',
  styleUrls: ['./admin-bid-detail.component.scss']
})
export class AdminBidDetailComponent implements OnInit {

  display: boolean;
  
  jobComplete: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
