import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: '';
  password: '';

  
  constructor() { }

  ngOnInit() {
  }

  onLogin(){
    console.log(this.email); /*use variable declared globally i.e email*/
    console.log(this.password);
  }

}
