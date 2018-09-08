//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import'rxjs/add/operator/map';
import { Http } from '@angular/http';


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  messageList=[];

  constructor(public http: Http) {
    console.log('Hello AuthProvider Provider');            
  }
  getRemoteData()
  {
  //  this.http.get('https://jsonplaceholder.typicode.com/posts').map(res=>res.json()).subscribe(data=>{
  //    console.log(data);
  //  });
  this.http.get('https://jsonplaceholder.typicode.com/posts').map(res=>res.json()).subscribe(data=>{
   this.messageList=data;
  });
  }

}
