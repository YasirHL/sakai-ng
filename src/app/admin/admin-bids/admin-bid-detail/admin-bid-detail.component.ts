import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-bid-detail',
  templateUrl: './admin-bid-detail.component.html',
  styleUrls: ['./admin-bid-detail.component.scss']
})
export class AdminBidDetailComponent implements OnInit {

  display: boolean;
  acceptJobDialog: boolean = false;
  jobComplete: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }


  confirmAcceptJob()
  {
    this.acceptJobDialog = true;
  }

  confirmJob()
  {
    console.log('job accepted');
    this.acceptJobDialog = false;
  }
}
