import { Routes } from '@angular/router';
import { UserNewComponent } from './user-new.component';
import { UserEditComponent } from './user-edit.component';
import { UserDetailComponent } from './user-detail.component';

export const USUARIO_ROUTES: Routes = [
  { path: 'new', component: UserNewComponent },
  { path: 'edit', component: UserEditComponent },
  { path: 'detail', component: UserDetailComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];
