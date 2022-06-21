import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {

  uploadedFiles: any[] = [];
    skills: any[];
    selectedSkills: string[] = [];
  displayDetail: boolean;
  displayProfile: boolean;
  displayDocument: boolean;
  displaySkills: boolean;

  constructor(
    private skillService: SkillsService,
    private messageService: MessageService
    ){ }

  ngOnInit(): void {
  }


  onUpload(event) {
    for (const file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
}
}