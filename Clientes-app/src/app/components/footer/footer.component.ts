import { Component } from '@angular/core';

@Component({
  selector: 'footer-comp',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  autor: any = {nombre: 'Gabriel', apellido: 'Mamani'};

}
