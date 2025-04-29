import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  imports: [NgFor],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  productos = [
    {
      id: 1,
      img: "https://juleriaque.vtexassets.com/arquivos/ids/228689-800-auto?v=638488966737500000&width=800&height=auto&aspect=true",
      marca: "RABANNE",
      nombre: "Phantom Intense EDP 100 ml",
      precio: 229.100,
    },
    {
      id: 2,
      img: "https://juleriaque.vtexassets.com/arquivos/ids/249611-800-auto?v=638748979287600000&width=800&height=auto&aspect=true",
      marca: "RABANNE",
      nombre: "Phantom Elixir Parfum Intense 100 ml",
      precio: 210.000,
    },
    {
      id: 3,
      img:"https://juleriaque.vtexassets.com/arquivos/ids/202787-800-auto?v=638768655282970000&width=800&height=auto&aspect=true",
      nombre: "Fame The Couture EDP 80 ml",
      marca: "RABANNE",
      precio: 290.100,
    },
    {
      id: 4,
      img:"https://juleriaque.vtexassets.com/arquivos/ids/254383-800-auto?v=638808627339630000&width=800&height=auto&aspect=true",
      nombre: "Phantom Parfum EDP 80 ml",
      marca: "RABANNE",
      precio: 233.100,
    },
    
    {
      id: 4,
      img:"https://juleriaque.vtexassets.com/arquivos/ids/249618-800-auto?v=638748979352070000&width=800&height=auto&aspect=true",
      nombre: "Fame The Couture EDP 80 ml",
      marca: "RABANNE",
      precio: 290.100,
    },
    {
      id: 5,
      img: "https://juleriaque.vtexassets.com/arquivos/ids/226885-800-auto?v=638461157472900000&width=800&height=auto&aspect=true",
      marca: "RABANNE",
      nombre: "Fame Parfum 80 ml Refillable",
      precio: 283.600,
    },

    {
      id: 6,
      img: "https://juleriaque.vtexassets.com/arquivos/ids/234235-800-auto?v=638560640733900000&width=800&height=auto&aspect=true",
      marca: "RABANNE",
      nombre: "Fame Intense EDP 80 ml Refillable",
      precio: 278.400,
    },
    {
      id: 7,
      img: "https://juleriaque.vtexassets.com/arquivos/ids/227383-800-auto?v=638469739279030000&width=800&height=auto&aspect=true",
      marca: "RABANNE",
      nombre: "Fame EDP 30 ml",
      precio: 265.500,
    },
    {
      id: 8,
      img: "https://juleriaque.vtexassets.com/arquivos/ids/209425-800-auto?v=638149245461030000&width=800&height=auto&aspect=true",
      marca: "RABANNE",
      nombre: "Fame EDP 80 ml Refillable",
      precio: 257.800,
    },
 
    {
      id: 9,
      img: "",
      nombre: "producto2",
      marca: "RABANNE",
      precio: 150,
    },
    {
      id: 10,
      img: "",
      nombre: "producto2",
      marca: "RABANNE",
      precio: 150,
    },
    {
      id: 10,
      img: "",
      nombre: "producto2",
      marca: "RABANNE",
      precio: 150,
    },
    {
      id: 10,
      img: "",
      nombre: "producto2",
      marca: "RABANNE",
      precio: 150,
    },
    

  ];
}
