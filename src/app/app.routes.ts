import { Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { ProductoComponent } from './pagina/producto/producto.component';
import { CarritoComponent } from './pagina/carrito/carrito.component';
import { NosotrosComponent } from './pagina/nosotros/nosotros.component';
import { OfertasComponent } from './pagina/ofertas/ofertas.component';
import { ContactoComponent } from './pagina/contacto/contacto.component';
import { CompraComponent } from './pagina/compra/compra.component';
import { FavoritosComponent } from './pagina/favoritos/favoritos.component';


export const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'producto', component: ProductoComponent },
    { path: 'carrito', component: CarritoComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'ofertas', component: OfertasComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'compra', component: CompraComponent },
    { path: 'favoritos', component: FavoritosComponent }
];

