import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicNavbarComponent } from './basic-navbar/basic-navbar.component';

const routes: Routes = [
  { path: '', redirectTo: '/basic', pathMatch: 'full'},
  { path: 'basic', component: BasicNavbarComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
