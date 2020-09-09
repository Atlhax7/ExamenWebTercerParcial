import {Component, HostBinding, OnInit} from '@angular/core';
import { Categoria } from 'src/app/models/Categoria';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Router, ActivatedRoute } from '@angular/router';
import {GamesService} from '../services/games.service';
@Component({
  selector: 'app-categorias-form',
  templateUrl: './categorias-form.component.html',
  styleUrls: ['./categorias-form.component.css']
})
export class CategoriasFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  categoria: Categoria = {
    COD_CATEGORIA: '',
    COD_SUB_CATEGORIA: '',
    NOMBRE: '',
    DESCRIPCION: '',
    FECHA_CREACION: new Date()
  };
  edit: boolean;
  constructor(private categoriaService: CategoriasService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.categoriaService.getSubCategorias(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.categoria = res;
            this.edit = true;
          },
          err => console.log(err)
        );
    }

  }
  saveNewCategoria() {
    delete this.categoria.FECHA_CREACION;
    delete this.categoria.COD_SUB_CATEGORIA;
    this.categoriaService.saveCategoria(this.categoria)

      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/games']);
        },
        err => console.error(err)
      );
  }
  updateCategoria() {
    delete this.categoria.FECHA_CREACION;
    this.categoriaService.updateCategoria(this.categoria.COD_SUB_CATEGORIA, this.categoria)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/categorias']);
        },
        err => console.error(err)
      );
  }

}
