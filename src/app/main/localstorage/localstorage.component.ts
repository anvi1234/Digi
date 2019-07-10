import {Component, Inject, OnInit} from "@angular/core";
import{Router} from "@angular/router";
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
@Component({
    selector:"local",
    templateUrl:"./localstorage.component.html"
})
export class LocalStorageComponent implements OnInit{
    todoForm:FormGroup;
        
  
    constructor(public router:Router,public localStorageService:UserService,public formBuilder:FormBuilder){
        
       
    }
    click(){
        this.router.navigate(["./b"]);
    }

   ngOnInit(){
       this.todoForm=this.formBuilder.group({
           title:["",[Validators.required]]

       });
   }
   add():void{
       this.localStorageService.adddata(this.todoForm.value.title);
    
   }
    
    
}