import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../accounts/login/login.component';
import { ContactsService } from '../services/contacts.service';
import { first} from 'rxjs/operator/first';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:LoginComponent[] [];

  constructor(private contactService: ContactsService) { }

  ngOnInit() {
    this.contactService.getAllContacts();
  }



}
