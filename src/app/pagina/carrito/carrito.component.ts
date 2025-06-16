import { Component, OnInit } from '@angular/core';
import { Producto } from '../../model/producto.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarritoService} from '../../servicios/carrito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  imports: [CommonModule, FormsModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {
  productosEnCarrito: { producto: Producto; cantidad: number }[] = []

  constructor(private carritoService :CarritoService, private router:Router){}

  ngOnInit(): void {
    this.carritoService.carrito$.subscribe((productos) =>{
      this.productosEnCarrito = productos
    })
  }

  agregarCantidad(index : number){
    this.productosEnCarrito[index].cantidad++
  }

  quitarCantidad(index:number){
    if(this.productosEnCarrito[index].cantidad > 1){
      this.productosEnCarrito[index].cantidad--
    }
  }

  eliminarProducto(productoId:number){
    this.carritoService.eliminarDelcarrito(productoId)
  }

  vaciarCarrito(){
    this.carritoService.vaciarCarrito()
  }
  
  realizarCompra(){
    alert('Compra realizada')
    this.vaciarCarrito()
  }

    //navega al formulario de compra
    irAFormularioCompra(){
      //redirige al usuario a la ruta de compras,donde ese encontra el formulario para finalizar la compra
      this.router.navigate(['/compra'])
    }
//calular el total del carrito de compras
calcularTotal():number{
  return this.productosEnCarrito.reduce((total,item)=> {
    return total+item.producto.precio*item.cantidad
  },0)//el acumulador inicia en 0
}

}
