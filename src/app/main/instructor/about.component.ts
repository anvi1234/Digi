import {Component} from "@angular/core";
import { User } from '../user.model';

import { pipe } from '@angular/core/src/render3';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
    selector:"about",
    templateUrl:"./about.component.html",
    styleUrls:["./instructor.component.css"]
})
export class AboutInstructorComponent{
    public isVisible: boolean;
    profileform: FormGroup;


    constructor(public fb: FormBuilder,public service: UserService, public router: Router){
        this.profileform = new FormGroup({
            teachingonline: new FormControl(null, Validators.required),
            havefollowing: new FormControl(null, Validators.required),
            trainningmaterial: new FormControl(null, Validators.required),
            identify: new FormControl(null, Validators.required),
         });

       }





       add(): void{
        this.service.adddata(this.profileform.value);
        this.router.navigate(['./dashboard']);

     }

teachingonline=[
    {teachingid:1,teachingname:"Please choose an option"},
    {teachingid:2,teachingname:"I have online course and m switching from another course platform"},
    {teachingid:3, teachingname:"I am teaching online but not yet online course"},
    {teachingid:4,teachingname:"I'm currently teaching but not online"},
    {teachingid:5,teachingname:"I have'nt started teaching yet"},
    {teachingid:6,teachingname:"i'm just messing around"}
];

havefollowing=[
   { followingId:1,followingname: "Please choose an option"},
   {followingId:2,followingname:"yes, 10,000+people"},
   {followingId:3,followingname:"yes, 10,000-100,000 people"},
   {followingId:4,followingname:"yes, 1000-10,000 people"},
   {followingId:5,followingname:"yes,100-1,000 people"},
   {followingId:6,followingname:"yes,1-100 people"},
   {followingId:7,followingname:"Not,yet I m just starting yet"}
];

trainningmaterial=[
    {materialId:1, materialname:"Please choose an option"},
    {materialId:2, materialname:"My trainning content already is already built"},
    {materialId:3, materialname:"I have a few piece but i m looking to build a lot"},
    {materialId:4, materialname:"I dont't have much yet"}
];

identify=[
   {identifyid:1, identifyname:"Please choose an option"},
   {identifyid:2, identifyname:"Coach"},
   {identifyid:3, identifyname:"Social Infulencer"},
   {identifyid:4, identifyname:"I work as a part of a large company"},
    {identifyid:5,identifyname:"Author/Blogger"}
];



ngOnInit(){
    this.isVisible=true;

}
public toggle(): void { this.isVisible = !this.isVisible; }







}
