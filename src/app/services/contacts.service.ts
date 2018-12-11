import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpoptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http:HttpClient) { }

  getAllContacts(){
    return this.http.get('server/contact/list')
  }

  getToken(){
    return this.http.get('/server/token')
  }

}
