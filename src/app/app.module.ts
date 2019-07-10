import {  AuthenticationService } from './auth/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CommonModule} from '@angular/common';


import {RouterModule, Routes} from '@angular/router';
import {MatStepperModule} from '@angular/material/stepper';
// tslint:disable-next-line: max-line-length
import {MatFormFieldModule,  MatInputModule, MatGridListModule, MatMenuModule, MatToolbarModule, MatSidenavModule, MatListModule} from "@angular/material";
import {ScrollDispatchModule} from '@angular/cdk/scrolling';


import { StorageServiceModule} from 'angular-webstorage-service';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { LayoutModule } from '@angular/cdk/layout';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { UserService } from './service/user.service';
import { FooterComponent } from './footer.component';





const routes: Routes = [
  {path: '', loadChildren: 'src/app/main/main.module#MainModule'},
  {path: 'dashboard', loadChildren: 'src/app/dashboard/dashboard.module#DashboardModule'},
  {path: 'client', loadChildren: 'src/app/clientdashboard/clientdashboard.module#ClientDashboardModule'},
    {path:'studentplaylist', loadChildren:'src/app/studentplaylist/studentplaylist.module#StudentPlaylistModule'}
];

@NgModule({
  declarations: [AppComponent,FooterComponent ],
  imports: [NgbModule, RouterModule.forRoot(routes),
    BrowserModule, BrowserAnimationsModule, MDBBootstrapModule, MatDialogModule, FormsModule, CommonModule, RouterModule,
// tslint:disable-next-line: max-line-length
// tslint:disable-next-line: deprecation
// tslint:disable-next-line: max-line-length
    AppRoutingModule, MatButtonModule, BsDropdownModule, MatCardModule, MatIconModule, HttpClientModule, MatStepperModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, ScrollDispatchModule, StorageServiceModule, MatTooltipModule, MatGridListModule, MatMenuModule, LayoutModule, MatToolbarModule, MatSidenavModule, MatListModule
// tslint:disable-next-line: max-line-length
  ],
  bootstrap: [AppComponent],
  providers: [UserService,AuthenticationService]
})
export class AppModule {
 }
