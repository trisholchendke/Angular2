import { Component } from '@angular/core';
//import {WebStorageModule, LocalStorageService} from 'angular2-localstorage';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],

})

//@Ngcomponent({
    //import: [WebStorageModule]
//})

export class AppComponent {
    // title = 'Guru Softwares!';
	  //@LocalStorage() public username:string = '';

    public password:string;

    //here happens the magic. `rememberMe` is always restored from the localstorage when you reload the site
    //@LocalStorage() public rememberMe:boolean = false;
}
