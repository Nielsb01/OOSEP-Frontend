import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SynchroniseComponent} from './synchronisation/synchronise/synchronise.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  { path: 'synchronise', component: SynchroniseComponent },
  { path: '', redirectTo: '/synchronise', pathMatch: 'full' },
  { path: '**', redirectTo: '/synchronise', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
