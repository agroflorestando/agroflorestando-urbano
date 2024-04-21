import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticatedProfileObservable } from './authenticated-profile.observable';
import { ProfileEncrypt } from './profile.encrypt';
import { ProfileConverter } from './profile.converter';
import { ProfileApi } from './profile.api';
import { ProfileProxy } from './profile.proxy';
import { ProfileCache } from './profile.cache';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ProfileEncrypt,
    ProfileProxy,
    ProfileApi,
    ProfileConverter,
    ProfileCache,
    AuthenticatedProfileObservable
  ]
})
export class ProfileServiceModule { }
