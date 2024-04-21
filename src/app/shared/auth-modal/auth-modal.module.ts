import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingWidgetModule } from '@shared/loading/loading-widget.module';
import { ProfileWidgetModule } from '@shared/profile-widget/profile-widget.module';
import { AddAccountFormComponent } from './add-account-form/add-account-form.component';
import { AuthModalComponent } from './auth-modal.component';
import { AuthenticateFormComponent } from './authenticate-form/authenticate-form.component';
import { SelectAccountListComponent } from './select-account-list/select-account-list.component';
import { ProfileServiceModule } from '@shared/profile-service/profile-service.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { IconCaretLeft, IconClipboardText, IconEye, IconEyeOff, IconForms, IconInfoCircle, IconKey, IconLogin, IconLogout, IconPlus, IconScan } from 'angular-tabler-icons/icons';

@NgModule({
  declarations: [
    AuthModalComponent,
    AddAccountFormComponent,
    AuthenticateFormComponent,
    SelectAccountListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProfileWidgetModule,
    LoadingWidgetModule,
    ProfileServiceModule,
    TablerIconsModule.pick({
      IconEye,
      IconEyeOff,
      IconInfoCircle,
      IconLogin,
      IconLogout,
      IconKey,
      IconScan,
      IconClipboardText,
      IconForms,
      IconPlus,
      IconCaretLeft
    })
  ],
  exports: [
    AuthModalComponent
  ]
})
export class AuthModalModule { }
