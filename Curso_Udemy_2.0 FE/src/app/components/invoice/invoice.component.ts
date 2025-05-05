import { Component, OnInit } from '@angular/core'; import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { ClientViewComponent } from '../client-view/client-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { ListItemsComponent } from '../list-items/list-items.component';
import { CommonModule } from '@angular/common';
import { TotalComponent } from '../total/total.component';
import { Item } from '../../models/item';
import { FormItemComponent } from '../form-item/form-item.component';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [
    InvoiceViewComponent, 
    ClientViewComponent, 
    CompanyViewComponent, 
    ListItemsComponent, 
    CommonModule,
    TotalComponent,
    FormItemComponent],
  templateUrl: './invoice.component.html',
})
export class InvoiceComponent implements OnInit {
  invoice!: Invoice;

  constructor(private invoiceService: InvoiceService) {
  }

  ngOnInit(): void {
    this.invoice = this.invoiceService.getInvoice();
  }

  removeItem(id: number) {
    this.invoice = this.invoiceService.removeItem(id);
  }

  addItem(item: Item) {
    this.invoice = this.invoiceService.saveItem(item);
  }
  
}
