import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoiceData } from '../data/invoice.data';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private invoice: Invoice = invoiceData;

  constructor() { }

  getInvoice(): Invoice{
    const total = this.calculatetotal();
    return {...this.invoice, total};
  }

  calculatetotal(): number {
    // let total = 0;
    
    // this.invoice.items.forEach(item => {
    //   total += item.total();
    // });
    // return total;

    //forma 2

    // return this.invoice.items.reduce((total, itemi)=>total + itemi.total(), 0)

    
    let total = 0;
    this.invoice.items.forEach(item => total += (item.price * item.quantity));
    return total;

    
  }
}
