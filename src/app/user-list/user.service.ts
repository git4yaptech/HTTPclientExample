import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urllink = 'https://randomuser.me/api/?results=5'
  public apps;

  constructor(private http: HttpClient) {
  }

  getUsers() {
    /*const fetchUser = this.http.get(this.urllink);
    fetchUser.subscribe(x => {
      this.apps = x;
    });
    this.apps.map(x => console.log(x));
    return this.apps;*/
  }
}
