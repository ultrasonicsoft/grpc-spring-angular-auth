import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grpc-spring-angular-auth';

  constructor(private service: ApiService) {
  }

  ngOnInit() {
    this.service.fibonacci(10).then(response => {
      console.log(response);
    })
  }
}
