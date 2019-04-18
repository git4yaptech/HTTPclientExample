import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urllink = 'https://randomuser.me/api/?results=25'
  constructor(private http: HttpClient) {}
  getUsers() {
      return this.http.get(this.urllink);
    }
}

