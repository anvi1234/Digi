import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as $ from 'jquery';

@Component({
  selector: 'app-studentpurchase',
  templateUrl: './studentpurchase.component.html',
  styleUrls: ['./studentpurchase.component.css']
})
export class StudentpurchaseComponent {
  isCollapsed:boolean =false;
  constructor() {
  }
  carouselOptions = {
    margin: 25,
    nav: true,
    autoplay:true,
    autoplayTimeout:10,
    autoplayHoverPause:false,
    navText: ["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      },
      1500: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  }



// tslint:disable-next-line: prefer-const
}









