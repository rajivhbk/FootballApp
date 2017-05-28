import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUrl;
    constructor(private _router: Router) { }

    isCurrentRoute(route){
        return this.currentUrl == route;
    }

  ngOnInit() {
     let currentUrl = this._router.url;
  }

}
