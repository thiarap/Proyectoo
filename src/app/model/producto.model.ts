export interface Producto{
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    imagen: string;
    imgBack:string
    disponible: boolean;
    cantidad?: number;
}