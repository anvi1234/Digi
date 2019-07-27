import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { FormControlName } from '@angular/forms';
import { Form } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/main/user.model';

import { UserService } from 'src/app/service/user.service';
import { FileUploader } from 'ng2-file-upload';

const URL = 'http://localhost:3000/pdf';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'dash-req',
  templateUrl: './dashboardrequirement.component.html',
  styleUrls: ['./dashboardrequirement.component.css']



})


// tslint:disable-next-line: component-class-suffix
export class DashboardRequirement implements OnInit {
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'pdf' });


  // tslint:disable-next-line: no-inferrable-types
  private selectedLink: string = 'Online';

  setradio(e: string): void {

    this.selectedLink = e;
  }
  isSelected(name: string): boolean {

    if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown
      return false;
    }
    return (this.selectedLink === name); // if current radio button is selected, return true, else return false
  }

  constructor(public fb: FormBuilder, public service: UserService) {
    this.profileform = new FormGroup({
      coursename: new FormControl(null, Validators.required),
      video: new FormControl(null, Validators.required),
      categories: new FormControl(null, Validators.required),
      pdf: new FormControl(null, Validators.required),
      ppt: new FormControl(null, Validators.required),
      course: new FormControl(null, Validators.required),
      resume: new FormControl(null, [Validators.required]),
      addonarray: new FormArray([])
    });





  }
  // tslint:disable-next-line: member-ordering
  profileform: FormGroup;
  // tslint:disable-next-line: member-ordering
  addonarray = [];

  // tslint:disable-next-line: member-ordering
  categories = [
    { id: 1, name: 'Development' },
    { id: 2, name: 'Digital Marketing' },
    { id: 3, name: 'IT & Software' },
    { id: 4, name: 'Software Quality' },
    { id: 5, name: 'Design' },
    { id: 6, name: 'Business' },
    { id: 7, name: 'Mathematics' },
  ];






  addTag() {
    const control = new FormControl(null, Validators.required);
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    (<FormArray>this.profileform.get('addonarray')).push(control);
  }
  Deletetag(index) {
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    (<FormArray>this.profileform.get('addonarray')).removeAt(index);
  }

  onFileChange($event) {
    const file = $event.target.files[0]; // <--- File Object for future use.
    this.profileform.controls.imagefile.setValue(file ? file.name : ''); // <-- Set Value for Validation
  }

  saved() {
    console.log(this.profileform.value);
  }


  add() {
    this.service.adddata(this.profileform.value);
    // tslint:disable-next-line: prefer-const
    let userInfo = JSON.parse(sessionStorage.getItem('totoList'));
    this.service.UserData(userInfo).subscribe(x => {
        return x;     

});
  }
  

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      alert('File uploaded successfully');
    };

  }

  save() {
    console.log(this.profileform.value);
  }
}
