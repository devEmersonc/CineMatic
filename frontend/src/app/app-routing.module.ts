import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesComponent } from './components/sales/sales.component';
import { HomeComponent } from './components/home/home.component';
import { TicketsComponent } from './components/tickets/tickets.component';

const routes: Routes = [
  {path: '', component:HomeComponent, pathMatch:'full'},
  {path: 'sales', component:SalesComponent},
  {path: 'tickets', component:TicketsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
