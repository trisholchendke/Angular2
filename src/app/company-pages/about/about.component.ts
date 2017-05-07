import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

	imagePath = "";

    constructor() {}

    ngOnInit() {
    	this.imagePath = "https://drive.google.com/uc?export=download&id=0B4TbH-bkejqXQlE4WG1JcjB3bjg";
    }

}
