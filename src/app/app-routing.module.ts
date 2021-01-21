import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';
import { LerbyteComponent } from './_components/lerbyte/lerbyte.component';
import { VerbyteComponent } from './_components/verbyte/verbyte.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'lerbyte', component: LerbyteComponent},
  {path: 'verbyte', component: VerbyteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
