import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { PaintingComponent } from './painting/painting.component';

const routes: Routes = [
  { path: 'painting', component: PaintingComponent },
  { path: '**', redirectTo: 'painting' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
