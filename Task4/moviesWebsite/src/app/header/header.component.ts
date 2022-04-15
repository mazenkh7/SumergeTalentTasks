import { Component, OnInit } from '@angular/core';
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";
import {CatalogueService} from "../services/catalogue.service";
import {max} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private catalogueService: CatalogueService) { }

  ngOnInit(): void {
  }

  onLogOut() {
    this.loginService.logOut();
    this.router.navigate(['/']);
  }

  routeHasTopRated(){
    return this.router.url.toString().match("toprated");
  }

  getPageNumber(){
    return this.loginService.page.page;
  }

  nextPage() {
    let p = this.loginService.page.page + 1;
    console.log(p)
    console.log('/toprated/'+this.loginService.page.page)
    this.router.navigate(['/toprated/',p])
  }

  prevPage() {
    let p = this.loginService.page.page - 1;
    if (p<1)
      return;
    console.log(p)
    console.log('/toprated/'+this.loginService.page.page)
    this.router.navigate(['/toprated/',p])
  }
}
