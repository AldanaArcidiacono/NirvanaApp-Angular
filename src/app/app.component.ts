import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'Nirvana-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="app">
      <nirvana-header />
      <main class="main">
        <router-outlet />
      </main>
      <nirvana-footer />
    </div>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'NirvanaApp-Angular';
}
