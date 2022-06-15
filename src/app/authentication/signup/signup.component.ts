import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfigService } from '../../service/app.config.service';
import { AppConfig } from '../../api/appconfig';
import { Subscription } from 'rxjs';
import { CountryService } from 'src/app/service/countryservice';
import { SkillsService } from 'src/app/service/skills.service';
import { MessageService, SelectItem } from 'primeng/api';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles:[`
    :host ::ng-deep .p-password input {
    width: 100%;
    padding:1rem;
    }

    :host ::ng-deep .pi-eye{
      transform:scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
    }

    :host ::ng-deep .pi-eye-slash{
      transform:scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
    }
  `]
})
export class SignupComponent implements OnInit, OnDestroy {

  skills: any[];
  selectedSkills: string[] = [];

  valCheck: string[] = ['remember'];

  password: string;

  confirmPassword: string;
  
  config: AppConfig;
  
  subscription: Subscription;

  radious: SelectItem[];
  selectedDrop: SelectItem;

  constructor(public configService: ConfigService, 
    private skillService: SkillsService
    ){ }

  ngOnInit(): void {
    this.skillService.getSkills().then(skills => {
      this.skills = skills;
  });

    this.config = this.configService.config;
    this.subscription = this.configService.configUpdate$.subscribe(config => {
      this.config = config;
    });


    this.radious = [
      {label: '20 km', value: {id: 1, name: '20 km', code: 'NY'}},
      {label: '30 km', value: {id: 2, name: '30 km', code: 'RM'}},
      {label: '40 km', value: {id: 3, name: '40 km', code: 'LDN'}},
      {label: '50 km', value: {id: 4, name: '50 km', code: 'IST'}},
      {label: '60 km', value: {id: 5, name: '60 km', code: 'PRS'}}
  ];
  }


  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
