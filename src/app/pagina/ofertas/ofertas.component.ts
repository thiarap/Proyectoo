import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ofertas',
  imports: [NgFor],
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css'
})
export class OfertasComponent {
  productos = [
    {
      id: 1,
      img: "https://fearofgod.com/cdn/shop/files/192HO246250F_FLEECEHOODIE_BLACK_1_900x.jpg?v=1730829970",
      marca: "Essentials",
      nombre: "Fleece Hoodie",
      precio: 105,
    },
    {
      id: 2,
      img: "https://fearofgod.com/cdn/shop/files/130HO242020F_FLEECEESSENTIALSWEATPANT_BLACK_1_900x.jpg?v=1736293192",
      marca: "Essentials",
      nombre: "Fleece Essential Sweatpant",
      precio: 105,
    },
    {
      id: 3,
      img: "https://fearofgod.com/cdn/shop/files/125AS254190F_CLASSIC_FIT_T-SHIRT-JET_BLACK_1_df18cbdb-126c-464f-a039-c1728741b5f0_900x.jpg?v=1740108514",
      marca: "Essentials",
      nombre: "Classic Short Sleeve Tee",
      precio: 105,
    },
    {
      id: 4,
      img: "https://fearofgod.com/cdn/shop/files/125AS254201F_CLASSIC_FIT_LS_T-SHIRT-HOMESTEAD_HEATHER_1_372c15a5-1ab8-4174-a135-73978af1f43d_900x.jpg?v=1740108347",
      marca: "Essentials",
      nombre: "Classic Long Sleeve Tee",
      precio: 105,
    },
    {
      id: 5,
      img: "https://fearofgod.com/cdn/shop/files/125AS254191F_CLASSIC_FIT_T-SHIRT-HOMESTEAD_HEATHER_1_900x.jpg?v=1740108394",
      marca: "Essentials",
      nombre: "Classic Short Sleeve Tee",
      precio: 105,
    },
    {
      id: 6,
      img: "https://fearofgod.com/cdn/shop/files/192AS254781F_CLASSIC_FIT_FLEECE_ZIP-UP_HOODIE-HOMESTEAD_HEATHER_1_ab249cad-9479-4a4b-a4af-a52e159984a5_900x.jpg?v=1740107970",
      marca: "Essentials",
      nombre: "Classic Full Zip-Up Hoodie",
      precio: 105,
    },
    {
      id: 7,
      img: "https://cdn.shopify.com/s/files/1/1003/3354/files/192AL246501F_NBA_ESSENTIALS_HOODIE-BLACK_BLACK_1.jpg?v=1738178845",
      marca: "Essentials",
      nombre: "Essentials NBA Hoodie",
      precio: 105,
    },
    {
      id: 8,
      img: "https://cdn.shopify.com/s/files/1/1003/3354/files/192AL246500F_NBA_ESSENTIALS_HOODIE-WARM_HEATHER_BLACK_1.jpg?v=1738178755",
      marca: "Essentials",
      nombre: "Essentials NBA Hoodie",
      precio: 105,
    },
    {
      id: 9,
      img: "https://fearofgod.com/cdn/shop/files/AB7C6876-A51C-4A87-926D-E94BF0D62456_900x.jpg?v=1732042077",
      marca: "Essentials",
      nombre: "Essentials NBA Hoodie",
      precio: 105,
    },

    {
      id: 10,
      img: "https://fearofgod.com/cdn/shop/files/2_900x.jpg?v=1738624044",
      marca: "Essentials",
      nombre: "Essentials Lakers Hoodie",
      precio: 105,
    },
    {
      id: 11,
      img: "https://fearofgod.com/cdn/shop/files/5_575b3f81-c82b-44ff-bb0d-604af4993c40_900x.jpg?v=1738624142",
      marca: "Essentials",
      nombre: "Essentials Celtics Hoodie",
      precio: 105,
    },
    {
      id: 12,
      img: "https://fearofgod.com/cdn/shop/files/9_900x.jpg?v=1738621984",
      marca: "Essentials",
      nombre: "Essentials Wolves Hoodie",
      precio: 105,
    },
    {
      id: 13,
      img: "",
      marca: "Essentials",
      nombre: "",
      precio: 105,
    },
    {
      id: 14,
      img: "",
      marca: "Essentials",
      nombre: "",
      precio: 105,
    },
    {
      id: 15,
      img: "",
      marca: "Essentials",
      nombre: "",
      precio: 105,
    },
    {
      id: 16,
      img: "",
      marca: "Essentials",
      nombre: "",
      precio: 105,
    },
    {
      id: 17,
      img: "",
      marca: "Essentials",
      nombre: "",
      precio: 105,
    },
    {
      id: 18,
      img: "",
      marca: "Essentials",
      nombre: "",
      precio: 105,
    },
    {
      id: 19,
      img: "",
      marca: "Essentials",
      nombre: "",
      precio: 105,
    },
    {
      id: 20,
      img: "",
      marca: "Essentials",
      nombre: "",
      precio: 105,
    },
    {
      id: 21,
      img: "",
      marca: "Essentials",
      nombre: "",
      precio: 105,
    },

  ];
}


