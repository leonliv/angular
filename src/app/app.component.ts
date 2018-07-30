import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  data = new Date(2018, 6, 29);
  constructor(){
    console.log(this.data.toISOString());
  }
}
