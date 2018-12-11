import { Component } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contacts';

  constructor(public http:HttpClient){

  }
  
  public connectServer() {
    this.http.get('url')
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }
}
