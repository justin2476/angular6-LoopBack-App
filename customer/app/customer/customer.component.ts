import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Http } from '@angular/http';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customName: string;
  name: string;
  mobile: number;
  gen: string;
  custList: CusList;
  obj: cust;
  placeHold: place;
  newGen: string;

  constructor(private apiServe: ApiService, public http: Http) {
    this.customName = "Customer App";



  }

  ngOnInit() {

    this.placeHold = {
      name: "enter name",
      mobile: "enter mobile number"
    }
    this.gen = "MALE"

    this.apiServe.dbPost().subscribe((postData) => {
      this.custList = postData.json();
    })

  }
  onClick() {
    this.newGen = "MALE"
  }
  onClickFem() {
    this.newGen = "FEMALE"
  }
  onSub() {

    this.obj = {
      name: this.name,
      mobile: this.mobile,
      createdDate: new Date(),
      gender: this.gen
    };
    //alert(JSON.stringify(this.obj));
//tested working
    this.http.post('http://localhost:3000/api/customers/', this.obj).subscribe((data) => { console.log(data) }
    )
    window.location.reload();

  }


}



interface CusList {

}
interface cust {
  name: string,
  mobile: number,
  createdDate: any,
  gender: string
}
interface place {
  name: string,
  mobile: string
}
