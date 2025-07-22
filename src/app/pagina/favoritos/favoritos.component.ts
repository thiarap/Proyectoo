import { Component, OnInit } from '@angular/core';
import { Producto } from '../../model/producto.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FavoritosService } from '../../servicios/favoritos.service';


@Component({
  selector: 'app-favoritos',
  imports: [CommonModule,FormsModule],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent implements OnInit {
productosEnfavoritos: { producto: Producto; cantidad: number }[] = []

  constructor(private favoritosService: FavoritosService){}
  ngOnInit(): void {
    this.favoritosService.favorito$.subscribe((productos) =>{
      this.productosEnfavoritos = productos
    })
  }

  agregarCantidad(index : number){
    this.productosEnfavoritos[index].cantidad++
  }

  quitarCantidad(index:number){
    if(this.productosEnfavoritos[index].cantidad > 1){
      this.productosEnfavoritos[index].cantidad--
    }
  }

  eliminarProducto(productoId:number){
    this.favoritosService.eliminarDefavoritos(productoId)
  }

  vaciarCarrito(){
    this.favoritosService.vaciarfavoritos()
  }
  
  realizarCompra(){
    alert('Se agrego a favoritos')
    this.vaciarCarrito()
  }
}