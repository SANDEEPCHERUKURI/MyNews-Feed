import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';
@Injectable()
export class DATATestService{
  constructor(public str_name){

  }
  username(str){
    //alert(str);
    this.str_name=str;
    alert(this.str_name+"<---- into service");
  }
  getname(){
    return this.str_name;
  }
}
