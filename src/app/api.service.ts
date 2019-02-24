import { Injectable } from '@angular/core';
import { DemoServiceClient } from './proto/proto/demo_pb_service';
import { FactorialRequest, FactorialResponse } from './proto/proto/demo_pb';
import { grpc } from '@improbable-eng/grpc-web';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  client: DemoServiceClient;


  constructor() { 
    this.client = new DemoServiceClient('http://localhost:7080');

  }

  fibonacci(value: number){
    // this.client.factorial(10);
    return new Promise((resolve, reject) => {
      const req = new FactorialRequest();
      req.setValue(10);
      
      const auth = new grpc.Metadata();
      auth.headersMap ["Authorization"] = ['basic Z3JwY3NwcmluZzpncnBjc3ByaW5n']; 
      this.client.factorial(req, auth, (err, response:FactorialResponse) => {
        if (err) {
          return reject(err);;
        }
        console.log(response);
        resolve(response.toObject());
      });
    });
  }
}
