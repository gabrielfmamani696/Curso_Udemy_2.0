import { Component } from '@angular/core';

@Component({
  selector: 'directiva-comp',
  standalone: true,
  imports: [],
  templateUrl: './directiva.component.html',
})
export class DirectivaComponent {
  listaCurso: string[] = ['Ts','Js','C#','C++'];
  habilitar: boolean = true;
  constructor() {}

  setHabilitar(): void {
    this.habilitar = !this.habilitar;
    //Creo que es mejor una funcion, pues puede que se quiera usar este valor en otros lugares
  }
}
