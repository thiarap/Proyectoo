import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarritoService } from '../../servicios/carrito.service';
import { Producto } from '../../model/producto.model';
import { FavoritosService } from '../../servicios/favoritos.service';

@Component({
  selector: 'app-ofertas',
  imports: [RouterModule, CommonModule],
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css'
})
export class OfertasComponent {
  productos = [
    {
      id: 1,
      img: "https://fearofgod.com/cdn/shop/files/192HO246250F_FLEECEHOODIE_BLACK_1_900x.jpg?v=1730829970",
      imgBack: "https://fearofgod.com/cdn/shop/files/192HO246250F_FLEECEHOODIE_BLACK_2_900x.jpg?v=1730829970",
      marca: "Essentials",
      nombre: "Fleece Hoodie",
      precio: 115,
    },
    {
      id: 2,
      img: "https://fearofgod.com/cdn/shop/files/130HO242020F_FLEECEESSENTIALSWEATPANT_BLACK_1_900x.jpg?v=1736293192",
      imgBack: "https://fearofgod.com/cdn/shop/files/130HO242020F_FLEECEESSENTIALSWEATPANT_BLACK_2_900x.jpg?v=1730832535",
      marca: "Essentials",
      nombre: "Fleece Essential Sweatpant",
      precio: 105,
    },
    {
      id: 3,
      img: "https://fearofgod.com/cdn/shop/files/125AS254190F_CLASSIC_FIT_T-SHIRT-JET_BLACK_1_df18cbdb-126c-464f-a039-c1728741b5f0_900x.jpg?v=1740108514",
      imgBack: "https://fearofgod.com/cdn/shop/files/125AS254190F_CLASSIC_FIT_T-SHIRT-JET_BLACK_2_cdd4198a-4055-42e8-8b51-38969403ff6d_x800.jpg?v=1740108514",
      marca: "Essentials",
      nombre: "Classic Short Sleeve Tee",
      precio: 90,
    },
    {
      id: 4,
      img: "https://fearofgod.com/cdn/shop/files/125AS254201F_CLASSIC_FIT_LS_T-SHIRT-HOMESTEAD_HEATHER_1_372c15a5-1ab8-4174-a135-73978af1f43d_900x.jpg?v=1740108347",
      imgBack: "https://fearofgod.com/cdn/shop/files/125AS254201F_CLASSIC_FIT_LS_T-SHIRT-HOMESTEAD_HEATHER_2_91a39336-21be-4352-b9ad-94a3c8a04b01_x800.jpg?v=1740108347",
      marca: "Essentials",
      nombre: "Classic Long Sleeve Tee",
      precio: 94,
    },
    {
      id: 5,
      img: "https://fearofgod.com/cdn/shop/files/125AS254191F_CLASSIC_FIT_T-SHIRT-HOMESTEAD_HEATHER_1_900x.jpg?v=1740108394",
      imgBack: "https://fearofgod.com/cdn/shop/files/125AS254191F_CLASSIC_FIT_T-SHIRT-HOMESTEAD_HEATHER_2_x800.jpg?v=1740108394",
      marca: "Essentials",
      nombre: "Classic Short Sleeve Tee",
      precio: 96,
    },
    {
      id: 6,
      img: "https://fearofgod.com/cdn/shop/files/192AS254781F_CLASSIC_FIT_FLEECE_ZIP-UP_HOODIE-HOMESTEAD_HEATHER_1_ab249cad-9479-4a4b-a4af-a52e159984a5_900x.jpg?v=1740107970",
      imgBack: "https://fearofgod.com/cdn/shop/files/192AS254781F_CLASSIC_FIT_FLEECE_ZIP-UP_HOODIE-HOMESTEAD_HEATHER_2_7395746e-e9ee-403f-a9e4-ead3a383fcb2_x800.jpg?v=1740107970",
      marca: "Essentials",
      nombre: "Classic Full Zip-Up Hoodie",
      precio: 116,
    },
    {
      id: 7,
      img: "https://cdn.shopify.com/s/files/1/1003/3354/files/192AL246501F_NBA_ESSENTIALS_HOODIE-BLACK_BLACK_1.jpg?v=1738178845",
      imgBack: "https://fearofgod.com/cdn/shop/files/29_900x.jpg?v=1738621794",
      marca: "Essentials",
      nombre: "Essentials NBA Hoodie",
      precio: 129,
    },
    {
      id: 8,
      img: "https://cdn.shopify.com/s/files/1/1003/3354/files/192AL246500F_NBA_ESSENTIALS_HOODIE-WARM_HEATHER_BLACK_1.jpg?v=1738178755",
      imgBack: "https://fearofgod.com/cdn/shop/files/18_900x.jpg?v=1738621603",
      marca: "Essentials",
      nombre: "Essentials NBA Hoodie",
      precio: 131,
    },
    {
      id: 9,
      img: "https://fearofgod.com/cdn/shop/files/AB7C6876-A51C-4A87-926D-E94BF0D62456_900x.jpg?v=1732042077",
      imgBack: "https://fearofgod.com/cdn/shop/files/Essentials_HO24_NBAKnicks01_0029_2_copy-3-4crop_900x.jpg?v=1732044256",
      marca: "Essentials",
      nombre: "Essentials NBA Hoodie",
      precio: 135,
    },

    {
      id: 10,

      imgBack: "https://fearofgod.com/cdn/shop/files/2_900x.jpg?v=1738624044",
      img: "https://fearofgod.com/cdn/shop/files/ED8F8904-A38F-4ED6-9B61-7FC0777BCFEC_900x.jpg?v=1738624044",
      marca: "Essentials",
      nombre: "Essentials Lakers Hoodie",
      precio: 135,
    },
    {
      id: 11,
      img: "https://fearofgod.com/cdn/shop/files/192AL246303F_CELTICS_ESSENTIALS_HOODIE-LIGHT_HEATHER-GREEN_1_900x.jpg?v=1738624142",
      imgBack: "https://fearofgod.com/cdn/shop/files/5_575b3f81-c82b-44ff-bb0d-604af4993c40_900x.jpg?v=1738624142",
      marca: "Essentials",
      nombre: "Essentials Celtics Hoodie",
      precio: 125,
    },
    {
      id: 12,
      img: "https://fearofgod.com/cdn/shop/files/192AL246507F_WOLVES_HOODIE-BLUE_WARM_HEATHER_1_900x.jpg?v=1738621984",
      imgBack: "https://fearofgod.com/cdn/shop/files/9_900x.jpg?v=1738621984",
      marca: "Essentials",
      nombre: "Essentials Wolves Hoodie",
      precio: 115,
    },
    {
      id: 13,
      img: "https://fearofgod.com/cdn/shop/files/192SP255090FW_WOMENS_CLASSIC_FIT_ZIP-UP_HOODIE-CLOUD_WHITE_1_900x.jpg?v=1747366247",
      imgBack: "https://fearofgod.com/cdn/shop/files/192SP255090FW_WOMENS_CLASSIC_FIT_ZIP-UP_HOODIE-CLOUD_WHITE_2_x800.jpg?v=1747366247",
      marca: "Essentials",
      nombre: "Womens Zip-Up Hoodie",
      precio: 105,
    },
    {
      id: 14,
      img: "https://fearofgod.com/cdn/shop/files/130SP255440FW_WOMENS_CLASSIC_SWEATPANT-CLOUD_WHITE_1_900x.jpg?v=1747329161",
      imgBack: "https://fearofgod.com/cdn/shop/files/130SP255440FW_WOMENS_CLASSIC_SWEATPANT-CLOUD_WHITE_2_x800.jpg?v=1747329161",
      marca: "Essentials",
      nombre: "Womens Classic Sweatpant",
      precio: 105,
    },
    {
      id: 15,
      img: "https://fearofgod.com/cdn/shop/files/125SP255860FW_WOMENS_CLASSIC_FIT_TEE-CLOUD_WHITE_1_900x.jpg?v=1747329059",
      imgBack: "https://fearofgod.com/cdn/shop/files/125SP255860FW_WOMENS_CLASSIC_FIT_TEE-CLOUD_WHITE_2_x800.jpg?v=1747329059",
      marca: "Essentials",
      nombre: "Womens Classic tee",
      precio: 95,
    },
    {
      id: 16,
      img: "https://fearofgod.com/cdn/shop/files/202HO245400FW_BRUSHED_HOODED_BOMBER-BROWN_1_x800.jpg?v=1731428744",
      imgBack: "https://fearofgod.com/cdn/shop/files/202HO245400FW_BRUSHED_HOODED_BOMBER-BROWN_2_900x.jpg?v=1731428745",
      marca: "Essentials",
      nombre: "Women's Brushed Hooded Bomber",
      precio: 125,
    },
    {
      id: 17,
      img: "https://fearofgod.com/cdn/shop/files/202HO245400FW_BRUSHED_HOODED_BOMBER-BLACK_1_x800.jpg?v=1731431198",
      imgBack: "https://fearofgod.com/cdn/shop/files/202HO245400FW_BRUSHED_HOODED_BOMBER-BLACK_2_900x.jpg?v=1731431197",
      marca: "Essentials",
      nombre: "Women's Brushed Hooded Bomber",
      precio: 130,
    },
    {
      id: 18,
      img: "https://fearofgod.com/cdn/shop/files/202HO245295FW_MILITARY_NYLON_BOMBER_JACKET-BROWN_1_x800.jpg?v=1731375638",
      imgBack: "https://fearofgod.com/cdn/shop/files/202HO245295FW_MILITARY_NYLON_BOMBER_JACKET-BROWN_2_900x.jpg?v=1731375638",
      marca: "Essentials",
      nombre: "Women's Nylon Bomber Jacket",
      precio: 105,
    },

  ];

 constructor(private carritoService: CarritoService,
    private favoritosService: FavoritosService
  ) { }

  agregarAlcarrito(producto: Producto) {
    this.carritoService.agregarAlcarrito(producto)
    alert("Producto agregado al carrito")
  }

  agregarr(producto: Producto) {
    this.favoritosService.agregarAlfavoritos(producto)
    alert("Producto agregado a favoritos")
  }

}


