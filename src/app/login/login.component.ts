import { Component, OnInit } from '@angular/core';
import {HTTPTestService} from "./http-login.service"
import { Routes } from '@angular/router';
import {Router,NavigationExtras} from '@angular/router';
//import {Routes} from  "./app.router";
import {RouterModule} from '@angular/router'
import {componentFactoryName} from "@angular/compiler";


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[HTTPTestService]
})
export class LoginComponent{
  //private Routes:any;
  public login;
  constructor(public _httpService:HTTPTestService,private Routes:Router) {
    this._httpService.getjsondata()
      .subscribe(login => this.login = login,
        error => alert(error),
        () => console.log("Finished")
      );
  }
//   const routes =[
//     path= 'news',
//   componente = news
// ]
  valid(){
    alert("valid()")
    var user_name=(<HTMLInputElement>document.getElementById("userName")).value;
    var pass=(<HTMLInputElement>document.getElementById("userPassword")).value;
    for(let i =0;i<this.login.length;i++){
      if((this.login[i].name==user_name) && (this.login[i].passord==pass)){
        alert("ok");
        let navigationExtras: NavigationExtras = {
          queryParams: {
            "user_name": user_name
          }
        };

          this.Routes.navigate(['/news'],navigationExtras);
      }
      else {
        alert("GetOut");
       // location.reload();
      }

    }
  }

}
