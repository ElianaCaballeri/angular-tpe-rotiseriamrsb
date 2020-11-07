import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RotiseriaMrsBAboutComponent } from './rotiseria-mrs-b-about/rotiseria-mrs-b-about.component';
import { RotiseriaMrsBPizzasComponent } from './rotiseria-mrs-b-pizzas/rotiseria-mrs-b-pizzas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pizzas',
    pathMatch: 'full'
  },
  {
    path: 'pizzas',
    component: RotiseriaMrsBPizzasComponent
  },
  {
    path: 'about',
    component: RotiseriaMrsBAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
