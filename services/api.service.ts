import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { CustomerComponent } from '../customer/customer.component';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  req: any;
  data: object;

  constructor(public h: Http) {
    console.log('api service connected')

    this.data = {
      "name": "marvel",
      "mobile": "9544670518",
      "createdDate": "2018-06-16T16:49:26.041Z",
      "gender": "FEMALE",
      "isRegistered": false
    }
  }
  dbPost() {
    return this.h.get('http://localhost:3000/api/customers/')

  }


}


