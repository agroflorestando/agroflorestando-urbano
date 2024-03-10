import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticatedProfileObservable } from './authenticated-profile.observable';
import { ProfileEncrypt } from './profile.encrypt';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ProfileEncrypt,
    AuthenticatedProfileObservable
  ]
})
export class ProfileServiceModule { }
