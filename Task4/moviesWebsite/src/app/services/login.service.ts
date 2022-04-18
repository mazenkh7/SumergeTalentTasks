import {EventEmitter, Injectable} from "@angular/core";
import {MovieModel} from "./movie.model";
import {MoviePageModel} from "./movie-page.model";

@Injectable()
export class LoginService {
  isLoggedIn = JSON.parse(localStorage.getItem("loggedIn") || 'false');
  users = [
    {email: 'jojo@joestar.com', password: '123'}
  ]

  authAndLogIn(authData: { email: string, password: string, checkbox: boolean }): boolean {
    // filter users array by email and password and save into a temp array
    let filteredUsers = this.users.filter(user => user.email === authData.email && user.password === authData.password);
    if (filteredUsers[0]) {// check if email/pass combination is present in user list for login.
      this.logIn(authData.checkbox);
      return true;
    }
    return false;
  }

  logIn(stayLoggedIn: boolean) {
    this.isLoggedIn = true;
    if (stayLoggedIn)
      localStorage.setItem("loggedIn", 'true');
  }

  logOut() {
    this.isLoggedIn = false;
    localStorage.setItem("loggedIn", 'false');
  }
}
