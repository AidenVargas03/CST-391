import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PartListComponent } from './components/part-list/part-list.component';
import { PartFormComponent } from './components/part-form/part-form.component';
import { EditPartComponent } from './components/edit-part/edit-part.component';
import { ViewPartComponent } from './components/view-part/view-part.component';
import { PcListComponent } from './components/pc-list/pc-list.component';
import { PcCreateComponent } from './components/pc-create/pc-create.component';
import { PcUpdateComponent } from './components/pc-update/pc-update.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'parts', component: PartListComponent },
  { path: 'parts/add', component: PartFormComponent },
  { path: 'parts/edit/:id', component: EditPartComponent },
  { path: 'parts/view/:id', component: ViewPartComponent },
   { path: 'pcs', component: PcListComponent },
  { path: 'pcs/create', component: PcCreateComponent },
  { path: 'pcs/update/:id', component: PcUpdateComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
