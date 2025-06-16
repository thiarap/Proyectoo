
export interface Producto {
  id: number;
  nombre: string;
  img: string;
  imgBack: string;
  marca: string;
  precio: number;

  // Propiedades opcionales
  descripcion?: string;
  disponible?: boolean;
}
