import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-dashboard-15';
  constructor() {
    console.log('production:', environment.production, 'nameEnv:', environment.nameEnv);
  }
}
