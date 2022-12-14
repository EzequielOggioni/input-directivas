import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styles: []
})
export class PadreComponent implements OnInit {

  // Esta variable se asociara en el HTML al input del Hijo.
  valorPasarAlHijo = '';
  public hijos :Array<string> = ['Lara','Mateo','Maria','Juan'];


  // En esta variable se recoge el valor emitido por el Hijo.
  valorHijo = '';
  constructor() { }

  ngOnInit() {
  }

  // Controlamos el evento generado por el hijo donde se envian los datos.
  controlarCambioHijo( $event :string) {
    console.log('Datos evento en Padre ' + $event );
    this.valorHijo = $event;
  }

}
