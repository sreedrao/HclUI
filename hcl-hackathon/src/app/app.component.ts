import { Component } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hcl-hackathon';
  
}
