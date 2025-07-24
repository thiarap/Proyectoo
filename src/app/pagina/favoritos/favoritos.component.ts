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
  eliminarProducto(productoId:number){
    this.favoritosService.eliminarDefavoritos(productoId)
  }

  vaciarCarrito(){
    this.favoritosService.vaciarfavoritos()
  }
  
}