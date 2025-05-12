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
      img: "https://fearofgod.com/cdn/shop/files/LOOK_54_ETERNAL_SS25_LB_024_V1_900x.jpg?v=1733879882",
      marca: "RABANNE",
      nombre: "Phantom Intense EDP 100 ml",
      precio: 229.100,
    },
    {
      id: 2,
      img: "",
      marca: "RABANNE",
      nombre: "Phantom Elixir Parfum Intense 100 ml",
      precio: 210.000,
    },
    {
      id: 3,
      img:"",
      nombre: "Fame The Couture EDP 80 ml",
      marca: "RABANNE",
      precio: 290.100,
    },
    {
      id: 4,
      img:"",
      nombre: "Phantom Parfum EDP 80 ml",
      marca: "RABANNE",
      precio: 233.100,
    },
    
    {
      id: 4,
      img:"",
      nombre: "Fame The Couture EDP 80 ml",
      marca: "RABANNE",
      precio: 290.100,
    },
    {
      id: 5,
      img: "",
      marca: "RABANNE",
      nombre: "Fame Parfum 80 ml Refillable",
      precio: 283.600,
    },

    {
      id: 6,
      img: "",
      marca: "RABANNE",
      nombre: "Fame Intense EDP 80 ml Refillable",
      precio: 278.400,
    },
    {
      id: 7,
      img: "",
      marca: "RABANNE",
      nombre: "Fame EDP 30 ml",
      precio: 265.500,
    },
    {
      id: 8,
      img: "",
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
