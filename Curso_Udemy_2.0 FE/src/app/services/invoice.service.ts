import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoiceData } from '../data/invoice.data';
import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  path = 'http://localhost:5000/calcular-media';
  private invoice: Invoice = invoiceData;

  constructor(private httpClient: HttpClient) { }

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

  removeItem(id: number): Invoice{
    // modificamos el array de items
    this.invoice.items = this.invoice.items.filter(item => item.id != id);
    //recalculamos
    const total = this.calculatetotal();
    //clonamos
    return {... this.invoice, total};
  }

  saveItem(item: Item): Invoice{
    //agregar item
    this.invoice.items = [...this.invoice.items, item]
    //recalculamos
    const total = this.calculatetotal();
    //clonamos 
    return {... this.invoice, total};

  }

  public calcMean(formData: FormData):Observable<any>  {
    return this.httpClient.post<any>(this.path, formData);
  }
}
