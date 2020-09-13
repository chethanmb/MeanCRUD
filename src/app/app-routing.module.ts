import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeCreateComponent } from './components/change-create/change-create.component';
import { ChangeListComponent } from './components/change-list/change-list.component';
import { ChangeEditComponent } from './components/change-edit/change-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-change' },
  { path: 'create-change', component: ChangeCreateComponent },
  { path: 'edit-change/:id', component: ChangeEditComponent },
  { path: 'changes-list', component: ChangeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
