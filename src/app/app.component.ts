import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ComingSoonComponent } from './views/coming-soon/coming-soon.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'Nirvana-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    ComingSoonComponent,
    FooterComponent,
  ],
  template: ` <main class="main">
      <nirvana-header></nirvana-header>
      <nirvana-coming-soon></nirvana-coming-soon>
      <nirvana-footer></nirvana-footer>
    </main>
    <router-outlet />`,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'NirvanaApp-Angular';
}
