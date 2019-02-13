import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  
  {
    path: 'emplist',
    component: EmployeeListComponent
  },
  { path: '', redirectTo: 'emplist', pathMatch: 'full' },
  { path: '**', redirectTo: 'emplist' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
