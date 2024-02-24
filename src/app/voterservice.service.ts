import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { VoterModel } from './VoterModel';
@Injectable({
  providedIn: 'root'
})
export class VoterserviceService {

  constructor(private http:HttpClient) { }

  public getAllVotersData():Observable<VoterModel[]>{
    return this.http.get<VoterModel[]>("http://localhost:2020/voter/getAll")
  }
}
