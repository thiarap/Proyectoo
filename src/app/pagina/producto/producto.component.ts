import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { CarritoService } from '../../servicios/carrito.service';
import { Producto } from '../../model/producto.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-producto',
  imports: [RouterModule, CommonModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})

export class ProductoComponent {
  productos = [
    {
      id: 1,
      img: "https://fearofgod.com/cdn/shop/files/FG2E20-2041_HEATHERBEIGE_FINEKNITHENLEY_2_x800.jpg?v=1736797442",
      imgBack: "https://fearofgod.com/cdn/shop/files/FG2E20-2041_HEATHERBEIGE_FINEKNITHENLEY_2_900x.jpg?v=1736797442",
      marca: "Fear of god",
      nombre: "Fine Knit Henley",
      precio: 105,
    },
    {
      id: 2,
      img: "https://fearofgod.com/cdn/shop/files/FG2E20-2031_HEATHERBEIGE_ETERNALKNITHOODIE_1_1b521ebd-423d-4e65-baee-b05b06a48cf8_900x.jpg?v=1733870714",
      imgBack: "https://fearofgod.com/cdn/shop/files/FG2E20-2031_HEATHERBEIGE_ETERNALKNITHOODIE_2_a54bb390-1552-4186-8914-d9c888841b78_900x.jpg?v=1733870714",
      marca: "Fear of god",
      nombre: "Eternal Merino Knit Hoodie",
      precio: 190,
    },
    {
      id: 3,
      img: "https://fearofgod.com/cdn/shop/files/FGE230-330DWC_OVERSHIRT_DUSTYBEIGE_1_1_900x.jpg?v=1733869351",
      imgBack: "https://fearofgod.com/cdn/shop/files/FGE230-330DWC_OVERSHIRT_DUSTYBEIGE_2_1_900x.jpg?v=1733869351",
      marca: "Fear of god",
      nombre: "Wool Cashmere Overshirt",
      precio: 3,
    },
    {
      id: 4,
      img: "https://fearofgod.com/cdn/shop/files/FGE250-5141FLC_ETERNALCREWNECK_DUSTYBEIGE_1_900x.jpg?v=1740422837",
      imgBack: "https://fearofgod.com/cdn/shop/files/FGE250-5141FLC_ETERNALCREWNECK_DUSTYBEIGE_2_x800.jpg?v=1740422837",
      marca: "Fear of god",
      nombre: "Eternal Crewneck",
      precio: 199,
    },
    {
      id: 5,
      img: "https://fearofgod.com/cdn/shop/files/FGE250-51211FLC_ETERNALHOODIE_DOVEGREY_1copy_900x.jpg?v=1740438047",
      imgBack: "https://fearofgod.com/cdn/shop/files/FGE250-51211FLC_ETERNALHOODIE_DOVEGREY_2_2e9545eb-3085-4558-9aa9-59894d2cb0b9_x800.jpg?v=1740438047",
      marca: "Fear of god",
      nombre: "Eternal Hoodie",
      precio: 205,
    },
    {
      id: 6,
      img: "https://fearofgod.com/cdn/shop/files/FGE240-4161FLC_SWEATPANT_DUSTYBIEGE_1_7ab5dd02-533b-4f2b-922b-1870448a441b_900x.jpg?v=1740434249",
      imgBack: "https://fearofgod.com/cdn/shop/files/FGE240-4161FLC_SWEATPANT_DUSTYBIEGE_2_98f5700a-5766-49ac-b1f3-ce47488efa94_900x.jpg?v=1740434249",
      marca: "Fear of god",
      nombre: "Eternal Sweatpant",
      precio: 90,
    },
    {
      id: 7,
      img: "https://fearofgod.com/cdn/shop/files/FGE240-408DNM_5POCKETSTRAIGHTLEG_REPAIREDINDIGO_1_900x.jpg?v=1738104824",
      imgBack: "https://fearofgod.com/cdn/shop/files/FGE240-408DNM_5POCKETSTRAIGHTLEG_REPAIREDINDIGO_2_900x.jpg?v=1738104824",
      marca: "Fear of god",
      nombre: "Repaired Classic 5 Pocket",
      precio: 3,
    },
    {
      id: 8,
      img: "https://fearofgod.com/cdn/shop/files/FG2E30-318_INDIGO2_DENIMTRUCKERJACKET_1_900x.jpg?v=1736876863",
      imgBack: "https://fearofgod.com/cdn/shop/files/FG2E30-318_INDIGO2_DENIMTRUCKERJACKET_2_900x.jpg?v=1736876863",
      marca: "Fear of god",
      nombre: "Denim Trucker Jacket",
      precio: 3,
    },
    {
      id: 9,
      img: "https://fearofgod.com/cdn/shop/files/785BT246770K_DENIM_TRUCKER_JACKET-VINTAGE_BLUE_1_900x.jpg?v=1726609834",
      imgBack: "https://fearofgod.com/cdn/shop/files/785BT246770K_DENIM_TRUCKER_JACKET-VINTAGE_BLUE_2_x800.jpg?v=1726609834",
      marca: "Fear of god",
      nombre: "Kids Denim Trucker Jacket",
      precio: 80,
    },

    {
      id: 10,
      img: "https://fearofgod.com/cdn/shop/files/FG2E50-51311_BLACK_ETERNALHALFZIPHOODIE_1_900x.jpg?v=1740426583",
      imgBack: "https://fearofgod.com/cdn/shop/files/FG2E50-51311_BLACK_ETERNALHALFZIPHOODIE_2_x800.jpg?v=1740426583",
      marca: "Fear of god",
      nombre: "Eternal Half Zip Hoodie",
      precio: 80,
    },
    {
      id: 11,
      img: "https://cdn.shopify.com/s/files/1/1003/3354/files/FG24FW30-607NUB_LEATHER_HOODED_BOMBER-BLACK_1.jpg?v=1725986691",
      imgBack: "https://fearofgod.com/cdn/shop/files/FG24FW30-607NUB_LEATHER_HOODED_BOMBER-BLACK_2_x800.jpg?v=1725986692",
      marca: "Fear of god",
      nombre: "Leather Hooded Bomber",
      precio: 80,
    },
    {
      id: 12,
      img: "https://cdn.shopify.com/s/files/1/1003/3354/files/FG24FW50-1011FLC_HALF_ZIP_MOCKNECK_BLACK_1.jpg?v=1721836864",
      imgBack: "https://fearofgod.com/cdn/shop/files/FG24FW50-1011FLC_HALF_ZIP_MOCKNECK_BLACK_2_x800.jpg?v=1721836864",
      marca: "Fear of god",
      nombre: "Fleece Half Zip Mockneck",
      precio: 80,
    },
    {
      id: 13,
      img: "https://fearofgod.com/cdn/shop/files/FGE230-330DWC_OVERSHIRT_BLACK_1_x800.jpg?v=1733876887",
      imgBack: "https://fearofgod.com/cdn/shop/files/FGE230-330DWC_OVERSHIRT_BLACK_2_900x.jpg?v=1733876887",
      marca: "Fear of god",
      nombre: "Wool Cashmere black Overshirt",
      precio: 80,
    },
    {
      id: 14,
      img: "https://fearofgod.com/cdn/shop/files/FG2E30-300_BLACK_LAPELLESSRELAXEDCOAT_1_x800.jpg?v=1733879921",
      imgBack: "https://fearofgod.com/cdn/shop/files/FG2E30-300_BLACK_LAPELLESSRELAXEDCOAT_3_900x.jpg?v=1733879921",
      marca: "Fear of god",
      nombre: "Boiled Wool Lapelless Relaxed Coat",
      precio: 80,
    },
    {
      id: 15,
      img: "https://fearofgod.com/cdn/shop/files/FG2E60-6031_CHARCOAL_RELAXEDLAPELLESSBLAZER_1_x800.jpg?v=1733885173",
      imgBack: "https://fearofgod.com/cdn/shop/files/FG2E60-6031_CHARCOAL_RELAXEDLAPELLESSBLAZER_2_900x.jpg?v=1733885173",
      marca: "Fear of god",
      nombre: "Wool Cashmere Relaxed Lapelless Blazer",
      precio: 80,
    },
    {
      id: 16,
      img: "https://fearofgod.com/cdn/shop/files/FGE250-51211FLC_ETERNALHOODIE_DOVEGREY_1_x800.jpg?v=1740442252",
      imgBack: "https://fearofgod.com/cdn/shop/files/FGE250-5141FLC_ETERNALCREWNECK_DOVEGREY_2_x800.jpg?v=1740423011",
      marca: "Fear of god",
      nombre: "Eternal Hoddie",
      precio: 80,
    },
    {
      id: 17,
      img: "https://fearofgod.com/cdn/shop/files/FGE250-5101HWJ_ETERNALTEE_WHITE_1copy_900x.jpg?v=1737043510",
      imgBack: "https://fearofgod.com/cdn/shop/files/FGE250-5101HWJ_ETERNALTEE_WHITE_2copy_x800.jpg?v=1737043510",
      marca: "Fear of god",
      nombre: "Eternal Jersey Tee",
      precio: 80,
    },
    {
      id: 18,
      img: "https://fearofgod.com/cdn/shop/files/FGE250-5111HWJ_ETERNALLONGSLEEVETEE_DOVEGREY_1_900x.jpg?v=1740425688",
      imgBack: "https://fearofgod.com/cdn/shop/files/FGE250-5111HWJ_ETERNALLONGSLEEVETEE_DOVEGREY_2_x800.jpg?v=1740425688",
      marca: "Fear of god",
      nombre: "Eternal Long Sleeve Tee",
      precio: 80,
    },
    {
      id: 19,
      img: "https://fearofgod.com/cdn/shop/files/FG2E30-318_BLACK_DENIMTRUCKERJACKET_1_900x.jpg?v=1737060772",
      imgBack: "https://fearofgod.com/cdn/shop/files/FG2E30-318_BLACK_DENIMTRUCKERJACKET_2_x800.jpg?v=1737060772",
      marca: "Fear of god",
      nombre: "Denim Trucker Jacket",
      precio: 80,
    },
    {
      id: 20,
      img: "https://fearofgod.com/cdn/shop/files/FGE250-51211FLC_ETERNALHOODIE_BLACK_1_900x.jpg?v=1740426420",
      imgBack: "https://fearofgod.com/cdn/shop/files/FG2E20-2031_BLACK_ETERNALKNITHOODIE_2_900x.jpg?v=1733792594",
      marca: "Fear of god",
      nombre: "Eternal Hoddie",
      precio: 80,
    },
    {
      id: 21,
      img: "https://fearofgod.com/cdn/shop/files/FG2E40-408_BLACK_STRAIGHT5POCKET_1_900x.jpg?v=1737072149",
      imgBack: "https://fearofgod.com/cdn/shop/files/FG2E40-408_BLACK_STRAIGHT5POCKET_2_900x.jpg?v=1737072149",
      marca: "Fear of god",
      nombre: "Classic 5 Pocket",
      precio: 80,
    },
  ];
  
constructor(private carritoService: CarritoService) {}
 agregarcarrito(producto: Producto) {
  this.carritoService.agregarAlcarrito(producto)
  alert("Producto agregado al carrito")
}

}

/* CARRITO*/



/* agregarr(producto: Producto) {
   this.favoritosService.agregarAlfavoritos(producto)
   alert("Producto agregado a favoritos")
 }
*/
