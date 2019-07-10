
import { NgModule, Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {CommonModule} from '@angular/common';
// tslint:disable-next-line: max-line-length
import { InstructorComponent, InstructorSignUpComponent, InstructorLoginComponent, ContentComponent } from './instructor/instructor.component';
import { StartComponent } from './start.component';
import {RouterModule, Routes} from '@angular/router';
import {MatStepperModule} from '@angular/material/stepper';
// tslint:disable-next-line: max-line-length
import {MatFormFieldModule, MatInputModule, MatGridListModule, MatMenuModule, MatToolbarModule, MatSidenavModule, MatListModule} from "@angular/material";
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import { PasswordComponent } from './password.component';
import { CompareValidatorDirective } from './shared/compare-validator.directive';
import { SessionComponent } from './localstorage/seesion.component';
import { LocalStorageComponent } from './localstorage/localstorage.component';
import { StorageServiceModule} from 'angular-webstorage-service';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutInstructorComponent } from './instructor/about.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MainComponent, LoginComponent, SignupComponent } from './main.component';
import { UserService } from '../service/user.service';
import { StudentpurchaseComponent } from './studentpurchase/studentpurchase.component';
import { OwlModule } from 'ngx-owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterComponent } from '../footer.component';












export const routes: Routes = [
     {path: '', component: StartComponent, children:[
        {path: 'main', component: MainComponent},

        {path: 'instructor', component: InstructorComponent},
      {path: 'instructorlogin', component: InstructorLoginComponent},
      {path: 'instructorsignup', component: InstructorSignUpComponent},
      {path: 'a', component: LocalStorageComponent},
      {path: 'b', component: SessionComponent},
      {path:'student',component:StudentpurchaseComponent},
      {path: 'aboutinstructor', component: AboutInstructorComponent},
      {path: 'content', component: ContentComponent},
      {path: '' , component: MainComponent},






     ]},






]


@NgModule({
  declarations: [MainComponent, ContentComponent,
    LoginComponent, SignupComponent,
    InstructorComponent, StartComponent, PasswordComponent,StudentpurchaseComponent,
    CompareValidatorDirective,
     InstructorLoginComponent, InstructorSignUpComponent, SessionComponent, LocalStorageComponent,
     AboutInstructorComponent

  ],
  imports: [NgbModule,CarouselModule,
 MDBBootstrapModule, MatDialogModule, FormsModule, CommonModule, RouterModule.forChild(routes),
    MatButtonModule,  OwlModule,
    BsDropdownModule, MatCardModule, MatIconModule,
    HttpClientModule,MatStepperModule,
    ReactiveFormsModule,MatFormFieldModule,
    MatInputModule , ScrollDispatchModule, StorageServiceModule, MatTooltipModule,
     MatGridListModule, MatMenuModule, LayoutModule, MatToolbarModule, MatSidenavModule, MatListModule
  ],
  entryComponents: [LoginComponent, SignupComponent],
  exports:[RouterModule],
  providers: [UserService],
  bootstrap: [ StartComponent]
})
export class MainModule {

 }
