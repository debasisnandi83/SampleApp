import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SampleComponent} from './sample/sample.component';
import {DetailComponent} from './detail/detail.component';

const routes: Routes = [
  { path: '', component: SampleComponent },
  { path: 'sample', component: SampleComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'detail/:id', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
