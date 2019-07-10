import {  ClientRequestComponent } from './dashboardrequest.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { CdkTableModule } from '@angular/cdk/table';
// tslint:disable-next-line: max-line-length
import { MatIconModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatListModule, MatStepperModule, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonToggleModule, MatCardModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatTooltipModule, MatTreeModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { A11yModule } from '@angular/cdk/a11y';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTreeModule } from '@angular/cdk/tree';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FileSelectDirective } from 'ng2-file-upload';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'primeng/components/fileupload/fileupload';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardRequirement } from './dashboardrequirement/dashboardrequirement.component';




const routes: Routes = [
    {path: '', component: DashboardComponent},

   {path:'submitrequest',component:ClientRequestComponent},


]




@NgModule({
// tslint:disable-next-line: max-line-length
    imports: [MatStepperModule, MatIconModule, MatFormFieldModule, MatInputModule, LayoutModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatStepperModule, A11yModule, DragDropModule, CdkStepperModule,
        CdkTableModule, CdkTreeModule, MatAutocompleteModule, MatBadgeModule, RouterModule.forChild(routes),
        MatBottomSheetModule, NgbModule, FormsModule , ReactiveFormsModule ,
        MatButtonToggleModule,
        MatCardModule, MatFormFieldModule, FileUploadModule, CommonModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatMenuModule, MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
       MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule, MatSidenavModule,
        MatTooltipModule,
        MatTreeModule],
    declarations: [DashboardComponent, SideNavComponent, DashboardRequirement, FileSelectDirective,ClientRequestComponent],
    bootstrap: [DashboardComponent]
  })
export class DashboardModule{

}
