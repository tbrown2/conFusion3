import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //template that defines the view
  templateUrl: './app.component.html',
  //template that defines the scss for css styling 
  styleUrls: ['./app.component.scss']
})
//we need to export this class so the app module can import it
export class AppComponent {
  title = 'app';
}
