import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SynchroniseComponent} from './synchronisation/synchronise/synchronise.component';
import {LoginComponent} from "./authentication/login/login.component";


const routes: Routes = [
  { path: 'synchronise', component: SynchroniseComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
