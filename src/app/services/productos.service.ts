import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
import { ProductoDescripcion } from '../interfaces/producto-descrpcion.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  cargando = true;
  cargandoProducto = false;
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

private cargarProductos(): Promise<void> {
  return new Promise((resolve) => {

    this.http.get<Producto[]>(
      'https://angular-html-44327-default-rtdb.firebaseio.com/productos_idx.json'
    )
    .subscribe((resp) => {
      this.productos = resp;
      this.cargando = false;
      resolve();
    });

  });
}
  getProducto(id: string) {
    this.cargandoProducto = true;

    return this.http.get<ProductoDescripcion>(
      `https://angular-html-44327-default-rtdb.firebaseio.com/productos/${id}.json`,
    );
  }
buscarProducto(termino: string) {

  if (this.productos.length === 0) {
    this.cargarProductos().then(() => {
      this.aplicarFiltro(termino);
    });
  } else {
    this.aplicarFiltro(termino);
  }
}

private aplicarFiltro(termino: string) {

    const filtro = termino.toLowerCase();

    this.productosFiltrados = this.productos.filter(prod =>
      prod.categoria.toLowerCase().includes(filtro) ||
      prod.titulo.toLowerCase().includes(filtro)
    );
  }
}