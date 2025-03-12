import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Progetti } from '../models/progetti';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
private _http= inject(HttpClient)
private _url="/../../project.json"
  constructor() { }

  public getProjects(){
    return this._http.get<Progetti[]>(this._url);
  }
}
