import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { HttpClientModule } from '@angular/common/http';
import { InvoiceService } from './services/invoice.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    CommonModule, 
    InvoiceComponent,   
    HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Curso_Udemy_2.0';
  constructor(private invoiceService: InvoiceService) {}
}
