import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesListComponent } from './components/games-list/games-list.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { CategoriasListComponent } from './categorias-list/categorias-list.component';
import { CategoriasFormComponent } from'./categorias-form/categorias-form.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/categorias',
    pathMatch: 'full'
  },
  {
    path: 'categorias',
    component: CategoriasListComponent
  },
  {
    path: 'categorias/add',
    component: CategoriasFormComponent
  },
  {
    path: 'games/edit/:id',
    component: GameFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
