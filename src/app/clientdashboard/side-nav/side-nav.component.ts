import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/main/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit{
  profileform: FormGroup;
  user: User[];
  addmodule:[];
  companies:[];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, public fb: FormBuilder ,private service: UserService,public router:Router) {



 {
      this.profileform = this.fb.group({
          addmodule: new FormArray([]),
   });
  }
}
addTag() {
// tslint:disable-next-line: whitespace
    (this.profileform.get('addmodule') as FormArray).push(new FormControl(''));
}
Deletetag(index) {
    (this.profileform.get('addmodule') as FormArray).removeAt(index);
}

addd(){
  console.log(this.profileform.value);
}


  ngOnInit(){
    this.service
    .getProducts()
    .subscribe((data: User[]) => {
      this.user = data;
  });






}
add(){
  this.service.adddata(this.profileform.value);
}
}






