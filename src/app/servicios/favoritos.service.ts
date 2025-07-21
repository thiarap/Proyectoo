import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../model/producto.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
 private favoritosSubject = new BehaviorSubject<{ producto: Producto; cantidad: number }[]>([]);
   favorito$ = this.favoritosSubject.asObservable()
 
   agregarAlfavoritos(producto: Producto) {
     const productos = this.favoritosSubject.getValue()
     const encontrado = productos.find(p => p.producto.id === producto.id)
 
     if (encontrado) {
       encontrado.cantidad++
     } else {
       this.favoritosSubject.next([...productos, { producto, cantidad: 1 }])
     }
   }
   eliminarDefavoritos(productoId: number) {
     const productos = this.favoritosSubject.getValue().filter(p => p.producto.id !== productoId)
     this.favoritosSubject.next(productos)
   }
   vaciarfavoritos() {
     this.favoritosSubject.next([])
   }
  constructor() { }
}