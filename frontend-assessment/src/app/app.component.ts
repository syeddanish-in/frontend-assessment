import { Component } from '@angular/core';
import { GridComponent } from './grid/grid.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [GridComponent]
})
export class AppComponent {
  title = 'frontend-assessment';
}
