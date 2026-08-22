import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FooterComponent,
    RouterOutlet
  ],
  templateUrl: 'app.html'
})
export class AppComponent {
  title = 'portfolio';
}
