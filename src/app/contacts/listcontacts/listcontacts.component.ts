import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-listcontacts',
  templateUrl: './listcontacts.component.html',
  styleUrls: ['./listcontacts.component.css']
})
export class ListcontactsComponent implements OnInit {
  contacts:any;
  constructor(private contactService:ContactsService) { }

  ngOnInit() {
    this.getAllContacts();
  }

  getAllContacts(){
    this.contactService.getAllContacts().subscribe(
      data => {this.contacts = data},
      err => console.log(err),
      () => console.log("Contacts loaded!")
    );}
    
}
