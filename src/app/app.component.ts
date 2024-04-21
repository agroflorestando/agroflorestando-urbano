import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AsyncModalModule } from '@belomonte/async-modal-ngx';
import { MainModalModule } from './shared/main-modal/main-modal.module';
import { AuthModalModule } from '@shared/auth-modal/auth-modal.module';
import { SecurityServiceModule } from '@shared/security-service/security-service.module';

@Component({
  selector: 'agro-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NavbarComponent,
    MainModalModule,
    AuthModalModule,
    AsyncModalModule,
    SecurityServiceModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
