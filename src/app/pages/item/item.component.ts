import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descrpcion.interface';
import { NgStyle } from "../../../../node_modules/@angular/common/index";

@Component({
  selector: 'app-item',
  standalone: true,
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  producto?:ProductoDescripcion;
  id?:string;

  constructor(private route:ActivatedRoute, public productoService:ProductosService){}

  ngOnInit(){
    this.route.params.subscribe(parametros=>{
      //console.log(parametros['id']);
      this.productoService.getProducto(parametros['id']).subscribe((producto:ProductoDescripcion) =>{
        this.id=parametros['id'];
        this.producto=producto;
        this.productoService.cargandoProducto=false
      })
    })
  }
}
