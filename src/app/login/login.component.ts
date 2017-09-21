import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]

})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  // 在构造函数中将AuthService实例注入到成员变量service中
  constructor(private service: AuthService) { }

  ngOnInit() {
  }


  onSubmit(formValue) {
    console.log(formValue);
    console.log('auth result is : ' + this.service.loginWithCredentials(this.username, this.password));
  }

}
