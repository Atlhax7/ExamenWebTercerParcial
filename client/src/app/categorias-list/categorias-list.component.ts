import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';
import {CategoriasService} from '../services/categorias.service';
import { Categoria } from 'src/app/models/Categoria';
@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.css']
})
export class CategoriasListComponent implements OnInit {

  categoria: Categoria;
  categorias: any = [];
  constructor(private categoriaService: CategoriasService) { }

  ngOnInit() {
    this.getCategorias();
  }
  getCategorias(): void {
    this.categoriaService.getCategorias()
      .subscribe(
        res => {
          this.categorias = res;
        },
        err => console.error(err)
      );
  }
}
