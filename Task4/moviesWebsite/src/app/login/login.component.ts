import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {LoginService} from "../services/login.service";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: String = '';
  password: String = '';
  checkBox: boolean = false;
  private loggedInLocal = JSON.parse(localStorage.getItem('loggedIn') || 'false');

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.loggedInLocal) {
      this.loginService.logIn(true);
      this.router.navigate(['/toprated']);
    }
  }

  onSubmit(form: NgForm) {
    if (this.loginService.authAndLogIn(form.value)) {
      this.router.navigate(['/toprated']);
      form.reset();
    }else{
      alert("Email or password incorrect!");
    }
  }
}
