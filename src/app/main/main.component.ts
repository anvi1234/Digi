import {AuthenticationService } from './../auth/auth.service';
import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {User} from './user.model';

import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { Validators, FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  jobtext:boolean=false;
  condidatetext:boolean=false;
  collegetext:boolean=false;
  onlinetext:boolean=false;
  peopletext:boolean=false;

  title = 'my-dream-app';
  footerlist = [
    'About Us', 'Blog', 'Support', 'Affilate'
  ];

  carouselOptions = {
    margin: 25,
    dots:false,

    navigationText : ["prev","next"],
    pagination : true,
    autoPlay : true,
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
        items: 5,
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



}











@Component({
// tslint:disable-next-line: component-selector
  selector: 'login',
  templateUrl: './register/login.component.html',
  styleUrls: ['./register/register.component.css'],
  providers: [UserService]
})

export class LoginComponent {
// tslint:disable-next-line: new-parens
  User: User = new User;

  constructor(public dialogRef: MatDialogRef<LoginComponent>, public service: UserService,private authservice:AuthenticationService) {}
  onNoClick(): void {
    this.dialogRef.close();
  }

  logindata() {
    this.service.login(this.User).subscribe(x => {
// tslint:disable-next-line: triple-equals
        if (x.userResponse.message != 'warning') {
          alert('Successful Login');
        } else {
            alert('User is not Valid!!');
        }
    })

  }
  add(): void{
    this.service.adddata(this.User);
  }
     save(form:NgForm){
       const email=form.value.email;
       const password=form.value.password;


     }

}







@Component({
// tslint:disable-next-line: component-selector
  selector: 'signup',
  templateUrl: './register/signup.component.html',
  styleUrls: ['./register/register.component.css'],
  providers: [UserService]
})

export class SignupComponent {
// tslint:disable-next-line: new-parens
formattedMessage: string;
  User: User = new User ;

 studentsignupform: FormGroup;
  constructor(public service: UserService, public dialogRef: MatDialogRef<SignupComponent>, public router: Router,private authservice:AuthenticationService) {
    this.studentsignupform = new FormGroup({
      fullname: new FormControl('', [Validators.required]),
      email: new FormControl('' , [Validators.required, Validators.pattern('[^ @]*@[^ @]*'), Validators.email]),
        phoneno: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
      passwordconfirm: new FormControl('', [Validators.required]),


    });
  }

onNoClick(): void {
    this.dialogRef.close();
  }

  add(): void{
    this.service.adddata(this.studentsignupform.value);
  }



  save(form:NgForm){
    const email=form.value.email;
    const password=form.value.password

  }


}
