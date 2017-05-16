import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Popup} from 'ng2-opd-popup';
import {HTTPTestService} from "./http-test.service"
import {wrapProgram} from "tslint";
import {ActivatedRoute} from "@angular/router";
import {Router,NavigationExtras} from '@angular/router';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers:[HTTPTestService]
})
export class NewsComponent implements OnInit{
 // @Input() name: string;
  public User_name;
  public data;
  public news;
  public com;
  public com_title;
  public comment1;
  public  ki;

  constructor(public _httpService: HTTPTestService,private route: ActivatedRoute,private Routes:Router ) {

    this._httpService.getjsondata()
      .subscribe(data => this.data = data,
        error => alert(error),
        () => console.log("Finished")
      );
    this._httpService.getcommdata()
      .subscribe(com => this.com = com,
        error => alert(error),
        () => console.log("Finished2"));
    //console.log(this.com);
  }
  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.User_name = params["user_name"];
    });

  }
  @ViewChild('popup1') popup1: Popup;
  @ViewChild('popup2') popup2: Popup;
  @ViewChild('popup3') popup3: Popup;
  @ViewChild('popup4') popup4:Popup;
  add(){
    var tit=(<HTMLInputElement>document.getElementById("tit")).value;
    var post=(<HTMLInputElement>document.getElementById("post")).value;
    if(tit!=="" && post!==""){
      var obj={
        title: tit,
        post:post,
        postBy:this.User_name
      };
      var obj1={
        title:tit,
        comment:[]
      }
      this.com.push(obj1);
      this.data.push(obj);
      this.clear();
      this.popup1.hide();
    }
    else{
      this.showPopup4();
    }

  }
  dis(name){

    this.comment1=[];
    this.com_title=name;
  //  alert(this.com_title);
    for(let co=0;co<this.com.length;co++){
      //console.log(this.com[co].comment);
      if(this.com[co].title==name){
       // alert(this.com[co].title);
        for(let j=0;j<this.com[co].comment.length;j++){
          alert(this.com[co].comment[j]);
          this.comment1.push(this.com[co].comment[j])
          console.log(this.comment1);
        }

      }
    }
    this.showPopup3()


  }
  clear(){
    (<HTMLInputElement>document.getElementById("tit")).value="";
    (<HTMLInputElement>document.getElementById("post")).value="";

  }
  clear1(){
    (<HTMLInputElement>document.getElementById("com_com")).value="";
  }
  add_com(dc){
    //alert("12");
    for(let co=0;co<this.com.length;co++){
     // alert(dc+"=========>");
      if(this.com[co].title===this.ki){
      //  alert(this.ki+"<----------");
        let new_comment=(<HTMLInputElement>document.getElementById("com_com")).value
        this.com[co].comment.push(new_comment);
      }
    }
    this.clear1();
    this.popup2.hide();


  }
  showPopup1(){
    this.popup1.options = {
      cancleBtnClass: "btn btn-default",
      confirmBtnClass: "btn btn-mbe-attack ",
      color: "#53de74",
      header: "My New Post.......",
      widthProsentage:50,
      animation: "bounceInDown",
      confirmBtnContent: "Post!",
      cancleBtnContent:"cancel"
    }
    this.popup1.show(this.popup1.options);
  }
  showPopup2(app){
    this.ki= app;
    alert(this.ki)
    this.popup2.options = {
      cancleBtnClass: "btn btn-default",
      confirmBtnClass: "btn btn-mbe-attack ",
      color: "#53de74",
      header: "Add Your Comment to :" +this.ki,
      widthProsentage:50,
      animation: "bounceInDown",
      confirmBtnContent: "Add!",
      cancleBtnContent:"cancel"
    }
    this.popup2.show(this.popup2.options);
  }
  showPopup3(){
    this.popup3.options = {
      cancleBtnClass: "btn btn-default",
      confirmBtnClass: "btn btn-default",
      color: "#53de74",
      header: "View Comments..............",
      widthProsentage:60,
      animation: "bounceIn"}
    this.popup3.show(this.popup3.options);
  }
  add_comment(tit_nam){
    let k = tit_nam;
    alert(k);
    this.showPopup2(k);
  }
  showPopup4(){
    this.popup4.options = {
      cancleBtnClass: "btn btn-default",
      confirmBtnClass: "btn btn-default",
      color: "#53de74",
      header: "Error",
      widthProsentage:60,
      animation: "bounceIn"}
    this.popup4.show(this.popup4.options);
  }
  logout(){
    this.Routes.navigate(['/login'])

  }



}
