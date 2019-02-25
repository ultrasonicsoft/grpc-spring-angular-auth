import { Injectable } from '@angular/core';
import { DemoServiceClient, DemoService } from './proto/proto/demo_pb_service';
import { FactorialRequest, FactorialResponse, FibonacciRequest, FibonacciResponse } from './proto/proto/demo_pb';
import { grpc } from '@improbable-eng/grpc-web';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  client: DemoServiceClient;


  constructor() {
    this.client = new DemoServiceClient('http://localhost:8080');

  }

  fibonacci(value: number) {

    return new Promise((resolve, reject) => {
      console.log('Calculating fibonacci...', value);
      const fibRequest = new FibonacciRequest();
      fibRequest.setValue(value);
      
      const auth = new grpc.Metadata();
      auth.headersMap["Authorization"] = ['basic Z3JwY3NwcmluZzpncnBjc3ByaW5n']; 
      this.client.fibonacci(fibRequest, auth, (err, response:FibonacciResponse) => {
        if (err) {
          return reject(err);;
        }
        console.log(response);
        
        resolve(response.toObject());
      });
    });

    // this.client.factorial(10);
    // return new Promise((resolve, reject) => {
    //   const fibRequest = new FibonacciRequest();
    //   fibRequest.setValue(10);

    //   const auth = new grpc.Metadata();
    //   auth.headersMap["Authorization"] = ['basic Z3JwY3NwcmluZzpncnBjc3ByaW5n'];

    //   console.log('trying to fire http/2 request...');
      
    //   grpc.invoke(DemoService.Fibonacci, {
    //     request: fibRequest,
    //     host: "http://localhost:8080",
    //     onMessage: (message: FibonacciResponse) => {
    //       console.log("got fib: ", message.toObject());
    //     },
    //     onEnd: (code: grpc.Code, msg: string | undefined, trailers: grpc.Metadata) => {
    //       if (code == grpc.Code.OK) {
    //         console.log("all ok")
    //       } else {
    //         console.log("hit an error", code, msg, trailers);
    //       }
    //     }
    //   });

    //   // this.client.factorial(req, auth, (err, response: FactorialResponse) => {
    //   //   if (err) {
    //   //     return reject(err);;
    //   //   }
    //   //   console.log(response);
    //   //   resolve(response.toObject());
    //   // });
    // });
  }
}
