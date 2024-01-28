import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'agro-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
