import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
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

    panelMenuItems: MenuItem[];

    constructor(
        private skillService: SkillsService,
        private messageService: MessageService
        ){ }

    ngOnInit(): void {
        this.panelMenuItems = [
            {
                label: 'My CV',
                items: [
                    {
                        label: 'CV Document',
                        icon: 'pi pi-fw pi-plus',
                                               
                    },
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-user-edit'
                    }
                ]
            },
            {
                label: 'Insurance',
                items: [
                    {
                        label: 'View',
                        icon: 'pi pi-fw pi-list'
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-fw pi-search'
                    }
        
                ]
            },
            {
                label: 'Qualification',
                items: [
                    {
                        label: 'Tracker',
                        icon: 'pi pi-fw pi-compass',
        
                    },
                    {
                        label: 'Map',
                        icon: 'pi pi-fw pi-map-marker',
        
                    },
                    {
                        label: 'Manage',
                        icon: 'pi pi-fw pi-pencil'
                    }
                ]
            },
            {
                label: 'Profile',
                items: [
                    {
                        label: 'Settings',
                        icon: 'pi pi-fw pi-cog'
                    },
                    {
                        label: 'Billing',
                        icon: 'pi pi-fw pi-file'
                    }
                ]
            }
        ];

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
