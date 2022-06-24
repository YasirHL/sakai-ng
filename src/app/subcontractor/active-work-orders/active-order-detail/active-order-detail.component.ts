import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-active-order-detail',
  templateUrl: './active-order-detail.component.html',
  styleUrls: ['./active-order-detail.component.scss']
})
export class ActiveOrderDetailComponent implements OnInit {

  display: boolean;
  uploadedFiles: any[] = [];

  constructor( private messageService: MessageService) { }

  ngOnInit(): void {
  }

  
    
  onUpload(event) {
    for (const file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
}

}
