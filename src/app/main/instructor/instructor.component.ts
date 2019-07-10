import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';

import { User } from '../user.model';
import { UserService } from 'src/app/service/user.service';
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder, public router: Router, public dialog: MatDialog, public service: UserService) { }



  openLoginDialog(): void {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(InstructorLoginComponent, {

    });
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }


  add(): void {
    this.service.adddata(this.firstFormGroup.value);

  }
}








@Component({
  // tslint:disable-next-line: component-selector
  selector: 'instructor-login',
  templateUrl: './instructorlogin.component.html',
  styleUrls: ['./instructor.component.css'],
})
export class InstructorLoginComponent {
  loginform: FormGroup;

  // tslint:disable-next-line: max-line-length
  constructor(public dialogRef: MatDialogRef<InstructorLoginComponent>, public service: UserService, public dialog: MatDialog, public router: Router) {
    this.loginform = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),


    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  openSignUpDialog(): void {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(InstructorSignUpComponent, {

    });
  }


  add() {


    this.service.adddata(this.loginform.value);
    // tslint:disable-next-line: prefer-const
    let userInfo = JSON.parse(sessionStorage.getItem('totoList'));
    this.service.login(userInfo).subscribe(x => {
      if (x.userResponse.message == 'success') {
        alert('Sucessful login');
        this.router.navigate(['./client']);
      } else {
        alert('invalid email and passowrd');
      }
    });






  }




}


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'instructor-signup',
  templateUrl: './instructorsignup.component.html',
  styleUrls: ['./instructor.component.css'],
})
export class InstructorSignUpComponent {
  // tslint:disable-next-line: new-parens
  User: User = new User;

  signupform: FormGroup;
  constructor(public service: UserService, public router: Router, public dialogRef: MatDialogRef<InstructorSignUpComponent>) {
    this.signupform = new FormGroup({
      fullname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern('[^ @]*@[^ @]*'), Validators.email]),
      phonno: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      passwordconfirm: new FormControl('', [Validators.required]),


    });
  }
  /**** for closed dialog box*** */
  onNoClick(): void {
    this.dialogRef.close();
  }
  /***** for store in localstorage*****/
  save(): void {
    this.service.adddata(this.signupform.value);
    alert('successful submission');
    this.router.navigate(['./content']);

  }




}




@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./instructor.component.css']

})
export class ContentComponent {
  data = {
    companies: [
      {
        company: 'example comany',
        projects: [
          {
            projectName: 'example project',
            projectModule:'sahdf',
          }
        ]
      }
    ]
  };


  myForm: FormGroup;

  constructor(private fb: FormBuilder, public router: Router,public service:UserService) {
    this.myForm = this.fb.group({
      companies: this.fb.array([])
    });

    this.setCompanies();
  }

  addNewCompany() {
    const control =  this.myForm.controls.companies as FormArray;
    control.push(
      this.fb.group({
        company: [''],
        projects: this.fb.array([])
      })
    );
  }

  deleteCompany(index) {
    const control =  this.myForm.controls.companies as FormArray;
    control.removeAt(index);
  }

  addNewProject(control) {
    control.push(
      this.fb.group({
        projectName: [''],
        projectModule:[''],
      }));
  }

  deleteProject(control, index) {
    control.removeAt(index);
  }

  setCompanies() {
 const control = this.myForm.controls.companies as FormArray;
 this.data.companies.forEach(x => {
      control.push(this.fb.group({
        company: x.company,
        projects: this.setProjects(x)
      }));
    });
  }

  setProjects(x) {
    const arr = new FormArray([]);
    x.projects.forEach(y => {
      arr.push(this.fb.group({
        projectName: y.projectName
      }));
    });
    return arr;
  }
  save() {
    this.service.UserData(this.myForm.value).subscribe(x=>{
      return x;
    })
  }

}





