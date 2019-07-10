import{Component, OnInit} from "@angular/core";
import { MatFormFieldBase } from '@angular/material';
import * as firebase from 'firebase/app';
@Component({
  selector:"app-root",
  templateUrl:"./app.component.html"
})

export class AppComponent implements OnInit{


  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAmW2iqtI0b8E37JZ3CVOEcPC8ZW40VqFQ",
      authDomain: "digisaksham-b0b82.firebaseapp.com",

    });

  }
}
