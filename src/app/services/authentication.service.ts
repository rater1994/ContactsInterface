import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map'
import { User } from '../models/user';
import {Observable} from 'rxjs/Observable';
import { LoginComponent } from '../accounts/login/login.component';
import { LoginResultModel } from '../models/LoginResultModel.interface';

@Injectable()
export class AuthenticationService {   
    url = 'http://localhost:8080/token';
    
    returnUrl: string;
    
    // user = new User();
    username:string;
    password:string;

    headers = {
        headers: new HttpHeaders({
            // 'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
    }
  

    constructor(private http: HttpClient) { 
    }


    login(username: string, password: string): Observable<LoginResultModel>{
        return this.http.post<LoginResultModel>('http://localhost:8080/token',{
          username: username,
          password: password
        },this.headers);

      }
      
 

    // login(username,password) {
    //     console.log("Message from service: " + this.user);

    //     return this.http.post<any>(this._url, this.user);
        
    // }
    

    // login(ussername: string, password: string): Observable<any> {
    //     const credentials = {username: ussername, password: password};
    //     console.log('attempAuth ::');
    //     return this.http.post('http://localhost:8080/token', credentials);
    //   }


    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}