import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendUserService {

  constructor(
    private http : HttpClient
  ) { }


  postUser(user : User) {
   return this.http.post('url', user).toPromise();
  }
}
