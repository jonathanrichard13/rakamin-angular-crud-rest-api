import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeetableComponent } from './components/employeetable/employeetable.component';

const routes: Routes = [
  { path: '', component: EmployeetableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }