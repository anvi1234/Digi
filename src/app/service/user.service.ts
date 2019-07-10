
import { Injectable, Inject } from '@angular/core';

import { map, catchError } from 'rxjs/operators';

import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class UserService {
  private token: string;




  Url = 'http://localhost:3000';

  options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };


  constructor(public http: HttpClient, private router: Router) { }


  findAll(): string[] {
    if (sessionStorage.getItem('totoList') != null) {
      return JSON.parse(sessionStorage.getItem('totoList'));

    }
    return null;
  }
  adddata(title: any): void {
    if (sessionStorage.getItem('totoList') == null) {
      sessionStorage.setItem('totoList', JSON.stringify(title));
    } else {
      var data = JSON.parse(sessionStorage.getItem('totoList'));
      sessionStorage.removeItem('totoList');
      var newItem = this.merge_options(data, title);
      sessionStorage.setItem('totoList', JSON.stringify(newItem));
    }
  }
  saveData(obj): any {
    // tslint:disable-next-line: prefer-const
    this.http.post(this.Url + 'createUser', obj).pipe(map(x => {
      return x;
    }));

  }


  update(obj): any {
    return this.http.post(`${this.Url}/update`, obj).pipe(map(y => {
      return y;
    }))
  }





  UserData(obj): any {
    return this.http.post(`${this.Url}/userdata`, obj).pipe(map(y => {
      return y;
    }))
  }


  addData(obj): any{
    return this.http.post(`${this.Url}/pdf` , obj).pipe(map(y=>{
     return y;
    }))
  }


  getProducts() {
    return this
      .http
      .get(`${this.Url}/finddata`);
  }
  /*******
  logindata(obj){
    return this.http.post(`${this.Url}/login`,obj).pipe(map(y=>{
      return y;

    }))
  }
  **** */















  getdata(obj) {
    this.http.post(this.Url, obj).subscribe(res => {
      console.log('done');
    });

  }
  merge_options(obj1, obj2): any {
    var obj3 = {};
// tslint:disable-next-line: forin
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
// tslint:disable-next-line: forin
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
  }

  login(obj): Observable<any> {
    return this.http.post<any>(`${this.Url}/login`, obj).pipe(map(x => {
      return x;
    }))
  }





















  add(name: String): any {
    return this.http.post<any>(this.Url, { name: name }).pipe(map(y => {
      return y;
    }

    ));
  }

}





