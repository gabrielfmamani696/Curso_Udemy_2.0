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
import { Subject, takeUntil } from 'rxjs';

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
  // common
  private unsubscribe$ = new Subject<void>();
  public contexto = "TipoMantDiagCat";

  // para la media
  selectedFile: File | null = null;
  media: number | null = null;
  suma!: number;
  mediapob!: number;

  // para el inovice
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
  
  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.selectedFile = file;
  }
  
  uploadFile() {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.invoiceService.calcMean(formData)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe({
      next: (data) => {
        this.media = data.media;
        this.suma = data.media;
        this.mediapob = data.media;
      },
      error: (e) => {
        console.error(e);
      },
    });
  }
}
