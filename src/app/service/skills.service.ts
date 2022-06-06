import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http: HttpClient) { }


  getSkills() {
    return this.http.get<any>('assets/demo/data/skills.json')
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
    }
}
