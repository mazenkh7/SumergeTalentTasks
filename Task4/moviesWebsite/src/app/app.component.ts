import { Component } from '@angular/core';
import {CatalogueService} from "./services/catalogue.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
  }
  title = 'Movies Website';
}
