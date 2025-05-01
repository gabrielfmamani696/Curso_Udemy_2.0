import { Component, Input } from '@angular/core';

@Component({
  selector: 'invoice-view',
  standalone: true,
  imports: [],
  templateUrl: './invoice-view.component.html',
})
export class InvoiceViewComponent {

  // Como se los pasa el padre al hijo:
  @Input() name!:string;
  @Input() id!:number;

}
