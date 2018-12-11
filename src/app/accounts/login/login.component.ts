import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { first } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { stringify } from '@angular/core/src/render3/util';
import { CustomerService } from 'src/app/services/Customer.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  ngOnInit() {
    // this.authenticateService.logout();
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}
    model: any = {};
    
    // username:string;
    // password:string;

    loading = false;
    returnUrl: string;
    test:string;
    error = 'Insert data!';
  

    _url = 'http://localhost:8080/token';

    
    constructor(private authenticateService:AuthenticationService,
                private route:ActivatedRoute,
                private router:Router,
                private http: HttpClient,
                private customerService:CustomerService) { }
  

    

    // login() {
    //     this.loading = true;
    //     this.authenticateService.login(this.loginModel.username, this.loginModel.password)
    // }





    tryLogin() {
      this.authenticateService.login(
        this.username,
        this.password
      ).subscribe(
        r => {
        
           this.customerService.setToken( r.token);
           console.log("Se --->>" + r.token);
           
        },
      r => {
        alert(r.error.error + r.token);
        console.log("ERROR!");
        
      });
    }

      
      // return this.http.post(this._url, )
      //   .subscribe(
      //     token => {
      //       // this.authenticateService.setToken(JSON.stringify(token));
           
      //       sessionStorage.setItem('token',JSON.stringify(token));
               
      //       console.log(token);
      //     },
      //     (error)=>{
      //       console.log(error);
      //       console.log("error" + error);
            
            
      //     }
      //   );
      //   // console.log(this.users);
      
    
    


    addLocalStorage(){
         sessionStorage.setItem("Test",this.test);
    }

}


