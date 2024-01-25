import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderModule } from './shared/header/header.module';
import { NavbarModule } from './shared/navbar/navbar.module';

@Component({
  selector: 'agro-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderModule,
    NavbarModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
