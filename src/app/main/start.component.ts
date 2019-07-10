import { AuthenticationService } from './../auth/auth.service';
import {Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent, SignupComponent } from './main.component';


@Component({
// tslint:disable-next-line: component-selector
    selector: 'start',
    templateUrl:'./start.component.html',
    styleUrls:['./start.component.css']
})

export class StartComponent{
    constructor(public dialog: MatDialog,private authservice:AuthenticationService){}
    openLoginDialog(): void{
      const dialogRef =this.dialog.open(LoginComponent,{

      });
    }

    openSignupDialog(): void{
      const dialogRef = this.dialog.open(SignupComponent,{

      })

    }

    logout(){
      this.authservice.logout();
    }



// tslint:disable-next-line: member-ordering
    digitalmarketing = ['Digital Marketing', 'Google Marketing', 'FB Marketing', 'SMM', 'SEM', 'SEO', 'Content Marketing'];
// tslint:disable-next-line: member-ordering
    Development = ['Development', 'Java Technology', 'Computer Programing', 'Web Development', 'Scripts', 'Big Data Techniques', 'SAP'];
// tslint:disable-next-line: member-ordering
    Design=['Design', 'Photoshop', 'logo design', '3D Design', 'Coral Drwaing', 'Crash Course electronic and PCB design'];
// tslint:disable-next-line: member-ordering

// tslint:disable-next-line: member-ordering
    Business=[ 'Business', 'PROBE','The Complete Financial Analyst Course 2019','Complete investment banking','financial analyst','Product Manager'];
// tslint:disable-next-line: member-ordering
// tslint:disable-next-line: max-line-length
   SoftwareQualiity=[' SoftwareQualiity','Desktop Security Awareness','Malicious  Application Awareness','Online thread Awareness','Ethical Hacking','Mobile Security'];
// tslint:disable-next-line: member-ordering
   mathematics = ['mathematics', 'Vedic Mathematics', 'Basic Elementary Mathematics', 'Alzebra'];

// tslint:disable-next-line: member-ordering

}



