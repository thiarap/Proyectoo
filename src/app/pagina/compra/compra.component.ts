import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CarritoService } from '../../servicios/carrito.service';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';
import jsPDF from 'jspdf';



@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.css'
})
export class CompraComponent implements OnInit {
  //variable para almacenar el total de la compra (subtotal+ anevio)
  formularioCompra!: FormGroup;

  //variable para almacenar el total de la compra
  total!: number;

  //costo fijo 
  envio = 1500;

  //indicador para saber si la factura fue generada
  facturaGenerada = false;

  //objeto que contiene la informacion de la factura genegerada
  factura: any
  //controla la visibilidad de modal que muestra el pdf
  mostrarModal = false;

  //fuentre segura para mostrar el PDF generado en el iframe(URL sanitizada)
  pdfSrc: SafeResourceUrl | undefined;

  constructor(
    private fb: FormBuilder,
    private carritoService: CarritoService,
    private sanitizer: DomSanitizer
  ) { }
  //Metodo que se ejecuta al iniciarel componente
  ngOnInit(): void {
    //formulario con los campos requeridos
    this.formularioCompra = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
      codigoPostal: ['', Validators.required],
      ciudad: ['', Validators.required],
      provincia: ['', Validators.required],
      metodoPago: ['', Validators.required],
    })
  }
  //calcular el total de la compra sumando el subtotal y el costo de envio
  calcularTotal(): number {
    const subtotal = this.carritoService.obtenerTotal();//obtiene subtotal del carrito
    this.total = subtotal + this.envio;
    return this.total
  }

  emitirFactura(): void {
    const datosCliente = this.formularioCompra.value;
    const productos = this.carritoService.obtenerProductos();
    const totalFinal = this.calcularTotal();

    this.factura = {
      cliente: datosCliente,
      productos: productos,
      envio: this.envio,
      total: totalFinal,
      fecha: new Date()
    }
    this.facturaGenerada = true
  }
  //metodoq ue se ejecuta al fionalizar la compra (click boton)
  //verifica validez al formulario, genera 
  finalizarCompra(): void {
    if (this.formularioCompra.valid) {
      this.emitirFactura(); //crear la factura
      this.generarPDFMoldal();//genera y muestra el pdf(ticket)

    } else {
      this.formularioCompra.markAllAsTouched(); //marca todos los campos tocados para mostrar errores
    }
  }
  //genra pdf con jsPDF y crea la url para mostrar el iframe dentro del modal
  generarPDFMoldal(): void {
    if (this.factura) return;//si no hay factura no hace nad
    const doc = new jsPDF();//crea instancia al pdf
    //agrega titulo9 y fecha al pdf
    doc.setFontSize(18)
    doc.text("factura de compra", 14, 20);
    doc.setFontSize(12);
    doc.text(`Fecha: ${this.factura.fecha.toLocaleString()}`, 14, 30)

    //informacion del cliente
    doc.text('cliente', 14, 40);
    const c = this.factura.cliente;
    doc.text(`Nombre: ${c.nombre}`, 20, 50);
    doc.text(`Dirección: ${c.nombre}`, 20, 60);
    doc.text(`Correo: ${c.nombre}`, 20, 70);
    doc.text(`Telefono: ${c.nombre}`, 20, 80);
    doc.text(`Ciudad: ${c.nombre}`, 20, 90);
    doc.text(`Provincia: ${c.nombre}`, 20, 100);
    doc.text(`Código Postal: ${c.nombre}`, 20, 110);

    //listado de productos con calidad, precio y subtotal
    let y = 120
    doc.text('Productos', 14, y);
    this.factura.productos.forEach((item: any, index: number) => {
      y += 10;
      doc.text(

        `${index + 1}.${item.producto.nombre}- Cantidad: ${item.Cantidad}- precio: $${item.producto.precio.toFixed(2)} - subtotal: $${(item.producto.precio * item.Cantidad).toFixed(2)}`, 20, y);

    });
    //costos finales
    y += 10;
    doc.text(`Costos de Envio: $${this.factura.envio.toFixed(2)}`, 14, y);
    y += 10;
    doc.text(`Total a Pagar: $${this.factura.envio.toFixed(2)}`, 14, y);

    const pdfBlob = doc.output('blob');
    this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(pdfBlob))

    //abre el modal que contiene el PDF
    this.mostrarModal = true;
  }
  //metodo para cerrar el modal y libberal el url del pdf para evitar fugas de memoria
  cerrarModal(): void {
    this.mostrarModal = false

    if (this.pdfSrc) {
      URL.revokeObjectURL((this.pdfSrc as any).changingThisBreaksApplicationSecurity)
      this.pdfSrc = undefined;
    }
  }

  imprimirPDF(): void {
    //obtiene la referencia al elementeo iframe del dom mediante su ID 'pdfFrame'
    //puede devolver null si no encuntra el elemento
    const iframe: HTMLIFrameElement | null = document.getElementById('pdfFrame') as HTMLIFrameElement

    //verifica que el iframe exista y que tenga un objeto
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.focus();

      //llama al metodo print() de la ventana del iframe para abrir la ventana de  la impresion del navegador
      iframe.contentWindow.focus();
    }
  }
}


