import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  imports: [NgFor],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  productos=[
    {
      id: 1,
      img:"https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/1f1b8d9a1b49678555bea203c2f52e39/1/0/104340_3.jpg",
      nombre: "producto1", 
      precio: 100,
    },
    {
      id: 2,
      img:"",
      nombre: "producto2", 
      precio: 150,
    },
    {
      nombre: "producto3", 
      precio: 150,
    },
   ]; 
}
