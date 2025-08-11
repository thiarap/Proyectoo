
export interface Producto {
  id: number;
  nombre: string;
  img: string;
  imgBack: string;
  marca: string;
  precio: number;
  categoria?: string;
  
  

  // Propiedades opcionales
  descripcion?: string;
  disponibilidad?: boolean;
}
