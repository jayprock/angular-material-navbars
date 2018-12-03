import { RouterModule, Routes } from '@angular/router';

import { BasicNavWithMenuComponent } from './basic-nav-with-menu/basic-nav-with-menu.component';
import { BasicNavbarComponent } from './basic-navbar/basic-navbar.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: '/basic', pathMatch: 'full'},
  { path: 'basic', component: BasicNavbarComponent },
  { path: 'basic-menu', component: BasicNavWithMenuComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
