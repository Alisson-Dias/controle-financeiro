import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutAlisson } from './containers/layout-full/layout.full.component';
import { CategoriaComponent } from './containers/pages/categoria/categoria.component';
import { EntrarComponent } from './containers/pages/entrar/entrar.component';


const routes: Routes = [
  //aqui irao as rotas
  {
    path: '', component: LayoutAlisson,
    children: [ 
      { path: 'categoria', component: CategoriaComponent },
      { path: 'entrar', component: EntrarComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
