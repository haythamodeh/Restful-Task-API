import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MEAN';
  tasks: object = [];
  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.getTasksFromService();
  }

  getTasksFromService(){
    let observable = this.httpService.allTasks();
    observable.subscribe(data => {
      console.log("Got our data", data);
      this.tasks = data;
    });
  }
}
