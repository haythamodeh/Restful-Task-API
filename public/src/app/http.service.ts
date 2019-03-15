import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  allTasks() {
    let tempObservable = this.http.get("/api/tasks");
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }
  getTask() {
    var id: any = "5c89a9ef91d28f0bedc40f61";
    let tempObservable = this.http.get("/api/tasks/" + id);
    tempObservable.subscribe(data => console.log("Got one task!", data));
  }
  deleteTask() {
    var id: any = "5c89a9ef91d28f0bedc40f61";
    let tempObservable = this.http.delete("/api/tasks/" + id);
    tempObservable.subscribe(data => console.log("Deleted Task!", data));
  }

  constructor(private http: HttpClient) { 
    this.allTasks();
    this.getTask();
    this.deleteTask();
  }
}
