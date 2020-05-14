import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {AutoSyncOptionComponent} from './autoSync-option/autoSync-option.component';


const routes: Routes = [
  { path: 'autoSync-option', component: AutoSyncOptionComponent },
  { path: '', redirectTo: '/autoSync-option', pathMatch: 'full' },
  { path: '**', redirectTo: '/autoSync-option', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
