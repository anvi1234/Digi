
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormControlName } from '@angular/forms';
import { Form } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/main/user.model';
import { mimeType } from './mime-type.validators';
import { UserService } from 'src/app/service/user.service';
import { ChildrenOutletContexts, ActivatedRoute, Router } from '@angular/router';





@Component({
  selector: 'app-dash-req',
  templateUrl: './dashboardrequirement.component.html',
  styleUrls: ['./dashboardrequirement.component.css']



})



// tslint:disable-next-line: component-class-suffix
export class DashboardRequirement implements OnInit {

  constructor(private fb: FormBuilder, public router: Router, public service: UserService) {
    this.myForm = this.fb.group({
      companies: this.fb.array([])
    });

    this.setCompanies();
  }
  profileform: FormGroup;
  fileToUpload: File = null;
  imageUrl = 'assets/image/upload.png';
  formattedMessage: string;
  user: User[];

  // tslint:disable-next-line: ban-types
  coursename: String;
  // tslint:disable-next-line: ban-types
  image: string;
  // tslint:disable-next-line: ban-types
  file: String;
  addcoursearrays: [];


  selectedfile: string;

  Uploadfile: any[] = [
    { id: 0, name: 'choose any file' },
    { id: 1, name: 'pdf' },
    { id: 2, name: 'ppt' },
    { id: 3, name: 'video' }
  ];



  data = {
    companies: [
      {
        coursemodule: '',
        projects: [
          {

            submodulename: '',
            uploadvideofile: '',
            uploadpdffile: '',
            uploadpptfile: '',
          }
        ]
      }
    ]
  };



  myForm: FormGroup;

  choice(code) {
    this.selectedfile = code;

  }

  addNewmodule() {
    const control = this.myForm.controls.companies as FormArray;
    control.push(
      this.fb.group({
        coursemodule: [''],
        projects: this.fb.array([])
      })
    );
  }

  deleteCompany(index) {
    const control = this.myForm.controls.companies as FormArray;
    control.removeAt(index);
  }

  addNewProject(control) {
    control.push(
      this.fb.group({
        submodulename: [''],
        uploadpdffile: [''],
        uploadpptfile: [''],
        uploadvideofile: [''],
      }));
  }

  deleteProject(control, index) {
    control.removeAt(index);
  }

  setCompanies() {
    const control = this.myForm.controls.companies as FormArray;
    this.data.companies.forEach(x => {
      control.push(this.fb.group({
        coursemodule: x.coursemodule,
        projects: this.setProjects(x)
      }));
    });
  }

  setProjects(x) {
    const arr = new FormArray([]);
    x.projects.forEach(y => {
      arr.push(this.fb.group({
        submodulename: y.submodulename,
        uploadpdffile: y.uploadpdffile,
        uploadpptfile: y.uploadpptfile,
        uploadvideofile: y.uploadvideofile
      }));
    });
    return arr;
  }
  save() {
    this.service.UserData(this.myForm.value).subscribe(x => {
      return x;
    });
  }


  saved(){
    console.log(JSON.stringify(this.myForm.value));
  }
    handleFileInput(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        // tslint:disable-next-line: no-unused-expression

        this.image = event.target.result;

        $('.video').append('<video src="' + this.image + '" width="90%" height="240" style="margin-right:70px;" controls></video>');

      }
    }
  }






  addContact() {


    this.service.adddata(this.profileform.value);
    // tslint:disable-next-line: prefer-const
    let userInfo = JSON.parse(sessionStorage.getItem('totoList'));
    this.service.UserData(userInfo).subscribe(x => {
      alert('Sucessful Submission,We will send you verifiaction email');
    });



  }

  addTag() {
    // tslint:disable-next-line: whitespace
    (this.profileform.get(' addcoursearray') as FormArray).push(new FormControl(''));
  }

  ngOnInit() {
    this.service
      .getProducts()
      .subscribe((data: User[]) => {
        this.user = data;
      });

      /***
      this.myForm = this.fb.group({
        countries: this.fb.array([this.initItemRows()])
      });
      * */
  }
/***
  initItemRows() {
    return this.fb.group({
      // list all your form controls here, which belongs to your form array
     countries: ['']
    });
  }
  get formArr() {
    return this.myForm.get('countries') as FormArray;
  }
**** */
  update() {
    this.service.update(this.profileform.value).subscribe(x => {
      return x;
    })
  }

}



















