import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfigService } from '../../service/app.config.service';
import { AppConfig } from '../../api/appconfig';
import { Subscription } from 'rxjs';
import { CountryService } from 'src/app/service/countryservice';
import { SkillsService } from 'src/app/service/skills.service';
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

  constructor(public configService: ConfigService, private skillService: SkillsService,){ }

  ngOnInit(): void {
    this.skillService.getSkills().then(skills => {
      this.skills = skills;
  });

    this.config = this.configService.config;
    this.subscription = this.configService.configUpdate$.subscribe(config => {
      this.config = config;
    });
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
