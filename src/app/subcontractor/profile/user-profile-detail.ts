import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
    templateUrl: './user-profile-detail.html'
})
export class UserProfileDetailComponent implements OnInit{

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
        this.skillService.getSkills().then(skills => {
            this.skills = skills;
    });}

    
  onUpload(event) {
    for (const file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
}
}
